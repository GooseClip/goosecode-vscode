import * as vscode from "vscode";
import { getWordAtPosition, targetFullRangeFromLocation, targetRangeFromLocation, uriFromLocation } from "./vscode_extension_helpers";
import { create } from "@bufbuild/protobuf";
import { convertRange } from "../util";
import type { LocationWithContext } from "../gen/ide-connect/v1/vscode_pb";
import type { FileContext } from "../gen/ide-connect/v1/files_pb";
import type { PushResponse, ConnectedGenerate } from "../gen/ide-connect/v1/push_pb";
import type { Range } from "../gen/ide-connect/v1/vscode_pb";
import {
  PushResponseSchema, PushType, FileCommandPushSchema, FileCommandType, GeneratePushSchema,
  GenerateType, SnippetGenerateSchema, ConnectedGenerateSchema, ConnectedGenerateType,
} from "../gen/ide-connect/v1/push_pb";
import { LocationWithContextSchema, LocationSchema, SnippetContextSchema } from "../gen/ide-connect/v1/vscode_pb";
import { PositionSchema, RangeSchema } from "../gen/ide-connect/v1/vscode_pb";
import { LocationOrLocationLink } from "../types";
import { getDefinitions, getFileContents, getReferences, getImplementations, goToDefinition } from "./commands/commands";
import { WorkspaceTracker } from "../workspace-tracker";
import { getFileContentsAtCommit as getFileContentsAtHead } from "../git";
import { getFileContexts } from "./context";
import { GooseCodeServer } from "./server/server";

/* GooseCode Generate
 * When using cmd+opt+g 3 possible outcomes exist
 * 1. Go to definition
 * 2. Go to reference
 * 3. Go to implementation
 * 4. Snippet (selection length > 0)
 */

type NoReferencesFallback = 'nothing' | 'snippet';

async function showNoReferencesQuickPick(): Promise<NoReferencesFallback> {
    const items: Array<vscode.QuickPickItem & { action: NoReferencesFallback }> = [
        {
            label: "$(circle-slash) Do nothing",
            description: "Cancel the generate command",
            action: 'nothing',
        },
        {
            label: "$(code) Generate as snippet",
            description: "Generate the current word/position as a snippet",
            action: 'snippet',
        },
    ];

    const selection = await vscode.window.showQuickPick(items, {
        placeHolder: "No definitions or references found. What would you like to do?",
    });

    return selection?.action ?? 'nothing';
}

export enum GenerateResult {
    SNIPPET,
    DEFINITION,
    REFERENCE,
    IMPLEMENTATION,
}

export async function handleGenerateCommand(gooseCodeServer: GooseCodeServer, workspaceTracker: WorkspaceTracker): Promise<GenerateResult | undefined> {
    const editor = vscode.window.activeTextEditor!;
    const selection = editor.selection;
    
    // If the selection is not empty we want a snippet generate command
    if (!selection.isEmpty) {
        return snippetGenerate(gooseCodeServer, workspaceTracker);
    }
    
    return await connectedGenerate(gooseCodeServer, workspaceTracker);
}

// snippetGenerate will dump the selection using the current generation strategy (default swimlane)
async function snippetGenerate(gooseCodeServer: GooseCodeServer, workspaceTracker: WorkspaceTracker) : Promise<GenerateResult | undefined> {
    const editor = vscode.window.activeTextEditor!;
    const selection = editor.selection;

    const workspace = workspaceTracker.getLastActiveGooseCodeWorkspace();
    if (workspace === null) {
      return;
    }

    let range: vscode.Range;
    let fullRange: vscode.Range;

    range = selection;
    const startLine = editor.document.lineAt(selection.start.line);
    const endLine = editor.document.lineAt(selection.end.line);
    fullRange = new vscode.Range(startLine.range.start, endLine.range.end);

    gooseCodeServer.push(
        create(PushResponseSchema, {
            type: PushType.FILE_COMMAND,
            data: {
                case: "fileCommand",
                value: create(FileCommandPushSchema, {
                    type: FileCommandType.GENERATE,
                    fileContexts: await getFileContexts(workspaceTracker, [workspaceTracker.currentRelativeFilePath()]),
                    data: {
                        case: "generate",
                        value: create(GeneratePushSchema, {
                            type: GenerateType.SNIPPET,
                            data: {
                                case: "snippet",
                                value: create(SnippetGenerateSchema, {
                                    location: create(LocationWithContextSchema, {
                                        location: create(LocationSchema, {
                                            path: workspaceTracker.currentRelativeFilePath(),
                                            range: convertRange(range),
                                        }),
                                        context: create(SnippetContextSchema, {
                                            fullRange: convertRange(fullRange),
                                        }),
                                    }),
                                }),
                            },
                        }),
                    },
                }),
            },
        }),
    );

    return GenerateResult.SNIPPET;
}

// connectedGenerate will draw the connected codes using the current generation strategy (default swimlane)
async function connectedGenerate(gooseCodeServer: GooseCodeServer, workspaceTracker: WorkspaceTracker) : Promise<GenerateResult | undefined> {
    const workspace = workspaceTracker.getLastActiveGooseCodeWorkspace();
    if (workspace === null) {
        return;
    }

    const editor = vscode.window.activeTextEditor!;
    const selection = editor.selection;
    
    const workspaceUri = workspace.uri;
    let definitions = await getDefinitions();

    const from = await fromRange(selection);
    const fromMsg = create(LocationWithContextSchema, {
        location: create(LocationSchema, {
            path: workspaceTracker.relativePath(
                editor.document.uri.fsPath,
            ),
            range: from,
        }),
    });

    const filteredDefinitions = getDefinitionsWithoutCurrentPosition(definitions, selection);

    if (filteredDefinitions.length > 0) {
        const msg = await createDefinitionGenerateMessage(workspaceTracker, fromMsg, filteredDefinitions);
        if (!msg) {
            return;
        }


        // Push the message to goosecode
        gooseCodeServer.push(msg);


        try {
            if (msg.data.case === "fileCommand" && msg.data.value.data.case === "generate" && msg.data.value.data.value.data.case === "connected") {
                await goToDefinition(
                    workspaceUri,
                    msg.data.value.data.value.data.value.to!.location!,
                    false,
                );
            }
        } catch (e) {
            console.error("Failed to navigate to definition", e);
            return;
        }

        return GenerateResult.DEFINITION;
    }

    const clickedDefinitionRef = await testDefinitionClicked(definitions, selection);
    if (clickedDefinitionRef) {
        const result = await createReferencesOrImplementationsMessage(gooseCodeServer, workspaceTracker, selection, create(LocationWithContextSchema, { location: fromMsg.location, context: fromMsg.context }), clickedDefinitionRef);
        if (!result) {
            // User cancelled or chose "do nothing"
            return;
        }

        gooseCodeServer.push(result.msg);
        return result.type;
    }

    // No definitions or references found - offer fallback options
    const fallbackChoice = await showNoReferencesQuickPick();
    if (fallbackChoice === 'snippet') {
        return snippetGenerate(gooseCodeServer, workspaceTracker);
    }

    return;
}


// If the user clicks on where something is defined, we return the symbol that was clicked.
export async function testDefinitionClicked(definitions: LocationOrLocationLink[], selection: vscode.Selection): Promise<LocationOrLocationLink | undefined> {
    for (const def of definitions) {
        if (def instanceof vscode.Location) {
            if (def.range.intersection(selection)) {
                return def;
            }
            continue;
        }

        const ll = def as vscode.LocationLink;
        if (ll.targetSelectionRange && ll.originSelectionRange?.intersection(ll.targetSelectionRange)) {
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

export async function createDefinitionGenerateMessage(
    workspaceTracker: WorkspaceTracker,
    fromMsg: LocationWithContext,
    definitions: LocationOrLocationLink[],
): Promise<PushResponse | undefined> {
    const definition = definitions[0];


    const uri = uriFromLocation(definition);

    // The word
    const toRange = convertRange(targetRangeFromLocation(definition));
    // The full range - e.g. the function
    const fullRange = convertRange(targetFullRangeFromLocation(definition));

    const toMsg = create(LocationWithContextSchema, {
        location: create(LocationSchema, {
            path: workspaceTracker.relativePath(
                uri.fsPath,
            ),
            range: toRange,
        }),
        context: create(SnippetContextSchema, {
            fullRange: fullRange,
        }),
    });
    const defMsg = create(ConnectedGenerateSchema, {
        type: ConnectedGenerateType.DEFINITION,
        from: fromMsg,
        to: toMsg,
    });

    const paths = [
        fromMsg.location!.path,
        toMsg.location!.path,
    ];
    const fileContexts = await getFileContexts(workspaceTracker, paths);


    return await wrapGenerateDefinition(fileContexts, defMsg);
}

type SymbolType = 'reference' | 'implementation';

interface QuickPickSymbolItem extends vscode.QuickPickItem {
    location: vscode.Location;
    symbolType: SymbolType;
}

export async function createReferencesOrImplementationsMessage(
    gooseCodeServer: GooseCodeServer,
    workspaceTracker: WorkspaceTracker,
    selection: vscode.Selection,
    fromMsg: LocationWithContext,
    clickedDefinitionRef: LocationOrLocationLink
): Promise<{ msg: PushResponse; type: GenerateResult } | undefined> {

    // Filter out references that are in the current selection
    let refs = (await getReferences()).filter((ref) => {
        if (ref.range?.intersection(selection)) {
            return false;
        }
        return true;
    });

    // Get implementations and filter out the current position
    let impls = (await getImplementations()).filter((impl) => {
        if (impl instanceof vscode.Location) {
            if (impl.range?.intersection(selection)) {
                return false;
            }
            return true;
        }
        const ll = impl as vscode.LocationLink;
        if (ll.targetSelectionRange?.intersection(selection)) {
            return false;
        }
        return true;
    });

    if (!refs.length && !impls.length) {
        // No references or implementations found - offer fallback options
        const fallbackChoice = await showNoReferencesQuickPick();
        if (fallbackChoice === 'snippet') {
            await snippetGenerate(gooseCodeServer, workspaceTracker);
            return undefined;
        }
        return undefined;
    }

    const selectedItem = await new Promise<QuickPickSymbolItem | undefined>(resolve => {
        const quickPick = vscode.window.createQuickPick<QuickPickSymbolItem>();
        quickPick.placeholder = "Loading references and implementations...";
        quickPick.busy = true;

        quickPick.onDidChangeSelection(selection => {
            if (selection[0]) {
                const item = selection[0];
                vscode.window.showTextDocument(item.location.uri, {
                    selection: item.location.range
                });
                quickPick.hide();
                resolve(item);
            }
        });

        quickPick.onDidHide(() => {
            resolve(undefined);
            quickPick.dispose();
        });

        quickPick.show();

        // Build items for both references and implementations
        const buildItems = async (): Promise<QuickPickSymbolItem[]> => {
            const items: QuickPickSymbolItem[] = [];

            // Add implementations first (usually fewer, more important for interface navigation)
            for (const impl of impls) {
                const uri = uriFromLocation(impl);
                const range = targetRangeFromLocation(impl);
                const loc = new vscode.Location(uri, range);
                const document = await vscode.workspace.openTextDocument(uri);
                const lineText = document.lineAt(range.start.line).text.trim();
                items.push({
                    label: `$(symbol-class) ${lineText}`,
                    description: `Line ${range.start.line + 1}`,
                    detail: `[impl] ${workspaceTracker.relativePath(uri.fsPath)}`,
                    location: loc,
                    symbolType: 'implementation',
                });
            }

            // Add references
            for (const ref of refs) {
                const document = await vscode.workspace.openTextDocument(ref.uri);
                const lineText = document.lineAt(ref.range.start.line).text.trim();
                items.push({
                    label: `$(symbol-reference) ${lineText}`,
                    description: `Line ${ref.range.start.line + 1}`,
                    detail: `[ref] ${workspaceTracker.relativePath(ref.uri.fsPath)}`,
                    location: ref,
                    symbolType: 'reference',
                });
            }

            return items;
        };

        buildItems().then(items => {
            quickPick.items = items;
            quickPick.busy = false;
            const refCount = refs.length;
            const implCount = impls.length;
            quickPick.placeholder = `Select: ${refCount} references, ${implCount} implementations`;
        });
    });

    if (!selectedItem) {
        return;
    }

    let fromMsgWithContext = fromMsg;
    if (clickedDefinitionRef) {
        fromMsgWithContext = create(LocationWithContextSchema, {
            location: fromMsg.location,
            context: create(SnippetContextSchema, {
                fullRange: convertRange(targetFullRangeFromLocation(clickedDefinitionRef)),
            }),
        });
    }

    const toMsg = create(LocationWithContextSchema, {
        location: create(LocationSchema, {
            path: workspaceTracker.relativePath(selectedItem.location.uri.fsPath),
            range: convertRange(selectedItem.location.range),
        }),
        context: create(SnippetContextSchema, {
            fullRange: convertRange(targetFullRangeFromLocation(selectedItem.location)),
        }),
    });

    const connectedType = selectedItem.symbolType === 'implementation'
        ? ConnectedGenerateType.IMPLEMENTATION
        : ConnectedGenerateType.REFERENCE;

    const connected = create(ConnectedGenerateSchema, {
        type: connectedType,
        from: fromMsgWithContext,
        to: toMsg,
    });

    const paths = [
        fromMsgWithContext.location!.path,
        toMsg.location!.path,
    ];
    const fileContexts = await getFileContexts(workspaceTracker, paths);

    const msg = await wrapGenerateConnected(fileContexts, connected);
    const resultType = selectedItem.symbolType === 'implementation' 
        ? GenerateResult.IMPLEMENTATION 
        : GenerateResult.REFERENCE;

    return { msg, type: resultType };
}


export async function fromRange(selection: vscode.Selection): Promise<Range> {
    const selectionLine = selection.active.line;

    const tup = await getWordAtPosition();
    if (tup) {
        const { range } = tup;
        return convertRange(range);
    }

    const selectionCharacter = selection.active.character;

    return create(RangeSchema, {
        start: create(PositionSchema, {
            line: BigInt(selectionLine),
            character: BigInt(selectionCharacter),
        }),
        end: create(PositionSchema, {
            line: BigInt(selectionLine),
            character: BigInt(selectionCharacter),
        }),
    });
}

export async function wrapGenerateDefinition(fileContext: FileContext[], msg: ConnectedGenerate): Promise<PushResponse> {
    return wrapGenerateConnected(fileContext, msg);
}

export async function wrapGenerateReference(fileContext: FileContext[], msg: ConnectedGenerate): Promise<PushResponse> {
    return wrapGenerateConnected(fileContext, msg);
}

export async function wrapGenerateConnected(fileContext: FileContext[], msg: ConnectedGenerate): Promise<PushResponse> {
    return create(PushResponseSchema, {
        type: PushType.FILE_COMMAND,
        data: {
            case: "fileCommand",
            value: create(FileCommandPushSchema, {
                type: FileCommandType.GENERATE,
                fileContexts: fileContext,
                data: {
                    case: "generate",
                    value: create(GeneratePushSchema, {
                        type: GenerateType.CONNECTED,
                        data: {
                            case: "connected",
                            value: msg,
                        },
                    }),
                },
            }),
        },
    });
}
