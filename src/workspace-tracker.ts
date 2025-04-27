import * as vscode from "vscode";
import { Uri } from "vscode";
import * as path from "path";
import {
  CodeSourceID,
  GooseCodeWorkspaceConfig,
  loadWorkspaceConfiguration,
} from "./config";

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

  get codeSourceID(): CodeSourceID | null {
    return this.config?.config.code_source_id ?? null;
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

  public activeWorkspaces(): Array<Workspace> {
    return this.workspaces.filter((w) => w.isEnabled);
  }

  public getWorkspaceFromCodeSourceID(
    codeSourceID: CodeSourceID,
  ): Workspace | null {
    const hit = this.activeWorkspaces().find(
      (w) => w.config!.config.code_source_id === codeSourceID,
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
  public refresh(fromCodeSources: boolean = false): Array<Workspace> {
    this.workspaces.length = 0;
    const spaces = vscode.workspace.workspaceFolders;
    if (spaces) {
      for (const workspace of spaces) {
        const config = loadWorkspaceConfiguration(workspace.uri.fsPath, false);
        this.workspaces.push(new Workspace(workspace, config));
      }
    }

    this.onRefreshed({ refreshCodeSources: !fromCodeSources });
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
