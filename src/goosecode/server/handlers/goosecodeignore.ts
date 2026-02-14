import * as vscode from "vscode";
import { create } from "@bufbuild/protobuf";
import type { GetIgnorePatternsRequest, SetIgnorePatternsRequest } from "../../../gen/ide-connect/v1/api_pb";
import { GetIgnorePatternsResponseSchema, SetIgnorePatternsResponseSchema } from "../../../gen/ide-connect/v1/api_pb";
import { getIgnorePatternsForUI, setGooseCodeIgnoreContent } from "./ignore-parser";

/**
 * Handle request to get ignore patterns for the UI.
 * Returns .goosecodeignore content and .gitignore patterns for display.
 */
export async function handleGetIgnorePatternsRequest(
  request: GetIgnorePatternsRequest,
  workspaceUri: vscode.Uri
) {
  const result = await getIgnorePatternsForUI(workspaceUri);

  return create(GetIgnorePatternsResponseSchema, {
    goosecodeignoreContent: result.goosecodeignoreContent,
    gitignorePatterns: result.gitignorePatterns,
    goosecodeignoreExists: result.goosecodeignoreExists,
  });
}

/**
 * Handle request to set/update .goosecodeignore content.
 */
export async function handleSetIgnorePatternsRequest(
  request: SetIgnorePatternsRequest,
  workspaceUri: vscode.Uri
) {
  const result = await setGooseCodeIgnoreContent(
    workspaceUri,
    request.goosecodeignoreContent
  );

  return create(SetIgnorePatternsResponseSchema, {
    success: result.success,
    error: result.error ?? "",
  });
}
