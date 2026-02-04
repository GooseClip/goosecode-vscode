import * as vscode from "vscode";
import * as fs from "fs";
import * as path from "path";
import { Uri } from "vscode";

export class ActiveSessionProvider
  implements vscode.TreeDataProvider<SessionEvent>
{
  private _onDidChangeTreeData: vscode.EventEmitter<
    SessionEvent | undefined | void
  > = new vscode.EventEmitter<SessionEvent | undefined | void>();
  readonly onDidChangeTreeData: vscode.Event<SessionEvent | undefined | void> =
    this._onDidChangeTreeData.event;

  constructor() {}

  refresh(): void {
    this._onDidChangeTreeData.fire();
  }

  getTreeItem(element: SessionEvent): vscode.TreeItem {
    return element;
  }

  getChildren(element?: SessionEvent): Thenable<SessionEvent[]> {
    return Promise.resolve([]);
  }
}

export class SessionEvent extends vscode.TreeItem {
  constructor(
    public readonly label: string,
    public readonly collapsibleState: vscode.TreeItemCollapsibleState,
    public readonly enabled: boolean,
    private readonly showContextButtons: boolean = false,
    public readonly resourceUri?: Uri,
    public readonly command?: vscode.Command,
  ) {
    super(label, collapsibleState);

    this.tooltip = `${this.label}-${this.enabled}`;
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

  contextValue = !this.showContextButtons
    ? undefined
    : this.enabled
      ? "enabled"
      : "disabled";
}
