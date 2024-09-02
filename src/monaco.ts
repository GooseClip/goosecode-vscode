import * as vscode from "vscode";
import express = require("express");
import { Express } from "express";
import { promisify } from "util";
import { readFile } from "fs";
import { RawData, WebSocket } from "ws";
import expressWs = require("express-ws");
import * as path from "path";

import { deserializeBinary, getRandomString } from "./util";
import { idepb } from "./proto/idepb/ide";
import ResponseMessage = idepb.ResponseMessage;
import ResponseType = idepb.ResponseType;
import EditorDiagnosticsResponse = idepb.EditorDiagnosticsResponse;
import RequestMessage = idepb.RequestMessage;
import ContentChangeRequest = idepb.ContentChangeRequest;
import IRange = idepb.IRange;
import RequestType = idepb.RequestType;
import ContentChangeResponse = idepb.ContentChangeResponse;

class MonacoServer {
  constructor() {}

  websocket: WebSocket | null = null;

  public initializeMonacoServer(
    context: vscode.ExtensionContext,
    app: Express,
    wsApp: expressWs.Instance,
  ) {
    // app.use(bodyParser.json());

    // app.post('/diagnostics', async (req: express.Request, res: express.Response) => {
    //     const path = req.body.absoluteFilepath;  // retrieve 'absoluteFilepath' property from request body
    //
    //     try {
    //         const diagnostics = await handleGetEditorDiagnosticsJSON(path);
    //         res.sendStatus(200);
    //     } catch {
    //         res.sendStatus(500);
    //     }
    // });

    var changeSource = "user";
    const readFileAsync = promisify(readFile);

    app.use(
      "/vs",
      express.static(
        path.join(__dirname, "../node_modules/monaco-editor/min/vs"),
      ),
    );

    app.get("/", async (_: express.Request, res: express.Response) => {
      const html = await readFileAsync(
        path.join(__dirname, "../src/monaco_webview.html"),
        "utf-8",
      );
      res.send(html);
    });

    app.post(
      "/content-change",
      async (req: express.Request, res: express.Response) => {
        const request = deserializeBinary(req.body);
        if (request === null) {
          res.status(500);
          return;
        }

        try {
          await this.handleContentChange(res, request!);
        } catch (e) {
          res.status(500).send("Caught an exception while handling message");
          console.error("Error processing message:", e);
        }
      },
    );

    // registers websocket
    wsApp.app.ws("/", (socket, req) => {
      console.log("Extension: WebSocket connection opened");
      this.websocket = socket;

      // sends initial text to Monaco as JSON
      const activeEditor = vscode.window.activeTextEditor;
      if (activeEditor) {
        const documentText = activeEditor.document.getText();
        socket.send(
          JSON.stringify({ initialText: documentText, source: "vscode" }),
        );
      }

      // if using protobuf rather than JSON, should stream editor changes
      // streamContentChanges(socket);

      // receives from Monaco as JSON
      socket.on("message", (message: RawData) => {
        console.log("Extension: Received message on websocket...");
        if (typeof message === "string") {
          const change = JSON.parse(message);

          changeSource = change.source;

          const activeEditor = vscode.window.activeTextEditor;
          if (!activeEditor) {
            console.log("No active editor");
            return;
          }

          // Convert the Monaco IRange to a VSCode Range
          // Note that VSCode lines and columns start at 0, so we subtract 1 from the Monaco values
          const range = new vscode.Range(
            change.range.startLineNumber - 1,
            change.range.startColumn - 1,
            change.range.endLineNumber - 1,
            change.range.endColumn - 1,
          );

          // Apply the change to the active editor
          activeEditor
            .edit((editBuilder) => {
              editBuilder.replace(range, change.text);
            })
            .then(() => {
              changeSource = "user";
            });
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

    // Sends to Monaco Editor as JSON
    vscode.workspace.onDidChangeTextDocument((event) => {
      if (event.document === vscode.window.activeTextEditor?.document) {
        // console.log("(pre check)" + changeSource);
        if (changeSource === "user") {
          for (const change of event.contentChanges) {
            if (
              this.websocket &&
              this.websocket.readyState === this.websocket.OPEN
            ) {
              console.log(
                "Extension: sending changes to Monaco via websocket...",
              );
              this.websocket.send(
                JSON.stringify({ ...change, source: "vscode" }),
              );
            }
          }
        }
      }
    });
  }

  private async handleGetEditorDiagnosticsJSON(filename: string) {
    return new Promise((resolve, reject) => {
      vscode.workspace
        .openTextDocument(vscode.Uri.file(filename))
        .then((document) => {
          let diagnostics = vscode.languages.getDiagnostics(document.uri);

          if (
            this.websocket &&
            this.websocket.readyState === this.websocket.OPEN
          ) {
            const diagnosticData = {
              msgType: "diagnostics",
              data: diagnostics,
            };
            this.websocket.send(JSON.stringify(diagnosticData));
            resolve(diagnosticData);
          } else {
            reject("Websocket is not open");
          }
        });
    });
  }

  async handleGetEditorDiagnostics(socket: WebSocket) {
    // TODO change from activeTextEditor to relevant file
    let editor = vscode.window.activeTextEditor;
    if (editor) {
      let document = editor.document;

      // Get all diagnostics for the current document
      let diagnostics = vscode.languages.getDiagnostics(document.uri);

      const response = new ResponseMessage({
        type: ResponseType.RESPONSE_EDITOR_DIAGNOSTICS,
        // command_id: request.command_id,
        editor_diagnostics_response: new EditorDiagnosticsResponse({
          diagnostics: diagnostics,
        }),
      });
      socket.send(response.serializeBinary());
    }
  }

  async handleContentChange(res: express.Response, request: RequestMessage) {
    const change = request.content_change_request;

    const activeEditor = vscode.window.activeTextEditor;

    if (!activeEditor) {
      throw Error("Failed to handle content change");
      return;
    }

    // Convert the Monaco IRange to a VSCode Range
    // Note that VSCode lines and columns start at 0, so we subtract 1 from the Monaco values
    const range = new vscode.Range(
      change.range.start_line_number - 1,
      change.range.start_column - 1,
      change.range.end_line_number - 1,
      change.range.end_column - 1,
    );

    // Apply the change to the active editor
    activeEditor
      .edit((editBuilder) => {
        editBuilder.replace(range, change.text);
      })
      .then(() => {
        // TODO prevent infinite loop by reassigning a var here
      });

    // respond with equivalent of 200 OK
    const response = new ResponseMessage({
      type: ResponseType.RESPONSE_CONTENT_CHANGE,
      command_id: request.command_id,
      content_change_response: new ContentChangeResponse(),
    });

    res.send(response.serializeBinary());
  }

  async streamContentChanges(socket: WebSocket) {
    // sends to Monaco Client
    vscode.workspace.onDidChangeTextDocument((event) => {
      console.log("extension: onDidChangeTextDocument");
      // TODO change to the editor relevant to the requested file
      if (event.document === vscode.window.activeTextEditor?.document) {
        // TODO handle infinite loop
        for (const change of event.contentChanges) {
          const request = new RequestMessage();
          // request.setType(RequestType.REQUEST_CONTENT_CHANGE);
          // request.setCommandId(getRandomString(6));
          //
          // const contentChange = new ContentChangeRequest();
          // contentChange.setRange(new IRange());
          // contentChange.range.setStartLineNumber(change.range.start.line + 1);
          // contentChange.range.setStartColumn(change.range.start.character + 1);
          // contentChange.range.setEndLineNumber(change.range.end.line + 1);
          // contentChange.range.setEndColumn(change.range.end.character + 1);
          // contentChange.setRangeOffset(change.rangeOffset);
          // contentChange.setRangeLength(change.rangeLength);
          // contentChange.setText(change.text);
          //
          // request.setContentChange(contentChange);

          console.log("extension: sending changes to Monaco via websocket...");
          socket.send(request.serializeBinary());
          // TODO retrieve and handle response from websocket somehow
        }
      }
    });
  }

  // registerPushDiagnosticsExampleCommand registers an extension command that retrieves any diagnostic linting information from the current active editor file and transfers those messages as JSON to the Monaco Editor being served in the html file, which will apply them to the text that should be mirrored in the editor
  private registerPushDiagnosticsExampleCommand(
    context: vscode.ExtensionContext,
  ) {
    let disposable = vscode.commands.registerCommand(
      "goosecode.pushDiagnosticsExample",
      () => {
        vscode.window.showInformationMessage(
          "Pushing Diagnostics to the Monaco Editor!",
        );

        let editor = vscode.window.activeTextEditor;
        if (editor) {
          let document = editor.document;

          // Get all diagnostics for the current document
          let diagnostics = vscode.languages.getDiagnostics(document.uri);

          if (
            this.websocket &&
            this.websocket.readyState === this.websocket.OPEN
          ) {
            this.websocket.send(
              JSON.stringify({ msgType: "diagnostics", data: diagnostics }),
            );
          }
        }
      },
    );

    context.subscriptions.push(disposable);
  }
}

export { MonacoServer };
