import * as vscode from "vscode";
import { getWordAtPosition, targetFullRangeFromLocation, targetRangeFromLocation, uriFromLocation } from "./vscode_extension_helpers";
import * as gc from "../gen/ide";
import { getSelectedOneofValue, setOneofValue } from "@protobuf-ts/runtime";

import { convertRange } from "../util";
import { LocationOrLocationLink } from "../types";
import { getFileContents, getReferences } from "./commands/commands";
import { WorkspaceTracker } from "../workspace-tracker";
import { getFileContentsAtCommit as getFileContentsAtHead } from "../git";

// If the user clicks on where something is defined, we return the symbol that was clicked.
export async function testDefinitionClicked(definitions: LocationOrLocationLink[], selection: vscode.Selection): Promise<LocationOrLocationLink | undefined> {
    for (const def of definitions) {
        if (def instanceof vscode.Location) {
            if (def.range.intersection(selection)) {
                console.log("Assigning current definition [Location]", def);
                return def;
            }
            continue;
        }

        const ll = def as vscode.LocationLink;
        if (ll.targetSelectionRange && ll.originSelectionRange?.intersection(ll.targetSelectionRange)) {
            console.log("Assigning current definition [Location Link]", ll);
            return ll;
        }
    }
}

export function getDefinitionsWithoutCurrentPosition(definitions: LocationOrLocationLink[], selection: vscode.Selection) {
    return definitions.filter((def) => {
        if (def instanceof vscode.Location) {
            if (def.range.intersection(selection)) {
                return false;
            }
        }

        const ll = def as vscode.LocationLink;
        if (ll.targetSelectionRange && ll.originSelectionRange?.intersection(ll.targetSelectionRange)) {
            return false;
        }

        return true;
    });
}

export async function getDefinitionsOfSelection(
    workspaceTracker: WorkspaceTracker,
    fromMsg: gc.LocationWithContext,
    definitions: LocationOrLocationLink[],
): Promise<gc.PushResponse | undefined> {
    const definition = definitions[0];


    const uri = uriFromLocation(definition);

    // The word
    const toRange = convertRange(targetRangeFromLocation(definition));
    // The full range - e.g. the function
    const fullRange = convertRange(targetFullRangeFromLocation(definition));

    const toMsg = gc.LocationWithContext.create({
        location: gc.Location.create({
            path: workspaceTracker.relativePath(
                uri.fsPath,
            ),
            range: toRange,
        }),
        context: gc.SnippetContext.create({
            fullRange: fullRange,
        }),
    });
    const defMsg = gc.DefinitionFollow.create({
        from: fromMsg,
        to: toMsg,
    });

    console.log("FOLLOW DEFINITION", definitions);

    const fileContexts: gc.FileContext[] = [];

    const ws = workspaceTracker.getLastActiveGooseCodeWorkspace();
    const paths = [
        fromMsg.location!.path,
        toMsg.location!.path,
    ]
    for (var v of paths) {
      const current = await getFileContents(
        ws!.uri,
        [v],
      );
      
      console.log(`CURRENT:${current}`);
  
      var head = null;
      try {
        head = await getFileContentsAtHead(vscode.Uri.file(vscode.window.activeTextEditor!.document.uri.fsPath));
      } catch (e) {
        console.error("Failed to get patch")
      }
  
      fileContexts.push(gc.FileContext.create({
        filePath: v,
        headContent:  head ?? "",
        currentContent: current[0],
      }));
    }

    
    return await wrapFollowDefinition(fileContexts, defMsg);
}


export async function getReferencesToSelection(workspaceTracker: WorkspaceTracker,
    selection: vscode.Selection,
    fromMsg: gc.LocationWithContext,
    clickedDefinitionRef: LocationOrLocationLink
): Promise<gc.PushResponse | undefined> {

    // Filter out references that are in the current selection
    let refs = (await getReferences()).filter((ref) => {
        if (ref.range?.intersection(selection)) {
            return false;
        }
        return true;
    });

    if (!refs.length) return;

    console.log("FOLLOW REFERENCE", refs);

    if (clickedDefinitionRef) {
        fromMsg.context = gc.SnippetContext.create({
            fullRange: convertRange(targetFullRangeFromLocation(clickedDefinitionRef)),
        });
    }

    const reference = gc.ReferenceFollow.create({
        from: fromMsg,
        to: refs.map(
            (ref) =>
                gc.LocationWithContext.create({
                    location: gc.Location.create({
                        path: workspaceTracker.relativePath(ref.uri.fsPath),
                        range: convertRange(ref.range),
                    }),
                }),
        ),
    });

    return await wrapFollowReference(reference);
}


export async function fromRange(selection: vscode.Selection): Promise<gc.Range> {
    const selectionLine = selection.active.line;


    const tup = await getWordAtPosition();
    if (tup) {
        const { word, range } = tup;
        return convertRange(range);
    }

    // Default to cursor position
    const selectionCharacter = selection.active.character;

    return gc.Range.create({
        start: gc.Position.create({
            line: BigInt(selectionLine),
            character: BigInt(selectionCharacter),
        }),
        end: gc.Position.create({
            line: BigInt(selectionLine),
            character: BigInt(selectionCharacter),
        }),
    });
}

export async function wrapFollowDefinition(fileContext: gc.FileContext[], defMsg: gc.DefinitionFollow): Promise<gc.PushResponse> {
    return gc.PushResponse.create({
        type: gc.PushType.FILE_COMMAND,
        data: {
            oneofKind: "fileCommand",
            fileCommand: gc.FileCommandPush.create({
                type: gc.FileCommandType.FOLLOW,
                fileContexts: fileContext,
                data: {
                    oneofKind: "follow",
                    follow: gc.FollowPush.create({
                        type: gc.FollowType.DEFINITION,
                        data: {
                            oneofKind: "definition",
                            definition: defMsg,
                        },
                    }),
                },
            }),
        },
    });
}

export async function wrapFollowReference(refMsg: gc.ReferenceFollow): Promise<gc.PushResponse> {
    return gc.PushResponse.create({
        type: gc.PushType.FILE_COMMAND,
        data: {
            oneofKind: "fileCommand",
            fileCommand: gc.FileCommandPush.create({
                type: gc.FileCommandType.FOLLOW,
                data: {
                    oneofKind: "follow",
                    follow: gc.FollowPush.create({
                        type: gc.FollowType.REFERENCE,
                        data: {
                            oneofKind: "reference",
                            reference: refMsg,
                        },
                    }),
                },
            }),
        },
    });
}
