import { getFileContentsRaw } from "../../commands/commands";

import * as vscode from "vscode";
import * as path from "path";

import * as gc from "../../../gen/ide";
import { getDiffToHead, getFileContentsAtCommit as getFileContentsAtHead } from "../../../git";
import { toNativePath } from "../../../util";

async function handleGetFilesRequest(
  request: gc.GetFilesRequest,
  workspaceUri: vscode.Uri,

): Promise<gc.GetFilesResponse> {
  const fileContext: gc.FileContext[] = [];

  for (var v of request.filePaths) {
    // Convert incoming UNIX-style path to native format
    const nativePath = toNativePath(v);
    // Use raw binary file reading
    const rawResults = await getFileContentsRaw(
      workspaceUri,
      [nativePath],
    );
    
    const rawResult = rawResults[0];
    if (!rawResult) {
      console.error(`Failed to read file: ${v}`);
      continue;
    }

    const { content, isBinary } = rawResult;
    console.log(`FILE: ${v}, isBinary: ${isBinary}, size: ${content.length}`);

    var head = null;
    try {
      head = await getFileContentsAtHead(vscode.Uri.file(path.join(workspaceUri.fsPath, nativePath)));
    } catch (e) {
      console.error("Failed to get head content");
    }

    fileContext.push(gc.FileContext.create({
      filePath: v,
      headContent: head ?? "",
      // Keep currentContent for backward compatibility with text files
      currentContent: isBinary ? "" : content.toString("utf-8"),
      // New fields for binary support
      rawContent: new Uint8Array(content),
      isBinary: isBinary,
    }));
  }

  const response = gc.GetFilesResponse.create({
    fileContext: fileContext,
  });

  return response;
}

export { handleGetFilesRequest };
