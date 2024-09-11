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
    console.log("Codesources refreshed");
    this._onDidChangeTreeData.fire();
  }

  getTreeItem(element: CodeSource): vscode.TreeItem {
    return element;
  }

  getChildren(element?: CodeSource): Thenable<CodeSource[]> {
    const workspaces = this.workspaceTracker.refresh(true);
    if (!workspaces) {
      return Promise.resolve([]);
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
    return Promise.resolve(dependencies);
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

  /**
   * The {@link Uri} of the resource representing this item.
   *
   * Will be used to derive the {@link TreeItem.label label}, when it is not provided.
   * Will be used to derive the icon from current file icon theme, when {@link TreeItem.iconPath iconPath} has {@link ThemeIcon} value.
   */
  // resourceUri?: Uri;

  /**
   * The {@link Command} that should be executed when the tree item is selected.
   *
   * Please use `vscode.open` or `vscode.diff` as command IDs when the tree item is opening
   * something in the editor. Using these commands ensures that the resulting editor will
   * appear consistent with how other built-in trees open editors.
   */
  // command?: Command;

  /**
   * Context value of the tree item. This can be used to contribute item specific actions in the tree.
   * For example, a tree item is given a context value as `folder`. When contributing actions to `view/item/context`
   * using `menus` extension point, you can specify context value for key `viewItem` in `when` expression like `viewItem == folder`.
   * ```json
   * "contributes": {
   *   "menus": {
   *     "view/item/context": [
   *       {
   *         "command": "extension.deleteFolder",
   *         "when": "viewItem == folder"
   *       }
   *     ]
   *   }
   * }
   * ```
   * This will show action `extension.deleteFolder` only for items with `contextValue` is `folder`.
   */
  contextValue = this.enabled ? "enabled" : "disabled";
}
