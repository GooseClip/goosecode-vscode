import { getReferences, openFiles, selectRange } from "../../commands/commands";
import * as vscode from "vscode";
import { convertLocations, isEntireWord } from "../../../util";
import { idepb } from "../../../proto/idepb/ide";
import RequestMessage = idepb.RequestMessage;
import ResponseMessage = idepb.ResponseMessage;
import FindUsesResponse = idepb.FindUsesResponse;
import ResponseType = idepb.ResponseType;
import Location = idepb.Location;
import { ApiError } from "../../errors";
import { CodeSourceID } from "../../../config";

async function handleFindUses(
  codeSourceID: CodeSourceID,
  request: RequestMessage,
  send: (msg: ResponseMessage) => void,
) {
  const location = request.find_uses_request.location;

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

  if (!isEntireWord(selection!)) {
    throw new ApiError("Selection is not word");
  }

  const uses = await getReferences();
  if (!uses) {
    throw new ApiError("Failed to find uses");
  }

  const pblocs: Location[] = convertLocations(uses);
  const response = new ResponseMessage({
    type: ResponseType.RESPONSE_FIND_USES,
    code_source_id: codeSourceID,
    find_uses_response: new FindUsesResponse({
      locations: pblocs,
    }),
  });

  send(response);
}

export { handleFindUses };
