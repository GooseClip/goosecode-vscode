// package: idepb
// file: ide.proto

import * as jspb from "google-protobuf";

export class EmptyMessage extends jspb.Message {
  getDebug(): string;
  setDebug(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmptyMessage.AsObject;
  static toObject(includeInstance: boolean, msg: EmptyMessage): EmptyMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EmptyMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmptyMessage;
  static deserializeBinaryFromReader(message: EmptyMessage, reader: jspb.BinaryReader): EmptyMessage;
}

export namespace EmptyMessage {
  export type AsObject = {
    debug: string,
  }
}

export class ListFilesRequest extends jspb.Message {
  clearExcludedDirList(): void;
  getExcludedDirList(): Array<string>;
  setExcludedDirList(value: Array<string>): void;
  addExcludedDir(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFilesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListFilesRequest): ListFilesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListFilesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFilesRequest;
  static deserializeBinaryFromReader(message: ListFilesRequest, reader: jspb.BinaryReader): ListFilesRequest;
}

export namespace ListFilesRequest {
  export type AsObject = {
    excludedDirList: Array<string>,
  }
}

export class OpenFilesRequest extends jspb.Message {
  clearFilePathsList(): void;
  getFilePathsList(): Array<string>;
  setFilePathsList(value: Array<string>): void;
  addFilePaths(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OpenFilesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OpenFilesRequest): OpenFilesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OpenFilesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OpenFilesRequest;
  static deserializeBinaryFromReader(message: OpenFilesRequest, reader: jspb.BinaryReader): OpenFilesRequest;
}

export namespace OpenFilesRequest {
  export type AsObject = {
    filePathsList: Array<string>,
  }
}

export class GetFilesRequest extends jspb.Message {
  clearFilePathsList(): void;
  getFilePathsList(): Array<string>;
  setFilePathsList(value: Array<string>): void;
  addFilePaths(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFilesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFilesRequest): GetFilesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFilesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFilesRequest;
  static deserializeBinaryFromReader(message: GetFilesRequest, reader: jspb.BinaryReader): GetFilesRequest;
}

export namespace GetFilesRequest {
  export type AsObject = {
    filePathsList: Array<string>,
  }
}

export class FindStringRequest extends jspb.Message {
  getSearchPattern(): string;
  setSearchPattern(value: string): void;

  clearIncludedFilesList(): void;
  getIncludedFilesList(): Array<string>;
  setIncludedFilesList(value: Array<string>): void;
  addIncludedFiles(value: string, index?: number): string;

  clearExcludedFilesList(): void;
  getExcludedFilesList(): Array<string>;
  setExcludedFilesList(value: Array<string>): void;
  addExcludedFiles(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindStringRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FindStringRequest): FindStringRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindStringRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindStringRequest;
  static deserializeBinaryFromReader(message: FindStringRequest, reader: jspb.BinaryReader): FindStringRequest;
}

export namespace FindStringRequest {
  export type AsObject = {
    searchPattern: string,
    includedFilesList: Array<string>,
    excludedFilesList: Array<string>,
  }
}

export class SelectRangeRequest extends jspb.Message {
  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): Location | undefined;
  setLocation(value?: Location): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SelectRangeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SelectRangeRequest): SelectRangeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SelectRangeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SelectRangeRequest;
  static deserializeBinaryFromReader(message: SelectRangeRequest, reader: jspb.BinaryReader): SelectRangeRequest;
}

export namespace SelectRangeRequest {
  export type AsObject = {
    location?: Location.AsObject,
  }
}

export class DescribeRangeRequest extends jspb.Message {
  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): Location | undefined;
  setLocation(value?: Location): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DescribeRangeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DescribeRangeRequest): DescribeRangeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DescribeRangeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DescribeRangeRequest;
  static deserializeBinaryFromReader(message: DescribeRangeRequest, reader: jspb.BinaryReader): DescribeRangeRequest;
}

export namespace DescribeRangeRequest {
  export type AsObject = {
    location?: Location.AsObject,
  }
}

export class GoToDefinitionRequest extends jspb.Message {
  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): Location | undefined;
  setLocation(value?: Location): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GoToDefinitionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GoToDefinitionRequest): GoToDefinitionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GoToDefinitionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GoToDefinitionRequest;
  static deserializeBinaryFromReader(message: GoToDefinitionRequest, reader: jspb.BinaryReader): GoToDefinitionRequest;
}

export namespace GoToDefinitionRequest {
  export type AsObject = {
    location?: Location.AsObject,
  }
}

export class RenameRequest extends jspb.Message {
  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): Location | undefined;
  setLocation(value?: Location): void;

  getNewName(): string;
  setNewName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RenameRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RenameRequest): RenameRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RenameRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RenameRequest;
  static deserializeBinaryFromReader(message: RenameRequest, reader: jspb.BinaryReader): RenameRequest;
}

export namespace RenameRequest {
  export type AsObject = {
    location?: Location.AsObject,
    newName: string,
  }
}

export class FindUsesRequest extends jspb.Message {
  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): Location | undefined;
  setLocation(value?: Location): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindUsesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FindUsesRequest): FindUsesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindUsesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindUsesRequest;
  static deserializeBinaryFromReader(message: FindUsesRequest, reader: jspb.BinaryReader): FindUsesRequest;
}

export namespace FindUsesRequest {
  export type AsObject = {
    location?: Location.AsObject,
  }
}

export class EditorStateRequest extends jspb.Message {
  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): Location | undefined;
  setLocation(value?: Location): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditorStateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EditorStateRequest): EditorStateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EditorStateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditorStateRequest;
  static deserializeBinaryFromReader(message: EditorStateRequest, reader: jspb.BinaryReader): EditorStateRequest;
}

export namespace EditorStateRequest {
  export type AsObject = {
    location?: Location.AsObject,
  }
}

export class ContentChangeRequest extends jspb.Message {
  hasRange(): boolean;
  clearRange(): void;
  getRange(): IRange | undefined;
  setRange(value?: IRange): void;

  getRangeOffset(): number;
  setRangeOffset(value: number): void;

  getRangeLength(): number;
  setRangeLength(value: number): void;

  getText(): string;
  setText(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContentChangeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ContentChangeRequest): ContentChangeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContentChangeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContentChangeRequest;
  static deserializeBinaryFromReader(message: ContentChangeRequest, reader: jspb.BinaryReader): ContentChangeRequest;
}

export namespace ContentChangeRequest {
  export type AsObject = {
    range?: IRange.AsObject,
    rangeOffset: number,
    rangeLength: number,
    text: string,
  }
}

export class EditorDiagnosticsRequest extends jspb.Message {
  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): Location | undefined;
  setLocation(value?: Location): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditorDiagnosticsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EditorDiagnosticsRequest): EditorDiagnosticsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EditorDiagnosticsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditorDiagnosticsRequest;
  static deserializeBinaryFromReader(message: EditorDiagnosticsRequest, reader: jspb.BinaryReader): EditorDiagnosticsRequest;
}

export namespace EditorDiagnosticsRequest {
  export type AsObject = {
    location?: Location.AsObject,
  }
}

export class RequestMessage extends jspb.Message {
  getType(): RequestTypeMap[keyof RequestTypeMap];
  setType(value: RequestTypeMap[keyof RequestTypeMap]): void;

  getCommandId(): string;
  setCommandId(value: string): void;

  hasListFiles(): boolean;
  clearListFiles(): void;
  getListFiles(): ListFilesRequest | undefined;
  setListFiles(value?: ListFilesRequest): void;

  hasGetFiles(): boolean;
  clearGetFiles(): void;
  getGetFiles(): GetFilesRequest | undefined;
  setGetFiles(value?: GetFilesRequest): void;

  hasOpenFiles(): boolean;
  clearOpenFiles(): void;
  getOpenFiles(): OpenFilesRequest | undefined;
  setOpenFiles(value?: OpenFilesRequest): void;

  hasFindString(): boolean;
  clearFindString(): void;
  getFindString(): FindStringRequest | undefined;
  setFindString(value?: FindStringRequest): void;

  hasSelectRange(): boolean;
  clearSelectRange(): void;
  getSelectRange(): SelectRangeRequest | undefined;
  setSelectRange(value?: SelectRangeRequest): void;

  hasDescribeRange(): boolean;
  clearDescribeRange(): void;
  getDescribeRange(): DescribeRangeRequest | undefined;
  setDescribeRange(value?: DescribeRangeRequest): void;

  hasGoToDefinition(): boolean;
  clearGoToDefinition(): void;
  getGoToDefinition(): GoToDefinitionRequest | undefined;
  setGoToDefinition(value?: GoToDefinitionRequest): void;

  hasRename(): boolean;
  clearRename(): void;
  getRename(): RenameRequest | undefined;
  setRename(value?: RenameRequest): void;

  hasFindUses(): boolean;
  clearFindUses(): void;
  getFindUses(): FindUsesRequest | undefined;
  setFindUses(value?: FindUsesRequest): void;

  hasEditorState(): boolean;
  clearEditorState(): void;
  getEditorState(): EditorStateRequest | undefined;
  setEditorState(value?: EditorStateRequest): void;

  hasContentChange(): boolean;
  clearContentChange(): void;
  getContentChange(): ContentChangeRequest | undefined;
  setContentChange(value?: ContentChangeRequest): void;

  hasEditorDiagnostics(): boolean;
  clearEditorDiagnostics(): void;
  getEditorDiagnostics(): EditorDiagnosticsRequest | undefined;
  setEditorDiagnostics(value?: EditorDiagnosticsRequest): void;

  getDataCase(): RequestMessage.DataCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: RequestMessage): RequestMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestMessage;
  static deserializeBinaryFromReader(message: RequestMessage, reader: jspb.BinaryReader): RequestMessage;
}

export namespace RequestMessage {
  export type AsObject = {
    type: RequestTypeMap[keyof RequestTypeMap],
    commandId: string,
    listFiles?: ListFilesRequest.AsObject,
    getFiles?: GetFilesRequest.AsObject,
    openFiles?: OpenFilesRequest.AsObject,
    findString?: FindStringRequest.AsObject,
    selectRange?: SelectRangeRequest.AsObject,
    describeRange?: DescribeRangeRequest.AsObject,
    goToDefinition?: GoToDefinitionRequest.AsObject,
    rename?: RenameRequest.AsObject,
    findUses?: FindUsesRequest.AsObject,
    editorState?: EditorStateRequest.AsObject,
    contentChange?: ContentChangeRequest.AsObject,
    editorDiagnostics?: EditorDiagnosticsRequest.AsObject,
  }

  export enum DataCase {
    DATA_NOT_SET = 0,
    LIST_FILES = 3,
    GET_FILES = 4,
    OPEN_FILES = 5,
    FIND_STRING = 6,
    SELECT_RANGE = 7,
    DESCRIBE_RANGE = 8,
    GO_TO_DEFINITION = 9,
    RENAME = 10,
    FIND_USES = 11,
    EDITOR_STATE = 12,
    CONTENT_CHANGE = 13,
    EDITOR_DIAGNOSTICS = 14,
  }
}

export class ListFilesResponse extends jspb.Message {
  clearFilePathsList(): void;
  getFilePathsList(): Array<string>;
  setFilePathsList(value: Array<string>): void;
  addFilePaths(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFilesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListFilesResponse): ListFilesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListFilesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFilesResponse;
  static deserializeBinaryFromReader(message: ListFilesResponse, reader: jspb.BinaryReader): ListFilesResponse;
}

export namespace ListFilesResponse {
  export type AsObject = {
    filePathsList: Array<string>,
  }
}

export class OpenFilesResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OpenFilesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: OpenFilesResponse): OpenFilesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OpenFilesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OpenFilesResponse;
  static deserializeBinaryFromReader(message: OpenFilesResponse, reader: jspb.BinaryReader): OpenFilesResponse;
}

export namespace OpenFilesResponse {
  export type AsObject = {
  }
}

export class GetFilesResponse extends jspb.Message {
  clearFileContentsList(): void;
  getFileContentsList(): Array<string>;
  setFileContentsList(value: Array<string>): void;
  addFileContents(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFilesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetFilesResponse): GetFilesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFilesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFilesResponse;
  static deserializeBinaryFromReader(message: GetFilesResponse, reader: jspb.BinaryReader): GetFilesResponse;
}

export namespace GetFilesResponse {
  export type AsObject = {
    fileContentsList: Array<string>,
  }
}

export class Position extends jspb.Message {
  getLine(): number;
  setLine(value: number): void;

  getCharacter(): number;
  setCharacter(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Position.AsObject;
  static toObject(includeInstance: boolean, msg: Position): Position.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Position, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Position;
  static deserializeBinaryFromReader(message: Position, reader: jspb.BinaryReader): Position;
}

export namespace Position {
  export type AsObject = {
    line: number,
    character: number,
  }
}

export class IRange extends jspb.Message {
  getStartLineNumber(): number;
  setStartLineNumber(value: number): void;

  getStartColumn(): number;
  setStartColumn(value: number): void;

  getEndLineNumber(): number;
  setEndLineNumber(value: number): void;

  getEndColumn(): number;
  setEndColumn(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IRange.AsObject;
  static toObject(includeInstance: boolean, msg: IRange): IRange.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IRange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IRange;
  static deserializeBinaryFromReader(message: IRange, reader: jspb.BinaryReader): IRange;
}

export namespace IRange {
  export type AsObject = {
    startLineNumber: number,
    startColumn: number,
    endLineNumber: number,
    endColumn: number,
  }
}

export class Range extends jspb.Message {
  hasStart(): boolean;
  clearStart(): void;
  getStart(): Position | undefined;
  setStart(value?: Position): void;

  hasEnd(): boolean;
  clearEnd(): void;
  getEnd(): Position | undefined;
  setEnd(value?: Position): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Range.AsObject;
  static toObject(includeInstance: boolean, msg: Range): Range.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Range, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Range;
  static deserializeBinaryFromReader(message: Range, reader: jspb.BinaryReader): Range;
}

export namespace Range {
  export type AsObject = {
    start?: Position.AsObject,
    end?: Position.AsObject,
  }
}

export class Location extends jspb.Message {
  getPath(): string;
  setPath(value: string): void;

  hasStart(): boolean;
  clearStart(): void;
  getStart(): Position | undefined;
  setStart(value?: Position): void;

  hasEnd(): boolean;
  clearEnd(): void;
  getEnd(): Position | undefined;
  setEnd(value?: Position): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Location.AsObject;
  static toObject(includeInstance: boolean, msg: Location): Location.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Location, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Location;
  static deserializeBinaryFromReader(message: Location, reader: jspb.BinaryReader): Location;
}

export namespace Location {
  export type AsObject = {
    path: string,
    start?: Position.AsObject,
    end?: Position.AsObject,
  }
}

export class DocumentSymbol extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDetail(): string;
  setDetail(value: string): void;

  getKind(): SymbolKindMap[keyof SymbolKindMap];
  setKind(value: SymbolKindMap[keyof SymbolKindMap]): void;

  hasRange(): boolean;
  clearRange(): void;
  getRange(): Range | undefined;
  setRange(value?: Range): void;

  hasSelectionrange(): boolean;
  clearSelectionrange(): void;
  getSelectionrange(): Range | undefined;
  setSelectionrange(value?: Range): void;

  clearChildrenList(): void;
  getChildrenList(): Array<DocumentSymbol>;
  setChildrenList(value: Array<DocumentSymbol>): void;
  addChildren(value?: DocumentSymbol, index?: number): DocumentSymbol;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DocumentSymbol.AsObject;
  static toObject(includeInstance: boolean, msg: DocumentSymbol): DocumentSymbol.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DocumentSymbol, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DocumentSymbol;
  static deserializeBinaryFromReader(message: DocumentSymbol, reader: jspb.BinaryReader): DocumentSymbol;
}

export namespace DocumentSymbol {
  export type AsObject = {
    name: string,
    detail: string,
    kind: SymbolKindMap[keyof SymbolKindMap],
    range?: Range.AsObject,
    selectionrange?: Range.AsObject,
    childrenList: Array<DocumentSymbol.AsObject>,
  }
}

export class FindStringResponse extends jspb.Message {
  clearLocationsList(): void;
  getLocationsList(): Array<Location>;
  setLocationsList(value: Array<Location>): void;
  addLocations(value?: Location, index?: number): Location;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindStringResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FindStringResponse): FindStringResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindStringResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindStringResponse;
  static deserializeBinaryFromReader(message: FindStringResponse, reader: jspb.BinaryReader): FindStringResponse;
}

export namespace FindStringResponse {
  export type AsObject = {
    locationsList: Array<Location.AsObject>,
  }
}

export class SelectRangeResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SelectRangeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SelectRangeResponse): SelectRangeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SelectRangeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SelectRangeResponse;
  static deserializeBinaryFromReader(message: SelectRangeResponse, reader: jspb.BinaryReader): SelectRangeResponse;
}

export namespace SelectRangeResponse {
  export type AsObject = {
  }
}

export class DescribeRangeResponse extends jspb.Message {
  clearSymbolsList(): void;
  getSymbolsList(): Array<DocumentSymbol>;
  setSymbolsList(value: Array<DocumentSymbol>): void;
  addSymbols(value?: DocumentSymbol, index?: number): DocumentSymbol;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DescribeRangeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DescribeRangeResponse): DescribeRangeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DescribeRangeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DescribeRangeResponse;
  static deserializeBinaryFromReader(message: DescribeRangeResponse, reader: jspb.BinaryReader): DescribeRangeResponse;
}

export namespace DescribeRangeResponse {
  export type AsObject = {
    symbolsList: Array<DocumentSymbol.AsObject>,
  }
}

export class GoToDefinitionResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GoToDefinitionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GoToDefinitionResponse): GoToDefinitionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GoToDefinitionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GoToDefinitionResponse;
  static deserializeBinaryFromReader(message: GoToDefinitionResponse, reader: jspb.BinaryReader): GoToDefinitionResponse;
}

export namespace GoToDefinitionResponse {
  export type AsObject = {
  }
}

export class RenameResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RenameResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RenameResponse): RenameResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RenameResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RenameResponse;
  static deserializeBinaryFromReader(message: RenameResponse, reader: jspb.BinaryReader): RenameResponse;
}

export namespace RenameResponse {
  export type AsObject = {
  }
}

export class FindUsesResponse extends jspb.Message {
  clearLocationsList(): void;
  getLocationsList(): Array<Location>;
  setLocationsList(value: Array<Location>): void;
  addLocations(value?: Location, index?: number): Location;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindUsesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FindUsesResponse): FindUsesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindUsesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindUsesResponse;
  static deserializeBinaryFromReader(message: FindUsesResponse, reader: jspb.BinaryReader): FindUsesResponse;
}

export namespace FindUsesResponse {
  export type AsObject = {
    locationsList: Array<Location.AsObject>,
  }
}

export class EditorStateResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditorStateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EditorStateResponse): EditorStateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EditorStateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditorStateResponse;
  static deserializeBinaryFromReader(message: EditorStateResponse, reader: jspb.BinaryReader): EditorStateResponse;
}

export namespace EditorStateResponse {
  export type AsObject = {
  }
}

export class ContentChangeResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContentChangeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ContentChangeResponse): ContentChangeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContentChangeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContentChangeResponse;
  static deserializeBinaryFromReader(message: ContentChangeResponse, reader: jspb.BinaryReader): ContentChangeResponse;
}

export namespace ContentChangeResponse {
  export type AsObject = {
  }
}

export class EditorDiagnosticsResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditorDiagnosticsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EditorDiagnosticsResponse): EditorDiagnosticsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EditorDiagnosticsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditorDiagnosticsResponse;
  static deserializeBinaryFromReader(message: EditorDiagnosticsResponse, reader: jspb.BinaryReader): EditorDiagnosticsResponse;
}

export namespace EditorDiagnosticsResponse {
  export type AsObject = {
  }
}

export class ErrorResponse extends jspb.Message {
  getError(): string;
  setError(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ErrorResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ErrorResponse): ErrorResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ErrorResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ErrorResponse;
  static deserializeBinaryFromReader(message: ErrorResponse, reader: jspb.BinaryReader): ErrorResponse;
}

export namespace ErrorResponse {
  export type AsObject = {
    error: string,
  }
}

export class ResponseMessage extends jspb.Message {
  getType(): ResponseTypeMap[keyof ResponseTypeMap];
  setType(value: ResponseTypeMap[keyof ResponseTypeMap]): void;

  getCommandId(): string;
  setCommandId(value: string): void;

  hasListFiles(): boolean;
  clearListFiles(): void;
  getListFiles(): ListFilesResponse | undefined;
  setListFiles(value?: ListFilesResponse): void;

  hasGetFiles(): boolean;
  clearGetFiles(): void;
  getGetFiles(): GetFilesResponse | undefined;
  setGetFiles(value?: GetFilesResponse): void;

  hasOpenFiles(): boolean;
  clearOpenFiles(): void;
  getOpenFiles(): OpenFilesResponse | undefined;
  setOpenFiles(value?: OpenFilesResponse): void;

  hasFindString(): boolean;
  clearFindString(): void;
  getFindString(): FindStringResponse | undefined;
  setFindString(value?: FindStringResponse): void;

  hasSelectRange(): boolean;
  clearSelectRange(): void;
  getSelectRange(): SelectRangeResponse | undefined;
  setSelectRange(value?: SelectRangeResponse): void;

  hasDescribeRange(): boolean;
  clearDescribeRange(): void;
  getDescribeRange(): DescribeRangeResponse | undefined;
  setDescribeRange(value?: DescribeRangeResponse): void;

  hasGoToDefinition(): boolean;
  clearGoToDefinition(): void;
  getGoToDefinition(): GoToDefinitionResponse | undefined;
  setGoToDefinition(value?: GoToDefinitionResponse): void;

  hasRename(): boolean;
  clearRename(): void;
  getRename(): RenameResponse | undefined;
  setRename(value?: RenameResponse): void;

  hasFindUses(): boolean;
  clearFindUses(): void;
  getFindUses(): FindUsesResponse | undefined;
  setFindUses(value?: FindUsesResponse): void;

  hasEditorState(): boolean;
  clearEditorState(): void;
  getEditorState(): EditorStateResponse | undefined;
  setEditorState(value?: EditorStateResponse): void;

  hasContentChange(): boolean;
  clearContentChange(): void;
  getContentChange(): ContentChangeResponse | undefined;
  setContentChange(value?: ContentChangeResponse): void;

  hasEditorDiagnostics(): boolean;
  clearEditorDiagnostics(): void;
  getEditorDiagnostics(): EditorDiagnosticsResponse | undefined;
  setEditorDiagnostics(value?: EditorDiagnosticsResponse): void;

  hasError(): boolean;
  clearError(): void;
  getError(): ErrorResponse | undefined;
  setError(value?: ErrorResponse): void;

  getDataCase(): ResponseMessage.DataCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseMessage.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseMessage): ResponseMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResponseMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseMessage;
  static deserializeBinaryFromReader(message: ResponseMessage, reader: jspb.BinaryReader): ResponseMessage;
}

export namespace ResponseMessage {
  export type AsObject = {
    type: ResponseTypeMap[keyof ResponseTypeMap],
    commandId: string,
    listFiles?: ListFilesResponse.AsObject,
    getFiles?: GetFilesResponse.AsObject,
    openFiles?: OpenFilesResponse.AsObject,
    findString?: FindStringResponse.AsObject,
    selectRange?: SelectRangeResponse.AsObject,
    describeRange?: DescribeRangeResponse.AsObject,
    goToDefinition?: GoToDefinitionResponse.AsObject,
    rename?: RenameResponse.AsObject,
    findUses?: FindUsesResponse.AsObject,
    editorState?: EditorStateResponse.AsObject,
    contentChange?: ContentChangeResponse.AsObject,
    editorDiagnostics?: EditorDiagnosticsResponse.AsObject,
    error?: ErrorResponse.AsObject,
  }

  export enum DataCase {
    DATA_NOT_SET = 0,
    LIST_FILES = 3,
    GET_FILES = 4,
    OPEN_FILES = 5,
    FIND_STRING = 6,
    SELECT_RANGE = 7,
    DESCRIBE_RANGE = 8,
    GO_TO_DEFINITION = 9,
    RENAME = 10,
    FIND_USES = 11,
    EDITOR_STATE = 12,
    CONTENT_CHANGE = 13,
    EDITOR_DIAGNOSTICS = 14,
    ERROR = 999,
  }
}

export interface RequestTypeMap {
  REQUEST_INVALID: 0;
  REQUEST_LIST_FILES: 1;
  REQUEST_GET_FILES: 2;
  REQUEST_OPEN_FILES: 3;
  REQUEST_FIND_STRING: 4;
  REQUEST_SELECT_RANGE: 5;
  REQUEST_DESCRIBE_RANGE: 6;
  REQUEST_GO_TO_DEFINITION: 7;
  REQUEST_RENAME: 8;
  REQUEST_FIND_USES: 9;
  REQUEST_EDITOR_STATE: 10;
  REQUEST_CONTENT_CHANGE: 11;
  REQUEST_EDITOR_DIAGNOSTICS: 12;
}

export const RequestType: RequestTypeMap;

export interface SymbolKindMap {
  SYMBOL_KIND_FILE: 0;
  SYMBOL_KIND_MODULE: 1;
  SYMBOL_KIND_NAMESPACE: 2;
  SYMBOL_KIND_PACKAGE: 3;
  SYMBOL_KIND_CLASS: 4;
  SYMBOL_KIND_METHOD: 5;
  SYMBOL_KIND_PROPERTY: 6;
  SYMBOL_KIND_FIELD: 7;
  SYMBOL_KIND_CONSTRUCTOR: 8;
  SYMBOL_KIND_ENUM: 9;
  SYMBOL_KIND_INTERFACE: 10;
  SYMBOL_KIND_FUNCTION: 11;
  SYMBOL_KIND_VARIABLE: 12;
  SYMBOL_KIND_CONSTANT: 13;
  SYMBOL_KIND_STRING: 14;
  SYMBOL_KIND_NUMBER: 15;
  SYMBOL_KIND_BOOLEAN: 16;
  SYMBOL_KIND_ARRAY: 17;
  SYMBOL_KIND_OBJECT: 18;
  SYMBOL_KIND_KEY: 19;
  SYMBOL_KIND_NULL: 20;
  SYMBOL_KIND_ENUM_MEMBER: 21;
  SYMBOL_KIND_STRUCT: 22;
  SYMBOL_KIND_EVENT: 23;
  SYMBOL_KIND_OPERATOR: 24;
  SYMBOL_KIND_TYPE_PARAMETER: 25;
}

export const SymbolKind: SymbolKindMap;

export interface ResponseTypeMap {
  RESPONSE_INVALID: 0;
  RESPONSE_LIST_FILES: 1;
  RESPONSE_GET_FILES: 2;
  RESPONSE_OPEN_FILES: 3;
  RESPONSE_FIND_STRING: 4;
  RESPONSE_SELECT_RANGE: 5;
  RESPONSE_DESCRIBE_RANGE: 6;
  RESPONSE_GO_TO_DEFINITION: 7;
  RESPONSE_RENAME: 8;
  RESPONSE_FIND_USES: 9;
  RESPONSE_EDITOR_STATE: 10;
  RESPONSE_CONTENT_CHANGE: 11;
  RESPONSE_EDITOR_DIAGNOSTICS: 12;
  RESPONSE_ERROR: 999;
}

export const ResponseType: ResponseTypeMap;

