import { goToDefinition } from "../../commands/commands";
import { idepb } from "../../../proto/idepb/ide";
import RequestMessage = idepb.RequestMessage;
import ResponseMessage = idepb.ResponseMessage;
import ResponseType = idepb.ResponseType;
import GoToDefinitionResponse = idepb.GoToDefinitionResponse;
import { ApiError } from "../../errors";
import { Uri } from "vscode";

async function handleGoToDefinition(
  request: RequestMessage,
  workspaceUri: Uri,
  send: (msg: ResponseMessage) => void,
) {
  const req = request.go_to_definition_request;
  const location = req.location;

  // Open IDE
  if (!(await goToDefinition(workspaceUri, location, req.select))) {
    throw new ApiError("Failed to go to definition", 500);
  }

  const response = new ResponseMessage({
    type: ResponseType.RESPONSE_GO_TO_DEFINITION,
    code_source_id: request.code_source_id,
    go_to_definition_response: new GoToDefinitionResponse({}),
  });

  send(response);
}

export { handleGoToDefinition };
