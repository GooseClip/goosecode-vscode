import * as vscode from "vscode";

export interface WorkspaceWarning {
  workspaceName: string;
  message: string;
  severity: "info" | "warning" | "error";
}

export class WarningsProvider
  implements vscode.TreeDataProvider<WarningItem>
{
  private _onDidChangeTreeData: vscode.EventEmitter<
    WarningItem | undefined | void
  > = new vscode.EventEmitter<WarningItem | undefined | void>();
  readonly onDidChangeTreeData: vscode.Event<WarningItem | undefined | void> =
    this._onDidChangeTreeData.event;

  private warnings: WorkspaceWarning[] = [];

  refresh(warnings: WorkspaceWarning[]): void {
    this.warnings = warnings;
    this._onDidChangeTreeData.fire();
  }

  getTreeItem(element: WarningItem): vscode.TreeItem {
    return element;
  }

  getChildren(): Thenable<WarningItem[]> {
    return Promise.resolve(
      this.warnings.map((w) => new WarningItem(w)),
    );
  }
}

export class WarningItem extends vscode.TreeItem {
  constructor(warning: WorkspaceWarning) {
    super(warning.message, vscode.TreeItemCollapsibleState.None);
    this.description = warning.workspaceName;
    this.iconPath = new vscode.ThemeIcon(
      warning.severity === "error" ? "error" : "warning",
      new vscode.ThemeColor(
        warning.severity === "error"
          ? "problemsErrorIcon.foreground"
          : "problemsWarningIcon.foreground",
      ),
    );
  }
}
