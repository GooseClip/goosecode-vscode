import * as vscode from "vscode";
import * as fs from "fs";
import * as path from "path";
import { Uri } from "vscode";
import { GooseCodeServer } from "../goosecode/server/server";
import { isBonjourRunning } from "../extension";

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

    const localhostOnly = server.extensionConfig.settings.localhostOnly;

    const items = [
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
    ];

    if (server !== null) {
      const localhostOnly = server.extensionConfig.settings.localhostOnly;
      items.push(
        new Connection(
          "Localhost Only",
          vscode.TreeItemCollapsibleState.None,
          localhostOnly,
          true,
          undefined,
          undefined,
          "status",
          "localhostItem",
        ),
      );
      items.push(
        new Connection(
          "Discoverable",
          vscode.TreeItemCollapsibleState.None,
          isBonjourRunning(),
          true,
          undefined,
          undefined,
          "status",
          "discoverableItem",
        ),
      );
    }

    return Promise.resolve(items);
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
    iconStyle: "status" | "toggle" = "status",
    contextValueOverride?: string,
  ) {
    super(label, collapsibleState);

    this.tooltip = `${this.label}-${this.enabled}`;
    // this.description = this.tooltip;

    if (contextValueOverride) {
      this.contextValue = contextValueOverride;
    } else {
      this.contextValue = !this.showContextButtons
        ? undefined
        : this.enabled
          ? "enabled"
          : "disabled";
    }

    const enabledIcon =
      iconStyle === "status" ? "enabled.svg" : "toggle_on.svg";
    const disabledIcon =
      iconStyle === "status" ? "disabled.svg" : "toggle_off.svg";

    this.iconPath = {
      light: path.join(
        __filename,
        "..",
        "..",
        "resources",
        "light",
        this.enabled ? enabledIcon : disabledIcon,
      ),
      dark: path.join(
        __filename,
        "..",
        "..",
        "resources",
        "dark",
        this.enabled ? enabledIcon : disabledIcon,
      ),
    };
  }
}
