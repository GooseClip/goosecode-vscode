import * as vscode from "vscode";
import * as gc from "../gen/ide";
import { getFileContents } from "./commands/commands";
import { WorkspaceTracker } from "../workspace-tracker";
import { getFileContentsAtCommit as getFileContentsAtHead } from "../git";
import * as path from "path";

export async function getFileContexts(
    workspaceTracker: WorkspaceTracker,
    paths: string[],
): Promise<gc.FileContext[]> {
    const fileContexts: gc.FileContext[] = [];

    const ws = workspaceTracker.getLastActiveGooseCodeWorkspace();
    if (!ws) {
        console.error("No active GooseCode workspace found.");
        return [];
    }

    for (const v of paths) {
        const currentContents = await getFileContents(
            ws.uri,
            [v],
        );

        let headContent: string | null = null;
        try {
            const absolutePath = path.join(ws.uri.fsPath, v);
            headContent = await getFileContentsAtHead(vscode.Uri.file(absolutePath));
        } catch (e) {
            console.error(`Failed to get patch for ${v}`, e);
        }

        fileContexts.push(gc.FileContext.create({
            filePath: v,
            headContent: headContent ?? "",
            currentContent: currentContents.length > 0 ? currentContents[0] : "",
        }));
    }

    return fileContexts;
} 