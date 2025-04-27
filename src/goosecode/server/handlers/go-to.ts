import { Uri } from "vscode";
import { goToDefinition } from "../../commands/commands";
import { ApiError } from "../../errors";
import { goosecode } from "../../../proto/ide/ide";

import RequestMessage = goosecode.v2.app.source.ide.RequestMessage;
import ResponseMessage = goosecode.v2.app.source.ide.ResponseMessage;
import ResponseType = goosecode.v2.app.source.ide.ResponseType;
import GoToDefinitionResponse = goosecode.v2.app.source.ide.GoToDefinitionResponse;


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
    repository_snapshot_fingerprint: request.repository_snapshot_fingerprint,
    go_to_definition_response: new GoToDefinitionResponse({}),
  });

  send(response);
}

export { handleGoToDefinition };
