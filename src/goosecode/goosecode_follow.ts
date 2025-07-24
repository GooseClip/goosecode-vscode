import * as vscode from "vscode";
import { getWordAtPosition, targetFullRangeFromLocation, targetRangeFromLocation, uriFromLocation } from "./vscode_extension_helpers";
import * as gc from "../gen/ide";
import { getSelectedOneofValue, setOneofValue } from "@protobuf-ts/runtime";

import { convertRange } from "../util";
import { LocationOrLocationLink } from "../types";
import { getDefinitions, getFileContents, getReferences, goToDefinition } from "./commands/commands";
import { WorkspaceTracker } from "../workspace-tracker";
import { getFileContentsAtCommit as getFileContentsAtHead } from "../git";
import { getFileContexts } from "./context";
import { GooseCodeServer } from "./server/server";

/* GooseCode Follow
 * When using cmd+opt+g 3 possible outcomes exist
 * 1. Go to definition
 * 2. Go to reference
 * 3. Snippet (selection length > 0)
 */

export async function handleFollowCommand(gooseCodeServer: GooseCodeServer, workspaceTracker: WorkspaceTracker) {
    const editor = vscode.window.activeTextEditor!;
    const selection = editor.selection;
    
    // If the selection is not empty we want a snippet follow command
    console.log(`SELECTION: ${selection}`)
    if (!selection.isEmpty) {
        console.log(`SNIPPET FOLLOW`)
        await snippetFollow(gooseCodeServer, workspaceTracker)
        return
    }
    
    await connectedFollow(gooseCodeServer, workspaceTracker)
}

// snippetFollow will dump the selection using the current generation strategy (default swimlane)
async function snippetFollow(gooseCodeServer: GooseCodeServer, workspaceTracker: WorkspaceTracker) {
    const editor = vscode.window.activeTextEditor!;
    const selection = editor.selection;

    const workspace = workspaceTracker.getLastActiveGooseCodeWorkspace();
    if (workspace === null) {
        console.error("No active workspace found for snippet follow");
        return;
    }

    let range: vscode.Range;
    let fullRange: vscode.Range;

    range = selection;
    const startLine = editor.document.lineAt(selection.start.line);
    const endLine = editor.document.lineAt(selection.end.line);
    fullRange = new vscode.Range(startLine.range.start, endLine.range.end);

    gooseCodeServer?.push(
        gc.PushResponse.create({
            type: gc.PushType.FILE_COMMAND,
            data: {
                oneofKind: "fileCommand",
                fileCommand: gc.FileCommandPush.create({
                    type: gc.FileCommandType.FOLLOW,
                    fileContexts: await getFileContexts(workspaceTracker, [workspaceTracker.currentRelativeFilePath()]),
                    data: {
                        oneofKind: "follow",
                        follow: gc.FollowPush.create({
                            type: gc.FollowType.SNIPPET,
                            data: {
                                oneofKind: "snippet",
                                snippet: gc.SnippetFollow.create({
                                    location: gc.LocationWithContext.create({
                                        location: gc.Location.create({
                                            path: workspaceTracker.currentRelativeFilePath(),
                                            range: convertRange(range),
                                        }),
                                        context: gc.SnippetContext.create({
                                            fullRange: convertRange(fullRange)
                                        })
                                    }),
                                }),
                            },
                        }),
                    }
                }),
            },
        }),
    )
}

// connectedFollow will draw the connected codes using the current generation strategy (default swimlane)
async function connectedFollow(gooseCodeServer: GooseCodeServer, workspaceTracker: WorkspaceTracker) {
    const workspace = workspaceTracker.getLastActiveGooseCodeWorkspace();
    if (workspace === null) {
        console.error("No active workspace found");
        return;
    }

    const editor = vscode.window.activeTextEditor!;
    const selection = editor.selection;
    
    const workspaceUri = workspace.uri;
    let definitions = await getDefinitions();
    // let references = await getReferences();

    const from = await fromRange(selection);
    const fromMsg = gc.LocationWithContext.create({
        location: gc.Location.create({
            path: workspaceTracker.relativePath(
                editor.document.uri.fsPath,
            ),
            range: from,
        }),
    });

    const filteredDefinitions = getDefinitionsWithoutCurrentPosition(definitions, selection);

    if (filteredDefinitions.length > 0) {
        if (filteredDefinitions.length > 1) {
            console.warn("Multiple definitions found. Going to the first one");
        }

        const msg = await createDefinitionFollowMessage(workspaceTracker, fromMsg, filteredDefinitions);
        if (!msg) {
            console.error("No definition message to push");
            return;
        }


        // Push the message to goosecode
        gooseCodeServer?.push(msg);


        try {
            // Navigate in edittor to the definition
            if (msg.data.oneofKind == "fileCommand" && msg.data.fileCommand.data.oneofKind == "follow" && msg.data.fileCommand.data.follow.data.oneofKind == "connected") {
                await goToDefinition(
                    workspaceUri,
                    msg.data.fileCommand.data.follow.data.connected.to!.location!,
                    false,
                );
            }

        } catch (e) {
            console.error(e);
        }
        return;
    }

    const clickedDefinitionRef = await testDefinitionClicked(definitions, selection);
    if (clickedDefinitionRef) {
        const msg = await createReferencesFollowMessage(workspaceTracker, selection, gc.LocationWithContext.clone(fromMsg), clickedDefinitionRef);
        if (!msg) {
            console.error("No referencesmessage to push");
            return;
        }

        gooseCodeServer?.push(msg);
    }
}


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

export async function createDefinitionFollowMessage(
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
    const defMsg = gc.ConnectedFollow.create({
        type: gc.ConnectedFollowType.DEFINITION,
        from: fromMsg,
        to: toMsg,
    });

    console.log("FOLLOW DEFINITION", definitions);

    const paths = [
        fromMsg.location!.path,
        toMsg.location!.path,
    ];
    const fileContexts = await getFileContexts(workspaceTracker, paths);


    return await wrapFollowDefinition(fileContexts, defMsg);
}


export async function createReferencesFollowMessage(workspaceTracker: WorkspaceTracker,
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

    const selectedRef = await new Promise<vscode.Location | undefined>(resolve => {
        const quickPick = vscode.window.createQuickPick<vscode.QuickPickItem & { location: vscode.Location }>();
        quickPick.placeholder = "Loading references...";
        quickPick.busy = true;

        quickPick.onDidChangeSelection(selection => {
            if (selection[0]) {
                const loc = selection[0].location;
                vscode.window.showTextDocument(loc.uri, {
                    selection: loc.range
                });
                quickPick.hide();
                resolve(loc);
            }
        });

        quickPick.onDidHide(() => {
            resolve(undefined);
            quickPick.dispose();
        });

        quickPick.show();

        Promise.all(
            refs.map(async (loc) => {
                const document = await vscode.workspace.openTextDocument(loc.uri);
                const lineText = document.lineAt(loc.range.start.line).text.trim();
                return {
                    label: lineText,
                    description: `Line ${loc.range.start.line + 1}`,
                    detail: workspaceTracker.relativePath(loc.uri.fsPath),
                    location: loc,
                };
            })
        ).then(items => {
            quickPick.items = items;
            quickPick.busy = false;
            quickPick.placeholder = "Select a reference to navigate";
        });
    });

    if (!selectedRef) {
        return;
    }


    if (clickedDefinitionRef) {
        fromMsg.context = gc.SnippetContext.create({
            fullRange: convertRange(targetFullRangeFromLocation(clickedDefinitionRef)),
        });
    }

    const toMsg = gc.LocationWithContext.create({
        location: gc.Location.create({
            path: workspaceTracker.relativePath(selectedRef.uri.fsPath),
            range: convertRange(selectedRef.range),
        }),
        context: gc.SnippetContext.create({
            fullRange: convertRange(targetFullRangeFromLocation(selectedRef)),
        }),
    });

    const reference = gc.ConnectedFollow.create({
        type: gc.ConnectedFollowType.REFERENCE,
        from: fromMsg,
        to: toMsg,
    });

    const paths = [
        fromMsg.location!.path,
        toMsg.location!.path,
    ];
    const fileContexts = await getFileContexts(workspaceTracker, paths);


    return await wrapFollowReference(fileContexts, reference);
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

export async function wrapFollowDefinition(fileContext: gc.FileContext[], msg: gc.ConnectedFollow): Promise<gc.PushResponse> {
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
                        type: gc.FollowType.CONNECTED,
                        data: {
                            oneofKind: "connected",
                            connected: msg,
                        },
                    }),
                },
            }),
        },
    });
}

export async function wrapFollowReference(fileContext: gc.FileContext[], msg: gc.ConnectedFollow): Promise<gc.PushResponse> {
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
                        type: gc.FollowType.CONNECTED,
                        data: {
                            oneofKind: "connected",
                            connected: msg,
                        },
                    }),
                },
            }),
        },
    });
}
