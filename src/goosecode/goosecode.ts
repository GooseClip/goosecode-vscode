import * as vscode from "vscode";
import { Disposable } from "vscode";
import { GooseCodeServer } from "./server/server";
import { WorkspaceTracker } from "../workspace-tracker";
import { loadWorkspaceConfiguration } from "../config";
import { getGitInfoFromVscodeApi } from "../git";
import { GenerateResult, handleGenerateCommand } from "./goosecode_generate";
import { handleSnippetCommand } from "./goosecode_snippet";
import { handleMinimapCommand } from "./goosecode_minimap";
import { handleOverlayCommand } from "./goosecode_overlay";
import { handleAddFileCommand } from "./goosecode_add_file";


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
      vscode.window.showInformationMessage("GooseCode: Minimap toggled");
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
      vscode.window.showInformationMessage("GooseCode: Overlay toggled");
    },
  );
  subscriptions.push(sub);

  // Create Snippet
  sub = vscode.commands.registerCommand("goosecode.snippet", async () => {
    if (!(await guard(gooseCodeServer, workspaceTracker))) {
      return;
    }
    handleSnippetCommand(gooseCodeServer!, workspaceTracker, { minimized: false });
    vscode.window.setStatusBarMessage("GooseCode: Snippet added ✅", 2000);
  });
  subscriptions.push(sub);

  // Create Snippet w/ Minimized
  sub = vscode.commands.registerCommand("goosecode.snippetMinimized", async () => {
    if (!(await guard(gooseCodeServer, workspaceTracker))) {
      return;
    }
    handleSnippetCommand(gooseCodeServer!, workspaceTracker, { minimized: true });
    vscode.window.setStatusBarMessage("GooseCode: Snippet added ✅", 2000);
  });
  subscriptions.push(sub);

  sub = vscode.commands.registerCommand("goosecode.generate", async () => {
    if (!(await guard(gooseCodeServer, workspaceTracker))) {
      return;
    }
    const res = await handleGenerateCommand(gooseCodeServer!, workspaceTracker);
    switch (res) {
      case GenerateResult.SNIPPET:
        vscode.window.setStatusBarMessage("GooseCode: Snippet generated ✅", 2000);
        break;
      case GenerateResult.DEFINITION:
        vscode.window.setStatusBarMessage("GooseCode: Definition generated ✅", 2000);
        break;
      case GenerateResult.REFERENCE:
        vscode.window.setStatusBarMessage("GooseCode: Reference generated ✅", 2000);
        break;
      case GenerateResult.IMPLEMENTATION:
        vscode.window.setStatusBarMessage("GooseCode: Implementation generated ✅", 2000);
        break;
      default:
        break;
    }
  });
  subscriptions.push(sub);

  // Add file from explorer context menu
  sub = vscode.commands.registerCommand("goosecode.addFile", async (fileUri: vscode.Uri) => {
    if (!gooseCodeServer?.connected) {
      vscode.window.showErrorMessage("GooseCode is not connected");
      return;
    }

    if (!fileUri) {
      vscode.window.showErrorMessage("No file selected");
      return;
    }

    await handleAddFileCommand(gooseCodeServer!, workspaceTracker, fileUri);
    vscode.window.setStatusBarMessage("GooseCode: File added ✅", 2000);
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
    const gitInfo = await getGitInfoFromVscodeApi(workspace.uri);
    if (!gitInfo?.commit) {
      vscode.window.showErrorMessage(
        "Cannot enable: Git must be initialized with at least one commit.",
      );
      return false;
    }

    const selection = await vscode.window.showErrorMessage(
      "The current file workspace isn't a GooseCode code source. Do you want to enable it?",
      { modal: true },
      "Yes",
      "No",
    );

    if (selection === "Yes") {
      const config = await loadWorkspaceConfiguration(workspace!.uri.fsPath, true);
      if (!config) {
        vscode.window.showErrorMessage(
          "Cannot enable: Git must be initialized with at least one commit.",
        );
        return false;
      }
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
    return true;
  }

  return true;
}
