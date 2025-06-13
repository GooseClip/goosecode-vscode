import * as vscode from "vscode";
import { getWordAtPosition, targetFullRangeFromLocation, targetRangeFromLocation, uriFromLocation } from "./vscode_extension_helpers";
import { gooseclip } from "../proto/ide/v1/ide";
import Range = gooseclip.goosecode.ide.v1.Range;
import Position = gooseclip.goosecode.ide.v1.Position;
import DefinitionFollow = gooseclip.goosecode.ide.v1.DefinitionFollow;
import PushMessage = gooseclip.goosecode.ide.v1.PushMessage;
import PushType = gooseclip.goosecode.ide.v1.PushType;
import FileCommandPush = gooseclip.goosecode.ide.v1.FileCommandPush;
import FileCommandType = gooseclip.goosecode.ide.v1.FileCommandType;
import FollowPush = gooseclip.goosecode.ide.v1.FollowPush;
import FollowType = gooseclip.goosecode.ide.v1.FollowType;
import ReferenceFollow = gooseclip.goosecode.ide.v1.ReferenceFollow;
import LocationWithContext = gooseclip.goosecode.ide.v1.LocationWithContext;
import Location = gooseclip.goosecode.ide.v1.Location;
import SnippetContext = gooseclip.goosecode.ide.v1.SnippetContext;

import { convertRange } from "../util";
import { LocationOrLocationLink } from "@/types";
import { getReferences } from "./commands/commands";
import { WorkspaceTracker } from "@/workspace-tracker";

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

export function getDefinitionsWithoutCurrentPosition(definitions: LocationOrLocationLink[], selection: vscode.Selection){
    return definitions.filter((def) => {
        if (def instanceof vscode.Location) {
          if ( def.range.intersection(selection)) {
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
    fromMsg: LocationWithContext,
    definitions: LocationOrLocationLink[],
): Promise<PushMessage | undefined> {
    const definition = definitions[0];


    const uri = uriFromLocation(definition);

    // The word
    const toRange = convertRange(targetRangeFromLocation(definition));
    // The full range - e.g. the function
    const fullRange = convertRange(targetFullRangeFromLocation(definition));
    
    const toMsg = new LocationWithContext({
      location: new Location({
        path: workspaceTracker.relativePath(
          uri.fsPath,
        ),
        range: toRange,
      }),
      context: new SnippetContext({
        full_range: fullRange,
      }),
    });
    const defMsg = new DefinitionFollow({
      from: fromMsg,
      to: toMsg,
    });

    console.log("FOLLOW DEFINITION", definitions);
    return await wrapFollowDefinition(defMsg);
}


export async function getReferencesToSelection(workspaceTracker: WorkspaceTracker,
    selection: vscode.Selection,
    fromMsg: LocationWithContext,
    clickedDefinitionRef: LocationOrLocationLink
): Promise<PushMessage | undefined> {

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
        fromMsg.context = new SnippetContext({
            full_range: convertRange(targetFullRangeFromLocation(clickedDefinitionRef)),
        });
    }

    const reference = new ReferenceFollow({
        from: fromMsg,
        to: refs.map(
            (ref) =>
                new LocationWithContext({
                    location: new Location({
                        path: workspaceTracker.relativePath(ref.uri.fsPath),
                        range: convertRange(ref.range),
                    }),
                }),
        ),
    });

    return await wrapFollowReference(reference);
}


export async function fromRange(selection: vscode.Selection): Promise<Range> {
    const selectionLine = selection.active.line;


    const tup = await getWordAtPosition();
    if (tup) {
        const { word, range } = tup;
        console.log("WORD", word);
        console.log("RANGE", range);
        return convertRange(range);
    }

    // Default to cursor position
    const selectionCharacter = selection.active.character;

    return new Range({
        start: new Position({
            line: selectionLine,
            character: selectionCharacter,
        }),
        end: new Position({
            line: selectionLine,
            character: selectionCharacter,
        }),
    });
}

export async function wrapFollowDefinition(defMsg: DefinitionFollow): Promise<PushMessage> {
    return new PushMessage({
        type: PushType.PUSH_TYPE_FILE_COMMAND,
        file_command: new FileCommandPush({
            type: FileCommandType.FILE_COMMAND_TYPE_FOLLOW,
            follow: new FollowPush({
                type: FollowType.FOLLOW_TYPE_DEFINITION,
                definition: defMsg,
            }),
        }),
    });
}

export async function wrapFollowReference(refMsg: ReferenceFollow): Promise<PushMessage> {
    return new PushMessage({
        type: PushType.PUSH_TYPE_FILE_COMMAND,
        file_command: new FileCommandPush({
            type: FileCommandType.FILE_COMMAND_TYPE_FOLLOW,
            follow: new FollowPush({
                type: FollowType.FOLLOW_TYPE_REFERENCE,
                reference: refMsg,
            }),
        }),
    });
}
