import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

const defaultExclusions = [
    '**/node_modules/**',
    '**/dist/**',
    '**/build/**',
    '**/lib/**',
    '**/out/**',
    '**/target/**',
    '**/__pycache__/**',
    '**/.venv/**',
    '**/venv/**',
    '**/env/**',
    '**/tmp/**',
    '**/log/**',
    '**/vendor/**',
    '**/bin/**',
    '**/obj/**',
    '**/packages/**',
    '**/.vs/**',
    '**/Release/**',
    '**/Debug/**',
    '**/pkg/**',
    '**/.dart_tool/**',
    '**/DerivedData/**',
    '**/dist-newstyle/**',
    '**/app/build/**',
    '**/.gradle/**',
    '**/.idea/**',
    '**/Pods/**',
    '**/Carthage/**',
    '**/.xcworkspace/**',
    '**/.xcodeproj/**',
    '**/.*'
];


export async function listProjectFiles(
    exclusions?: string[]
): Promise<string[]> {
    const workspaceRoot = getProjectRoot();

    if (!workspaceRoot) {
        return [];
    }

    const excludePattern = exclusions ? `{${exclusions.join(',')}}` : `{${defaultExclusions.join(',')}}`;
    const searchPattern = new vscode.RelativePattern(workspaceRoot, '**/*');
    const files = await vscode.workspace.findFiles(searchPattern, excludePattern);

    return files.map(file => path.relative(workspaceRoot, file.fsPath));
}

// Opens a file in the IDE
export async function openFiles(filePaths: string[]) {
    try {
        const projectRoot = getProjectRoot();
        filePaths.forEach(async f => {
            console.log("[OPEN FILES]", f);
            const absolutePath = path.join(projectRoot, f);
            const fileUri = vscode.Uri.file(absolutePath);
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
        const projectRoot = getProjectRoot();
        const files: string[] = [];

        for (const f of filePaths) {
            const absolutePath = path.join(projectRoot, f);
            const content = await fs.promises.readFile(absolutePath, 'utf-8');
            files.push(content);
        }

        return files;
    } catch (error) {
        console.error(`Error reading file content: ${error}`);
        return [];
    }
}

export function getProjectRoot(): string {
    let projectRoot = '';

    if (vscode.workspace.workspaceFolders) {
        let workspaceFolder: vscode.WorkspaceFolder | undefined;

        const activeEditor = vscode.window.activeTextEditor;
        if (activeEditor) {
            const activeFileUri = activeEditor.document.uri;
            workspaceFolder = vscode.workspace.getWorkspaceFolder(activeFileUri);
        }

        if (!workspaceFolder) {
            workspaceFolder = vscode.workspace.workspaceFolders[0];
        }

        if (workspaceFolder) {
            projectRoot = workspaceFolder.uri.fsPath;
        }
    }

    return projectRoot + "/";
}

async function findInFile(filePath: string, searchString: string): Promise<vscode.Location[]> {
    const projectRoot = getProjectRoot();

    const absolutePath = path.join(projectRoot, filePath.replace(projectRoot, ""));
    const document = await vscode.workspace.openTextDocument(absolutePath);
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

    console.log("find:", `[${filePath}]`, locations.length);
    return locations;
}


export async function findStringInProject(searchPattern: string, includedFiles: string[] | undefined): Promise<vscode.Location[]> {
    if (!vscode.workspace.workspaceFolders) {
        vscode.window.showInformationMessage('No workspace folder found.');
        return [];
    }

    const locations: vscode.Location[] = [];

    console.log("[PATTERN]", searchPattern);
    console.log("[INCLUDE]", includedFiles);
    if (includedFiles?.length === 1 && includedFiles[0] === "__CURRENT__") {
        const activeEditor = vscode.window.activeTextEditor;
        try {
            const f = activeEditor?.document.fileName;
            console.log(`Searching current: ${f}`);
            locations.push(...await findInFile(f!, searchPattern));
        } catch (e) {
            // Skip
        }
        return locations;
    }


    const files = await listProjectFiles();
    for (const f of files) {
        try {
            locations.push(...await findInFile(f, searchPattern));
        } catch (e) {
            // Skip
        }

    }
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

export function selectRange(start: vscode.Position, end: vscode.Position): vscode.Selection | undefined {
    const activeEditor = vscode.window.activeTextEditor;

    if (activeEditor) {
        const selection = new vscode.Selection(start, end);
        activeEditor.selection = selection;
        activeEditor.revealRange(selection, vscode.TextEditorRevealType.Default);
        console.log("[SELECTION]", selection?.start.line, selection?.start.character, selection.end.line, selection.end.character);
        return selection;
    } else {
        console.log("[WARN]", 'No active text editor found.');
    }
}

export async function describeRange(start: vscode.Position, end: vscode.Position
    ): Promise<Array<vscode.DocumentSymbol | vscode.SymbolInformation>> {
        
        const activeEditor = vscode.window.activeTextEditor;
        const uri = activeEditor!.document.uri;
        
        const range = new vscode.Range(start, end);
        console.log("[DESCRIBE] uri:", uri);
        console.log("[DESCRIBE] Requested Range:", range.start, range.end);

    const symbols = await vscode.commands.executeCommand<
        Array<vscode.DocumentSymbol | vscode.SymbolInformation>
    >('vscode.executeDocumentSymbolProvider', uri);

    if (!symbols) {
        console.log("[WARN][DESCRIBE] no symbols");
        return [];
    }

  
    const symbolsInRange: Array<vscode.DocumentSymbol | vscode.SymbolInformation> = [];

    console.log("[DESCRIBE]", symbols.length);
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
        const definitionLocations = await vscode.commands.executeCommand<vscode.LocationLink[]>(
            'vscode.executeDefinitionProvider',
            activeEditor.document.uri,
            position
        );

        if (definitionLocations && definitionLocations.length > 0) {
            console.log("[GOTO]", "HERE1");
            const location = definitionLocations[0];
            console.log("[GOTO]", "HERE2");
            const document = await vscode.workspace.openTextDocument(location.targetUri);
            console.log("[GOTO]", "HERE3");
            const editor = await vscode.window.showTextDocument(document);
            console.log("[GOTO]", "HERE4", JSON.stringify(location));
            editor.selection = new vscode.Selection(location.targetRange.start, location.targetRange.end);
            console.log("[GOTO]", "HERE5");
            editor.revealRange(location.targetRange, vscode.TextEditorRevealType.InCenter);
            console.log("[GO TO DEFINITION]");
        } else {
            console.log("[WARN][GOTO]", 'No definition found for the symbol under the cursor.');
        }
    } else {
        console.log("[WARN][GOTO]", 'No active text editor found.');
    }
}

export async function rename(newName: string): Promise<void> {
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
            console.log("[RENAME]");
        } else {
            console.log("[WARN][RENAME]", 'No symbol found to rename at the cursor position.');
        }
    } else {
        console.log("[WARN][RENAME]", 'No active text editor found.');
    }
}

export async function findUses(): Promise<vscode.Location[] | null> {
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
            console.log("[USES]", references);
            return references;
        } else {
            console.log("[WARN][FIND USES]", 'No references found for the symbol at the cursor position.');
            return null;
        }
    } else {
        console.log("[WARN][FIND USES]", 'No active text editor found.');
        return null;
    }
}