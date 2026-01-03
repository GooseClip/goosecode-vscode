import { getFileContents } from "../../commands/commands";

import * as vscode from "vscode";
import * as path from "path";

import * as gc from "../../../gen/ide";
import { getDiffToHead, getFileContentsAtCommit as getFileContentsAtHead } from "../../../git";

async function handleGetFilesRequest(
  request: gc.GetFilesRequest,
  workspaceUri: vscode.Uri,

): Promise<gc.GetFilesResponse> {
  const fileContext: gc.FileContext[] = [];

  console.log(`WORKSPACE ${workspaceUri}`)
  console.log(`REQUEST ${request.filePaths}`)
  for (var v of request.filePaths) {
    const current = await getFileContents(
      workspaceUri,
      [v],
    );
    
    console.log(`CURRENT:${current}`);

    var head = null;
    try {
      head = await getFileContentsAtHead(vscode.Uri.file(path.join(workspaceUri.fsPath, v)));
    } catch (e) {
      console.error("Failed to get patch")
    }

    fileContext.push(gc.FileContext.create({
      filePath: v,
      headContent:  head ?? "",
      currentContent: current[0],
    }));
  }

  const response = gc.GetFilesResponse.create({
    // fileContents: [],
    fileContext: fileContext,
  });

  return response;
}

export { handleGetFilesRequest };
