import * as vscode from "vscode";
import { create } from "@bufbuild/protobuf";
import { convertRange } from "../util";
import { WorkspaceTracker } from "../workspace-tracker";
import { GooseCodeServer } from "./server/server";
import { getFileContexts } from "./context";
import { PushResponseSchema, PushType, FileCommandPushSchema, FileCommandType, SnippetPushSchema } from "../gen/ide-connect/v1/push_pb";
import { LocationWithContextSchema, LocationSchema, SnippetContextSchema } from "../gen/ide-connect/v1/vscode_pb";

export async function handleAddFileCommand(
    gooseCodeServer: GooseCodeServer,
    workspaceTracker: WorkspaceTracker,
    fileUri: vscode.Uri
) {
    const workspace = workspaceTracker.getWorkspaceFromFile(fileUri);
    if (!workspace) {
        vscode.window.showErrorMessage("File is not in a GooseCode workspace");
        return;
    }

    const relativePath = workspaceTracker.relativePath(fileUri.fsPath, workspace.uri.fsPath);

    const document = await vscode.workspace.openTextDocument(fileUri);
    const lastLine = document.lineCount - 1;
    const lastLineLength = document.lineAt(lastLine).text.length;

    const fullRange = new vscode.Range(
        new vscode.Position(0, 0),
        new vscode.Position(lastLine, lastLineLength)
    );

    gooseCodeServer.push(
        create(PushResponseSchema, {
            type: PushType.FILE_COMMAND,
            data: {
                case: "fileCommand",
                value: create(FileCommandPushSchema, {
                    type: FileCommandType.SNIPPET,
                    fileContexts: await getFileContexts(workspaceTracker, [relativePath]),
                    data: {
                        case: "snippet",
                        value: create(SnippetPushSchema, {
                            minimize: false,
                            location: create(LocationWithContextSchema, {
                                location: create(LocationSchema, {
                                    path: relativePath,
                                    range: convertRange(fullRange),
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
