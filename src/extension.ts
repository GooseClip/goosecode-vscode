// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import {Disposable} from "vscode";
import * as express from "express";
import * as expressWs from "express-ws";
import {GooseCodeServer} from "./goosecode/server/server";
import {registerGooseCodeCommands} from "./goosecode/goosecode";
import {CodeSource, CodeSourcesProvider} from "./views/code-sources";
import * as https from "node:https";
import {createTLSOptions, purge} from "./tls";
import {getProjectRoot} from "./goosecode/commands/commands";
import {
    CodeSourceID,
    GooseCodeExtensionConfig,
    loadGlobalConfigurations,
    loadWorkspaceConfiguration,
    removeWorkspaceConfiguration,
} from "./config";
import {gettingStarted} from "./getting-started";
import {idepb} from "./proto/idepb/ide";
import PushMessage = idepb.PushMessage;
import {GenerateSessionProvider} from "./views/generate-session";
import PushType = idepb.PushType;
import WorkspacesPush = idepb.WorkspacesPush;
import WorkspaceDetails = idepb.WorkspaceDetails;
import * as fs from "node:fs";
import * as path from "node:path";

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
    codeSourcesProvider = new CodeSourcesProvider();
    const explorerProviderDisposable = vscode.window.registerTreeDataProvider(
        "goosecode.codeSources",
        codeSourcesProvider,
    );
    subscriptions.push(explorerProviderDisposable);
    subscriptions.push(
        vscode.commands.registerCommand(
            "goosecode.codeSources.refresh",
            async () => {
                console.log("Refreshing code sources");
                codeSourcesProvider!.refresh();
                gooseCodeServer?.refreshWorkspacesInGooseCode();
            },
        ),
    );
    subscriptions.push(
        vscode.commands.registerCommand(
            "goosecode.codeSources.enableGooseCode",
            async (codeSource: CodeSource) => {
                const root = codeSource.resourceUri!.fsPath;
                console.log(`Enabling goosecode: ${root}`);
                loadWorkspaceConfiguration(root, true);
                codeSourcesProvider!.refresh();
                gooseCodeServer?.refreshWorkspacesInGooseCode();
            },
        ),
    );
    subscriptions.push(
        vscode.commands.registerCommand(
            "goosecode.codeSources.disableGooseCode",
            async (codeSource: CodeSource) => {
                const codeSourceID = removeWorkspaceConfiguration(codeSource.resourceUri!.fsPath);
                console.log(`Disable goosecode: ${codeSourceID}`);
                codeSourcesProvider!.refresh();
                gooseCodeServer?.refreshWorkspacesInGooseCode({
                    workspace_root: codeSource.resourceUri!.fsPath,
                    code_source_id: codeSourceID!,
                    deleted: true,
                });
            },
        ),
    );

    // Generate session provider
    const generateSessionProvider = new GenerateSessionProvider();
    const generateSessionDisposable = vscode.window.registerTreeDataProvider(
        "goosecode.generateSession",
        generateSessionProvider,
    );
    subscriptions.push(generateSessionDisposable);

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

    const treeSubscriptions = await createTreeProviders();
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

            codeSourcesProvider?.refresh();
            gooseCodeServer?.refreshWorkspacesInGooseCode();
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
            console.log("Disposing extension");
        },
    });
}

// This method is called when your extension is deactivated
export function deactivate() {
}
