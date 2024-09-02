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
import { getProjectRoot } from "./commands/commands";

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
              path: currentFilePath(editor),
              range: selectedRange(editor),
              before: 10,
              after: 10,
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

  return subscriptions;
}

function currentFilePath(editor: vscode.TextEditor) {
  const projectRoot = getProjectRoot();
  const path = editor.document.fileName.replace(projectRoot, "");
  console.log(path);
  return path;
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
