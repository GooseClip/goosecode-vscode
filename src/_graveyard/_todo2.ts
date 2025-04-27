/*
async function getLintErrors(uri: vscode.Uri): Promise<vscode.Diagnostic[]> {
  return vscode.languages.getDiagnostics(uri);
}
*/

// export async function listProjectFiles(
//   exclusions?: string[],
// ): Promise<string[]> {
//   const workspaceRoot = getProjectRoot();
//
//   if (!workspaceRoot) {
//     return [];
//   }
//
//   const excludePattern = exclusions
//     ? `{${exclusions.join(",")}}`
//     : `{${defaultExclusions.join(",")}}`;
//   const searchPattern = new vscode.RelativePattern(workspaceRoot, "**/*");
//   const files = await vscode.workspace.findFiles(searchPattern, excludePattern);
//
//   return files.map((file) => path.relative(workspaceRoot, file.fsPath));
// }

// Opens a file in the IDE
// export async function openFiles(workspaceUri: Uri, filePaths: string[]) {
//   try {
//     for (const f of filePaths) {
//       console.log("[OPEN FILES]", f);
//       const absolutePath = path.join(workspaceUri.fsPath, f);
//       const fileUri = vscode.Uri.file(absolutePath);
//       const document = await vscode.workspace.openTextDocument(fileUri);
//       await vscode.window.showTextDocument(document);
//     }
//   } catch (error) {
//     console.error(`Error opening file: ${error}`);
//   }
// }

// async function findInFile(
//   filePath: string,
//   searchString: string,
// ): Promise<vscode.Location[]> {
//   const projectRoot = getProjectRoot();
//
//   const absolutePath = path.join(
//     projectRoot,
//     filePath.replace(projectRoot, ""),
//   );
//   const document = await vscode.workspace.openTextDocument(absolutePath);
//   const text = document.getText();
//   const locations: vscode.Location[] = [];
//
//   let match: RegExpExecArray | null;
//   const regex = new RegExp(searchString, "g");
//
//   while ((match = regex.exec(text)) !== null) {
//     const position = document.positionAt(match.index);
//     const range = document.getWordRangeAtPosition(position);
//     if (range) {
//       locations.push(new vscode.Location(document.uri, range));
//     }
//   }
//
//   console.log("find:", `[${filePath}]`, locations.length);
//   return locations;
// }

// export async function findStringInProject(
//   searchPattern: string,
//   includedFiles: string[] | undefined,
// ): Promise<vscode.Location[]> {
//   if (!vscode.workspace.workspaceFolders) {
//     vscode.window.showInformationMessage("No workspace folder found.");
//     return [];
//   }
//
//   const locations: vscode.Location[] = [];
//
//   console.log("[PATTERN]", searchPattern);
//   console.log("[INCLUDE]", includedFiles);
//   if (includedFiles?.length === 1 && includedFiles[0] === "__CURRENT__") {
//     const activeEditor = vscode.window.activeTextEditor;
//     try {
//       const f = activeEditor?.document.fileName;
//       console.log(`Searching current: ${f}`);
//       locations.push(...(await findInFile(f!, searchPattern)));
//     } catch (e) {
//       // Skip
//     }
//     return locations;
//   }
//
//   const files = await listProjectFiles();
//   for (const f of files) {
//     try {
//       locations.push(...(await findInFile(f, searchPattern)));
//     } catch (e) {
//       // Skip
//     }
//   }
//   return locations;
// }

// export function selectRange(
//   start: vscode.Position,
//   end: vscode.Position,
// ): vscode.Selection | undefined {
//   const activeEditor = vscode.window.activeTextEditor;
//
//   if (activeEditor) {
//     const selection = new vscode.Selection(start, end);
//     activeEditor.selection = selection;
//     activeEditor.revealRange(selection, vscode.TextEditorRevealType.Default);
//     console.log(
//       "[SELECTION]",
//       selection?.start.line,
//       selection?.start.character,
//       selection.end.line,
//       selection.end.character,
//     );
//     return selection;
//   } else {
//     console.log("[WARN]", "No active text editor found.");
//   }
// }

// export async function describeRange(
//   start: vscode.Position,
//   end: vscode.Position,
// ): Promise<
//   Array<vscode.DocumentSymbol | vscode.SymbolInformation> | undefined
// > {
//   const activeEditor = vscode.window.activeTextEditor;
//   const uri = activeEditor!.document.uri;
//
//   const range = new vscode.Range(start, end);
//   console.log("[DESCRIBE] uri:", uri);
//   console.log("[DESCRIBE] Requested Range:", range.start, range.end);
//
//   const symbols = await vscode.commands.executeCommand<
//     Array<vscode.DocumentSymbol | vscode.SymbolInformation>
//   >("vscode.executeDocumentSymbolProvider", uri);
//
//   if (!symbols) {
//     console.log("[WARN][DESCRIBE] no symbols");
//     return;
//   }
//
//   const symbolsInRange: Array<
//     vscode.DocumentSymbol | vscode.SymbolInformation
//   > = [];
//
//   console.log("[DESCRIBE]", symbols.length);
//   for (const symbol of symbols) {
//     if (symbol instanceof vscode.SymbolInformation) {
//       console.log("[SYMBOL]", typeof symbol, JSON.stringify(symbol));
//     } else {
//       console.log("[DOCUMENT]", typeof symbol, JSON.stringify(symbol));
//     }
//     const symbolRange =
//       symbol instanceof vscode.DocumentSymbol
//         ? symbol.range
//         : symbol.location.range;
//     if (range.intersection(symbolRange)) {
//       symbolsInRange.push(symbol);
//     }
//   }
//
//   return symbolsInRange;
// }

// export async function isDeclaration(): Promise<boolean> {
//     const activeEditor = vscode.window.activeTextEditor;
//
//     if (activeEditor) {
//         const position = activeEditor.selection.active;
//         const declarationLocations = await vscode.commands.executeCommand<vscode.LocationLink[]>(
//             'vscode.executeDeclarationProvider',
//             activeEditor.document.uri,
//             position
//         );
//
//         if (declarationLocations && declarationLocations.length > 0) {
//             console.log("[DECLARATION]", declarationLocations);
//             return true;
//         } else {
//             console.log("[WARN][DECLARATION]", 'No declaration found for the symbol under the cursor.');
//         }
//     } else {
//         console.log("[WARN][DECLARATION]", 'No active text editor found.');
//     }
//     return false;
// }

// export async function getTypeDefinitions(): Promise<vscode.LocationLink[]> {
//     const activeEditor = vscode.window.activeTextEditor;
//
//     if (activeEditor) {
//         const position = activeEditor.selection.active;
//         const links = await vscode.commands.executeCommand<vscode.LocationLink[]>(
//             "vscode.executeTypeDefinitionProvider",
//             activeEditor.document.uri,
//             position,
//         );
//
//         if (links && links.length > 0) {
//             return links;
//         } else {
//             console.log(
//                 "[WARN][TYPE DEFINITIONS]",
//                 "No declaration found for the symbol under the cursor.",
//             );
//         }
//     } else {
//         console.log("[WARN][TYPE DEFINITIONS]", "No active text editor found.");
//     }
//     return [];
// }

// export async function rename(newName: string): Promise<boolean> {
//   const activeEditor = vscode.window.activeTextEditor;
//
//   if (activeEditor) {
//     const position = activeEditor.selection.active;
//
//     // Check if there's a symbol to rename
//     const workspaceEdit =
//       await vscode.commands.executeCommand<vscode.WorkspaceEdit>(
//         "vscode.executeDocumentRenameProvider",
//         activeEditor.document.uri,
//         position,
//         newName,
//       );
//
//     if (workspaceEdit) {
//       // Apply the rename edits
//       await vscode.workspace.applyEdit(workspaceEdit);
//       console.log("[RENAME]");
//       return true;
//     } else {
//       console.log(
//         "[WARN][RENAME]",
//         "No symbol found to rename at the cursor position.",
//       );
//     }
//   } else {
//     console.log("[WARN][RENAME]", "No active text editor found.");
//   }
//   return false;
// }
