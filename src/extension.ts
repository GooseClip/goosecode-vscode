// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as expressWs from 'express-ws';
import * as http from 'http';
import {GooseCodeServer} from "./goosecode/api/api";
import {registerGooseCodeCommands} from "./goosecode/goosecode";

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
export function activate(context: vscode.ExtensionContext) {
    console.log('Congratulations, your extension "websocket-protobuf-example" is now active!');


    // const websocketServer = new WebSocketServer({ port: 60053, host: "0.0.0.0", path: "/connect" }); // Set the desired WebSocket server port

    // Establish server and websocket connection
    const app = express();
    const server = http.createServer(app);
    const wsApp = expressWs(app as any, server);

    // initializeMonacoServer(context, app, wsApp);

    const gooseCodeServer = new GooseCodeServer();
    gooseCodeServer.initialize(context, app, wsApp);


    // Serve the Monaco Editor
    server.listen(60053, 'localhost', () => {
        console.log('Listening on localhost:60053');
    });

    const subscriptions = registerGooseCodeCommands(gooseCodeServer)

    context.subscriptions.push(...subscriptions);
    context.subscriptions.push({
        dispose: () => {
            // websocketServer.close();
            console.log('WebSocket server stopped');
        },
    });
}

// vscode.window.showInformationMessage(`Processing: ${text}`);

// This method is called when your extension is deactivated
export function deactivate() {
}
