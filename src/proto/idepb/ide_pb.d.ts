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
  }

  export enum DataCase {
    DATA_NOT_SET = 0,
    LIST_FILES = 3,
    GET_FILES = 4,
    OPEN_FILES = 5,
    FIND_STRING = 6,
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

  hasError(): boolean;
  clearError(): void;
  getError(): ErrorResponse | undefined;
  setError(value?: ErrorResponse): void;

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

  hasFind(): boolean;
  clearFind(): void;
  getFind(): FindStringResponse | undefined;
  setFind(value?: FindStringResponse): void;

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
    error?: ErrorResponse.AsObject,
    listFiles?: ListFilesResponse.AsObject,
    getFiles?: GetFilesResponse.AsObject,
    openFiles?: OpenFilesResponse.AsObject,
    find?: FindStringResponse.AsObject,
  }

  export enum DataCase {
    DATA_NOT_SET = 0,
    ERROR = 3,
    LIST_FILES = 4,
    GET_FILES = 5,
    OPEN_FILES = 6,
    FIND = 7,
  }
}

export interface RequestTypeMap {
  REQUEST_INVALID: 0;
  REQUEST_LIST_FILES: 1;
  REQUEST_GET_FILES: 2;
  REQUEST_OPEN_FILES: 3;
  REQUEST_FIND_STRING: 4;
}

export const RequestType: RequestTypeMap;

export interface ResponseTypeMap {
  RESPONSE_INVALID: 0;
  RESPONSE_ERROR: 1;
  RESPONSE_LIST_FILES: 2;
  RESPONSE_GET_FILES: 3;
  RESPONSE_OPEN_FILES: 4;
  RESPONSE_FIND_STRING: 5;
}

export const ResponseType: ResponseTypeMap;

