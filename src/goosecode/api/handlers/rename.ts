import {openFiles, rename, selectRange} from "../../commands/commands";
import * as vscode from 'vscode';
import {isEntireWord} from "../../../util";
import {idepb} from "../../../proto/idepb/ide";
import RequestMessage = idepb.RequestMessage;
import ResponseMessage = idepb.ResponseMessage;
import RenameResponse = idepb.RenameResponse;
import ResponseType = idepb.ResponseType;
import {ApiError} from "../../errors";

async function handleRename(request: RequestMessage, send: (msg: ResponseMessage) => void) {
    const location = request.rename_request!.location;

    await openFiles([location!.path]);
    const start = new vscode.Position(location!.range.start.line, location!.range.start.character);
    const end = new vscode.Position(location!.range.end.line, location!.range.end.character);

    const selection = selectRange(start, end);
    if (!selection) {
        throw new ApiError("Failed to select range");
    }

    if (!isEntireWord(selection!)) {
        throw new ApiError("Selection is not word");
    }

    if (!await rename(request.rename_request.new_name)) {
        throw new ApiError("Failed to rename");
    }

    const response = new ResponseMessage({
        type: ResponseType.RESPONSE_RENAME,
        command_id: request.command_id,
        rename_response: new RenameResponse()
    });
    send(response);
}

export {
    handleRename,
}