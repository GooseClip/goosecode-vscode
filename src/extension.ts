// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { ConfigurationTarget, workspace } from "vscode";
import { GooseCodeServer } from "./goosecode/server/server";
import { CodeSource, CodeSourcesProvider } from "./views/code-sources";
import { purge } from "./tls";
import {
  GooseCodeExtensionConfig,
  loadGlobalConfigurations,
  loadWorkspaceConfiguration,
  removeWorkspaceConfiguration,
} from "./config";
import { gettingStarted, openSettingsPage } from "./getting-started";
import { WorkspaceTracker } from "./workspace-tracker";
import { registerGooseCodeCommands } from "./goosecode/goosecode";
import { ConnectionProvider } from "./views/connection";
import { ActiveSessionProvider } from "./views/active-session";

import { goosecode } from "./proto/ide/ide";

var workspaceTracker: WorkspaceTracker | null = null;
var gooseCodeServer: GooseCodeServer | null = null;
var goosecodeSubscriptions: Array<vscode.Disposable> = [];
var codeSourcesProvider: CodeSourcesProvider | null = null;
var connectionProvider: ConnectionProvider | null = null;
var activeSessionProvider: ActiveSessionProvider | null = null;

import WorkspaceDetails = goosecode.v2.app.source.ide.WorkspaceDetails;

async function startServer(
  context: vscode.ExtensionContext,
  config: GooseCodeExtensionConfig,
) {
  gooseCodeServer = new GooseCodeServer(
    workspaceTracker!,
    config,
    () => {
      // Store context to not show welcome view again
      context.globalState.update("goosecode.initialized", true);
      vscode.commands.executeCommand(
        "setContext",
        "goosecode.initialized",
        true,
      );

      // Notify UI / Context menus that we have a connection
      vscode.commands.executeCommand("setContext", "goosecode.connected", true);

      connectionProvider?.refresh();
    },
    () => {
      // Notify UI / Context menus that we don't have a connection
      vscode.commands.executeCommand(
        "setContext",
        "goosecode.connected",
        false,
      );

      connectionProvider?.refresh();
    },
  );
  await gooseCodeServer.start();

  // Register real commands
  goosecodeSubscriptions.forEach((s) => s.dispose());
  goosecodeSubscriptions = [];
  goosecodeSubscriptions = registerGooseCodeCommands(
    gooseCodeServer,
    workspaceTracker!,
  );
  connectionProvider?.refresh();
  vscode.commands.executeCommand("setContext", "goosecode.started", true);
}

async function stopServer(context: vscode.ExtensionContext) {
  gooseCodeServer?.stop();
  gooseCodeServer = null;

  // Register dummy commands
  goosecodeSubscriptions.forEach((s) => s.dispose());
  goosecodeSubscriptions = [];
  goosecodeSubscriptions = registerGooseCodeCommands(null, workspaceTracker!);
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
    if (gooseCodeServer !== null) {
      return;
    }
    await startServer(context, await loadGlobalConfigurations(context));
    vscode.window.showInformationMessage("GooseCode server started");
  });
  subscriptions.push(sub);

  sub = vscode.commands.registerCommand("goosecode.stop", async () => {
    if (gooseCodeServer === null) {
      return;
    }
    await stopServer(context);
    vscode.window.showInformationMessage("GooseCode server stopped");
  });
  subscriptions.push(sub);

  sub = vscode.commands.registerCommand("goosecode.restart", async () => {
    await restartServer(context);
    vscode.window.showInformationMessage("GooseCode server restarted");
  });
  subscriptions.push(sub);

  (sub = vscode.commands.registerCommand("goosecode.openSettings", async () => {
    openSettingsPage();
  })),
    subscriptions.push(sub);

  sub = vscode.commands.registerCommand(
    "goosecode.regenerateCertificatesAndPassword",
    async () => {
      context.globalState.update("goosecode.initialized", false);
      await purge(context);
      await restartServer(context);
      vscode.window.showInformationMessage(
        "GooseCode TLS keys purged and password has been changed.",
      );
      vscode.window.showWarningMessage(
        "All previously connected GooseCode clients will need to be reconfigured.",
      );
    },
  );
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
      vscode.commands.executeCommand(
        "workbench.action.openWalkthrough",
        "gooseclip.goosecode#goosecode",
        false,
      );
    },
  );
  subscriptions.push(sub);

  sub = vscode.window.onDidChangeActiveTextEditor((editor) => {
    if (editor) {
      workspaceTracker!.onActiveFileChanged(editor.document.uri);
    }
  });
  subscriptions.push(sub);

  return subscriptions;
}

function createTreeProviders(
  context: vscode.ExtensionContext,
): Array<vscode.Disposable> {
  const subscriptions: Array<vscode.Disposable> = [];

  // Active session provider
  activeSessionProvider = new ActiveSessionProvider();

  var sub = vscode.window.registerTreeDataProvider(
    "goosecode.activeSession",
    activeSessionProvider,
  );
  subscriptions.push(sub);

  // Code sources provider
  codeSourcesProvider = new CodeSourcesProvider(workspaceTracker!);
  const treeView = vscode.window.createTreeView("goosecode.codeSources", {
    treeDataProvider: codeSourcesProvider,
  });

  sub = treeView.onDidChangeVisibility((e) => {
    vscode.commands.executeCommand(
      "setContext",
      "goosecode.treeview.codeSources.visible",
      e.visible,
    );
  });
  subscriptions.push(treeView);
  subscriptions.push(sub);

  sub = vscode.commands.registerCommand(
    "goosecode.codeSources.refresh",
    async () => {
      const workspaces = await workspaceTracker!.refresh();
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
        const workspaces = await workspaceTracker!.refresh();
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
      const codeSourceID = await removeWorkspaceConfiguration(
        codeSource.resourceUri!.fsPath,
      );
      console.log(`Disable goosecode: ${codeSourceID}`);
      const workspaces = await workspaceTracker!.refresh();
      gooseCodeServer?.pushWorkspacesToGooseCode(workspaces, new WorkspaceDetails({
        workspace_root: codeSource.resourceUri!.fsPath,
        repository_snapshot_fingerprint: codeSourceID!,
        deleted: true,
      }));
    },
  );
  subscriptions.push(sub);

  // Connection provider
  connectionProvider = new ConnectionProvider(
    () => gooseCodeServer,
    () => context.globalState.get("goosecode.initialized") ?? false,
  );
  sub = vscode.window.registerTreeDataProvider(
    "goosecode.connection",
    connectionProvider,
  );
  subscriptions.push(sub);

  return subscriptions;
}

export async function activate(context: vscode.ExtensionContext) {
  workspaceTracker = new WorkspaceTracker((options) => {
    console.log("Workspaces refreshed");
    if (options.refreshCodeSources) {
      codeSourcesProvider!.refresh();
    }
    vscode.commands.executeCommand(
      "setContext",
      "goosecode.hasActiveCodeSources",
      workspaceTracker!.activeWorkspaces().length > 0 ? true : false,
    );
  });
  // Store context to not show welcome view again
  const initialized = context.globalState.get("goosecode.initialized");
  if (initialized) {
    vscode.commands.executeCommand("setContext", "goosecode.initialized", true);
  }

  const config = await loadGlobalConfigurations(context);
  if (config.settings.startAutomatically) {
    await startServer(context, config);
  } else {
    vscode.commands.executeCommand("setContext", "goosecode.started", false);
    if (initialized) {
      // Show warning
      vscode.window
        .showWarningMessage(
          "GooseCode is not running. Would you like to start it?",
          "Start Automatically",
          "Start Once",
          "Do not start",
        )
        .then((selection) => {
          if (selection === "Start Automatically") {
            vscode.workspace
              .getConfiguration("goosecode")
              .update("startAutomatically", true, ConfigurationTarget.Global);
            startServer(context, config);
          } else if (selection === "Start Once") {
            startServer(context, config);
          }
        });
    }
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

      const workspaces = await workspaceTracker!.refresh();
      gooseCodeServer?.pushWorkspacesToGooseCode(workspaces);
    });
  context.subscriptions.push(workspaceChangeSubscription);

  // Detect settings changes
  const settingsChangeSubscription = vscode.workspace.onDidChangeConfiguration(
    async (event) => {
      if (event.affectsConfiguration("goosecode")) {
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
  const gettingStartedCommandSubscriptions = gettingStarted(context, () => {
    workspaceTracker!.workspaces.forEach((workspace) => {
      loadWorkspaceConfiguration(workspace.uri.fsPath, true);
    });
    workspaceTracker!.refresh();
    codeSourcesProvider?.refresh();
    gooseCodeServer?.pushWorkspacesToGooseCode(workspaceTracker!.workspaces);
  });
  context.subscriptions.push(...gettingStartedCommandSubscriptions);

  context.subscriptions.push({
    dispose: () => {
      stopServer(context);
    },
  });
}

// This method is called when your extension is deactivated
export function deactivate() {}
