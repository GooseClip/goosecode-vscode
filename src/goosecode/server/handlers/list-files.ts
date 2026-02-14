import * as vscode from "vscode";

import { create } from "@bufbuild/protobuf";
import type { ListFilesRequest } from "../../../gen/ide-connect/v1/api_pb";
import { ListFilesResponseSchema } from "../../../gen/ide-connect/v1/api_pb";
import { listProjectFiles } from "../../commands/commands";

async function handleListFilesRequest(
    request: ListFilesRequest,
    workspaceUri: vscode.Uri,
) {
    const files = await listProjectFiles(workspaceUri);
    
    const response = create(ListFilesResponseSchema, {
        filePaths: files,
      });
    
      return response;
}

export { handleListFilesRequest };
