import * as vscode from "vscode";
import { LocationOrLocationLink } from "../types";
import { Uri } from "vscode";
import * as gc from "../gen/ide";


export function getWordAtPosition(): { word: string, range: vscode.Range } | undefined {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
        return;
    }

    const document = editor.document;
    const position = editor.selection.active;
    const wordRange = document.getWordRangeAtPosition(position);

    if (wordRange) {
        const word = document.getText(wordRange);
        return { word, range: wordRange };
    } else {
        return undefined;
    }
}

export function uriFromLocation(location: LocationOrLocationLink): Uri {
    if (location instanceof vscode.Location) {
        return location.uri;
    }
    return location.targetUri;
}

export function targetRangeFromLocation(location: LocationOrLocationLink): vscode.Range {
    if (location instanceof vscode.Location) {
        return location.range;
    }
    return location.targetSelectionRange ?? location.targetRange;
}

export function targetFullRangeFromLocation(location: LocationOrLocationLink): vscode.Range {
    if (location instanceof vscode.Location) {
        return location.range;
    }
    return location.targetRange;
}

export function selectedRange(editor: vscode.TextEditor) {
    return gc.Range.create({
      start: gc.Position.create({
        line: BigInt(editor.selection.start.line),
        character: BigInt(editor.selection.start.character),
      }),
      end: gc.Position.create({
        line: BigInt(editor.selection.end.line),
        character: BigInt(editor.selection.end.character),
      }),
    });
  }
  