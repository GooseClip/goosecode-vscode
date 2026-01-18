import { Uri } from "vscode";
import { goToDefinition } from "../../commands/commands";
import { ApiError } from "../../errors";
import * as gc from "../../../gen/ide";

async function handleGoToDefinition(
  request: gc.NavigateRequest,
  workspaceUri: Uri,
): Promise<gc.NavigateResponse> {
  const req = request.data as {
    oneofKind: "goToDefinition";
    goToDefinition: gc.GoToDefinitionRequest
  };
  const location = req.goToDefinition.location;
  // Open IDE
  if (!(await goToDefinition(workspaceUri, location!, req.goToDefinition.select))) {
    throw new ApiError("Failed to go to definition", 500);
  }

  return gc.NavigateResponse.create({});
}

export { handleGoToDefinition };
