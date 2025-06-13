// source: gooseclip/goosecode/ide/v1/ide.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

goog.exportSymbol('proto.gooseclip.goosecode.ide.v1.ActiveSessionPush', null, global);
goog.exportSymbol('proto.gooseclip.goosecode.ide.v1.ActiveSessionPush.DataCase', null, global);
goog.exportSymbol('proto.gooseclip.goosecode.ide.v1.ActiveSessionType', null, global);
goog.exportSymbol('proto.gooseclip.goosecode.ide.v1.AppCommandPush', null, global);
goog.exportSymbol('proto.gooseclip.goosecode.ide.v1.AppCommandType', null, global);
goog.exportSymbol('proto.gooseclip.goosecode.ide.v1.BookmarkPush', null, global);
goog.exportSymbol('proto.gooseclip.goosecode.ide.v1.CodeSourceIDResponse', null, global);
goog.exportSymbol('proto.gooseclip.goosecode.ide.v1.ContentChangeResponse', null, global);
goog.exportSymbol('proto.gooseclip.goosecode.ide.v1.CreateSnippetPush', null, global);
goog.exportSymbol('proto.gooseclip.goosecode.ide.v1.DefinitionFollow', null, global);
goog.exportSymbol('proto.gooseclip.goosecode.ide.v1.DescribeRangeRequest', null, global);
goog.exportSymbol('proto.gooseclip.goosecode.ide.v1.DescribeRangeResponse', null, global);
goog.exportSymbol('proto.gooseclip.goosecode.ide.v1.DocumentSymbol', null, global);
goog.exportSymbol('proto.gooseclip.goosecode.ide.v1.EditorDiagnosticsResponse', null, global);
goog.exportSymbol('proto.gooseclip.goosecode.ide.v1.EditorStateResponse', null, global);
goog.exportSymbol('proto.gooseclip.goosecode.ide.v1.ErrorResponse', null, global);
goog.exportSymbol('proto.gooseclip.goosecode.ide.v1.FileCommandPush', null, global);
goog.exportSymbol('proto.gooseclip.goosecode.ide.v1.FileCommandPush.DataCase', null, global);
goog.exportSymbol('proto.gooseclip.goosecode.ide.v1.FileCommandType', null, global);
goog.exportSymbol('proto.gooseclip.goosecode.ide.v1.FindStringRequest', null, global);
goog.exportSymbol('proto.gooseclip.goosecode.ide.v1.FindStringResponse', null, global);
goog.exportSymbol('proto.gooseclip.goosecode.ide.v1.FindUsesRequest', null, global);
goog.exportSymbol('proto.gooseclip.goosecode.ide.v1.FindUsesResponse', null, global);
goog.exportSymbol('proto.gooseclip.goosecode.ide.v1.FollowPush', null, global);
goog.exportSymbol('proto.gooseclip.goosecode.ide.v1.FollowPush.DataCase', null, global);
goog.exportSymbol('proto.gooseclip.goosecode.ide.v1.FollowType', null, global);
goog.exportSymbol('proto.gooseclip.goosecode.ide.v1.GetFilesRequest', null, global);
goog.exportSymbol('proto.gooseclip.goosecode.ide.v1.GetFilesResponse', null, global);
goog.exportSymbol('proto.gooseclip.goosecode.ide.v1.GoToDefinitionRequest', null, global);
goog.exportSymbol('proto.gooseclip.goosecode.ide.v1.GoToDefinitionResponse', null, global);
goog.exportSymbol('proto.gooseclip.goosecode.ide.v1.HighlightPush', null, global);
goog.exportSymbol('proto.gooseclip.goosecode.ide.v1.ListFilesRequest', null, global);
goog.exportSymbol('proto.gooseclip.goosecode.ide.v1.ListFilesResponse', null, global);
goog.exportSymbol('proto.gooseclip.goosecode.ide.v1.Location', null, global);
goog.exportSymbol('proto.gooseclip.goosecode.ide.v1.LocationWithContext', null, global);
goog.exportSymbol('proto.gooseclip.goosecode.ide.v1.OpenFilesRequest', null, global);
goog.exportSymbol('proto.gooseclip.goosecode.ide.v1.OpenFilesResponse', null, global);
goog.exportSymbol('proto.gooseclip.goosecode.ide.v1.OpenPush', null, global);
goog.exportSymbol('proto.gooseclip.goosecode.ide.v1.Position', null, global);
goog.exportSymbol('proto.gooseclip.goosecode.ide.v1.PushMessage', null, global);
goog.exportSymbol('proto.gooseclip.goosecode.ide.v1.PushMessage.DataCase', null, global);
goog.exportSymbol('proto.gooseclip.goosecode.ide.v1.PushType', null, global);
goog.exportSymbol('proto.gooseclip.goosecode.ide.v1.Range', null, global);
goog.exportSymbol('proto.gooseclip.goosecode.ide.v1.ReferenceFollow', null, global);
goog.exportSymbol('proto.gooseclip.goosecode.ide.v1.RegeneratePush', null, global);
goog.exportSymbol('proto.gooseclip.goosecode.ide.v1.RegenerateType', null, global);
goog.exportSymbol('proto.gooseclip.goosecode.ide.v1.RenameRequest', null, global);
goog.exportSymbol('proto.gooseclip.goosecode.ide.v1.RenameResponse', null, global);
goog.exportSymbol('proto.gooseclip.goosecode.ide.v1.RepositoryDetailsRequest', null, global);
goog.exportSymbol('proto.gooseclip.goosecode.ide.v1.RepositoryDetailsResponse', null, global);
goog.exportSymbol('proto.gooseclip.goosecode.ide.v1.RequestMessage', null, global);
goog.exportSymbol('proto.gooseclip.goosecode.ide.v1.RequestMessage.DataCase', null, global);
goog.exportSymbol('proto.gooseclip.goosecode.ide.v1.RequestType', null, global);
goog.exportSymbol('proto.gooseclip.goosecode.ide.v1.ResponseMessage', null, global);
goog.exportSymbol('proto.gooseclip.goosecode.ide.v1.ResponseMessage.DataCase', null, global);
goog.exportSymbol('proto.gooseclip.goosecode.ide.v1.ResponseType', null, global);
goog.exportSymbol('proto.gooseclip.goosecode.ide.v1.SelectRangeRequest', null, global);
goog.exportSymbol('proto.gooseclip.goosecode.ide.v1.SelectRangeResponse', null, global);
goog.exportSymbol('proto.gooseclip.goosecode.ide.v1.SnippetContext', null, global);
goog.exportSymbol('proto.gooseclip.goosecode.ide.v1.SymbolKind', null, global);
goog.exportSymbol('proto.gooseclip.goosecode.ide.v1.VersionControlInfo', null, global);
goog.exportSymbol('proto.gooseclip.goosecode.ide.v1.WorkspaceDetails', null, global);
goog.exportSymbol('proto.gooseclip.goosecode.ide.v1.WorkspacesPush', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gooseclip.goosecode.ide.v1.RepositoryDetailsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gooseclip.goosecode.ide.v1.RepositoryDetailsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.gooseclip.goosecode.ide.v1.RepositoryDetailsRequest.displayName = 'proto.gooseclip.goosecode.ide.v1.RepositoryDetailsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gooseclip.goosecode.ide.v1.ListFilesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.gooseclip.goosecode.ide.v1.ListFilesRequest.repeatedFields_, null);
};
goog.inherits(proto.gooseclip.goosecode.ide.v1.ListFilesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.gooseclip.goosecode.ide.v1.ListFilesRequest.displayName = 'proto.gooseclip.goosecode.ide.v1.ListFilesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gooseclip.goosecode.ide.v1.OpenFilesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.gooseclip.goosecode.ide.v1.OpenFilesRequest.repeatedFields_, null);
};
goog.inherits(proto.gooseclip.goosecode.ide.v1.OpenFilesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.gooseclip.goosecode.ide.v1.OpenFilesRequest.displayName = 'proto.gooseclip.goosecode.ide.v1.OpenFilesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gooseclip.goosecode.ide.v1.GetFilesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.gooseclip.goosecode.ide.v1.GetFilesRequest.repeatedFields_, null);
};
goog.inherits(proto.gooseclip.goosecode.ide.v1.GetFilesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.gooseclip.goosecode.ide.v1.GetFilesRequest.displayName = 'proto.gooseclip.goosecode.ide.v1.GetFilesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gooseclip.goosecode.ide.v1.FindStringRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.gooseclip.goosecode.ide.v1.FindStringRequest.repeatedFields_, null);
};
goog.inherits(proto.gooseclip.goosecode.ide.v1.FindStringRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.gooseclip.goosecode.ide.v1.FindStringRequest.displayName = 'proto.gooseclip.goosecode.ide.v1.FindStringRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gooseclip.goosecode.ide.v1.SelectRangeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gooseclip.goosecode.ide.v1.SelectRangeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.gooseclip.goosecode.ide.v1.SelectRangeRequest.displayName = 'proto.gooseclip.goosecode.ide.v1.SelectRangeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gooseclip.goosecode.ide.v1.DescribeRangeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gooseclip.goosecode.ide.v1.DescribeRangeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.gooseclip.goosecode.ide.v1.DescribeRangeRequest.displayName = 'proto.gooseclip.goosecode.ide.v1.DescribeRangeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gooseclip.goosecode.ide.v1.GoToDefinitionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gooseclip.goosecode.ide.v1.GoToDefinitionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.gooseclip.goosecode.ide.v1.GoToDefinitionRequest.displayName = 'proto.gooseclip.goosecode.ide.v1.GoToDefinitionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gooseclip.goosecode.ide.v1.RenameRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gooseclip.goosecode.ide.v1.RenameRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.gooseclip.goosecode.ide.v1.RenameRequest.displayName = 'proto.gooseclip.goosecode.ide.v1.RenameRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gooseclip.goosecode.ide.v1.FindUsesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gooseclip.goosecode.ide.v1.FindUsesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.gooseclip.goosecode.ide.v1.FindUsesRequest.displayName = 'proto.gooseclip.goosecode.ide.v1.FindUsesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gooseclip.goosecode.ide.v1.RequestMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.gooseclip.goosecode.ide.v1.RequestMessage.oneofGroups_);
};
goog.inherits(proto.gooseclip.goosecode.ide.v1.RequestMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.gooseclip.goosecode.ide.v1.RequestMessage.displayName = 'proto.gooseclip.goosecode.ide.v1.RequestMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gooseclip.goosecode.ide.v1.RepositoryDetailsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gooseclip.goosecode.ide.v1.RepositoryDetailsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.gooseclip.goosecode.ide.v1.RepositoryDetailsResponse.displayName = 'proto.gooseclip.goosecode.ide.v1.RepositoryDetailsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gooseclip.goosecode.ide.v1.ListFilesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.gooseclip.goosecode.ide.v1.ListFilesResponse.repeatedFields_, null);
};
goog.inherits(proto.gooseclip.goosecode.ide.v1.ListFilesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.gooseclip.goosecode.ide.v1.ListFilesResponse.displayName = 'proto.gooseclip.goosecode.ide.v1.ListFilesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gooseclip.goosecode.ide.v1.OpenFilesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gooseclip.goosecode.ide.v1.OpenFilesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.gooseclip.goosecode.ide.v1.OpenFilesResponse.displayName = 'proto.gooseclip.goosecode.ide.v1.OpenFilesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gooseclip.goosecode.ide.v1.GetFilesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.gooseclip.goosecode.ide.v1.GetFilesResponse.repeatedFields_, null);
};
goog.inherits(proto.gooseclip.goosecode.ide.v1.GetFilesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.gooseclip.goosecode.ide.v1.GetFilesResponse.displayName = 'proto.gooseclip.goosecode.ide.v1.GetFilesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gooseclip.goosecode.ide.v1.Position = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gooseclip.goosecode.ide.v1.Position, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.gooseclip.goosecode.ide.v1.Position.displayName = 'proto.gooseclip.goosecode.ide.v1.Position';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gooseclip.goosecode.ide.v1.Range = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gooseclip.goosecode.ide.v1.Range, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.gooseclip.goosecode.ide.v1.Range.displayName = 'proto.gooseclip.goosecode.ide.v1.Range';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gooseclip.goosecode.ide.v1.Location = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gooseclip.goosecode.ide.v1.Location, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.gooseclip.goosecode.ide.v1.Location.displayName = 'proto.gooseclip.goosecode.ide.v1.Location';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gooseclip.goosecode.ide.v1.DocumentSymbol = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.gooseclip.goosecode.ide.v1.DocumentSymbol.repeatedFields_, null);
};
goog.inherits(proto.gooseclip.goosecode.ide.v1.DocumentSymbol, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.gooseclip.goosecode.ide.v1.DocumentSymbol.displayName = 'proto.gooseclip.goosecode.ide.v1.DocumentSymbol';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gooseclip.goosecode.ide.v1.FindStringResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.gooseclip.goosecode.ide.v1.FindStringResponse.repeatedFields_, null);
};
goog.inherits(proto.gooseclip.goosecode.ide.v1.FindStringResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.gooseclip.goosecode.ide.v1.FindStringResponse.displayName = 'proto.gooseclip.goosecode.ide.v1.FindStringResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gooseclip.goosecode.ide.v1.SelectRangeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gooseclip.goosecode.ide.v1.SelectRangeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.gooseclip.goosecode.ide.v1.SelectRangeResponse.displayName = 'proto.gooseclip.goosecode.ide.v1.SelectRangeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gooseclip.goosecode.ide.v1.DescribeRangeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.gooseclip.goosecode.ide.v1.DescribeRangeResponse.repeatedFields_, null);
};
goog.inherits(proto.gooseclip.goosecode.ide.v1.DescribeRangeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.gooseclip.goosecode.ide.v1.DescribeRangeResponse.displayName = 'proto.gooseclip.goosecode.ide.v1.DescribeRangeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gooseclip.goosecode.ide.v1.GoToDefinitionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gooseclip.goosecode.ide.v1.GoToDefinitionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.gooseclip.goosecode.ide.v1.GoToDefinitionResponse.displayName = 'proto.gooseclip.goosecode.ide.v1.GoToDefinitionResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gooseclip.goosecode.ide.v1.RenameResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gooseclip.goosecode.ide.v1.RenameResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.gooseclip.goosecode.ide.v1.RenameResponse.displayName = 'proto.gooseclip.goosecode.ide.v1.RenameResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gooseclip.goosecode.ide.v1.FindUsesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.gooseclip.goosecode.ide.v1.FindUsesResponse.repeatedFields_, null);
};
goog.inherits(proto.gooseclip.goosecode.ide.v1.FindUsesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.gooseclip.goosecode.ide.v1.FindUsesResponse.displayName = 'proto.gooseclip.goosecode.ide.v1.FindUsesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gooseclip.goosecode.ide.v1.EditorStateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gooseclip.goosecode.ide.v1.EditorStateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.gooseclip.goosecode.ide.v1.EditorStateResponse.displayName = 'proto.gooseclip.goosecode.ide.v1.EditorStateResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gooseclip.goosecode.ide.v1.ContentChangeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gooseclip.goosecode.ide.v1.ContentChangeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.gooseclip.goosecode.ide.v1.ContentChangeResponse.displayName = 'proto.gooseclip.goosecode.ide.v1.ContentChangeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gooseclip.goosecode.ide.v1.EditorDiagnosticsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gooseclip.goosecode.ide.v1.EditorDiagnosticsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.gooseclip.goosecode.ide.v1.EditorDiagnosticsResponse.displayName = 'proto.gooseclip.goosecode.ide.v1.EditorDiagnosticsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gooseclip.goosecode.ide.v1.CodeSourceIDResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gooseclip.goosecode.ide.v1.CodeSourceIDResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.gooseclip.goosecode.ide.v1.CodeSourceIDResponse.displayName = 'proto.gooseclip.goosecode.ide.v1.CodeSourceIDResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gooseclip.goosecode.ide.v1.ErrorResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gooseclip.goosecode.ide.v1.ErrorResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.gooseclip.goosecode.ide.v1.ErrorResponse.displayName = 'proto.gooseclip.goosecode.ide.v1.ErrorResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gooseclip.goosecode.ide.v1.ResponseMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, proto.gooseclip.goosecode.ide.v1.ResponseMessage.oneofGroups_);
};
goog.inherits(proto.gooseclip.goosecode.ide.v1.ResponseMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.gooseclip.goosecode.ide.v1.ResponseMessage.displayName = 'proto.gooseclip.goosecode.ide.v1.ResponseMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gooseclip.goosecode.ide.v1.OpenPush = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gooseclip.goosecode.ide.v1.OpenPush, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.gooseclip.goosecode.ide.v1.OpenPush.displayName = 'proto.gooseclip.goosecode.ide.v1.OpenPush';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gooseclip.goosecode.ide.v1.SnippetContext = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gooseclip.goosecode.ide.v1.SnippetContext, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.gooseclip.goosecode.ide.v1.SnippetContext.displayName = 'proto.gooseclip.goosecode.ide.v1.SnippetContext';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gooseclip.goosecode.ide.v1.CreateSnippetPush = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gooseclip.goosecode.ide.v1.CreateSnippetPush, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.gooseclip.goosecode.ide.v1.CreateSnippetPush.displayName = 'proto.gooseclip.goosecode.ide.v1.CreateSnippetPush';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gooseclip.goosecode.ide.v1.BookmarkPush = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gooseclip.goosecode.ide.v1.BookmarkPush, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.gooseclip.goosecode.ide.v1.BookmarkPush.displayName = 'proto.gooseclip.goosecode.ide.v1.BookmarkPush';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gooseclip.goosecode.ide.v1.HighlightPush = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gooseclip.goosecode.ide.v1.HighlightPush, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.gooseclip.goosecode.ide.v1.HighlightPush.displayName = 'proto.gooseclip.goosecode.ide.v1.HighlightPush';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gooseclip.goosecode.ide.v1.LocationWithContext = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gooseclip.goosecode.ide.v1.LocationWithContext, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.gooseclip.goosecode.ide.v1.LocationWithContext.displayName = 'proto.gooseclip.goosecode.ide.v1.LocationWithContext';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gooseclip.goosecode.ide.v1.DefinitionFollow = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gooseclip.goosecode.ide.v1.DefinitionFollow, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.gooseclip.goosecode.ide.v1.DefinitionFollow.displayName = 'proto.gooseclip.goosecode.ide.v1.DefinitionFollow';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gooseclip.goosecode.ide.v1.ReferenceFollow = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.gooseclip.goosecode.ide.v1.ReferenceFollow.repeatedFields_, null);
};
goog.inherits(proto.gooseclip.goosecode.ide.v1.ReferenceFollow, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.gooseclip.goosecode.ide.v1.ReferenceFollow.displayName = 'proto.gooseclip.goosecode.ide.v1.ReferenceFollow';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gooseclip.goosecode.ide.v1.FollowPush = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.gooseclip.goosecode.ide.v1.FollowPush.oneofGroups_);
};
goog.inherits(proto.gooseclip.goosecode.ide.v1.FollowPush, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.gooseclip.goosecode.ide.v1.FollowPush.displayName = 'proto.gooseclip.goosecode.ide.v1.FollowPush';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gooseclip.goosecode.ide.v1.WorkspaceDetails = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gooseclip.goosecode.ide.v1.WorkspaceDetails, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.gooseclip.goosecode.ide.v1.WorkspaceDetails.displayName = 'proto.gooseclip.goosecode.ide.v1.WorkspaceDetails';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gooseclip.goosecode.ide.v1.WorkspacesPush = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.gooseclip.goosecode.ide.v1.WorkspacesPush.repeatedFields_, null);
};
goog.inherits(proto.gooseclip.goosecode.ide.v1.WorkspacesPush, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.gooseclip.goosecode.ide.v1.WorkspacesPush.displayName = 'proto.gooseclip.goosecode.ide.v1.WorkspacesPush';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gooseclip.goosecode.ide.v1.AppCommandPush = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gooseclip.goosecode.ide.v1.AppCommandPush, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.gooseclip.goosecode.ide.v1.AppCommandPush.displayName = 'proto.gooseclip.goosecode.ide.v1.AppCommandPush';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gooseclip.goosecode.ide.v1.RegeneratePush = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gooseclip.goosecode.ide.v1.RegeneratePush, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.gooseclip.goosecode.ide.v1.RegeneratePush.displayName = 'proto.gooseclip.goosecode.ide.v1.RegeneratePush';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gooseclip.goosecode.ide.v1.ActiveSessionPush = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.gooseclip.goosecode.ide.v1.ActiveSessionPush.oneofGroups_);
};
goog.inherits(proto.gooseclip.goosecode.ide.v1.ActiveSessionPush, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.gooseclip.goosecode.ide.v1.ActiveSessionPush.displayName = 'proto.gooseclip.goosecode.ide.v1.ActiveSessionPush';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gooseclip.goosecode.ide.v1.VersionControlInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gooseclip.goosecode.ide.v1.VersionControlInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.gooseclip.goosecode.ide.v1.VersionControlInfo.displayName = 'proto.gooseclip.goosecode.ide.v1.VersionControlInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gooseclip.goosecode.ide.v1.FileCommandPush = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.gooseclip.goosecode.ide.v1.FileCommandPush.oneofGroups_);
};
goog.inherits(proto.gooseclip.goosecode.ide.v1.FileCommandPush, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.gooseclip.goosecode.ide.v1.FileCommandPush.displayName = 'proto.gooseclip.goosecode.ide.v1.FileCommandPush';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gooseclip.goosecode.ide.v1.PushMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.gooseclip.goosecode.ide.v1.PushMessage.oneofGroups_);
};
goog.inherits(proto.gooseclip.goosecode.ide.v1.PushMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.gooseclip.goosecode.ide.v1.PushMessage.displayName = 'proto.gooseclip.goosecode.ide.v1.PushMessage';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gooseclip.goosecode.ide.v1.RepositoryDetailsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.gooseclip.goosecode.ide.v1.RepositoryDetailsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gooseclip.goosecode.ide.v1.RepositoryDetailsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.RepositoryDetailsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gooseclip.goosecode.ide.v1.RepositoryDetailsRequest}
 */
proto.gooseclip.goosecode.ide.v1.RepositoryDetailsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseclip.goosecode.ide.v1.RepositoryDetailsRequest;
  return proto.gooseclip.goosecode.ide.v1.RepositoryDetailsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gooseclip.goosecode.ide.v1.RepositoryDetailsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gooseclip.goosecode.ide.v1.RepositoryDetailsRequest}
 */
proto.gooseclip.goosecode.ide.v1.RepositoryDetailsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gooseclip.goosecode.ide.v1.RepositoryDetailsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gooseclip.goosecode.ide.v1.RepositoryDetailsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gooseclip.goosecode.ide.v1.RepositoryDetailsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.RepositoryDetailsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.gooseclip.goosecode.ide.v1.ListFilesRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gooseclip.goosecode.ide.v1.ListFilesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.gooseclip.goosecode.ide.v1.ListFilesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gooseclip.goosecode.ide.v1.ListFilesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.ListFilesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    excludedDirList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gooseclip.goosecode.ide.v1.ListFilesRequest}
 */
proto.gooseclip.goosecode.ide.v1.ListFilesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseclip.goosecode.ide.v1.ListFilesRequest;
  return proto.gooseclip.goosecode.ide.v1.ListFilesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gooseclip.goosecode.ide.v1.ListFilesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gooseclip.goosecode.ide.v1.ListFilesRequest}
 */
proto.gooseclip.goosecode.ide.v1.ListFilesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addExcludedDir(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gooseclip.goosecode.ide.v1.ListFilesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gooseclip.goosecode.ide.v1.ListFilesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gooseclip.goosecode.ide.v1.ListFilesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.ListFilesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExcludedDirList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string excluded_dir = 1;
 * @return {!Array<string>}
 */
proto.gooseclip.goosecode.ide.v1.ListFilesRequest.prototype.getExcludedDirList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.gooseclip.goosecode.ide.v1.ListFilesRequest} returns this
 */
proto.gooseclip.goosecode.ide.v1.ListFilesRequest.prototype.setExcludedDirList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.gooseclip.goosecode.ide.v1.ListFilesRequest} returns this
 */
proto.gooseclip.goosecode.ide.v1.ListFilesRequest.prototype.addExcludedDir = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.gooseclip.goosecode.ide.v1.ListFilesRequest} returns this
 */
proto.gooseclip.goosecode.ide.v1.ListFilesRequest.prototype.clearExcludedDirList = function() {
  return this.setExcludedDirList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.gooseclip.goosecode.ide.v1.OpenFilesRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gooseclip.goosecode.ide.v1.OpenFilesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.gooseclip.goosecode.ide.v1.OpenFilesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gooseclip.goosecode.ide.v1.OpenFilesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.OpenFilesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    filePathsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gooseclip.goosecode.ide.v1.OpenFilesRequest}
 */
proto.gooseclip.goosecode.ide.v1.OpenFilesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseclip.goosecode.ide.v1.OpenFilesRequest;
  return proto.gooseclip.goosecode.ide.v1.OpenFilesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gooseclip.goosecode.ide.v1.OpenFilesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gooseclip.goosecode.ide.v1.OpenFilesRequest}
 */
proto.gooseclip.goosecode.ide.v1.OpenFilesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addFilePaths(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gooseclip.goosecode.ide.v1.OpenFilesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gooseclip.goosecode.ide.v1.OpenFilesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gooseclip.goosecode.ide.v1.OpenFilesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.OpenFilesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilePathsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string file_paths = 1;
 * @return {!Array<string>}
 */
proto.gooseclip.goosecode.ide.v1.OpenFilesRequest.prototype.getFilePathsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.gooseclip.goosecode.ide.v1.OpenFilesRequest} returns this
 */
proto.gooseclip.goosecode.ide.v1.OpenFilesRequest.prototype.setFilePathsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.gooseclip.goosecode.ide.v1.OpenFilesRequest} returns this
 */
proto.gooseclip.goosecode.ide.v1.OpenFilesRequest.prototype.addFilePaths = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.gooseclip.goosecode.ide.v1.OpenFilesRequest} returns this
 */
proto.gooseclip.goosecode.ide.v1.OpenFilesRequest.prototype.clearFilePathsList = function() {
  return this.setFilePathsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.gooseclip.goosecode.ide.v1.GetFilesRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gooseclip.goosecode.ide.v1.GetFilesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.gooseclip.goosecode.ide.v1.GetFilesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gooseclip.goosecode.ide.v1.GetFilesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.GetFilesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    filePathsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gooseclip.goosecode.ide.v1.GetFilesRequest}
 */
proto.gooseclip.goosecode.ide.v1.GetFilesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseclip.goosecode.ide.v1.GetFilesRequest;
  return proto.gooseclip.goosecode.ide.v1.GetFilesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gooseclip.goosecode.ide.v1.GetFilesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gooseclip.goosecode.ide.v1.GetFilesRequest}
 */
proto.gooseclip.goosecode.ide.v1.GetFilesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addFilePaths(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gooseclip.goosecode.ide.v1.GetFilesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gooseclip.goosecode.ide.v1.GetFilesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gooseclip.goosecode.ide.v1.GetFilesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.GetFilesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilePathsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string file_paths = 1;
 * @return {!Array<string>}
 */
proto.gooseclip.goosecode.ide.v1.GetFilesRequest.prototype.getFilePathsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.gooseclip.goosecode.ide.v1.GetFilesRequest} returns this
 */
proto.gooseclip.goosecode.ide.v1.GetFilesRequest.prototype.setFilePathsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.gooseclip.goosecode.ide.v1.GetFilesRequest} returns this
 */
proto.gooseclip.goosecode.ide.v1.GetFilesRequest.prototype.addFilePaths = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.gooseclip.goosecode.ide.v1.GetFilesRequest} returns this
 */
proto.gooseclip.goosecode.ide.v1.GetFilesRequest.prototype.clearFilePathsList = function() {
  return this.setFilePathsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.gooseclip.goosecode.ide.v1.FindStringRequest.repeatedFields_ = [2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gooseclip.goosecode.ide.v1.FindStringRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.gooseclip.goosecode.ide.v1.FindStringRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gooseclip.goosecode.ide.v1.FindStringRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.FindStringRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    searchPattern: jspb.Message.getFieldWithDefault(msg, 1, ""),
    includedFilesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    excludedFilesList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gooseclip.goosecode.ide.v1.FindStringRequest}
 */
proto.gooseclip.goosecode.ide.v1.FindStringRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseclip.goosecode.ide.v1.FindStringRequest;
  return proto.gooseclip.goosecode.ide.v1.FindStringRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gooseclip.goosecode.ide.v1.FindStringRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gooseclip.goosecode.ide.v1.FindStringRequest}
 */
proto.gooseclip.goosecode.ide.v1.FindStringRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSearchPattern(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addIncludedFiles(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addExcludedFiles(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gooseclip.goosecode.ide.v1.FindStringRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gooseclip.goosecode.ide.v1.FindStringRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gooseclip.goosecode.ide.v1.FindStringRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.FindStringRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSearchPattern();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIncludedFilesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getExcludedFilesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional string search_pattern = 1;
 * @return {string}
 */
proto.gooseclip.goosecode.ide.v1.FindStringRequest.prototype.getSearchPattern = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.gooseclip.goosecode.ide.v1.FindStringRequest} returns this
 */
proto.gooseclip.goosecode.ide.v1.FindStringRequest.prototype.setSearchPattern = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string included_files = 2;
 * @return {!Array<string>}
 */
proto.gooseclip.goosecode.ide.v1.FindStringRequest.prototype.getIncludedFilesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.gooseclip.goosecode.ide.v1.FindStringRequest} returns this
 */
proto.gooseclip.goosecode.ide.v1.FindStringRequest.prototype.setIncludedFilesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.gooseclip.goosecode.ide.v1.FindStringRequest} returns this
 */
proto.gooseclip.goosecode.ide.v1.FindStringRequest.prototype.addIncludedFiles = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.gooseclip.goosecode.ide.v1.FindStringRequest} returns this
 */
proto.gooseclip.goosecode.ide.v1.FindStringRequest.prototype.clearIncludedFilesList = function() {
  return this.setIncludedFilesList([]);
};


/**
 * repeated string excluded_files = 3;
 * @return {!Array<string>}
 */
proto.gooseclip.goosecode.ide.v1.FindStringRequest.prototype.getExcludedFilesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.gooseclip.goosecode.ide.v1.FindStringRequest} returns this
 */
proto.gooseclip.goosecode.ide.v1.FindStringRequest.prototype.setExcludedFilesList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.gooseclip.goosecode.ide.v1.FindStringRequest} returns this
 */
proto.gooseclip.goosecode.ide.v1.FindStringRequest.prototype.addExcludedFiles = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.gooseclip.goosecode.ide.v1.FindStringRequest} returns this
 */
proto.gooseclip.goosecode.ide.v1.FindStringRequest.prototype.clearExcludedFilesList = function() {
  return this.setExcludedFilesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gooseclip.goosecode.ide.v1.SelectRangeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.gooseclip.goosecode.ide.v1.SelectRangeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gooseclip.goosecode.ide.v1.SelectRangeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.SelectRangeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    location: (f = msg.getLocation()) && proto.gooseclip.goosecode.ide.v1.Location.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gooseclip.goosecode.ide.v1.SelectRangeRequest}
 */
proto.gooseclip.goosecode.ide.v1.SelectRangeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseclip.goosecode.ide.v1.SelectRangeRequest;
  return proto.gooseclip.goosecode.ide.v1.SelectRangeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gooseclip.goosecode.ide.v1.SelectRangeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gooseclip.goosecode.ide.v1.SelectRangeRequest}
 */
proto.gooseclip.goosecode.ide.v1.SelectRangeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.gooseclip.goosecode.ide.v1.Location;
      reader.readMessage(value,proto.gooseclip.goosecode.ide.v1.Location.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gooseclip.goosecode.ide.v1.SelectRangeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gooseclip.goosecode.ide.v1.SelectRangeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gooseclip.goosecode.ide.v1.SelectRangeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.SelectRangeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.gooseclip.goosecode.ide.v1.Location.serializeBinaryToWriter
    );
  }
};


/**
 * optional Location location = 1;
 * @return {?proto.gooseclip.goosecode.ide.v1.Location}
 */
proto.gooseclip.goosecode.ide.v1.SelectRangeRequest.prototype.getLocation = function() {
  return /** @type{?proto.gooseclip.goosecode.ide.v1.Location} */ (
    jspb.Message.getWrapperField(this, proto.gooseclip.goosecode.ide.v1.Location, 1));
};


/**
 * @param {?proto.gooseclip.goosecode.ide.v1.Location|undefined} value
 * @return {!proto.gooseclip.goosecode.ide.v1.SelectRangeRequest} returns this
*/
proto.gooseclip.goosecode.ide.v1.SelectRangeRequest.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.gooseclip.goosecode.ide.v1.SelectRangeRequest} returns this
 */
proto.gooseclip.goosecode.ide.v1.SelectRangeRequest.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gooseclip.goosecode.ide.v1.SelectRangeRequest.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gooseclip.goosecode.ide.v1.DescribeRangeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.gooseclip.goosecode.ide.v1.DescribeRangeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gooseclip.goosecode.ide.v1.DescribeRangeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.DescribeRangeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    location: (f = msg.getLocation()) && proto.gooseclip.goosecode.ide.v1.Location.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gooseclip.goosecode.ide.v1.DescribeRangeRequest}
 */
proto.gooseclip.goosecode.ide.v1.DescribeRangeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseclip.goosecode.ide.v1.DescribeRangeRequest;
  return proto.gooseclip.goosecode.ide.v1.DescribeRangeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gooseclip.goosecode.ide.v1.DescribeRangeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gooseclip.goosecode.ide.v1.DescribeRangeRequest}
 */
proto.gooseclip.goosecode.ide.v1.DescribeRangeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.gooseclip.goosecode.ide.v1.Location;
      reader.readMessage(value,proto.gooseclip.goosecode.ide.v1.Location.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gooseclip.goosecode.ide.v1.DescribeRangeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gooseclip.goosecode.ide.v1.DescribeRangeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gooseclip.goosecode.ide.v1.DescribeRangeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.DescribeRangeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.gooseclip.goosecode.ide.v1.Location.serializeBinaryToWriter
    );
  }
};


/**
 * optional Location location = 1;
 * @return {?proto.gooseclip.goosecode.ide.v1.Location}
 */
proto.gooseclip.goosecode.ide.v1.DescribeRangeRequest.prototype.getLocation = function() {
  return /** @type{?proto.gooseclip.goosecode.ide.v1.Location} */ (
    jspb.Message.getWrapperField(this, proto.gooseclip.goosecode.ide.v1.Location, 1));
};


/**
 * @param {?proto.gooseclip.goosecode.ide.v1.Location|undefined} value
 * @return {!proto.gooseclip.goosecode.ide.v1.DescribeRangeRequest} returns this
*/
proto.gooseclip.goosecode.ide.v1.DescribeRangeRequest.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.gooseclip.goosecode.ide.v1.DescribeRangeRequest} returns this
 */
proto.gooseclip.goosecode.ide.v1.DescribeRangeRequest.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gooseclip.goosecode.ide.v1.DescribeRangeRequest.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gooseclip.goosecode.ide.v1.GoToDefinitionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.gooseclip.goosecode.ide.v1.GoToDefinitionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gooseclip.goosecode.ide.v1.GoToDefinitionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.GoToDefinitionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    location: (f = msg.getLocation()) && proto.gooseclip.goosecode.ide.v1.Location.toObject(includeInstance, f),
    select: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gooseclip.goosecode.ide.v1.GoToDefinitionRequest}
 */
proto.gooseclip.goosecode.ide.v1.GoToDefinitionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseclip.goosecode.ide.v1.GoToDefinitionRequest;
  return proto.gooseclip.goosecode.ide.v1.GoToDefinitionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gooseclip.goosecode.ide.v1.GoToDefinitionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gooseclip.goosecode.ide.v1.GoToDefinitionRequest}
 */
proto.gooseclip.goosecode.ide.v1.GoToDefinitionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.gooseclip.goosecode.ide.v1.Location;
      reader.readMessage(value,proto.gooseclip.goosecode.ide.v1.Location.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSelect(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gooseclip.goosecode.ide.v1.GoToDefinitionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gooseclip.goosecode.ide.v1.GoToDefinitionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gooseclip.goosecode.ide.v1.GoToDefinitionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.GoToDefinitionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.gooseclip.goosecode.ide.v1.Location.serializeBinaryToWriter
    );
  }
  f = message.getSelect();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional Location location = 1;
 * @return {?proto.gooseclip.goosecode.ide.v1.Location}
 */
proto.gooseclip.goosecode.ide.v1.GoToDefinitionRequest.prototype.getLocation = function() {
  return /** @type{?proto.gooseclip.goosecode.ide.v1.Location} */ (
    jspb.Message.getWrapperField(this, proto.gooseclip.goosecode.ide.v1.Location, 1));
};


/**
 * @param {?proto.gooseclip.goosecode.ide.v1.Location|undefined} value
 * @return {!proto.gooseclip.goosecode.ide.v1.GoToDefinitionRequest} returns this
*/
proto.gooseclip.goosecode.ide.v1.GoToDefinitionRequest.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.gooseclip.goosecode.ide.v1.GoToDefinitionRequest} returns this
 */
proto.gooseclip.goosecode.ide.v1.GoToDefinitionRequest.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gooseclip.goosecode.ide.v1.GoToDefinitionRequest.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool select = 2;
 * @return {boolean}
 */
proto.gooseclip.goosecode.ide.v1.GoToDefinitionRequest.prototype.getSelect = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.gooseclip.goosecode.ide.v1.GoToDefinitionRequest} returns this
 */
proto.gooseclip.goosecode.ide.v1.GoToDefinitionRequest.prototype.setSelect = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gooseclip.goosecode.ide.v1.RenameRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.gooseclip.goosecode.ide.v1.RenameRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gooseclip.goosecode.ide.v1.RenameRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.RenameRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    location: (f = msg.getLocation()) && proto.gooseclip.goosecode.ide.v1.Location.toObject(includeInstance, f),
    newName: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gooseclip.goosecode.ide.v1.RenameRequest}
 */
proto.gooseclip.goosecode.ide.v1.RenameRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseclip.goosecode.ide.v1.RenameRequest;
  return proto.gooseclip.goosecode.ide.v1.RenameRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gooseclip.goosecode.ide.v1.RenameRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gooseclip.goosecode.ide.v1.RenameRequest}
 */
proto.gooseclip.goosecode.ide.v1.RenameRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.gooseclip.goosecode.ide.v1.Location;
      reader.readMessage(value,proto.gooseclip.goosecode.ide.v1.Location.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNewName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gooseclip.goosecode.ide.v1.RenameRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gooseclip.goosecode.ide.v1.RenameRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gooseclip.goosecode.ide.v1.RenameRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.RenameRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.gooseclip.goosecode.ide.v1.Location.serializeBinaryToWriter
    );
  }
  f = message.getNewName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional Location location = 1;
 * @return {?proto.gooseclip.goosecode.ide.v1.Location}
 */
proto.gooseclip.goosecode.ide.v1.RenameRequest.prototype.getLocation = function() {
  return /** @type{?proto.gooseclip.goosecode.ide.v1.Location} */ (
    jspb.Message.getWrapperField(this, proto.gooseclip.goosecode.ide.v1.Location, 1));
};


/**
 * @param {?proto.gooseclip.goosecode.ide.v1.Location|undefined} value
 * @return {!proto.gooseclip.goosecode.ide.v1.RenameRequest} returns this
*/
proto.gooseclip.goosecode.ide.v1.RenameRequest.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.gooseclip.goosecode.ide.v1.RenameRequest} returns this
 */
proto.gooseclip.goosecode.ide.v1.RenameRequest.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gooseclip.goosecode.ide.v1.RenameRequest.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string new_name = 2;
 * @return {string}
 */
proto.gooseclip.goosecode.ide.v1.RenameRequest.prototype.getNewName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.gooseclip.goosecode.ide.v1.RenameRequest} returns this
 */
proto.gooseclip.goosecode.ide.v1.RenameRequest.prototype.setNewName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gooseclip.goosecode.ide.v1.FindUsesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.gooseclip.goosecode.ide.v1.FindUsesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gooseclip.goosecode.ide.v1.FindUsesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.FindUsesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    location: (f = msg.getLocation()) && proto.gooseclip.goosecode.ide.v1.Location.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gooseclip.goosecode.ide.v1.FindUsesRequest}
 */
proto.gooseclip.goosecode.ide.v1.FindUsesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseclip.goosecode.ide.v1.FindUsesRequest;
  return proto.gooseclip.goosecode.ide.v1.FindUsesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gooseclip.goosecode.ide.v1.FindUsesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gooseclip.goosecode.ide.v1.FindUsesRequest}
 */
proto.gooseclip.goosecode.ide.v1.FindUsesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.gooseclip.goosecode.ide.v1.Location;
      reader.readMessage(value,proto.gooseclip.goosecode.ide.v1.Location.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gooseclip.goosecode.ide.v1.FindUsesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gooseclip.goosecode.ide.v1.FindUsesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gooseclip.goosecode.ide.v1.FindUsesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.FindUsesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.gooseclip.goosecode.ide.v1.Location.serializeBinaryToWriter
    );
  }
};


/**
 * optional Location location = 1;
 * @return {?proto.gooseclip.goosecode.ide.v1.Location}
 */
proto.gooseclip.goosecode.ide.v1.FindUsesRequest.prototype.getLocation = function() {
  return /** @type{?proto.gooseclip.goosecode.ide.v1.Location} */ (
    jspb.Message.getWrapperField(this, proto.gooseclip.goosecode.ide.v1.Location, 1));
};


/**
 * @param {?proto.gooseclip.goosecode.ide.v1.Location|undefined} value
 * @return {!proto.gooseclip.goosecode.ide.v1.FindUsesRequest} returns this
*/
proto.gooseclip.goosecode.ide.v1.FindUsesRequest.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.gooseclip.goosecode.ide.v1.FindUsesRequest} returns this
 */
proto.gooseclip.goosecode.ide.v1.FindUsesRequest.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gooseclip.goosecode.ide.v1.FindUsesRequest.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.gooseclip.goosecode.ide.v1.RequestMessage.oneofGroups_ = [[4,5,6,7,8,9,10,11,12]];

/**
 * @enum {number}
 */
proto.gooseclip.goosecode.ide.v1.RequestMessage.DataCase = {
  DATA_NOT_SET: 0,
  LIST_FILES_REQUEST: 4,
  GET_FILES_REQUEST: 5,
  OPEN_FILES_REQUEST: 6,
  FIND_STRING_REQUEST: 7,
  SELECT_RANGE_REQUEST: 8,
  DESCRIBE_RANGE_REQUEST: 9,
  GO_TO_DEFINITION_REQUEST: 10,
  RENAME_REQUEST: 11,
  FIND_USES_REQUEST: 12
};

/**
 * @return {proto.gooseclip.goosecode.ide.v1.RequestMessage.DataCase}
 */
proto.gooseclip.goosecode.ide.v1.RequestMessage.prototype.getDataCase = function() {
  return /** @type {proto.gooseclip.goosecode.ide.v1.RequestMessage.DataCase} */(jspb.Message.computeOneofCase(this, proto.gooseclip.goosecode.ide.v1.RequestMessage.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gooseclip.goosecode.ide.v1.RequestMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.gooseclip.goosecode.ide.v1.RequestMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gooseclip.goosecode.ide.v1.RequestMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.RequestMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    repositorySnapshotFingerprint: jspb.Message.getFieldWithDefault(msg, 2, ""),
    listFilesRequest: (f = msg.getListFilesRequest()) && proto.gooseclip.goosecode.ide.v1.ListFilesRequest.toObject(includeInstance, f),
    getFilesRequest: (f = msg.getGetFilesRequest()) && proto.gooseclip.goosecode.ide.v1.GetFilesRequest.toObject(includeInstance, f),
    openFilesRequest: (f = msg.getOpenFilesRequest()) && proto.gooseclip.goosecode.ide.v1.OpenFilesRequest.toObject(includeInstance, f),
    findStringRequest: (f = msg.getFindStringRequest()) && proto.gooseclip.goosecode.ide.v1.FindStringRequest.toObject(includeInstance, f),
    selectRangeRequest: (f = msg.getSelectRangeRequest()) && proto.gooseclip.goosecode.ide.v1.SelectRangeRequest.toObject(includeInstance, f),
    describeRangeRequest: (f = msg.getDescribeRangeRequest()) && proto.gooseclip.goosecode.ide.v1.DescribeRangeRequest.toObject(includeInstance, f),
    goToDefinitionRequest: (f = msg.getGoToDefinitionRequest()) && proto.gooseclip.goosecode.ide.v1.GoToDefinitionRequest.toObject(includeInstance, f),
    renameRequest: (f = msg.getRenameRequest()) && proto.gooseclip.goosecode.ide.v1.RenameRequest.toObject(includeInstance, f),
    findUsesRequest: (f = msg.getFindUsesRequest()) && proto.gooseclip.goosecode.ide.v1.FindUsesRequest.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gooseclip.goosecode.ide.v1.RequestMessage}
 */
proto.gooseclip.goosecode.ide.v1.RequestMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseclip.goosecode.ide.v1.RequestMessage;
  return proto.gooseclip.goosecode.ide.v1.RequestMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gooseclip.goosecode.ide.v1.RequestMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gooseclip.goosecode.ide.v1.RequestMessage}
 */
proto.gooseclip.goosecode.ide.v1.RequestMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.gooseclip.goosecode.ide.v1.RequestType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRepositorySnapshotFingerprint(value);
      break;
    case 4:
      var value = new proto.gooseclip.goosecode.ide.v1.ListFilesRequest;
      reader.readMessage(value,proto.gooseclip.goosecode.ide.v1.ListFilesRequest.deserializeBinaryFromReader);
      msg.setListFilesRequest(value);
      break;
    case 5:
      var value = new proto.gooseclip.goosecode.ide.v1.GetFilesRequest;
      reader.readMessage(value,proto.gooseclip.goosecode.ide.v1.GetFilesRequest.deserializeBinaryFromReader);
      msg.setGetFilesRequest(value);
      break;
    case 6:
      var value = new proto.gooseclip.goosecode.ide.v1.OpenFilesRequest;
      reader.readMessage(value,proto.gooseclip.goosecode.ide.v1.OpenFilesRequest.deserializeBinaryFromReader);
      msg.setOpenFilesRequest(value);
      break;
    case 7:
      var value = new proto.gooseclip.goosecode.ide.v1.FindStringRequest;
      reader.readMessage(value,proto.gooseclip.goosecode.ide.v1.FindStringRequest.deserializeBinaryFromReader);
      msg.setFindStringRequest(value);
      break;
    case 8:
      var value = new proto.gooseclip.goosecode.ide.v1.SelectRangeRequest;
      reader.readMessage(value,proto.gooseclip.goosecode.ide.v1.SelectRangeRequest.deserializeBinaryFromReader);
      msg.setSelectRangeRequest(value);
      break;
    case 9:
      var value = new proto.gooseclip.goosecode.ide.v1.DescribeRangeRequest;
      reader.readMessage(value,proto.gooseclip.goosecode.ide.v1.DescribeRangeRequest.deserializeBinaryFromReader);
      msg.setDescribeRangeRequest(value);
      break;
    case 10:
      var value = new proto.gooseclip.goosecode.ide.v1.GoToDefinitionRequest;
      reader.readMessage(value,proto.gooseclip.goosecode.ide.v1.GoToDefinitionRequest.deserializeBinaryFromReader);
      msg.setGoToDefinitionRequest(value);
      break;
    case 11:
      var value = new proto.gooseclip.goosecode.ide.v1.RenameRequest;
      reader.readMessage(value,proto.gooseclip.goosecode.ide.v1.RenameRequest.deserializeBinaryFromReader);
      msg.setRenameRequest(value);
      break;
    case 12:
      var value = new proto.gooseclip.goosecode.ide.v1.FindUsesRequest;
      reader.readMessage(value,proto.gooseclip.goosecode.ide.v1.FindUsesRequest.deserializeBinaryFromReader);
      msg.setFindUsesRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gooseclip.goosecode.ide.v1.RequestMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gooseclip.goosecode.ide.v1.RequestMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gooseclip.goosecode.ide.v1.RequestMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.RequestMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getRepositorySnapshotFingerprint();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getListFilesRequest();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.gooseclip.goosecode.ide.v1.ListFilesRequest.serializeBinaryToWriter
    );
  }
  f = message.getGetFilesRequest();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.gooseclip.goosecode.ide.v1.GetFilesRequest.serializeBinaryToWriter
    );
  }
  f = message.getOpenFilesRequest();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.gooseclip.goosecode.ide.v1.OpenFilesRequest.serializeBinaryToWriter
    );
  }
  f = message.getFindStringRequest();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.gooseclip.goosecode.ide.v1.FindStringRequest.serializeBinaryToWriter
    );
  }
  f = message.getSelectRangeRequest();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.gooseclip.goosecode.ide.v1.SelectRangeRequest.serializeBinaryToWriter
    );
  }
  f = message.getDescribeRangeRequest();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.gooseclip.goosecode.ide.v1.DescribeRangeRequest.serializeBinaryToWriter
    );
  }
  f = message.getGoToDefinitionRequest();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.gooseclip.goosecode.ide.v1.GoToDefinitionRequest.serializeBinaryToWriter
    );
  }
  f = message.getRenameRequest();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.gooseclip.goosecode.ide.v1.RenameRequest.serializeBinaryToWriter
    );
  }
  f = message.getFindUsesRequest();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.gooseclip.goosecode.ide.v1.FindUsesRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional RequestType type = 1;
 * @return {!proto.gooseclip.goosecode.ide.v1.RequestType}
 */
proto.gooseclip.goosecode.ide.v1.RequestMessage.prototype.getType = function() {
  return /** @type {!proto.gooseclip.goosecode.ide.v1.RequestType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.gooseclip.goosecode.ide.v1.RequestType} value
 * @return {!proto.gooseclip.goosecode.ide.v1.RequestMessage} returns this
 */
proto.gooseclip.goosecode.ide.v1.RequestMessage.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string repository_snapshot_fingerprint = 2;
 * @return {string}
 */
proto.gooseclip.goosecode.ide.v1.RequestMessage.prototype.getRepositorySnapshotFingerprint = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.gooseclip.goosecode.ide.v1.RequestMessage} returns this
 */
proto.gooseclip.goosecode.ide.v1.RequestMessage.prototype.setRepositorySnapshotFingerprint = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional ListFilesRequest list_files_request = 4;
 * @return {?proto.gooseclip.goosecode.ide.v1.ListFilesRequest}
 */
proto.gooseclip.goosecode.ide.v1.RequestMessage.prototype.getListFilesRequest = function() {
  return /** @type{?proto.gooseclip.goosecode.ide.v1.ListFilesRequest} */ (
    jspb.Message.getWrapperField(this, proto.gooseclip.goosecode.ide.v1.ListFilesRequest, 4));
};


/**
 * @param {?proto.gooseclip.goosecode.ide.v1.ListFilesRequest|undefined} value
 * @return {!proto.gooseclip.goosecode.ide.v1.RequestMessage} returns this
*/
proto.gooseclip.goosecode.ide.v1.RequestMessage.prototype.setListFilesRequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.gooseclip.goosecode.ide.v1.RequestMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.gooseclip.goosecode.ide.v1.RequestMessage} returns this
 */
proto.gooseclip.goosecode.ide.v1.RequestMessage.prototype.clearListFilesRequest = function() {
  return this.setListFilesRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gooseclip.goosecode.ide.v1.RequestMessage.prototype.hasListFilesRequest = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional GetFilesRequest get_files_request = 5;
 * @return {?proto.gooseclip.goosecode.ide.v1.GetFilesRequest}
 */
proto.gooseclip.goosecode.ide.v1.RequestMessage.prototype.getGetFilesRequest = function() {
  return /** @type{?proto.gooseclip.goosecode.ide.v1.GetFilesRequest} */ (
    jspb.Message.getWrapperField(this, proto.gooseclip.goosecode.ide.v1.GetFilesRequest, 5));
};


/**
 * @param {?proto.gooseclip.goosecode.ide.v1.GetFilesRequest|undefined} value
 * @return {!proto.gooseclip.goosecode.ide.v1.RequestMessage} returns this
*/
proto.gooseclip.goosecode.ide.v1.RequestMessage.prototype.setGetFilesRequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.gooseclip.goosecode.ide.v1.RequestMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.gooseclip.goosecode.ide.v1.RequestMessage} returns this
 */
proto.gooseclip.goosecode.ide.v1.RequestMessage.prototype.clearGetFilesRequest = function() {
  return this.setGetFilesRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gooseclip.goosecode.ide.v1.RequestMessage.prototype.hasGetFilesRequest = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional OpenFilesRequest open_files_request = 6;
 * @return {?proto.gooseclip.goosecode.ide.v1.OpenFilesRequest}
 */
proto.gooseclip.goosecode.ide.v1.RequestMessage.prototype.getOpenFilesRequest = function() {
  return /** @type{?proto.gooseclip.goosecode.ide.v1.OpenFilesRequest} */ (
    jspb.Message.getWrapperField(this, proto.gooseclip.goosecode.ide.v1.OpenFilesRequest, 6));
};


/**
 * @param {?proto.gooseclip.goosecode.ide.v1.OpenFilesRequest|undefined} value
 * @return {!proto.gooseclip.goosecode.ide.v1.RequestMessage} returns this
*/
proto.gooseclip.goosecode.ide.v1.RequestMessage.prototype.setOpenFilesRequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.gooseclip.goosecode.ide.v1.RequestMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.gooseclip.goosecode.ide.v1.RequestMessage} returns this
 */
proto.gooseclip.goosecode.ide.v1.RequestMessage.prototype.clearOpenFilesRequest = function() {
  return this.setOpenFilesRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gooseclip.goosecode.ide.v1.RequestMessage.prototype.hasOpenFilesRequest = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional FindStringRequest find_string_request = 7;
 * @return {?proto.gooseclip.goosecode.ide.v1.FindStringRequest}
 */
proto.gooseclip.goosecode.ide.v1.RequestMessage.prototype.getFindStringRequest = function() {
  return /** @type{?proto.gooseclip.goosecode.ide.v1.FindStringRequest} */ (
    jspb.Message.getWrapperField(this, proto.gooseclip.goosecode.ide.v1.FindStringRequest, 7));
};


/**
 * @param {?proto.gooseclip.goosecode.ide.v1.FindStringRequest|undefined} value
 * @return {!proto.gooseclip.goosecode.ide.v1.RequestMessage} returns this
*/
proto.gooseclip.goosecode.ide.v1.RequestMessage.prototype.setFindStringRequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.gooseclip.goosecode.ide.v1.RequestMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.gooseclip.goosecode.ide.v1.RequestMessage} returns this
 */
proto.gooseclip.goosecode.ide.v1.RequestMessage.prototype.clearFindStringRequest = function() {
  return this.setFindStringRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gooseclip.goosecode.ide.v1.RequestMessage.prototype.hasFindStringRequest = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional SelectRangeRequest select_range_request = 8;
 * @return {?proto.gooseclip.goosecode.ide.v1.SelectRangeRequest}
 */
proto.gooseclip.goosecode.ide.v1.RequestMessage.prototype.getSelectRangeRequest = function() {
  return /** @type{?proto.gooseclip.goosecode.ide.v1.SelectRangeRequest} */ (
    jspb.Message.getWrapperField(this, proto.gooseclip.goosecode.ide.v1.SelectRangeRequest, 8));
};


/**
 * @param {?proto.gooseclip.goosecode.ide.v1.SelectRangeRequest|undefined} value
 * @return {!proto.gooseclip.goosecode.ide.v1.RequestMessage} returns this
*/
proto.gooseclip.goosecode.ide.v1.RequestMessage.prototype.setSelectRangeRequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.gooseclip.goosecode.ide.v1.RequestMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.gooseclip.goosecode.ide.v1.RequestMessage} returns this
 */
proto.gooseclip.goosecode.ide.v1.RequestMessage.prototype.clearSelectRangeRequest = function() {
  return this.setSelectRangeRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gooseclip.goosecode.ide.v1.RequestMessage.prototype.hasSelectRangeRequest = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional DescribeRangeRequest describe_range_request = 9;
 * @return {?proto.gooseclip.goosecode.ide.v1.DescribeRangeRequest}
 */
proto.gooseclip.goosecode.ide.v1.RequestMessage.prototype.getDescribeRangeRequest = function() {
  return /** @type{?proto.gooseclip.goosecode.ide.v1.DescribeRangeRequest} */ (
    jspb.Message.getWrapperField(this, proto.gooseclip.goosecode.ide.v1.DescribeRangeRequest, 9));
};


/**
 * @param {?proto.gooseclip.goosecode.ide.v1.DescribeRangeRequest|undefined} value
 * @return {!proto.gooseclip.goosecode.ide.v1.RequestMessage} returns this
*/
proto.gooseclip.goosecode.ide.v1.RequestMessage.prototype.setDescribeRangeRequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.gooseclip.goosecode.ide.v1.RequestMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.gooseclip.goosecode.ide.v1.RequestMessage} returns this
 */
proto.gooseclip.goosecode.ide.v1.RequestMessage.prototype.clearDescribeRangeRequest = function() {
  return this.setDescribeRangeRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gooseclip.goosecode.ide.v1.RequestMessage.prototype.hasDescribeRangeRequest = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional GoToDefinitionRequest go_to_definition_request = 10;
 * @return {?proto.gooseclip.goosecode.ide.v1.GoToDefinitionRequest}
 */
proto.gooseclip.goosecode.ide.v1.RequestMessage.prototype.getGoToDefinitionRequest = function() {
  return /** @type{?proto.gooseclip.goosecode.ide.v1.GoToDefinitionRequest} */ (
    jspb.Message.getWrapperField(this, proto.gooseclip.goosecode.ide.v1.GoToDefinitionRequest, 10));
};


/**
 * @param {?proto.gooseclip.goosecode.ide.v1.GoToDefinitionRequest|undefined} value
 * @return {!proto.gooseclip.goosecode.ide.v1.RequestMessage} returns this
*/
proto.gooseclip.goosecode.ide.v1.RequestMessage.prototype.setGoToDefinitionRequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.gooseclip.goosecode.ide.v1.RequestMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.gooseclip.goosecode.ide.v1.RequestMessage} returns this
 */
proto.gooseclip.goosecode.ide.v1.RequestMessage.prototype.clearGoToDefinitionRequest = function() {
  return this.setGoToDefinitionRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gooseclip.goosecode.ide.v1.RequestMessage.prototype.hasGoToDefinitionRequest = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional RenameRequest rename_request = 11;
 * @return {?proto.gooseclip.goosecode.ide.v1.RenameRequest}
 */
proto.gooseclip.goosecode.ide.v1.RequestMessage.prototype.getRenameRequest = function() {
  return /** @type{?proto.gooseclip.goosecode.ide.v1.RenameRequest} */ (
    jspb.Message.getWrapperField(this, proto.gooseclip.goosecode.ide.v1.RenameRequest, 11));
};


/**
 * @param {?proto.gooseclip.goosecode.ide.v1.RenameRequest|undefined} value
 * @return {!proto.gooseclip.goosecode.ide.v1.RequestMessage} returns this
*/
proto.gooseclip.goosecode.ide.v1.RequestMessage.prototype.setRenameRequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.gooseclip.goosecode.ide.v1.RequestMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.gooseclip.goosecode.ide.v1.RequestMessage} returns this
 */
proto.gooseclip.goosecode.ide.v1.RequestMessage.prototype.clearRenameRequest = function() {
  return this.setRenameRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gooseclip.goosecode.ide.v1.RequestMessage.prototype.hasRenameRequest = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional FindUsesRequest find_uses_request = 12;
 * @return {?proto.gooseclip.goosecode.ide.v1.FindUsesRequest}
 */
proto.gooseclip.goosecode.ide.v1.RequestMessage.prototype.getFindUsesRequest = function() {
  return /** @type{?proto.gooseclip.goosecode.ide.v1.FindUsesRequest} */ (
    jspb.Message.getWrapperField(this, proto.gooseclip.goosecode.ide.v1.FindUsesRequest, 12));
};


/**
 * @param {?proto.gooseclip.goosecode.ide.v1.FindUsesRequest|undefined} value
 * @return {!proto.gooseclip.goosecode.ide.v1.RequestMessage} returns this
*/
proto.gooseclip.goosecode.ide.v1.RequestMessage.prototype.setFindUsesRequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.gooseclip.goosecode.ide.v1.RequestMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.gooseclip.goosecode.ide.v1.RequestMessage} returns this
 */
proto.gooseclip.goosecode.ide.v1.RequestMessage.prototype.clearFindUsesRequest = function() {
  return this.setFindUsesRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gooseclip.goosecode.ide.v1.RequestMessage.prototype.hasFindUsesRequest = function() {
  return jspb.Message.getField(this, 12) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gooseclip.goosecode.ide.v1.RepositoryDetailsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.gooseclip.goosecode.ide.v1.RepositoryDetailsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gooseclip.goosecode.ide.v1.RepositoryDetailsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.RepositoryDetailsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    owner: jspb.Message.getFieldWithDefault(msg, 1, ""),
    repository: jspb.Message.getFieldWithDefault(msg, 2, ""),
    branch: jspb.Message.getFieldWithDefault(msg, 3, ""),
    commit: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gooseclip.goosecode.ide.v1.RepositoryDetailsResponse}
 */
proto.gooseclip.goosecode.ide.v1.RepositoryDetailsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseclip.goosecode.ide.v1.RepositoryDetailsResponse;
  return proto.gooseclip.goosecode.ide.v1.RepositoryDetailsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gooseclip.goosecode.ide.v1.RepositoryDetailsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gooseclip.goosecode.ide.v1.RepositoryDetailsResponse}
 */
proto.gooseclip.goosecode.ide.v1.RepositoryDetailsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwner(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRepository(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setBranch(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCommit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gooseclip.goosecode.ide.v1.RepositoryDetailsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gooseclip.goosecode.ide.v1.RepositoryDetailsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gooseclip.goosecode.ide.v1.RepositoryDetailsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.RepositoryDetailsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOwner();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRepository();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBranch();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCommit();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string owner = 1;
 * @return {string}
 */
proto.gooseclip.goosecode.ide.v1.RepositoryDetailsResponse.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.gooseclip.goosecode.ide.v1.RepositoryDetailsResponse} returns this
 */
proto.gooseclip.goosecode.ide.v1.RepositoryDetailsResponse.prototype.setOwner = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string repository = 2;
 * @return {string}
 */
proto.gooseclip.goosecode.ide.v1.RepositoryDetailsResponse.prototype.getRepository = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.gooseclip.goosecode.ide.v1.RepositoryDetailsResponse} returns this
 */
proto.gooseclip.goosecode.ide.v1.RepositoryDetailsResponse.prototype.setRepository = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string branch = 3;
 * @return {string}
 */
proto.gooseclip.goosecode.ide.v1.RepositoryDetailsResponse.prototype.getBranch = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.gooseclip.goosecode.ide.v1.RepositoryDetailsResponse} returns this
 */
proto.gooseclip.goosecode.ide.v1.RepositoryDetailsResponse.prototype.setBranch = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string commit = 4;
 * @return {string}
 */
proto.gooseclip.goosecode.ide.v1.RepositoryDetailsResponse.prototype.getCommit = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.gooseclip.goosecode.ide.v1.RepositoryDetailsResponse} returns this
 */
proto.gooseclip.goosecode.ide.v1.RepositoryDetailsResponse.prototype.setCommit = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.gooseclip.goosecode.ide.v1.ListFilesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gooseclip.goosecode.ide.v1.ListFilesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.gooseclip.goosecode.ide.v1.ListFilesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gooseclip.goosecode.ide.v1.ListFilesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.ListFilesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    filePathsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gooseclip.goosecode.ide.v1.ListFilesResponse}
 */
proto.gooseclip.goosecode.ide.v1.ListFilesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseclip.goosecode.ide.v1.ListFilesResponse;
  return proto.gooseclip.goosecode.ide.v1.ListFilesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gooseclip.goosecode.ide.v1.ListFilesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gooseclip.goosecode.ide.v1.ListFilesResponse}
 */
proto.gooseclip.goosecode.ide.v1.ListFilesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addFilePaths(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gooseclip.goosecode.ide.v1.ListFilesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gooseclip.goosecode.ide.v1.ListFilesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gooseclip.goosecode.ide.v1.ListFilesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.ListFilesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilePathsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string file_paths = 1;
 * @return {!Array<string>}
 */
proto.gooseclip.goosecode.ide.v1.ListFilesResponse.prototype.getFilePathsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.gooseclip.goosecode.ide.v1.ListFilesResponse} returns this
 */
proto.gooseclip.goosecode.ide.v1.ListFilesResponse.prototype.setFilePathsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.gooseclip.goosecode.ide.v1.ListFilesResponse} returns this
 */
proto.gooseclip.goosecode.ide.v1.ListFilesResponse.prototype.addFilePaths = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.gooseclip.goosecode.ide.v1.ListFilesResponse} returns this
 */
proto.gooseclip.goosecode.ide.v1.ListFilesResponse.prototype.clearFilePathsList = function() {
  return this.setFilePathsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gooseclip.goosecode.ide.v1.OpenFilesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.gooseclip.goosecode.ide.v1.OpenFilesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gooseclip.goosecode.ide.v1.OpenFilesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.OpenFilesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gooseclip.goosecode.ide.v1.OpenFilesResponse}
 */
proto.gooseclip.goosecode.ide.v1.OpenFilesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseclip.goosecode.ide.v1.OpenFilesResponse;
  return proto.gooseclip.goosecode.ide.v1.OpenFilesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gooseclip.goosecode.ide.v1.OpenFilesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gooseclip.goosecode.ide.v1.OpenFilesResponse}
 */
proto.gooseclip.goosecode.ide.v1.OpenFilesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gooseclip.goosecode.ide.v1.OpenFilesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gooseclip.goosecode.ide.v1.OpenFilesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gooseclip.goosecode.ide.v1.OpenFilesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.OpenFilesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.gooseclip.goosecode.ide.v1.GetFilesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gooseclip.goosecode.ide.v1.GetFilesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.gooseclip.goosecode.ide.v1.GetFilesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gooseclip.goosecode.ide.v1.GetFilesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.GetFilesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    fileContentsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gooseclip.goosecode.ide.v1.GetFilesResponse}
 */
proto.gooseclip.goosecode.ide.v1.GetFilesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseclip.goosecode.ide.v1.GetFilesResponse;
  return proto.gooseclip.goosecode.ide.v1.GetFilesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gooseclip.goosecode.ide.v1.GetFilesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gooseclip.goosecode.ide.v1.GetFilesResponse}
 */
proto.gooseclip.goosecode.ide.v1.GetFilesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addFileContents(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gooseclip.goosecode.ide.v1.GetFilesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gooseclip.goosecode.ide.v1.GetFilesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gooseclip.goosecode.ide.v1.GetFilesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.GetFilesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFileContentsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string file_contents = 1;
 * @return {!Array<string>}
 */
proto.gooseclip.goosecode.ide.v1.GetFilesResponse.prototype.getFileContentsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.gooseclip.goosecode.ide.v1.GetFilesResponse} returns this
 */
proto.gooseclip.goosecode.ide.v1.GetFilesResponse.prototype.setFileContentsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.gooseclip.goosecode.ide.v1.GetFilesResponse} returns this
 */
proto.gooseclip.goosecode.ide.v1.GetFilesResponse.prototype.addFileContents = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.gooseclip.goosecode.ide.v1.GetFilesResponse} returns this
 */
proto.gooseclip.goosecode.ide.v1.GetFilesResponse.prototype.clearFileContentsList = function() {
  return this.setFileContentsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gooseclip.goosecode.ide.v1.Position.prototype.toObject = function(opt_includeInstance) {
  return proto.gooseclip.goosecode.ide.v1.Position.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gooseclip.goosecode.ide.v1.Position} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.Position.toObject = function(includeInstance, msg) {
  var f, obj = {
    line: jspb.Message.getFieldWithDefault(msg, 1, 0),
    character: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gooseclip.goosecode.ide.v1.Position}
 */
proto.gooseclip.goosecode.ide.v1.Position.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseclip.goosecode.ide.v1.Position;
  return proto.gooseclip.goosecode.ide.v1.Position.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gooseclip.goosecode.ide.v1.Position} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gooseclip.goosecode.ide.v1.Position}
 */
proto.gooseclip.goosecode.ide.v1.Position.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLine(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCharacter(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gooseclip.goosecode.ide.v1.Position.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gooseclip.goosecode.ide.v1.Position.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gooseclip.goosecode.ide.v1.Position} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.Position.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLine();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getCharacter();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int64 line = 1;
 * @return {number}
 */
proto.gooseclip.goosecode.ide.v1.Position.prototype.getLine = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.gooseclip.goosecode.ide.v1.Position} returns this
 */
proto.gooseclip.goosecode.ide.v1.Position.prototype.setLine = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 character = 2;
 * @return {number}
 */
proto.gooseclip.goosecode.ide.v1.Position.prototype.getCharacter = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.gooseclip.goosecode.ide.v1.Position} returns this
 */
proto.gooseclip.goosecode.ide.v1.Position.prototype.setCharacter = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gooseclip.goosecode.ide.v1.Range.prototype.toObject = function(opt_includeInstance) {
  return proto.gooseclip.goosecode.ide.v1.Range.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gooseclip.goosecode.ide.v1.Range} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.Range.toObject = function(includeInstance, msg) {
  var f, obj = {
    start: (f = msg.getStart()) && proto.gooseclip.goosecode.ide.v1.Position.toObject(includeInstance, f),
    end: (f = msg.getEnd()) && proto.gooseclip.goosecode.ide.v1.Position.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gooseclip.goosecode.ide.v1.Range}
 */
proto.gooseclip.goosecode.ide.v1.Range.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseclip.goosecode.ide.v1.Range;
  return proto.gooseclip.goosecode.ide.v1.Range.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gooseclip.goosecode.ide.v1.Range} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gooseclip.goosecode.ide.v1.Range}
 */
proto.gooseclip.goosecode.ide.v1.Range.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.gooseclip.goosecode.ide.v1.Position;
      reader.readMessage(value,proto.gooseclip.goosecode.ide.v1.Position.deserializeBinaryFromReader);
      msg.setStart(value);
      break;
    case 2:
      var value = new proto.gooseclip.goosecode.ide.v1.Position;
      reader.readMessage(value,proto.gooseclip.goosecode.ide.v1.Position.deserializeBinaryFromReader);
      msg.setEnd(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gooseclip.goosecode.ide.v1.Range.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gooseclip.goosecode.ide.v1.Range.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gooseclip.goosecode.ide.v1.Range} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.Range.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStart();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.gooseclip.goosecode.ide.v1.Position.serializeBinaryToWriter
    );
  }
  f = message.getEnd();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.gooseclip.goosecode.ide.v1.Position.serializeBinaryToWriter
    );
  }
};


/**
 * optional Position start = 1;
 * @return {?proto.gooseclip.goosecode.ide.v1.Position}
 */
proto.gooseclip.goosecode.ide.v1.Range.prototype.getStart = function() {
  return /** @type{?proto.gooseclip.goosecode.ide.v1.Position} */ (
    jspb.Message.getWrapperField(this, proto.gooseclip.goosecode.ide.v1.Position, 1));
};


/**
 * @param {?proto.gooseclip.goosecode.ide.v1.Position|undefined} value
 * @return {!proto.gooseclip.goosecode.ide.v1.Range} returns this
*/
proto.gooseclip.goosecode.ide.v1.Range.prototype.setStart = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.gooseclip.goosecode.ide.v1.Range} returns this
 */
proto.gooseclip.goosecode.ide.v1.Range.prototype.clearStart = function() {
  return this.setStart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gooseclip.goosecode.ide.v1.Range.prototype.hasStart = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Position end = 2;
 * @return {?proto.gooseclip.goosecode.ide.v1.Position}
 */
proto.gooseclip.goosecode.ide.v1.Range.prototype.getEnd = function() {
  return /** @type{?proto.gooseclip.goosecode.ide.v1.Position} */ (
    jspb.Message.getWrapperField(this, proto.gooseclip.goosecode.ide.v1.Position, 2));
};


/**
 * @param {?proto.gooseclip.goosecode.ide.v1.Position|undefined} value
 * @return {!proto.gooseclip.goosecode.ide.v1.Range} returns this
*/
proto.gooseclip.goosecode.ide.v1.Range.prototype.setEnd = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.gooseclip.goosecode.ide.v1.Range} returns this
 */
proto.gooseclip.goosecode.ide.v1.Range.prototype.clearEnd = function() {
  return this.setEnd(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gooseclip.goosecode.ide.v1.Range.prototype.hasEnd = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gooseclip.goosecode.ide.v1.Location.prototype.toObject = function(opt_includeInstance) {
  return proto.gooseclip.goosecode.ide.v1.Location.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gooseclip.goosecode.ide.v1.Location} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.Location.toObject = function(includeInstance, msg) {
  var f, obj = {
    path: jspb.Message.getFieldWithDefault(msg, 1, ""),
    range: (f = msg.getRange()) && proto.gooseclip.goosecode.ide.v1.Range.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gooseclip.goosecode.ide.v1.Location}
 */
proto.gooseclip.goosecode.ide.v1.Location.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseclip.goosecode.ide.v1.Location;
  return proto.gooseclip.goosecode.ide.v1.Location.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gooseclip.goosecode.ide.v1.Location} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gooseclip.goosecode.ide.v1.Location}
 */
proto.gooseclip.goosecode.ide.v1.Location.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 2:
      var value = new proto.gooseclip.goosecode.ide.v1.Range;
      reader.readMessage(value,proto.gooseclip.goosecode.ide.v1.Range.deserializeBinaryFromReader);
      msg.setRange(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gooseclip.goosecode.ide.v1.Location.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gooseclip.goosecode.ide.v1.Location.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gooseclip.goosecode.ide.v1.Location} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.Location.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRange();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.gooseclip.goosecode.ide.v1.Range.serializeBinaryToWriter
    );
  }
};


/**
 * optional string path = 1;
 * @return {string}
 */
proto.gooseclip.goosecode.ide.v1.Location.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.gooseclip.goosecode.ide.v1.Location} returns this
 */
proto.gooseclip.goosecode.ide.v1.Location.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Range range = 2;
 * @return {?proto.gooseclip.goosecode.ide.v1.Range}
 */
proto.gooseclip.goosecode.ide.v1.Location.prototype.getRange = function() {
  return /** @type{?proto.gooseclip.goosecode.ide.v1.Range} */ (
    jspb.Message.getWrapperField(this, proto.gooseclip.goosecode.ide.v1.Range, 2));
};


/**
 * @param {?proto.gooseclip.goosecode.ide.v1.Range|undefined} value
 * @return {!proto.gooseclip.goosecode.ide.v1.Location} returns this
*/
proto.gooseclip.goosecode.ide.v1.Location.prototype.setRange = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.gooseclip.goosecode.ide.v1.Location} returns this
 */
proto.gooseclip.goosecode.ide.v1.Location.prototype.clearRange = function() {
  return this.setRange(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gooseclip.goosecode.ide.v1.Location.prototype.hasRange = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.gooseclip.goosecode.ide.v1.DocumentSymbol.repeatedFields_ = [6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gooseclip.goosecode.ide.v1.DocumentSymbol.prototype.toObject = function(opt_includeInstance) {
  return proto.gooseclip.goosecode.ide.v1.DocumentSymbol.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gooseclip.goosecode.ide.v1.DocumentSymbol} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.DocumentSymbol.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    detail: jspb.Message.getFieldWithDefault(msg, 2, ""),
    kind: jspb.Message.getFieldWithDefault(msg, 3, 0),
    range: (f = msg.getRange()) && proto.gooseclip.goosecode.ide.v1.Range.toObject(includeInstance, f),
    selectionRange: (f = msg.getSelectionRange()) && proto.gooseclip.goosecode.ide.v1.Range.toObject(includeInstance, f),
    childrenList: jspb.Message.toObjectList(msg.getChildrenList(),
    proto.gooseclip.goosecode.ide.v1.DocumentSymbol.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gooseclip.goosecode.ide.v1.DocumentSymbol}
 */
proto.gooseclip.goosecode.ide.v1.DocumentSymbol.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseclip.goosecode.ide.v1.DocumentSymbol;
  return proto.gooseclip.goosecode.ide.v1.DocumentSymbol.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gooseclip.goosecode.ide.v1.DocumentSymbol} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gooseclip.goosecode.ide.v1.DocumentSymbol}
 */
proto.gooseclip.goosecode.ide.v1.DocumentSymbol.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDetail(value);
      break;
    case 3:
      var value = /** @type {!proto.gooseclip.goosecode.ide.v1.SymbolKind} */ (reader.readEnum());
      msg.setKind(value);
      break;
    case 4:
      var value = new proto.gooseclip.goosecode.ide.v1.Range;
      reader.readMessage(value,proto.gooseclip.goosecode.ide.v1.Range.deserializeBinaryFromReader);
      msg.setRange(value);
      break;
    case 5:
      var value = new proto.gooseclip.goosecode.ide.v1.Range;
      reader.readMessage(value,proto.gooseclip.goosecode.ide.v1.Range.deserializeBinaryFromReader);
      msg.setSelectionRange(value);
      break;
    case 6:
      var value = new proto.gooseclip.goosecode.ide.v1.DocumentSymbol;
      reader.readMessage(value,proto.gooseclip.goosecode.ide.v1.DocumentSymbol.deserializeBinaryFromReader);
      msg.addChildren(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gooseclip.goosecode.ide.v1.DocumentSymbol.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gooseclip.goosecode.ide.v1.DocumentSymbol.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gooseclip.goosecode.ide.v1.DocumentSymbol} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.DocumentSymbol.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDetail();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getKind();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getRange();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.gooseclip.goosecode.ide.v1.Range.serializeBinaryToWriter
    );
  }
  f = message.getSelectionRange();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.gooseclip.goosecode.ide.v1.Range.serializeBinaryToWriter
    );
  }
  f = message.getChildrenList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.gooseclip.goosecode.ide.v1.DocumentSymbol.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.gooseclip.goosecode.ide.v1.DocumentSymbol.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.gooseclip.goosecode.ide.v1.DocumentSymbol} returns this
 */
proto.gooseclip.goosecode.ide.v1.DocumentSymbol.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string detail = 2;
 * @return {string}
 */
proto.gooseclip.goosecode.ide.v1.DocumentSymbol.prototype.getDetail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.gooseclip.goosecode.ide.v1.DocumentSymbol} returns this
 */
proto.gooseclip.goosecode.ide.v1.DocumentSymbol.prototype.setDetail = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional SymbolKind kind = 3;
 * @return {!proto.gooseclip.goosecode.ide.v1.SymbolKind}
 */
proto.gooseclip.goosecode.ide.v1.DocumentSymbol.prototype.getKind = function() {
  return /** @type {!proto.gooseclip.goosecode.ide.v1.SymbolKind} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.gooseclip.goosecode.ide.v1.SymbolKind} value
 * @return {!proto.gooseclip.goosecode.ide.v1.DocumentSymbol} returns this
 */
proto.gooseclip.goosecode.ide.v1.DocumentSymbol.prototype.setKind = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional Range range = 4;
 * @return {?proto.gooseclip.goosecode.ide.v1.Range}
 */
proto.gooseclip.goosecode.ide.v1.DocumentSymbol.prototype.getRange = function() {
  return /** @type{?proto.gooseclip.goosecode.ide.v1.Range} */ (
    jspb.Message.getWrapperField(this, proto.gooseclip.goosecode.ide.v1.Range, 4));
};


/**
 * @param {?proto.gooseclip.goosecode.ide.v1.Range|undefined} value
 * @return {!proto.gooseclip.goosecode.ide.v1.DocumentSymbol} returns this
*/
proto.gooseclip.goosecode.ide.v1.DocumentSymbol.prototype.setRange = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.gooseclip.goosecode.ide.v1.DocumentSymbol} returns this
 */
proto.gooseclip.goosecode.ide.v1.DocumentSymbol.prototype.clearRange = function() {
  return this.setRange(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gooseclip.goosecode.ide.v1.DocumentSymbol.prototype.hasRange = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Range selection_range = 5;
 * @return {?proto.gooseclip.goosecode.ide.v1.Range}
 */
proto.gooseclip.goosecode.ide.v1.DocumentSymbol.prototype.getSelectionRange = function() {
  return /** @type{?proto.gooseclip.goosecode.ide.v1.Range} */ (
    jspb.Message.getWrapperField(this, proto.gooseclip.goosecode.ide.v1.Range, 5));
};


/**
 * @param {?proto.gooseclip.goosecode.ide.v1.Range|undefined} value
 * @return {!proto.gooseclip.goosecode.ide.v1.DocumentSymbol} returns this
*/
proto.gooseclip.goosecode.ide.v1.DocumentSymbol.prototype.setSelectionRange = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.gooseclip.goosecode.ide.v1.DocumentSymbol} returns this
 */
proto.gooseclip.goosecode.ide.v1.DocumentSymbol.prototype.clearSelectionRange = function() {
  return this.setSelectionRange(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gooseclip.goosecode.ide.v1.DocumentSymbol.prototype.hasSelectionRange = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated DocumentSymbol children = 6;
 * @return {!Array<!proto.gooseclip.goosecode.ide.v1.DocumentSymbol>}
 */
proto.gooseclip.goosecode.ide.v1.DocumentSymbol.prototype.getChildrenList = function() {
  return /** @type{!Array<!proto.gooseclip.goosecode.ide.v1.DocumentSymbol>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.gooseclip.goosecode.ide.v1.DocumentSymbol, 6));
};


/**
 * @param {!Array<!proto.gooseclip.goosecode.ide.v1.DocumentSymbol>} value
 * @return {!proto.gooseclip.goosecode.ide.v1.DocumentSymbol} returns this
*/
proto.gooseclip.goosecode.ide.v1.DocumentSymbol.prototype.setChildrenList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.gooseclip.goosecode.ide.v1.DocumentSymbol=} opt_value
 * @param {number=} opt_index
 * @return {!proto.gooseclip.goosecode.ide.v1.DocumentSymbol}
 */
proto.gooseclip.goosecode.ide.v1.DocumentSymbol.prototype.addChildren = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.gooseclip.goosecode.ide.v1.DocumentSymbol, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.gooseclip.goosecode.ide.v1.DocumentSymbol} returns this
 */
proto.gooseclip.goosecode.ide.v1.DocumentSymbol.prototype.clearChildrenList = function() {
  return this.setChildrenList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.gooseclip.goosecode.ide.v1.FindStringResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gooseclip.goosecode.ide.v1.FindStringResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.gooseclip.goosecode.ide.v1.FindStringResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gooseclip.goosecode.ide.v1.FindStringResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.FindStringResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    locationsList: jspb.Message.toObjectList(msg.getLocationsList(),
    proto.gooseclip.goosecode.ide.v1.Location.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gooseclip.goosecode.ide.v1.FindStringResponse}
 */
proto.gooseclip.goosecode.ide.v1.FindStringResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseclip.goosecode.ide.v1.FindStringResponse;
  return proto.gooseclip.goosecode.ide.v1.FindStringResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gooseclip.goosecode.ide.v1.FindStringResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gooseclip.goosecode.ide.v1.FindStringResponse}
 */
proto.gooseclip.goosecode.ide.v1.FindStringResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.gooseclip.goosecode.ide.v1.Location;
      reader.readMessage(value,proto.gooseclip.goosecode.ide.v1.Location.deserializeBinaryFromReader);
      msg.addLocations(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gooseclip.goosecode.ide.v1.FindStringResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gooseclip.goosecode.ide.v1.FindStringResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gooseclip.goosecode.ide.v1.FindStringResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.FindStringResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.gooseclip.goosecode.ide.v1.Location.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Location locations = 1;
 * @return {!Array<!proto.gooseclip.goosecode.ide.v1.Location>}
 */
proto.gooseclip.goosecode.ide.v1.FindStringResponse.prototype.getLocationsList = function() {
  return /** @type{!Array<!proto.gooseclip.goosecode.ide.v1.Location>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.gooseclip.goosecode.ide.v1.Location, 1));
};


/**
 * @param {!Array<!proto.gooseclip.goosecode.ide.v1.Location>} value
 * @return {!proto.gooseclip.goosecode.ide.v1.FindStringResponse} returns this
*/
proto.gooseclip.goosecode.ide.v1.FindStringResponse.prototype.setLocationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.gooseclip.goosecode.ide.v1.Location=} opt_value
 * @param {number=} opt_index
 * @return {!proto.gooseclip.goosecode.ide.v1.Location}
 */
proto.gooseclip.goosecode.ide.v1.FindStringResponse.prototype.addLocations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.gooseclip.goosecode.ide.v1.Location, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.gooseclip.goosecode.ide.v1.FindStringResponse} returns this
 */
proto.gooseclip.goosecode.ide.v1.FindStringResponse.prototype.clearLocationsList = function() {
  return this.setLocationsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gooseclip.goosecode.ide.v1.SelectRangeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.gooseclip.goosecode.ide.v1.SelectRangeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gooseclip.goosecode.ide.v1.SelectRangeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.SelectRangeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gooseclip.goosecode.ide.v1.SelectRangeResponse}
 */
proto.gooseclip.goosecode.ide.v1.SelectRangeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseclip.goosecode.ide.v1.SelectRangeResponse;
  return proto.gooseclip.goosecode.ide.v1.SelectRangeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gooseclip.goosecode.ide.v1.SelectRangeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gooseclip.goosecode.ide.v1.SelectRangeResponse}
 */
proto.gooseclip.goosecode.ide.v1.SelectRangeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gooseclip.goosecode.ide.v1.SelectRangeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gooseclip.goosecode.ide.v1.SelectRangeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gooseclip.goosecode.ide.v1.SelectRangeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.SelectRangeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.gooseclip.goosecode.ide.v1.DescribeRangeResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gooseclip.goosecode.ide.v1.DescribeRangeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.gooseclip.goosecode.ide.v1.DescribeRangeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gooseclip.goosecode.ide.v1.DescribeRangeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.DescribeRangeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    symbolsList: jspb.Message.toObjectList(msg.getSymbolsList(),
    proto.gooseclip.goosecode.ide.v1.DocumentSymbol.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gooseclip.goosecode.ide.v1.DescribeRangeResponse}
 */
proto.gooseclip.goosecode.ide.v1.DescribeRangeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseclip.goosecode.ide.v1.DescribeRangeResponse;
  return proto.gooseclip.goosecode.ide.v1.DescribeRangeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gooseclip.goosecode.ide.v1.DescribeRangeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gooseclip.goosecode.ide.v1.DescribeRangeResponse}
 */
proto.gooseclip.goosecode.ide.v1.DescribeRangeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.gooseclip.goosecode.ide.v1.DocumentSymbol;
      reader.readMessage(value,proto.gooseclip.goosecode.ide.v1.DocumentSymbol.deserializeBinaryFromReader);
      msg.addSymbols(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gooseclip.goosecode.ide.v1.DescribeRangeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gooseclip.goosecode.ide.v1.DescribeRangeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gooseclip.goosecode.ide.v1.DescribeRangeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.DescribeRangeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSymbolsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.gooseclip.goosecode.ide.v1.DocumentSymbol.serializeBinaryToWriter
    );
  }
};


/**
 * repeated DocumentSymbol symbols = 1;
 * @return {!Array<!proto.gooseclip.goosecode.ide.v1.DocumentSymbol>}
 */
proto.gooseclip.goosecode.ide.v1.DescribeRangeResponse.prototype.getSymbolsList = function() {
  return /** @type{!Array<!proto.gooseclip.goosecode.ide.v1.DocumentSymbol>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.gooseclip.goosecode.ide.v1.DocumentSymbol, 1));
};


/**
 * @param {!Array<!proto.gooseclip.goosecode.ide.v1.DocumentSymbol>} value
 * @return {!proto.gooseclip.goosecode.ide.v1.DescribeRangeResponse} returns this
*/
proto.gooseclip.goosecode.ide.v1.DescribeRangeResponse.prototype.setSymbolsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.gooseclip.goosecode.ide.v1.DocumentSymbol=} opt_value
 * @param {number=} opt_index
 * @return {!proto.gooseclip.goosecode.ide.v1.DocumentSymbol}
 */
proto.gooseclip.goosecode.ide.v1.DescribeRangeResponse.prototype.addSymbols = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.gooseclip.goosecode.ide.v1.DocumentSymbol, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.gooseclip.goosecode.ide.v1.DescribeRangeResponse} returns this
 */
proto.gooseclip.goosecode.ide.v1.DescribeRangeResponse.prototype.clearSymbolsList = function() {
  return this.setSymbolsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gooseclip.goosecode.ide.v1.GoToDefinitionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.gooseclip.goosecode.ide.v1.GoToDefinitionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gooseclip.goosecode.ide.v1.GoToDefinitionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.GoToDefinitionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gooseclip.goosecode.ide.v1.GoToDefinitionResponse}
 */
proto.gooseclip.goosecode.ide.v1.GoToDefinitionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseclip.goosecode.ide.v1.GoToDefinitionResponse;
  return proto.gooseclip.goosecode.ide.v1.GoToDefinitionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gooseclip.goosecode.ide.v1.GoToDefinitionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gooseclip.goosecode.ide.v1.GoToDefinitionResponse}
 */
proto.gooseclip.goosecode.ide.v1.GoToDefinitionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gooseclip.goosecode.ide.v1.GoToDefinitionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gooseclip.goosecode.ide.v1.GoToDefinitionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gooseclip.goosecode.ide.v1.GoToDefinitionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.GoToDefinitionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gooseclip.goosecode.ide.v1.RenameResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.gooseclip.goosecode.ide.v1.RenameResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gooseclip.goosecode.ide.v1.RenameResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.RenameResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gooseclip.goosecode.ide.v1.RenameResponse}
 */
proto.gooseclip.goosecode.ide.v1.RenameResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseclip.goosecode.ide.v1.RenameResponse;
  return proto.gooseclip.goosecode.ide.v1.RenameResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gooseclip.goosecode.ide.v1.RenameResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gooseclip.goosecode.ide.v1.RenameResponse}
 */
proto.gooseclip.goosecode.ide.v1.RenameResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gooseclip.goosecode.ide.v1.RenameResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gooseclip.goosecode.ide.v1.RenameResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gooseclip.goosecode.ide.v1.RenameResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.RenameResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.gooseclip.goosecode.ide.v1.FindUsesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gooseclip.goosecode.ide.v1.FindUsesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.gooseclip.goosecode.ide.v1.FindUsesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gooseclip.goosecode.ide.v1.FindUsesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.FindUsesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    locationsList: jspb.Message.toObjectList(msg.getLocationsList(),
    proto.gooseclip.goosecode.ide.v1.Location.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gooseclip.goosecode.ide.v1.FindUsesResponse}
 */
proto.gooseclip.goosecode.ide.v1.FindUsesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseclip.goosecode.ide.v1.FindUsesResponse;
  return proto.gooseclip.goosecode.ide.v1.FindUsesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gooseclip.goosecode.ide.v1.FindUsesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gooseclip.goosecode.ide.v1.FindUsesResponse}
 */
proto.gooseclip.goosecode.ide.v1.FindUsesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.gooseclip.goosecode.ide.v1.Location;
      reader.readMessage(value,proto.gooseclip.goosecode.ide.v1.Location.deserializeBinaryFromReader);
      msg.addLocations(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gooseclip.goosecode.ide.v1.FindUsesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gooseclip.goosecode.ide.v1.FindUsesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gooseclip.goosecode.ide.v1.FindUsesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.FindUsesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.gooseclip.goosecode.ide.v1.Location.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Location locations = 1;
 * @return {!Array<!proto.gooseclip.goosecode.ide.v1.Location>}
 */
proto.gooseclip.goosecode.ide.v1.FindUsesResponse.prototype.getLocationsList = function() {
  return /** @type{!Array<!proto.gooseclip.goosecode.ide.v1.Location>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.gooseclip.goosecode.ide.v1.Location, 1));
};


/**
 * @param {!Array<!proto.gooseclip.goosecode.ide.v1.Location>} value
 * @return {!proto.gooseclip.goosecode.ide.v1.FindUsesResponse} returns this
*/
proto.gooseclip.goosecode.ide.v1.FindUsesResponse.prototype.setLocationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.gooseclip.goosecode.ide.v1.Location=} opt_value
 * @param {number=} opt_index
 * @return {!proto.gooseclip.goosecode.ide.v1.Location}
 */
proto.gooseclip.goosecode.ide.v1.FindUsesResponse.prototype.addLocations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.gooseclip.goosecode.ide.v1.Location, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.gooseclip.goosecode.ide.v1.FindUsesResponse} returns this
 */
proto.gooseclip.goosecode.ide.v1.FindUsesResponse.prototype.clearLocationsList = function() {
  return this.setLocationsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gooseclip.goosecode.ide.v1.EditorStateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.gooseclip.goosecode.ide.v1.EditorStateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gooseclip.goosecode.ide.v1.EditorStateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.EditorStateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gooseclip.goosecode.ide.v1.EditorStateResponse}
 */
proto.gooseclip.goosecode.ide.v1.EditorStateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseclip.goosecode.ide.v1.EditorStateResponse;
  return proto.gooseclip.goosecode.ide.v1.EditorStateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gooseclip.goosecode.ide.v1.EditorStateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gooseclip.goosecode.ide.v1.EditorStateResponse}
 */
proto.gooseclip.goosecode.ide.v1.EditorStateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gooseclip.goosecode.ide.v1.EditorStateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gooseclip.goosecode.ide.v1.EditorStateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gooseclip.goosecode.ide.v1.EditorStateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.EditorStateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gooseclip.goosecode.ide.v1.ContentChangeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.gooseclip.goosecode.ide.v1.ContentChangeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gooseclip.goosecode.ide.v1.ContentChangeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.ContentChangeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gooseclip.goosecode.ide.v1.ContentChangeResponse}
 */
proto.gooseclip.goosecode.ide.v1.ContentChangeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseclip.goosecode.ide.v1.ContentChangeResponse;
  return proto.gooseclip.goosecode.ide.v1.ContentChangeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gooseclip.goosecode.ide.v1.ContentChangeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gooseclip.goosecode.ide.v1.ContentChangeResponse}
 */
proto.gooseclip.goosecode.ide.v1.ContentChangeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gooseclip.goosecode.ide.v1.ContentChangeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gooseclip.goosecode.ide.v1.ContentChangeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gooseclip.goosecode.ide.v1.ContentChangeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.ContentChangeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gooseclip.goosecode.ide.v1.EditorDiagnosticsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.gooseclip.goosecode.ide.v1.EditorDiagnosticsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gooseclip.goosecode.ide.v1.EditorDiagnosticsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.EditorDiagnosticsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gooseclip.goosecode.ide.v1.EditorDiagnosticsResponse}
 */
proto.gooseclip.goosecode.ide.v1.EditorDiagnosticsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseclip.goosecode.ide.v1.EditorDiagnosticsResponse;
  return proto.gooseclip.goosecode.ide.v1.EditorDiagnosticsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gooseclip.goosecode.ide.v1.EditorDiagnosticsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gooseclip.goosecode.ide.v1.EditorDiagnosticsResponse}
 */
proto.gooseclip.goosecode.ide.v1.EditorDiagnosticsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gooseclip.goosecode.ide.v1.EditorDiagnosticsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gooseclip.goosecode.ide.v1.EditorDiagnosticsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gooseclip.goosecode.ide.v1.EditorDiagnosticsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.EditorDiagnosticsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gooseclip.goosecode.ide.v1.CodeSourceIDResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.gooseclip.goosecode.ide.v1.CodeSourceIDResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gooseclip.goosecode.ide.v1.CodeSourceIDResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.CodeSourceIDResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    suggestedAlias: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gooseclip.goosecode.ide.v1.CodeSourceIDResponse}
 */
proto.gooseclip.goosecode.ide.v1.CodeSourceIDResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseclip.goosecode.ide.v1.CodeSourceIDResponse;
  return proto.gooseclip.goosecode.ide.v1.CodeSourceIDResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gooseclip.goosecode.ide.v1.CodeSourceIDResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gooseclip.goosecode.ide.v1.CodeSourceIDResponse}
 */
proto.gooseclip.goosecode.ide.v1.CodeSourceIDResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSuggestedAlias(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gooseclip.goosecode.ide.v1.CodeSourceIDResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gooseclip.goosecode.ide.v1.CodeSourceIDResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gooseclip.goosecode.ide.v1.CodeSourceIDResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.CodeSourceIDResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuggestedAlias();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string suggested_alias = 1;
 * @return {string}
 */
proto.gooseclip.goosecode.ide.v1.CodeSourceIDResponse.prototype.getSuggestedAlias = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.gooseclip.goosecode.ide.v1.CodeSourceIDResponse} returns this
 */
proto.gooseclip.goosecode.ide.v1.CodeSourceIDResponse.prototype.setSuggestedAlias = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gooseclip.goosecode.ide.v1.ErrorResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.gooseclip.goosecode.ide.v1.ErrorResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gooseclip.goosecode.ide.v1.ErrorResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.ErrorResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    error: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gooseclip.goosecode.ide.v1.ErrorResponse}
 */
proto.gooseclip.goosecode.ide.v1.ErrorResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseclip.goosecode.ide.v1.ErrorResponse;
  return proto.gooseclip.goosecode.ide.v1.ErrorResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gooseclip.goosecode.ide.v1.ErrorResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gooseclip.goosecode.ide.v1.ErrorResponse}
 */
proto.gooseclip.goosecode.ide.v1.ErrorResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gooseclip.goosecode.ide.v1.ErrorResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gooseclip.goosecode.ide.v1.ErrorResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gooseclip.goosecode.ide.v1.ErrorResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.ErrorResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string error = 1;
 * @return {string}
 */
proto.gooseclip.goosecode.ide.v1.ErrorResponse.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.gooseclip.goosecode.ide.v1.ErrorResponse} returns this
 */
proto.gooseclip.goosecode.ide.v1.ErrorResponse.prototype.setError = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.gooseclip.goosecode.ide.v1.ResponseMessage.oneofGroups_ = [[10,11,12,13,14,15,16,17,18,999]];

/**
 * @enum {number}
 */
proto.gooseclip.goosecode.ide.v1.ResponseMessage.DataCase = {
  DATA_NOT_SET: 0,
  LIST_FILES_RESPONSE: 10,
  GET_FILES_RESPONSE: 11,
  OPEN_FILES_RESPONSE: 12,
  FIND_STRING_RESPONSE: 13,
  SELECT_RANGE_RESPONSE: 14,
  DESCRIBE_RANGE_RESPONSE: 15,
  GO_TO_DEFINITION_RESPONSE: 16,
  RENAME_RESPONSE: 17,
  FIND_USES_RESPONSE: 18,
  ERROR_RESPONSE: 999
};

/**
 * @return {proto.gooseclip.goosecode.ide.v1.ResponseMessage.DataCase}
 */
proto.gooseclip.goosecode.ide.v1.ResponseMessage.prototype.getDataCase = function() {
  return /** @type {proto.gooseclip.goosecode.ide.v1.ResponseMessage.DataCase} */(jspb.Message.computeOneofCase(this, proto.gooseclip.goosecode.ide.v1.ResponseMessage.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gooseclip.goosecode.ide.v1.ResponseMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.gooseclip.goosecode.ide.v1.ResponseMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gooseclip.goosecode.ide.v1.ResponseMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.ResponseMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    repositorySnapshotFingerprint: jspb.Message.getFieldWithDefault(msg, 2, ""),
    listFilesResponse: (f = msg.getListFilesResponse()) && proto.gooseclip.goosecode.ide.v1.ListFilesResponse.toObject(includeInstance, f),
    getFilesResponse: (f = msg.getGetFilesResponse()) && proto.gooseclip.goosecode.ide.v1.GetFilesResponse.toObject(includeInstance, f),
    openFilesResponse: (f = msg.getOpenFilesResponse()) && proto.gooseclip.goosecode.ide.v1.OpenFilesResponse.toObject(includeInstance, f),
    findStringResponse: (f = msg.getFindStringResponse()) && proto.gooseclip.goosecode.ide.v1.FindStringResponse.toObject(includeInstance, f),
    selectRangeResponse: (f = msg.getSelectRangeResponse()) && proto.gooseclip.goosecode.ide.v1.SelectRangeResponse.toObject(includeInstance, f),
    describeRangeResponse: (f = msg.getDescribeRangeResponse()) && proto.gooseclip.goosecode.ide.v1.DescribeRangeResponse.toObject(includeInstance, f),
    goToDefinitionResponse: (f = msg.getGoToDefinitionResponse()) && proto.gooseclip.goosecode.ide.v1.GoToDefinitionResponse.toObject(includeInstance, f),
    renameResponse: (f = msg.getRenameResponse()) && proto.gooseclip.goosecode.ide.v1.RenameResponse.toObject(includeInstance, f),
    findUsesResponse: (f = msg.getFindUsesResponse()) && proto.gooseclip.goosecode.ide.v1.FindUsesResponse.toObject(includeInstance, f),
    errorResponse: (f = msg.getErrorResponse()) && proto.gooseclip.goosecode.ide.v1.ErrorResponse.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gooseclip.goosecode.ide.v1.ResponseMessage}
 */
proto.gooseclip.goosecode.ide.v1.ResponseMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseclip.goosecode.ide.v1.ResponseMessage;
  return proto.gooseclip.goosecode.ide.v1.ResponseMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gooseclip.goosecode.ide.v1.ResponseMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gooseclip.goosecode.ide.v1.ResponseMessage}
 */
proto.gooseclip.goosecode.ide.v1.ResponseMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.gooseclip.goosecode.ide.v1.ResponseType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRepositorySnapshotFingerprint(value);
      break;
    case 10:
      var value = new proto.gooseclip.goosecode.ide.v1.ListFilesResponse;
      reader.readMessage(value,proto.gooseclip.goosecode.ide.v1.ListFilesResponse.deserializeBinaryFromReader);
      msg.setListFilesResponse(value);
      break;
    case 11:
      var value = new proto.gooseclip.goosecode.ide.v1.GetFilesResponse;
      reader.readMessage(value,proto.gooseclip.goosecode.ide.v1.GetFilesResponse.deserializeBinaryFromReader);
      msg.setGetFilesResponse(value);
      break;
    case 12:
      var value = new proto.gooseclip.goosecode.ide.v1.OpenFilesResponse;
      reader.readMessage(value,proto.gooseclip.goosecode.ide.v1.OpenFilesResponse.deserializeBinaryFromReader);
      msg.setOpenFilesResponse(value);
      break;
    case 13:
      var value = new proto.gooseclip.goosecode.ide.v1.FindStringResponse;
      reader.readMessage(value,proto.gooseclip.goosecode.ide.v1.FindStringResponse.deserializeBinaryFromReader);
      msg.setFindStringResponse(value);
      break;
    case 14:
      var value = new proto.gooseclip.goosecode.ide.v1.SelectRangeResponse;
      reader.readMessage(value,proto.gooseclip.goosecode.ide.v1.SelectRangeResponse.deserializeBinaryFromReader);
      msg.setSelectRangeResponse(value);
      break;
    case 15:
      var value = new proto.gooseclip.goosecode.ide.v1.DescribeRangeResponse;
      reader.readMessage(value,proto.gooseclip.goosecode.ide.v1.DescribeRangeResponse.deserializeBinaryFromReader);
      msg.setDescribeRangeResponse(value);
      break;
    case 16:
      var value = new proto.gooseclip.goosecode.ide.v1.GoToDefinitionResponse;
      reader.readMessage(value,proto.gooseclip.goosecode.ide.v1.GoToDefinitionResponse.deserializeBinaryFromReader);
      msg.setGoToDefinitionResponse(value);
      break;
    case 17:
      var value = new proto.gooseclip.goosecode.ide.v1.RenameResponse;
      reader.readMessage(value,proto.gooseclip.goosecode.ide.v1.RenameResponse.deserializeBinaryFromReader);
      msg.setRenameResponse(value);
      break;
    case 18:
      var value = new proto.gooseclip.goosecode.ide.v1.FindUsesResponse;
      reader.readMessage(value,proto.gooseclip.goosecode.ide.v1.FindUsesResponse.deserializeBinaryFromReader);
      msg.setFindUsesResponse(value);
      break;
    case 999:
      var value = new proto.gooseclip.goosecode.ide.v1.ErrorResponse;
      reader.readMessage(value,proto.gooseclip.goosecode.ide.v1.ErrorResponse.deserializeBinaryFromReader);
      msg.setErrorResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gooseclip.goosecode.ide.v1.ResponseMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gooseclip.goosecode.ide.v1.ResponseMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gooseclip.goosecode.ide.v1.ResponseMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.ResponseMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getRepositorySnapshotFingerprint();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getListFilesResponse();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.gooseclip.goosecode.ide.v1.ListFilesResponse.serializeBinaryToWriter
    );
  }
  f = message.getGetFilesResponse();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.gooseclip.goosecode.ide.v1.GetFilesResponse.serializeBinaryToWriter
    );
  }
  f = message.getOpenFilesResponse();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.gooseclip.goosecode.ide.v1.OpenFilesResponse.serializeBinaryToWriter
    );
  }
  f = message.getFindStringResponse();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.gooseclip.goosecode.ide.v1.FindStringResponse.serializeBinaryToWriter
    );
  }
  f = message.getSelectRangeResponse();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.gooseclip.goosecode.ide.v1.SelectRangeResponse.serializeBinaryToWriter
    );
  }
  f = message.getDescribeRangeResponse();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.gooseclip.goosecode.ide.v1.DescribeRangeResponse.serializeBinaryToWriter
    );
  }
  f = message.getGoToDefinitionResponse();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.gooseclip.goosecode.ide.v1.GoToDefinitionResponse.serializeBinaryToWriter
    );
  }
  f = message.getRenameResponse();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.gooseclip.goosecode.ide.v1.RenameResponse.serializeBinaryToWriter
    );
  }
  f = message.getFindUsesResponse();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.gooseclip.goosecode.ide.v1.FindUsesResponse.serializeBinaryToWriter
    );
  }
  f = message.getErrorResponse();
  if (f != null) {
    writer.writeMessage(
      999,
      f,
      proto.gooseclip.goosecode.ide.v1.ErrorResponse.serializeBinaryToWriter
    );
  }
};


/**
 * optional ResponseType type = 1;
 * @return {!proto.gooseclip.goosecode.ide.v1.ResponseType}
 */
proto.gooseclip.goosecode.ide.v1.ResponseMessage.prototype.getType = function() {
  return /** @type {!proto.gooseclip.goosecode.ide.v1.ResponseType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.gooseclip.goosecode.ide.v1.ResponseType} value
 * @return {!proto.gooseclip.goosecode.ide.v1.ResponseMessage} returns this
 */
proto.gooseclip.goosecode.ide.v1.ResponseMessage.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string repository_snapshot_fingerprint = 2;
 * @return {string}
 */
proto.gooseclip.goosecode.ide.v1.ResponseMessage.prototype.getRepositorySnapshotFingerprint = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.gooseclip.goosecode.ide.v1.ResponseMessage} returns this
 */
proto.gooseclip.goosecode.ide.v1.ResponseMessage.prototype.setRepositorySnapshotFingerprint = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional ListFilesResponse list_files_response = 10;
 * @return {?proto.gooseclip.goosecode.ide.v1.ListFilesResponse}
 */
proto.gooseclip.goosecode.ide.v1.ResponseMessage.prototype.getListFilesResponse = function() {
  return /** @type{?proto.gooseclip.goosecode.ide.v1.ListFilesResponse} */ (
    jspb.Message.getWrapperField(this, proto.gooseclip.goosecode.ide.v1.ListFilesResponse, 10));
};


/**
 * @param {?proto.gooseclip.goosecode.ide.v1.ListFilesResponse|undefined} value
 * @return {!proto.gooseclip.goosecode.ide.v1.ResponseMessage} returns this
*/
proto.gooseclip.goosecode.ide.v1.ResponseMessage.prototype.setListFilesResponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.gooseclip.goosecode.ide.v1.ResponseMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.gooseclip.goosecode.ide.v1.ResponseMessage} returns this
 */
proto.gooseclip.goosecode.ide.v1.ResponseMessage.prototype.clearListFilesResponse = function() {
  return this.setListFilesResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gooseclip.goosecode.ide.v1.ResponseMessage.prototype.hasListFilesResponse = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional GetFilesResponse get_files_response = 11;
 * @return {?proto.gooseclip.goosecode.ide.v1.GetFilesResponse}
 */
proto.gooseclip.goosecode.ide.v1.ResponseMessage.prototype.getGetFilesResponse = function() {
  return /** @type{?proto.gooseclip.goosecode.ide.v1.GetFilesResponse} */ (
    jspb.Message.getWrapperField(this, proto.gooseclip.goosecode.ide.v1.GetFilesResponse, 11));
};


/**
 * @param {?proto.gooseclip.goosecode.ide.v1.GetFilesResponse|undefined} value
 * @return {!proto.gooseclip.goosecode.ide.v1.ResponseMessage} returns this
*/
proto.gooseclip.goosecode.ide.v1.ResponseMessage.prototype.setGetFilesResponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.gooseclip.goosecode.ide.v1.ResponseMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.gooseclip.goosecode.ide.v1.ResponseMessage} returns this
 */
proto.gooseclip.goosecode.ide.v1.ResponseMessage.prototype.clearGetFilesResponse = function() {
  return this.setGetFilesResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gooseclip.goosecode.ide.v1.ResponseMessage.prototype.hasGetFilesResponse = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional OpenFilesResponse open_files_response = 12;
 * @return {?proto.gooseclip.goosecode.ide.v1.OpenFilesResponse}
 */
proto.gooseclip.goosecode.ide.v1.ResponseMessage.prototype.getOpenFilesResponse = function() {
  return /** @type{?proto.gooseclip.goosecode.ide.v1.OpenFilesResponse} */ (
    jspb.Message.getWrapperField(this, proto.gooseclip.goosecode.ide.v1.OpenFilesResponse, 12));
};


/**
 * @param {?proto.gooseclip.goosecode.ide.v1.OpenFilesResponse|undefined} value
 * @return {!proto.gooseclip.goosecode.ide.v1.ResponseMessage} returns this
*/
proto.gooseclip.goosecode.ide.v1.ResponseMessage.prototype.setOpenFilesResponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.gooseclip.goosecode.ide.v1.ResponseMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.gooseclip.goosecode.ide.v1.ResponseMessage} returns this
 */
proto.gooseclip.goosecode.ide.v1.ResponseMessage.prototype.clearOpenFilesResponse = function() {
  return this.setOpenFilesResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gooseclip.goosecode.ide.v1.ResponseMessage.prototype.hasOpenFilesResponse = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional FindStringResponse find_string_response = 13;
 * @return {?proto.gooseclip.goosecode.ide.v1.FindStringResponse}
 */
proto.gooseclip.goosecode.ide.v1.ResponseMessage.prototype.getFindStringResponse = function() {
  return /** @type{?proto.gooseclip.goosecode.ide.v1.FindStringResponse} */ (
    jspb.Message.getWrapperField(this, proto.gooseclip.goosecode.ide.v1.FindStringResponse, 13));
};


/**
 * @param {?proto.gooseclip.goosecode.ide.v1.FindStringResponse|undefined} value
 * @return {!proto.gooseclip.goosecode.ide.v1.ResponseMessage} returns this
*/
proto.gooseclip.goosecode.ide.v1.ResponseMessage.prototype.setFindStringResponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 13, proto.gooseclip.goosecode.ide.v1.ResponseMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.gooseclip.goosecode.ide.v1.ResponseMessage} returns this
 */
proto.gooseclip.goosecode.ide.v1.ResponseMessage.prototype.clearFindStringResponse = function() {
  return this.setFindStringResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gooseclip.goosecode.ide.v1.ResponseMessage.prototype.hasFindStringResponse = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional SelectRangeResponse select_range_response = 14;
 * @return {?proto.gooseclip.goosecode.ide.v1.SelectRangeResponse}
 */
proto.gooseclip.goosecode.ide.v1.ResponseMessage.prototype.getSelectRangeResponse = function() {
  return /** @type{?proto.gooseclip.goosecode.ide.v1.SelectRangeResponse} */ (
    jspb.Message.getWrapperField(this, proto.gooseclip.goosecode.ide.v1.SelectRangeResponse, 14));
};


/**
 * @param {?proto.gooseclip.goosecode.ide.v1.SelectRangeResponse|undefined} value
 * @return {!proto.gooseclip.goosecode.ide.v1.ResponseMessage} returns this
*/
proto.gooseclip.goosecode.ide.v1.ResponseMessage.prototype.setSelectRangeResponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 14, proto.gooseclip.goosecode.ide.v1.ResponseMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.gooseclip.goosecode.ide.v1.ResponseMessage} returns this
 */
proto.gooseclip.goosecode.ide.v1.ResponseMessage.prototype.clearSelectRangeResponse = function() {
  return this.setSelectRangeResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gooseclip.goosecode.ide.v1.ResponseMessage.prototype.hasSelectRangeResponse = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional DescribeRangeResponse describe_range_response = 15;
 * @return {?proto.gooseclip.goosecode.ide.v1.DescribeRangeResponse}
 */
proto.gooseclip.goosecode.ide.v1.ResponseMessage.prototype.getDescribeRangeResponse = function() {
  return /** @type{?proto.gooseclip.goosecode.ide.v1.DescribeRangeResponse} */ (
    jspb.Message.getWrapperField(this, proto.gooseclip.goosecode.ide.v1.DescribeRangeResponse, 15));
};


/**
 * @param {?proto.gooseclip.goosecode.ide.v1.DescribeRangeResponse|undefined} value
 * @return {!proto.gooseclip.goosecode.ide.v1.ResponseMessage} returns this
*/
proto.gooseclip.goosecode.ide.v1.ResponseMessage.prototype.setDescribeRangeResponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 15, proto.gooseclip.goosecode.ide.v1.ResponseMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.gooseclip.goosecode.ide.v1.ResponseMessage} returns this
 */
proto.gooseclip.goosecode.ide.v1.ResponseMessage.prototype.clearDescribeRangeResponse = function() {
  return this.setDescribeRangeResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gooseclip.goosecode.ide.v1.ResponseMessage.prototype.hasDescribeRangeResponse = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional GoToDefinitionResponse go_to_definition_response = 16;
 * @return {?proto.gooseclip.goosecode.ide.v1.GoToDefinitionResponse}
 */
proto.gooseclip.goosecode.ide.v1.ResponseMessage.prototype.getGoToDefinitionResponse = function() {
  return /** @type{?proto.gooseclip.goosecode.ide.v1.GoToDefinitionResponse} */ (
    jspb.Message.getWrapperField(this, proto.gooseclip.goosecode.ide.v1.GoToDefinitionResponse, 16));
};


/**
 * @param {?proto.gooseclip.goosecode.ide.v1.GoToDefinitionResponse|undefined} value
 * @return {!proto.gooseclip.goosecode.ide.v1.ResponseMessage} returns this
*/
proto.gooseclip.goosecode.ide.v1.ResponseMessage.prototype.setGoToDefinitionResponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 16, proto.gooseclip.goosecode.ide.v1.ResponseMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.gooseclip.goosecode.ide.v1.ResponseMessage} returns this
 */
proto.gooseclip.goosecode.ide.v1.ResponseMessage.prototype.clearGoToDefinitionResponse = function() {
  return this.setGoToDefinitionResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gooseclip.goosecode.ide.v1.ResponseMessage.prototype.hasGoToDefinitionResponse = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional RenameResponse rename_response = 17;
 * @return {?proto.gooseclip.goosecode.ide.v1.RenameResponse}
 */
proto.gooseclip.goosecode.ide.v1.ResponseMessage.prototype.getRenameResponse = function() {
  return /** @type{?proto.gooseclip.goosecode.ide.v1.RenameResponse} */ (
    jspb.Message.getWrapperField(this, proto.gooseclip.goosecode.ide.v1.RenameResponse, 17));
};


/**
 * @param {?proto.gooseclip.goosecode.ide.v1.RenameResponse|undefined} value
 * @return {!proto.gooseclip.goosecode.ide.v1.ResponseMessage} returns this
*/
proto.gooseclip.goosecode.ide.v1.ResponseMessage.prototype.setRenameResponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 17, proto.gooseclip.goosecode.ide.v1.ResponseMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.gooseclip.goosecode.ide.v1.ResponseMessage} returns this
 */
proto.gooseclip.goosecode.ide.v1.ResponseMessage.prototype.clearRenameResponse = function() {
  return this.setRenameResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gooseclip.goosecode.ide.v1.ResponseMessage.prototype.hasRenameResponse = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional FindUsesResponse find_uses_response = 18;
 * @return {?proto.gooseclip.goosecode.ide.v1.FindUsesResponse}
 */
proto.gooseclip.goosecode.ide.v1.ResponseMessage.prototype.getFindUsesResponse = function() {
  return /** @type{?proto.gooseclip.goosecode.ide.v1.FindUsesResponse} */ (
    jspb.Message.getWrapperField(this, proto.gooseclip.goosecode.ide.v1.FindUsesResponse, 18));
};


/**
 * @param {?proto.gooseclip.goosecode.ide.v1.FindUsesResponse|undefined} value
 * @return {!proto.gooseclip.goosecode.ide.v1.ResponseMessage} returns this
*/
proto.gooseclip.goosecode.ide.v1.ResponseMessage.prototype.setFindUsesResponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 18, proto.gooseclip.goosecode.ide.v1.ResponseMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.gooseclip.goosecode.ide.v1.ResponseMessage} returns this
 */
proto.gooseclip.goosecode.ide.v1.ResponseMessage.prototype.clearFindUsesResponse = function() {
  return this.setFindUsesResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gooseclip.goosecode.ide.v1.ResponseMessage.prototype.hasFindUsesResponse = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional ErrorResponse error_response = 999;
 * @return {?proto.gooseclip.goosecode.ide.v1.ErrorResponse}
 */
proto.gooseclip.goosecode.ide.v1.ResponseMessage.prototype.getErrorResponse = function() {
  return /** @type{?proto.gooseclip.goosecode.ide.v1.ErrorResponse} */ (
    jspb.Message.getWrapperField(this, proto.gooseclip.goosecode.ide.v1.ErrorResponse, 999));
};


/**
 * @param {?proto.gooseclip.goosecode.ide.v1.ErrorResponse|undefined} value
 * @return {!proto.gooseclip.goosecode.ide.v1.ResponseMessage} returns this
*/
proto.gooseclip.goosecode.ide.v1.ResponseMessage.prototype.setErrorResponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 999, proto.gooseclip.goosecode.ide.v1.ResponseMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.gooseclip.goosecode.ide.v1.ResponseMessage} returns this
 */
proto.gooseclip.goosecode.ide.v1.ResponseMessage.prototype.clearErrorResponse = function() {
  return this.setErrorResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gooseclip.goosecode.ide.v1.ResponseMessage.prototype.hasErrorResponse = function() {
  return jspb.Message.getField(this, 999) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gooseclip.goosecode.ide.v1.OpenPush.prototype.toObject = function(opt_includeInstance) {
  return proto.gooseclip.goosecode.ide.v1.OpenPush.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gooseclip.goosecode.ide.v1.OpenPush} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.OpenPush.toObject = function(includeInstance, msg) {
  var f, obj = {
    path: jspb.Message.getFieldWithDefault(msg, 1, ""),
    range: (f = msg.getRange()) && proto.gooseclip.goosecode.ide.v1.Range.toObject(includeInstance, f),
    forceNew: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gooseclip.goosecode.ide.v1.OpenPush}
 */
proto.gooseclip.goosecode.ide.v1.OpenPush.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseclip.goosecode.ide.v1.OpenPush;
  return proto.gooseclip.goosecode.ide.v1.OpenPush.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gooseclip.goosecode.ide.v1.OpenPush} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gooseclip.goosecode.ide.v1.OpenPush}
 */
proto.gooseclip.goosecode.ide.v1.OpenPush.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 2:
      var value = new proto.gooseclip.goosecode.ide.v1.Range;
      reader.readMessage(value,proto.gooseclip.goosecode.ide.v1.Range.deserializeBinaryFromReader);
      msg.setRange(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setForceNew(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gooseclip.goosecode.ide.v1.OpenPush.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gooseclip.goosecode.ide.v1.OpenPush.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gooseclip.goosecode.ide.v1.OpenPush} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.OpenPush.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRange();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.gooseclip.goosecode.ide.v1.Range.serializeBinaryToWriter
    );
  }
  f = message.getForceNew();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string path = 1;
 * @return {string}
 */
proto.gooseclip.goosecode.ide.v1.OpenPush.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.gooseclip.goosecode.ide.v1.OpenPush} returns this
 */
proto.gooseclip.goosecode.ide.v1.OpenPush.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Range range = 2;
 * @return {?proto.gooseclip.goosecode.ide.v1.Range}
 */
proto.gooseclip.goosecode.ide.v1.OpenPush.prototype.getRange = function() {
  return /** @type{?proto.gooseclip.goosecode.ide.v1.Range} */ (
    jspb.Message.getWrapperField(this, proto.gooseclip.goosecode.ide.v1.Range, 2));
};


/**
 * @param {?proto.gooseclip.goosecode.ide.v1.Range|undefined} value
 * @return {!proto.gooseclip.goosecode.ide.v1.OpenPush} returns this
*/
proto.gooseclip.goosecode.ide.v1.OpenPush.prototype.setRange = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.gooseclip.goosecode.ide.v1.OpenPush} returns this
 */
proto.gooseclip.goosecode.ide.v1.OpenPush.prototype.clearRange = function() {
  return this.setRange(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gooseclip.goosecode.ide.v1.OpenPush.prototype.hasRange = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool force_new = 3;
 * @return {boolean}
 */
proto.gooseclip.goosecode.ide.v1.OpenPush.prototype.getForceNew = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.gooseclip.goosecode.ide.v1.OpenPush} returns this
 */
proto.gooseclip.goosecode.ide.v1.OpenPush.prototype.setForceNew = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gooseclip.goosecode.ide.v1.SnippetContext.prototype.toObject = function(opt_includeInstance) {
  return proto.gooseclip.goosecode.ide.v1.SnippetContext.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gooseclip.goosecode.ide.v1.SnippetContext} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.SnippetContext.toObject = function(includeInstance, msg) {
  var f, obj = {
    before: jspb.Message.getFieldWithDefault(msg, 1, 0),
    after: jspb.Message.getFieldWithDefault(msg, 2, 0),
    fullRange: (f = msg.getFullRange()) && proto.gooseclip.goosecode.ide.v1.Range.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gooseclip.goosecode.ide.v1.SnippetContext}
 */
proto.gooseclip.goosecode.ide.v1.SnippetContext.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseclip.goosecode.ide.v1.SnippetContext;
  return proto.gooseclip.goosecode.ide.v1.SnippetContext.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gooseclip.goosecode.ide.v1.SnippetContext} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gooseclip.goosecode.ide.v1.SnippetContext}
 */
proto.gooseclip.goosecode.ide.v1.SnippetContext.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBefore(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAfter(value);
      break;
    case 3:
      var value = new proto.gooseclip.goosecode.ide.v1.Range;
      reader.readMessage(value,proto.gooseclip.goosecode.ide.v1.Range.deserializeBinaryFromReader);
      msg.setFullRange(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gooseclip.goosecode.ide.v1.SnippetContext.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gooseclip.goosecode.ide.v1.SnippetContext.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gooseclip.goosecode.ide.v1.SnippetContext} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.SnippetContext.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getFullRange();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.gooseclip.goosecode.ide.v1.Range.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 before = 1;
 * @return {number}
 */
proto.gooseclip.goosecode.ide.v1.SnippetContext.prototype.getBefore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.gooseclip.goosecode.ide.v1.SnippetContext} returns this
 */
proto.gooseclip.goosecode.ide.v1.SnippetContext.prototype.setBefore = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.gooseclip.goosecode.ide.v1.SnippetContext} returns this
 */
proto.gooseclip.goosecode.ide.v1.SnippetContext.prototype.clearBefore = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gooseclip.goosecode.ide.v1.SnippetContext.prototype.hasBefore = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 after = 2;
 * @return {number}
 */
proto.gooseclip.goosecode.ide.v1.SnippetContext.prototype.getAfter = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.gooseclip.goosecode.ide.v1.SnippetContext} returns this
 */
proto.gooseclip.goosecode.ide.v1.SnippetContext.prototype.setAfter = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.gooseclip.goosecode.ide.v1.SnippetContext} returns this
 */
proto.gooseclip.goosecode.ide.v1.SnippetContext.prototype.clearAfter = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gooseclip.goosecode.ide.v1.SnippetContext.prototype.hasAfter = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Range full_range = 3;
 * @return {?proto.gooseclip.goosecode.ide.v1.Range}
 */
proto.gooseclip.goosecode.ide.v1.SnippetContext.prototype.getFullRange = function() {
  return /** @type{?proto.gooseclip.goosecode.ide.v1.Range} */ (
    jspb.Message.getWrapperField(this, proto.gooseclip.goosecode.ide.v1.Range, 3));
};


/**
 * @param {?proto.gooseclip.goosecode.ide.v1.Range|undefined} value
 * @return {!proto.gooseclip.goosecode.ide.v1.SnippetContext} returns this
*/
proto.gooseclip.goosecode.ide.v1.SnippetContext.prototype.setFullRange = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.gooseclip.goosecode.ide.v1.SnippetContext} returns this
 */
proto.gooseclip.goosecode.ide.v1.SnippetContext.prototype.clearFullRange = function() {
  return this.setFullRange(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gooseclip.goosecode.ide.v1.SnippetContext.prototype.hasFullRange = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gooseclip.goosecode.ide.v1.CreateSnippetPush.prototype.toObject = function(opt_includeInstance) {
  return proto.gooseclip.goosecode.ide.v1.CreateSnippetPush.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gooseclip.goosecode.ide.v1.CreateSnippetPush} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.CreateSnippetPush.toObject = function(includeInstance, msg) {
  var f, obj = {
    location: (f = msg.getLocation()) && proto.gooseclip.goosecode.ide.v1.Location.toObject(includeInstance, f),
    context: (f = msg.getContext()) && proto.gooseclip.goosecode.ide.v1.SnippetContext.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gooseclip.goosecode.ide.v1.CreateSnippetPush}
 */
proto.gooseclip.goosecode.ide.v1.CreateSnippetPush.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseclip.goosecode.ide.v1.CreateSnippetPush;
  return proto.gooseclip.goosecode.ide.v1.CreateSnippetPush.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gooseclip.goosecode.ide.v1.CreateSnippetPush} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gooseclip.goosecode.ide.v1.CreateSnippetPush}
 */
proto.gooseclip.goosecode.ide.v1.CreateSnippetPush.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.gooseclip.goosecode.ide.v1.Location;
      reader.readMessage(value,proto.gooseclip.goosecode.ide.v1.Location.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    case 2:
      var value = new proto.gooseclip.goosecode.ide.v1.SnippetContext;
      reader.readMessage(value,proto.gooseclip.goosecode.ide.v1.SnippetContext.deserializeBinaryFromReader);
      msg.setContext(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gooseclip.goosecode.ide.v1.CreateSnippetPush.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gooseclip.goosecode.ide.v1.CreateSnippetPush.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gooseclip.goosecode.ide.v1.CreateSnippetPush} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.CreateSnippetPush.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.gooseclip.goosecode.ide.v1.Location.serializeBinaryToWriter
    );
  }
  f = message.getContext();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.gooseclip.goosecode.ide.v1.SnippetContext.serializeBinaryToWriter
    );
  }
};


/**
 * optional Location location = 1;
 * @return {?proto.gooseclip.goosecode.ide.v1.Location}
 */
proto.gooseclip.goosecode.ide.v1.CreateSnippetPush.prototype.getLocation = function() {
  return /** @type{?proto.gooseclip.goosecode.ide.v1.Location} */ (
    jspb.Message.getWrapperField(this, proto.gooseclip.goosecode.ide.v1.Location, 1));
};


/**
 * @param {?proto.gooseclip.goosecode.ide.v1.Location|undefined} value
 * @return {!proto.gooseclip.goosecode.ide.v1.CreateSnippetPush} returns this
*/
proto.gooseclip.goosecode.ide.v1.CreateSnippetPush.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.gooseclip.goosecode.ide.v1.CreateSnippetPush} returns this
 */
proto.gooseclip.goosecode.ide.v1.CreateSnippetPush.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gooseclip.goosecode.ide.v1.CreateSnippetPush.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional SnippetContext context = 2;
 * @return {?proto.gooseclip.goosecode.ide.v1.SnippetContext}
 */
proto.gooseclip.goosecode.ide.v1.CreateSnippetPush.prototype.getContext = function() {
  return /** @type{?proto.gooseclip.goosecode.ide.v1.SnippetContext} */ (
    jspb.Message.getWrapperField(this, proto.gooseclip.goosecode.ide.v1.SnippetContext, 2));
};


/**
 * @param {?proto.gooseclip.goosecode.ide.v1.SnippetContext|undefined} value
 * @return {!proto.gooseclip.goosecode.ide.v1.CreateSnippetPush} returns this
*/
proto.gooseclip.goosecode.ide.v1.CreateSnippetPush.prototype.setContext = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.gooseclip.goosecode.ide.v1.CreateSnippetPush} returns this
 */
proto.gooseclip.goosecode.ide.v1.CreateSnippetPush.prototype.clearContext = function() {
  return this.setContext(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gooseclip.goosecode.ide.v1.CreateSnippetPush.prototype.hasContext = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gooseclip.goosecode.ide.v1.BookmarkPush.prototype.toObject = function(opt_includeInstance) {
  return proto.gooseclip.goosecode.ide.v1.BookmarkPush.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gooseclip.goosecode.ide.v1.BookmarkPush} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.BookmarkPush.toObject = function(includeInstance, msg) {
  var f, obj = {
    path: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gooseclip.goosecode.ide.v1.BookmarkPush}
 */
proto.gooseclip.goosecode.ide.v1.BookmarkPush.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseclip.goosecode.ide.v1.BookmarkPush;
  return proto.gooseclip.goosecode.ide.v1.BookmarkPush.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gooseclip.goosecode.ide.v1.BookmarkPush} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gooseclip.goosecode.ide.v1.BookmarkPush}
 */
proto.gooseclip.goosecode.ide.v1.BookmarkPush.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gooseclip.goosecode.ide.v1.BookmarkPush.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gooseclip.goosecode.ide.v1.BookmarkPush.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gooseclip.goosecode.ide.v1.BookmarkPush} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.BookmarkPush.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string path = 1;
 * @return {string}
 */
proto.gooseclip.goosecode.ide.v1.BookmarkPush.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.gooseclip.goosecode.ide.v1.BookmarkPush} returns this
 */
proto.gooseclip.goosecode.ide.v1.BookmarkPush.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gooseclip.goosecode.ide.v1.HighlightPush.prototype.toObject = function(opt_includeInstance) {
  return proto.gooseclip.goosecode.ide.v1.HighlightPush.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gooseclip.goosecode.ide.v1.HighlightPush} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.HighlightPush.toObject = function(includeInstance, msg) {
  var f, obj = {
    path: jspb.Message.getFieldWithDefault(msg, 1, ""),
    range: (f = msg.getRange()) && proto.gooseclip.goosecode.ide.v1.Range.toObject(includeInstance, f),
    color: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gooseclip.goosecode.ide.v1.HighlightPush}
 */
proto.gooseclip.goosecode.ide.v1.HighlightPush.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseclip.goosecode.ide.v1.HighlightPush;
  return proto.gooseclip.goosecode.ide.v1.HighlightPush.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gooseclip.goosecode.ide.v1.HighlightPush} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gooseclip.goosecode.ide.v1.HighlightPush}
 */
proto.gooseclip.goosecode.ide.v1.HighlightPush.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 2:
      var value = new proto.gooseclip.goosecode.ide.v1.Range;
      reader.readMessage(value,proto.gooseclip.goosecode.ide.v1.Range.deserializeBinaryFromReader);
      msg.setRange(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setColor(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gooseclip.goosecode.ide.v1.HighlightPush.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gooseclip.goosecode.ide.v1.HighlightPush.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gooseclip.goosecode.ide.v1.HighlightPush} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.HighlightPush.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRange();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.gooseclip.goosecode.ide.v1.Range.serializeBinaryToWriter
    );
  }
  f = message.getColor();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional string path = 1;
 * @return {string}
 */
proto.gooseclip.goosecode.ide.v1.HighlightPush.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.gooseclip.goosecode.ide.v1.HighlightPush} returns this
 */
proto.gooseclip.goosecode.ide.v1.HighlightPush.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Range range = 2;
 * @return {?proto.gooseclip.goosecode.ide.v1.Range}
 */
proto.gooseclip.goosecode.ide.v1.HighlightPush.prototype.getRange = function() {
  return /** @type{?proto.gooseclip.goosecode.ide.v1.Range} */ (
    jspb.Message.getWrapperField(this, proto.gooseclip.goosecode.ide.v1.Range, 2));
};


/**
 * @param {?proto.gooseclip.goosecode.ide.v1.Range|undefined} value
 * @return {!proto.gooseclip.goosecode.ide.v1.HighlightPush} returns this
*/
proto.gooseclip.goosecode.ide.v1.HighlightPush.prototype.setRange = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.gooseclip.goosecode.ide.v1.HighlightPush} returns this
 */
proto.gooseclip.goosecode.ide.v1.HighlightPush.prototype.clearRange = function() {
  return this.setRange(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gooseclip.goosecode.ide.v1.HighlightPush.prototype.hasRange = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 color = 3;
 * @return {number}
 */
proto.gooseclip.goosecode.ide.v1.HighlightPush.prototype.getColor = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.gooseclip.goosecode.ide.v1.HighlightPush} returns this
 */
proto.gooseclip.goosecode.ide.v1.HighlightPush.prototype.setColor = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gooseclip.goosecode.ide.v1.LocationWithContext.prototype.toObject = function(opt_includeInstance) {
  return proto.gooseclip.goosecode.ide.v1.LocationWithContext.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gooseclip.goosecode.ide.v1.LocationWithContext} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.LocationWithContext.toObject = function(includeInstance, msg) {
  var f, obj = {
    location: (f = msg.getLocation()) && proto.gooseclip.goosecode.ide.v1.Location.toObject(includeInstance, f),
    context: (f = msg.getContext()) && proto.gooseclip.goosecode.ide.v1.SnippetContext.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gooseclip.goosecode.ide.v1.LocationWithContext}
 */
proto.gooseclip.goosecode.ide.v1.LocationWithContext.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseclip.goosecode.ide.v1.LocationWithContext;
  return proto.gooseclip.goosecode.ide.v1.LocationWithContext.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gooseclip.goosecode.ide.v1.LocationWithContext} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gooseclip.goosecode.ide.v1.LocationWithContext}
 */
proto.gooseclip.goosecode.ide.v1.LocationWithContext.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.gooseclip.goosecode.ide.v1.Location;
      reader.readMessage(value,proto.gooseclip.goosecode.ide.v1.Location.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    case 2:
      var value = new proto.gooseclip.goosecode.ide.v1.SnippetContext;
      reader.readMessage(value,proto.gooseclip.goosecode.ide.v1.SnippetContext.deserializeBinaryFromReader);
      msg.setContext(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gooseclip.goosecode.ide.v1.LocationWithContext.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gooseclip.goosecode.ide.v1.LocationWithContext.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gooseclip.goosecode.ide.v1.LocationWithContext} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.LocationWithContext.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.gooseclip.goosecode.ide.v1.Location.serializeBinaryToWriter
    );
  }
  f = message.getContext();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.gooseclip.goosecode.ide.v1.SnippetContext.serializeBinaryToWriter
    );
  }
};


/**
 * optional Location location = 1;
 * @return {?proto.gooseclip.goosecode.ide.v1.Location}
 */
proto.gooseclip.goosecode.ide.v1.LocationWithContext.prototype.getLocation = function() {
  return /** @type{?proto.gooseclip.goosecode.ide.v1.Location} */ (
    jspb.Message.getWrapperField(this, proto.gooseclip.goosecode.ide.v1.Location, 1));
};


/**
 * @param {?proto.gooseclip.goosecode.ide.v1.Location|undefined} value
 * @return {!proto.gooseclip.goosecode.ide.v1.LocationWithContext} returns this
*/
proto.gooseclip.goosecode.ide.v1.LocationWithContext.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.gooseclip.goosecode.ide.v1.LocationWithContext} returns this
 */
proto.gooseclip.goosecode.ide.v1.LocationWithContext.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gooseclip.goosecode.ide.v1.LocationWithContext.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional SnippetContext context = 2;
 * @return {?proto.gooseclip.goosecode.ide.v1.SnippetContext}
 */
proto.gooseclip.goosecode.ide.v1.LocationWithContext.prototype.getContext = function() {
  return /** @type{?proto.gooseclip.goosecode.ide.v1.SnippetContext} */ (
    jspb.Message.getWrapperField(this, proto.gooseclip.goosecode.ide.v1.SnippetContext, 2));
};


/**
 * @param {?proto.gooseclip.goosecode.ide.v1.SnippetContext|undefined} value
 * @return {!proto.gooseclip.goosecode.ide.v1.LocationWithContext} returns this
*/
proto.gooseclip.goosecode.ide.v1.LocationWithContext.prototype.setContext = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.gooseclip.goosecode.ide.v1.LocationWithContext} returns this
 */
proto.gooseclip.goosecode.ide.v1.LocationWithContext.prototype.clearContext = function() {
  return this.setContext(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gooseclip.goosecode.ide.v1.LocationWithContext.prototype.hasContext = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gooseclip.goosecode.ide.v1.DefinitionFollow.prototype.toObject = function(opt_includeInstance) {
  return proto.gooseclip.goosecode.ide.v1.DefinitionFollow.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gooseclip.goosecode.ide.v1.DefinitionFollow} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.DefinitionFollow.toObject = function(includeInstance, msg) {
  var f, obj = {
    from: (f = msg.getFrom()) && proto.gooseclip.goosecode.ide.v1.LocationWithContext.toObject(includeInstance, f),
    to: (f = msg.getTo()) && proto.gooseclip.goosecode.ide.v1.LocationWithContext.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gooseclip.goosecode.ide.v1.DefinitionFollow}
 */
proto.gooseclip.goosecode.ide.v1.DefinitionFollow.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseclip.goosecode.ide.v1.DefinitionFollow;
  return proto.gooseclip.goosecode.ide.v1.DefinitionFollow.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gooseclip.goosecode.ide.v1.DefinitionFollow} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gooseclip.goosecode.ide.v1.DefinitionFollow}
 */
proto.gooseclip.goosecode.ide.v1.DefinitionFollow.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.gooseclip.goosecode.ide.v1.LocationWithContext;
      reader.readMessage(value,proto.gooseclip.goosecode.ide.v1.LocationWithContext.deserializeBinaryFromReader);
      msg.setFrom(value);
      break;
    case 2:
      var value = new proto.gooseclip.goosecode.ide.v1.LocationWithContext;
      reader.readMessage(value,proto.gooseclip.goosecode.ide.v1.LocationWithContext.deserializeBinaryFromReader);
      msg.setTo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gooseclip.goosecode.ide.v1.DefinitionFollow.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gooseclip.goosecode.ide.v1.DefinitionFollow.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gooseclip.goosecode.ide.v1.DefinitionFollow} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.DefinitionFollow.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFrom();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.gooseclip.goosecode.ide.v1.LocationWithContext.serializeBinaryToWriter
    );
  }
  f = message.getTo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.gooseclip.goosecode.ide.v1.LocationWithContext.serializeBinaryToWriter
    );
  }
};


/**
 * optional LocationWithContext from = 1;
 * @return {?proto.gooseclip.goosecode.ide.v1.LocationWithContext}
 */
proto.gooseclip.goosecode.ide.v1.DefinitionFollow.prototype.getFrom = function() {
  return /** @type{?proto.gooseclip.goosecode.ide.v1.LocationWithContext} */ (
    jspb.Message.getWrapperField(this, proto.gooseclip.goosecode.ide.v1.LocationWithContext, 1));
};


/**
 * @param {?proto.gooseclip.goosecode.ide.v1.LocationWithContext|undefined} value
 * @return {!proto.gooseclip.goosecode.ide.v1.DefinitionFollow} returns this
*/
proto.gooseclip.goosecode.ide.v1.DefinitionFollow.prototype.setFrom = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.gooseclip.goosecode.ide.v1.DefinitionFollow} returns this
 */
proto.gooseclip.goosecode.ide.v1.DefinitionFollow.prototype.clearFrom = function() {
  return this.setFrom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gooseclip.goosecode.ide.v1.DefinitionFollow.prototype.hasFrom = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional LocationWithContext to = 2;
 * @return {?proto.gooseclip.goosecode.ide.v1.LocationWithContext}
 */
proto.gooseclip.goosecode.ide.v1.DefinitionFollow.prototype.getTo = function() {
  return /** @type{?proto.gooseclip.goosecode.ide.v1.LocationWithContext} */ (
    jspb.Message.getWrapperField(this, proto.gooseclip.goosecode.ide.v1.LocationWithContext, 2));
};


/**
 * @param {?proto.gooseclip.goosecode.ide.v1.LocationWithContext|undefined} value
 * @return {!proto.gooseclip.goosecode.ide.v1.DefinitionFollow} returns this
*/
proto.gooseclip.goosecode.ide.v1.DefinitionFollow.prototype.setTo = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.gooseclip.goosecode.ide.v1.DefinitionFollow} returns this
 */
proto.gooseclip.goosecode.ide.v1.DefinitionFollow.prototype.clearTo = function() {
  return this.setTo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gooseclip.goosecode.ide.v1.DefinitionFollow.prototype.hasTo = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.gooseclip.goosecode.ide.v1.ReferenceFollow.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gooseclip.goosecode.ide.v1.ReferenceFollow.prototype.toObject = function(opt_includeInstance) {
  return proto.gooseclip.goosecode.ide.v1.ReferenceFollow.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gooseclip.goosecode.ide.v1.ReferenceFollow} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.ReferenceFollow.toObject = function(includeInstance, msg) {
  var f, obj = {
    from: (f = msg.getFrom()) && proto.gooseclip.goosecode.ide.v1.LocationWithContext.toObject(includeInstance, f),
    toList: jspb.Message.toObjectList(msg.getToList(),
    proto.gooseclip.goosecode.ide.v1.LocationWithContext.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gooseclip.goosecode.ide.v1.ReferenceFollow}
 */
proto.gooseclip.goosecode.ide.v1.ReferenceFollow.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseclip.goosecode.ide.v1.ReferenceFollow;
  return proto.gooseclip.goosecode.ide.v1.ReferenceFollow.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gooseclip.goosecode.ide.v1.ReferenceFollow} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gooseclip.goosecode.ide.v1.ReferenceFollow}
 */
proto.gooseclip.goosecode.ide.v1.ReferenceFollow.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.gooseclip.goosecode.ide.v1.LocationWithContext;
      reader.readMessage(value,proto.gooseclip.goosecode.ide.v1.LocationWithContext.deserializeBinaryFromReader);
      msg.setFrom(value);
      break;
    case 2:
      var value = new proto.gooseclip.goosecode.ide.v1.LocationWithContext;
      reader.readMessage(value,proto.gooseclip.goosecode.ide.v1.LocationWithContext.deserializeBinaryFromReader);
      msg.addTo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gooseclip.goosecode.ide.v1.ReferenceFollow.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gooseclip.goosecode.ide.v1.ReferenceFollow.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gooseclip.goosecode.ide.v1.ReferenceFollow} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.ReferenceFollow.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFrom();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.gooseclip.goosecode.ide.v1.LocationWithContext.serializeBinaryToWriter
    );
  }
  f = message.getToList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.gooseclip.goosecode.ide.v1.LocationWithContext.serializeBinaryToWriter
    );
  }
};


/**
 * optional LocationWithContext from = 1;
 * @return {?proto.gooseclip.goosecode.ide.v1.LocationWithContext}
 */
proto.gooseclip.goosecode.ide.v1.ReferenceFollow.prototype.getFrom = function() {
  return /** @type{?proto.gooseclip.goosecode.ide.v1.LocationWithContext} */ (
    jspb.Message.getWrapperField(this, proto.gooseclip.goosecode.ide.v1.LocationWithContext, 1));
};


/**
 * @param {?proto.gooseclip.goosecode.ide.v1.LocationWithContext|undefined} value
 * @return {!proto.gooseclip.goosecode.ide.v1.ReferenceFollow} returns this
*/
proto.gooseclip.goosecode.ide.v1.ReferenceFollow.prototype.setFrom = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.gooseclip.goosecode.ide.v1.ReferenceFollow} returns this
 */
proto.gooseclip.goosecode.ide.v1.ReferenceFollow.prototype.clearFrom = function() {
  return this.setFrom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gooseclip.goosecode.ide.v1.ReferenceFollow.prototype.hasFrom = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated LocationWithContext to = 2;
 * @return {!Array<!proto.gooseclip.goosecode.ide.v1.LocationWithContext>}
 */
proto.gooseclip.goosecode.ide.v1.ReferenceFollow.prototype.getToList = function() {
  return /** @type{!Array<!proto.gooseclip.goosecode.ide.v1.LocationWithContext>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.gooseclip.goosecode.ide.v1.LocationWithContext, 2));
};


/**
 * @param {!Array<!proto.gooseclip.goosecode.ide.v1.LocationWithContext>} value
 * @return {!proto.gooseclip.goosecode.ide.v1.ReferenceFollow} returns this
*/
proto.gooseclip.goosecode.ide.v1.ReferenceFollow.prototype.setToList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.gooseclip.goosecode.ide.v1.LocationWithContext=} opt_value
 * @param {number=} opt_index
 * @return {!proto.gooseclip.goosecode.ide.v1.LocationWithContext}
 */
proto.gooseclip.goosecode.ide.v1.ReferenceFollow.prototype.addTo = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.gooseclip.goosecode.ide.v1.LocationWithContext, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.gooseclip.goosecode.ide.v1.ReferenceFollow} returns this
 */
proto.gooseclip.goosecode.ide.v1.ReferenceFollow.prototype.clearToList = function() {
  return this.setToList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.gooseclip.goosecode.ide.v1.FollowPush.oneofGroups_ = [[10,11]];

/**
 * @enum {number}
 */
proto.gooseclip.goosecode.ide.v1.FollowPush.DataCase = {
  DATA_NOT_SET: 0,
  DEFINITION: 10,
  REFERENCE: 11
};

/**
 * @return {proto.gooseclip.goosecode.ide.v1.FollowPush.DataCase}
 */
proto.gooseclip.goosecode.ide.v1.FollowPush.prototype.getDataCase = function() {
  return /** @type {proto.gooseclip.goosecode.ide.v1.FollowPush.DataCase} */(jspb.Message.computeOneofCase(this, proto.gooseclip.goosecode.ide.v1.FollowPush.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gooseclip.goosecode.ide.v1.FollowPush.prototype.toObject = function(opt_includeInstance) {
  return proto.gooseclip.goosecode.ide.v1.FollowPush.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gooseclip.goosecode.ide.v1.FollowPush} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.FollowPush.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    definition: (f = msg.getDefinition()) && proto.gooseclip.goosecode.ide.v1.DefinitionFollow.toObject(includeInstance, f),
    reference: (f = msg.getReference()) && proto.gooseclip.goosecode.ide.v1.ReferenceFollow.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gooseclip.goosecode.ide.v1.FollowPush}
 */
proto.gooseclip.goosecode.ide.v1.FollowPush.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseclip.goosecode.ide.v1.FollowPush;
  return proto.gooseclip.goosecode.ide.v1.FollowPush.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gooseclip.goosecode.ide.v1.FollowPush} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gooseclip.goosecode.ide.v1.FollowPush}
 */
proto.gooseclip.goosecode.ide.v1.FollowPush.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.gooseclip.goosecode.ide.v1.FollowType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 10:
      var value = new proto.gooseclip.goosecode.ide.v1.DefinitionFollow;
      reader.readMessage(value,proto.gooseclip.goosecode.ide.v1.DefinitionFollow.deserializeBinaryFromReader);
      msg.setDefinition(value);
      break;
    case 11:
      var value = new proto.gooseclip.goosecode.ide.v1.ReferenceFollow;
      reader.readMessage(value,proto.gooseclip.goosecode.ide.v1.ReferenceFollow.deserializeBinaryFromReader);
      msg.setReference(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gooseclip.goosecode.ide.v1.FollowPush.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gooseclip.goosecode.ide.v1.FollowPush.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gooseclip.goosecode.ide.v1.FollowPush} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.FollowPush.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getDefinition();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.gooseclip.goosecode.ide.v1.DefinitionFollow.serializeBinaryToWriter
    );
  }
  f = message.getReference();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.gooseclip.goosecode.ide.v1.ReferenceFollow.serializeBinaryToWriter
    );
  }
};


/**
 * optional FollowType type = 1;
 * @return {!proto.gooseclip.goosecode.ide.v1.FollowType}
 */
proto.gooseclip.goosecode.ide.v1.FollowPush.prototype.getType = function() {
  return /** @type {!proto.gooseclip.goosecode.ide.v1.FollowType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.gooseclip.goosecode.ide.v1.FollowType} value
 * @return {!proto.gooseclip.goosecode.ide.v1.FollowPush} returns this
 */
proto.gooseclip.goosecode.ide.v1.FollowPush.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional DefinitionFollow definition = 10;
 * @return {?proto.gooseclip.goosecode.ide.v1.DefinitionFollow}
 */
proto.gooseclip.goosecode.ide.v1.FollowPush.prototype.getDefinition = function() {
  return /** @type{?proto.gooseclip.goosecode.ide.v1.DefinitionFollow} */ (
    jspb.Message.getWrapperField(this, proto.gooseclip.goosecode.ide.v1.DefinitionFollow, 10));
};


/**
 * @param {?proto.gooseclip.goosecode.ide.v1.DefinitionFollow|undefined} value
 * @return {!proto.gooseclip.goosecode.ide.v1.FollowPush} returns this
*/
proto.gooseclip.goosecode.ide.v1.FollowPush.prototype.setDefinition = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.gooseclip.goosecode.ide.v1.FollowPush.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.gooseclip.goosecode.ide.v1.FollowPush} returns this
 */
proto.gooseclip.goosecode.ide.v1.FollowPush.prototype.clearDefinition = function() {
  return this.setDefinition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gooseclip.goosecode.ide.v1.FollowPush.prototype.hasDefinition = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional ReferenceFollow reference = 11;
 * @return {?proto.gooseclip.goosecode.ide.v1.ReferenceFollow}
 */
proto.gooseclip.goosecode.ide.v1.FollowPush.prototype.getReference = function() {
  return /** @type{?proto.gooseclip.goosecode.ide.v1.ReferenceFollow} */ (
    jspb.Message.getWrapperField(this, proto.gooseclip.goosecode.ide.v1.ReferenceFollow, 11));
};


/**
 * @param {?proto.gooseclip.goosecode.ide.v1.ReferenceFollow|undefined} value
 * @return {!proto.gooseclip.goosecode.ide.v1.FollowPush} returns this
*/
proto.gooseclip.goosecode.ide.v1.FollowPush.prototype.setReference = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.gooseclip.goosecode.ide.v1.FollowPush.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.gooseclip.goosecode.ide.v1.FollowPush} returns this
 */
proto.gooseclip.goosecode.ide.v1.FollowPush.prototype.clearReference = function() {
  return this.setReference(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gooseclip.goosecode.ide.v1.FollowPush.prototype.hasReference = function() {
  return jspb.Message.getField(this, 11) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gooseclip.goosecode.ide.v1.WorkspaceDetails.prototype.toObject = function(opt_includeInstance) {
  return proto.gooseclip.goosecode.ide.v1.WorkspaceDetails.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gooseclip.goosecode.ide.v1.WorkspaceDetails} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.WorkspaceDetails.toObject = function(includeInstance, msg) {
  var f, obj = {
    repositorySnapshotFingerprint: jspb.Message.getFieldWithDefault(msg, 1, ""),
    workspaceRoot: jspb.Message.getFieldWithDefault(msg, 2, ""),
    deleted: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gooseclip.goosecode.ide.v1.WorkspaceDetails}
 */
proto.gooseclip.goosecode.ide.v1.WorkspaceDetails.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseclip.goosecode.ide.v1.WorkspaceDetails;
  return proto.gooseclip.goosecode.ide.v1.WorkspaceDetails.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gooseclip.goosecode.ide.v1.WorkspaceDetails} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gooseclip.goosecode.ide.v1.WorkspaceDetails}
 */
proto.gooseclip.goosecode.ide.v1.WorkspaceDetails.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRepositorySnapshotFingerprint(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorkspaceRoot(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDeleted(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gooseclip.goosecode.ide.v1.WorkspaceDetails.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gooseclip.goosecode.ide.v1.WorkspaceDetails.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gooseclip.goosecode.ide.v1.WorkspaceDetails} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.WorkspaceDetails.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRepositorySnapshotFingerprint();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getWorkspaceRoot();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDeleted();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string repository_snapshot_fingerprint = 1;
 * @return {string}
 */
proto.gooseclip.goosecode.ide.v1.WorkspaceDetails.prototype.getRepositorySnapshotFingerprint = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.gooseclip.goosecode.ide.v1.WorkspaceDetails} returns this
 */
proto.gooseclip.goosecode.ide.v1.WorkspaceDetails.prototype.setRepositorySnapshotFingerprint = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string workspace_root = 2;
 * @return {string}
 */
proto.gooseclip.goosecode.ide.v1.WorkspaceDetails.prototype.getWorkspaceRoot = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.gooseclip.goosecode.ide.v1.WorkspaceDetails} returns this
 */
proto.gooseclip.goosecode.ide.v1.WorkspaceDetails.prototype.setWorkspaceRoot = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool deleted = 3;
 * @return {boolean}
 */
proto.gooseclip.goosecode.ide.v1.WorkspaceDetails.prototype.getDeleted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.gooseclip.goosecode.ide.v1.WorkspaceDetails} returns this
 */
proto.gooseclip.goosecode.ide.v1.WorkspaceDetails.prototype.setDeleted = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.gooseclip.goosecode.ide.v1.WorkspacesPush.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gooseclip.goosecode.ide.v1.WorkspacesPush.prototype.toObject = function(opt_includeInstance) {
  return proto.gooseclip.goosecode.ide.v1.WorkspacesPush.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gooseclip.goosecode.ide.v1.WorkspacesPush} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.WorkspacesPush.toObject = function(includeInstance, msg) {
  var f, obj = {
    workspacesList: jspb.Message.toObjectList(msg.getWorkspacesList(),
    proto.gooseclip.goosecode.ide.v1.WorkspaceDetails.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gooseclip.goosecode.ide.v1.WorkspacesPush}
 */
proto.gooseclip.goosecode.ide.v1.WorkspacesPush.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseclip.goosecode.ide.v1.WorkspacesPush;
  return proto.gooseclip.goosecode.ide.v1.WorkspacesPush.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gooseclip.goosecode.ide.v1.WorkspacesPush} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gooseclip.goosecode.ide.v1.WorkspacesPush}
 */
proto.gooseclip.goosecode.ide.v1.WorkspacesPush.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.gooseclip.goosecode.ide.v1.WorkspaceDetails;
      reader.readMessage(value,proto.gooseclip.goosecode.ide.v1.WorkspaceDetails.deserializeBinaryFromReader);
      msg.addWorkspaces(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gooseclip.goosecode.ide.v1.WorkspacesPush.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gooseclip.goosecode.ide.v1.WorkspacesPush.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gooseclip.goosecode.ide.v1.WorkspacesPush} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.WorkspacesPush.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWorkspacesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.gooseclip.goosecode.ide.v1.WorkspaceDetails.serializeBinaryToWriter
    );
  }
};


/**
 * repeated WorkspaceDetails workspaces = 1;
 * @return {!Array<!proto.gooseclip.goosecode.ide.v1.WorkspaceDetails>}
 */
proto.gooseclip.goosecode.ide.v1.WorkspacesPush.prototype.getWorkspacesList = function() {
  return /** @type{!Array<!proto.gooseclip.goosecode.ide.v1.WorkspaceDetails>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.gooseclip.goosecode.ide.v1.WorkspaceDetails, 1));
};


/**
 * @param {!Array<!proto.gooseclip.goosecode.ide.v1.WorkspaceDetails>} value
 * @return {!proto.gooseclip.goosecode.ide.v1.WorkspacesPush} returns this
*/
proto.gooseclip.goosecode.ide.v1.WorkspacesPush.prototype.setWorkspacesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.gooseclip.goosecode.ide.v1.WorkspaceDetails=} opt_value
 * @param {number=} opt_index
 * @return {!proto.gooseclip.goosecode.ide.v1.WorkspaceDetails}
 */
proto.gooseclip.goosecode.ide.v1.WorkspacesPush.prototype.addWorkspaces = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.gooseclip.goosecode.ide.v1.WorkspaceDetails, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.gooseclip.goosecode.ide.v1.WorkspacesPush} returns this
 */
proto.gooseclip.goosecode.ide.v1.WorkspacesPush.prototype.clearWorkspacesList = function() {
  return this.setWorkspacesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gooseclip.goosecode.ide.v1.AppCommandPush.prototype.toObject = function(opt_includeInstance) {
  return proto.gooseclip.goosecode.ide.v1.AppCommandPush.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gooseclip.goosecode.ide.v1.AppCommandPush} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.AppCommandPush.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gooseclip.goosecode.ide.v1.AppCommandPush}
 */
proto.gooseclip.goosecode.ide.v1.AppCommandPush.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseclip.goosecode.ide.v1.AppCommandPush;
  return proto.gooseclip.goosecode.ide.v1.AppCommandPush.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gooseclip.goosecode.ide.v1.AppCommandPush} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gooseclip.goosecode.ide.v1.AppCommandPush}
 */
proto.gooseclip.goosecode.ide.v1.AppCommandPush.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.gooseclip.goosecode.ide.v1.AppCommandType} */ (reader.readEnum());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gooseclip.goosecode.ide.v1.AppCommandPush.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gooseclip.goosecode.ide.v1.AppCommandPush.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gooseclip.goosecode.ide.v1.AppCommandPush} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.AppCommandPush.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional AppCommandType type = 1;
 * @return {!proto.gooseclip.goosecode.ide.v1.AppCommandType}
 */
proto.gooseclip.goosecode.ide.v1.AppCommandPush.prototype.getType = function() {
  return /** @type {!proto.gooseclip.goosecode.ide.v1.AppCommandType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.gooseclip.goosecode.ide.v1.AppCommandType} value
 * @return {!proto.gooseclip.goosecode.ide.v1.AppCommandPush} returns this
 */
proto.gooseclip.goosecode.ide.v1.AppCommandPush.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gooseclip.goosecode.ide.v1.RegeneratePush.prototype.toObject = function(opt_includeInstance) {
  return proto.gooseclip.goosecode.ide.v1.RegeneratePush.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gooseclip.goosecode.ide.v1.RegeneratePush} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.RegeneratePush.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gooseclip.goosecode.ide.v1.RegeneratePush}
 */
proto.gooseclip.goosecode.ide.v1.RegeneratePush.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseclip.goosecode.ide.v1.RegeneratePush;
  return proto.gooseclip.goosecode.ide.v1.RegeneratePush.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gooseclip.goosecode.ide.v1.RegeneratePush} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gooseclip.goosecode.ide.v1.RegeneratePush}
 */
proto.gooseclip.goosecode.ide.v1.RegeneratePush.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.gooseclip.goosecode.ide.v1.RegenerateType} */ (reader.readEnum());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gooseclip.goosecode.ide.v1.RegeneratePush.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gooseclip.goosecode.ide.v1.RegeneratePush.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gooseclip.goosecode.ide.v1.RegeneratePush} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.RegeneratePush.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional RegenerateType type = 1;
 * @return {!proto.gooseclip.goosecode.ide.v1.RegenerateType}
 */
proto.gooseclip.goosecode.ide.v1.RegeneratePush.prototype.getType = function() {
  return /** @type {!proto.gooseclip.goosecode.ide.v1.RegenerateType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.gooseclip.goosecode.ide.v1.RegenerateType} value
 * @return {!proto.gooseclip.goosecode.ide.v1.RegeneratePush} returns this
 */
proto.gooseclip.goosecode.ide.v1.RegeneratePush.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.gooseclip.goosecode.ide.v1.ActiveSessionPush.oneofGroups_ = [[10]];

/**
 * @enum {number}
 */
proto.gooseclip.goosecode.ide.v1.ActiveSessionPush.DataCase = {
  DATA_NOT_SET: 0,
  REGENERATE: 10
};

/**
 * @return {proto.gooseclip.goosecode.ide.v1.ActiveSessionPush.DataCase}
 */
proto.gooseclip.goosecode.ide.v1.ActiveSessionPush.prototype.getDataCase = function() {
  return /** @type {proto.gooseclip.goosecode.ide.v1.ActiveSessionPush.DataCase} */(jspb.Message.computeOneofCase(this, proto.gooseclip.goosecode.ide.v1.ActiveSessionPush.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gooseclip.goosecode.ide.v1.ActiveSessionPush.prototype.toObject = function(opt_includeInstance) {
  return proto.gooseclip.goosecode.ide.v1.ActiveSessionPush.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gooseclip.goosecode.ide.v1.ActiveSessionPush} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.ActiveSessionPush.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    regenerate: (f = msg.getRegenerate()) && proto.gooseclip.goosecode.ide.v1.RegeneratePush.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gooseclip.goosecode.ide.v1.ActiveSessionPush}
 */
proto.gooseclip.goosecode.ide.v1.ActiveSessionPush.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseclip.goosecode.ide.v1.ActiveSessionPush;
  return proto.gooseclip.goosecode.ide.v1.ActiveSessionPush.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gooseclip.goosecode.ide.v1.ActiveSessionPush} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gooseclip.goosecode.ide.v1.ActiveSessionPush}
 */
proto.gooseclip.goosecode.ide.v1.ActiveSessionPush.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.gooseclip.goosecode.ide.v1.ActiveSessionType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 10:
      var value = new proto.gooseclip.goosecode.ide.v1.RegeneratePush;
      reader.readMessage(value,proto.gooseclip.goosecode.ide.v1.RegeneratePush.deserializeBinaryFromReader);
      msg.setRegenerate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gooseclip.goosecode.ide.v1.ActiveSessionPush.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gooseclip.goosecode.ide.v1.ActiveSessionPush.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gooseclip.goosecode.ide.v1.ActiveSessionPush} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.ActiveSessionPush.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getRegenerate();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.gooseclip.goosecode.ide.v1.RegeneratePush.serializeBinaryToWriter
    );
  }
};


/**
 * optional ActiveSessionType type = 1;
 * @return {!proto.gooseclip.goosecode.ide.v1.ActiveSessionType}
 */
proto.gooseclip.goosecode.ide.v1.ActiveSessionPush.prototype.getType = function() {
  return /** @type {!proto.gooseclip.goosecode.ide.v1.ActiveSessionType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.gooseclip.goosecode.ide.v1.ActiveSessionType} value
 * @return {!proto.gooseclip.goosecode.ide.v1.ActiveSessionPush} returns this
 */
proto.gooseclip.goosecode.ide.v1.ActiveSessionPush.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional RegeneratePush regenerate = 10;
 * @return {?proto.gooseclip.goosecode.ide.v1.RegeneratePush}
 */
proto.gooseclip.goosecode.ide.v1.ActiveSessionPush.prototype.getRegenerate = function() {
  return /** @type{?proto.gooseclip.goosecode.ide.v1.RegeneratePush} */ (
    jspb.Message.getWrapperField(this, proto.gooseclip.goosecode.ide.v1.RegeneratePush, 10));
};


/**
 * @param {?proto.gooseclip.goosecode.ide.v1.RegeneratePush|undefined} value
 * @return {!proto.gooseclip.goosecode.ide.v1.ActiveSessionPush} returns this
*/
proto.gooseclip.goosecode.ide.v1.ActiveSessionPush.prototype.setRegenerate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.gooseclip.goosecode.ide.v1.ActiveSessionPush.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.gooseclip.goosecode.ide.v1.ActiveSessionPush} returns this
 */
proto.gooseclip.goosecode.ide.v1.ActiveSessionPush.prototype.clearRegenerate = function() {
  return this.setRegenerate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gooseclip.goosecode.ide.v1.ActiveSessionPush.prototype.hasRegenerate = function() {
  return jspb.Message.getField(this, 10) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gooseclip.goosecode.ide.v1.VersionControlInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.gooseclip.goosecode.ide.v1.VersionControlInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gooseclip.goosecode.ide.v1.VersionControlInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.VersionControlInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    repositoryFullname: jspb.Message.getFieldWithDefault(msg, 1, ""),
    branch: jspb.Message.getFieldWithDefault(msg, 2, ""),
    commit: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gooseclip.goosecode.ide.v1.VersionControlInfo}
 */
proto.gooseclip.goosecode.ide.v1.VersionControlInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseclip.goosecode.ide.v1.VersionControlInfo;
  return proto.gooseclip.goosecode.ide.v1.VersionControlInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gooseclip.goosecode.ide.v1.VersionControlInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gooseclip.goosecode.ide.v1.VersionControlInfo}
 */
proto.gooseclip.goosecode.ide.v1.VersionControlInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRepositoryFullname(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBranch(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCommit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gooseclip.goosecode.ide.v1.VersionControlInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gooseclip.goosecode.ide.v1.VersionControlInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gooseclip.goosecode.ide.v1.VersionControlInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.VersionControlInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRepositoryFullname();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBranch();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCommit();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string repository_fullname = 1;
 * @return {string}
 */
proto.gooseclip.goosecode.ide.v1.VersionControlInfo.prototype.getRepositoryFullname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.gooseclip.goosecode.ide.v1.VersionControlInfo} returns this
 */
proto.gooseclip.goosecode.ide.v1.VersionControlInfo.prototype.setRepositoryFullname = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string branch = 2;
 * @return {string}
 */
proto.gooseclip.goosecode.ide.v1.VersionControlInfo.prototype.getBranch = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.gooseclip.goosecode.ide.v1.VersionControlInfo} returns this
 */
proto.gooseclip.goosecode.ide.v1.VersionControlInfo.prototype.setBranch = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string commit = 3;
 * @return {string}
 */
proto.gooseclip.goosecode.ide.v1.VersionControlInfo.prototype.getCommit = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.gooseclip.goosecode.ide.v1.VersionControlInfo} returns this
 */
proto.gooseclip.goosecode.ide.v1.VersionControlInfo.prototype.setCommit = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.gooseclip.goosecode.ide.v1.FileCommandPush.oneofGroups_ = [[10,11,12,13]];

/**
 * @enum {number}
 */
proto.gooseclip.goosecode.ide.v1.FileCommandPush.DataCase = {
  DATA_NOT_SET: 0,
  OPEN_FILE: 10,
  BOOKMARK: 11,
  HIGHLIGHT: 12,
  FOLLOW: 13
};

/**
 * @return {proto.gooseclip.goosecode.ide.v1.FileCommandPush.DataCase}
 */
proto.gooseclip.goosecode.ide.v1.FileCommandPush.prototype.getDataCase = function() {
  return /** @type {proto.gooseclip.goosecode.ide.v1.FileCommandPush.DataCase} */(jspb.Message.computeOneofCase(this, proto.gooseclip.goosecode.ide.v1.FileCommandPush.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gooseclip.goosecode.ide.v1.FileCommandPush.prototype.toObject = function(opt_includeInstance) {
  return proto.gooseclip.goosecode.ide.v1.FileCommandPush.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gooseclip.goosecode.ide.v1.FileCommandPush} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.FileCommandPush.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    workspaceRoot: jspb.Message.getFieldWithDefault(msg, 2, ""),
    versionControl: (f = msg.getVersionControl()) && proto.gooseclip.goosecode.ide.v1.VersionControlInfo.toObject(includeInstance, f),
    openFile: (f = msg.getOpenFile()) && proto.gooseclip.goosecode.ide.v1.OpenPush.toObject(includeInstance, f),
    bookmark: (f = msg.getBookmark()) && proto.gooseclip.goosecode.ide.v1.BookmarkPush.toObject(includeInstance, f),
    highlight: (f = msg.getHighlight()) && proto.gooseclip.goosecode.ide.v1.HighlightPush.toObject(includeInstance, f),
    follow: (f = msg.getFollow()) && proto.gooseclip.goosecode.ide.v1.FollowPush.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gooseclip.goosecode.ide.v1.FileCommandPush}
 */
proto.gooseclip.goosecode.ide.v1.FileCommandPush.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseclip.goosecode.ide.v1.FileCommandPush;
  return proto.gooseclip.goosecode.ide.v1.FileCommandPush.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gooseclip.goosecode.ide.v1.FileCommandPush} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gooseclip.goosecode.ide.v1.FileCommandPush}
 */
proto.gooseclip.goosecode.ide.v1.FileCommandPush.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.gooseclip.goosecode.ide.v1.FileCommandType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorkspaceRoot(value);
      break;
    case 3:
      var value = new proto.gooseclip.goosecode.ide.v1.VersionControlInfo;
      reader.readMessage(value,proto.gooseclip.goosecode.ide.v1.VersionControlInfo.deserializeBinaryFromReader);
      msg.setVersionControl(value);
      break;
    case 10:
      var value = new proto.gooseclip.goosecode.ide.v1.OpenPush;
      reader.readMessage(value,proto.gooseclip.goosecode.ide.v1.OpenPush.deserializeBinaryFromReader);
      msg.setOpenFile(value);
      break;
    case 11:
      var value = new proto.gooseclip.goosecode.ide.v1.BookmarkPush;
      reader.readMessage(value,proto.gooseclip.goosecode.ide.v1.BookmarkPush.deserializeBinaryFromReader);
      msg.setBookmark(value);
      break;
    case 12:
      var value = new proto.gooseclip.goosecode.ide.v1.HighlightPush;
      reader.readMessage(value,proto.gooseclip.goosecode.ide.v1.HighlightPush.deserializeBinaryFromReader);
      msg.setHighlight(value);
      break;
    case 13:
      var value = new proto.gooseclip.goosecode.ide.v1.FollowPush;
      reader.readMessage(value,proto.gooseclip.goosecode.ide.v1.FollowPush.deserializeBinaryFromReader);
      msg.setFollow(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gooseclip.goosecode.ide.v1.FileCommandPush.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gooseclip.goosecode.ide.v1.FileCommandPush.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gooseclip.goosecode.ide.v1.FileCommandPush} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.FileCommandPush.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getWorkspaceRoot();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getVersionControl();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.gooseclip.goosecode.ide.v1.VersionControlInfo.serializeBinaryToWriter
    );
  }
  f = message.getOpenFile();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.gooseclip.goosecode.ide.v1.OpenPush.serializeBinaryToWriter
    );
  }
  f = message.getBookmark();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.gooseclip.goosecode.ide.v1.BookmarkPush.serializeBinaryToWriter
    );
  }
  f = message.getHighlight();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.gooseclip.goosecode.ide.v1.HighlightPush.serializeBinaryToWriter
    );
  }
  f = message.getFollow();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.gooseclip.goosecode.ide.v1.FollowPush.serializeBinaryToWriter
    );
  }
};


/**
 * optional FileCommandType type = 1;
 * @return {!proto.gooseclip.goosecode.ide.v1.FileCommandType}
 */
proto.gooseclip.goosecode.ide.v1.FileCommandPush.prototype.getType = function() {
  return /** @type {!proto.gooseclip.goosecode.ide.v1.FileCommandType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.gooseclip.goosecode.ide.v1.FileCommandType} value
 * @return {!proto.gooseclip.goosecode.ide.v1.FileCommandPush} returns this
 */
proto.gooseclip.goosecode.ide.v1.FileCommandPush.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string workspace_root = 2;
 * @return {string}
 */
proto.gooseclip.goosecode.ide.v1.FileCommandPush.prototype.getWorkspaceRoot = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.gooseclip.goosecode.ide.v1.FileCommandPush} returns this
 */
proto.gooseclip.goosecode.ide.v1.FileCommandPush.prototype.setWorkspaceRoot = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional VersionControlInfo version_control = 3;
 * @return {?proto.gooseclip.goosecode.ide.v1.VersionControlInfo}
 */
proto.gooseclip.goosecode.ide.v1.FileCommandPush.prototype.getVersionControl = function() {
  return /** @type{?proto.gooseclip.goosecode.ide.v1.VersionControlInfo} */ (
    jspb.Message.getWrapperField(this, proto.gooseclip.goosecode.ide.v1.VersionControlInfo, 3));
};


/**
 * @param {?proto.gooseclip.goosecode.ide.v1.VersionControlInfo|undefined} value
 * @return {!proto.gooseclip.goosecode.ide.v1.FileCommandPush} returns this
*/
proto.gooseclip.goosecode.ide.v1.FileCommandPush.prototype.setVersionControl = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.gooseclip.goosecode.ide.v1.FileCommandPush} returns this
 */
proto.gooseclip.goosecode.ide.v1.FileCommandPush.prototype.clearVersionControl = function() {
  return this.setVersionControl(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gooseclip.goosecode.ide.v1.FileCommandPush.prototype.hasVersionControl = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional OpenPush open_file = 10;
 * @return {?proto.gooseclip.goosecode.ide.v1.OpenPush}
 */
proto.gooseclip.goosecode.ide.v1.FileCommandPush.prototype.getOpenFile = function() {
  return /** @type{?proto.gooseclip.goosecode.ide.v1.OpenPush} */ (
    jspb.Message.getWrapperField(this, proto.gooseclip.goosecode.ide.v1.OpenPush, 10));
};


/**
 * @param {?proto.gooseclip.goosecode.ide.v1.OpenPush|undefined} value
 * @return {!proto.gooseclip.goosecode.ide.v1.FileCommandPush} returns this
*/
proto.gooseclip.goosecode.ide.v1.FileCommandPush.prototype.setOpenFile = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.gooseclip.goosecode.ide.v1.FileCommandPush.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.gooseclip.goosecode.ide.v1.FileCommandPush} returns this
 */
proto.gooseclip.goosecode.ide.v1.FileCommandPush.prototype.clearOpenFile = function() {
  return this.setOpenFile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gooseclip.goosecode.ide.v1.FileCommandPush.prototype.hasOpenFile = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional BookmarkPush bookmark = 11;
 * @return {?proto.gooseclip.goosecode.ide.v1.BookmarkPush}
 */
proto.gooseclip.goosecode.ide.v1.FileCommandPush.prototype.getBookmark = function() {
  return /** @type{?proto.gooseclip.goosecode.ide.v1.BookmarkPush} */ (
    jspb.Message.getWrapperField(this, proto.gooseclip.goosecode.ide.v1.BookmarkPush, 11));
};


/**
 * @param {?proto.gooseclip.goosecode.ide.v1.BookmarkPush|undefined} value
 * @return {!proto.gooseclip.goosecode.ide.v1.FileCommandPush} returns this
*/
proto.gooseclip.goosecode.ide.v1.FileCommandPush.prototype.setBookmark = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.gooseclip.goosecode.ide.v1.FileCommandPush.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.gooseclip.goosecode.ide.v1.FileCommandPush} returns this
 */
proto.gooseclip.goosecode.ide.v1.FileCommandPush.prototype.clearBookmark = function() {
  return this.setBookmark(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gooseclip.goosecode.ide.v1.FileCommandPush.prototype.hasBookmark = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional HighlightPush highlight = 12;
 * @return {?proto.gooseclip.goosecode.ide.v1.HighlightPush}
 */
proto.gooseclip.goosecode.ide.v1.FileCommandPush.prototype.getHighlight = function() {
  return /** @type{?proto.gooseclip.goosecode.ide.v1.HighlightPush} */ (
    jspb.Message.getWrapperField(this, proto.gooseclip.goosecode.ide.v1.HighlightPush, 12));
};


/**
 * @param {?proto.gooseclip.goosecode.ide.v1.HighlightPush|undefined} value
 * @return {!proto.gooseclip.goosecode.ide.v1.FileCommandPush} returns this
*/
proto.gooseclip.goosecode.ide.v1.FileCommandPush.prototype.setHighlight = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.gooseclip.goosecode.ide.v1.FileCommandPush.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.gooseclip.goosecode.ide.v1.FileCommandPush} returns this
 */
proto.gooseclip.goosecode.ide.v1.FileCommandPush.prototype.clearHighlight = function() {
  return this.setHighlight(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gooseclip.goosecode.ide.v1.FileCommandPush.prototype.hasHighlight = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional FollowPush follow = 13;
 * @return {?proto.gooseclip.goosecode.ide.v1.FollowPush}
 */
proto.gooseclip.goosecode.ide.v1.FileCommandPush.prototype.getFollow = function() {
  return /** @type{?proto.gooseclip.goosecode.ide.v1.FollowPush} */ (
    jspb.Message.getWrapperField(this, proto.gooseclip.goosecode.ide.v1.FollowPush, 13));
};


/**
 * @param {?proto.gooseclip.goosecode.ide.v1.FollowPush|undefined} value
 * @return {!proto.gooseclip.goosecode.ide.v1.FileCommandPush} returns this
*/
proto.gooseclip.goosecode.ide.v1.FileCommandPush.prototype.setFollow = function(value) {
  return jspb.Message.setOneofWrapperField(this, 13, proto.gooseclip.goosecode.ide.v1.FileCommandPush.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.gooseclip.goosecode.ide.v1.FileCommandPush} returns this
 */
proto.gooseclip.goosecode.ide.v1.FileCommandPush.prototype.clearFollow = function() {
  return this.setFollow(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gooseclip.goosecode.ide.v1.FileCommandPush.prototype.hasFollow = function() {
  return jspb.Message.getField(this, 13) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.gooseclip.goosecode.ide.v1.PushMessage.oneofGroups_ = [[10,11,12,13]];

/**
 * @enum {number}
 */
proto.gooseclip.goosecode.ide.v1.PushMessage.DataCase = {
  DATA_NOT_SET: 0,
  APP_COMMAND: 10,
  WORKSPACES: 11,
  ACTIVE_SESSION: 12,
  FILE_COMMAND: 13
};

/**
 * @return {proto.gooseclip.goosecode.ide.v1.PushMessage.DataCase}
 */
proto.gooseclip.goosecode.ide.v1.PushMessage.prototype.getDataCase = function() {
  return /** @type {proto.gooseclip.goosecode.ide.v1.PushMessage.DataCase} */(jspb.Message.computeOneofCase(this, proto.gooseclip.goosecode.ide.v1.PushMessage.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gooseclip.goosecode.ide.v1.PushMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.gooseclip.goosecode.ide.v1.PushMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gooseclip.goosecode.ide.v1.PushMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.PushMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    appCommand: (f = msg.getAppCommand()) && proto.gooseclip.goosecode.ide.v1.AppCommandPush.toObject(includeInstance, f),
    workspaces: (f = msg.getWorkspaces()) && proto.gooseclip.goosecode.ide.v1.WorkspacesPush.toObject(includeInstance, f),
    activeSession: (f = msg.getActiveSession()) && proto.gooseclip.goosecode.ide.v1.ActiveSessionPush.toObject(includeInstance, f),
    fileCommand: (f = msg.getFileCommand()) && proto.gooseclip.goosecode.ide.v1.FileCommandPush.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gooseclip.goosecode.ide.v1.PushMessage}
 */
proto.gooseclip.goosecode.ide.v1.PushMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gooseclip.goosecode.ide.v1.PushMessage;
  return proto.gooseclip.goosecode.ide.v1.PushMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gooseclip.goosecode.ide.v1.PushMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gooseclip.goosecode.ide.v1.PushMessage}
 */
proto.gooseclip.goosecode.ide.v1.PushMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.gooseclip.goosecode.ide.v1.PushType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 10:
      var value = new proto.gooseclip.goosecode.ide.v1.AppCommandPush;
      reader.readMessage(value,proto.gooseclip.goosecode.ide.v1.AppCommandPush.deserializeBinaryFromReader);
      msg.setAppCommand(value);
      break;
    case 11:
      var value = new proto.gooseclip.goosecode.ide.v1.WorkspacesPush;
      reader.readMessage(value,proto.gooseclip.goosecode.ide.v1.WorkspacesPush.deserializeBinaryFromReader);
      msg.setWorkspaces(value);
      break;
    case 12:
      var value = new proto.gooseclip.goosecode.ide.v1.ActiveSessionPush;
      reader.readMessage(value,proto.gooseclip.goosecode.ide.v1.ActiveSessionPush.deserializeBinaryFromReader);
      msg.setActiveSession(value);
      break;
    case 13:
      var value = new proto.gooseclip.goosecode.ide.v1.FileCommandPush;
      reader.readMessage(value,proto.gooseclip.goosecode.ide.v1.FileCommandPush.deserializeBinaryFromReader);
      msg.setFileCommand(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gooseclip.goosecode.ide.v1.PushMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gooseclip.goosecode.ide.v1.PushMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gooseclip.goosecode.ide.v1.PushMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gooseclip.goosecode.ide.v1.PushMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getAppCommand();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.gooseclip.goosecode.ide.v1.AppCommandPush.serializeBinaryToWriter
    );
  }
  f = message.getWorkspaces();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.gooseclip.goosecode.ide.v1.WorkspacesPush.serializeBinaryToWriter
    );
  }
  f = message.getActiveSession();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.gooseclip.goosecode.ide.v1.ActiveSessionPush.serializeBinaryToWriter
    );
  }
  f = message.getFileCommand();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.gooseclip.goosecode.ide.v1.FileCommandPush.serializeBinaryToWriter
    );
  }
};


/**
 * optional PushType type = 1;
 * @return {!proto.gooseclip.goosecode.ide.v1.PushType}
 */
proto.gooseclip.goosecode.ide.v1.PushMessage.prototype.getType = function() {
  return /** @type {!proto.gooseclip.goosecode.ide.v1.PushType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.gooseclip.goosecode.ide.v1.PushType} value
 * @return {!proto.gooseclip.goosecode.ide.v1.PushMessage} returns this
 */
proto.gooseclip.goosecode.ide.v1.PushMessage.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional AppCommandPush app_command = 10;
 * @return {?proto.gooseclip.goosecode.ide.v1.AppCommandPush}
 */
proto.gooseclip.goosecode.ide.v1.PushMessage.prototype.getAppCommand = function() {
  return /** @type{?proto.gooseclip.goosecode.ide.v1.AppCommandPush} */ (
    jspb.Message.getWrapperField(this, proto.gooseclip.goosecode.ide.v1.AppCommandPush, 10));
};


/**
 * @param {?proto.gooseclip.goosecode.ide.v1.AppCommandPush|undefined} value
 * @return {!proto.gooseclip.goosecode.ide.v1.PushMessage} returns this
*/
proto.gooseclip.goosecode.ide.v1.PushMessage.prototype.setAppCommand = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.gooseclip.goosecode.ide.v1.PushMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.gooseclip.goosecode.ide.v1.PushMessage} returns this
 */
proto.gooseclip.goosecode.ide.v1.PushMessage.prototype.clearAppCommand = function() {
  return this.setAppCommand(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gooseclip.goosecode.ide.v1.PushMessage.prototype.hasAppCommand = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional WorkspacesPush workspaces = 11;
 * @return {?proto.gooseclip.goosecode.ide.v1.WorkspacesPush}
 */
proto.gooseclip.goosecode.ide.v1.PushMessage.prototype.getWorkspaces = function() {
  return /** @type{?proto.gooseclip.goosecode.ide.v1.WorkspacesPush} */ (
    jspb.Message.getWrapperField(this, proto.gooseclip.goosecode.ide.v1.WorkspacesPush, 11));
};


/**
 * @param {?proto.gooseclip.goosecode.ide.v1.WorkspacesPush|undefined} value
 * @return {!proto.gooseclip.goosecode.ide.v1.PushMessage} returns this
*/
proto.gooseclip.goosecode.ide.v1.PushMessage.prototype.setWorkspaces = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.gooseclip.goosecode.ide.v1.PushMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.gooseclip.goosecode.ide.v1.PushMessage} returns this
 */
proto.gooseclip.goosecode.ide.v1.PushMessage.prototype.clearWorkspaces = function() {
  return this.setWorkspaces(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gooseclip.goosecode.ide.v1.PushMessage.prototype.hasWorkspaces = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional ActiveSessionPush active_session = 12;
 * @return {?proto.gooseclip.goosecode.ide.v1.ActiveSessionPush}
 */
proto.gooseclip.goosecode.ide.v1.PushMessage.prototype.getActiveSession = function() {
  return /** @type{?proto.gooseclip.goosecode.ide.v1.ActiveSessionPush} */ (
    jspb.Message.getWrapperField(this, proto.gooseclip.goosecode.ide.v1.ActiveSessionPush, 12));
};


/**
 * @param {?proto.gooseclip.goosecode.ide.v1.ActiveSessionPush|undefined} value
 * @return {!proto.gooseclip.goosecode.ide.v1.PushMessage} returns this
*/
proto.gooseclip.goosecode.ide.v1.PushMessage.prototype.setActiveSession = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.gooseclip.goosecode.ide.v1.PushMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.gooseclip.goosecode.ide.v1.PushMessage} returns this
 */
proto.gooseclip.goosecode.ide.v1.PushMessage.prototype.clearActiveSession = function() {
  return this.setActiveSession(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gooseclip.goosecode.ide.v1.PushMessage.prototype.hasActiveSession = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional FileCommandPush file_command = 13;
 * @return {?proto.gooseclip.goosecode.ide.v1.FileCommandPush}
 */
proto.gooseclip.goosecode.ide.v1.PushMessage.prototype.getFileCommand = function() {
  return /** @type{?proto.gooseclip.goosecode.ide.v1.FileCommandPush} */ (
    jspb.Message.getWrapperField(this, proto.gooseclip.goosecode.ide.v1.FileCommandPush, 13));
};


/**
 * @param {?proto.gooseclip.goosecode.ide.v1.FileCommandPush|undefined} value
 * @return {!proto.gooseclip.goosecode.ide.v1.PushMessage} returns this
*/
proto.gooseclip.goosecode.ide.v1.PushMessage.prototype.setFileCommand = function(value) {
  return jspb.Message.setOneofWrapperField(this, 13, proto.gooseclip.goosecode.ide.v1.PushMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.gooseclip.goosecode.ide.v1.PushMessage} returns this
 */
proto.gooseclip.goosecode.ide.v1.PushMessage.prototype.clearFileCommand = function() {
  return this.setFileCommand(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gooseclip.goosecode.ide.v1.PushMessage.prototype.hasFileCommand = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * @enum {number}
 */
proto.gooseclip.goosecode.ide.v1.RequestType = {
  REQUEST_TYPE_UNSPECIFIED: 0,
  REQUEST_TYPE_LIST_FILES: 2,
  REQUEST_TYPE_GET_FILES: 3,
  REQUEST_TYPE_OPEN_FILES: 4,
  REQUEST_TYPE_FIND_STRING: 5,
  REQUEST_TYPE_SELECT_RANGE: 6,
  REQUEST_TYPE_DESCRIBE_RANGE: 7,
  REQUEST_TYPE_GO_TO_DEFINITION: 8,
  REQUEST_TYPE_RENAME: 9,
  REQUEST_TYPE_FIND_USES: 10,
  REQUEST_TYPE_EDITOR_STATE: 11,
  REQUEST_TYPE_CONTENT_CHANGE: 12
};

/**
 * @enum {number}
 */
proto.gooseclip.goosecode.ide.v1.SymbolKind = {
  SYMBOL_KIND_UNSPECIFIED: 0,
  SYMBOL_KIND_FILE: 1,
  SYMBOL_KIND_MODULE: 2,
  SYMBOL_KIND_NAMESPACE: 3,
  SYMBOL_KIND_PACKAGE: 4,
  SYMBOL_KIND_CLASS: 5,
  SYMBOL_KIND_METHOD: 6,
  SYMBOL_KIND_PROPERTY: 7,
  SYMBOL_KIND_FIELD: 8,
  SYMBOL_KIND_CONSTRUCTOR: 9,
  SYMBOL_KIND_ENUM: 10,
  SYMBOL_KIND_INTERFACE: 11,
  SYMBOL_KIND_FUNCTION: 12,
  SYMBOL_KIND_VARIABLE: 13,
  SYMBOL_KIND_CONSTANT: 14,
  SYMBOL_KIND_STRING: 15,
  SYMBOL_KIND_NUMBER: 16,
  SYMBOL_KIND_BOOLEAN: 17,
  SYMBOL_KIND_ARRAY: 18,
  SYMBOL_KIND_OBJECT: 19,
  SYMBOL_KIND_KEY: 20,
  SYMBOL_KIND_NULL: 21,
  SYMBOL_KIND_ENUM_MEMBER: 22,
  SYMBOL_KIND_STRUCT: 23,
  SYMBOL_KIND_EVENT: 24,
  SYMBOL_KIND_OPERATOR: 25,
  SYMBOL_KIND_TYPE_PARAMETER: 26
};

/**
 * @enum {number}
 */
proto.gooseclip.goosecode.ide.v1.ResponseType = {
  RESPONSE_TYPE_UNSPECIFIED: 0,
  RESPONSE_TYPE_LIST_FILES: 2,
  RESPONSE_TYPE_GET_FILES: 3,
  RESPONSE_TYPE_OPEN_FILES: 4,
  RESPONSE_TYPE_FIND_STRING: 5,
  RESPONSE_TYPE_SELECT_RANGE: 6,
  RESPONSE_TYPE_DESCRIBE_RANGE: 7,
  RESPONSE_TYPE_GO_TO_DEFINITION: 8,
  RESPONSE_TYPE_RENAME: 9,
  RESPONSE_TYPE_FIND_USES: 10,
  RESPONSE_TYPE_ERROR: 999
};

/**
 * @enum {number}
 */
proto.gooseclip.goosecode.ide.v1.PushType = {
  PUSH_TYPE_UNSPECIFIED: 0,
  PUSH_TYPE_APP_COMMAND: 1,
  PUSH_TYPE_WORKSPACES: 2,
  PUSH_TYPE_ACTIVE_SESSION: 3,
  PUSH_TYPE_FILE_COMMAND: 4
};

/**
 * @enum {number}
 */
proto.gooseclip.goosecode.ide.v1.FollowType = {
  FOLLOW_TYPE_UNSPECIFIED: 0,
  FOLLOW_TYPE_DEFINITION: 1,
  FOLLOW_TYPE_REFERENCE: 2
};

/**
 * @enum {number}
 */
proto.gooseclip.goosecode.ide.v1.AppCommandType = {
  APP_COMMAND_TYPE_UNSPECIFIED: 0,
  APP_COMMAND_TYPE_MINIMAP: 1,
  APP_COMMAND_TYPE_OVERLAY: 2
};

/**
 * @enum {number}
 */
proto.gooseclip.goosecode.ide.v1.ActiveSessionType = {
  ACTIVE_SESSION_TYPE_UNSPECIFIED: 0,
  ACTIVE_SESSION_TYPE_DELETE: 1,
  ACTIVE_SESSION_TYPE_SAVE: 2,
  ACTIVE_SESSION_TYPE_REGENERATE: 3,
  ACTIVE_SESSION_TYPE_STEP: 4
};

/**
 * @enum {number}
 */
proto.gooseclip.goosecode.ide.v1.RegenerateType = {
  REGENERATE_TYPE_UNSPECIFIED: 0,
  REGENERATE_TYPE_LINEAR: 1,
  REGENERATE_TYPE_SWIMLANE: 2
};

/**
 * @enum {number}
 */
proto.gooseclip.goosecode.ide.v1.FileCommandType = {
  FILE_COMMAND_TYPE_UNSPECIFIED: 0,
  FILE_COMMAND_TYPE_OPEN_FILE: 10,
  FILE_COMMAND_TYPE_CREATE_SNIPPET: 11,
  FILE_COMMAND_TYPE_PIN_FILE: 12,
  FILE_COMMAND_TYPE_HIGHLIGHT: 13,
  FILE_COMMAND_TYPE_FOLLOW: 14
};

goog.object.extend(exports, proto.gooseclip.goosecode.ide.v1);
