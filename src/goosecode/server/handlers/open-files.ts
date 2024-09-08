import { openFiles } from "../../commands/commands";
import { idepb } from "../../../proto/idepb/ide";
import RequestMessage = idepb.RequestMessage;
import ResponseMessage = idepb.ResponseMessage;
import OpenFilesResponse = idepb.OpenFilesResponse;
import ResponseType = idepb.ResponseType;
import { CodeSourceID } from "../../../config";

async function handleOpenFilesRequest(
  codeSourceID: CodeSourceID,
  request: RequestMessage,
  send: (msg: ResponseMessage) => void,
) {
  await openFiles(request.open_files_request.file_paths);

  const response = new ResponseMessage({
    type: ResponseType.RESPONSE_OPEN_FILES,
    code_source_id: codeSourceID,
    open_files_response: new OpenFilesResponse(),
  });
  send(response);
}

export { handleOpenFilesRequest };
