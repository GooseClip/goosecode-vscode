import * as vscode from "vscode";
import * as express from "express";
import * as expressWs from "express-ws";
import { RawData, WebSocket } from "ws";
import { handleListFilesRequest } from "./handlers/list-files";
import { handleGetFilesRequest } from "./handlers/get-files";
import { handleOpenFilesRequest } from "./handlers/open-files";
import { handleFindRequest } from "./handlers/find";
import { handleSelectRange } from "./handlers/select-range";
import { handleDescribeRange } from "./handlers/describe-range";
import { handleGoToDefinition } from "./handlers/go-to";
import { handleRename } from "./handlers/rename";
import { handleFindUses } from "./handlers/find-uses";
import { convertBodyToProtoMiddleware } from "./middleware/proto-binary";
import { getProjectRoot } from "../commands/commands";
import { idepb } from "../../proto/idepb/ide";
import ResponseMessage = idepb.ResponseMessage;
import { handleCodeSourceID } from "./handlers/code-source-id";
import ErrorResponse = idepb.ErrorResponse;
import { ApiError } from "../errors";
import PushMessage = idepb.PushMessage;
import {
  CodeSourceID,
  GooseCodeExtensionConfig,
  GooseCodeWorkspaceConfig,
  loadWorkspaceConfiguration,
} from "../../config";
import * as https from "https";
import { Server, ServerOptions } from "https";
import { CodeSourcesProvider } from "../../views/code-sources";
import { registerGooseCodeCommands } from "../goosecode";
import { authMiddleware } from "./middleware/auth";
import { config } from "webpack";
import { checkCodeSourceMiddleware } from "./middleware/code-source";
import { workspace } from "vscode";
import { GenerateSessionProvider } from "../../views/generate-session";
import * as fs from "node:fs";
import * as path from "node:path";
import PushType = idepb.PushType;
import WorkspacesPush = idepb.WorkspacesPush;
import WorkspaceDetails = idepb.WorkspaceDetails;

export class GooseCodeServer {
  constructor(private readonly extensionConfig: GooseCodeExtensionConfig) {
    // this.workspaceConfig = loadWorkspaceConfiguration(false);
  }

  public websocket: WebSocket | null = null;
  public server: Server | null = null;
  private subscriptions: Array<vscode.Disposable> = [];

  public stop() {
    this.subscriptions.forEach((s) => s.dispose());
    this.websocket?.close();
    this.server?.close(() => {
      console.log("HTTP server stopped");
    });
  }

  private getWorkspaceRoot(): string {
    const activeFileUri = vscode.window.activeTextEditor!.document.uri;
    return vscode.workspace.getWorkspaceFolder(activeFileUri)!.uri!.fsPath;
  }

  private getCodeSourceID(workspaceFolder: string): CodeSourceID {
    return loadWorkspaceConfiguration(workspaceFolder, false)!.config
      .code_source_id;
  }

  public push(msg: PushMessage, workspaceFolder?: string) {
    if (this.websocket === null) {
      console.error("Websocket is not connected");
      return;
    }

    try {
      msg.workspace_root = workspaceFolder ?? this.getWorkspaceRoot();
      msg.code_source_id = this.getCodeSourceID(msg.workspace_root)!;
    } catch (e) {
    }
    this.websocket.send(msg.serializeBinary());
    console.log("Sent message", JSON.stringify(msg));
  }

  private send(res: express.Response, msg: ResponseMessage) {
    res.setHeader("Content-Type", "application/octet-stream");
    const buffer = Buffer.from(msg.serializeBinary());
    res.send(buffer);
  }

  // private codeSourceID(): CodeSourceID | null {
  //   if(!this.workspaceConfig){
  //     return null;
  //   }
  //   return this.workspaceConfig!.config.code_source_id;
  // }

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
    // app.use((r, q, n) => checkCodeSourceMiddleware(r, q, n, ()=>this.codeSourceID()));

    app.post(
      "/code-source-id",
      async (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction,
      ) => {
        await handleCodeSourceID(req.body, (m) => this.send(res, m)).catch(
          (e) => next(e),
        );
      },
    );

    app.post(
      "/files-list",
      async (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction,
      ) => {
        await handleListFilesRequest(req.body, (m) => this.send(res, m)).catch(
          (e) => next(e),
        );
      },
    );

    app.post(
      "/files-get",
      async (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction,
      ) => {
        await handleGetFilesRequest(req.body, (m) => this.send(res, m)).catch(
          (e) => next(e),
        );
      },
    );

    app.post(
      "/files-open",
      async (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction,
      ) => {
        await handleOpenFilesRequest(req.body, (m) => this.send(res, m)).catch(
          (e) => next(e),
        );
      },
    );

    // app.post(
    //   "/find-string",
    //   async (
    //     req: express.Request,
    //     res: express.Response,
    //     next: express.NextFunction,
    //   ) => {
    //     await handleFindRequest(req.body, (m) =>
    //       this.send(res, m),
    //     ).catch((e) => next(e));
    //   },
    // );

    // app.post(
    //   "/range-select",
    //   async (
    //     req: express.Request,
    //     res: express.Response,
    //     next: express.NextFunction,
    //   ) => {
    //     await handleSelectRange(req.body, (m) =>
    //       this.send(res, m),
    //     ).catch((e) => next(e));
    //   },
    // );

    // app.post(
    //   "/range-describe",
    //   async (
    //     req: express.Request,
    //     res: express.Response,
    //     next: express.NextFunction,
    //   ) => {
    //     await handleDescribeRange(req.body, (m) =>
    //       this.send(res, m),
    //     ).catch((e) => next(e));
    //   },
    // );

    app.post(
      "/go-to-definition",
      async (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction,
      ) => {
        await handleGoToDefinition(req.body, (m) => this.send(res, m)).catch(
          (e) => next(e),
        );
      },
    );

    // app.post(
    //   "/rename",
    //   async (
    //     req: express.Request,
    //     res: express.Response,
    //     next: express.NextFunction,
    //   ) => {
    //     await handleRename(req.body, (m) =>
    //       this.send(res, m),
    //     ).catch((e) => next(e));
    //   },
    // );

    // app.post(
    //   "/find-uses",
    //   async (
    //     req: express.Request,
    //     res: express.Response,
    //     next: express.NextFunction,
    //   ) => {
    //     await handleFindUses(req.body, (m) =>
    //       this.send(res, m),
    //     ).catch((e) => next(e));
    //   },
    // );

    // app.post(
    //   "/editor-state",
    //   async (
    //     req: express.Request,
    //     res: express.Response,
    //     next: express.NextFunction,
    //   ) => {
    //     await handleGetEditorState(req.body, (m) => this.send(res, m)).catch(
    //       (e) => next(e),
    //     );
    //   },
    // );

    // Start a websocket server
    wsApp.app.ws("/connect", (socket, req) => {
      console.log("Authorization:", req.headers.authorization);
      if (
        req.headers.authorization !== this.extensionConfig.settings.password
      ) {
        console.error("Unauthorized websocket connection");
        socket.close(3000);
        return;
      }

      console.log("Extension: WebSocket connection opened");
      this.websocket = socket;

      socket.on("message", (message: RawData) => {
        console.log("Extension: Received message on websocket...");
        console.error("Received non-string message data", message);
      });

      socket.on("close", (code, reason) => {
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

      // After delay, send refresh
        setTimeout(() => {
            this.refreshWorkspacesInGooseCode();
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
              type: idepb.ResponseType.RESPONSE_ERROR,
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

    this.subscriptions.push(...registerGooseCodeCommands(this));

    console.log("GooseCode server started");
  }

  private isGooseCodeEnabledForWorkspace(p: string): boolean {
    try {
      fs.accessSync(path.join(p, ".goose"));
    } catch (err) {
      return false;
    }

    return true;
  }

  public refreshWorkspacesInGooseCode(deleted?: Workspace) {
    const toSend: Workspace[] = [];
    const workspaces = vscode.workspace.workspaceFolders;
    if (workspaces) {
      for (const workspace of workspaces) {
        if (this.isGooseCodeEnabledForWorkspace(workspace.uri.fsPath)) {
          toSend.push({
            workspace_root: workspace.uri.fsPath,
            code_source_id: loadWorkspaceConfiguration(workspace.uri.fsPath, false)!.config.code_source_id,
            deleted: false,
          });
        }
      }
    }

    if(deleted){
      toSend.push(deleted);
    }


    this.push(
        new PushMessage({
          type: PushType.PUSH_WORKSPACES,
          workspaces: new WorkspacesPush({
            workspaces: [
              ...toSend.map(
                  (root) =>
                      new WorkspaceDetails(root),
              ),
            ],
          }),
        }),
    );
    console.log("Sent workspaces", toSend);
  }
}

type Workspace = {
  workspace_root: string;
  code_source_id: CodeSourceID;
  deleted: boolean;
}