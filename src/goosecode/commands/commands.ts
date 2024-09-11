import * as vscode from "vscode";
import * as fs from "fs";
import * as path from "path";
import { idepb } from "../../proto/idepb/ide";
import { Uri } from "vscode";

const defaultExclusions = [
  "**/node_modules/**",
  "**/dist/**",
  "**/build/**",
  "**/lib/**",
  "**/out/**",
  "**/target/**",
  "**/__pycache__/**",
  "**/.venv/**",
  "**/venv/**",
  "**/env/**",
  "**/tmp/**",
  "**/log/**",
  "**/vendor/**",
  "**/bin/**",
  "**/obj/**",
  "**/packages/**",
  "**/.vs/**",
  "**/Release/**",
  "**/Debug/**",
  "**/pkg/**",
  "**/.dart_tool/**",
  "**/DerivedData/**",
  "**/dist-newstyle/**",
  "**/app/build/**",
  "**/.gradle/**",
  "**/.idea/**",
  "**/Pods/**",
  "**/Carthage/**",
  "**/.xcworkspace/**",
  "**/.xcodeproj/**",
  "**/.*",
];

// Returns the content of a file by filepath
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

export async function getDefinitions(): Promise<vscode.LocationLink[]> {
  const activeEditor = vscode.window.activeTextEditor;

  if (activeEditor) {
    const position = activeEditor.selection.active;
    const links = await vscode.commands.executeCommand<vscode.LocationLink[]>(
      "vscode.executeDefinitionProvider",
      activeEditor.document.uri,
      position,
    );

    if (links && links.length > 0) {
      return links;
    } else {
      console.log(
        "[WARN][DEFINITIONS]",
        "No definition found for the symbol under the cursor.",
      );
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
    }
  } else {
    console.log("[WARN][FIND USES]", "No active text editor found.");
  }
  return [];
}

export async function goToDefinition(
  workspaceUri: Uri,
  loc: idepb.Location,
  select: boolean,
): Promise<boolean> {
  const activeEditor = vscode.window.activeTextEditor;

  if (!activeEditor) {
    return false;
  }
  const document = await vscode.workspace.openTextDocument(
    path.join(workspaceUri.fsPath, loc.path),
  );
  const startPos = new vscode.Position(
    loc.range.start.line,
    loc.range.start.character,
  );
  const endPos = !select
    ? startPos
    : new vscode.Position(loc.range.end.line, loc.range.end.character);
  const editor = await vscode.window.showTextDocument(document);
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

  // Don't use the selection range for highlighting
  const highlightRange: vscode.Range = new vscode.Range(
    startPos,
    new vscode.Position(loc.range.end.line, loc.range.end.character),
  );

  // Highlight range
  const decoration = vscode.window.createTextEditorDecorationType({
    backgroundColor: new vscode.ThemeColor(
      "editor.findMatchHighlightBackground",
    ),
    // isWholeLine: true,
  });

  editor.setDecorations(decoration, [highlightRange]);

  // After 1 second, remove the highlight
  setTimeout(() => {
    decoration.dispose();
  }, 1000);

  return true;
}
