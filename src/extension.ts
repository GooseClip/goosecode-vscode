// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { ConfigurationTarget } from "vscode";
import { GooseCodeServer } from "./goosecode/server/server";
import { CodeSource, CodeSourcesProvider } from "./views/code-sources";
import { purge } from "./tls";
import {
  GooseCodeExtensionConfig,
  loadGlobalConfigurations,
  loadWorkspaceConfiguration,
  removeWorkspaceConfiguration,
} from "./config";
import { gettingStarted } from "./getting-started";
import { idepb } from "./proto/idepb/ide";
import { WorkspaceTracker } from "./workspace-tracker";
import { registerGooseCodeCommands } from "./goosecode/goosecode";
import { ConnectionProvider } from "./views/connection";

const workspaceTracker = new WorkspaceTracker();
var gooseCodeServer: GooseCodeServer | null = null;
var goosecodeSubscriptions: Array<vscode.Disposable> = [];
var codeSourcesProvider: CodeSourcesProvider | null = null;
var connectionProvider: ConnectionProvider | null = null;

async function startServer(
  context: vscode.ExtensionContext,
  config: GooseCodeExtensionConfig,
) {
  console.log("Starting server, password: ", config.settings.password);
  gooseCodeServer = new GooseCodeServer(
    workspaceTracker,
    config,
    () => {
      // Store context to not show welcome view again
      context.globalState.update("goosecode.initialize", true);
      vscode.commands.executeCommand(
        "setContext",
        "goosecode.initialized",
        true,
      );
      connectionProvider?.refresh();
    },
    () => {
      connectionProvider?.refresh();
    },
  );
  await gooseCodeServer.start();

  // Register real commands
  goosecodeSubscriptions.forEach((s) => s.dispose());
  goosecodeSubscriptions = [];
  goosecodeSubscriptions = registerGooseCodeCommands(
    gooseCodeServer,
    workspaceTracker,
  );
  connectionProvider?.refresh();
  console.log("Started == true");
  vscode.commands.executeCommand("setContext", "goosecode.started", true);
}

async function stopServer(context: vscode.ExtensionContext) {
  gooseCodeServer?.stop();
  gooseCodeServer = null;

  // Register dummy commands
  goosecodeSubscriptions.forEach((s) => s.dispose());
  goosecodeSubscriptions = [];
  goosecodeSubscriptions = registerGooseCodeCommands(null, workspaceTracker);
  connectionProvider?.refresh();

  vscode.commands.executeCommand("setContext", "goosecode.started", false);
}

async function restartServer(context: vscode.ExtensionContext) {
  await stopServer(context);
  const config = await loadGlobalConfigurations(context);
  await startServer(context, config);
}

async function persistentCommands(
  context: vscode.ExtensionContext,
): Promise<Array<vscode.Disposable>> {
  const subscriptions: Array<vscode.Disposable> = [];

  var sub = vscode.commands.registerCommand("goosecode.start", async () => {
    await startServer(context, await loadGlobalConfigurations(context));
    vscode.window.showInformationMessage("GooseCode server started");
  });
  subscriptions.push(sub);

  sub = vscode.commands.registerCommand("goosecode.stop", async () => {
    await stopServer(context);
    vscode.window.showInformationMessage("GooseCode server stopped");
  });
  subscriptions.push(sub);

  sub = vscode.commands.registerCommand("goosecode.restart", async () => {
    await restartServer(context);
    vscode.window.showInformationMessage("GooseCode server restarted");
  });
  subscriptions.push(sub);

  sub = vscode.commands.registerCommand("goosecode.purgeTLS", async () => {
    await purge(context);
    vscode.window.showInformationMessage(
      "GooseCode TLS keys purged. Restart the server to generate new keys.",
    );
  });
  subscriptions.push(sub);

  sub = vscode.commands.registerCommand(
    "goosecode.enableAutoStart",
    async () => {
      vscode.workspace
        .getConfiguration("goosecode")
        .update("startAutomatically", true, ConfigurationTarget.Global);
      await startServer(context, await loadGlobalConfigurations(context));
    },
  );
  subscriptions.push(sub);

  sub = vscode.commands.registerCommand(
    "goosecode.openWalkthrough",
    async () => {
      console.log("HERE");
      vscode.commands.executeCommand(
        "workbench.action.openWalkthrough",
        "GooseClip.goosecode#goosecode",
        false,
      );
    },
  );
  subscriptions.push(sub);

  sub = vscode.window.onDidChangeActiveTextEditor((editor) => {
    if (editor) {
      workspaceTracker.onActiveFileChanged(editor.document.uri);
    }
  });
  subscriptions.push(sub);

  return subscriptions;
}

function createTreeProviders(
  context: vscode.ExtensionContext,
): Array<vscode.Disposable> {
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
    "goosecode.codeSources.enableCodeSource",
    async (codeSource: CodeSource) => {
      try {
        const root = codeSource.resourceUri!.fsPath;
        console.log(`Enabling goosecode: ${root}`);
        loadWorkspaceConfiguration(root, true);
        const workspaces = workspaceTracker.refresh();
        codeSourcesProvider!.refresh();
        gooseCodeServer?.pushWorkspacesToGooseCode(workspaces);
      } catch (e) {
        console.error(e);
      }
    },
  );
  subscriptions.push(sub);

  sub = vscode.commands.registerCommand(
    "goosecode.codeSources.disableCodeSource",
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

  // Connection provider
  connectionProvider = new ConnectionProvider(
    () => gooseCodeServer,
    () => context.globalState.get("goosecode.initialize") ?? false,
  );
  sub = vscode.window.registerTreeDataProvider(
    "goosecode.connection",
    connectionProvider,
  );
  subscriptions.push(sub);

  return subscriptions;
}

export async function activate(context: vscode.ExtensionContext) {
  // Store context to not show welcome view again
  if (context.globalState.get("goosecode.initialize")) {
    vscode.commands.executeCommand("setContext", "goosecode.initialized", true);
  }

  const config = await loadGlobalConfigurations(context);
  if (config.settings.startAutomatically) {
    await startServer(context, config);
  } else {
    console.log("Started == false");
    vscode.commands.executeCommand("setContext", "goosecode.started", false);
    // Show warning
    vscode.window.showWarningMessage(
      "GooseCode is not running. You can start it from the command palette. To start automatically, enable the setting 'GooseCode: Start Automatically'",
    );
  }

  const treeSubscriptions = createTreeProviders(context);
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
      stopServer(context);
    },
  });
}

// This method is called when your extension is deactivated
export function deactivate() {}
