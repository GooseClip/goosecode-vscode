import {getFileContents} from "../../commands/commands";
import {idepb} from "../../../proto/idepb/ide";
import RequestMessage = idepb.RequestMessage;
import ResponseMessage = idepb.ResponseMessage;
import GetFilesResponse = idepb.GetFilesResponse;
import ResponseType = idepb.ResponseType;

async function handleGetFilesRequest(request: RequestMessage, send: (msg: ResponseMessage) => void) {
    const contents = await getFileContents(request.get_files_request.file_paths);
    const response = new ResponseMessage(
        {
            type: ResponseType.RESPONSE_GET_FILES,
            command_id: request.command_id,
            get_files_response: new GetFilesResponse({
                file_contents: contents,
            })
        }
    );

    send(response);
}

export {
    handleGetFilesRequest,
}