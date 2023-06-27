// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { WebSocket, WebSocketServer } from 'ws';
import { RequestMessage, RequestType, ResponseMessage, SymbolKindMap, GetFilesResponse, ListFilesResponse, OpenFilesResponse, FindStringResponse, Location, Position, SelectRangeResponse, DescribeRangeResponse, GoToDefinitionResponse, RenameResponse, FindUsesResponse, ErrorResponse, DocumentSymbol, SymbolKind, Range } from './proto/idepb/ide_pb'; // Import your generated protobuf TypeScript definitions
import { getProjectRoot, getFileContents, listProjectFiles, findStringInProject, openFiles, selectRange, describeRange, goToDefinition, rename, findUses } from './goosecode';
import { ResponseType } from './proto/idepb/ide_pb';

import express = require('express');
import expressWs = require('express-ws');
import { RawData } from 'ws';
import * as http from 'http';
import * as path from 'path';
import { promisify } from 'util';
import { readFile } from 'fs';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
// export function activate(context: vscode.ExtensionContext) {

// 	// Use the console to output diagnostic information (console.log) and errors (console.error)
// 	// This line of code will only be executed once when your extension is activated
// 	console.log('Congratulations, your extension "goosecode" is now active!');

// 	// The command has been defined in the package.json file
// 	// Now provide the implementation of the command with registerCommand
// 	// The commandId parameter must match the command field in package.json
// 	let disposable = vscode.commands.registerCommand('goosecode.helloWorld', () => {
// 		// The code you place here will be executed every time your command is executed
// 		// Display a message box to the user
// 		vscode.window.showInformationMessage('Hello World from goosecode!');
// 	});

// 	context.subscriptions.push(disposable);
// }

function isEntireWord(selection: vscode.Selection): boolean {
  const document = vscode.window.activeTextEditor?.document;
  if (!document) {
    return false;
  }

  const selectedText = document.getText(selection);
  const regex = /\b\w+?\b/;

  return regex.test(selectedText);
}

function convertLocations(vsLocations: vscode.Location[]): Location[] {
  const pblocs: Location[] = [];
  const projectRoot = getProjectRoot();
  for (const l of vsLocations) {
    const loc = new Location();
    loc.setPath(l.uri.path.replace(projectRoot, ""));
    const startPos = new Position();
    startPos.setLine(l.range.start.line);
    startPos.setCharacter(l.range.start.character);
    loc.setStart(startPos);

    const endPos = new Position();
    endPos.setLine(l.range.end.line);
    endPos.setCharacter(l.range.end.character);
    loc.setEnd(endPos);
    pblocs.push(loc);
  }
  return pblocs;
}

function convertRange(vsRange: vscode.Range | vscode.Location): Range {
  const range = new Range();

  const startPos = new Position();
  const r = vsRange instanceof vscode.Range ? vsRange : (vsRange as vscode.Location).range;
  startPos.setLine(r.start.line);
  startPos.setCharacter(r.start.character);
  range.setStart(startPos);

  const endPos = new Position();
  endPos.setLine(r.end.line);
  endPos.setCharacter(r.end.character);
  range.setEnd(endPos);
  return range;
}

function convertSymbolKind(symbolKind: vscode.SymbolKind): number {
  switch (symbolKind) {
    case vscode.SymbolKind.File:
      return SymbolKind.SYMBOL_KIND_FILE;
    case vscode.SymbolKind.Module:
      return SymbolKind.SYMBOL_KIND_MODULE;
    case vscode.SymbolKind.Namespace:
      return SymbolKind.SYMBOL_KIND_NAMESPACE;
    case vscode.SymbolKind.Package:
      return SymbolKind.SYMBOL_KIND_PACKAGE;
    case vscode.SymbolKind.Class:
      return SymbolKind.SYMBOL_KIND_CLASS;
    case vscode.SymbolKind.Method:
      return SymbolKind.SYMBOL_KIND_METHOD;
    case vscode.SymbolKind.Property:
      return SymbolKind.SYMBOL_KIND_PROPERTY;
    case vscode.SymbolKind.Field:
      return SymbolKind.SYMBOL_KIND_FIELD;
    case vscode.SymbolKind.Constructor:
      return SymbolKind.SYMBOL_KIND_CONSTRUCTOR;
    case vscode.SymbolKind.Enum:
      return SymbolKind.SYMBOL_KIND_ENUM;
    case vscode.SymbolKind.Interface:
      return SymbolKind.SYMBOL_KIND_INTERFACE;
    case vscode.SymbolKind.Function:
      return SymbolKind.SYMBOL_KIND_FUNCTION;
    case vscode.SymbolKind.Variable:
      return SymbolKind.SYMBOL_KIND_VARIABLE;
    case vscode.SymbolKind.Constant:
      return SymbolKind.SYMBOL_KIND_CONSTANT;
    case vscode.SymbolKind.String:
      return SymbolKind.SYMBOL_KIND_STRING;
    case vscode.SymbolKind.Number:
      return SymbolKind.SYMBOL_KIND_NUMBER;
    case vscode.SymbolKind.Boolean:
      return SymbolKind.SYMBOL_KIND_BOOLEAN;
    case vscode.SymbolKind.Array:
      return SymbolKind.SYMBOL_KIND_ARRAY;
    case vscode.SymbolKind.Object:
      return SymbolKind.SYMBOL_KIND_OBJECT;
    case vscode.SymbolKind.Key:
      return SymbolKind.SYMBOL_KIND_KEY;
    case vscode.SymbolKind.Null:
      return SymbolKind.SYMBOL_KIND_NULL;
    case vscode.SymbolKind.EnumMember:
      return SymbolKind.SYMBOL_KIND_ENUM_MEMBER;
    case vscode.SymbolKind.Struct:
      return SymbolKind.SYMBOL_KIND_STRUCT;
    case vscode.SymbolKind.Event:
      return SymbolKind.SYMBOL_KIND_EVENT;
    case vscode.SymbolKind.Operator:
      return SymbolKind.SYMBOL_KIND_OPERATOR;
    case vscode.SymbolKind.TypeParameter:
      return SymbolKind.SYMBOL_KIND_TYPE_PARAMETER;
    default:
      throw new Error(`Unknown symbol kind: ${symbolKind}`);
  }
}

function convertSymbols(vsSymbols: Array<vscode.DocumentSymbol | vscode.SymbolInformation>): DocumentSymbol[] {
  const pbSymbols: DocumentSymbol[] = [];
  for (const d of vsSymbols) {
    const symbol = new DocumentSymbol();
    if (d instanceof vscode.DocumentSymbol) {
      symbol.setName(d.name);
      symbol.setDetail(d.detail);
      // @ts-ignore
      symbol.setKind(convertSymbolKind(d.kind));
      symbol.setRange(convertRange(d.range));
      symbol.setSelectionrange(convertRange(d.selectionRange));
      symbol.setChildrenList(convertSymbols(d.children));
    } else if (d instanceof vscode.SymbolInformation) {
      symbol.setName(d.name);
      symbol.setDetail(d.containerName);
      // @ts-ignore
      symbol.setKind(convertSymbolKind(d.kind));
      symbol.setRange(convertRange(d.location));
    } else {
      throw new Error("Unknown symbol type");
    }
    pbSymbols.push(symbol);
  }

  return pbSymbols;
}


async function handleListFilesRequest(socket: WebSocket, request: RequestMessage) {
  const files = await listProjectFiles();
  const response = new ResponseMessage();
  response.setType(ResponseType.RESPONSE_LIST_FILES);
  response.setCommandId(request.getCommandId());
  const lfr = new ListFilesResponse();
  lfr.setFilePathsList(files);
  response.setListFiles(lfr);
  socket.send(response.serializeBinary());
}

async function handleGetFilesRequest(socket: WebSocket, request: RequestMessage) {
  const contents = await getFileContents(request.getGetFiles()!.getFilePathsList());
  const response = new ResponseMessage();
  response.setType(ResponseType.RESPONSE_GET_FILES);
  response.setCommandId(request.getCommandId());
  const gfr = new GetFilesResponse();
  gfr.setFileContentsList(contents);
  response.setGetFiles(gfr);
  socket.send(response.serializeBinary());
}

async function handleOpenFilesRequest(socket: WebSocket, request: RequestMessage) {
  await openFiles(request.getOpenFiles()!.getFilePathsList());
  const response = new ResponseMessage();
  response.setType(ResponseType.RESPONSE_OPEN_FILES);
  response.setCommandId(request.getCommandId());
  const ofr = new OpenFilesResponse();
  response.setOpenFiles(ofr);
  socket.send(response.serializeBinary());
}

async function handleFindRequest(socket: WebSocket, request: RequestMessage) {
  const find = request.getFindString()!;
  const hits: vscode.Location[] = await findStringInProject(find.getSearchPattern(), find.getIncludedFilesList());
  const response = new ResponseMessage();
  response.setType(ResponseType.RESPONSE_FIND_STRING);
  response.setCommandId(request.getCommandId());
  const fsr = new FindStringResponse();
  const projectRoot = getProjectRoot();
  const pblocs: Location[] = convertLocations(hits);
  fsr.setLocationsList(pblocs);
  response.setFindString(fsr);
  socket.send(response.serializeBinary());
}

// ------- WIP

async function sendError(socket: WebSocket, request: RequestMessage, error: string) {
  console.log(`[ERROR][${request.getType()}], error: ${error}`);
  const response = new ResponseMessage();
  response.setType(ResponseType.RESPONSE_ERROR);
  response.setCommandId(request.getCommandId());
  const err = new ErrorResponse();
  err.setError(error);
  response.setError(err);
  socket.send(response.serializeBinary());
}

async function handleSelectRange(socket: WebSocket, request: RequestMessage) {
  const location = request.getSelectRange()!.getLocation();

  await openFiles([location!.getPath()]);
  const start = new vscode.Position(location!.getStart()!.getLine(), location!.getStart()!.getCharacter());
  const end = new vscode.Position(location!.getEnd()!.getLine(), location!.getEnd()!.getCharacter());

  const selection = selectRange(start, end);
  if (!selection) {
    sendError(socket, request, "Failed to select range");
    return;
  }

  const response = new ResponseMessage();
  response.setType(ResponseType.RESPONSE_SELECT_RANGE);
  response.setCommandId(request.getCommandId());
  const srr = new SelectRangeResponse();
  response.setSelectRange(srr);
  socket.send(response.serializeBinary());
}

async function handleDescribeRange(socket: WebSocket, request: RequestMessage) {
  const location = request.getDescribeRange()!.getLocation();

  await openFiles([location!.getPath()]);
  const start = new vscode.Position(location!.getStart()!.getLine(), location!.getStart()!.getCharacter());
  const end = new vscode.Position(location!.getEnd()!.getLine(), location!.getEnd()!.getCharacter());

  const selection = selectRange(start, end);
  if (!selection) {
    sendError(socket, request, "Failed to select range");
    return;
  }

  const symbols = await describeRange(start, end);
  if (!symbols) {
    sendError(socket, request, "Failed to get descriptions");
    return;
  }

  console.log("vsSymbols:", symbols.length);
  const pbSymbols = convertSymbols(symbols);

  const response = new ResponseMessage();
  response.setType(ResponseType.RESPONSE_DESCRIBE_RANGE);
  response.setCommandId(request.getCommandId());
  const drr = new DescribeRangeResponse();
  console.log("Set pbSymbols:", pbSymbols.length);
  drr.setSymbolsList(pbSymbols);
  response.setDescribeRange(drr);
  socket.send(response.serializeBinary());
}

async function handleGoToDefinition(socket: WebSocket, request: RequestMessage) {
  const location = request.getGoToDefinition()!.getLocation();

  await openFiles([location!.getPath()]);
  const start = new vscode.Position(location!.getStart()!.getLine(), location!.getStart()!.getCharacter());
  const end = new vscode.Position(location!.getEnd()!.getLine(), location!.getEnd()!.getCharacter());

  const selection = selectRange(start, end);
  if (!selection) {
    sendError(socket, request, "Failed to select range");
    return;
  }

  if (!isEntireWord(selection!)) {
    sendError(socket, request, "Selection is not word");
    return;
  }

  if (!await goToDefinition()) {
    sendError(socket, request, "Failed to go to definition");
    return;
  }

  const response = new ResponseMessage();
  response.setType(ResponseType.RESPONSE_GO_TO_DEFINITION);
  response.setCommandId(request.getCommandId());
  const gtdr = new GoToDefinitionResponse();
  response.setGoToDefinition(gtdr);
  socket.send(response.serializeBinary());
}

async function handleRename(socket: WebSocket, request: RequestMessage) {
  const location = request.getRename()!.getLocation();

  await openFiles([location!.getPath()]);
  const start = new vscode.Position(location!.getStart()!.getLine(), location!.getStart()!.getCharacter());
  const end = new vscode.Position(location!.getEnd()!.getLine(), location!.getEnd()!.getCharacter());

  const selection = selectRange(start, end);
  if (!selection) {
    sendError(socket, request, "Failed to select range");
    return;
  }

  if (!isEntireWord(selection!)) {
    sendError(socket, request, "Selection is not word");
    return;
  }

  if (!await rename(request.getRename()!.getNewName())) {
    sendError(socket, request, "Failed to rename;");
    return;
  }

  const response = new ResponseMessage();
  response.setType(ResponseType.RESPONSE_RENAME);
  response.setCommandId(request.getCommandId());
  const rr = new RenameResponse();
  response.setRename(rr);
  socket.send(response.serializeBinary());
}

async function handleFindUses(socket: WebSocket, request: RequestMessage) {
  const location = request.getFindUses()!.getLocation();

  await openFiles([location!.getPath()]);
  const start = new vscode.Position(location!.getStart()!.getLine(), location!.getStart()!.getCharacter());
  const end = new vscode.Position(location!.getEnd()!.getLine(), location!.getEnd()!.getCharacter());


  const selection = selectRange(start, end);
  if (!selection) {
    sendError(socket, request, "Failed to select range");
    return;
  }

  if (!isEntireWord(selection!)) {
    sendError(socket, request, "Selection is not word");
    return;
  }

  const uses = await findUses();
  if (!uses) {
    sendError(socket, request, "Failed to find uses");
    return;
  }

  const response = new ResponseMessage();
  response.setType(ResponseType.RESPONSE_FIND_USES);
  response.setCommandId(request.getCommandId());
  const fur = new FindUsesResponse();
  const pblocs: Location[] = convertLocations(uses);
  fur.setLocationsList(pblocs);
  console.log("setting uses:", pblocs.length);
  response.setFindUses(fur);
  socket.send(response.serializeBinary());
}

async function serveMonacoEditor() {
  interface IRange {
    startLineNumber: number;
    startColumn: number;
    endLineNumber: number;
    endColumn: number;
  }

  interface IModelContentChange {
    range: IRange;
    rangeOffset: number;
    rangeLength: number;
    text: string;
  }
  const readFileAsync = promisify(readFile);
  const app = express();
  const server = http.createServer(app);
  const wsApp = expressWs(app as any, server);

  var changeSource = 'user';

  app.use('/vs', express.static(path.join(__dirname, '../node_modules/monaco-editor/min/vs')));

  app.get('/', async (_: express.Request, res: express.Response) => {
    const html = await readFileAsync(path.join(__dirname, '../src/monaco_webview.html'), 'utf-8');
    res.send(html);
  });

  let websocket: WebSocket | null = null;

  // registers websocket
  wsApp.app.ws('/', (ws, req) => {
    websocket = ws;

    const activeEditor = vscode.window.activeTextEditor;
    if (activeEditor) {
      const documentText = activeEditor.document.getText();

      ws.send(JSON.stringify({ initialText: documentText, source: "vscode" }));
    }

    // receives from Monaco Client
    ws.on('message', (msg: RawData) => {
      if (typeof (msg) === 'string') {
        const change = JSON.parse(msg);

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
        activeEditor.edit((editBuilder) => {
          editBuilder.replace(range, change.text);
        }).then(() => {
          changeSource = "user";
        });

      } else {
        console.error('Received non-string message data', msg); // TODO handle appropriately
      }
    });
  });

  server.listen(3000, 'localhost', () => {
    console.log('Listening on localhost:3000');
  });

  // sends to Monaco Client
  vscode.workspace.onDidChangeTextDocument((event) => {
    if (event.document === vscode.window.activeTextEditor?.document) {
      // console.log("(pre check)" + changeSource);
      if (changeSource === "user") {
        for (const change of event.contentChanges) {
          if (websocket && websocket.readyState === websocket.OPEN) {
            websocket.send(JSON.stringify({ ...change, source: 'vscode' }));
          }
        }
      }
    }
  });
}

async function handleGetEditorState(socket: WebSocket, request: RequestMessage) {
  // TODO change to the editor relevant to the requested file
  const activeEditor = vscode.window.activeTextEditor;

  if (!activeEditor) {
    sendError(socket, request, "Failed to get editor state");
    return;
  }

  const documentText = activeEditor.document.getText();

  const response = new ResponseMessage();
  response.setType(ResponseType.RESPONSE_EDITOR_STATE);
  response.setCommandId(request.getCommandId());
  const es = new EditorStateResponse();
  response.setEditorState(es);
  socket.send(response.serializeBinary());
}

// TODO convert to protobuf definition
interface IRange {
  startLineNumber: number;
  startColumn: number;
  endLineNumber: number;
  endColumn: number;
}

// TODO convert to protobuf definition
interface IModelContentChange {
  range: IRange;
  rangeOffset: number;
  rangeLength: number;
  text: string;
}

async function handleContentChange(socket: WebSocket, request: RequestMessage) {
  const change: IModelContentChange = request.getContentChange()!;

  const activeEditor = vscode.window.activeTextEditor;

  if (!activeEditor) {
    sendError(socket, request, "Failed to handle content change");
    return;
  }

  // TODO change this such that it leverages protobuf if possible?
  // Convert the Monaco IRange to a VSCode Range
  // Note that VSCode lines and columns start at 0, so we subtract 1 from the Monaco values
  const range = new vscode.Range(
    change.range.startLineNumber - 1,
    change.range.startColumn - 1,
    change.range.endLineNumber - 1,
    change.range.endColumn - 1,
  );

  // Apply the change to the active editor
  activeEditor.edit((editBuilder) => {
    editBuilder.replace(range, change.text);
  }).then(() => {
    // TODO prevent infinite loop by reassigning a var here
  });

  // respond with equivalent of 200 OK
  const response = new ResponseMessage();
  response.setType(ResponseType.RESPONSE_CONTENT_CHANGE);
  response.setCommandId(request.getCommandId());
  const cc = new ContentChangeResponse();
  response.setContentChangeResponse(cc);
  socket.send(response.serializeBinary());
}


function getRandomString(length: number): string {
  const _chars = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890';

  let result = '';
  for (let i = 0; i < length; i++) {
    result += _chars.charAt(Math.floor(Math.random() * _chars.length));
  }
  return result;
}

async function streamContentChanges(socket: WebSocket) {
  // sends to Monaco Client
  vscode.workspace.onDidChangeTextDocument((event) => {
    // TODO change to the editor relevant to the requested file
    if (event.document === vscode.window.activeTextEditor?.document) {
      // TODO handle infinite loop
      for (const change of event.contentChanges) {
        const request = new RequestMessage();
        request.setType(RequestType.REQUEST_CONTENT_CHANGE);
        request.setCommandId(getRandomString(6));
        request.setContentChange(change);
        socket.send(request.serializeBinary());
        // TODO retrieve and handle response from websocket somehow
      }
    }
  });
}

async function handleGetEditorDiagnostics(socket: WebSocket, request: RequestMessage) {
  // TODO change from activeTextEditor to relevant file
  let editor = vscode.window.activeTextEditor;
  if (editor) {
    let document = editor.document;

    // Get all diagnostics for the current document
    let diagnostics = vscode.languages.getDiagnostics(document.uri);

    const response = new ResponseMessage();
    response.setType(ResponseType.RESPONSE_EDITOR_DIAGNOSTICS);
    response.setCommandId(request.getCommandId());
    const ged = new EditorDiagnostics();
    response.setEditorDiagnostics(ged);
    socket.send(response.serializeBinary());
  }
}

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "websocket-protobuf-example" is now active!');

  const websocketServer = new WebSocketServer({ port: 60053, host: "0.0.0.0", path: "/connect" }); // Set the desired WebSocket server port

  websocketServer.on('connection', (socket) => {
    console.log('WebSocket connection opened');

    streamContentChanges(socket);

    socket.on('message', async (message) => {
      var request: RequestMessage;
      try {
        request = RequestMessage.deserializeBinary(new Uint8Array(message as ArrayBuffer));
        console.log('Received ProtoBuf message:', JSON.stringify(request.toObject()));

      } catch (e) {
        console.log("[ERROR] failed to unmarshal");
        return;
      }
      try {
        switch (request.getType()) {
          case RequestType.REQUEST_LIST_FILES:
            console.log("REQUEST_LIST_FILES");
            handleListFilesRequest(socket, request);
            break;
          case RequestType.REQUEST_GET_FILES:
            console.log("REQUEST_GET_FILES");
            handleGetFilesRequest(socket, request);
            break;
          case RequestType.REQUEST_OPEN_FILES:
            console.log("REQUEST_OPEN_FILES");
            handleOpenFilesRequest(socket, request);
            break;
          case RequestType.REQUEST_FIND_STRING:
            console.log("REQUEST_FIND_STRING");
            handleFindRequest(socket, request);
            break;
          case RequestType.REQUEST_SELECT_RANGE:
            console.log("REQUEST_SELECT_RANGE");
            handleSelectRange(socket, request);
            break;
          case RequestType.REQUEST_DESCRIBE_RANGE:
            console.log("REQUEST_DESCRIBE_RANGE");
            handleDescribeRange(socket, request);
            break;
          case RequestType.REQUEST_GO_TO_DEFINITION:
            console.log("REQUEST_GO_TO_DEFINITION");
            handleGoToDefinition(socket, request);
            break;
          case RequestType.REQUEST_RENAME:
            console.log("REQUEST_RENAME");
            handleRename(socket, request);
            break;
          case RequestType.REQUEST_FIND_USES:
            console.log("REQUEST_FIND_USES");
            handleFindUses(socket, request);
            break;
          case RequestType.REQUEST_EDITOR_STATE:
            console.log("REQUEST_GET_EDITOR_STATE");
            handleGetEditorState(socket, request);
            break;
          case RequestType.REQUEST_CONTENT_CHANGE:
            console.log("REQUEST_CONTENT_CHANGED");
            handleContentChange(socket, request);
            break;

        }
        // Process your ProtoBuf message here

      } catch (error) {
        sendError(socket, request, "Caught an exception while handling message");
        console.error('Error processing message:', error);
      }
    });

    socket.on('close', (code, reason) => {
      console.log('WebSocket connection closed, code:', code, 'reason:', reason);
    });

    socket.on('error', (error) => {
      console.error('WebSocket error:', error);
    });
  });

  context.subscriptions.push({
    dispose: () => {
      websocketServer.close();
      console.log('WebSocket server stopped');
    },
  });
}


// This method is called when your extension is deactivated
export function deactivate() { }
