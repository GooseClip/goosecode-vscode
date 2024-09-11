import * as vscode from "vscode";
import { Disposable, workspace } from "vscode";
import { WorkspaceTracker } from "./workspace-tracker";
import { loadWorkspaceConfiguration } from "./config";

export function openSettingsPage() {
  vscode.commands.executeCommand("workbench.action.openSettings", "goosecode.");
}

export function gettingStarted(
  context: vscode.ExtensionContext,
  enableAllCodeSources: () => void,
): Array<Disposable> {
  const subscriptions: Array<Disposable> = [];
  subscriptions.push(
    vscode.commands.registerCommand(
      "getting-started-goosecode.downloadComplete",
      async () => {
        console.log("I have goosecode");
      },
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
      "getting-started-goosecode.aboutCodeSources",
      async () => {
        console.log("I understand");
      },
    ),
  );

  subscriptions.push(
    vscode.commands.registerCommand(
      "getting-started-goosecode.enableAllCodeSources",
      async () => {
        enableAllCodeSources();
      },
    ),
  );

  subscriptions.push(
    vscode.commands.registerCommand(
      "getting-started-goosecode.linearStrategy",
      async () => {
        console.log("I understand");
      },
    ),
  );

  subscriptions.push(
    vscode.commands.registerCommand(
      "getting-started-goosecode.swimlaneStrategy",
      async () => {
        console.log("I understand");
      },
    ),
  );

  subscriptions.push(
    vscode.commands.registerCommand(
      "getting-started-goosecode.aboutGeneration",
      async () => {
        console.log("I understand");
      },
    ),
  );

  subscriptions.push(
    vscode.commands.registerCommand(
      "getting-started-goosecode.minimap",
      async () => {
        console.log("I understand");
      },
    ),
  );

  subscriptions.push(
    vscode.commands.registerCommand(
      "getting-started-goosecode.copyPassword",
      async () => {
        // Copy the password from goosecode.connections.password into clipboard and notify
        const password = vscode.workspace
          .getConfiguration("goosecode")
          .get("connections.password") as string;
        await vscode.env.clipboard.writeText(password);
        vscode.window.showInformationMessage("Password copied to clipboard");
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
