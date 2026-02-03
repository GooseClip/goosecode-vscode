import * as vscode from "vscode";
import * as gc from "../../../gen/ide";
import { getIgnorePatternsForUI, setGooseCodeIgnoreContent } from "./ignore-parser";

/**
 * Handle request to get ignore patterns for the UI.
 * Returns .goosecodeignore content and .gitignore patterns for display.
 */
export async function handleGetIgnorePatternsRequest(
  request: gc.GetIgnorePatternsRequest,
  workspaceUri: vscode.Uri
): Promise<gc.GetIgnorePatternsResponse> {
  const result = await getIgnorePatternsForUI(workspaceUri);

  return gc.GetIgnorePatternsResponse.create({
    goosecodeignoreContent: result.goosecodeignoreContent,
    gitignorePatterns: result.gitignorePatterns,
    goosecodeignoreExists: result.goosecodeignoreExists,
  });
}

/**
 * Handle request to set/update .goosecodeignore content.
 */
export async function handleSetIgnorePatternsRequest(
  request: gc.SetIgnorePatternsRequest,
  workspaceUri: vscode.Uri
): Promise<gc.SetIgnorePatternsResponse> {
  const result = await setGooseCodeIgnoreContent(
    workspaceUri,
    request.goosecodeignoreContent
  );

  return gc.SetIgnorePatternsResponse.create({
    success: result.success,
    error: result.error ?? "",
  });
}
