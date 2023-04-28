import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

const defaultExclusions = [
    'build',
    'dist',
    '.git',
    'node_modules',
];

async function collectFiles(
    dir: string,
    files: string[],
    exclusions: string[] = defaultExclusions
): Promise<void> {
    const entries = await fs.promises.readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
        if (entry.name.startsWith('.')) {
            continue;
        }
        const entryPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            if (!exclusions.includes(entry.name)) {
                await collectFiles(entryPath, files, exclusions);
            }
        } else if (entry.isFile()) {
            files.push(entryPath);
        }
    }
}

// Lists all files in the current project directory, with optional exclusions
export async function listProjectFiles(
    exclusions?: string[]
): Promise<string[]> {
    const files: string[] = [];

    if (vscode.workspace.workspaceFolders) {
        let workspaceFolder: vscode.WorkspaceFolder | undefined;

        const activeEditor = vscode.window.activeTextEditor;
        if (activeEditor) {
            const activeFileUri = activeEditor.document.uri;
            workspaceFolder = vscode.workspace.getWorkspaceFolder(activeFileUri);
        }

        // Fallback to the first workspace folder if the active file is not part of any workspace folder
        if (!workspaceFolder) {
            workspaceFolder = vscode.workspace.workspaceFolders[0];
        }

        if (workspaceFolder) {
            await collectFiles(workspaceFolder.uri.fsPath, files, exclusions || defaultExclusions);
        }
    }

    return files;
}

// Opens a file in the IDE
export async function openFiles(filePaths: string[]) {
    try {
        filePaths.forEach(async f => {
            const fileUri = vscode.Uri.file(f);
            const document = await vscode.workspace.openTextDocument(fileUri);
            await vscode.window.showTextDocument(document);
        });
    } catch (error) {
        console.error(`Error opening file: ${error}`);
    }
}



// Returns the content of a file by filepath
export async function getFileContents(filePaths: string[]): Promise<string[]> {
    try {
        
        var files: string[] = [];
        for (const f of filePaths) {
            const content = await fs.promises.readFile(f, 'utf-8');
            files.push(content);
        }
        return files;
    } catch (error) {
        console.error(`Error reading file content: ${error}`);
        return [];
    }
}

async function findInFile(filePath: string, searchString: string): Promise<vscode.Location[]> {
    const document = await vscode.workspace.openTextDocument(filePath);
    const text = document.getText();
    const locations: vscode.Location[] = [];
  
    let match: RegExpExecArray | null;
    const regex = new RegExp(searchString, 'g');
  
    while ((match = regex.exec(text)) !== null) {
      const position = document.positionAt(match.index);
      const range = document.getWordRangeAtPosition(position);
      if (range) {
        locations.push(new vscode.Location(document.uri, range));
      }
    }
  
    return locations;
  }
  
  async function findInDirectory(dirPath: string, searchString: string): Promise<vscode.Location[]> {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });
    let locations: vscode.Location[] = [];
  
    for (const entry of entries) {
      const entryPath = path.join(dirPath, entry.name);
  
      if (entry.isFile()) {
        const fileLocations = await findInFile(entryPath, searchString);
        locations.push(...fileLocations);
      } else if (entry.isDirectory()) {
        const dirLocations = await findInDirectory(entryPath, searchString);
        locations.push(...dirLocations);
      }
    }
  
    return locations;
  }
  
  export async function findStringInProject(searchString: string): Promise<vscode.Location[]> {
    if (!vscode.workspace.workspaceFolders) {
      vscode.window.showInformationMessage('No workspace folder found.');
      return [];
    }
  
    const workspaceFolder = vscode.workspace.workspaceFolders[0];
    const locations = await findInDirectory(workspaceFolder.uri.fsPath, searchString);
    return locations;
  }

/*
const activeEditor = vscode.window.activeTextEditor;
if (activeEditor) {
  const document = activeEditor.document;
  const range = new vscode.Range(document.positionAt(0), document.positionAt(document.getText().length));

  const symbols = await describeSymbolsInRange(document, range);
  console.log(symbols);
}
*/

export function setSelection(start: vscode.Position, end: vscode.Position): void {
    const activeEditor = vscode.window.activeTextEditor;

    if (activeEditor) {
        const selection = new vscode.Selection(start, end);
        activeEditor.selection = selection;
        activeEditor.revealRange(selection, vscode.TextEditorRevealType.Default);
    } else {
        vscode.window.showInformationMessage('No active text editor found.');
    }
}

export async function describeSymbolsInRange(
    document: vscode.TextDocument,
    range: vscode.Range
): Promise<Array<vscode.DocumentSymbol | vscode.SymbolInformation>> {
    const symbols = await vscode.commands.executeCommand<
        Array<vscode.DocumentSymbol | vscode.SymbolInformation>
    >('vscode.executeDocumentSymbolProvider', document.uri);

    if (!symbols) {
        return [];
    }

    const symbolsInRange: Array<vscode.DocumentSymbol | vscode.SymbolInformation> = [];

    for (const symbol of symbols) {
        const symbolRange = symbol instanceof vscode.DocumentSymbol ? symbol.range : symbol.location.range;

        if (range.intersection(symbolRange)) {
            symbolsInRange.push(symbol);
        }
    }

    return symbolsInRange;
}

export async function goToDefinition(): Promise<void> {
    const activeEditor = vscode.window.activeTextEditor;

    if (activeEditor) {
        const position = activeEditor.selection.active;
        const definitionLocations = await vscode.commands.executeCommand<vscode.Location[]>(
            'vscode.executeDefinitionProvider',
            activeEditor.document.uri,
            position
        );

        if (definitionLocations && definitionLocations.length > 0) {
            const location = definitionLocations[0];
            const document = await vscode.workspace.openTextDocument(location.uri);
            const editor = await vscode.window.showTextDocument(document);
            editor.selection = new vscode.Selection(location.range.start, location.range.end);
            editor.revealRange(location.range, vscode.TextEditorRevealType.InCenter);
        } else {
            vscode.window.showInformationMessage('No definition found for the symbol under the cursor.');
        }
    } else {
        vscode.window.showInformationMessage('No active text editor found.');
    }
}

export async function renameSymbol(newName: string): Promise<void> {
    const activeEditor = vscode.window.activeTextEditor;

    if (activeEditor) {
        const position = activeEditor.selection.active;

        // Check if there's a symbol to rename
        const workspaceEdit = await vscode.commands.executeCommand<vscode.WorkspaceEdit>(
            'vscode.executeDocumentRenameProvider',
            activeEditor.document.uri,
            position,
            newName
        );

        if (workspaceEdit) {
            // Apply the rename edits
            await vscode.workspace.applyEdit(workspaceEdit);
        } else {
            vscode.window.showInformationMessage('No symbol found to rename at the cursor position.');
        }
    } else {
        vscode.window.showInformationMessage('No active text editor found.');
    }
}

export async function findSymbolUses(): Promise<vscode.Location[] | null> {
    const activeEditor = vscode.window.activeTextEditor;

    if (activeEditor) {
        const position = activeEditor.selection.active;

        // Find all references of the symbol at the cursor position
        const references = await vscode.commands.executeCommand<vscode.Location[]>(
            'vscode.executeReferenceProvider',
            activeEditor.document.uri,
            position
        );

        if (references && references.length > 0) {
            return references;
        } else {
            vscode.window.showInformationMessage('No references found for the symbol at the cursor position.');
            return null;
        }
    } else {
        vscode.window.showInformationMessage('No active text editor found.');
        return null;
    }
}