import { Uri } from "vscode";
import { goToDefinition } from "../../commands/commands";
import { ApiError } from "../../errors";
import { gooseclip } from "../../../proto/ide/v1/ide";

import RequestMessage = gooseclip.goosecode.ide.v1.RequestMessage;
import ResponseMessage = gooseclip.goosecode.ide.v1.ResponseMessage;
import ResponseType = gooseclip.goosecode.ide.v1.ResponseType;
import GoToDefinitionResponse = gooseclip.goosecode.ide.v1.GoToDefinitionResponse;


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
    type: ResponseType.RESPONSE_TYPE_GO_TO_DEFINITION,
    repository_snapshot_fingerprint: request.repository_snapshot_fingerprint,
    go_to_definition_response: new GoToDefinitionResponse({}),
  });

  send(response);
}

export { handleGoToDefinition };
