import * as vscode from "vscode";
import { getWordAtPosition } from "./vscode_extension_helpers";
import * as gc from "../gen/ide";
import { convertRange } from "../util";
import { WorkspaceTracker } from "../workspace-tracker";
import { GooseCodeServer } from "./server/server";
import { getFileContexts } from "./context";

export async function handleSnippetCommand(gooseCodeServer: GooseCodeServer, workspaceTracker: WorkspaceTracker, args: { minimized: boolean }) {
    const editor = vscode.window.activeTextEditor!;
    const selection = editor.selection;

    let range: vscode.Range;
    let fullRange: vscode.Range;

    if (selection.isEmpty) {
        const wordRange = getWordAtPosition();
        range = wordRange?.range ?? selection;
        fullRange = editor.document.lineAt(selection.active.line).range;
    } else {
        range = selection;
        const startLine = editor.document.lineAt(selection.start.line);
        const endLine = editor.document.lineAt(selection.end.line);
        fullRange = new vscode.Range(startLine.range.start, endLine.range.end);
    }

    gooseCodeServer.push(
        gc.PushResponse.create({
            type: gc.PushType.FILE_COMMAND,
            data: {
                oneofKind: "fileCommand",
                fileCommand: gc.FileCommandPush.create({
                    type: gc.FileCommandType.SNIPPET,
                    fileContexts: await getFileContexts(workspaceTracker, [workspaceTracker.currentRelativeFilePath()]),
                    data: {
                        oneofKind: "snippet",
                        snippet: gc.SnippetPush.create({
                            minimize: args.minimized,
                            location: gc.LocationWithContext.create({
                                location: gc.Location.create({
                                    path: workspaceTracker.currentRelativeFilePath(),
                                    range: convertRange(range),
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

