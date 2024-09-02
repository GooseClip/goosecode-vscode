import * as vscode from 'vscode';
import {findStringInProject, getProjectRoot} from "../../commands/commands";
import {convertLocations} from "../../../util";
import {idepb} from "../../../proto/idepb/ide";
import RequestMessage = idepb.RequestMessage;
import ResponseMessage = idepb.ResponseMessage;
import Location = idepb.Location;

async function handleFindRequest(request: RequestMessage, send: (msg: ResponseMessage) => void) {
    const find = request.find_string_request;
    const hits: vscode.Location[] = await findStringInProject(find.search_pattern, find.included_files);

    const pblocs: Location[] = convertLocations(hits);
    const response = new ResponseMessage(
        {
            type: idepb.ResponseType.RESPONSE_FIND_STRING,
            command_id: request.command_id,
            find_string_response: new idepb.FindStringResponse(
                {
                    locations: pblocs,
                }
            )
        }
    );
    send(response);
}

export {
    handleFindRequest,
}