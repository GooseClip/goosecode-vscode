import * as vscode from "vscode";
import { Uri } from "vscode";
import * as path from "path";
import {
  RepositorySnapshotFingerprint,
  GooseCodeWorkspaceConfig,
  loadWorkspaceConfiguration,
  updateWorkspaceConfiguration,
} from "./config";
import { onDidChangeCommit } from "./git";

export class Workspace {
  constructor(
    public readonly workspace: vscode.WorkspaceFolder,
    public readonly config: GooseCodeWorkspaceConfig | null,
  ) {
    this.workspace = workspace;
    this.config = config;
  }

  get uri(): vscode.Uri {
    return this.workspace.uri;
  }

  get fingerprint(): RepositorySnapshotFingerprint | null {
    return this.config?.config.fingerprint ?? null;
  }

  get isEnabled(): boolean {
    return this.config !== null;
  }
}

type RefreshOptions = { refreshCodeSources: boolean };
export class WorkspaceTracker {
  constructor(
    private readonly onRefreshed: (options: RefreshOptions) => void,
  ) {}
  public workspaces: Workspace[] = [];
  private lastWorkspace: Workspace | null = null;
  private activeFile: Uri | null = null;
  private commitSubscriptions: vscode.Disposable[] = [];

  public activeWorkspaces(): Array<Workspace> {
    return this.workspaces.filter((w) => w.isEnabled);
  }

  public getWorkspaceFromFingerprint(
    fingerprint: RepositorySnapshotFingerprint,
  ): Workspace | null {
    const hit = this.activeWorkspaces().find(
      (w) => w.config!.config.fingerprint === fingerprint,
    );
    return hit || null;
  }

  public getWorkspaceFromFile(activeFileUri: Uri): Workspace | null {
    const ws = vscode.workspace.getWorkspaceFolder(activeFileUri);
    if (!ws) {
      return null;
    }
    const hit = this.workspaces.find((w) => w.uri === ws.uri);
    return hit || null;
  }

  public onActiveFileChanged(activeFileUri: Uri) {
    this.activeFile = activeFileUri;
    const workspace = this.getWorkspaceFromFile(activeFileUri);
    if (!workspace) {
      return;
    }
    if (workspace !== this.lastWorkspace) {
      this.lastWorkspace = workspace;
    }
  }


  // TODO cache
  public async refresh(fromCodeSources: boolean = false): Promise<Array<Workspace>> {
    this.workspaces.length = 0;
    const spaces = vscode.workspace.workspaceFolders;
    if (spaces) {
      for (const workspace of spaces) {
        const config = await loadWorkspaceConfiguration(workspace.uri.fsPath, false);
        this.workspaces.push(new Workspace(workspace, config));
      }
    }

    // Don't refresh code sources if we're coming from the code sources view
    // otherwise we'll end up in an infinite loop.
    this.onRefreshed({ refreshCodeSources: !fromCodeSources });


    // Remove old subscriptions
    this.commitSubscriptions.forEach((s) => s.dispose());
    this.commitSubscriptions.length = 0;

    // Subscribe to commit changes
    for(var i = 0; i < this.workspaces.length; i++){
      const workspace = this.workspaces[i];
      const subscription = await onDidChangeCommit(workspace.uri, async (commit, branch) => {
        console.log(`[DEBUG][COMMIT CHANGE] ${workspace.uri.fsPath} ${commit} ${branch}`);
        const config = await updateWorkspaceConfiguration(workspace.config!, workspace.uri.fsPath, commit, branch);
        this.workspaces[i].config!.config = config.GooseCode;
        this.onRefreshed({ refreshCodeSources: true });
      });
      if (subscription) {
        this.commitSubscriptions.push(subscription);
      }
    }

    return this.workspaces.filter((w) => fromCodeSources || w.isEnabled);
  }

  // TODO what if the first file is a dependency
  public getLastActiveGooseCodeWorkspace(): Workspace | null {
    if (this.workspaces.length === 0) {
      return null;
    }
    const activeFileUri = vscode.window.activeTextEditor?.document.uri;
    if (this.lastWorkspace === null) {
      if (activeFileUri) {
        this.lastWorkspace = this.getWorkspaceFromFile(activeFileUri);
      }
    }

    if (!this.lastWorkspace) {
      console.log("[WARNING]", "First workspace was a dependency");
      // Default to the first workspace if we don't have any good options
      this.lastWorkspace = this.workspaces[0];
    }

    return this.lastWorkspace;
  }

  public currentFilePath(): string {
    return vscode.window.activeTextEditor!.document.uri.fsPath;
  }

  public currentRelativeFilePath(): string {
    const path = this.relativePath(
      vscode.window.activeTextEditor!.document.uri.fsPath,
    );
    return path;
  }

  public relativePath(filePath: string, from?: string): string {
    const rel = path.relative(from ?? this.lastWorkspace!.uri.fsPath, filePath);
    return rel;
  }
}
