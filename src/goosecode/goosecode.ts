import * as vscode from "vscode";
import { Disposable } from "vscode";
import { GooseCodeServer } from "./api/api";
import { idepb } from "../proto/idepb/ide";
import PushMessage = idepb.PushMessage;
import OpenFilePush = idepb.OpenFilePush;
import Range = idepb.Range;
import Position = idepb.Position;
import CreateSnippetPush = idepb.CreateSnippetPush;
import PinFilePush = idepb.PinFilePush;
import HighlightPush = idepb.HighlightPush;
import {
  describeRange,
  getReferences,
  getDefinitions,
  getProjectRoot,
  getTypeDefinitions,
  goToDefinition,
  selectRange,
} from "./commands/commands";
import FollowPush = idepb.FollowPush;
import DefinitionFollow = idepb.DefinitionFollow;
import Location = idepb.Location;
import { convertRange } from "../util";
import { raw } from "express";
import ReferenceFollow = idepb.ReferenceFollow;
import SnippetContext = idepb.SnippetContext;
import LocationWithContext = idepb.LocationWithContext;

export function registerGooseCodeCommands(
  gooseCodeServer: GooseCodeServer,
): Array<Disposable> {
  const subscriptions: Array<Disposable> = [];

  // New File
  subscriptions.push(
    vscode.commands.registerCommand("goosecode.newFile", () => {
      const editor = vscode.window.activeTextEditor;
      if (editor) {
        gooseCodeServer.push(
          new PushMessage({
            type: idepb.PushType.PUSH_OPEN_FILE,
            open_file: new OpenFilePush({
              path: currentFilePath(editor),
              range: selectedRange(editor),
              force_new: true,
            }),
          }),
        );
      }
    }),
  );

  // Show file
  subscriptions.push(
    vscode.commands.registerCommand("goosecode.showFile", () => {
      const editor = vscode.window.activeTextEditor;
      if (editor) {
        gooseCodeServer.push(
          new PushMessage({
            type: idepb.PushType.PUSH_OPEN_FILE,
            open_file: new OpenFilePush({
              path: currentFilePath(editor),
              range: selectedRange(editor),
            }),
          }),
        );
      }
    }),
  );

  // Create Snippet
  subscriptions.push(
    vscode.commands.registerCommand("goosecode.createSnippet", () => {
      const editor = vscode.window.activeTextEditor;
      if (editor) {
        gooseCodeServer.push(
          new PushMessage({
            type: idepb.PushType.PUSH_CREATE_SNIPPET,
            create_snippet: new CreateSnippetPush({
              location: new Location({
                path: currentFilePath(editor),
                range: selectedRange(editor),
              }),
              context: new SnippetContext({
                before: 10,
                after: 10,
              }),
            }),
          }),
        );
      }
    }),
  );

  // Pin File
  subscriptions.push(
    vscode.commands.registerCommand("goosecode.pinFile", () => {
      const editor = vscode.window.activeTextEditor;
      if (editor) {
        gooseCodeServer.push(
          new PushMessage({
            type: idepb.PushType.PUSH_PIN_FILE,
            pin_file: new PinFilePush({
              path: currentFilePath(editor),
            }),
          }),
        );
      }
    }),
  );

  // Highlight
  subscriptions.push(
    vscode.commands.registerCommand("goosecode.highlight", () => {
      const editor = vscode.window.activeTextEditor;
      if (editor) {
        gooseCodeServer.push(
          new PushMessage({
            type: idepb.PushType.PUSH_HIGHLIGHT,
            highlight: new HighlightPush({
              path: currentFilePath(editor),
              range: selectedRange(editor),
              color: 0xaaffffff,
            }),
          }),
        );
      }
    }),
  );

  // Highlight
  subscriptions.push(
    vscode.commands.registerCommand("goosecode.follow", async () => {
      const editor = vscode.window.activeTextEditor;
      if (editor) {
        const selection = editor.selection;
        let definitions = await getDefinitions();

        let currentDefinition: vscode.LocationLink | undefined;
        definitions = definitions.filter((def) => {
          if (
            def.originSelectionRange!.intersection(def.targetSelectionRange!)
          ) {
            console.log(
              `------- SKIPPING CURRENT SELECTION DEFINITION ------ `,
            );
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
                      path: relativePath(editor.document.uri.fsPath),
                      range: convertRange(definitions[0].originSelectionRange!),
                    }),
                  }),
                  to: new LocationWithContext({
                    location: new Location({
                      path: relativePath(definitions[0].targetUri.fsPath),
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

          await goToDefinition();
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
                      path: relativePath(currentLocation!.uri.fsPath),
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
                          path: relativePath(ref.uri.fsPath),
                          range: convertRange(ref.range),
                        }),
                      }),
                  ),
                }),
              }),
            }),
          );
        }
      }
    }),
  );

  return subscriptions;
}

function currentFilePath(editor: vscode.TextEditor) {
  const projectRoot = getProjectRoot();
  const path = editor.document.fileName.replace(projectRoot, "");
  console.log(path);
  return path;
}

function relativePath(path: string) {
  const projectRoot = getProjectRoot();
  return path.replace(projectRoot, "");
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
