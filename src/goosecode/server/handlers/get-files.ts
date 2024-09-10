import { getFileContents } from "../../commands/commands";
import { idepb } from "../../../proto/idepb/ide";
import RequestMessage = idepb.RequestMessage;
import ResponseMessage = idepb.ResponseMessage;
import GetFilesResponse = idepb.GetFilesResponse;
import ResponseType = idepb.ResponseType;
import { Uri } from "vscode";

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
    code_source_id: request.code_source_id,
    get_files_response: new GetFilesResponse({
      file_contents: contents,
    }),
  });

  send(response);
}

export { handleGetFilesRequest };
