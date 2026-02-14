import { getFileContentsRaw } from "../../commands/commands";

import * as vscode from "vscode";
import * as path from "path";

import { create } from "@bufbuild/protobuf";
import type { GetFilesRequest, GetFilesResponse } from "../../../gen/ide-connect/v1/api_pb";
import { GetFilesResponseSchema } from "../../../gen/ide-connect/v1/api_pb";
import type { FileContext } from "../../../gen/ide-connect/v1/files_pb";
import { FileContextSchema } from "../../../gen/ide-connect/v1/files_pb";
import { getFileContentsAtCommit as getFileContentsAtHead } from "../../../git";
import { toNativePath } from "../../../util";

async function handleGetFilesRequest(
  request: GetFilesRequest,
  workspaceUri: vscode.Uri,

): Promise<GetFilesResponse> {
  const fileContext: FileContext[] = [];

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

    fileContext.push(create(FileContextSchema, {
      filePath: v,
      headContent: head ?? "",
      // Keep currentContent for backward compatibility with text files
      currentContent: isBinary ? "" : content.toString("utf-8"),
      // New fields for binary support
      rawContent: new Uint8Array(content),
      isBinary: isBinary,
    }));
  }

  const response = create(GetFilesResponseSchema, {
    fileContext: fileContext,
  });

  return response;
}

export { handleGetFilesRequest };
