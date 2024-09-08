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
import {CodeSourceID, GooseCodeConfig} from "../../config";
import * as https from "https";
import { Server, ServerOptions } from "https";
import { DepNodeProvider } from "../../file-tree";
import { registerGooseCodeCommands } from "../goosecode";
import { authMiddleware } from "./middleware/auth";
import {config} from "webpack";
import {checkCodeSourceMiddleware} from "./middleware/code-source";

export class GooseCodeServer {
  constructor(private readonly config: GooseCodeConfig) {}

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

  public push(msg: PushMessage) {
    if (this.websocket === null) {
      console.error("Websocket is not connected");
      return;
    }

    this.websocket.send(msg.serializeBinary());
  }

  private send(res: express.Response, msg: ResponseMessage) {
    res.setHeader("Content-Type", "application/octet-stream");
    const buffer = Buffer.from(msg.serializeBinary());
    res.send(buffer);
  }

  private createProjectExplorerProvider() {
    const rootPath = getProjectRoot();
    const explorerProvider = new DepNodeProvider(rootPath);
    const explorerProviderDisposable = vscode.window.registerTreeDataProvider(
      "goosecode.explorer",
      explorerProvider,
    );
    this.subscriptions.push(explorerProviderDisposable);
  }

  public async start() {
    if (this.server !== null) {
      console.error("Server already started");
      return;
    }
    const codeSourceID: CodeSourceID = this.config.config.code_source_id;
    // Establish server and websocket connection
    const app = express();
    this.server = https.createServer(this.config.tlsOptions, app);
    const wsApp = expressWs(app as any, this.server!);

    app.use(express.raw({ type: "application/octet-stream" }));
    app.use(convertBodyToProtoMiddleware);
    app.use((r, q, n) => authMiddleware(r, q, n, this.config.config.password));
    app.use((r, q, n) => checkCodeSourceMiddleware(r, q, n, this.config.config.code_source_id));

    app.post(
      "/code-source-id",
      async (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction,
      ) => {
        await handleCodeSourceID(codeSourceID, req.body, (m) =>
          this.send(res, m),
        ).catch((e) => next(e));
      },
    );

    app.post(
      "/files-list",
      async (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction,
      ) => {
        await handleListFilesRequest(codeSourceID, req.body, (m) => this.send(res, m)).catch(
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
        await handleGetFilesRequest(codeSourceID, req.body, (m) => this.send(res, m)).catch(
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
        await handleOpenFilesRequest(codeSourceID, req.body, (m) => this.send(res, m)).catch(
          (e) => next(e),
        );
      },
    );

    app.post(
      "/find-string",
      async (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction,
      ) => {
        await handleFindRequest(codeSourceID, req.body, (m) => this.send(res, m)).catch((e) =>
          next(e),
        );
      },
    );

    app.post(
      "/range-select",
      async (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction,
      ) => {
        await handleSelectRange(codeSourceID, req.body, (m) => this.send(res, m)).catch((e) =>
          next(e),
        );
      },
    );

    app.post(
      "/range-describe",
      async (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction,
      ) => {
        await handleDescribeRange(codeSourceID, req.body, (m) => this.send(res, m)).catch(
          (e) => next(e),
        );
      },
    );

    app.post(
      "/go-to-definition",
      async (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction,
      ) => {
        await handleGoToDefinition(codeSourceID, req.body, (m) => this.send(res, m)).catch(
          (e) => next(e),
        );
      },
    );

    app.post(
      "/rename",
      async (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction,
      ) => {
        await handleRename(codeSourceID, req.body, (m) => this.send(res, m)).catch((e) =>
          next(e),
        );
      },
    );

    app.post(
      "/find-uses",
      async (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction,
      ) => {
        await handleFindUses(codeSourceID, req.body, (m) => this.send(res, m)).catch((e) =>
          next(e),
        );
      },
    );

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
      if(req.headers.authorization !== this.config.config.password){
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

    const port = this.config.config.port;
    const ip = this.config.config.localhostOnly ? "127.0.0.1" : "0.0.0.0";

    // Serve the server
    this.server!.listen(port, ip, () => {
      console.log(`Listening on ${ip}:${port}`);
    });

    this.createProjectExplorerProvider();

    this.subscriptions.push(...registerGooseCodeCommands(this));

    console.log("GooseCode server started");
  }
}
