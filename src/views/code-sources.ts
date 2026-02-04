import * as vscode from "vscode";
import * as fs from "fs";
import * as path from "path";
import { Command, Uri } from "vscode";
import { WorkspaceTracker } from "../workspace-tracker";

export class CodeSourcesProvider
  implements vscode.TreeDataProvider<CodeSource>
{
  constructor(private readonly workspaceTracker: WorkspaceTracker) {}

  private _onDidChangeTreeData: vscode.EventEmitter<
    CodeSource | undefined | void
  > = new vscode.EventEmitter<CodeSource | undefined | void>();
  readonly onDidChangeTreeData: vscode.Event<CodeSource | undefined | void> =
    this._onDidChangeTreeData.event;

  private _onDidChangeView: vscode.EventEmitter<CodeSource | undefined | void> =
    new vscode.EventEmitter<CodeSource | undefined | void>();

  refresh(): void {
    this._onDidChangeTreeData.fire();
  }

  getTreeItem(element: CodeSource): vscode.TreeItem {
    return element;
  }

  async getChildren(element?: CodeSource): Promise<CodeSource[]> {
    const workspaces = await this.workspaceTracker.refresh(true);
    if (!workspaces) {
      return [];
    }

    const dependencies: Array<CodeSource> = [];
    for (const workspace of workspaces) {
      dependencies.push(
        new CodeSource(
          workspace.workspace.name,
          vscode.TreeItemCollapsibleState.None,
          workspace.isEnabled,
          workspace.uri,
        ),
      );
    }
    return dependencies;
  }
}

export class CodeSource extends vscode.TreeItem {
  constructor(
    public readonly label: string,
    public readonly collapsibleState: vscode.TreeItemCollapsibleState,
    public readonly enabled: boolean,
    public readonly resourceUri?: Uri,
    public readonly command?: vscode.Command,
  ) {
    super(label, collapsibleState);

    this.tooltip = `${this.label}-${this.enabled}`;
    // this.description = this.tooltip;
  }

  iconPath = {
    light: path.join(
      __filename,
      "..",
      "..",
      "resources",
      "light",
      this.enabled ? "enabled.svg" : "disabled.svg",
    ),
    dark: path.join(
      __filename,
      "..",
      "..",
      "resources",
      "dark",
      this.enabled ? "enabled.svg" : "disabled.svg",
    ),
  };

  contextValue = "codeSource:" + (this.enabled ? "enabled" : "disabled");
}
