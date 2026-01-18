import * as vscode from "vscode";

export function openSettingsPage() {
  vscode.commands.executeCommand("workbench.action.openSettings", "goosecode.");
}
