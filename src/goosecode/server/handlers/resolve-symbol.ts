import * as vscode from "vscode";
import { Uri } from "vscode";
import { create } from "@bufbuild/protobuf";
import * as path from "path";
import { convertRange, toUnixPath, toNativePath } from "../../../util";
import { LocationOrLocationLink } from "../../../types";
import { getFileContents } from "../../commands/commands";
import { getFileContentsAtCommit as getFileContentsAtHead } from "../../../git";
import { targetRangeFromLocation, targetFullRangeFromLocation, uriFromLocation } from "../../vscode_extension_helpers";
import type { ResolveSymbolRequest, ResolveSymbolResponse } from "../../../gen/ide-connect/v1/api_pb";
import { ResolveSymbolResponseSchema } from "../../../gen/ide-connect/v1/api_pb";
import type { FileContext } from "../../../gen/ide-connect/v1/files_pb";
import { FileContextSchema } from "../../../gen/ide-connect/v1/files_pb";
import type { LocationWithContext, SnippetContext, Location } from "../../../gen/ide-connect/v1/vscode_pb";
import { LocationWithContextSchema, SnippetContextSchema, LocationSchema } from "../../../gen/ide-connect/v1/vscode_pb";

/**
 * Checks if the clicked position is on a definition.
 */
function isOnDefinition(
  definitions: LocationOrLocationLink[],
  clickedUri: vscode.Uri,
  clickedPosition: vscode.Position
): boolean {
  const clickedRange = new vscode.Range(clickedPosition, clickedPosition);

  for (const def of definitions) {
    if (def instanceof vscode.Location) {
      if (def.uri.fsPath === clickedUri.fsPath && def.range.intersection(clickedRange)) {
        return true;
      }
      continue;
    }

    const ll = def as vscode.LocationLink;
    if (ll.targetUri.fsPath === clickedUri.fsPath &&
        ll.targetSelectionRange &&
        ll.targetSelectionRange.intersection(clickedRange)) {
      return true;
    }
  }

  return false;
}

/**
 * Filters out definitions that are at the clicked position.
 */
function getDefinitionsWithoutCurrentPosition(
  definitions: LocationOrLocationLink[],
  clickedUri: vscode.Uri,
  clickedPosition: vscode.Position
): LocationOrLocationLink[] {
  const clickedRange = new vscode.Range(clickedPosition, clickedPosition);

  return definitions.filter((def) => {
    if (def instanceof vscode.Location) {
      if (def.uri.fsPath === clickedUri.fsPath && def.range.intersection(clickedRange)) {
        return false;
      }
      return true;
    }

    const ll = def as vscode.LocationLink;
    if (ll.targetUri.fsPath === clickedUri.fsPath &&
        ll.targetSelectionRange &&
        ll.targetSelectionRange.intersection(clickedRange)) {
      return false;
    }

    return true;
  });
}

export async function handleResolveSymbol(
  request: ResolveSymbolRequest,
  workspaceUri: Uri,
): Promise<ResolveSymbolResponse> {
  const location = request.location;
  if (!location || !location.path || !location.range?.start) {
    console.error("[ResolveSymbol] Invalid location in request");
    return create(ResolveSymbolResponseSchema, { found: false });
  }

  const filePath = toNativePath(location.path);
  const position = new vscode.Position(
    Number(location.range.start.line),
    Number(location.range.start.character)
  );

  const absolutePath = path.join(workspaceUri.fsPath, filePath);
  const fileUri = vscode.Uri.file(absolutePath);

  try {
    const document = await vscode.workspace.openTextDocument(fileUri);

    const wordRange = document.getWordRangeAtPosition(position);
    const fromRange = wordRange ?? new vscode.Range(position, position);

    let fromContext: LocationWithContext = create(LocationWithContextSchema, {
      location: create(LocationSchema, {
        path: filePath,
        range: convertRange(fromRange),
      }),
    });

    const definitions = await vscode.commands.executeCommand<LocationOrLocationLink[]>(
      "vscode.executeDefinitionProvider",
      fileUri,
      position
    );

    if (!definitions || definitions.length === 0) {
      console.log("[ResolveSymbol] No definition found at position");
      return create(ResolveSymbolResponseSchema, { found: false, fromContext });
    }

    const onDefinition = isOnDefinition(definitions, fileUri, position);
    const filteredDefinitions = getDefinitionsWithoutCurrentPosition(definitions, fileUri, position);

    if (onDefinition && filteredDefinitions.length === 0) {
      console.log("[ResolveSymbol] Clicked on definition, fetching references and implementations");

      const clickedDef = definitions[0];
      const clickedDefFullRange = targetFullRangeFromLocation(clickedDef);
      fromContext = create(LocationWithContextSchema, {
        location: fromContext.location,
        context: create(SnippetContextSchema, {
          fullRange: convertRange(clickedDefFullRange),
        }),
      });

      const refs = await vscode.commands.executeCommand<vscode.Location[]>(
        "vscode.executeReferenceProvider",
        fileUri,
        position
      );

      const filteredRefs = (refs ?? []).filter((ref) => {
        if (ref.uri.fsPath === fileUri.fsPath && ref.range.intersection(fromRange)) {
          return false;
        }
        return true;
      });

      const impls = await vscode.commands.executeCommand<LocationOrLocationLink[]>(
        "vscode.executeImplementationProvider",
        fileUri,
        position
      );

      const filteredImpls = (impls ?? []).filter((impl) => {
        if (impl instanceof vscode.Location) {
          if (impl.uri.fsPath === fileUri.fsPath && impl.range.intersection(fromRange)) {
            return false;
          }
          return true;
        }
        const ll = impl as vscode.LocationLink;
        if (ll.targetUri.fsPath === fileUri.fsPath &&
            ll.targetSelectionRange &&
            ll.targetSelectionRange.intersection(fromRange)) {
          return false;
        }
        return true;
      });

      if (filteredRefs.length === 0 && filteredImpls.length === 0) {
        console.log("[ResolveSymbol] No references or implementations found");
        return create(ResolveSymbolResponseSchema, {
          found: false,
          isOnDefinition: true,
          fromContext,
        });
      }

      const references: LocationWithContext[] = [];
      const uniquePaths = new Set<string>([filePath]);

      for (const ref of filteredRefs) {
        const refRelativePath = toUnixPath(path.relative(workspaceUri.fsPath, ref.uri.fsPath));
        uniquePaths.add(refRelativePath);

        const refDoc = await vscode.workspace.openTextDocument(ref.uri);
        const startLine = refDoc.lineAt(ref.range.start.line);
        const endLine = refDoc.lineAt(ref.range.end.line);
        const fullLineRange = new vscode.Range(startLine.range.start, endLine.range.end);

        references.push(create(LocationWithContextSchema, {
          location: create(LocationSchema, {
            path: refRelativePath,
            range: convertRange(ref.range),
          }),
          context: create(SnippetContextSchema, {
            fullRange: convertRange(fullLineRange),
          }),
        }));
      }

      const implementations: LocationWithContext[] = [];

      for (const impl of filteredImpls) {
        const implUri = uriFromLocation(impl);
        const implRange = targetRangeFromLocation(impl);
        const implFullRange = targetFullRangeFromLocation(impl);
        const implRelativePath = toUnixPath(path.relative(workspaceUri.fsPath, implUri.fsPath));
        uniquePaths.add(implRelativePath);

        implementations.push(create(LocationWithContextSchema, {
          location: create(LocationSchema, {
            path: implRelativePath,
            range: convertRange(implRange),
          }),
          context: create(SnippetContextSchema, {
            fullRange: convertRange(implFullRange),
          }),
        }));
      }

      const fileContexts = await getFileContextsForPaths(workspaceUri, uniquePaths);

      console.log(`[ResolveSymbol] Found ${references.length} references and ${implementations.length} implementations`);

      return create(ResolveSymbolResponseSchema, {
        found: true,
        isOnDefinition: true,
        references,
        implementations,
        fromContext,
        fileContexts,
      });
    }

    const definition = filteredDefinitions.length > 0 ? filteredDefinitions[0] : definitions[0];
    const defUri = uriFromLocation(definition);
    const defRange = targetRangeFromLocation(definition);
    const defFullRange = targetFullRangeFromLocation(definition);

    const defRelativePath = toUnixPath(path.relative(workspaceUri.fsPath, defUri.fsPath));

    const definitionLocation = create(LocationWithContextSchema, {
      location: create(LocationSchema, {
        path: defRelativePath,
        range: convertRange(defRange),
      }),
      context: create(SnippetContextSchema, {
        fullRange: convertRange(defFullRange),
      }),
    });

    const uniquePaths = new Set<string>([filePath, defRelativePath]);
    const fileContexts = await getFileContextsForPaths(workspaceUri, uniquePaths);

    console.log(`[ResolveSymbol] Found definition at ${defRelativePath}:${defRange.start.line}:${defRange.start.character}`);

    return create(ResolveSymbolResponseSchema, {
      found: true,
      isOnDefinition: false,
      definition: definitionLocation,
      fromContext,
      fileContexts,
    });

  } catch (e) {
    console.error("[ResolveSymbol] Error resolving symbol:", e);
    return create(ResolveSymbolResponseSchema, { found: false });
  }
}

async function getFileContextsForPaths(
  workspaceUri: Uri,
  paths: Set<string>
): Promise<FileContext[]> {
  const fileContexts: FileContext[] = [];

  for (const p of paths) {
    try {
      const absPath = path.join(workspaceUri.fsPath, p);
      const contents = await getFileContents(workspaceUri, [p]);

      let headContent: string | null = null;
      try {
        headContent = await getFileContentsAtHead(vscode.Uri.file(absPath));
      } catch (e) {
        console.warn(`[ResolveSymbol] Failed to get HEAD content for ${p}:`, e);
      }

      fileContexts.push(create(FileContextSchema, {
        filePath: p,
        currentContent: contents.length > 0 ? contents[0] : "",
        headContent: headContent ?? "",
      }));
    } catch (e) {
      console.error(`[ResolveSymbol] Failed to get file context for ${p}:`, e);
    }
  }

  return fileContexts;
}
