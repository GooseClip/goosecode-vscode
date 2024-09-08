import * as vscode from "vscode";
import {Disposable} from "vscode";

export function openSettingsPage() {
    vscode.commands.executeCommand("workbench.action.openSettings", "goosecode.");
}

export function gettingStarted(context: vscode.ExtensionContext): Array<Disposable>{
    const subscriptions : Array<Disposable> = [];
    subscriptions.push(
        vscode.commands.registerCommand(
            "getting-started-goosecode.downloadComplete",
            async () => {},
        ),
    );

    subscriptions.push(
        vscode.commands.registerCommand(
            "getting-started-goosecode.checkSettings",
            async () => {
                openSettingsPage();
            },
        ),
    );

    subscriptions.push(
        vscode.commands.registerCommand(
            "getting-started-goosecode.testConnection",
            async () => {},
        ),
    );

    subscriptions.push(
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

    subscriptions.push(
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

    return subscriptions;
}