// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { GooseCodeServer } from "./goosecode/server/server";
import { CodeSource, CodeSourcesProvider } from "./views/code-sources";
import { purge } from "./tls";
import {
  CodeSourceID,
  GooseCodeExtensionConfig,
  loadGlobalConfigurations,
  loadWorkspaceConfiguration,
  removeWorkspaceConfiguration,
} from "./config";
import { gettingStarted } from "./getting-started";
import { idepb } from "./proto/idepb/ide";
import PushMessage = idepb.PushMessage;
import { GenerateSessionProvider } from "./views/generate-session";
import { WorkspaceTracker } from "./workspace-tracker";

var gooseCodeServer: GooseCodeServer | null = null;
const workspaceTracker = new WorkspaceTracker();

async function startServer(
  context: vscode.ExtensionContext,
  config: GooseCodeExtensionConfig,
) {
  console.log("Starting server, password: ", config.settings.password);
  gooseCodeServer = new GooseCodeServer(workspaceTracker, config);
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
    vscode.commands.registerCommand("goosecode.initialize", async () => {
      gooseCodeServer!.push(new PushMessage());
    }),
  );

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
      vscode.window.showInformationMessage(
        "GooseCode TLS keys purged. Restart the server to generate new keys.",
      );
    }),
  );

  return subscriptions;
}

var codeSourcesProvider: CodeSourcesProvider | null = null;

function createTreeProviders(): Array<vscode.Disposable> {
  const subscriptions: Array<vscode.Disposable> = [];

  // Code sources provider
  codeSourcesProvider = new CodeSourcesProvider(workspaceTracker);
  var sub = vscode.window.registerTreeDataProvider(
    "goosecode.codeSources",
    codeSourcesProvider,
  );
  subscriptions.push(sub);

  sub = vscode.commands.registerCommand(
    "goosecode.codeSources.refresh",
    async () => {
      console.log("Refreshing code sources");
      const workspaces = workspaceTracker.refresh();
      codeSourcesProvider!.refresh();
      gooseCodeServer?.pushWorkspacesToGooseCode(workspaces);
    },
  );
  subscriptions.push(sub);

  sub = vscode.commands.registerCommand(
    "goosecode.codeSources.enableGooseCode",
    async (codeSource: CodeSource) => {
      const root = codeSource.resourceUri!.fsPath;
      console.log(`Enabling goosecode: ${root}`);
      loadWorkspaceConfiguration(root, true);
      const workspaces = workspaceTracker.refresh();
      codeSourcesProvider!.refresh();
      gooseCodeServer?.pushWorkspacesToGooseCode(workspaces);
    },
  );
  subscriptions.push(sub);

  sub = vscode.commands.registerCommand(
    "goosecode.codeSources.disableGooseCode",
    async (codeSource: CodeSource) => {
      const codeSourceID = removeWorkspaceConfiguration(
        codeSource.resourceUri!.fsPath,
      );
      console.log(`Disable goosecode: ${codeSourceID}`);
      const workspaces = workspaceTracker.refresh();
      codeSourcesProvider!.refresh();
      gooseCodeServer?.pushWorkspacesToGooseCode(workspaces, {
        workspace_root: codeSource.resourceUri!.fsPath,
        code_source_id: codeSourceID!,
        deleted: true,
      });
    },
  );
  subscriptions.push(sub);

  // WIP _---------------

  sub = vscode.window.onDidChangeActiveTextEditor((editor) => {
    if (editor) {
      workspaceTracker.onActiveFileChanged(editor.document.uri);
    }
  });
  subscriptions.push();

  // Generate session provider
  const generateSessionProvider = new GenerateSessionProvider();
  sub = vscode.window.registerTreeDataProvider(
    "goosecode.generateSession",
    generateSessionProvider,
  );
  subscriptions.push(sub);

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

  const treeSubscriptions = createTreeProviders();
  context.subscriptions.push(...treeSubscriptions);

  // Detect workspace changes
  const workspaceChangeSubscription =
    vscode.workspace.onDidChangeWorkspaceFolders(async (event) => {
      event.added.forEach((folder) => {
        console.log(`Workspace folder added: ${folder.uri.fsPath}`);
      });
      event.removed.forEach((folder) => {
        console.log(`Workspace folder removed: ${folder.uri.fsPath}`);
      });

      const workspaces = workspaceTracker.refresh();
      codeSourcesProvider?.refresh();
      gooseCodeServer?.pushWorkspacesToGooseCode(workspaces);
    });
  context.subscriptions.push(workspaceChangeSubscription);

  // Detect settings changes
  const settingsChangeSubscription = vscode.workspace.onDidChangeConfiguration(
    async (event) => {
      if (event.affectsConfiguration("goosecode")) {
        console.log("GooseCode settings changed");
        const currentlyRunning = gooseCodeServer !== null;
        if (currentlyRunning) {
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
    },
  });
}

// This method is called when your extension is deactivated
export function deactivate() {}
