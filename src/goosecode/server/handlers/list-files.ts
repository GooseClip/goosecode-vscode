import * as vscode from "vscode";

import * as gc from "../../../gen/ide";
import { listProjectFiles } from "../../commands/commands";

async function handleListFilesRequest(
    request: gc.ListFilesRequest,
    workspaceUri: vscode.Uri,
) {
    const files = await listProjectFiles(workspaceUri);
    
    const response = gc.ListFilesResponse.create({
        filePaths: files,
      });
    
      return response;
}

export { handleListFilesRequest };
