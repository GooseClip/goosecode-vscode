import { getProjectRoot, listProjectFiles } from "../../commands/commands";
import { idepb } from "../../../proto/idepb/ide";
import { ApiError } from "../../errors";
import RequestMessage = idepb.RequestMessage;
import ResponseMessage = idepb.ResponseMessage;
import ResponseType = idepb.ResponseType;
import { CodeSourceID } from "../../../config";
import CodeSourceIDResponse = idepb.CodeSourceIDResponse;
import * as path from "node:path";

async function handleCodeSourceID(
  codeSourceID: CodeSourceID,
  request: RequestMessage,
  send: (msg: ResponseMessage) => void,
) {
  const suggestedAlias = path.basename(getProjectRoot());
  const response = new ResponseMessage({
    type: ResponseType.RESPONSE_CODE_SOURCE_ID,
    code_source_id: codeSourceID,
    code_source_id_response: new CodeSourceIDResponse({
      suggested_alias: suggestedAlias,
    }),
  });

  send(response);
}

export { handleCodeSourceID };
