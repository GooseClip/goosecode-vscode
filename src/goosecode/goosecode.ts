import * as vscode from "vscode";
import { Disposable } from "vscode";
import { GooseCodeServer } from "./server/server";
import { WorkspaceTracker } from "../workspace-tracker";
import { loadWorkspaceConfiguration } from "../config";
import * as gc from "../gen/ide";
import { handleGenerateCommand } from "./goosecode_generate";
import { handleSnippetCommand } from "./goosecode_snippet";
import { handleMinimapCommand } from "./goosecode_minimap";
import { handleOverlayCommand } from "./goosecode_overlay";


export function registerGooseCodeCommands(
  gooseCodeServer: GooseCodeServer | null,
  workspaceTracker: WorkspaceTracker,
): Array<Disposable> {
  const subscriptions: Array<Disposable> = [];

  // Toggle minimap
  var sub = vscode.commands.registerCommand(
    "goosecode.appcommand.minimap",
    async () => {
      const independent = {
        workspaceIndependent: true,
      };
      if (!(await guard(gooseCodeServer, workspaceTracker, independent))) {
        return;
      }
      handleMinimapCommand(gooseCodeServer!, workspaceTracker);
    },
  );
  subscriptions.push(sub);

  // Toggle overlay
  var sub = vscode.commands.registerCommand(
    "goosecode.appcommand.overlay",
    async () => {
      const independent = {
        workspaceIndependent: true,
      };
      if (!(await guard(gooseCodeServer, workspaceTracker, independent))) {
        return;
      }
      handleOverlayCommand(gooseCodeServer!, workspaceTracker);
    },
  );
  subscriptions.push(sub);

  // Create Snippet
  sub = vscode.commands.registerCommand("goosecode.snippet", async () => {
    if (!(await guard(gooseCodeServer, workspaceTracker))) {
      return;
    }
    handleSnippetCommand(gooseCodeServer!, workspaceTracker, { minimized: false });
  });
  subscriptions.push(sub);

  // Create Snippet w/ Minimized
  sub = vscode.commands.registerCommand("goosecode.snippetMinimized", async () => {
    if (!(await guard(gooseCodeServer, workspaceTracker))) {
      return;
    }
    handleSnippetCommand(gooseCodeServer!, workspaceTracker, { minimized: true });
  });
  subscriptions.push(sub);

  sub = vscode.commands.registerCommand("goosecode.generate", async () => {
    if (!(await guard(gooseCodeServer, workspaceTracker))) {
      return;
    }
    handleGenerateCommand(gooseCodeServer!, workspaceTracker);

  });
  subscriptions.push(sub);

  return subscriptions;
}


async function guard(
  gooseCodeServer: GooseCodeServer | null,
  workspaceTracker: WorkspaceTracker,
  { workspaceIndependent }: { workspaceIndependent?: boolean } = {
    workspaceIndependent: false,
  },
): Promise<boolean> {
  if (!gooseCodeServer) {
    vscode.window.showErrorMessage("GooseCode server is not running");
    return false;
  }

  if (!gooseCodeServer!.connected) {
    vscode.window.showErrorMessage("GooseCode server is not connected");
    return false;
  }

  if (workspaceIndependent) {
    return true;
  }

  const editor = vscode.window.activeTextEditor;
  if (!editor) {
    vscode.window.showWarningMessage("Command requires active editor");
    return false;
  }

  var workspace = workspaceTracker.getWorkspaceFromFile(editor.document.uri);

  if (workspace && !workspace.isEnabled) {
    const selection = await vscode.window.showErrorMessage(
      "The current file workspace isn't a GooseCode code source. Do you want to enable it?",
      { modal: true },
      "Yes",
      "No",
    );

    if (selection === "Yes") {
      // Handle yes
      loadWorkspaceConfiguration(workspace!.uri.fsPath, true);
      vscode.window.showInformationMessage("Code source enabled");
      const workspaces = await workspaceTracker.refresh();
      gooseCodeServer?.pushWorkspacesToGooseCode(workspaces);
      workspaceTracker.onActiveFileChanged(editor.document.uri);
      // Wait a bit
      await new Promise((resolve) => setTimeout(resolve, 700));
      return true;
    }
    vscode.window.showInformationMessage("GooseCode generate not executed");
    return false;
  }

  // External dependency
  if (!workspace) {
    // vscode.window.showErrorMessage(
    //     "No code source to associate with external dependency",
    // );
    return true;
  }

  return true;
}
