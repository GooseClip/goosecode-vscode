import { describeRange, openFiles, selectRange } from "../../commands/commands";
import * as vscode from "vscode";
import { convertSymbols } from "../../../util";
import { idepb } from "../../../proto/idepb/ide";
import RequestMessage = idepb.RequestMessage;
import ResponseMessage = idepb.ResponseMessage;
import ResponseType = idepb.ResponseType;
import DescribeRangeResponse = idepb.DescribeRangeResponse;
import { ApiError } from "../../errors";
import { CodeSourceID } from "../../../config";

async function handleDescribeRange(
  codeSourceID: CodeSourceID,
  request: RequestMessage,
  send: (msg: ResponseMessage) => void,
) {
  const location = request.describe_range_request.location;

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
    throw new ApiError("Failed to select range");
  }

  const symbols = await describeRange(start, end);
  if (!symbols) {
    throw new ApiError("Failed to get descriptions");
  }

  console.log("vsSymbols:", symbols.length);
  const pbSymbols = convertSymbols(symbols);

  const response = new ResponseMessage({
    type: ResponseType.RESPONSE_DESCRIBE_RANGE,
    code_source_id: codeSourceID,
    describe_range_response: new DescribeRangeResponse({
      symbols: pbSymbols,
    }),
  });
  send(response);
}

export { handleDescribeRange };
