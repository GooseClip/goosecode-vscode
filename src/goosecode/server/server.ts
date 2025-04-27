import * as vscode from "vscode";
import * as express from "express";
import * as expressWs from "express-ws";
import { RawData, WebSocket } from "ws";
import { handleGetFilesRequest } from "./handlers/get-files";
import { handleGoToDefinition } from "./handlers/go-to";
import { convertBodyToProtoMiddleware } from "./middleware/proto-binary";


import { ApiError } from "../errors";
import { CodeSourceID, GooseCodeExtensionConfig } from "../../config";
import * as https from "https";
import { Server } from "https";
import { authMiddleware } from "./middleware/auth";

import { Workspace, WorkspaceTracker } from "../../workspace-tracker";

import { goosecode } from "../../proto/ide/ide";

import RequestMessage = goosecode.v2.app.source.ide.RequestMessage;
import PushType = goosecode.v2.app.source.ide.PushType;
import WorkspacesPush = goosecode.v2.app.source.ide.WorkspacesPush;
import WorkspaceDetails = goosecode.v2.app.source.ide.WorkspaceDetails;
import PushMessage = goosecode.v2.app.source.ide.PushMessage;
import ResponseMessage = goosecode.v2.app.source.ide.ResponseMessage;
import ErrorResponse = goosecode.v2.app.source.ide.ErrorResponse;
import VersionControlInfo = goosecode.v2.app.source.ide.VersionControlInfo;
import ResponseType = goosecode.v2.app.source.ide.ResponseType;
import { getGitInfoFromVscodeApi } from "../../git";

export class GooseCodeServer {
  constructor(
    private readonly workspaceTracker: WorkspaceTracker,
    private readonly extensionConfig: GooseCodeExtensionConfig,
    private readonly onConnected: () => void,
    private readonly onClosed: () => void,
  ) { }

  public websocket: WebSocket | null = null;
  public server: Server | null = null;

  public get connected(): boolean {
    return this.websocket !== null;
  }

  public async push(msg: PushMessage) {
    if (this.websocket === null) {
      console.error("Websocket is not connected");
      return;
    }

    console.log("[PUSH]", msg.type);
    if (msg.type === PushType.PUSH_FILE_COMMAND) {
      const activeWorkspace =
        this.workspaceTracker.getLastActiveGooseCodeWorkspace();
      if (!activeWorkspace) {
        console.error("[PUSH]", "No active workspace found");
        return;
      }

      // Inject the workspace root so GooseCode can automatically associate the connection
      msg.file_command.workspace_root = activeWorkspace.uri.fsPath;


      // Time the request
      const startTime = Date.now();
      
      const gitInfo = await getGitInfoFromVscodeApi(
        vscode.Uri.file(this.workspaceTracker.currentFilePath()),
      );

      const endTime = Date.now();

      console.log(`Workspace: ${activeWorkspace.uri.fsPath}`);
      console.log(`Git info: ${JSON.stringify(gitInfo)}`);
      console.log(`Time taken: ${endTime - startTime}ms`);
      msg.file_command.version_control = new VersionControlInfo({
        repository_fullname: gitInfo?.repositoryFullName ?? "",
        branch: gitInfo?.branch ?? "",
        commit: gitInfo?.commit ?? "",
        // staged_files: [],
        // unstaged_files: [],
      });
      // msg.file_command.code_source_id = activeWorkspace.codeSourceID!;
    }
    this.websocket.send(msg.serializeBinary());
  }

  private send(res: express.Response, msg: ResponseMessage) {
    res.setHeader("Content-Type", "application/octet-stream");
    const buffer = Buffer.from(msg.serializeBinary());
    res.send(buffer);
  }

  public stop() {
    this.websocket?.close();
    this.server?.close(() => {
      // console.log("HTTP server stopped");
    });
  }

  public async start() {
    if (this.server !== null) {
      console.error("Server already started");
      return;
    }
    // Establish server and websocket connection
    const app = express();
    this.server = https.createServer(this.extensionConfig.tlsOptions, app);
    const wsApp = expressWs(app as any, this.server!);

    app.use(express.raw({ type: "application/octet-stream" }));
    app.use(convertBodyToProtoMiddleware);
    app.use((r, q, n) =>
      authMiddleware(r, q, n, this.extensionConfig.settings.password),
    );

    app.post(
      "/files-get",
      async (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction,
      ) => {
        const request: RequestMessage = req.body as RequestMessage;
        console.log(
          `Get files: ${request.repository_snapshot_fingerprint} ${request.get_files_request.file_paths}`,
        );
        try {
          const workspace = this.workspaceTracker.getWorkspaceFromCodeSourceID(
            request.repository_snapshot_fingerprint,
          );
          if (workspace === null) {
            throw new ApiError("Workspace not found", 422);
          }

          await handleGetFilesRequest(request, workspace!.uri!, (m) =>
            this.send(res, m),
          );
        } catch (e) {
          next(e);
        }
      },
    );

    app.post(
      "/go-to-definition",
      async (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction,
      ) => {
        console.log("GO TO DEFINITION REQUEST");
        try {
          const request: RequestMessage = req.body as RequestMessage;
          const workspace = this.workspaceTracker.getWorkspaceFromCodeSourceID(
            request.repository_snapshot_fingerprint,
          );
          await handleGoToDefinition(req.body, workspace!.uri!, (m) =>
            this.send(res, m),
          );
        } catch (e) {
          next(e);
        }
      },
    );

    // Start a websocket server
    wsApp.app.ws("/connect", (socket, req) => {
      if (
        req.headers.authorization !== this.extensionConfig.settings.password
      ) {
        console.error("Unauthorized websocket connection");
        socket.close(3000);
        return;
      }

      this.websocket = socket;

      this.onConnected();
      socket.on("message", (message: RawData) => {
        console.log("Extension: Received message on websocket...");
        console.error("Received non-string message data", message);
      });

      socket.on("close", (code, reason) => {
        this.websocket = null;
        this.onClosed();
        console.log(
          "WebSocket connection closed, code:",
          code,
          "reason:",
          reason,
        );
      });

      socket.on("error", (error) => {
        console.error("WebSocket error:", error);
      });

      const workspaces = this.workspaceTracker.refresh();
      // After delay, send refresh
      setTimeout(() => {
        this.pushWorkspacesToGooseCode(workspaces);
      }, 1000);
    });

    app.use(
      (
        err: Error,
        req: express.Request,
        res: express.Response,
        next: express.NextFunction,
      ) => {
        vscode.window.showErrorMessage(`Error: ${err.message}`);
        console.error(err.message); // Log the full error stack for server-side debugging.
        console.log(err.stack); // Log the full error stack for server-side debugging.
        if (err instanceof ApiError) {
          this.send(
            res,
            new ResponseMessage({
              type: ResponseType.RESPONSE_ERROR,
              error_response: new ErrorResponse({
                error: err.message,
              }),
            }),
          );
        } else {
          res.status(500).json({
            error: "Internal Server Error",
            message: "An unexpected error occurred", // Generic message for the client
            detail: err.message, // Optionally, provide the error message for client-side debugging (consider security implications).
          });
        }
      },
    );

    const port = this.extensionConfig.settings.port;
    const ip = this.extensionConfig.settings.localhostOnly
      ? "127.0.0.1"
      : "0.0.0.0";

    // Serve the server
    this.server!.listen(port, ip, () => {
      console.log(`Listening on ${ip}:${port}`);
    });
  }

  public pushWorkspacesToGooseCode(
    workspaces: Workspace[],
    deleted?: WorkspaceDetails,
  ) {
    const toSend: WorkspaceDetails[] = [];

    if (workspaces) {
      for (const workspace of workspaces) {
        toSend.push(new WorkspaceDetails({
          workspace_root: workspace.uri.fsPath,
          repository_snapshot_fingerprint: workspace.config!.config.code_source_id,
          deleted: false,
        }));
      }
    }

    if (deleted) {
      toSend.push(deleted);
    }

    this.push(
      new PushMessage({
        type: PushType.PUSH_WORKSPACES,
        workspaces: new WorkspacesPush({
          workspaces: [...toSend.map((root) => new WorkspaceDetails(root))],
        }),
      }),
    );
  }
}

// type RefreshWorkspace = {
//   workspace_root: string;
//   repository_snapshot_fingerprint: CodeSourceID;
//   deleted: boolean;
// };
