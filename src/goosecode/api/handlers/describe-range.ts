import {describeRange, openFiles, selectRange} from "../../commands/commands";
import * as vscode from 'vscode';
import {convertSymbols} from "../../../util";
import {idepb} from "../../../proto/idepb/ide";
import RequestMessage = idepb.RequestMessage;
import ResponseMessage = idepb.ResponseMessage;
import ResponseType = idepb.ResponseType;
import DescribeRangeResponse = idepb.DescribeRangeResponse;
import {ApiError} from "../../errors";

async function handleDescribeRange(request: RequestMessage, send: (msg: ResponseMessage) => void) {
    const location = request.describe_range_request.location;

    await openFiles([location!.path]);
    const start = new vscode.Position(location!.start.line, location!.start.character);
    const end = new vscode.Position(location!.end.line, location!.end.character);

    const selection = selectRange(start, end);
    if (!selection) {
        throw new ApiError("Failed to select range");
    }

    const symbols = await describeRange(start, end);
    if (!symbols) {
        throw new ApiError("Failed to get descriptions");
    }

    console.log("vsSymbols:", symbols.length);
    const pbSymbols = convertSymbols(symbols);

    const response = new ResponseMessage(
        {
            type: ResponseType.RESPONSE_DESCRIBE_RANGE,
            command_id: request.command_id,
            describe_range_response: new DescribeRangeResponse({
                symbols: pbSymbols,
            })
        }
    );
    send(response);
}

export {
    handleDescribeRange,
}