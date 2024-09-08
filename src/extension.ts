// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import * as bodyParser from "body-parser";
import * as express from "express";
import * as expressWs from "express-ws";
import * as http from "http";
import { GooseCodeServer } from "./goosecode/api/api";
import { registerGooseCodeCommands } from "./goosecode/goosecode";
import { DepNodeProvider } from "./file_tree";
import { SecretStorage } from "vscode";
import * as crypto from "crypto";
import * as https from "node:https";
import * as forge from "node-forge";
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

export function openSettingsPage() {
  vscode.commands.executeCommand("workbench.action.openSettings", "goosecode.");
}

async function generateECDSAKeyPair(): Promise<{
  publicKey: string;
  privateKey: string;
}> {
  return new Promise((resolve, reject) => {
    crypto.generateKeyPair(
      "ec",
      {
        namedCurve: "prime256v1", // P-256 curve, common choice for ECDSA
        publicKeyEncoding: {
          type: "spki",
          format: "pem",
        },
        privateKeyEncoding: {
          type: "pkcs8",
          format: "pem",
          cipher: "aes-256-cbc", // Encrypt the private key with aes-256-cbc
          passphrase: "", // You can set a passphrase here
        },
      },
      (err, publicKey, privateKey) => {
        if (err) {
          reject(err);
        } else {
          resolve({ publicKey, privateKey });
        }
      },
    );
  });
}

export async function activate(context: vscode.ExtensionContext) {
  console.log(
    'Congratulations, your extension "websocket-protobuf-example" is now active!',
  );
  // const secrets: SecretStorage = context.secrets;
  // var publicKey = await secrets.get("publicKey");
  // var privateKey = await secrets.get("privateKey");
  //
  // if (!privateKey || !publicKey) {
  //   const { publicKey: pub, privateKey: priv } = await generateECDSAKeyPair();
  //   await secrets.store("publicKey", pub);
  //   await secrets.store("privateKey", priv);
  //   console.log("Generated new ECDSA key pair");
  //
  //   publicKey = pub;
  //   privateKey = priv;
  // } else {
  //   console.log("Using existing ECDSA key pair");
  // }
  // console.log("Public key: ", publicKey);
  // console.log("Private key: ", privateKey);
  //
  //
  // var options = {
  //   key: privateKey,
  //   cert: publicKey,
  //   requestCert: false,
  //   rejectUnauthorized: false,
  // };
  // Create a cert

  //   // Generate a key pair
  //   const keys = forge.pki.rsa.generateKeyPair(2048);
  //
  // // Create a certificate signing request (CSR)
  //   const csr = forge.pki.createCertificationRequest();
  //
  //   csr.publicKey = keys.publicKey;
  //   csr.setSubject([{
  //     name: 'commonName',
  //     value: 'example.com'
  //   }, {
  //     name: 'countryName',
  //     value: 'US'
  //   }, {
  //     shortName: 'ST',
  //     value: 'Virginia'
  //   }, {
  //     name: 'localityName',
  //     value: 'Blacksburg'
  //   }, {
  //     name: 'organizationName',
  //     value: 'Example Company'
  //   }, {
  //     shortName: 'OU',
  //     value: 'IT'
  //   }]);

  // https://www.npmjs.com/package/node-forge
  // Generate a keypair or use an existing private key
  const keys = forge.pki.rsa.generateKeyPair(2048);

  // Create a new certificate
  let cert = forge.pki.createCertificate();

  // Fill the required fields
  cert.publicKey = keys.publicKey;
  cert.serialNumber = "01";
  cert.validity.notBefore = new Date();
  cert.validity.notAfter = new Date();
  cert.validity.notAfter.setFullYear(cert.validity.notBefore.getFullYear() + 1); // 1 year validity

  // Add extensions and subject details
  var attrs = [
    {
      shortName: "CN",
      value: "goosecode.app",
    },
    {
      shortName: "ON",
      value: "GooseClip",
    },
    {
      shortName: "OU",
      value: "GooseCode",
    },
  ];
  cert.setSubject(attrs);
  cert.setIssuer(attrs); // self-signed, so issuer is same as subject
  // cert.setExtensions([
  //   {
  //     name: "basicConstraints",
  //     cA: true,
  //   },
  //   {
  //     name: "keyUsage",
  //     keyCertSign: true,
  //     digitalSignature: true,
  //     nonRepudiation: true,
  //     keyEncipherment: true,
  //     dataEncipherment: true,
  //   },
  // ]);

  cert.setExtensions([
    {
      name: 'basicConstraints',
      cA: true
    },
    {
      name: 'keyUsage',
      keyCertSign: true,
      digitalSignature: true
    },
    {
      name: 'extKeyUsage',
      serverAuth: true
    },
    {
      name: 'subjectKeyIdentifier'
    }
  ]);

  // Self-sign the certificate
  cert.sign(keys.privateKey);

  //   const key = forge.pki.privateKeyToPem(keys.privateKey);
  // const cert = forge.pki.certificateToPem();

  const keyPem = forge.pki.privateKeyToPem(keys.privateKey);
  const certPem = forge.pki.certificateToPem(cert);

  var options = {
    key: keyPem,
    cert: certPem,
    requestCert: false,
    rejectUnauthorized: false,
  };
  // Establish server and websocket connection
  const app = express();
  const server = https.createServer(options, app);
  const wsApp = expressWs(app as any, server);

  // initializeMonacoServer(context, app, wsApp);

  const gooseCodeServer = new GooseCodeServer();
  gooseCodeServer.initialize(context, app, wsApp);

  // Serve the Monaco Editor
  server.listen(60053, "0.0.0.0", () => {
    console.log("Listening on 0.0.0.0:60053");
  });

  const subscriptions = registerGooseCodeCommands(gooseCodeServer);

  /*
                    {
                  "id": "setcontext",
                  "title": "Set Context",
                  "description": "This step will set a context key, and check off when that context has been set\n[Set Context](command:getting-started-goosecode.setContext)",
                  "media": {
                    "image": "media/screenshot.png",
                    "altText": "Empty image"
                  },
                  "completionEvents": [
                    "onContext:gettingStartedContextKey"
                  ]
                }
           */
  const rootPath =
    vscode.workspace.workspaceFolders &&
    vscode.workspace.workspaceFolders.length > 0
      ? vscode.workspace.workspaceFolders[0].uri.fsPath
      : undefined;

  const nodeDependenciesProvider = new DepNodeProvider(rootPath);
  vscode.window.registerTreeDataProvider(
    "nodeDependencies",
    nodeDependenciesProvider,
  );

  context.subscriptions.push(...subscriptions);

  context.subscriptions.push(
    vscode.commands.registerCommand(
      "getting-started-goosecode.downloadComplete",
      async () => {},
    ),
  );

  context.subscriptions.push(
    vscode.commands.registerCommand(
      "getting-started-goosecode.checkSettings",
      async () => {
        openSettingsPage();
      },
    ),
  );

  context.subscriptions.push(
    vscode.commands.registerCommand(
      "getting-started-goosecode.testConnection",
      async () => {},
    ),
  );

  context.subscriptions.push(
    vscode.commands.registerCommand(
      "getting-started-goosecode.changeSetting",
      async () => {
        console.log(
          vscode.workspace
            .getConfiguration("getting-started-goosecode")
            .get("sampleSetting"),
        );
        // vscode.workspace.getConfiguration('getting-started-goosecode').update('sampleSetting', true);
        openSettingsPage();
      },
    ),
  );

  context.subscriptions.push(
    vscode.commands.registerCommand(
      "getting-started-goosecode.setContext",
      async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        vscode.commands.executeCommand(
          "setContext",
          "gettingStartedContextKey",
          true,
        );
      },
    ),
  );

  context.subscriptions.push({
    dispose: () => {
      // websocketServer.close();
      console.log("WebSocket server stopped");
    },
  });
}

// This method is called when your extension is deactivated
export function deactivate() {}
