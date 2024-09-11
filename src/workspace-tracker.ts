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
    console.log(
      "[getWorkspaceFromCodeSourceID]",
      hit?.uri.fsPath,
      hit?.codeSourceID,
      codeSourceID,
    );
    return hit || null;
  }

  public getWorkspaceFromFile(activeFileUri: Uri): Workspace | null {
    const ws = vscode.workspace.getWorkspaceFolder(activeFileUri);
    if (!ws) {
      console.log(
        "[getWorkspaceFromFile]",
        `No workspace found for file ${activeFileUri.fsPath}`,
      );
      return null;
    }
    const hit = this.workspaces.find((w) => w.uri === ws.uri);
    console.log(
      "[getWorkspaceFromFile]",
      hit?.uri.fsPath,
      activeFileUri.fsPath,
    );
    return hit || null;
  }

  // TODO call
  public onActiveFileChanged(activeFileUri: Uri) {
    console.log("[onActiveFileChanged]", activeFileUri.fsPath);
    this.activeFile = activeFileUri;
    const workspace = this.getWorkspaceFromFile(activeFileUri);
    if (!workspace) {
      console.log(
        "[onActiveFileChanged]",
        "[WARNING]",
        "Accessing external file",
      );
      console.log("[onActiveFileChanged]", "Guessing last workspace");
      return;
    }
    if (workspace !== this.lastWorkspace) {
      console.log(
        "[onActiveFileChanged]",
        "Setting last workspace to",
        workspace.uri.fsPath,
        workspace.codeSourceID,
      );
      this.lastWorkspace = workspace;
    }
  }

  // TODO cache
  public refresh(fromCodeSources: boolean = false): Array<Workspace> {
    this.workspaces.length = 0;
    const spaces = vscode.workspace.workspaceFolders;
    if (spaces) {
      for (const workspace of spaces) {
        console.log("Refreshing workspace", workspace.uri.fsPath);
        const config = loadWorkspaceConfiguration(workspace.uri.fsPath, false);
        console.log("Got config:", workspace.uri.fsPath, config);
        this.workspaces.push(new Workspace(workspace, config));
      }
    }

    console.log(
      "[refresh]",
      this.workspaces
        .map((e) => e.uri.fsPath + "," + e.codeSourceID)
        .join("\n"),
    );

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
      console.log("[getActiveWorkspace]", "No active workspace found");
      if (activeFileUri) {
        this.lastWorkspace = this.getWorkspaceFromFile(activeFileUri);
      }
    }

    if (!this.lastWorkspace) {
      console.warn("[getActiveWorkspace]", "First workspace was a dependency");
      // Default to the first workspace if we don't have any good options
      this.lastWorkspace = this.workspaces[0];
    }

    return this.lastWorkspace;
    // const activeEditor = vscode.window.activeTextEditor;
    // if (activeEditor) {
    //   const activeFileUri = activeEditor.document.uri;
    //
    //   console.log("Active file URI", activeFileUri);
    //   const workspaceFolder =
    //       vscode.workspace.getWorkspaceFolder(activeFileUri);
    //
    //   if (workspaceFolder) {
    //     return workspaceFolder.uri.fsPath;
    //   }
    //
    //   console.error("No workspace folder found for active file");
    // } else {
    //   console.error("No active editor");
    // }
    //
    // throw Error("Unable to determine workspace root");
  }

  public currentFilePath(): string {
    const path = this.relativePath(
      vscode.window.activeTextEditor!.document.uri.fsPath,
    );
    console.log("CURRENT FILE PATH", path);
    return path;
  }

  public relativePath(filePath: string, from?: string): string {
    const rel = path.relative(from ?? this.lastWorkspace!.uri.fsPath, filePath);
    return rel;
  }
}

// export function getProjectRoot(): string {
//   let projectRoot = "";
//
//   if (!vscode.workspace.workspaceFolders) {
//     throw Error("No workspace folder found.");
//   }
//   let workspaceFolder: vscode.WorkspaceFolder | undefined;
//
//   const activeEditor = vscode.window.activeTextEditor;
//   if (activeEditor) {
//     const activeFileUri = activeEditor.document.uri;
//     workspaceFolder = vscode.workspace.getWorkspaceFolder(activeFileUri);
//   }
//
//   if (!workspaceFolder) {
//     workspaceFolder = vscode.workspace.workspaceFolders[0];
//   }
//
//   if (workspaceFolder) {
//     projectRoot = workspaceFolder.uri.fsPath;
//   }
//
//   return projectRoot + "/";
// }
