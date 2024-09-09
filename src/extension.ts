// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { Disposable } from "vscode";
import * as express from "express";
import * as expressWs from "express-ws";
import { GooseCodeServer } from "./goosecode/server/server";
import { registerGooseCodeCommands } from "./goosecode/goosecode";
import { DepNodeProvider } from "./file-tree";
import * as https from "node:https";
import { createTLSOptions, purge } from "./tls";
import { getProjectRoot } from "./goosecode/commands/commands";
import { GooseCodeExtensionConfig, loadGlobalConfigurations } from "./config";
import { gettingStarted } from "./getting-started";
import { idepb } from "./proto/idepb/ide";

var gooseCodeServer: GooseCodeServer | null = null;

async function startServer(
  context: vscode.ExtensionContext,
  config: GooseCodeExtensionConfig,
) {
    console.log("Starting server, password: ", config.settings.password);
  gooseCodeServer = new GooseCodeServer(config);
  await gooseCodeServer.start();
}

async function stopServer() {
  gooseCodeServer?.stop();
  gooseCodeServer = null;
}

async function restartServer(context: vscode.ExtensionContext) {
  await stopServer();
  const config = await loadGlobalConfigurations(context);
  await startServer(context, config);
}

async function persistentCommands(
  context: vscode.ExtensionContext,
): Promise<Array<vscode.Disposable>> {
  const subscriptions: Array<vscode.Disposable> = [];
  subscriptions.push(
    vscode.commands.registerCommand("goosecode.start", async () => {
      await startServer(context, await loadGlobalConfigurations(context));
      vscode.window.showInformationMessage("GooseCode server started");
    }),
  );

  subscriptions.push(
    vscode.commands.registerCommand("goosecode.stop", async () => {
      await stopServer();
      vscode.window.showInformationMessage("GooseCode server stopped");
    }),
  );

  subscriptions.push(
    vscode.commands.registerCommand("goosecode.restart", async () => {
      await restartServer(context);
      vscode.window.showInformationMessage("GooseCode server restarted");
    }),
  );

  subscriptions.push(
    vscode.commands.registerCommand("goosecode.purgeTLS", async () => {
      await purge(context);
      vscode.window.showInformationMessage("GooseCode TLS keys purged. Restart the server to generate new keys.");
    }),
  );

  return subscriptions;
}

export async function activate(context: vscode.ExtensionContext) {
  const config = await loadGlobalConfigurations(context);
  if (config.settings.startAutomatically) {
    await startServer(context, config);
  } else {
    // Show warning
    vscode.window.showWarningMessage(
      "GooseCode is not running. You can start it from the command palette. To start automatically, enable the setting 'GooseCode: Start Automatically'",
    );
  }

  // Detect workspace changes
  const workspaceChangeSubscription =
    vscode.workspace.onDidChangeWorkspaceFolders(async (event) => {
      event.added.forEach((folder) => {
        console.log(`Workspace folder added: ${folder.uri.fsPath}`);
      });
      event.removed.forEach((folder) => {
        console.log(`Workspace folder removed: ${folder.uri.fsPath}`);
      });
    });
  context.subscriptions.push(workspaceChangeSubscription);

  // Detect settings changes
  const settingsChangeSubscription = vscode.workspace.onDidChangeConfiguration(
    async (event) => {
      if (event.affectsConfiguration("goosecode")) {
        console.log("GooseCode settings changed");
        const currentlyRunning = gooseCodeServer !== null;
        if(currentlyRunning){
            await restartServer(context);
            vscode.window.showInformationMessage("GooseCode server restarted");
        }
      }
    },
  );
  context.subscriptions.push(settingsChangeSubscription);

  // Persistent commands
  const persistentCommandSubscriptions = await persistentCommands(context);
  context.subscriptions.push(...persistentCommandSubscriptions);

  // Getting started commands
  const gettingStartedCommandSubscriptions = gettingStarted(context);
  context.subscriptions.push(...gettingStartedCommandSubscriptions);

  context.subscriptions.push({
    dispose: () => {
      stopServer();
      console.log("Disposing extension");
    },
  });
}

// This method is called when your extension is deactivated
export function deactivate() {}
