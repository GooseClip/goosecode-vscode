import { Uri } from "vscode";
import { create } from "@bufbuild/protobuf";
import { goToDefinition } from "../../commands/commands";
import { ApiError } from "../../errors";
import type { NavigateRequest } from "../../../gen/ide-connect/v1/api_pb";
import { NavigateResponseSchema } from "../../../gen/ide-connect/v1/api_pb";

async function handleGoToDefinition(
  request: NavigateRequest,
  workspaceUri: Uri,
) {
  if (request.data.case !== "goToDefinition") {
    throw new ApiError("Expected goToDefinition request", 400);
  }
  const req = request.data.value;
  const location = req.location;
  // Open IDE
  if (!(await goToDefinition(workspaceUri, location!, req.select))) {
    throw new ApiError("Failed to go to definition", 500);
  }

  return create(NavigateResponseSchema, {});
}

export { handleGoToDefinition };
