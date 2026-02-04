import * as vscode from "vscode";
import * as gc from "../gen/ide";
import { convertRange } from "../util";
import { WorkspaceTracker } from "../workspace-tracker";
import { GooseCodeServer } from "./server/server";
import { getFileContexts } from "./context";

export async function handleAddFileCommand(
    gooseCodeServer: GooseCodeServer,
    workspaceTracker: WorkspaceTracker,
    fileUri: vscode.Uri
) {
    // Get workspace for this file
    const workspace = workspaceTracker.getWorkspaceFromFile(fileUri);
    if (!workspace) {
        vscode.window.showErrorMessage("File is not in a GooseCode workspace");
        return;
    }

    // Get relative path from workspace
    const relativePath = workspaceTracker.relativePath(fileUri.fsPath, workspace.uri.fsPath);

    // Read file to get line count for full range
    const document = await vscode.workspace.openTextDocument(fileUri);
    const lastLine = document.lineCount - 1;
    const lastLineLength = document.lineAt(lastLine).text.length;

    // Create full file range
    const fullRange = new vscode.Range(
        new vscode.Position(0, 0),
        new vscode.Position(lastLine, lastLineLength)
    );

    gooseCodeServer.push(
        gc.PushResponse.create({
            type: gc.PushType.FILE_COMMAND,
            data: {
                oneofKind: "fileCommand",
                fileCommand: gc.FileCommandPush.create({
                    type: gc.FileCommandType.SNIPPET,
                    fileContexts: await getFileContexts(workspaceTracker, [relativePath]),
                    data: {
                        oneofKind: "snippet",
                        snippet: gc.SnippetPush.create({
                            minimize: false,
                            location: gc.LocationWithContext.create({
                                location: gc.Location.create({
                                    path: relativePath,
                                    range: convertRange(fullRange),
                                }),
                                context: gc.SnippetContext.create({
                                    fullRange: convertRange(fullRange)
                                })
                            }),
                        }),
                    }
                }),
            },
        }),
    );
}
