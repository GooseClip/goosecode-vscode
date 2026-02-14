import * as vscode from "vscode";
import * as path from "path";
import type { Context } from "./gen/ide-connect/v1/api_pb";
import {
  GooseCodeWorkspaceConfig,
  loadWorkspaceConfiguration,
  updateWorkspaceConfiguration,
  findWorkspace,
} from "./config";
import { onDidChangeCommit } from "./git";
import { toUnixPath } from "./util";

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
  private activeFile: vscode.Uri | null = null;
  private commitSubscriptions: vscode.Disposable[] = [];

  public activeWorkspaces(): Array<Workspace> {
    return this.workspaces.filter((w) => w.isEnabled);
  }

  public async getWorkspaceFromContext(
    context: Context,
  ): Promise<Workspace | null> {
    const config = await findWorkspace(context);
    if (!config) {
      return null;
    }
    let hit = this.workspaces.find((w) => w.config?.config.path === config.path);
    if (!hit) {
      await this.refresh();
      hit = this.workspaces.find((w) => w.config?.config.path === config.path);
    }
    return hit || null;
  }

  public getWorkspaceFromFile(activeFileUri: vscode.Uri): Workspace | null {
    const ws = vscode.workspace.getWorkspaceFolder(activeFileUri);
    if (!ws) {
      return null;
    }
    const hit = this.workspaces.find((w) => w.uri === ws.uri);
    return hit || null;
  }

  public getWorkspaceFromWorkspaceUri(workspaceUri: vscode.Uri): Workspace | null {
    const hit = this.workspaces.find((w) => w.uri === workspaceUri);
    return hit || null;
  }

  public onActiveFileChanged(activeFileUri: vscode.Uri) {
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
      if(!workspace){
        console.warn("Workspace doesn't exist");
      }
      const subscription = await onDidChangeCommit(workspace.uri, this.handleCommitChange.bind(this));
      if (subscription) {
        this.commitSubscriptions.push(subscription);
      }
    }

    return this.workspaces.filter((w) => fromCodeSources || w.isEnabled);
  }

  private async handleCommitChange(workspaceUri: vscode.Uri, commit: string, branch: string) {
    console.log(`[DEBUG][COMMIT CHANGE] ${workspaceUri.fsPath} ${commit} ${branch}`);

    
    const workspace = this.getWorkspaceFromWorkspaceUri(workspaceUri);
    if(!workspace){
      console.error("Workspace not found after commit/branch change");
    }

    const config = await updateWorkspaceConfiguration(workspace!.config!, workspace!.uri.fsPath, commit, branch);
    if(workspace && workspace.config){
      workspace.config!.config = config.config;
    }else{
      console.warn("Config doesn't exist");
    }
    this.onRefreshed({ refreshCodeSources: true });
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
    return toUnixPath(vscode.window.activeTextEditor!.document.uri.fsPath);
  }

  public currentRelativeFilePath(): string {
    const path = this.relativePath(
      vscode.window.activeTextEditor!.document.uri.fsPath,
    );
    return path;
  }

  public relativePath(filePath: string, from?: string): string {
    const fromPath = from ?? this.getLastActiveGooseCodeWorkspace()!.uri.fsPath;
    const rel = path.relative(fromPath, filePath);
    return toUnixPath(rel);
  }
}
