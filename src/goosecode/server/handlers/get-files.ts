import { getFileContents } from "../../commands/commands";

import { Uri } from "vscode";

import { gooseclip } from "../../../proto/ide/v1/ide";
import RequestMessage = gooseclip.goosecode.ide.v1.RequestMessage;
import ResponseMessage = gooseclip.goosecode.ide.v1.ResponseMessage;
import GetFilesResponse = gooseclip.goosecode.ide.v1.GetFilesResponse;
import ResponseType = gooseclip.goosecode.ide.v1.ResponseType;

async function handleGetFilesRequest(
  request: RequestMessage,
  workspaceUri: Uri,
  send: (msg: ResponseMessage) => void,
) {
  // TODO GET THE COMMIT CONTENTS AND THE DELTA
  const contents = await getFileContents(
    workspaceUri,
    request.get_files_request.file_paths,
  );

  // const commitContents = await getCommitContents(
  //   workspaceUri,
  //   request.get_files_request.file_paths,
  // );

  const response = new ResponseMessage({
    type: ResponseType.RESPONSE_TYPE_GET_FILES,
    repository_snapshot_fingerprint: request.repository_snapshot_fingerprint,
    get_files_response: new GetFilesResponse({
      file_contents: contents,
    }),
  });

  send(response);
}

export { handleGetFilesRequest };
