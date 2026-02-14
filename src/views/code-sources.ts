import * as vscode from "vscode";
import * as path from "path";
import { Command, Uri } from "vscode";
import { WorkspaceTracker } from "../workspace-tracker";
import { getGitInfoFromVscodeApi } from "../git";

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
      let hasValidGit = true;
      if (!workspace.isEnabled) {
        // Only check if a Git repo exists for the UI indicator.
        // The stricter check (remote + commit) is enforced at enable time.
        const gitInfo = await getGitInfoFromVscodeApi(workspace.uri);
        hasValidGit = gitInfo !== null;
      }
      dependencies.push(
        new CodeSource(
          workspace.workspace.name,
          vscode.TreeItemCollapsibleState.None,
          workspace.isEnabled,
          workspace.uri,
          hasValidGit,
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
    public readonly gitValid: boolean = true,
    public readonly command?: vscode.Command,
  ) {
    super(label, collapsibleState);

    const showGitNotConfigured = !enabled && gitValid === false;
    if (showGitNotConfigured) {
      this.description = "Git not configured";
      this.tooltip = "Initialize a Git repository with at least one commit to enable";
    } else {
      this.tooltip = `${this.label}-${this.enabled}`;
    }
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

  contextValue = this.enabled
    ? "codeSource:enabled"
    : this.gitValid
      ? "codeSource:disabled"
      : "codeSource:noGit";
}
