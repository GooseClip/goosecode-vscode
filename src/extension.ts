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
import { openSettingsPage } from "./getting-started";
import { WorkspaceTracker } from "./workspace-tracker";
import { registerGooseCodeCommands } from "./goosecode/goosecode";
import { ConnectionProvider } from "./views/connection";
import {
  WarningsProvider,
  WorkspaceWarning,
} from "./views/warnings";
import * as gc from "./gen/ide";
import { findAvailablePort } from "./util";

import { v4 as uuidv4 } from "uuid";

let workspaceTracker: WorkspaceTracker | null = null;
let gooseCodeServer: GooseCodeServer | null = null;
let goosecodeSubscriptions: Array<vscode.Disposable> = [];
let codeSourcesProvider: CodeSourcesProvider | null = null;
let connectionProvider: ConnectionProvider | null = null;
let warningsProvider: WarningsProvider | null = null;
let extensionContext: vscode.ExtensionContext | null = null;

// Server error state
let serverError: { code: string; message: string; port: number } | null = null;

export function getServerError(): { code: string; message: string; port: number } | null {
  return serverError;
}

export function getInstanceId(): string {
  if (!extensionContext) {
    return "default";
  }
  return String(extensionContext.globalState.get("instanceId") ?? "default");
}


import Bonjour from 'bonjour-service';

let bonjour: Bonjour | undefined;
let bonjourService: any;
let bonjourTimeout: NodeJS.Timeout | undefined;

export function isBonjourRunning(): boolean {
  return !!bonjourService;
}

async function startBonjourService(
  context: vscode.ExtensionContext,
  durationSeconds?: number,
) {
  await stopBonjourService();

  const port = gooseCodeServer?.port;
  if (!port) {
    console.warn(
      "Cannot start bonjour service, server not running or port not available.",
    );
    return;
  }
  bonjour = new Bonjour();
  const instanceId = String(context.globalState.get("instanceId") ?? "default");
  const smallId = instanceId.slice(0, 8);
  const mdnsHost = `goosecode-${smallId}.local`;


  bonjourService = bonjour.publish({
    name: `GooseCode (${smallId})`,
    type: "goosecode", // creates _goosecode._tcp.local
    protocol: "tcp",
    port,
    host: mdnsHost,
    txt: {
      proto: 'https', // Added: Specify HTTPS protocol
      v: '1.0',
      id: context.globalState.get('instanceId') ?? 'default'
    }
  });

  bonjourService.on("up", () => {
    connectionProvider?.refresh();
  });

  bonjourService.on("error", (err: unknown) => {
    console.error("mDNS error:", err);
  });

  bonjourService.on("down", () => {
    // Service withdrawn
  });

  if (durationSeconds && durationSeconds > 0) {
    if (bonjourTimeout) {
      clearTimeout(bonjourTimeout);
    }
    bonjourTimeout = setTimeout(() => {
      stopBonjourService();
    }, durationSeconds * 1000);
  }
}

export function stopBonjourService(): Promise<void> {
  return new Promise((resolve) => {
    if (bonjourTimeout) {
      clearTimeout(bonjourTimeout);
      bonjourTimeout = undefined;
    }

    const finalize = () => {
      try { bonjour?.unpublishAll(); } catch { }
      try { bonjour?.destroy(); } catch { }
      bonjour = undefined;
      bonjourService = undefined;
      connectionProvider?.refresh();
      resolve();
    };

    if (!bonjourService) {
      finalize();
      return;
    }

    try {
      // Prefer the explicit stop callback so the library flushes “goodbye”
      bonjourService.stop(() => {
        console.log("mDNS service stopped.");
        finalize();
      });
    } catch (e) {
      console.error("Error stopping bonjour service", e);
      finalize();
    }
  });
}
async function startServer(
  context: vscode.ExtensionContext,
  config: GooseCodeExtensionConfig,
): Promise<{ success: boolean; error?: { code: string; message: string } }> {
  // Clear any previous error state
  serverError = null;
  vscode.commands.executeCommand("setContext", "goosecode.portConflict", false);

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
  const result = await gooseCodeServer.start();

  if (!result.success) {
    // Check if EADDRINUSE - either as error code or in the message
    const isPortInUse = result.error?.code === 'EADDRINUSE' || 
      result.error?.message?.includes('EADDRINUSE');
    
    // Store the error state with port info
    serverError = {
      code: isPortInUse ? 'EADDRINUSE' : (result.error?.code ?? 'UNKNOWN'),
      message: result.error?.message ?? 'Unknown error',
      port: config.settings.port,
    };

    // Clean up the server reference since it failed
    gooseCodeServer = null;
    
    if (isPortInUse) {
      vscode.commands.executeCommand("setContext", "goosecode.portConflict", true);
      
      // Show user-friendly error with action to change port
      vscode.window.showErrorMessage(
        `GooseCode: Port ${config.settings.port} is already in use - please change the port in settings.`,
        "Change Port for Workspace",
        "Open Settings"
      ).then((selection) => {
        if (selection === "Change Port for Workspace") {
          vscode.commands.executeCommand("goosecode.changePortForWorkspace");
        } else if (selection === "Open Settings") {
          vscode.commands.executeCommand("goosecode.openSettings");
        }
      });
    } else {
      // For other errors, show a simplified message
      vscode.window.showErrorMessage(
        `GooseCode server failed to start. Check the output panel for details.`
      );
      console.error("GooseCode server error:", result.error?.message);
    }

    connectionProvider?.refresh();
    vscode.commands.executeCommand("setContext", "goosecode.started", false);
    return result;
  }

  // Register real commands
  goosecodeSubscriptions.forEach((s) => s.dispose());
  goosecodeSubscriptions = [];
  goosecodeSubscriptions = registerGooseCodeCommands(
    gooseCodeServer,
    workspaceTracker!,
  );
  connectionProvider?.refresh();
  vscode.commands.executeCommand("setContext", "goosecode.started", true);
  return result;
}

function stopServer() {
  gooseCodeServer?.stop();
  gooseCodeServer = null;

  // Clear error state
  serverError = null;
  vscode.commands.executeCommand("setContext", "goosecode.portConflict", false);

  // Register dummy commands
  goosecodeSubscriptions.forEach((s) => s.dispose());
  goosecodeSubscriptions = [];
  goosecodeSubscriptions = registerGooseCodeCommands(null, workspaceTracker!);
  connectionProvider?.refresh();

  vscode.commands.executeCommand("setContext", "goosecode.started", false);
}

async function restartServer(context: vscode.ExtensionContext) {
  // Check if Bonjour was running before restart
  const wasBonjour = isBonjourRunning();
  
  stopServer();
  const config = await loadGlobalConfigurations(context);
  const result = await startServer(context, config);
  
  // Re-advertise with new port if Bonjour was active and server started successfully
  if (result.success && wasBonjour) {
    await startBonjourService(context);
  }
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
    await stopServer();
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
    "goosecode.connections.enableLocalhostOnly",
    async () => {
      await vscode.workspace
        .getConfiguration("goosecode")
        .update(
          "connections.localhostOnly",
          true,
          ConfigurationTarget.Global,
        );
    },
  );
  subscriptions.push(sub);

  sub = vscode.commands.registerCommand(
    "goosecode.connections.disableLocalhostOnly",
    async () => {
      await vscode.workspace
        .getConfiguration("goosecode")
        .update(
          "connections.localhostOnly",
          false,
          ConfigurationTarget.Global,
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
      vscode.env.openExternal(
        vscode.Uri.parse(
          "https://gooseclip.gitbook.io/goosecode/application/ide-integration-alpha",
        ),
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

  // Command to change port for this workspace
  sub = vscode.commands.registerCommand(
    "goosecode.changePortForWorkspace",
    async () => {
      const currentPort = vscode.workspace
        .getConfiguration("goosecode")
        .get("connections.port") as number;
      
      // Find a suggested available port
      const suggestedPort = await findAvailablePort(currentPort + 1);
      
      const input = await vscode.window.showInputBox({
        prompt: "Enter a new port number for this workspace",
        value: suggestedPort?.toString() ?? (currentPort + 1).toString(),
        validateInput: (value) => {
          const port = parseInt(value, 10);
          if (isNaN(port) || port < 1024 || port > 65535) {
            return "Please enter a valid port number (1024-65535)";
          }
          return null;
        },
      });

      if (input) {
        const newPort = parseInt(input, 10);
        
        // Save to workspace settings if a workspace is open, otherwise use global
        const hasWorkspace = vscode.workspace.workspaceFolders && vscode.workspace.workspaceFolders.length > 0;
        const target = hasWorkspace ? ConfigurationTarget.Workspace : ConfigurationTarget.Global;
        
        await vscode.workspace
          .getConfiguration("goosecode")
          .update("connections.port", newPort, target);
        
        // Restart the server with the new port
        await restartServer(context);
        
        const scopeMsg = hasWorkspace ? "for this workspace" : "globally";
        vscode.window.showInformationMessage(
          `GooseCode port changed to ${newPort} ${scopeMsg}.`,
        );
      }
    },
  );
  subscriptions.push(sub);

  return subscriptions;
}

async function updateLocalhostOnlyContext() {
  const config = workspace.getConfiguration("goosecode");
  const isLocalhostOnly = config.get("connections.localhostOnly");
  await vscode.commands.executeCommand(
    "setContext",
    "goosecode.isLocalhostOnly",
    isLocalhostOnly,
  );
}

function createTreeProviders(
  context: vscode.ExtensionContext,
): Array<vscode.Disposable> {
  const subscriptions: Array<vscode.Disposable> = [];

  // Warnings provider
  warningsProvider = new WarningsProvider();

  var sub = vscode.window.registerTreeDataProvider(
    "goosecode.warnings",
    warningsProvider,
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
        const config = await loadWorkspaceConfiguration(root, true);
        if (!config) {
          vscode.window.showErrorMessage(
            "Cannot enable: Git must be initialized with at least one commit.",
          );
          return;
        }
        const workspaces = await workspaceTracker!.refresh();
        gooseCodeServer?.pushWorkspacesToGooseCode(workspaces);
        codeSourcesProvider?.refresh();
      } catch (e) {
        console.error(e);
      }
    },
  );
  subscriptions.push(sub);

  sub = vscode.commands.registerCommand(
    "goosecode.codeSources.disableCodeSource",
    async (codeSource: CodeSource) => {
      const removed = await removeWorkspaceConfiguration(
        codeSource.resourceUri!.fsPath,
      );
      const workspaces = await workspaceTracker!.refresh();
      gooseCodeServer?.pushWorkspacesToGooseCode(workspaces, gc.WorkspaceDetails.create({
        workspaceRoot: codeSource.resourceUri!.fsPath,
        versionControlInfo: gc.VersionControlInfo.create({
          repositoryFullname: removed?.repositoryFullName ?? "",
          branch: removed?.branch ?? "",
          commit: removed?.commit ?? "",
        }),
        deleted: true,
      }),
      );
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

  sub = vscode.commands.registerCommand("goosecode.copyPassword", async () => {
    const config = await loadGlobalConfigurations(context);
    if (config.settings.password) {
      vscode.env.clipboard.writeText(config.settings.password);
      vscode.window.showInformationMessage(
        "GooseCode password copied to clipboard.",
      );
    } else {
      vscode.window.showErrorMessage("Could not find GooseCode password to copy.");
    }
  });
  subscriptions.push(sub);

  return subscriptions;
}

export async function activate(context: vscode.ExtensionContext) {
  // Store context reference for getInstanceId
  extensionContext = context;

  if (!context.globalState.get("instanceId")) {
    context.globalState.update("instanceId", uuidv4());
  }

  workspaceTracker = new WorkspaceTracker((options) => {
    if (options.refreshCodeSources) {
      codeSourcesProvider!.refresh();
    }
    vscode.commands.executeCommand(
      "setContext",
      "goosecode.hasActiveCodeSources",
      workspaceTracker!.activeWorkspaces().length > 0 ? true : false,
    );

    const warnings: WorkspaceWarning[] = [];
    for (const ws of workspaceTracker!.activeWorkspaces()) {
      if (ws.config?.config.repositoryFullName.startsWith("local/")) {
        warnings.push({
          workspaceName: ws.workspace.name,
          message: "Remote repository not detected",
          severity: "warning",
        });
      }
    }
    warningsProvider?.refresh(warnings);
    vscode.commands.executeCommand(
      "setContext",
      "goosecode.hasWarnings",
      warnings.length > 0,
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

  await workspaceTracker!.refresh();

  // Detect workspace changes
  const workspaceChangeSubscription =
    vscode.workspace.onDidChangeWorkspaceFolders(async (event) => {
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
        connectionProvider?.refresh();
        await updateLocalhostOnlyContext();
      }
    },
  );
  context.subscriptions.push(settingsChangeSubscription);

  // Persistent commands
  const persistentCommandSubscriptions = await persistentCommands(context);
  context.subscriptions.push(...persistentCommandSubscriptions);

  await updateLocalhostOnlyContext();


  context.subscriptions.push({
    dispose: () => {
      stopServer();
    },
  });

  context.subscriptions.push(
    vscode.commands.registerCommand("goosecode.broadcast", () => {
      if (gooseCodeServer) {
        startBonjourService(context, 60);
        vscode.window.showInformationMessage(
          "Broadcasting GooseCode service for 60 seconds.",
        );
      } else {
        vscode.window.showWarningMessage("GooseCode server is not running.");
      }
    }),
  );
}

// This method is called when your extension is deactivated
export async function deactivate(): Promise<void> {
  await Promise.all([stopBonjourService(), stopServer()]);
}
