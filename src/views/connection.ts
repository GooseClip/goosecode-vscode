import * as vscode from "vscode";
import * as fs from "fs";
import * as path from "path";
import { Uri } from "vscode";
import { GooseCodeServer } from "../goosecode/server/server";
import { isBonjourRunning, getServerError, getInstanceId } from "../extension";

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
    const serverErr = getServerError();
    
    // If there's a server error (like port conflict), show error state
    if (serverErr !== null) {
      const items: Connection[] = [];
      
      if (serverErr.code === 'EADDRINUSE') {
        const errorItem = new Connection(
          `Port ${serverErr.port} in use`,
          vscode.TreeItemCollapsibleState.None,
          false,
          false,
          undefined,
          undefined,
          "warning",
          "portConflict",
        );
        errorItem.description = "Click to change port";
        items.push(errorItem);
      } else {
        const errorItem = new Connection(
          "Server error",
          vscode.TreeItemCollapsibleState.None,
          false,
          false,
          undefined,
          undefined,
          "warning",
        );
        errorItem.description = serverErr.message;
        items.push(errorItem);
      }
      
      return Promise.resolve(items);
    }
    
    if (server === null || !this.getHasBeenInitialized()) {
      return Promise.resolve([]);
    }

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
      
      // Show discoverable item with instance ID when broadcasting
      const isDiscoverable = isBonjourRunning();
      const discoverableItem = new Connection(
        "Discoverable",
        vscode.TreeItemCollapsibleState.None,
        isDiscoverable,
        true,
        undefined,
        undefined,
        "status",
        "discoverableItem",
      );
      
      // Show instance ID as description when broadcasting
      if (isDiscoverable) {
        const smallId = getInstanceId().slice(0, 8);
        discoverableItem.description = `ID: ${smallId}`;
      }
      
      items.push(discoverableItem);
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
    iconStyle: "status" | "toggle" | "warning" = "status",
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

    // Use VS Code's built-in warning icon for warning style
    if (iconStyle === "warning") {
      this.iconPath = new vscode.ThemeIcon("warning", new vscode.ThemeColor("problemsWarningIcon.foreground"));
    } else {
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
}
