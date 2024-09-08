import { getProjectRoot, listProjectFiles } from "../../commands/commands";
import { idepb } from "../../../proto/idepb/ide";
import RequestMessage = idepb.RequestMessage;
import ResponseMessage = idepb.ResponseMessage;
import ResponseType = idepb.ResponseType;
import ListFilesResponse = idepb.ListFilesResponse;
import { CodeSourceID } from "../../../config";

async function handleListFilesRequest(
  codeSourceID: CodeSourceID,
  request: RequestMessage,
  send: (msg: ResponseMessage) => void,
) {
  const files = await listProjectFiles();

  const response = new ResponseMessage({
    type: ResponseType.RESPONSE_LIST_FILES,
    code_source_id: codeSourceID,
    list_files_response: new ListFilesResponse({
      root_path: getProjectRoot(),
      file_paths: files,
    }),
  });

  send(response);
}

export { handleListFilesRequest };
