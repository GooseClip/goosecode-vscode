import {goToDefinition, openFiles, selectRange} from "../../commands/commands";
import * as vscode from 'vscode';
import {isEntireWord} from "../../../util";
import {idepb} from "../../../proto/idepb/ide";
import RequestMessage = idepb.RequestMessage;
import ResponseMessage = idepb.ResponseMessage;
import ResponseType = idepb.ResponseType;
import GoToDefinitionResponse = idepb.GoToDefinitionResponse;
import {ApiError} from "../../errors";

async function handleGoToDefinition(request: RequestMessage, send: (msg: ResponseMessage) => void) {
    const location = request.go_to_definition_request.location;

    await openFiles([location!.path]);
    const start = new vscode.Position(location!.start.line, location!.start.character);
    const end = new vscode.Position(location!.end.line, location!.end.character);

    const selection = selectRange(start, end);
    if (!selection) {
        throw new ApiError("Failed to select range");
    }

    if (!isEntireWord(selection!)) {
        throw new ApiError("Selection is not word");
    }

    if (!await goToDefinition()) {
        throw new ApiError("Failed to go to definition");
    }

    const response = new ResponseMessage({
        type: ResponseType.RESPONSE_GO_TO_DEFINITION,
        command_id: request.command_id,
        go_to_definition_response: new GoToDefinitionResponse({

        })
    });

    send(response);
}

export {
    handleGoToDefinition,
}