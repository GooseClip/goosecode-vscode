import {openFiles} from "../../commands/commands";
import {idepb} from "../../../proto/idepb/ide";
import RequestMessage = idepb.RequestMessage;
import ResponseMessage = idepb.ResponseMessage;
import OpenFilesResponse = idepb.OpenFilesResponse;
import ResponseType = idepb.ResponseType;

async function handleOpenFilesRequest(request: RequestMessage, send: (msg: ResponseMessage) => void) {
    await openFiles(request.open_files_request.file_paths);

    const response = new ResponseMessage({
        type: ResponseType.RESPONSE_OPEN_FILES,
        command_id: request.command_id,
        open_files_response: new OpenFilesResponse()
    });
    send(response);
}

export{
    handleOpenFilesRequest,
}