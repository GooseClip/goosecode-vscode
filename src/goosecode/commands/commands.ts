import * as vscode from "vscode";
import * as fs from "fs";
import * as path from "path";
import type { Location } from "../../gen/ide-connect/v1/vscode_pb";
import { LocationOrLocationLink, DocumentSymbolOrSymbolInformation } from "../../types";
import { Uri } from "vscode";
import { exec } from "child_process";
import { defaultExclusions } from "../server/handlers/file-filters";
import { loadIgnorePatterns } from "../server/handlers/ignore-parser";
import { toUnixPath, toNativePath } from "../../util";

/**
 * Check if a buffer contains valid UTF-8 text.
 * Returns false if the buffer contains null bytes or invalid UTF-8 sequences.
 */
function isUtf8Text(buffer: Buffer): boolean {
  // Check for null bytes (common in binary files)
  if (buffer.includes(0)) {
    return false;
  }
  
  // Try to decode as UTF-8 and check for replacement characters
  try {
    const text = buffer.toString("utf-8");
    // Check if decoding produced replacement characters (indicates invalid UTF-8)
    return !text.includes("\uFFFD");
  } catch {
    return false;
  }
}

export interface RawFileContent {
  content: Buffer;
  isBinary: boolean;
}

/**
 * Returns the raw binary content of files by filepath.
 * Also detects whether each file is binary or text.
 */
export async function getFileContentsRaw(
  workspaceUri: Uri,
  filePaths: string[],
): Promise<RawFileContent[]> {
  try {
    const results: RawFileContent[] = [];

    for (const f of filePaths) {
      const absolutePath = path.join(workspaceUri.fsPath, f);
      const buffer = await fs.promises.readFile(absolutePath); // No encoding = Buffer
      const isBinary = !isUtf8Text(buffer);
      results.push({ content: buffer, isBinary });
    }

    return results;
  } catch (error) {
    console.error(`Error reading file content: ${error}`);
    return [];
  }
}

// Returns the content of a file by filepath (legacy string-based version)
export async function getFileContents(
  workspaceUri: Uri,
  filePaths: string[],
): Promise<string[]> {
  try {
    const files: string[] = [];

    for (const f of filePaths) {
      const absolutePath = path.join(workspaceUri.fsPath, f);
      const content = await fs.promises.readFile(absolutePath, "utf-8");
      files.push(content);
    }

    return files;
  } catch (error) {
    console.error(`Error reading file content: ${error}`);
    return [];
  }
}


export async function getDocumentSymbols(): Promise<undefined> {
  const activeEditor = vscode.window.activeTextEditor;
  if (!activeEditor) {
    return;
  }
  const documentUri = activeEditor.document.uri;
  const symbols = await vscode.commands.executeCommand<DocumentSymbolOrSymbolInformation[]>(
    'vscode.executeDocumentSymbolProvider',
    documentUri,
  );
  if (!symbols) {
    return;
  }
}

export async function getDefinitions(): Promise<LocationOrLocationLink[]> {
  const activeEditor = vscode.window.activeTextEditor;

  if (activeEditor) {
    const position = activeEditor.selection.active;
    const definitions = await vscode.commands.executeCommand<LocationOrLocationLink[]>(
      "vscode.executeDefinitionProvider",
      activeEditor.document.uri,
      position,
    );

    if (definitions && definitions.length > 0) {
      return definitions;
    } else {
      console.log(
        "[WARN][DEFINITIONS]",
        "No definition found for the symbol under the cursor.",
      );
      vscode.window.setStatusBarMessage("GooseCode: No definition found at cursor 🚨", 2000);

    }
  } else {
    console.log("[WARN][DEFINITIONS]", "No active text editor found.");
  }
  return [];
}

export async function getReferences(): Promise<vscode.Location[]> {
  const activeEditor = vscode.window.activeTextEditor;

  if (activeEditor) {
    const position = activeEditor.selection.active;

    // Find all references of the symbol at the cursor position
    const references = await vscode.commands.executeCommand<vscode.Location[]>(
      "vscode.executeReferenceProvider",
      activeEditor.document.uri,
      position,
    );

    if (references && references.length > 0) {
      return references;
    } else {
      console.log(
        "[WARN][FIND USES]",
        "No references found for the symbol at the cursor position.",
      );
      vscode.window.setStatusBarMessage("GooseCode: No references found at cursor 🚨", 2000);
    }
  } else {
    console.log("[WARN][FIND USES]", "No active text editor found.");
  }
  return [];
}

export async function getImplementations(): Promise<LocationOrLocationLink[]> {
  const activeEditor = vscode.window.activeTextEditor;

  if (activeEditor) {
    const position = activeEditor.selection.active;

    // Find all implementations of the symbol at the cursor position
    const implementations = await vscode.commands.executeCommand<LocationOrLocationLink[]>(
      "vscode.executeImplementationProvider",
      activeEditor.document.uri,
      position,
    );

    if (implementations && implementations.length > 0) {
      return implementations;
    } else {
      console.log(
        "[WARN][IMPLEMENTATIONS]",
        "No implementations found for the symbol at the cursor position.",
      );
    }
  } else {
    console.log("[WARN][IMPLEMENTATIONS]", "No active text editor found.");
  }
  return [];
}

export async function goToDefinition(
  workspaceUri: Uri,
  loc: Location,
  select: boolean,
): Promise<boolean> {
  const activeEditor = vscode.window.activeTextEditor;
  if (!activeEditor) {
    return false;
  }

  // Convert incoming UNIX-style path to native format
  const fileUri = vscode.Uri.file(path.join(workspaceUri.fsPath, toNativePath(loc.path)));
  // openTextDocument will either open the file or return the existing document
  const document = await vscode.workspace.openTextDocument(fileUri);

  // Find the view column if the tab is already open anywhere
  let viewColumn: vscode.ViewColumn | undefined;
  for (const tabGroup of vscode.window.tabGroups.all) {
    for (const tab of tabGroup.tabs) {
      // The tab input can be other things, so we check if it has a uri property
      const tabUri = (tab.input as { uri?: vscode.Uri })?.uri;
      if (tabUri?.path === fileUri.path) {
        viewColumn = tabGroup.viewColumn;
        break;
      }
    }
    if (viewColumn) {
      break;
    }
  }

  const startPos = new vscode.Position(
    Number(loc.range?.start?.line),
    Number(loc.range?.start?.character),
  );

  let endPos = startPos;
  if (select && loc.range?.end) {
    const endLine = Number(loc.range.end.line);
    const endCharacter =
      loc.range.end.character != null
        ? Number(loc.range.end.character)
        : document.lineAt(endLine).range.end.character;
    endPos = new vscode.Position(endLine, endCharacter);
  }

  const editor = await vscode.window.showTextDocument(document, {
    preview: true,
    preserveFocus: false,
    viewColumn: viewColumn, // undefined will use the active column
  });
  editor.selection = new vscode.Selection(startPos, endPos);

  // Only reveal if not already visible
  const inView = editor.visibleRanges.some((range) =>
    range.contains(new vscode.Range(startPos, endPos)),
  );
  if (!inView) {
    editor.revealRange(
      new vscode.Range(startPos, endPos),
      vscode.TextEditorRevealType.InCenter,
    );
  }

  // Use the full range from the location for highlighting
  const highlightEndPos = loc.range?.end
    ? new vscode.Position(
        Number(loc.range.end.line),
        Number(loc.range.end.character),
      )
    : endPos;
  const highlightRange: vscode.Range = new vscode.Range(startPos, highlightEndPos);

  // Highlight range with a distinctive style (not selection-like)
  const decoration = vscode.window.createTextEditorDecorationType({
    backgroundColor: "rgba(255, 213, 79, 0.15)",
    border: "1px solid rgba(255, 193, 7, 0.6)",
    borderRadius: "2px",
    overviewRulerColor: "rgba(255, 193, 7, 0.8)",
    overviewRulerLane: vscode.OverviewRulerLane.Center,
  });

  editor.setDecorations(decoration, [highlightRange]);

  // After 1 second, remove the highlight
  setTimeout(() => {
    decoration.dispose();
  }, 2000);

  return true;
}

/**
 * List all project files, respecting .gitignore and .goosecodeignore patterns.
 * Uses the same ignore system as search for consistency.
 */
export async function listProjectFiles(
  workspaceUri: Uri,
  exclusions?: string[],
): Promise<string[]> {
  const root = workspaceUri.fsPath;
  
  // Load ignore patterns from .gitignore and .goosecodeignore
  const ignoreConfig = await loadIgnorePatterns(workspaceUri);
  
  // Combine all exclusions: defaults + gitignore + goosecodeignore + custom
  const allExclusions = [
    ...defaultExclusions,
    ...ignoreConfig.excludePatterns,
    ...(exclusions || []),
  ];
  
  const excludePattern = allExclusions.length > 0 
    ? `{${allExclusions.join(",")}}` 
    : undefined;
  
  const searchPattern = new vscode.RelativePattern(workspaceUri, "**/*");
  const files = await vscode.workspace.findFiles(searchPattern, excludePattern);

  return files.map((file) => toUnixPath(path.relative(root, file.fsPath)));
}
