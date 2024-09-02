import * as vscode from "vscode";
import express = require("express");
import { Express } from "express";
import { promisify } from "util";
import { readFile } from "fs";
import { RawData, WebSocket } from "ws";
import expressWs = require("express-ws");
import * as path from "path";
import * as http from "http";
import { deserializeBinary } from "../../util";
import { handleListFilesRequest } from "./handlers/list-files";
import { handleGetFilesRequest } from "./handlers/get-files";
import { handleOpenFilesRequest } from "./handlers/open-files";
import { handleFindRequest } from "./handlers/find";
import { handleSelectRange } from "./handlers/select-range";
import { handleDescribeRange } from "./handlers/describe-range";
import { handleGoToDefinition } from "./handlers/go-to";
import { handleRename } from "./handlers/rename";
import { handleFindUses } from "./handlers/find-uses";
import { deserializeBinaryMiddleware } from "../deserializeBinaryMiddleware";
import { getProjectRoot } from "../commands/commands";
import { idepb } from "../../proto/idepb/ide";
import ResponseMessage = idepb.ResponseMessage;
import { handleProjectRootRequest } from "./handlers/project-root";
import ErrorResponse = idepb.ErrorResponse;
import { ApiError } from "../errors";
import PushMessage = idepb.PushMessage;

export class GooseCodeServer {
  constructor() {}

  websocket: WebSocket | null = null;

  public push(msg: PushMessage) {
    if (this.websocket == null) {
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

  public initialize(
    context: vscode.ExtensionContext,
    app: Express,
    wsApp: expressWs.Instance,
  ) {
    app.use(express.raw({ type: "application/octet-stream" }));
    app.use(deserializeBinaryMiddleware);

    app.post(
      "/project-root",
      async (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction,
      ) => {
        await handleProjectRootRequest(req.body, (m) =>
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

    app.post(
      "/find-string",
      async (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction,
      ) => {
        await handleFindRequest(req.body, (m) => this.send(res, m)).catch((e) =>
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
        await handleSelectRange(req.body, (m) => this.send(res, m)).catch((e) =>
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
        await handleDescribeRange(req.body, (m) => this.send(res, m)).catch(
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
        await handleGoToDefinition(req.body, (m) => this.send(res, m)).catch(
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
        await handleRename(req.body, (m) => this.send(res, m)).catch((e) =>
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
        await handleFindUses(req.body, (m) => this.send(res, m)).catch((e) =>
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
      console.log("Extension: WebSocket connection opened");
      this.websocket = socket;

      socket.on("message", (message: RawData) => {
        console.log("Extension: Received message on websocket...");
        if (typeof message === "string") {
        } else {
          console.error("Received non-string message data", message); // TODO handle appropriately
        }
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
  }
}
