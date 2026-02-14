import * as vscode from "vscode";
import * as net from "net";

import { create } from "@bufbuild/protobuf";
import { SymbolKind } from "./gen/ide-connect/v1/vscode_pb";
import type { Range, DocumentSymbol } from "./gen/ide-connect/v1/vscode_pb";
import { PositionSchema, RangeSchema, DocumentSymbolSchema } from "./gen/ide-connect/v1/vscode_pb";

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
      return SymbolKind.FILE;
    case vscode.SymbolKind.Module:
      return SymbolKind.MODULE;
    case vscode.SymbolKind.Namespace:
      return SymbolKind.NAMESPACE;
    case vscode.SymbolKind.Package:
      return SymbolKind.PACKAGE;
    case vscode.SymbolKind.Class:
      return SymbolKind.CLASS;
    case vscode.SymbolKind.Method:
      return SymbolKind.METHOD;
    case vscode.SymbolKind.Property:
      return SymbolKind.PROPERTY;
    case vscode.SymbolKind.Field:
      return SymbolKind.FIELD;
    case vscode.SymbolKind.Constructor:
      return SymbolKind.CONSTRUCTOR;
    case vscode.SymbolKind.Enum:
      return SymbolKind.ENUM;
    case vscode.SymbolKind.Interface:
      return SymbolKind.INTERFACE;
    case vscode.SymbolKind.Function:
      return SymbolKind.FUNCTION;
    case vscode.SymbolKind.Variable:
      return SymbolKind.VARIABLE;
    case vscode.SymbolKind.Constant:
      return SymbolKind.CONSTANT;
    case vscode.SymbolKind.String:
      return SymbolKind.STRING;
    case vscode.SymbolKind.Number:
      return SymbolKind.NUMBER;
    case vscode.SymbolKind.Boolean:
      return SymbolKind.BOOLEAN;
    case vscode.SymbolKind.Array:
      return SymbolKind.ARRAY;
    case vscode.SymbolKind.Object:
      return SymbolKind.OBJECT;
    case vscode.SymbolKind.Key:
      return SymbolKind.KEY;
    case vscode.SymbolKind.Null:
      return SymbolKind.NULL;
    case vscode.SymbolKind.EnumMember:
      return SymbolKind.ENUM_MEMBER;
    case vscode.SymbolKind.Struct:
      return SymbolKind.STRUCT;
    case vscode.SymbolKind.Event:
      return SymbolKind.EVENT;
    case vscode.SymbolKind.Operator:
      return SymbolKind.OPERATOR;
    case vscode.SymbolKind.TypeParameter:
      return SymbolKind.TYPE_PARAMETER;
    default:
      throw new Error(`Unknown symbol kind: ${symbolKind}`);
  }
}

function convertRange(vsRange: vscode.Range | vscode.Location): Range {
  const r =
    vsRange instanceof vscode.Range
      ? vsRange
      : (vsRange as vscode.Location).range;

  const startPos = create(PositionSchema, {
    line: BigInt(r.start.line),
    character: BigInt(r.start.character),
  });
  const endPos = create(PositionSchema, {
    line: BigInt(r.end.line),
    character: BigInt(r.end.character),
  });
  const range = create(RangeSchema, {
    start: startPos,
    end: endPos,
  });

  return range;
}

function convertSymbols(
  vsSymbols: Array<vscode.DocumentSymbol | vscode.SymbolInformation>,
): DocumentSymbol[] {
  const pbSymbols: DocumentSymbol[] = [];
  for (const d of vsSymbols) {
    let symbol: DocumentSymbol;
    if (d instanceof vscode.DocumentSymbol) {
      symbol = create(DocumentSymbolSchema, {
        name: d.name,
        detail: d.detail,
        kind: convertSymbolKind(d.kind),
        range: convertRange(d.range),
        selectionRange: convertRange(d.selectionRange),
        children: convertSymbols(d.children),
      });
    } else if (d instanceof vscode.SymbolInformation) {
      symbol = create(DocumentSymbolSchema, {
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

/**
 * Finds an available port starting from the given port.
 * Tries binding to ports incrementally until one works.
 */
async function findAvailablePort(startPort: number, maxAttempts: number = 10): Promise<number | null> {
  for (let i = 0; i < maxAttempts; i++) {
    const port = startPort + i;
    const available = await isPortAvailable(port);
    if (available) {
      return port;
    }
  }
  return null;
}

/**
 * Checks if a port is available by attempting to bind to it.
 */
function isPortAvailable(port: number): Promise<boolean> {
  return new Promise((resolve) => {
    const server = net.createServer();
    
    server.once('error', (err: NodeJS.ErrnoException) => {
      if (err.code === 'EADDRINUSE') {
        resolve(false);
      } else {
        resolve(false);
      }
    });
    
    server.once('listening', () => {
      server.close(() => {
        resolve(true);
      });
    });
    
    server.listen(port, '127.0.0.1');
  });
}

/**
 * Converts a file path to UNIX format (forward slashes).
 * Used when sending paths to the external application.
 */
function toUnixPath(p: string): string {
  return p.replace(/\\/g, '/');
}

/**
 * Converts a UNIX-style path to the native format.
 * On Windows, converts forward slashes to backslashes.
 * On UNIX systems, this is a no-op.
 */
function toNativePath(p: string): string {
  if (process.platform === 'win32') {
    return p.replace(/\//g, '\\');
  }
  return p;
}

export {
  isEntireWord,
  // convertLocations,
  convertSymbolKind,
  convertRange,
  convertSymbols,
  getRandomString,
  findAvailablePort,
  isPortAvailable,
  toUnixPath,
  toNativePath,
};
