import * as vscode from "vscode";
import { LocationOrLocationLink } from "@/types";
import { Uri } from "vscode";


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
        vscode.window.showInformationMessage(`Word at position: ${word}`);
        return { word, range: wordRange };
    } else {
        vscode.window.showInformationMessage('No word found at cursor position.');
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