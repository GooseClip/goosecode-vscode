// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { WebSocket, WebSocketServer } from 'ws';
import { RequestMessage, RequestType, ResponseMessage, GetFilesResponse, ListFilesResponse, OpenFilesResponse, FindStringResponse, Location, Position, SelectRangeResponse, DescribeRangeResponse, GoToDefinitionResponse, RenameResponse, FindUsesResponse } from './proto/idepb/ide_pb'; // Import your generated protobuf TypeScript definitions
import { getProjectRoot, getFileContents, listProjectFiles, findStringInProject, openFiles, selectRange, describeRange, goToDefinition, rename, findUses } from './goosecode';
import { ResponseType } from './proto/idepb/ide_pb';

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
  const pblocs: Location[] = [];
  for (const hit of hits) {
    const loc = new Location();
    loc.setPath(hit.uri.path.replace(projectRoot, ""));
    console.log("[FIND]", loc.getPath());
    const startPos = new Position();
    startPos.setLine(hit.range.start.line);
    startPos.setCharacter(hit.range.start.character);
    loc.setStart(startPos);

    const endPos = new Position();
    endPos.setLine(hit.range.end.line);
    endPos.setCharacter(hit.range.end.character);
    loc.setEnd(endPos);
    pblocs.push(loc);
  }
  fsr.setLocationsList(pblocs);
  response.setFindString(fsr);
  socket.send(response.serializeBinary());
}

// ------- WIP

async function handleSelectRange(socket: WebSocket, request: RequestMessage) {
  const location = request.getSelectRange()!.getLocation();

  await openFiles([location!.getPath()]);
  const start = new vscode.Position(location!.getStart()!.getLine(), location!.getStart()!.getCharacter());
  const end = new vscode.Position(location!.getEnd()!.getLine(), location!.getEnd()!.getCharacter());

  const selection = selectRange(start, end);

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

  // const selection = selectRange(start, end);
  // if (isEntireWord(selection!)) {
    const descriptions = await describeRange(start, end);
  // }else{
    // console.log("Selection is not entire word");
  // }

  const response = new ResponseMessage();
  response.setType(ResponseType.RESPONSE_DESCRIBE_RANGE);
  response.setCommandId(request.getCommandId());
  const drr = new DescribeRangeResponse();
  response.setDescribeRange(drr);
  socket.send(response.serializeBinary());
}

async function handleGoToDefinition(socket: WebSocket, request: RequestMessage) {
  const location = request.getGoToDefinition()!.getLocation();

  await openFiles([location!.getPath()]);
  const start = new vscode.Position(location!.getStart()!.getLine(), location!.getStart()!.getCharacter());
  const end = new vscode.Position(location!.getEnd()!.getLine(), location!.getEnd()!.getCharacter());

  const selection = selectRange(start, end);
  if (isEntireWord(selection!)) {
    await goToDefinition();
  }else{
    console.log("Selection is not entire word");
  }
  
  const response = new ResponseMessage();
  response.setType(ResponseType.RESPONSE_GO_TO_DEFINITION);
  response.setCommandId(request.getCommandId());
  const gtdr = new GoToDefinitionResponse();
  response.setOpenFiles(gtdr);
  socket.send(response.serializeBinary());
}

async function handleRename(socket: WebSocket, request: RequestMessage) {
  const location = request.getRename()!.getLocation();
  
  await openFiles([location!.getPath()]);
  const start = new vscode.Position(location!.getStart()!.getLine(), location!.getStart()!.getCharacter());
  const end = new vscode.Position(location!.getEnd()!.getLine(), location!.getEnd()!.getCharacter());
  
  const selection = selectRange(start, end);
  if (isEntireWord(selection!)) {
    await rename(request.getRename()!.getNewName());
  }else{
    console.log("Selection is not entire word");
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
  if (isEntireWord(selection!)) {
    const uses = findUses();
  }else{
    console.log("Selection is not entire word");
  }

  const response = new ResponseMessage();
  response.setType(ResponseType.RESPONSE_FIND_USES);
  response.setCommandId(request.getCommandId());
  const fur = new FindUsesResponse();
  response.setOpenFiles(fur);
  socket.send(response.serializeBinary());
}

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "websocket-protobuf-example" is now active!');

  const websocketServer = new WebSocketServer({ port: 60053, host: "0.0.0.0", path: "/connect" }); // Set the desired WebSocket server port

  websocketServer.on('connection', (socket) => {
    console.log('WebSocket connection opened');

    socket.on('message', async (message) => {
      try {
        const request = RequestMessage.deserializeBinary(new Uint8Array(message as ArrayBuffer));
        console.log('Received ProtoBuf message:', JSON.stringify(request.toObject()));

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
            
        }
        // Process your ProtoBuf message here

      } catch (error) {
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
