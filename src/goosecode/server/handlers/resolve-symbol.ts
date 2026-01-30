import * as vscode from "vscode";
import { Uri } from "vscode";
import * as gc from "../../../gen/ide";
import * as path from "path";
import { convertRange, toUnixPath, toNativePath } from "../../../util";
import { LocationOrLocationLink } from "../../../types";
import { getFileContents } from "../../commands/commands";
import { getFileContentsAtCommit as getFileContentsAtHead } from "../../../git";
import { targetRangeFromLocation, targetFullRangeFromLocation, uriFromLocation } from "../../vscode_extension_helpers";

/**
 * Checks if the clicked position is on a definition.
 * This happens when the definition provider returns a location that intersects with the clicked position.
 */
function isOnDefinition(
  definitions: LocationOrLocationLink[],
  clickedUri: vscode.Uri,
  clickedPosition: vscode.Position
): boolean {
  const clickedRange = new vscode.Range(clickedPosition, clickedPosition);
  
  for (const def of definitions) {
    if (def instanceof vscode.Location) {
      // Check if the definition is in the same file and intersects with the clicked position
      if (def.uri.fsPath === clickedUri.fsPath && def.range.intersection(clickedRange)) {
        return true;
      }
      continue;
    }

    // LocationLink case
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
 * Filters out definitions that are at the clicked position (i.e., the definition itself).
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

/**
 * Handles the ResolveSymbol RPC request from the Flutter app.
 * Given a file path and position, resolves the symbol at that location
 * and returns definition information, or references if clicked on a definition.
 */
export async function handleResolveSymbol(
  request: gc.ResolveSymbolRequest,
  workspaceUri: Uri,
): Promise<gc.ResolveSymbolResponse> {
  const location = request.location;
  if (!location || !location.path || !location.range?.start) {
    console.error("[ResolveSymbol] Invalid location in request");
    return gc.ResolveSymbolResponse.create({ found: false });
  }

  // Convert incoming UNIX-style path to native format
  const filePath = toNativePath(location.path);
  const position = new vscode.Position(
    Number(location.range.start.line),
    Number(location.range.start.character)
  );

  // Construct absolute file path
  const absolutePath = path.join(workspaceUri.fsPath, filePath);
  const fileUri = vscode.Uri.file(absolutePath);

  try {
    // Open the document
    const document = await vscode.workspace.openTextDocument(fileUri);

    // Get the word range at the clicked position (for the "from" context)
    const wordRange = document.getWordRangeAtPosition(position);
    const fromRange = wordRange ?? new vscode.Range(position, position);
    
    // Build the fromContext with the word range
    const fromContext = gc.LocationWithContext.create({
      location: gc.Location.create({
        path: filePath,
        range: convertRange(fromRange),
      }),
    });

    // Execute definition provider at the given position
    const definitions = await vscode.commands.executeCommand<LocationOrLocationLink[]>(
      "vscode.executeDefinitionProvider",
      fileUri,
      position
    );

    if (!definitions || definitions.length === 0) {
      console.log("[ResolveSymbol] No definition found at position");
      return gc.ResolveSymbolResponse.create({ found: false, fromContext });
    }

    // Check if we're on a definition (definition points to the same location)
    const onDefinition = isOnDefinition(definitions, fileUri, position);
    const filteredDefinitions = getDefinitionsWithoutCurrentPosition(definitions, fileUri, position);

    // If we're on a definition, get references and implementations
    if (onDefinition && filteredDefinitions.length === 0) {
      console.log("[ResolveSymbol] Clicked on definition, fetching references and implementations");
      
      // Get the definition info for the fromContext (the definition we're on)
      const clickedDef = definitions[0];
      const clickedDefFullRange = targetFullRangeFromLocation(clickedDef);
      fromContext.context = gc.SnippetContext.create({
        fullRange: convertRange(clickedDefFullRange),
      });

      // Get references to this symbol
      const refs = await vscode.commands.executeCommand<vscode.Location[]>(
        "vscode.executeReferenceProvider",
        fileUri,
        position
      );

      // Filter out the definition itself from references
      const filteredRefs = (refs ?? []).filter((ref) => {
        if (ref.uri.fsPath === fileUri.fsPath && ref.range.intersection(fromRange)) {
          return false;
        }
        return true;
      });

      // Get implementations of this symbol (for interfaces/abstract types)
      const impls = await vscode.commands.executeCommand<LocationOrLocationLink[]>(
        "vscode.executeImplementationProvider",
        fileUri,
        position
      );

      // Filter out the definition itself from implementations
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

      // If no references and no implementations found
      if (filteredRefs.length === 0 && filteredImpls.length === 0) {
        console.log("[ResolveSymbol] No references or implementations found");
        return gc.ResolveSymbolResponse.create({ 
          found: false, 
          isOnDefinition: true,
          fromContext,
        });
      }

      // Build reference LocationWithContext for each reference
      const references: gc.LocationWithContext[] = [];
      const uniquePaths = new Set<string>([filePath]);

      for (const ref of filteredRefs) {
        const refRelativePath = toUnixPath(path.relative(workspaceUri.fsPath, ref.uri.fsPath));
        uniquePaths.add(refRelativePath);

        // Get full line range for context
        const refDoc = await vscode.workspace.openTextDocument(ref.uri);
        const startLine = refDoc.lineAt(ref.range.start.line);
        const endLine = refDoc.lineAt(ref.range.end.line);
        const fullLineRange = new vscode.Range(startLine.range.start, endLine.range.end);

        references.push(gc.LocationWithContext.create({
          location: gc.Location.create({
            path: refRelativePath,
            range: convertRange(ref.range),
          }),
          context: gc.SnippetContext.create({
            fullRange: convertRange(fullLineRange),
          }),
        }));
      }

      // Build implementation LocationWithContext for each implementation
      const implementations: gc.LocationWithContext[] = [];

      for (const impl of filteredImpls) {
        const implUri = uriFromLocation(impl);
        const implRange = targetRangeFromLocation(impl);
        const implFullRange = targetFullRangeFromLocation(impl);
        const implRelativePath = toUnixPath(path.relative(workspaceUri.fsPath, implUri.fsPath));
        uniquePaths.add(implRelativePath);

        implementations.push(gc.LocationWithContext.create({
          location: gc.Location.create({
            path: implRelativePath,
            range: convertRange(implRange),
          }),
          context: gc.SnippetContext.create({
            fullRange: convertRange(implFullRange),
          }),
        }));
      }

      // Get file contexts
      const fileContexts = await getFileContextsForPaths(workspaceUri, uniquePaths);

      console.log(`[ResolveSymbol] Found ${references.length} references and ${implementations.length} implementations`);

      return gc.ResolveSymbolResponse.create({
        found: true,
        isOnDefinition: true,
        references,
        implementations,
        fromContext,
        fileContexts,
      });
    }

    // Not on a definition - return the definition location
    const definition = filteredDefinitions.length > 0 ? filteredDefinitions[0] : definitions[0];
    const defUri = uriFromLocation(definition);
    const defRange = targetRangeFromLocation(definition);
    const defFullRange = targetFullRangeFromLocation(definition);

    // Get relative path for the definition
    const defRelativePath = toUnixPath(path.relative(workspaceUri.fsPath, defUri.fsPath));

    // Build the LocationWithContext for the definition
    const definitionLocation = gc.LocationWithContext.create({
      location: gc.Location.create({
        path: defRelativePath,
        range: convertRange(defRange),
      }),
      context: gc.SnippetContext.create({
        fullRange: convertRange(defFullRange),
      }),
    });

    // Get file contexts for both source and definition files
    const uniquePaths = new Set<string>([filePath, defRelativePath]);
    const fileContexts = await getFileContextsForPaths(workspaceUri, uniquePaths);

    console.log(`[ResolveSymbol] Found definition at ${defRelativePath}:${defRange.start.line}:${defRange.start.character}`);

    return gc.ResolveSymbolResponse.create({
      found: true,
      isOnDefinition: false,
      definition: definitionLocation,
      fromContext,
      fileContexts,
    });

  } catch (e) {
    console.error("[ResolveSymbol] Error resolving symbol:", e);
    return gc.ResolveSymbolResponse.create({ found: false });
  }
}

/**
 * Helper to get file contexts for a set of paths.
 */
async function getFileContextsForPaths(
  workspaceUri: Uri,
  paths: Set<string>
): Promise<gc.FileContext[]> {
  const fileContexts: gc.FileContext[] = [];

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

      fileContexts.push(gc.FileContext.create({
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
