import * as vscode from "vscode";
import * as fs from "fs";
import * as path from "path";
import * as gc from "../../gen/ide";
import { LocationOrLocationLink, DocumentSymbolOrSymbolInformation } from "../../types";
import { Uri } from "vscode";
import { exec } from "child_process";


const defaultExclusions = [
  "**/node_modules/**",
  "**/dist/**",
  "**/build/**",
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

  // console.log("[INFO][GET DOCUMENT SYMBOLS]", "Symbols", symbols.length);

  // for (const s of symbols) {
  //   if (s instanceof vscode.DocumentSymbol) {
  //     console.log("[INFO][GET SYMBOL RANGE]", "DocumentSymbol", s);
  //   } else if (s instanceof vscode.SymbolInformation) {
  //     console.log("[INFO][GET SYMBOL RANGE]", "SymbolInformation", s);
  //   } else {
  //     console.log("[WARN][GET SYMBOL RANGE]", "Unknown symbol type", s);
  //   }
  // }
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
      // for (const d of definitions) {
      //   console.log("[INFO][GET DEFINITIONS]", "Definition", d);
      // }
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

export async function goToDefinition(
  workspaceUri: Uri,
  loc: gc.Location,
  select: boolean,
): Promise<boolean> {
  const activeEditor = vscode.window.activeTextEditor;
  if (!activeEditor) {
    return false;
  }

  const fileUri = vscode.Uri.file(path.join(workspaceUri.fsPath, loc.path));
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

export async function listProjectFiles(
  workspaceUri: Uri,
  exclusions?: string[],
): Promise<string[]> {

  const root = await workspaceUri.fsPath;
  const excludePattern = exclusions
    ? `{${exclusions.join(",")}}`
    : `{${defaultExclusions.join(",")}}`;
  const searchPattern = new vscode.RelativePattern(workspaceUri, "**/*");
  const files = await vscode.workspace.findFiles(searchPattern, excludePattern);

  return files.map((file) => path.relative(root, file.fsPath));
}

// try {
//   const isCursor = process.env.VSCODE_IPC_HOOK?.toLocaleLowerCase().includes("cursor") || process.env.VSCODE_NLS_CONFIG?.toLocaleLowerCase().includes("cursor")
//   if (isCursor) {
//     exec(`cursor .`, { cwd: workspaceUri.fsPath })
//   } else {
//     exec(`code .`, { cwd: workspaceUri.fsPath })
//   }
// } catch (e) {
//   console.error(`failed to bring to front`)
// }
