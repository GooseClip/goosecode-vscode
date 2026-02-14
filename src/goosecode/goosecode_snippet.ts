import * as vscode from "vscode";
import { getWordAtPosition } from "./vscode_extension_helpers";
import { create } from "@bufbuild/protobuf";
import { convertRange } from "../util";
import { WorkspaceTracker } from "../workspace-tracker";
import { GooseCodeServer } from "./server/server";
import { getFileContexts } from "./context";
import { PushResponseSchema, PushType, FileCommandPushSchema, FileCommandType, SnippetPushSchema } from "../gen/ide-connect/v1/push_pb";
import { LocationWithContextSchema, LocationSchema, SnippetContextSchema } from "../gen/ide-connect/v1/vscode_pb";

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
        create(PushResponseSchema, {
            type: PushType.FILE_COMMAND,
            data: {
                case: "fileCommand",
                value: create(FileCommandPushSchema, {
                    type: FileCommandType.SNIPPET,
                    fileContexts: await getFileContexts(workspaceTracker, [workspaceTracker.currentRelativeFilePath()]),
                    data: {
                        case: "snippet",
                        value: create(SnippetPushSchema, {
                            minimize: args.minimized,
                            location: create(LocationWithContextSchema, {
                                location: create(LocationSchema, {
                                    path: workspaceTracker.currentRelativeFilePath(),
                                    range: convertRange(range),
                                }),
                                context: create(SnippetContextSchema, {
                                    fullRange: convertRange(fullRange),
                                }),
                            }),
                        }),
                    },
                }),
            },
        }),
    );
}

