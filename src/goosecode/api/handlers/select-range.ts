import {openFiles, selectRange} from "../../commands/commands";
import * as vscode from 'vscode';
import {idepb} from "../../../proto/idepb/ide";
import RequestMessage = idepb.RequestMessage;
import ResponseMessage = idepb.ResponseMessage;
import ResponseType = idepb.ResponseType;
import SelectRangeResponse = idepb.SelectRangeResponse;
import {ApiError} from "../../errors";

async function handleSelectRange(request: RequestMessage, send: (msg: ResponseMessage) => void) {
    const location = request.select_range_request.location;

    await openFiles([location!.path]);
    const start = new vscode.Position(location!.start.line, location!.start.character);
    const end = new vscode.Position(location!.end.line, location!.end.character);

    const selection = selectRange(start, end);
    if (!selection) {
        throw new ApiError("Failed to select range");
    }

    const response = new ResponseMessage(
        {
            type: ResponseType.RESPONSE_SELECT_RANGE,
            command_id: request.command_id,
            select_range_response: new SelectRangeResponse(
                selectRange(start, end)
            )
        }
    );
    send(response);
}

export{
    handleSelectRange,
}