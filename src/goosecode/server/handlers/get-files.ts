import { getFileContents } from "../../commands/commands";

import { Uri } from "vscode";

import * as gc from "../../../gen/ide";

async function handleGetFilesRequest(
  request: gc.GetFilesRequest,
  workspaceUri: Uri,

): Promise<gc.GetFilesResponse> {
  // TODO GET THE COMMIT CONTENTS AND THE DELTA
  const contents = await getFileContents(
    workspaceUri,
    request.filePaths,
  );

  // const commitContents = await getCommitContents(
  //   workspaceUri,
  //   request.get_files_request.file_paths,
  // );

  const response = gc.GetFilesResponse.create({
    fileContents: [],
    // fileContents: contents,
  });

  return response;
}

export { handleGetFilesRequest };
