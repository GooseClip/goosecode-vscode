import { getFileContents } from "../../commands/commands";

import { Uri } from "vscode";

import { goosecode } from "../../../proto/ide/ide";
import RequestMessage = goosecode.v2.app.source.ide.RequestMessage;
import ResponseMessage = goosecode.v2.app.source.ide.ResponseMessage;
import GetFilesResponse = goosecode.v2.app.source.ide.GetFilesResponse;
import ResponseType = goosecode.v2.app.source.ide.ResponseType;

async function handleGetFilesRequest(
  request: RequestMessage,
  workspaceUri: Uri,
  send: (msg: ResponseMessage) => void,
) {
  const contents = await getFileContents(
    workspaceUri,
    request.get_files_request.file_paths,
  );
  const response = new ResponseMessage({
    type: ResponseType.RESPONSE_GET_FILES,
    repository_snapshot_fingerprint: request.repository_snapshot_fingerprint,
    get_files_response: new GetFilesResponse({
      file_contents: contents,
    }),
  });

  send(response);
}

export { handleGetFilesRequest };
