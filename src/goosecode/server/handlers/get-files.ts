import { getFileContents } from "../../commands/commands";

import * as vscode from "vscode";

import * as gc from "@/gen/ide";
import { getFileContentsAtCommit } from "@/git";

async function handleGetFilesRequest(
  request: gc.GetFilesRequest,
  workspaceUri: vscode.Uri,

): Promise<gc.GetFilesResponse> {
  // TODO GET THE COMMIT CONTENTS AND THE DELTA

  console.log(`HANDLE GET FILES: ${request.filePaths.join(",")}`)
  console.log(`WORKSPACE URL ${workspaceUri.fsPath}`)
  const contents: gc.FileContent[] = [];
  for (var v of request.filePaths) {
    const current = await getFileContents(
      workspaceUri,
      [v],
    );
    const commitContent = await getFileContentsAtCommit(vscode.Uri.file(vscode.window.activeTextEditor!.document.uri.fsPath));

    console.log("CURRENT CONTENT", current[0]);
    console.log("COMMIT CONTENT", commitContent);

    contents.push(gc.FileContent.create({
      filePath: v,
      currentContent: current[0],
      commitContent: commitContent ?? "",
    }));
  }

  const response = gc.GetFilesResponse.create({
    // fileContents: [],
    fileContents: contents,
  });

  return response;
}

export { handleGetFilesRequest };
