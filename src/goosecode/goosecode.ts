import * as vscode from "vscode";
import { Disposable, workspace } from "vscode";
import { GooseCodeServer } from "./server/server";
import { idepb } from "../proto/idepb/ide";
import PushMessage = idepb.PushMessage;
import OpenFilePush = idepb.OpenFilePush;
import Range = idepb.Range;
import Position = idepb.Position;
import CreateSnippetPush = idepb.CreateSnippetPush;
import PinFilePush = idepb.PinFilePush;
import {
  getReferences,
  getDefinitions,
  goToDefinition,
} from "./commands/commands";
import FollowPush = idepb.FollowPush;
import DefinitionFollow = idepb.DefinitionFollow;
import Location = idepb.Location;
import { convertRange } from "../util";
import ReferenceFollow = idepb.ReferenceFollow;
import SnippetContext = idepb.SnippetContext;
import LocationWithContext = idepb.LocationWithContext;
import * as path from "node:path";
import { WorkspaceTracker } from "../workspace-tracker";

export function registerGooseCodeCommands(
  gooseCodeServer: GooseCodeServer,
  workspaceTracker: WorkspaceTracker,
): Array<Disposable> {
  const subscriptions: Array<Disposable> = [];

  // Show file
  var sub = vscode.commands.registerCommand("goosecode.open", () => {
    const editor = vscode.window.activeTextEditor;
    if (editor) {
      gooseCodeServer.push(
        new PushMessage({
          type: idepb.PushType.PUSH_OPEN_FILE,
          open_file: new OpenFilePush({
            path: workspaceTracker.currentFilePath(),
            range: selectedRange(editor),
          }),
        }),
      );
    }
  });
  subscriptions.push(sub);

  // Create Snippet
  sub = vscode.commands.registerCommand("goosecode.snippet", () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      return;
    }
    gooseCodeServer.push(
      new PushMessage({
        type: idepb.PushType.PUSH_CREATE_SNIPPET,
        create_snippet: new CreateSnippetPush({
          location: new Location({
            path: workspaceTracker.currentFilePath(),
            range: selectedRange(editor),
          }),
          context: new SnippetContext({
            before: 10,
            after: 10,
          }),
        }),
      }),
    );
  });
  subscriptions.push(sub);

  // Pin File
  sub = vscode.commands.registerCommand("goosecode.pin", () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      return;
    }
    gooseCodeServer.push(
      new PushMessage({
        type: idepb.PushType.PUSH_PIN_FILE,
        pin_file: new PinFilePush({
          path: workspaceTracker.currentFilePath(),
        }),
      }),
    );
  });
  subscriptions.push(sub);

  // // Highlight
  // subscriptions.push(
  //   vscode.commands.registerCommand("goosecode.highlight", () => {
  //     const editor = vscode.window.activeTextEditor;
  //     if (editor) {
  //       gooseCodeServer.push(
  //         new PushMessage({
  //           type: idepb.PushType.PUSH_HIGHLIGHT,
  //           highlight: new HighlightPush({
  //             path: currentFilePath(editor),
  //             range: selectedRange(editor),
  //             color: 0xaaffffff,
  //           }),
  //         }),
  //       );
  //     }
  //   }),
  // );

  // Highlight
  sub = vscode.commands.registerCommand("goosecode.follow", async () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      return;
    }

    const workspace = workspaceTracker.getLastActiveGooseCodeWorkspace();
    if (workspace === null) {
      console.error("No active workspace found");
      return;
    }
    const workspaceUri = workspace.uri;
    const selection = editor.selection;
    let definitions = await getDefinitions();

    let currentDefinition: vscode.LocationLink | undefined;
    definitions = definitions.filter((def) => {
      if (def.originSelectionRange!.intersection(def.targetSelectionRange!)) {
        console.log(`------- SKIPPING CURRENT SELECTION DEFINITION ------ `);
        console.log(def);
        currentDefinition = def;
        return false;
      }
      return true;
    });

    if (definitions.length > 0) {
      if (definitions.length > 1) {
        console.warn("Multiple definitions found. Going to the first one");
      }
      console.log(`------- DEFINITIONS------ ${definitions.length}`);
      console.log(definitions[0]);

      // TODO check if the definition is the current range

      gooseCodeServer.push(
        new PushMessage({
          type: idepb.PushType.PUSH_FOLLOW,
          follow: new FollowPush({
            type: idepb.FollowType.FOLLOW_DEFINITION,
            definition: new DefinitionFollow({
              from: new LocationWithContext({
                location: new Location({
                  path: workspaceTracker.relativePath(
                    editor.document.uri.fsPath,
                  ),
                  range: convertRange(definitions[0].originSelectionRange!),
                }),
              }),
              to: new LocationWithContext({
                location: new Location({
                  path: workspaceTracker.relativePath(
                    definitions[0].targetUri.fsPath,
                  ),
                  range: convertRange(definitions[0].targetSelectionRange!),
                }),
                context: new SnippetContext({
                  full_range: convertRange(definitions[0].targetRange),
                }),
              }),
            }),
          }),
        }),
      );

      await goToDefinition(
        workspaceUri,
        new Location({
          path: workspaceTracker.relativePath(definitions[0].targetUri.fsPath),
          range: convertRange(definitions[0].targetSelectionRange!),
        }),
        false,
      );
      return;
    }

    let currentLocation: vscode.Location | undefined;
    let refs = await getReferences();

    refs = refs.filter((ref) => {
      if (ref.range!.intersection(selection)) {
        console.log(`------- SKIPPING CURRENT SELECTION REFERENCE ------ `);
        console.log(ref);
        currentLocation = ref;
        return false;
      }
      return true;
    });

    if (refs.length > 0) {
      console.log("-------REFERENCES------");
      console.log(refs);
      gooseCodeServer.push(
        new PushMessage({
          type: idepb.PushType.PUSH_FOLLOW,
          follow: new FollowPush({
            type: idepb.FollowType.FOLLOW_REFERENCE,
            reference: new ReferenceFollow({
              from: new LocationWithContext({
                location: new Location({
                  path: workspaceTracker.relativePath(
                    currentLocation!.uri.fsPath,
                  ),
                  range: convertRange(currentLocation!.range),
                }),
                context: new SnippetContext({
                  full_range: convertRange(currentDefinition!.targetRange),
                }),
              }),
              to: refs.map(
                (ref) =>
                  new LocationWithContext({
                    location: new Location({
                      path: workspaceTracker.relativePath(ref.uri.fsPath),
                      range: convertRange(ref.range),
                    }),
                  }),
              ),
            }),
          }),
        }),
      );
    }
  });
  subscriptions.push(sub);

  return subscriptions;
}

function selectedRange(editor: vscode.TextEditor) {
  return new Range({
    start: new Position({
      line: editor.selection.start.line,
      character: editor.selection.start.character,
    }),
    end: new Position({
      line: editor.selection.end.line,
      character: editor.selection.end.character,
    }),
  });
}
