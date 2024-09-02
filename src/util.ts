import * as vscode from 'vscode';
import {getProjectRoot} from "./goosecode/commands/commands";
import {RawData} from "ws";
import {idepb} from "./proto/idepb/ide";
import Location = idepb.Location;
import Position = idepb.Position;
import SymbolKind = idepb.SymbolKind;
import Range = idepb.Range;
import DocumentSymbol = idepb.DocumentSymbol;
import RequestMessage = idepb.RequestMessage;

function isEntireWord(selection: vscode.Selection): boolean {
    const document = vscode.window.activeTextEditor?.document;
    if (!document) {
        return false;
    }

    const selectedText = document.getText(selection);
    const regex = /\b\w+?\b/;

    return regex.test(selectedText);
}

function convertLocations(vsLocations: vscode.Location[]): Location[] {
    const pblocs: Location[] = [];
    const projectRoot = getProjectRoot();
    for (const l of vsLocations) {
        const startPos = new Position({
            line: l.range.start.line,
            character: l.range.start.character,
        });

        const endPos = new Position({
            line: l.range.end.line,
            character: l.range.end.character,
        });

        const loc = new Location({
            path: l.uri.path.replace(projectRoot, ""),
            start: startPos,
            end: endPos,
        });

        pblocs.push(loc);
    }
    return pblocs;
}


function convertSymbolKind(symbolKind: vscode.SymbolKind): number {
    switch (symbolKind) {
        case vscode.SymbolKind.File:
            return SymbolKind.SYMBOL_KIND_FILE;
        case vscode.SymbolKind.Module:
            return SymbolKind.SYMBOL_KIND_MODULE;
        case vscode.SymbolKind.Namespace:
            return SymbolKind.SYMBOL_KIND_NAMESPACE;
        case vscode.SymbolKind.Package:
            return SymbolKind.SYMBOL_KIND_PACKAGE;
        case vscode.SymbolKind.Class:
            return SymbolKind.SYMBOL_KIND_CLASS;
        case vscode.SymbolKind.Method:
            return SymbolKind.SYMBOL_KIND_METHOD;
        case vscode.SymbolKind.Property:
            return SymbolKind.SYMBOL_KIND_PROPERTY;
        case vscode.SymbolKind.Field:
            return SymbolKind.SYMBOL_KIND_FIELD;
        case vscode.SymbolKind.Constructor:
            return SymbolKind.SYMBOL_KIND_CONSTRUCTOR;
        case vscode.SymbolKind.Enum:
            return SymbolKind.SYMBOL_KIND_ENUM;
        case vscode.SymbolKind.Interface:
            return SymbolKind.SYMBOL_KIND_INTERFACE;
        case vscode.SymbolKind.Function:
            return SymbolKind.SYMBOL_KIND_FUNCTION;
        case vscode.SymbolKind.Variable:
            return SymbolKind.SYMBOL_KIND_VARIABLE;
        case vscode.SymbolKind.Constant:
            return SymbolKind.SYMBOL_KIND_CONSTANT;
        case vscode.SymbolKind.String:
            return SymbolKind.SYMBOL_KIND_STRING;
        case vscode.SymbolKind.Number:
            return SymbolKind.SYMBOL_KIND_NUMBER;
        case vscode.SymbolKind.Boolean:
            return SymbolKind.SYMBOL_KIND_BOOLEAN;
        case vscode.SymbolKind.Array:
            return SymbolKind.SYMBOL_KIND_ARRAY;
        case vscode.SymbolKind.Object:
            return SymbolKind.SYMBOL_KIND_OBJECT;
        case vscode.SymbolKind.Key:
            return SymbolKind.SYMBOL_KIND_KEY;
        case vscode.SymbolKind.Null:
            return SymbolKind.SYMBOL_KIND_NULL;
        case vscode.SymbolKind.EnumMember:
            return SymbolKind.SYMBOL_KIND_ENUM_MEMBER;
        case vscode.SymbolKind.Struct:
            return SymbolKind.SYMBOL_KIND_STRUCT;
        case vscode.SymbolKind.Event:
            return SymbolKind.SYMBOL_KIND_EVENT;
        case vscode.SymbolKind.Operator:
            return SymbolKind.SYMBOL_KIND_OPERATOR;
        case vscode.SymbolKind.TypeParameter:
            return SymbolKind.SYMBOL_KIND_TYPE_PARAMETER;
        default:
            throw new Error(`Unknown symbol kind: ${symbolKind}`);
    }
}


function convertRange(vsRange: vscode.Range | vscode.Location): Range {

    const r = vsRange instanceof vscode.Range ? vsRange : (vsRange as vscode.Location).range;

    const startPos = new Position({
        line: r.start.line,
        character: r.start.character,
    });
    const endPos = new Position({
        line: r.end.line,
        character: r.end.character,
    });
    const range = new Range({
        start: startPos,
        end: endPos,
    });

    return range;
}

function convertSymbols(vsSymbols: Array<vscode.DocumentSymbol | vscode.SymbolInformation>): DocumentSymbol[] {
    const pbSymbols: DocumentSymbol[] = [];
    for (const d of vsSymbols) {
        let symbol: DocumentSymbol;
        if (d instanceof vscode.DocumentSymbol) {
            symbol = new DocumentSymbol(
                {
                    name: d.name,
                    detail: d.detail,
                    kind: convertSymbolKind(d.kind),
                    range: convertRange(d.range),
                    selectionRange: convertRange(d.selectionRange),
                    children: convertSymbols(d.children),
                }
            );
        } else if (d instanceof vscode.SymbolInformation) {
            symbol = new DocumentSymbol({
                name: d.name,
                detail: d.containerName,
                kind: convertSymbolKind(d.kind),
                range: convertRange(d.location),
            });
        } else {
            throw new Error("Unknown symbol type");
        }
        pbSymbols.push(symbol);
    }

    return pbSymbols;
}


function getRandomString(length: number): string {
    const _chars = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890';

    let result = '';
    for (let i = 0; i < length; i++) {
        result += _chars.charAt(Math.floor(Math.random() * _chars.length));
    }
    return result;
}

// deserializeBinary takes a protobuf message and unmarshals it
function deserializeBinary(message: RawData) {
    var request: RequestMessage;
    try {
        request = RequestMessage.deserializeBinary(new Uint8Array(message as ArrayBuffer));
        console.log('Received ProtoBuf message:', JSON.stringify(request.toObject()));
    } catch (e) {
        console.log("[ERROR] failed to unmarshal");
        return null;
    }

    return request;
}

export {
    isEntireWord,
    convertLocations,
    convertSymbolKind,
    convertRange,
    convertSymbols,
    getRandomString,
    deserializeBinary,
};