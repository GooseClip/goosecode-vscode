import * as vscode from "vscode";

import * as gc from "./gen/ide";

function isEntireWord(selection: vscode.Selection): boolean {
  const document = vscode.window.activeTextEditor?.document;
  if (!document) {
    return false;
  }

  const selectedText = document.getText(selection);
  const regex = /\b\w+?\b/;

  return regex.test(selectedText);
}

function convertSymbolKind(symbolKind: vscode.SymbolKind): number {
  switch (symbolKind) {
    case vscode.SymbolKind.File:
      return gc.SymbolKind.FILE;
    case vscode.SymbolKind.Module:
      return gc.SymbolKind.MODULE;
    case vscode.SymbolKind.Namespace:
      return gc.SymbolKind.NAMESPACE;
    case vscode.SymbolKind.Package:
      return gc.SymbolKind.PACKAGE;
    case vscode.SymbolKind.Class:
      return gc.SymbolKind.CLASS;
    case vscode.SymbolKind.Method:
      return gc.SymbolKind.METHOD;
    case vscode.SymbolKind.Property:
      return gc.SymbolKind.PROPERTY;
    case vscode.SymbolKind.Field:
      return gc.SymbolKind.FIELD;
    case vscode.SymbolKind.Constructor:
      return gc.SymbolKind.CONSTRUCTOR;
    case vscode.SymbolKind.Enum:
      return gc.SymbolKind.ENUM;
    case vscode.SymbolKind.Interface:
      return gc.SymbolKind.INTERFACE;
    case vscode.SymbolKind.Function:
      return gc.SymbolKind.FUNCTION;
    case vscode.SymbolKind.Variable:
      return gc.SymbolKind.VARIABLE;
    case vscode.SymbolKind.Constant:
      return gc.SymbolKind.CONSTANT;
    case vscode.SymbolKind.String:
      return gc.SymbolKind.STRING;
    case vscode.SymbolKind.Number:
      return gc.SymbolKind.NUMBER;
    case vscode.SymbolKind.Boolean:
      return gc.SymbolKind.BOOLEAN;
    case vscode.SymbolKind.Array:
      return gc.SymbolKind.ARRAY;
    case vscode.SymbolKind.Object:
      return gc.SymbolKind.OBJECT;
    case vscode.SymbolKind.Key:
      return gc.SymbolKind.KEY;
    case vscode.SymbolKind.Null:
      return gc.SymbolKind.NULL;
    case vscode.SymbolKind.EnumMember:
      return gc.SymbolKind.ENUM_MEMBER;
    case vscode.SymbolKind.Struct:
      return gc.SymbolKind.STRUCT;
    case vscode.SymbolKind.Event:
      return gc.SymbolKind.EVENT;
    case vscode.SymbolKind.Operator:
      return gc.SymbolKind.OPERATOR;
    case vscode.SymbolKind.TypeParameter:
      return gc.SymbolKind.TYPE_PARAMETER;
    default:
      throw new Error(`Unknown symbol kind: ${symbolKind}`);
  }
}

function convertRange(vsRange: vscode.Range | vscode.Location): gc.Range {
  const r =
    vsRange instanceof vscode.Range
      ? vsRange
      : (vsRange as vscode.Location).range;

  const startPos = gc.Position.create({
    line: BigInt(r.start.line),
    character: BigInt(r.start.character),
  });
  const endPos = gc.Position.create({
    line: BigInt(r.end.line),
    character: BigInt(r.end.character),
  });
  const range = gc.Range.create({
    start: startPos,
    end: endPos,
  });

  return range;
}

function convertSymbols(
  vsSymbols: Array<vscode.DocumentSymbol | vscode.SymbolInformation>,
): gc.DocumentSymbol[] {
  const pbSymbols: gc.DocumentSymbol[] = [];
  for (const d of vsSymbols) {
    let symbol: gc.DocumentSymbol;
    if (d instanceof vscode.DocumentSymbol) {
      symbol = gc.DocumentSymbol.create({
        name: d.name,
        detail: d.detail,
        kind: convertSymbolKind(d.kind),
        range: convertRange(d.range),
        selectionRange: convertRange(d.selectionRange),
        children: convertSymbols(d.children),
      });
    } else if (d instanceof vscode.SymbolInformation) {
      symbol = gc.DocumentSymbol.create({
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
  const _chars =
    "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890";

  let result = "";
  for (let i = 0; i < length; i++) {
    result += _chars.charAt(Math.floor(Math.random() * _chars.length));
  }
  return result;
}

export {
  isEntireWord,
  // convertLocations,
  convertSymbolKind,
  convertRange,
  convertSymbols,
  getRandomString,
};
