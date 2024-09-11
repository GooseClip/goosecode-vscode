import * as vscode from "vscode";
import * as fs from "fs";
import * as path from "path";
import { Uri } from "vscode";
import { GooseCodeServer } from "../goosecode/server/server";

export class ConnectionProvider implements vscode.TreeDataProvider<Connection> {
  private _onDidChangeTreeData: vscode.EventEmitter<
    Connection | undefined | void
  > = new vscode.EventEmitter<Connection | undefined | void>();
  readonly onDidChangeTreeData: vscode.Event<Connection | undefined | void> =
    this._onDidChangeTreeData.event;

  constructor(
    private readonly getServer: () => GooseCodeServer | null,
    private readonly getHasBeenInitialized: () => boolean,
  ) {}

  refresh(): void {
    this._onDidChangeTreeData.fire();
  }

  getTreeItem(element: Connection): vscode.TreeItem {
    return element;
  }

  getChildren(element?: Connection): Thenable<Connection[]> {
    const server = this.getServer();
    if (server === null || !this.getHasBeenInitialized()) {
      return Promise.resolve([]);
    }

    return Promise.resolve([
      new Connection(
        "Server running",
        vscode.TreeItemCollapsibleState.None,
        server !== null,
        true,
      ),
      new Connection(
        "Connected",
        vscode.TreeItemCollapsibleState.None,
        server?.connected ?? false,
      ),
    ]);
  }
}

export class Connection extends vscode.TreeItem {
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

  contextValue = !this.showContextButtons
    ? undefined
    : this.enabled
      ? "enabled"
      : "disabled";
}
