import { getFileContents } from "../../commands/commands";

import * as vscode from "vscode";

import * as gc from "@/gen/ide";
import { getDiffToHead, getFileContentsAtCommit as getFileContentsAtHead } from "@/git";

async function handleGetFilesRequest(
  request: gc.GetFilesRequest,
  workspaceUri: vscode.Uri,

): Promise<gc.GetFilesResponse> {
  const contents: gc.FileContent[] = [];
  for (var v of request.filePaths) {
    const current = await getFileContents(
      workspaceUri,
      [v],
    );
    var head = null;
    try {
      console.log("Getting diff")
      head = await getFileContentsAtHead(vscode.Uri.file(vscode.window.activeTextEditor!.document.uri.fsPath));
    } catch (e) {
      console.error("Failed to get patch")
    }

    console.log("Returning conent")

    contents.push(gc.FileContent.create({
      filePath: v,
      fileAtHead:  head ?? "",
      currentContent: current[0],
    }));
  }

  const response = gc.GetFilesResponse.create({
    // fileContents: [],
    fileContents: contents,
  });

  return response;
}

export { handleGetFilesRequest };
