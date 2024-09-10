import { openFiles, selectRange } from "../../commands/commands";
import * as vscode from "vscode";
import { idepb } from "../../../proto/idepb/ide";
import RequestMessage = idepb.RequestMessage;
import ResponseMessage = idepb.ResponseMessage;
import ResponseType = idepb.ResponseType;
import SelectRangeResponse = idepb.SelectRangeResponse;
import { ApiError } from "../../errors";
import { CodeSourceID } from "../../../config";

async function handleSelectRange(
  request: RequestMessage,
  send: (msg: ResponseMessage) => void,
) {
  const location = request.select_range_request.location;

  await openFiles([location!.path]);
  const start = new vscode.Position(
    location!.range.start.line,
    location!.range.start.character,
  );
  const end = new vscode.Position(
    location!.range.end.line,
    location!.range.end.character,
  );

  const selection = selectRange(start, end);
  if (!selection) {
    throw new ApiError("Failed to select range", 500);
  }

  const response = new ResponseMessage({
    type: ResponseType.RESPONSE_SELECT_RANGE,
    code_source_id: request.code_source_id,
    select_range_response: new SelectRangeResponse(selectRange(start, end)),
  });
  send(response);
}

export { handleSelectRange };
