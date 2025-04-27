// source: goosecode/v2/data/app/source/ide/ide.proto
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

goog.exportSymbol('proto.goosecode.v2.app.source.ide.ActiveSessionPush', null, global);
goog.exportSymbol('proto.goosecode.v2.app.source.ide.ActiveSessionPush.DataCase', null, global);
goog.exportSymbol('proto.goosecode.v2.app.source.ide.ActiveSessionType', null, global);
goog.exportSymbol('proto.goosecode.v2.app.source.ide.AppCommandPush', null, global);
goog.exportSymbol('proto.goosecode.v2.app.source.ide.AppCommandType', null, global);
goog.exportSymbol('proto.goosecode.v2.app.source.ide.BookmarkPush', null, global);
goog.exportSymbol('proto.goosecode.v2.app.source.ide.CodeSourceIDResponse', null, global);
goog.exportSymbol('proto.goosecode.v2.app.source.ide.ContentChangeResponse', null, global);
goog.exportSymbol('proto.goosecode.v2.app.source.ide.CreateSnippetPush', null, global);
goog.exportSymbol('proto.goosecode.v2.app.source.ide.DefinitionFollow', null, global);
goog.exportSymbol('proto.goosecode.v2.app.source.ide.DescribeRangeRequest', null, global);
goog.exportSymbol('proto.goosecode.v2.app.source.ide.DescribeRangeResponse', null, global);
goog.exportSymbol('proto.goosecode.v2.app.source.ide.DocumentSymbol', null, global);
goog.exportSymbol('proto.goosecode.v2.app.source.ide.EditorDiagnosticsResponse', null, global);
goog.exportSymbol('proto.goosecode.v2.app.source.ide.EditorStateResponse', null, global);
goog.exportSymbol('proto.goosecode.v2.app.source.ide.ErrorResponse', null, global);
goog.exportSymbol('proto.goosecode.v2.app.source.ide.FileCommandPush', null, global);
goog.exportSymbol('proto.goosecode.v2.app.source.ide.FileCommandPush.DataCase', null, global);
goog.exportSymbol('proto.goosecode.v2.app.source.ide.FileCommandType', null, global);
goog.exportSymbol('proto.goosecode.v2.app.source.ide.FindStringRequest', null, global);
goog.exportSymbol('proto.goosecode.v2.app.source.ide.FindStringResponse', null, global);
goog.exportSymbol('proto.goosecode.v2.app.source.ide.FindUsesRequest', null, global);
goog.exportSymbol('proto.goosecode.v2.app.source.ide.FindUsesResponse', null, global);
goog.exportSymbol('proto.goosecode.v2.app.source.ide.FollowPush', null, global);
goog.exportSymbol('proto.goosecode.v2.app.source.ide.FollowPush.DataCase', null, global);
goog.exportSymbol('proto.goosecode.v2.app.source.ide.FollowType', null, global);
goog.exportSymbol('proto.goosecode.v2.app.source.ide.GetFilesRequest', null, global);
goog.exportSymbol('proto.goosecode.v2.app.source.ide.GetFilesResponse', null, global);
goog.exportSymbol('proto.goosecode.v2.app.source.ide.GoToDefinitionRequest', null, global);
goog.exportSymbol('proto.goosecode.v2.app.source.ide.GoToDefinitionResponse', null, global);
goog.exportSymbol('proto.goosecode.v2.app.source.ide.HighlightPush', null, global);
goog.exportSymbol('proto.goosecode.v2.app.source.ide.ListFilesRequest', null, global);
goog.exportSymbol('proto.goosecode.v2.app.source.ide.ListFilesResponse', null, global);
goog.exportSymbol('proto.goosecode.v2.app.source.ide.Location', null, global);
goog.exportSymbol('proto.goosecode.v2.app.source.ide.LocationWithContext', null, global);
goog.exportSymbol('proto.goosecode.v2.app.source.ide.OpenFilesRequest', null, global);
goog.exportSymbol('proto.goosecode.v2.app.source.ide.OpenFilesResponse', null, global);
goog.exportSymbol('proto.goosecode.v2.app.source.ide.OpenPush', null, global);
goog.exportSymbol('proto.goosecode.v2.app.source.ide.Position', null, global);
goog.exportSymbol('proto.goosecode.v2.app.source.ide.PushMessage', null, global);
goog.exportSymbol('proto.goosecode.v2.app.source.ide.PushMessage.DataCase', null, global);
goog.exportSymbol('proto.goosecode.v2.app.source.ide.PushType', null, global);
goog.exportSymbol('proto.goosecode.v2.app.source.ide.Range', null, global);
goog.exportSymbol('proto.goosecode.v2.app.source.ide.ReferenceFollow', null, global);
goog.exportSymbol('proto.goosecode.v2.app.source.ide.RegeneratePush', null, global);
goog.exportSymbol('proto.goosecode.v2.app.source.ide.RegenerateType', null, global);
goog.exportSymbol('proto.goosecode.v2.app.source.ide.RenameRequest', null, global);
goog.exportSymbol('proto.goosecode.v2.app.source.ide.RenameResponse', null, global);
goog.exportSymbol('proto.goosecode.v2.app.source.ide.RepositoryDetailsRequest', null, global);
goog.exportSymbol('proto.goosecode.v2.app.source.ide.RepositoryDetailsResponse', null, global);
goog.exportSymbol('proto.goosecode.v2.app.source.ide.RequestMessage', null, global);
goog.exportSymbol('proto.goosecode.v2.app.source.ide.RequestMessage.DataCase', null, global);
goog.exportSymbol('proto.goosecode.v2.app.source.ide.RequestType', null, global);
goog.exportSymbol('proto.goosecode.v2.app.source.ide.ResponseMessage', null, global);
goog.exportSymbol('proto.goosecode.v2.app.source.ide.ResponseMessage.DataCase', null, global);
goog.exportSymbol('proto.goosecode.v2.app.source.ide.ResponseType', null, global);
goog.exportSymbol('proto.goosecode.v2.app.source.ide.SelectRangeRequest', null, global);
goog.exportSymbol('proto.goosecode.v2.app.source.ide.SelectRangeResponse', null, global);
goog.exportSymbol('proto.goosecode.v2.app.source.ide.SnippetContext', null, global);
goog.exportSymbol('proto.goosecode.v2.app.source.ide.SymbolKind', null, global);
goog.exportSymbol('proto.goosecode.v2.app.source.ide.VersionControlInfo', null, global);
goog.exportSymbol('proto.goosecode.v2.app.source.ide.WorkspaceDetails', null, global);
goog.exportSymbol('proto.goosecode.v2.app.source.ide.WorkspacesPush', null, global);
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
proto.goosecode.v2.app.source.ide.RepositoryDetailsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.goosecode.v2.app.source.ide.RepositoryDetailsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.goosecode.v2.app.source.ide.RepositoryDetailsRequest.displayName = 'proto.goosecode.v2.app.source.ide.RepositoryDetailsRequest';
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
proto.goosecode.v2.app.source.ide.ListFilesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.goosecode.v2.app.source.ide.ListFilesRequest.repeatedFields_, null);
};
goog.inherits(proto.goosecode.v2.app.source.ide.ListFilesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.goosecode.v2.app.source.ide.ListFilesRequest.displayName = 'proto.goosecode.v2.app.source.ide.ListFilesRequest';
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
proto.goosecode.v2.app.source.ide.OpenFilesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.goosecode.v2.app.source.ide.OpenFilesRequest.repeatedFields_, null);
};
goog.inherits(proto.goosecode.v2.app.source.ide.OpenFilesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.goosecode.v2.app.source.ide.OpenFilesRequest.displayName = 'proto.goosecode.v2.app.source.ide.OpenFilesRequest';
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
proto.goosecode.v2.app.source.ide.GetFilesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.goosecode.v2.app.source.ide.GetFilesRequest.repeatedFields_, null);
};
goog.inherits(proto.goosecode.v2.app.source.ide.GetFilesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.goosecode.v2.app.source.ide.GetFilesRequest.displayName = 'proto.goosecode.v2.app.source.ide.GetFilesRequest';
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
proto.goosecode.v2.app.source.ide.FindStringRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.goosecode.v2.app.source.ide.FindStringRequest.repeatedFields_, null);
};
goog.inherits(proto.goosecode.v2.app.source.ide.FindStringRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.goosecode.v2.app.source.ide.FindStringRequest.displayName = 'proto.goosecode.v2.app.source.ide.FindStringRequest';
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
proto.goosecode.v2.app.source.ide.SelectRangeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.goosecode.v2.app.source.ide.SelectRangeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.goosecode.v2.app.source.ide.SelectRangeRequest.displayName = 'proto.goosecode.v2.app.source.ide.SelectRangeRequest';
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
proto.goosecode.v2.app.source.ide.DescribeRangeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.goosecode.v2.app.source.ide.DescribeRangeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.goosecode.v2.app.source.ide.DescribeRangeRequest.displayName = 'proto.goosecode.v2.app.source.ide.DescribeRangeRequest';
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
proto.goosecode.v2.app.source.ide.GoToDefinitionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.goosecode.v2.app.source.ide.GoToDefinitionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.goosecode.v2.app.source.ide.GoToDefinitionRequest.displayName = 'proto.goosecode.v2.app.source.ide.GoToDefinitionRequest';
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
proto.goosecode.v2.app.source.ide.RenameRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.goosecode.v2.app.source.ide.RenameRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.goosecode.v2.app.source.ide.RenameRequest.displayName = 'proto.goosecode.v2.app.source.ide.RenameRequest';
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
proto.goosecode.v2.app.source.ide.FindUsesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.goosecode.v2.app.source.ide.FindUsesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.goosecode.v2.app.source.ide.FindUsesRequest.displayName = 'proto.goosecode.v2.app.source.ide.FindUsesRequest';
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
proto.goosecode.v2.app.source.ide.RequestMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.goosecode.v2.app.source.ide.RequestMessage.oneofGroups_);
};
goog.inherits(proto.goosecode.v2.app.source.ide.RequestMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.goosecode.v2.app.source.ide.RequestMessage.displayName = 'proto.goosecode.v2.app.source.ide.RequestMessage';
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
proto.goosecode.v2.app.source.ide.RepositoryDetailsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.goosecode.v2.app.source.ide.RepositoryDetailsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.goosecode.v2.app.source.ide.RepositoryDetailsResponse.displayName = 'proto.goosecode.v2.app.source.ide.RepositoryDetailsResponse';
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
proto.goosecode.v2.app.source.ide.ListFilesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.goosecode.v2.app.source.ide.ListFilesResponse.repeatedFields_, null);
};
goog.inherits(proto.goosecode.v2.app.source.ide.ListFilesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.goosecode.v2.app.source.ide.ListFilesResponse.displayName = 'proto.goosecode.v2.app.source.ide.ListFilesResponse';
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
proto.goosecode.v2.app.source.ide.OpenFilesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.goosecode.v2.app.source.ide.OpenFilesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.goosecode.v2.app.source.ide.OpenFilesResponse.displayName = 'proto.goosecode.v2.app.source.ide.OpenFilesResponse';
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
proto.goosecode.v2.app.source.ide.GetFilesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.goosecode.v2.app.source.ide.GetFilesResponse.repeatedFields_, null);
};
goog.inherits(proto.goosecode.v2.app.source.ide.GetFilesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.goosecode.v2.app.source.ide.GetFilesResponse.displayName = 'proto.goosecode.v2.app.source.ide.GetFilesResponse';
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
proto.goosecode.v2.app.source.ide.Position = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.goosecode.v2.app.source.ide.Position, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.goosecode.v2.app.source.ide.Position.displayName = 'proto.goosecode.v2.app.source.ide.Position';
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
proto.goosecode.v2.app.source.ide.Range = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.goosecode.v2.app.source.ide.Range, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.goosecode.v2.app.source.ide.Range.displayName = 'proto.goosecode.v2.app.source.ide.Range';
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
proto.goosecode.v2.app.source.ide.Location = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.goosecode.v2.app.source.ide.Location, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.goosecode.v2.app.source.ide.Location.displayName = 'proto.goosecode.v2.app.source.ide.Location';
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
proto.goosecode.v2.app.source.ide.DocumentSymbol = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.goosecode.v2.app.source.ide.DocumentSymbol.repeatedFields_, null);
};
goog.inherits(proto.goosecode.v2.app.source.ide.DocumentSymbol, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.goosecode.v2.app.source.ide.DocumentSymbol.displayName = 'proto.goosecode.v2.app.source.ide.DocumentSymbol';
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
proto.goosecode.v2.app.source.ide.FindStringResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.goosecode.v2.app.source.ide.FindStringResponse.repeatedFields_, null);
};
goog.inherits(proto.goosecode.v2.app.source.ide.FindStringResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.goosecode.v2.app.source.ide.FindStringResponse.displayName = 'proto.goosecode.v2.app.source.ide.FindStringResponse';
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
proto.goosecode.v2.app.source.ide.SelectRangeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.goosecode.v2.app.source.ide.SelectRangeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.goosecode.v2.app.source.ide.SelectRangeResponse.displayName = 'proto.goosecode.v2.app.source.ide.SelectRangeResponse';
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
proto.goosecode.v2.app.source.ide.DescribeRangeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.goosecode.v2.app.source.ide.DescribeRangeResponse.repeatedFields_, null);
};
goog.inherits(proto.goosecode.v2.app.source.ide.DescribeRangeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.goosecode.v2.app.source.ide.DescribeRangeResponse.displayName = 'proto.goosecode.v2.app.source.ide.DescribeRangeResponse';
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
proto.goosecode.v2.app.source.ide.GoToDefinitionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.goosecode.v2.app.source.ide.GoToDefinitionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.goosecode.v2.app.source.ide.GoToDefinitionResponse.displayName = 'proto.goosecode.v2.app.source.ide.GoToDefinitionResponse';
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
proto.goosecode.v2.app.source.ide.RenameResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.goosecode.v2.app.source.ide.RenameResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.goosecode.v2.app.source.ide.RenameResponse.displayName = 'proto.goosecode.v2.app.source.ide.RenameResponse';
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
proto.goosecode.v2.app.source.ide.FindUsesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.goosecode.v2.app.source.ide.FindUsesResponse.repeatedFields_, null);
};
goog.inherits(proto.goosecode.v2.app.source.ide.FindUsesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.goosecode.v2.app.source.ide.FindUsesResponse.displayName = 'proto.goosecode.v2.app.source.ide.FindUsesResponse';
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
proto.goosecode.v2.app.source.ide.EditorStateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.goosecode.v2.app.source.ide.EditorStateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.goosecode.v2.app.source.ide.EditorStateResponse.displayName = 'proto.goosecode.v2.app.source.ide.EditorStateResponse';
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
proto.goosecode.v2.app.source.ide.ContentChangeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.goosecode.v2.app.source.ide.ContentChangeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.goosecode.v2.app.source.ide.ContentChangeResponse.displayName = 'proto.goosecode.v2.app.source.ide.ContentChangeResponse';
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
proto.goosecode.v2.app.source.ide.EditorDiagnosticsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.goosecode.v2.app.source.ide.EditorDiagnosticsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.goosecode.v2.app.source.ide.EditorDiagnosticsResponse.displayName = 'proto.goosecode.v2.app.source.ide.EditorDiagnosticsResponse';
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
proto.goosecode.v2.app.source.ide.CodeSourceIDResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.goosecode.v2.app.source.ide.CodeSourceIDResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.goosecode.v2.app.source.ide.CodeSourceIDResponse.displayName = 'proto.goosecode.v2.app.source.ide.CodeSourceIDResponse';
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
proto.goosecode.v2.app.source.ide.ErrorResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.goosecode.v2.app.source.ide.ErrorResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.goosecode.v2.app.source.ide.ErrorResponse.displayName = 'proto.goosecode.v2.app.source.ide.ErrorResponse';
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
proto.goosecode.v2.app.source.ide.ResponseMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, proto.goosecode.v2.app.source.ide.ResponseMessage.oneofGroups_);
};
goog.inherits(proto.goosecode.v2.app.source.ide.ResponseMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.goosecode.v2.app.source.ide.ResponseMessage.displayName = 'proto.goosecode.v2.app.source.ide.ResponseMessage';
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
proto.goosecode.v2.app.source.ide.OpenPush = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.goosecode.v2.app.source.ide.OpenPush, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.goosecode.v2.app.source.ide.OpenPush.displayName = 'proto.goosecode.v2.app.source.ide.OpenPush';
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
proto.goosecode.v2.app.source.ide.SnippetContext = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.goosecode.v2.app.source.ide.SnippetContext, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.goosecode.v2.app.source.ide.SnippetContext.displayName = 'proto.goosecode.v2.app.source.ide.SnippetContext';
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
proto.goosecode.v2.app.source.ide.CreateSnippetPush = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.goosecode.v2.app.source.ide.CreateSnippetPush, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.goosecode.v2.app.source.ide.CreateSnippetPush.displayName = 'proto.goosecode.v2.app.source.ide.CreateSnippetPush';
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
proto.goosecode.v2.app.source.ide.BookmarkPush = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.goosecode.v2.app.source.ide.BookmarkPush, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.goosecode.v2.app.source.ide.BookmarkPush.displayName = 'proto.goosecode.v2.app.source.ide.BookmarkPush';
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
proto.goosecode.v2.app.source.ide.HighlightPush = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.goosecode.v2.app.source.ide.HighlightPush, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.goosecode.v2.app.source.ide.HighlightPush.displayName = 'proto.goosecode.v2.app.source.ide.HighlightPush';
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
proto.goosecode.v2.app.source.ide.LocationWithContext = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.goosecode.v2.app.source.ide.LocationWithContext, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.goosecode.v2.app.source.ide.LocationWithContext.displayName = 'proto.goosecode.v2.app.source.ide.LocationWithContext';
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
proto.goosecode.v2.app.source.ide.DefinitionFollow = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.goosecode.v2.app.source.ide.DefinitionFollow, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.goosecode.v2.app.source.ide.DefinitionFollow.displayName = 'proto.goosecode.v2.app.source.ide.DefinitionFollow';
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
proto.goosecode.v2.app.source.ide.ReferenceFollow = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.goosecode.v2.app.source.ide.ReferenceFollow.repeatedFields_, null);
};
goog.inherits(proto.goosecode.v2.app.source.ide.ReferenceFollow, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.goosecode.v2.app.source.ide.ReferenceFollow.displayName = 'proto.goosecode.v2.app.source.ide.ReferenceFollow';
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
proto.goosecode.v2.app.source.ide.FollowPush = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.goosecode.v2.app.source.ide.FollowPush.oneofGroups_);
};
goog.inherits(proto.goosecode.v2.app.source.ide.FollowPush, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.goosecode.v2.app.source.ide.FollowPush.displayName = 'proto.goosecode.v2.app.source.ide.FollowPush';
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
proto.goosecode.v2.app.source.ide.WorkspaceDetails = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.goosecode.v2.app.source.ide.WorkspaceDetails, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.goosecode.v2.app.source.ide.WorkspaceDetails.displayName = 'proto.goosecode.v2.app.source.ide.WorkspaceDetails';
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
proto.goosecode.v2.app.source.ide.WorkspacesPush = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.goosecode.v2.app.source.ide.WorkspacesPush.repeatedFields_, null);
};
goog.inherits(proto.goosecode.v2.app.source.ide.WorkspacesPush, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.goosecode.v2.app.source.ide.WorkspacesPush.displayName = 'proto.goosecode.v2.app.source.ide.WorkspacesPush';
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
proto.goosecode.v2.app.source.ide.AppCommandPush = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.goosecode.v2.app.source.ide.AppCommandPush, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.goosecode.v2.app.source.ide.AppCommandPush.displayName = 'proto.goosecode.v2.app.source.ide.AppCommandPush';
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
proto.goosecode.v2.app.source.ide.RegeneratePush = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.goosecode.v2.app.source.ide.RegeneratePush, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.goosecode.v2.app.source.ide.RegeneratePush.displayName = 'proto.goosecode.v2.app.source.ide.RegeneratePush';
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
proto.goosecode.v2.app.source.ide.ActiveSessionPush = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.goosecode.v2.app.source.ide.ActiveSessionPush.oneofGroups_);
};
goog.inherits(proto.goosecode.v2.app.source.ide.ActiveSessionPush, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.goosecode.v2.app.source.ide.ActiveSessionPush.displayName = 'proto.goosecode.v2.app.source.ide.ActiveSessionPush';
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
proto.goosecode.v2.app.source.ide.VersionControlInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.goosecode.v2.app.source.ide.VersionControlInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.goosecode.v2.app.source.ide.VersionControlInfo.displayName = 'proto.goosecode.v2.app.source.ide.VersionControlInfo';
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
proto.goosecode.v2.app.source.ide.FileCommandPush = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.goosecode.v2.app.source.ide.FileCommandPush.oneofGroups_);
};
goog.inherits(proto.goosecode.v2.app.source.ide.FileCommandPush, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.goosecode.v2.app.source.ide.FileCommandPush.displayName = 'proto.goosecode.v2.app.source.ide.FileCommandPush';
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
proto.goosecode.v2.app.source.ide.PushMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.goosecode.v2.app.source.ide.PushMessage.oneofGroups_);
};
goog.inherits(proto.goosecode.v2.app.source.ide.PushMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.goosecode.v2.app.source.ide.PushMessage.displayName = 'proto.goosecode.v2.app.source.ide.PushMessage';
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
proto.goosecode.v2.app.source.ide.RepositoryDetailsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.goosecode.v2.app.source.ide.RepositoryDetailsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.goosecode.v2.app.source.ide.RepositoryDetailsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.RepositoryDetailsRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.goosecode.v2.app.source.ide.RepositoryDetailsRequest}
 */
proto.goosecode.v2.app.source.ide.RepositoryDetailsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.goosecode.v2.app.source.ide.RepositoryDetailsRequest;
  return proto.goosecode.v2.app.source.ide.RepositoryDetailsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.goosecode.v2.app.source.ide.RepositoryDetailsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.goosecode.v2.app.source.ide.RepositoryDetailsRequest}
 */
proto.goosecode.v2.app.source.ide.RepositoryDetailsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.goosecode.v2.app.source.ide.RepositoryDetailsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.goosecode.v2.app.source.ide.RepositoryDetailsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.goosecode.v2.app.source.ide.RepositoryDetailsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.RepositoryDetailsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.goosecode.v2.app.source.ide.ListFilesRequest.repeatedFields_ = [1];



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
proto.goosecode.v2.app.source.ide.ListFilesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.goosecode.v2.app.source.ide.ListFilesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.goosecode.v2.app.source.ide.ListFilesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.ListFilesRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.goosecode.v2.app.source.ide.ListFilesRequest}
 */
proto.goosecode.v2.app.source.ide.ListFilesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.goosecode.v2.app.source.ide.ListFilesRequest;
  return proto.goosecode.v2.app.source.ide.ListFilesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.goosecode.v2.app.source.ide.ListFilesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.goosecode.v2.app.source.ide.ListFilesRequest}
 */
proto.goosecode.v2.app.source.ide.ListFilesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.goosecode.v2.app.source.ide.ListFilesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.goosecode.v2.app.source.ide.ListFilesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.goosecode.v2.app.source.ide.ListFilesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.ListFilesRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.goosecode.v2.app.source.ide.ListFilesRequest.prototype.getExcludedDirList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.goosecode.v2.app.source.ide.ListFilesRequest} returns this
 */
proto.goosecode.v2.app.source.ide.ListFilesRequest.prototype.setExcludedDirList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.goosecode.v2.app.source.ide.ListFilesRequest} returns this
 */
proto.goosecode.v2.app.source.ide.ListFilesRequest.prototype.addExcludedDir = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.goosecode.v2.app.source.ide.ListFilesRequest} returns this
 */
proto.goosecode.v2.app.source.ide.ListFilesRequest.prototype.clearExcludedDirList = function() {
  return this.setExcludedDirList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.goosecode.v2.app.source.ide.OpenFilesRequest.repeatedFields_ = [1];



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
proto.goosecode.v2.app.source.ide.OpenFilesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.goosecode.v2.app.source.ide.OpenFilesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.goosecode.v2.app.source.ide.OpenFilesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.OpenFilesRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.goosecode.v2.app.source.ide.OpenFilesRequest}
 */
proto.goosecode.v2.app.source.ide.OpenFilesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.goosecode.v2.app.source.ide.OpenFilesRequest;
  return proto.goosecode.v2.app.source.ide.OpenFilesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.goosecode.v2.app.source.ide.OpenFilesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.goosecode.v2.app.source.ide.OpenFilesRequest}
 */
proto.goosecode.v2.app.source.ide.OpenFilesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.goosecode.v2.app.source.ide.OpenFilesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.goosecode.v2.app.source.ide.OpenFilesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.goosecode.v2.app.source.ide.OpenFilesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.OpenFilesRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.goosecode.v2.app.source.ide.OpenFilesRequest.prototype.getFilePathsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.goosecode.v2.app.source.ide.OpenFilesRequest} returns this
 */
proto.goosecode.v2.app.source.ide.OpenFilesRequest.prototype.setFilePathsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.goosecode.v2.app.source.ide.OpenFilesRequest} returns this
 */
proto.goosecode.v2.app.source.ide.OpenFilesRequest.prototype.addFilePaths = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.goosecode.v2.app.source.ide.OpenFilesRequest} returns this
 */
proto.goosecode.v2.app.source.ide.OpenFilesRequest.prototype.clearFilePathsList = function() {
  return this.setFilePathsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.goosecode.v2.app.source.ide.GetFilesRequest.repeatedFields_ = [1];



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
proto.goosecode.v2.app.source.ide.GetFilesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.goosecode.v2.app.source.ide.GetFilesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.goosecode.v2.app.source.ide.GetFilesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.GetFilesRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.goosecode.v2.app.source.ide.GetFilesRequest}
 */
proto.goosecode.v2.app.source.ide.GetFilesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.goosecode.v2.app.source.ide.GetFilesRequest;
  return proto.goosecode.v2.app.source.ide.GetFilesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.goosecode.v2.app.source.ide.GetFilesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.goosecode.v2.app.source.ide.GetFilesRequest}
 */
proto.goosecode.v2.app.source.ide.GetFilesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.goosecode.v2.app.source.ide.GetFilesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.goosecode.v2.app.source.ide.GetFilesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.goosecode.v2.app.source.ide.GetFilesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.GetFilesRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.goosecode.v2.app.source.ide.GetFilesRequest.prototype.getFilePathsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.goosecode.v2.app.source.ide.GetFilesRequest} returns this
 */
proto.goosecode.v2.app.source.ide.GetFilesRequest.prototype.setFilePathsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.goosecode.v2.app.source.ide.GetFilesRequest} returns this
 */
proto.goosecode.v2.app.source.ide.GetFilesRequest.prototype.addFilePaths = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.goosecode.v2.app.source.ide.GetFilesRequest} returns this
 */
proto.goosecode.v2.app.source.ide.GetFilesRequest.prototype.clearFilePathsList = function() {
  return this.setFilePathsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.goosecode.v2.app.source.ide.FindStringRequest.repeatedFields_ = [2,3];



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
proto.goosecode.v2.app.source.ide.FindStringRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.goosecode.v2.app.source.ide.FindStringRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.goosecode.v2.app.source.ide.FindStringRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.FindStringRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.goosecode.v2.app.source.ide.FindStringRequest}
 */
proto.goosecode.v2.app.source.ide.FindStringRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.goosecode.v2.app.source.ide.FindStringRequest;
  return proto.goosecode.v2.app.source.ide.FindStringRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.goosecode.v2.app.source.ide.FindStringRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.goosecode.v2.app.source.ide.FindStringRequest}
 */
proto.goosecode.v2.app.source.ide.FindStringRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.goosecode.v2.app.source.ide.FindStringRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.goosecode.v2.app.source.ide.FindStringRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.goosecode.v2.app.source.ide.FindStringRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.FindStringRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.goosecode.v2.app.source.ide.FindStringRequest.prototype.getSearchPattern = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.goosecode.v2.app.source.ide.FindStringRequest} returns this
 */
proto.goosecode.v2.app.source.ide.FindStringRequest.prototype.setSearchPattern = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string included_files = 2;
 * @return {!Array<string>}
 */
proto.goosecode.v2.app.source.ide.FindStringRequest.prototype.getIncludedFilesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.goosecode.v2.app.source.ide.FindStringRequest} returns this
 */
proto.goosecode.v2.app.source.ide.FindStringRequest.prototype.setIncludedFilesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.goosecode.v2.app.source.ide.FindStringRequest} returns this
 */
proto.goosecode.v2.app.source.ide.FindStringRequest.prototype.addIncludedFiles = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.goosecode.v2.app.source.ide.FindStringRequest} returns this
 */
proto.goosecode.v2.app.source.ide.FindStringRequest.prototype.clearIncludedFilesList = function() {
  return this.setIncludedFilesList([]);
};


/**
 * repeated string excluded_files = 3;
 * @return {!Array<string>}
 */
proto.goosecode.v2.app.source.ide.FindStringRequest.prototype.getExcludedFilesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.goosecode.v2.app.source.ide.FindStringRequest} returns this
 */
proto.goosecode.v2.app.source.ide.FindStringRequest.prototype.setExcludedFilesList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.goosecode.v2.app.source.ide.FindStringRequest} returns this
 */
proto.goosecode.v2.app.source.ide.FindStringRequest.prototype.addExcludedFiles = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.goosecode.v2.app.source.ide.FindStringRequest} returns this
 */
proto.goosecode.v2.app.source.ide.FindStringRequest.prototype.clearExcludedFilesList = function() {
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
proto.goosecode.v2.app.source.ide.SelectRangeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.goosecode.v2.app.source.ide.SelectRangeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.goosecode.v2.app.source.ide.SelectRangeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.SelectRangeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    location: (f = msg.getLocation()) && proto.goosecode.v2.app.source.ide.Location.toObject(includeInstance, f)
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
 * @return {!proto.goosecode.v2.app.source.ide.SelectRangeRequest}
 */
proto.goosecode.v2.app.source.ide.SelectRangeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.goosecode.v2.app.source.ide.SelectRangeRequest;
  return proto.goosecode.v2.app.source.ide.SelectRangeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.goosecode.v2.app.source.ide.SelectRangeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.goosecode.v2.app.source.ide.SelectRangeRequest}
 */
proto.goosecode.v2.app.source.ide.SelectRangeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.goosecode.v2.app.source.ide.Location;
      reader.readMessage(value,proto.goosecode.v2.app.source.ide.Location.deserializeBinaryFromReader);
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
proto.goosecode.v2.app.source.ide.SelectRangeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.goosecode.v2.app.source.ide.SelectRangeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.goosecode.v2.app.source.ide.SelectRangeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.SelectRangeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.goosecode.v2.app.source.ide.Location.serializeBinaryToWriter
    );
  }
};


/**
 * optional Location location = 1;
 * @return {?proto.goosecode.v2.app.source.ide.Location}
 */
proto.goosecode.v2.app.source.ide.SelectRangeRequest.prototype.getLocation = function() {
  return /** @type{?proto.goosecode.v2.app.source.ide.Location} */ (
    jspb.Message.getWrapperField(this, proto.goosecode.v2.app.source.ide.Location, 1));
};


/**
 * @param {?proto.goosecode.v2.app.source.ide.Location|undefined} value
 * @return {!proto.goosecode.v2.app.source.ide.SelectRangeRequest} returns this
*/
proto.goosecode.v2.app.source.ide.SelectRangeRequest.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.goosecode.v2.app.source.ide.SelectRangeRequest} returns this
 */
proto.goosecode.v2.app.source.ide.SelectRangeRequest.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.goosecode.v2.app.source.ide.SelectRangeRequest.prototype.hasLocation = function() {
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
proto.goosecode.v2.app.source.ide.DescribeRangeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.goosecode.v2.app.source.ide.DescribeRangeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.goosecode.v2.app.source.ide.DescribeRangeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.DescribeRangeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    location: (f = msg.getLocation()) && proto.goosecode.v2.app.source.ide.Location.toObject(includeInstance, f)
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
 * @return {!proto.goosecode.v2.app.source.ide.DescribeRangeRequest}
 */
proto.goosecode.v2.app.source.ide.DescribeRangeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.goosecode.v2.app.source.ide.DescribeRangeRequest;
  return proto.goosecode.v2.app.source.ide.DescribeRangeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.goosecode.v2.app.source.ide.DescribeRangeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.goosecode.v2.app.source.ide.DescribeRangeRequest}
 */
proto.goosecode.v2.app.source.ide.DescribeRangeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.goosecode.v2.app.source.ide.Location;
      reader.readMessage(value,proto.goosecode.v2.app.source.ide.Location.deserializeBinaryFromReader);
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
proto.goosecode.v2.app.source.ide.DescribeRangeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.goosecode.v2.app.source.ide.DescribeRangeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.goosecode.v2.app.source.ide.DescribeRangeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.DescribeRangeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.goosecode.v2.app.source.ide.Location.serializeBinaryToWriter
    );
  }
};


/**
 * optional Location location = 1;
 * @return {?proto.goosecode.v2.app.source.ide.Location}
 */
proto.goosecode.v2.app.source.ide.DescribeRangeRequest.prototype.getLocation = function() {
  return /** @type{?proto.goosecode.v2.app.source.ide.Location} */ (
    jspb.Message.getWrapperField(this, proto.goosecode.v2.app.source.ide.Location, 1));
};


/**
 * @param {?proto.goosecode.v2.app.source.ide.Location|undefined} value
 * @return {!proto.goosecode.v2.app.source.ide.DescribeRangeRequest} returns this
*/
proto.goosecode.v2.app.source.ide.DescribeRangeRequest.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.goosecode.v2.app.source.ide.DescribeRangeRequest} returns this
 */
proto.goosecode.v2.app.source.ide.DescribeRangeRequest.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.goosecode.v2.app.source.ide.DescribeRangeRequest.prototype.hasLocation = function() {
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
proto.goosecode.v2.app.source.ide.GoToDefinitionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.goosecode.v2.app.source.ide.GoToDefinitionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.goosecode.v2.app.source.ide.GoToDefinitionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.GoToDefinitionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    location: (f = msg.getLocation()) && proto.goosecode.v2.app.source.ide.Location.toObject(includeInstance, f),
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
 * @return {!proto.goosecode.v2.app.source.ide.GoToDefinitionRequest}
 */
proto.goosecode.v2.app.source.ide.GoToDefinitionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.goosecode.v2.app.source.ide.GoToDefinitionRequest;
  return proto.goosecode.v2.app.source.ide.GoToDefinitionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.goosecode.v2.app.source.ide.GoToDefinitionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.goosecode.v2.app.source.ide.GoToDefinitionRequest}
 */
proto.goosecode.v2.app.source.ide.GoToDefinitionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.goosecode.v2.app.source.ide.Location;
      reader.readMessage(value,proto.goosecode.v2.app.source.ide.Location.deserializeBinaryFromReader);
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
proto.goosecode.v2.app.source.ide.GoToDefinitionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.goosecode.v2.app.source.ide.GoToDefinitionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.goosecode.v2.app.source.ide.GoToDefinitionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.GoToDefinitionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.goosecode.v2.app.source.ide.Location.serializeBinaryToWriter
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
 * @return {?proto.goosecode.v2.app.source.ide.Location}
 */
proto.goosecode.v2.app.source.ide.GoToDefinitionRequest.prototype.getLocation = function() {
  return /** @type{?proto.goosecode.v2.app.source.ide.Location} */ (
    jspb.Message.getWrapperField(this, proto.goosecode.v2.app.source.ide.Location, 1));
};


/**
 * @param {?proto.goosecode.v2.app.source.ide.Location|undefined} value
 * @return {!proto.goosecode.v2.app.source.ide.GoToDefinitionRequest} returns this
*/
proto.goosecode.v2.app.source.ide.GoToDefinitionRequest.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.goosecode.v2.app.source.ide.GoToDefinitionRequest} returns this
 */
proto.goosecode.v2.app.source.ide.GoToDefinitionRequest.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.goosecode.v2.app.source.ide.GoToDefinitionRequest.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool select = 2;
 * @return {boolean}
 */
proto.goosecode.v2.app.source.ide.GoToDefinitionRequest.prototype.getSelect = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.goosecode.v2.app.source.ide.GoToDefinitionRequest} returns this
 */
proto.goosecode.v2.app.source.ide.GoToDefinitionRequest.prototype.setSelect = function(value) {
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
proto.goosecode.v2.app.source.ide.RenameRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.goosecode.v2.app.source.ide.RenameRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.goosecode.v2.app.source.ide.RenameRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.RenameRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    location: (f = msg.getLocation()) && proto.goosecode.v2.app.source.ide.Location.toObject(includeInstance, f),
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
 * @return {!proto.goosecode.v2.app.source.ide.RenameRequest}
 */
proto.goosecode.v2.app.source.ide.RenameRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.goosecode.v2.app.source.ide.RenameRequest;
  return proto.goosecode.v2.app.source.ide.RenameRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.goosecode.v2.app.source.ide.RenameRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.goosecode.v2.app.source.ide.RenameRequest}
 */
proto.goosecode.v2.app.source.ide.RenameRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.goosecode.v2.app.source.ide.Location;
      reader.readMessage(value,proto.goosecode.v2.app.source.ide.Location.deserializeBinaryFromReader);
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
proto.goosecode.v2.app.source.ide.RenameRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.goosecode.v2.app.source.ide.RenameRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.goosecode.v2.app.source.ide.RenameRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.RenameRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.goosecode.v2.app.source.ide.Location.serializeBinaryToWriter
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
 * @return {?proto.goosecode.v2.app.source.ide.Location}
 */
proto.goosecode.v2.app.source.ide.RenameRequest.prototype.getLocation = function() {
  return /** @type{?proto.goosecode.v2.app.source.ide.Location} */ (
    jspb.Message.getWrapperField(this, proto.goosecode.v2.app.source.ide.Location, 1));
};


/**
 * @param {?proto.goosecode.v2.app.source.ide.Location|undefined} value
 * @return {!proto.goosecode.v2.app.source.ide.RenameRequest} returns this
*/
proto.goosecode.v2.app.source.ide.RenameRequest.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.goosecode.v2.app.source.ide.RenameRequest} returns this
 */
proto.goosecode.v2.app.source.ide.RenameRequest.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.goosecode.v2.app.source.ide.RenameRequest.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string new_name = 2;
 * @return {string}
 */
proto.goosecode.v2.app.source.ide.RenameRequest.prototype.getNewName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.goosecode.v2.app.source.ide.RenameRequest} returns this
 */
proto.goosecode.v2.app.source.ide.RenameRequest.prototype.setNewName = function(value) {
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
proto.goosecode.v2.app.source.ide.FindUsesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.goosecode.v2.app.source.ide.FindUsesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.goosecode.v2.app.source.ide.FindUsesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.FindUsesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    location: (f = msg.getLocation()) && proto.goosecode.v2.app.source.ide.Location.toObject(includeInstance, f)
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
 * @return {!proto.goosecode.v2.app.source.ide.FindUsesRequest}
 */
proto.goosecode.v2.app.source.ide.FindUsesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.goosecode.v2.app.source.ide.FindUsesRequest;
  return proto.goosecode.v2.app.source.ide.FindUsesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.goosecode.v2.app.source.ide.FindUsesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.goosecode.v2.app.source.ide.FindUsesRequest}
 */
proto.goosecode.v2.app.source.ide.FindUsesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.goosecode.v2.app.source.ide.Location;
      reader.readMessage(value,proto.goosecode.v2.app.source.ide.Location.deserializeBinaryFromReader);
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
proto.goosecode.v2.app.source.ide.FindUsesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.goosecode.v2.app.source.ide.FindUsesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.goosecode.v2.app.source.ide.FindUsesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.FindUsesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.goosecode.v2.app.source.ide.Location.serializeBinaryToWriter
    );
  }
};


/**
 * optional Location location = 1;
 * @return {?proto.goosecode.v2.app.source.ide.Location}
 */
proto.goosecode.v2.app.source.ide.FindUsesRequest.prototype.getLocation = function() {
  return /** @type{?proto.goosecode.v2.app.source.ide.Location} */ (
    jspb.Message.getWrapperField(this, proto.goosecode.v2.app.source.ide.Location, 1));
};


/**
 * @param {?proto.goosecode.v2.app.source.ide.Location|undefined} value
 * @return {!proto.goosecode.v2.app.source.ide.FindUsesRequest} returns this
*/
proto.goosecode.v2.app.source.ide.FindUsesRequest.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.goosecode.v2.app.source.ide.FindUsesRequest} returns this
 */
proto.goosecode.v2.app.source.ide.FindUsesRequest.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.goosecode.v2.app.source.ide.FindUsesRequest.prototype.hasLocation = function() {
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
proto.goosecode.v2.app.source.ide.RequestMessage.oneofGroups_ = [[4,5,6,7,8,9,10,11,12]];

/**
 * @enum {number}
 */
proto.goosecode.v2.app.source.ide.RequestMessage.DataCase = {
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
 * @return {proto.goosecode.v2.app.source.ide.RequestMessage.DataCase}
 */
proto.goosecode.v2.app.source.ide.RequestMessage.prototype.getDataCase = function() {
  return /** @type {proto.goosecode.v2.app.source.ide.RequestMessage.DataCase} */(jspb.Message.computeOneofCase(this, proto.goosecode.v2.app.source.ide.RequestMessage.oneofGroups_[0]));
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
proto.goosecode.v2.app.source.ide.RequestMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.goosecode.v2.app.source.ide.RequestMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.goosecode.v2.app.source.ide.RequestMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.RequestMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    repositorySnapshotFingerprint: jspb.Message.getFieldWithDefault(msg, 2, ""),
    listFilesRequest: (f = msg.getListFilesRequest()) && proto.goosecode.v2.app.source.ide.ListFilesRequest.toObject(includeInstance, f),
    getFilesRequest: (f = msg.getGetFilesRequest()) && proto.goosecode.v2.app.source.ide.GetFilesRequest.toObject(includeInstance, f),
    openFilesRequest: (f = msg.getOpenFilesRequest()) && proto.goosecode.v2.app.source.ide.OpenFilesRequest.toObject(includeInstance, f),
    findStringRequest: (f = msg.getFindStringRequest()) && proto.goosecode.v2.app.source.ide.FindStringRequest.toObject(includeInstance, f),
    selectRangeRequest: (f = msg.getSelectRangeRequest()) && proto.goosecode.v2.app.source.ide.SelectRangeRequest.toObject(includeInstance, f),
    describeRangeRequest: (f = msg.getDescribeRangeRequest()) && proto.goosecode.v2.app.source.ide.DescribeRangeRequest.toObject(includeInstance, f),
    goToDefinitionRequest: (f = msg.getGoToDefinitionRequest()) && proto.goosecode.v2.app.source.ide.GoToDefinitionRequest.toObject(includeInstance, f),
    renameRequest: (f = msg.getRenameRequest()) && proto.goosecode.v2.app.source.ide.RenameRequest.toObject(includeInstance, f),
    findUsesRequest: (f = msg.getFindUsesRequest()) && proto.goosecode.v2.app.source.ide.FindUsesRequest.toObject(includeInstance, f)
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
 * @return {!proto.goosecode.v2.app.source.ide.RequestMessage}
 */
proto.goosecode.v2.app.source.ide.RequestMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.goosecode.v2.app.source.ide.RequestMessage;
  return proto.goosecode.v2.app.source.ide.RequestMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.goosecode.v2.app.source.ide.RequestMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.goosecode.v2.app.source.ide.RequestMessage}
 */
proto.goosecode.v2.app.source.ide.RequestMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.goosecode.v2.app.source.ide.RequestType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRepositorySnapshotFingerprint(value);
      break;
    case 4:
      var value = new proto.goosecode.v2.app.source.ide.ListFilesRequest;
      reader.readMessage(value,proto.goosecode.v2.app.source.ide.ListFilesRequest.deserializeBinaryFromReader);
      msg.setListFilesRequest(value);
      break;
    case 5:
      var value = new proto.goosecode.v2.app.source.ide.GetFilesRequest;
      reader.readMessage(value,proto.goosecode.v2.app.source.ide.GetFilesRequest.deserializeBinaryFromReader);
      msg.setGetFilesRequest(value);
      break;
    case 6:
      var value = new proto.goosecode.v2.app.source.ide.OpenFilesRequest;
      reader.readMessage(value,proto.goosecode.v2.app.source.ide.OpenFilesRequest.deserializeBinaryFromReader);
      msg.setOpenFilesRequest(value);
      break;
    case 7:
      var value = new proto.goosecode.v2.app.source.ide.FindStringRequest;
      reader.readMessage(value,proto.goosecode.v2.app.source.ide.FindStringRequest.deserializeBinaryFromReader);
      msg.setFindStringRequest(value);
      break;
    case 8:
      var value = new proto.goosecode.v2.app.source.ide.SelectRangeRequest;
      reader.readMessage(value,proto.goosecode.v2.app.source.ide.SelectRangeRequest.deserializeBinaryFromReader);
      msg.setSelectRangeRequest(value);
      break;
    case 9:
      var value = new proto.goosecode.v2.app.source.ide.DescribeRangeRequest;
      reader.readMessage(value,proto.goosecode.v2.app.source.ide.DescribeRangeRequest.deserializeBinaryFromReader);
      msg.setDescribeRangeRequest(value);
      break;
    case 10:
      var value = new proto.goosecode.v2.app.source.ide.GoToDefinitionRequest;
      reader.readMessage(value,proto.goosecode.v2.app.source.ide.GoToDefinitionRequest.deserializeBinaryFromReader);
      msg.setGoToDefinitionRequest(value);
      break;
    case 11:
      var value = new proto.goosecode.v2.app.source.ide.RenameRequest;
      reader.readMessage(value,proto.goosecode.v2.app.source.ide.RenameRequest.deserializeBinaryFromReader);
      msg.setRenameRequest(value);
      break;
    case 12:
      var value = new proto.goosecode.v2.app.source.ide.FindUsesRequest;
      reader.readMessage(value,proto.goosecode.v2.app.source.ide.FindUsesRequest.deserializeBinaryFromReader);
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
proto.goosecode.v2.app.source.ide.RequestMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.goosecode.v2.app.source.ide.RequestMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.goosecode.v2.app.source.ide.RequestMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.RequestMessage.serializeBinaryToWriter = function(message, writer) {
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
      proto.goosecode.v2.app.source.ide.ListFilesRequest.serializeBinaryToWriter
    );
  }
  f = message.getGetFilesRequest();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.goosecode.v2.app.source.ide.GetFilesRequest.serializeBinaryToWriter
    );
  }
  f = message.getOpenFilesRequest();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.goosecode.v2.app.source.ide.OpenFilesRequest.serializeBinaryToWriter
    );
  }
  f = message.getFindStringRequest();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.goosecode.v2.app.source.ide.FindStringRequest.serializeBinaryToWriter
    );
  }
  f = message.getSelectRangeRequest();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.goosecode.v2.app.source.ide.SelectRangeRequest.serializeBinaryToWriter
    );
  }
  f = message.getDescribeRangeRequest();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.goosecode.v2.app.source.ide.DescribeRangeRequest.serializeBinaryToWriter
    );
  }
  f = message.getGoToDefinitionRequest();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.goosecode.v2.app.source.ide.GoToDefinitionRequest.serializeBinaryToWriter
    );
  }
  f = message.getRenameRequest();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.goosecode.v2.app.source.ide.RenameRequest.serializeBinaryToWriter
    );
  }
  f = message.getFindUsesRequest();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.goosecode.v2.app.source.ide.FindUsesRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional RequestType type = 1;
 * @return {!proto.goosecode.v2.app.source.ide.RequestType}
 */
proto.goosecode.v2.app.source.ide.RequestMessage.prototype.getType = function() {
  return /** @type {!proto.goosecode.v2.app.source.ide.RequestType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.goosecode.v2.app.source.ide.RequestType} value
 * @return {!proto.goosecode.v2.app.source.ide.RequestMessage} returns this
 */
proto.goosecode.v2.app.source.ide.RequestMessage.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string repository_snapshot_fingerprint = 2;
 * @return {string}
 */
proto.goosecode.v2.app.source.ide.RequestMessage.prototype.getRepositorySnapshotFingerprint = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.goosecode.v2.app.source.ide.RequestMessage} returns this
 */
proto.goosecode.v2.app.source.ide.RequestMessage.prototype.setRepositorySnapshotFingerprint = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional ListFilesRequest list_files_request = 4;
 * @return {?proto.goosecode.v2.app.source.ide.ListFilesRequest}
 */
proto.goosecode.v2.app.source.ide.RequestMessage.prototype.getListFilesRequest = function() {
  return /** @type{?proto.goosecode.v2.app.source.ide.ListFilesRequest} */ (
    jspb.Message.getWrapperField(this, proto.goosecode.v2.app.source.ide.ListFilesRequest, 4));
};


/**
 * @param {?proto.goosecode.v2.app.source.ide.ListFilesRequest|undefined} value
 * @return {!proto.goosecode.v2.app.source.ide.RequestMessage} returns this
*/
proto.goosecode.v2.app.source.ide.RequestMessage.prototype.setListFilesRequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.goosecode.v2.app.source.ide.RequestMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.goosecode.v2.app.source.ide.RequestMessage} returns this
 */
proto.goosecode.v2.app.source.ide.RequestMessage.prototype.clearListFilesRequest = function() {
  return this.setListFilesRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.goosecode.v2.app.source.ide.RequestMessage.prototype.hasListFilesRequest = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional GetFilesRequest get_files_request = 5;
 * @return {?proto.goosecode.v2.app.source.ide.GetFilesRequest}
 */
proto.goosecode.v2.app.source.ide.RequestMessage.prototype.getGetFilesRequest = function() {
  return /** @type{?proto.goosecode.v2.app.source.ide.GetFilesRequest} */ (
    jspb.Message.getWrapperField(this, proto.goosecode.v2.app.source.ide.GetFilesRequest, 5));
};


/**
 * @param {?proto.goosecode.v2.app.source.ide.GetFilesRequest|undefined} value
 * @return {!proto.goosecode.v2.app.source.ide.RequestMessage} returns this
*/
proto.goosecode.v2.app.source.ide.RequestMessage.prototype.setGetFilesRequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.goosecode.v2.app.source.ide.RequestMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.goosecode.v2.app.source.ide.RequestMessage} returns this
 */
proto.goosecode.v2.app.source.ide.RequestMessage.prototype.clearGetFilesRequest = function() {
  return this.setGetFilesRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.goosecode.v2.app.source.ide.RequestMessage.prototype.hasGetFilesRequest = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional OpenFilesRequest open_files_request = 6;
 * @return {?proto.goosecode.v2.app.source.ide.OpenFilesRequest}
 */
proto.goosecode.v2.app.source.ide.RequestMessage.prototype.getOpenFilesRequest = function() {
  return /** @type{?proto.goosecode.v2.app.source.ide.OpenFilesRequest} */ (
    jspb.Message.getWrapperField(this, proto.goosecode.v2.app.source.ide.OpenFilesRequest, 6));
};


/**
 * @param {?proto.goosecode.v2.app.source.ide.OpenFilesRequest|undefined} value
 * @return {!proto.goosecode.v2.app.source.ide.RequestMessage} returns this
*/
proto.goosecode.v2.app.source.ide.RequestMessage.prototype.setOpenFilesRequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.goosecode.v2.app.source.ide.RequestMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.goosecode.v2.app.source.ide.RequestMessage} returns this
 */
proto.goosecode.v2.app.source.ide.RequestMessage.prototype.clearOpenFilesRequest = function() {
  return this.setOpenFilesRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.goosecode.v2.app.source.ide.RequestMessage.prototype.hasOpenFilesRequest = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional FindStringRequest find_string_request = 7;
 * @return {?proto.goosecode.v2.app.source.ide.FindStringRequest}
 */
proto.goosecode.v2.app.source.ide.RequestMessage.prototype.getFindStringRequest = function() {
  return /** @type{?proto.goosecode.v2.app.source.ide.FindStringRequest} */ (
    jspb.Message.getWrapperField(this, proto.goosecode.v2.app.source.ide.FindStringRequest, 7));
};


/**
 * @param {?proto.goosecode.v2.app.source.ide.FindStringRequest|undefined} value
 * @return {!proto.goosecode.v2.app.source.ide.RequestMessage} returns this
*/
proto.goosecode.v2.app.source.ide.RequestMessage.prototype.setFindStringRequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.goosecode.v2.app.source.ide.RequestMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.goosecode.v2.app.source.ide.RequestMessage} returns this
 */
proto.goosecode.v2.app.source.ide.RequestMessage.prototype.clearFindStringRequest = function() {
  return this.setFindStringRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.goosecode.v2.app.source.ide.RequestMessage.prototype.hasFindStringRequest = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional SelectRangeRequest select_range_request = 8;
 * @return {?proto.goosecode.v2.app.source.ide.SelectRangeRequest}
 */
proto.goosecode.v2.app.source.ide.RequestMessage.prototype.getSelectRangeRequest = function() {
  return /** @type{?proto.goosecode.v2.app.source.ide.SelectRangeRequest} */ (
    jspb.Message.getWrapperField(this, proto.goosecode.v2.app.source.ide.SelectRangeRequest, 8));
};


/**
 * @param {?proto.goosecode.v2.app.source.ide.SelectRangeRequest|undefined} value
 * @return {!proto.goosecode.v2.app.source.ide.RequestMessage} returns this
*/
proto.goosecode.v2.app.source.ide.RequestMessage.prototype.setSelectRangeRequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.goosecode.v2.app.source.ide.RequestMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.goosecode.v2.app.source.ide.RequestMessage} returns this
 */
proto.goosecode.v2.app.source.ide.RequestMessage.prototype.clearSelectRangeRequest = function() {
  return this.setSelectRangeRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.goosecode.v2.app.source.ide.RequestMessage.prototype.hasSelectRangeRequest = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional DescribeRangeRequest describe_range_request = 9;
 * @return {?proto.goosecode.v2.app.source.ide.DescribeRangeRequest}
 */
proto.goosecode.v2.app.source.ide.RequestMessage.prototype.getDescribeRangeRequest = function() {
  return /** @type{?proto.goosecode.v2.app.source.ide.DescribeRangeRequest} */ (
    jspb.Message.getWrapperField(this, proto.goosecode.v2.app.source.ide.DescribeRangeRequest, 9));
};


/**
 * @param {?proto.goosecode.v2.app.source.ide.DescribeRangeRequest|undefined} value
 * @return {!proto.goosecode.v2.app.source.ide.RequestMessage} returns this
*/
proto.goosecode.v2.app.source.ide.RequestMessage.prototype.setDescribeRangeRequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.goosecode.v2.app.source.ide.RequestMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.goosecode.v2.app.source.ide.RequestMessage} returns this
 */
proto.goosecode.v2.app.source.ide.RequestMessage.prototype.clearDescribeRangeRequest = function() {
  return this.setDescribeRangeRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.goosecode.v2.app.source.ide.RequestMessage.prototype.hasDescribeRangeRequest = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional GoToDefinitionRequest go_to_definition_request = 10;
 * @return {?proto.goosecode.v2.app.source.ide.GoToDefinitionRequest}
 */
proto.goosecode.v2.app.source.ide.RequestMessage.prototype.getGoToDefinitionRequest = function() {
  return /** @type{?proto.goosecode.v2.app.source.ide.GoToDefinitionRequest} */ (
    jspb.Message.getWrapperField(this, proto.goosecode.v2.app.source.ide.GoToDefinitionRequest, 10));
};


/**
 * @param {?proto.goosecode.v2.app.source.ide.GoToDefinitionRequest|undefined} value
 * @return {!proto.goosecode.v2.app.source.ide.RequestMessage} returns this
*/
proto.goosecode.v2.app.source.ide.RequestMessage.prototype.setGoToDefinitionRequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.goosecode.v2.app.source.ide.RequestMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.goosecode.v2.app.source.ide.RequestMessage} returns this
 */
proto.goosecode.v2.app.source.ide.RequestMessage.prototype.clearGoToDefinitionRequest = function() {
  return this.setGoToDefinitionRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.goosecode.v2.app.source.ide.RequestMessage.prototype.hasGoToDefinitionRequest = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional RenameRequest rename_request = 11;
 * @return {?proto.goosecode.v2.app.source.ide.RenameRequest}
 */
proto.goosecode.v2.app.source.ide.RequestMessage.prototype.getRenameRequest = function() {
  return /** @type{?proto.goosecode.v2.app.source.ide.RenameRequest} */ (
    jspb.Message.getWrapperField(this, proto.goosecode.v2.app.source.ide.RenameRequest, 11));
};


/**
 * @param {?proto.goosecode.v2.app.source.ide.RenameRequest|undefined} value
 * @return {!proto.goosecode.v2.app.source.ide.RequestMessage} returns this
*/
proto.goosecode.v2.app.source.ide.RequestMessage.prototype.setRenameRequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.goosecode.v2.app.source.ide.RequestMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.goosecode.v2.app.source.ide.RequestMessage} returns this
 */
proto.goosecode.v2.app.source.ide.RequestMessage.prototype.clearRenameRequest = function() {
  return this.setRenameRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.goosecode.v2.app.source.ide.RequestMessage.prototype.hasRenameRequest = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional FindUsesRequest find_uses_request = 12;
 * @return {?proto.goosecode.v2.app.source.ide.FindUsesRequest}
 */
proto.goosecode.v2.app.source.ide.RequestMessage.prototype.getFindUsesRequest = function() {
  return /** @type{?proto.goosecode.v2.app.source.ide.FindUsesRequest} */ (
    jspb.Message.getWrapperField(this, proto.goosecode.v2.app.source.ide.FindUsesRequest, 12));
};


/**
 * @param {?proto.goosecode.v2.app.source.ide.FindUsesRequest|undefined} value
 * @return {!proto.goosecode.v2.app.source.ide.RequestMessage} returns this
*/
proto.goosecode.v2.app.source.ide.RequestMessage.prototype.setFindUsesRequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.goosecode.v2.app.source.ide.RequestMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.goosecode.v2.app.source.ide.RequestMessage} returns this
 */
proto.goosecode.v2.app.source.ide.RequestMessage.prototype.clearFindUsesRequest = function() {
  return this.setFindUsesRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.goosecode.v2.app.source.ide.RequestMessage.prototype.hasFindUsesRequest = function() {
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
proto.goosecode.v2.app.source.ide.RepositoryDetailsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.goosecode.v2.app.source.ide.RepositoryDetailsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.goosecode.v2.app.source.ide.RepositoryDetailsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.RepositoryDetailsResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.goosecode.v2.app.source.ide.RepositoryDetailsResponse}
 */
proto.goosecode.v2.app.source.ide.RepositoryDetailsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.goosecode.v2.app.source.ide.RepositoryDetailsResponse;
  return proto.goosecode.v2.app.source.ide.RepositoryDetailsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.goosecode.v2.app.source.ide.RepositoryDetailsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.goosecode.v2.app.source.ide.RepositoryDetailsResponse}
 */
proto.goosecode.v2.app.source.ide.RepositoryDetailsResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.goosecode.v2.app.source.ide.RepositoryDetailsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.goosecode.v2.app.source.ide.RepositoryDetailsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.goosecode.v2.app.source.ide.RepositoryDetailsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.RepositoryDetailsResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.goosecode.v2.app.source.ide.RepositoryDetailsResponse.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.goosecode.v2.app.source.ide.RepositoryDetailsResponse} returns this
 */
proto.goosecode.v2.app.source.ide.RepositoryDetailsResponse.prototype.setOwner = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string repository = 2;
 * @return {string}
 */
proto.goosecode.v2.app.source.ide.RepositoryDetailsResponse.prototype.getRepository = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.goosecode.v2.app.source.ide.RepositoryDetailsResponse} returns this
 */
proto.goosecode.v2.app.source.ide.RepositoryDetailsResponse.prototype.setRepository = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string branch = 3;
 * @return {string}
 */
proto.goosecode.v2.app.source.ide.RepositoryDetailsResponse.prototype.getBranch = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.goosecode.v2.app.source.ide.RepositoryDetailsResponse} returns this
 */
proto.goosecode.v2.app.source.ide.RepositoryDetailsResponse.prototype.setBranch = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string commit = 4;
 * @return {string}
 */
proto.goosecode.v2.app.source.ide.RepositoryDetailsResponse.prototype.getCommit = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.goosecode.v2.app.source.ide.RepositoryDetailsResponse} returns this
 */
proto.goosecode.v2.app.source.ide.RepositoryDetailsResponse.prototype.setCommit = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.goosecode.v2.app.source.ide.ListFilesResponse.repeatedFields_ = [1];



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
proto.goosecode.v2.app.source.ide.ListFilesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.goosecode.v2.app.source.ide.ListFilesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.goosecode.v2.app.source.ide.ListFilesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.ListFilesResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.goosecode.v2.app.source.ide.ListFilesResponse}
 */
proto.goosecode.v2.app.source.ide.ListFilesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.goosecode.v2.app.source.ide.ListFilesResponse;
  return proto.goosecode.v2.app.source.ide.ListFilesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.goosecode.v2.app.source.ide.ListFilesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.goosecode.v2.app.source.ide.ListFilesResponse}
 */
proto.goosecode.v2.app.source.ide.ListFilesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.goosecode.v2.app.source.ide.ListFilesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.goosecode.v2.app.source.ide.ListFilesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.goosecode.v2.app.source.ide.ListFilesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.ListFilesResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.goosecode.v2.app.source.ide.ListFilesResponse.prototype.getFilePathsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.goosecode.v2.app.source.ide.ListFilesResponse} returns this
 */
proto.goosecode.v2.app.source.ide.ListFilesResponse.prototype.setFilePathsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.goosecode.v2.app.source.ide.ListFilesResponse} returns this
 */
proto.goosecode.v2.app.source.ide.ListFilesResponse.prototype.addFilePaths = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.goosecode.v2.app.source.ide.ListFilesResponse} returns this
 */
proto.goosecode.v2.app.source.ide.ListFilesResponse.prototype.clearFilePathsList = function() {
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
proto.goosecode.v2.app.source.ide.OpenFilesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.goosecode.v2.app.source.ide.OpenFilesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.goosecode.v2.app.source.ide.OpenFilesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.OpenFilesResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.goosecode.v2.app.source.ide.OpenFilesResponse}
 */
proto.goosecode.v2.app.source.ide.OpenFilesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.goosecode.v2.app.source.ide.OpenFilesResponse;
  return proto.goosecode.v2.app.source.ide.OpenFilesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.goosecode.v2.app.source.ide.OpenFilesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.goosecode.v2.app.source.ide.OpenFilesResponse}
 */
proto.goosecode.v2.app.source.ide.OpenFilesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.goosecode.v2.app.source.ide.OpenFilesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.goosecode.v2.app.source.ide.OpenFilesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.goosecode.v2.app.source.ide.OpenFilesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.OpenFilesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.goosecode.v2.app.source.ide.GetFilesResponse.repeatedFields_ = [1];



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
proto.goosecode.v2.app.source.ide.GetFilesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.goosecode.v2.app.source.ide.GetFilesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.goosecode.v2.app.source.ide.GetFilesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.GetFilesResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.goosecode.v2.app.source.ide.GetFilesResponse}
 */
proto.goosecode.v2.app.source.ide.GetFilesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.goosecode.v2.app.source.ide.GetFilesResponse;
  return proto.goosecode.v2.app.source.ide.GetFilesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.goosecode.v2.app.source.ide.GetFilesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.goosecode.v2.app.source.ide.GetFilesResponse}
 */
proto.goosecode.v2.app.source.ide.GetFilesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.goosecode.v2.app.source.ide.GetFilesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.goosecode.v2.app.source.ide.GetFilesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.goosecode.v2.app.source.ide.GetFilesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.GetFilesResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.goosecode.v2.app.source.ide.GetFilesResponse.prototype.getFileContentsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.goosecode.v2.app.source.ide.GetFilesResponse} returns this
 */
proto.goosecode.v2.app.source.ide.GetFilesResponse.prototype.setFileContentsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.goosecode.v2.app.source.ide.GetFilesResponse} returns this
 */
proto.goosecode.v2.app.source.ide.GetFilesResponse.prototype.addFileContents = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.goosecode.v2.app.source.ide.GetFilesResponse} returns this
 */
proto.goosecode.v2.app.source.ide.GetFilesResponse.prototype.clearFileContentsList = function() {
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
proto.goosecode.v2.app.source.ide.Position.prototype.toObject = function(opt_includeInstance) {
  return proto.goosecode.v2.app.source.ide.Position.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.goosecode.v2.app.source.ide.Position} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.Position.toObject = function(includeInstance, msg) {
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
 * @return {!proto.goosecode.v2.app.source.ide.Position}
 */
proto.goosecode.v2.app.source.ide.Position.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.goosecode.v2.app.source.ide.Position;
  return proto.goosecode.v2.app.source.ide.Position.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.goosecode.v2.app.source.ide.Position} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.goosecode.v2.app.source.ide.Position}
 */
proto.goosecode.v2.app.source.ide.Position.deserializeBinaryFromReader = function(msg, reader) {
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
proto.goosecode.v2.app.source.ide.Position.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.goosecode.v2.app.source.ide.Position.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.goosecode.v2.app.source.ide.Position} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.Position.serializeBinaryToWriter = function(message, writer) {
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
proto.goosecode.v2.app.source.ide.Position.prototype.getLine = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.goosecode.v2.app.source.ide.Position} returns this
 */
proto.goosecode.v2.app.source.ide.Position.prototype.setLine = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 character = 2;
 * @return {number}
 */
proto.goosecode.v2.app.source.ide.Position.prototype.getCharacter = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.goosecode.v2.app.source.ide.Position} returns this
 */
proto.goosecode.v2.app.source.ide.Position.prototype.setCharacter = function(value) {
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
proto.goosecode.v2.app.source.ide.Range.prototype.toObject = function(opt_includeInstance) {
  return proto.goosecode.v2.app.source.ide.Range.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.goosecode.v2.app.source.ide.Range} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.Range.toObject = function(includeInstance, msg) {
  var f, obj = {
    start: (f = msg.getStart()) && proto.goosecode.v2.app.source.ide.Position.toObject(includeInstance, f),
    end: (f = msg.getEnd()) && proto.goosecode.v2.app.source.ide.Position.toObject(includeInstance, f)
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
 * @return {!proto.goosecode.v2.app.source.ide.Range}
 */
proto.goosecode.v2.app.source.ide.Range.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.goosecode.v2.app.source.ide.Range;
  return proto.goosecode.v2.app.source.ide.Range.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.goosecode.v2.app.source.ide.Range} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.goosecode.v2.app.source.ide.Range}
 */
proto.goosecode.v2.app.source.ide.Range.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.goosecode.v2.app.source.ide.Position;
      reader.readMessage(value,proto.goosecode.v2.app.source.ide.Position.deserializeBinaryFromReader);
      msg.setStart(value);
      break;
    case 2:
      var value = new proto.goosecode.v2.app.source.ide.Position;
      reader.readMessage(value,proto.goosecode.v2.app.source.ide.Position.deserializeBinaryFromReader);
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
proto.goosecode.v2.app.source.ide.Range.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.goosecode.v2.app.source.ide.Range.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.goosecode.v2.app.source.ide.Range} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.Range.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStart();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.goosecode.v2.app.source.ide.Position.serializeBinaryToWriter
    );
  }
  f = message.getEnd();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.goosecode.v2.app.source.ide.Position.serializeBinaryToWriter
    );
  }
};


/**
 * optional Position start = 1;
 * @return {?proto.goosecode.v2.app.source.ide.Position}
 */
proto.goosecode.v2.app.source.ide.Range.prototype.getStart = function() {
  return /** @type{?proto.goosecode.v2.app.source.ide.Position} */ (
    jspb.Message.getWrapperField(this, proto.goosecode.v2.app.source.ide.Position, 1));
};


/**
 * @param {?proto.goosecode.v2.app.source.ide.Position|undefined} value
 * @return {!proto.goosecode.v2.app.source.ide.Range} returns this
*/
proto.goosecode.v2.app.source.ide.Range.prototype.setStart = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.goosecode.v2.app.source.ide.Range} returns this
 */
proto.goosecode.v2.app.source.ide.Range.prototype.clearStart = function() {
  return this.setStart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.goosecode.v2.app.source.ide.Range.prototype.hasStart = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Position end = 2;
 * @return {?proto.goosecode.v2.app.source.ide.Position}
 */
proto.goosecode.v2.app.source.ide.Range.prototype.getEnd = function() {
  return /** @type{?proto.goosecode.v2.app.source.ide.Position} */ (
    jspb.Message.getWrapperField(this, proto.goosecode.v2.app.source.ide.Position, 2));
};


/**
 * @param {?proto.goosecode.v2.app.source.ide.Position|undefined} value
 * @return {!proto.goosecode.v2.app.source.ide.Range} returns this
*/
proto.goosecode.v2.app.source.ide.Range.prototype.setEnd = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.goosecode.v2.app.source.ide.Range} returns this
 */
proto.goosecode.v2.app.source.ide.Range.prototype.clearEnd = function() {
  return this.setEnd(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.goosecode.v2.app.source.ide.Range.prototype.hasEnd = function() {
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
proto.goosecode.v2.app.source.ide.Location.prototype.toObject = function(opt_includeInstance) {
  return proto.goosecode.v2.app.source.ide.Location.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.goosecode.v2.app.source.ide.Location} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.Location.toObject = function(includeInstance, msg) {
  var f, obj = {
    path: jspb.Message.getFieldWithDefault(msg, 1, ""),
    range: (f = msg.getRange()) && proto.goosecode.v2.app.source.ide.Range.toObject(includeInstance, f)
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
 * @return {!proto.goosecode.v2.app.source.ide.Location}
 */
proto.goosecode.v2.app.source.ide.Location.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.goosecode.v2.app.source.ide.Location;
  return proto.goosecode.v2.app.source.ide.Location.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.goosecode.v2.app.source.ide.Location} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.goosecode.v2.app.source.ide.Location}
 */
proto.goosecode.v2.app.source.ide.Location.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.goosecode.v2.app.source.ide.Range;
      reader.readMessage(value,proto.goosecode.v2.app.source.ide.Range.deserializeBinaryFromReader);
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
proto.goosecode.v2.app.source.ide.Location.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.goosecode.v2.app.source.ide.Location.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.goosecode.v2.app.source.ide.Location} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.Location.serializeBinaryToWriter = function(message, writer) {
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
      proto.goosecode.v2.app.source.ide.Range.serializeBinaryToWriter
    );
  }
};


/**
 * optional string path = 1;
 * @return {string}
 */
proto.goosecode.v2.app.source.ide.Location.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.goosecode.v2.app.source.ide.Location} returns this
 */
proto.goosecode.v2.app.source.ide.Location.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Range range = 2;
 * @return {?proto.goosecode.v2.app.source.ide.Range}
 */
proto.goosecode.v2.app.source.ide.Location.prototype.getRange = function() {
  return /** @type{?proto.goosecode.v2.app.source.ide.Range} */ (
    jspb.Message.getWrapperField(this, proto.goosecode.v2.app.source.ide.Range, 2));
};


/**
 * @param {?proto.goosecode.v2.app.source.ide.Range|undefined} value
 * @return {!proto.goosecode.v2.app.source.ide.Location} returns this
*/
proto.goosecode.v2.app.source.ide.Location.prototype.setRange = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.goosecode.v2.app.source.ide.Location} returns this
 */
proto.goosecode.v2.app.source.ide.Location.prototype.clearRange = function() {
  return this.setRange(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.goosecode.v2.app.source.ide.Location.prototype.hasRange = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.goosecode.v2.app.source.ide.DocumentSymbol.repeatedFields_ = [6];



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
proto.goosecode.v2.app.source.ide.DocumentSymbol.prototype.toObject = function(opt_includeInstance) {
  return proto.goosecode.v2.app.source.ide.DocumentSymbol.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.goosecode.v2.app.source.ide.DocumentSymbol} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.DocumentSymbol.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    detail: jspb.Message.getFieldWithDefault(msg, 2, ""),
    kind: jspb.Message.getFieldWithDefault(msg, 3, 0),
    range: (f = msg.getRange()) && proto.goosecode.v2.app.source.ide.Range.toObject(includeInstance, f),
    selectionrange: (f = msg.getSelectionrange()) && proto.goosecode.v2.app.source.ide.Range.toObject(includeInstance, f),
    childrenList: jspb.Message.toObjectList(msg.getChildrenList(),
    proto.goosecode.v2.app.source.ide.DocumentSymbol.toObject, includeInstance)
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
 * @return {!proto.goosecode.v2.app.source.ide.DocumentSymbol}
 */
proto.goosecode.v2.app.source.ide.DocumentSymbol.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.goosecode.v2.app.source.ide.DocumentSymbol;
  return proto.goosecode.v2.app.source.ide.DocumentSymbol.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.goosecode.v2.app.source.ide.DocumentSymbol} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.goosecode.v2.app.source.ide.DocumentSymbol}
 */
proto.goosecode.v2.app.source.ide.DocumentSymbol.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.goosecode.v2.app.source.ide.SymbolKind} */ (reader.readEnum());
      msg.setKind(value);
      break;
    case 4:
      var value = new proto.goosecode.v2.app.source.ide.Range;
      reader.readMessage(value,proto.goosecode.v2.app.source.ide.Range.deserializeBinaryFromReader);
      msg.setRange(value);
      break;
    case 5:
      var value = new proto.goosecode.v2.app.source.ide.Range;
      reader.readMessage(value,proto.goosecode.v2.app.source.ide.Range.deserializeBinaryFromReader);
      msg.setSelectionrange(value);
      break;
    case 6:
      var value = new proto.goosecode.v2.app.source.ide.DocumentSymbol;
      reader.readMessage(value,proto.goosecode.v2.app.source.ide.DocumentSymbol.deserializeBinaryFromReader);
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
proto.goosecode.v2.app.source.ide.DocumentSymbol.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.goosecode.v2.app.source.ide.DocumentSymbol.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.goosecode.v2.app.source.ide.DocumentSymbol} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.DocumentSymbol.serializeBinaryToWriter = function(message, writer) {
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
      proto.goosecode.v2.app.source.ide.Range.serializeBinaryToWriter
    );
  }
  f = message.getSelectionrange();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.goosecode.v2.app.source.ide.Range.serializeBinaryToWriter
    );
  }
  f = message.getChildrenList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.goosecode.v2.app.source.ide.DocumentSymbol.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.goosecode.v2.app.source.ide.DocumentSymbol.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.goosecode.v2.app.source.ide.DocumentSymbol} returns this
 */
proto.goosecode.v2.app.source.ide.DocumentSymbol.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string detail = 2;
 * @return {string}
 */
proto.goosecode.v2.app.source.ide.DocumentSymbol.prototype.getDetail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.goosecode.v2.app.source.ide.DocumentSymbol} returns this
 */
proto.goosecode.v2.app.source.ide.DocumentSymbol.prototype.setDetail = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional SymbolKind kind = 3;
 * @return {!proto.goosecode.v2.app.source.ide.SymbolKind}
 */
proto.goosecode.v2.app.source.ide.DocumentSymbol.prototype.getKind = function() {
  return /** @type {!proto.goosecode.v2.app.source.ide.SymbolKind} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.goosecode.v2.app.source.ide.SymbolKind} value
 * @return {!proto.goosecode.v2.app.source.ide.DocumentSymbol} returns this
 */
proto.goosecode.v2.app.source.ide.DocumentSymbol.prototype.setKind = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional Range range = 4;
 * @return {?proto.goosecode.v2.app.source.ide.Range}
 */
proto.goosecode.v2.app.source.ide.DocumentSymbol.prototype.getRange = function() {
  return /** @type{?proto.goosecode.v2.app.source.ide.Range} */ (
    jspb.Message.getWrapperField(this, proto.goosecode.v2.app.source.ide.Range, 4));
};


/**
 * @param {?proto.goosecode.v2.app.source.ide.Range|undefined} value
 * @return {!proto.goosecode.v2.app.source.ide.DocumentSymbol} returns this
*/
proto.goosecode.v2.app.source.ide.DocumentSymbol.prototype.setRange = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.goosecode.v2.app.source.ide.DocumentSymbol} returns this
 */
proto.goosecode.v2.app.source.ide.DocumentSymbol.prototype.clearRange = function() {
  return this.setRange(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.goosecode.v2.app.source.ide.DocumentSymbol.prototype.hasRange = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Range selectionRange = 5;
 * @return {?proto.goosecode.v2.app.source.ide.Range}
 */
proto.goosecode.v2.app.source.ide.DocumentSymbol.prototype.getSelectionrange = function() {
  return /** @type{?proto.goosecode.v2.app.source.ide.Range} */ (
    jspb.Message.getWrapperField(this, proto.goosecode.v2.app.source.ide.Range, 5));
};


/**
 * @param {?proto.goosecode.v2.app.source.ide.Range|undefined} value
 * @return {!proto.goosecode.v2.app.source.ide.DocumentSymbol} returns this
*/
proto.goosecode.v2.app.source.ide.DocumentSymbol.prototype.setSelectionrange = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.goosecode.v2.app.source.ide.DocumentSymbol} returns this
 */
proto.goosecode.v2.app.source.ide.DocumentSymbol.prototype.clearSelectionrange = function() {
  return this.setSelectionrange(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.goosecode.v2.app.source.ide.DocumentSymbol.prototype.hasSelectionrange = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated DocumentSymbol children = 6;
 * @return {!Array<!proto.goosecode.v2.app.source.ide.DocumentSymbol>}
 */
proto.goosecode.v2.app.source.ide.DocumentSymbol.prototype.getChildrenList = function() {
  return /** @type{!Array<!proto.goosecode.v2.app.source.ide.DocumentSymbol>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.goosecode.v2.app.source.ide.DocumentSymbol, 6));
};


/**
 * @param {!Array<!proto.goosecode.v2.app.source.ide.DocumentSymbol>} value
 * @return {!proto.goosecode.v2.app.source.ide.DocumentSymbol} returns this
*/
proto.goosecode.v2.app.source.ide.DocumentSymbol.prototype.setChildrenList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.goosecode.v2.app.source.ide.DocumentSymbol=} opt_value
 * @param {number=} opt_index
 * @return {!proto.goosecode.v2.app.source.ide.DocumentSymbol}
 */
proto.goosecode.v2.app.source.ide.DocumentSymbol.prototype.addChildren = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.goosecode.v2.app.source.ide.DocumentSymbol, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.goosecode.v2.app.source.ide.DocumentSymbol} returns this
 */
proto.goosecode.v2.app.source.ide.DocumentSymbol.prototype.clearChildrenList = function() {
  return this.setChildrenList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.goosecode.v2.app.source.ide.FindStringResponse.repeatedFields_ = [1];



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
proto.goosecode.v2.app.source.ide.FindStringResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.goosecode.v2.app.source.ide.FindStringResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.goosecode.v2.app.source.ide.FindStringResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.FindStringResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    locationsList: jspb.Message.toObjectList(msg.getLocationsList(),
    proto.goosecode.v2.app.source.ide.Location.toObject, includeInstance)
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
 * @return {!proto.goosecode.v2.app.source.ide.FindStringResponse}
 */
proto.goosecode.v2.app.source.ide.FindStringResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.goosecode.v2.app.source.ide.FindStringResponse;
  return proto.goosecode.v2.app.source.ide.FindStringResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.goosecode.v2.app.source.ide.FindStringResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.goosecode.v2.app.source.ide.FindStringResponse}
 */
proto.goosecode.v2.app.source.ide.FindStringResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.goosecode.v2.app.source.ide.Location;
      reader.readMessage(value,proto.goosecode.v2.app.source.ide.Location.deserializeBinaryFromReader);
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
proto.goosecode.v2.app.source.ide.FindStringResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.goosecode.v2.app.source.ide.FindStringResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.goosecode.v2.app.source.ide.FindStringResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.FindStringResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.goosecode.v2.app.source.ide.Location.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Location locations = 1;
 * @return {!Array<!proto.goosecode.v2.app.source.ide.Location>}
 */
proto.goosecode.v2.app.source.ide.FindStringResponse.prototype.getLocationsList = function() {
  return /** @type{!Array<!proto.goosecode.v2.app.source.ide.Location>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.goosecode.v2.app.source.ide.Location, 1));
};


/**
 * @param {!Array<!proto.goosecode.v2.app.source.ide.Location>} value
 * @return {!proto.goosecode.v2.app.source.ide.FindStringResponse} returns this
*/
proto.goosecode.v2.app.source.ide.FindStringResponse.prototype.setLocationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.goosecode.v2.app.source.ide.Location=} opt_value
 * @param {number=} opt_index
 * @return {!proto.goosecode.v2.app.source.ide.Location}
 */
proto.goosecode.v2.app.source.ide.FindStringResponse.prototype.addLocations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.goosecode.v2.app.source.ide.Location, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.goosecode.v2.app.source.ide.FindStringResponse} returns this
 */
proto.goosecode.v2.app.source.ide.FindStringResponse.prototype.clearLocationsList = function() {
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
proto.goosecode.v2.app.source.ide.SelectRangeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.goosecode.v2.app.source.ide.SelectRangeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.goosecode.v2.app.source.ide.SelectRangeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.SelectRangeResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.goosecode.v2.app.source.ide.SelectRangeResponse}
 */
proto.goosecode.v2.app.source.ide.SelectRangeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.goosecode.v2.app.source.ide.SelectRangeResponse;
  return proto.goosecode.v2.app.source.ide.SelectRangeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.goosecode.v2.app.source.ide.SelectRangeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.goosecode.v2.app.source.ide.SelectRangeResponse}
 */
proto.goosecode.v2.app.source.ide.SelectRangeResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.goosecode.v2.app.source.ide.SelectRangeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.goosecode.v2.app.source.ide.SelectRangeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.goosecode.v2.app.source.ide.SelectRangeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.SelectRangeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.goosecode.v2.app.source.ide.DescribeRangeResponse.repeatedFields_ = [1];



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
proto.goosecode.v2.app.source.ide.DescribeRangeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.goosecode.v2.app.source.ide.DescribeRangeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.goosecode.v2.app.source.ide.DescribeRangeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.DescribeRangeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    symbolsList: jspb.Message.toObjectList(msg.getSymbolsList(),
    proto.goosecode.v2.app.source.ide.DocumentSymbol.toObject, includeInstance)
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
 * @return {!proto.goosecode.v2.app.source.ide.DescribeRangeResponse}
 */
proto.goosecode.v2.app.source.ide.DescribeRangeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.goosecode.v2.app.source.ide.DescribeRangeResponse;
  return proto.goosecode.v2.app.source.ide.DescribeRangeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.goosecode.v2.app.source.ide.DescribeRangeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.goosecode.v2.app.source.ide.DescribeRangeResponse}
 */
proto.goosecode.v2.app.source.ide.DescribeRangeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.goosecode.v2.app.source.ide.DocumentSymbol;
      reader.readMessage(value,proto.goosecode.v2.app.source.ide.DocumentSymbol.deserializeBinaryFromReader);
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
proto.goosecode.v2.app.source.ide.DescribeRangeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.goosecode.v2.app.source.ide.DescribeRangeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.goosecode.v2.app.source.ide.DescribeRangeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.DescribeRangeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSymbolsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.goosecode.v2.app.source.ide.DocumentSymbol.serializeBinaryToWriter
    );
  }
};


/**
 * repeated DocumentSymbol symbols = 1;
 * @return {!Array<!proto.goosecode.v2.app.source.ide.DocumentSymbol>}
 */
proto.goosecode.v2.app.source.ide.DescribeRangeResponse.prototype.getSymbolsList = function() {
  return /** @type{!Array<!proto.goosecode.v2.app.source.ide.DocumentSymbol>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.goosecode.v2.app.source.ide.DocumentSymbol, 1));
};


/**
 * @param {!Array<!proto.goosecode.v2.app.source.ide.DocumentSymbol>} value
 * @return {!proto.goosecode.v2.app.source.ide.DescribeRangeResponse} returns this
*/
proto.goosecode.v2.app.source.ide.DescribeRangeResponse.prototype.setSymbolsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.goosecode.v2.app.source.ide.DocumentSymbol=} opt_value
 * @param {number=} opt_index
 * @return {!proto.goosecode.v2.app.source.ide.DocumentSymbol}
 */
proto.goosecode.v2.app.source.ide.DescribeRangeResponse.prototype.addSymbols = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.goosecode.v2.app.source.ide.DocumentSymbol, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.goosecode.v2.app.source.ide.DescribeRangeResponse} returns this
 */
proto.goosecode.v2.app.source.ide.DescribeRangeResponse.prototype.clearSymbolsList = function() {
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
proto.goosecode.v2.app.source.ide.GoToDefinitionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.goosecode.v2.app.source.ide.GoToDefinitionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.goosecode.v2.app.source.ide.GoToDefinitionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.GoToDefinitionResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.goosecode.v2.app.source.ide.GoToDefinitionResponse}
 */
proto.goosecode.v2.app.source.ide.GoToDefinitionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.goosecode.v2.app.source.ide.GoToDefinitionResponse;
  return proto.goosecode.v2.app.source.ide.GoToDefinitionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.goosecode.v2.app.source.ide.GoToDefinitionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.goosecode.v2.app.source.ide.GoToDefinitionResponse}
 */
proto.goosecode.v2.app.source.ide.GoToDefinitionResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.goosecode.v2.app.source.ide.GoToDefinitionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.goosecode.v2.app.source.ide.GoToDefinitionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.goosecode.v2.app.source.ide.GoToDefinitionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.GoToDefinitionResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.goosecode.v2.app.source.ide.RenameResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.goosecode.v2.app.source.ide.RenameResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.goosecode.v2.app.source.ide.RenameResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.RenameResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.goosecode.v2.app.source.ide.RenameResponse}
 */
proto.goosecode.v2.app.source.ide.RenameResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.goosecode.v2.app.source.ide.RenameResponse;
  return proto.goosecode.v2.app.source.ide.RenameResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.goosecode.v2.app.source.ide.RenameResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.goosecode.v2.app.source.ide.RenameResponse}
 */
proto.goosecode.v2.app.source.ide.RenameResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.goosecode.v2.app.source.ide.RenameResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.goosecode.v2.app.source.ide.RenameResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.goosecode.v2.app.source.ide.RenameResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.RenameResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.goosecode.v2.app.source.ide.FindUsesResponse.repeatedFields_ = [1];



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
proto.goosecode.v2.app.source.ide.FindUsesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.goosecode.v2.app.source.ide.FindUsesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.goosecode.v2.app.source.ide.FindUsesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.FindUsesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    locationsList: jspb.Message.toObjectList(msg.getLocationsList(),
    proto.goosecode.v2.app.source.ide.Location.toObject, includeInstance)
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
 * @return {!proto.goosecode.v2.app.source.ide.FindUsesResponse}
 */
proto.goosecode.v2.app.source.ide.FindUsesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.goosecode.v2.app.source.ide.FindUsesResponse;
  return proto.goosecode.v2.app.source.ide.FindUsesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.goosecode.v2.app.source.ide.FindUsesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.goosecode.v2.app.source.ide.FindUsesResponse}
 */
proto.goosecode.v2.app.source.ide.FindUsesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.goosecode.v2.app.source.ide.Location;
      reader.readMessage(value,proto.goosecode.v2.app.source.ide.Location.deserializeBinaryFromReader);
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
proto.goosecode.v2.app.source.ide.FindUsesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.goosecode.v2.app.source.ide.FindUsesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.goosecode.v2.app.source.ide.FindUsesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.FindUsesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.goosecode.v2.app.source.ide.Location.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Location locations = 1;
 * @return {!Array<!proto.goosecode.v2.app.source.ide.Location>}
 */
proto.goosecode.v2.app.source.ide.FindUsesResponse.prototype.getLocationsList = function() {
  return /** @type{!Array<!proto.goosecode.v2.app.source.ide.Location>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.goosecode.v2.app.source.ide.Location, 1));
};


/**
 * @param {!Array<!proto.goosecode.v2.app.source.ide.Location>} value
 * @return {!proto.goosecode.v2.app.source.ide.FindUsesResponse} returns this
*/
proto.goosecode.v2.app.source.ide.FindUsesResponse.prototype.setLocationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.goosecode.v2.app.source.ide.Location=} opt_value
 * @param {number=} opt_index
 * @return {!proto.goosecode.v2.app.source.ide.Location}
 */
proto.goosecode.v2.app.source.ide.FindUsesResponse.prototype.addLocations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.goosecode.v2.app.source.ide.Location, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.goosecode.v2.app.source.ide.FindUsesResponse} returns this
 */
proto.goosecode.v2.app.source.ide.FindUsesResponse.prototype.clearLocationsList = function() {
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
proto.goosecode.v2.app.source.ide.EditorStateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.goosecode.v2.app.source.ide.EditorStateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.goosecode.v2.app.source.ide.EditorStateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.EditorStateResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.goosecode.v2.app.source.ide.EditorStateResponse}
 */
proto.goosecode.v2.app.source.ide.EditorStateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.goosecode.v2.app.source.ide.EditorStateResponse;
  return proto.goosecode.v2.app.source.ide.EditorStateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.goosecode.v2.app.source.ide.EditorStateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.goosecode.v2.app.source.ide.EditorStateResponse}
 */
proto.goosecode.v2.app.source.ide.EditorStateResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.goosecode.v2.app.source.ide.EditorStateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.goosecode.v2.app.source.ide.EditorStateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.goosecode.v2.app.source.ide.EditorStateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.EditorStateResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.goosecode.v2.app.source.ide.ContentChangeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.goosecode.v2.app.source.ide.ContentChangeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.goosecode.v2.app.source.ide.ContentChangeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.ContentChangeResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.goosecode.v2.app.source.ide.ContentChangeResponse}
 */
proto.goosecode.v2.app.source.ide.ContentChangeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.goosecode.v2.app.source.ide.ContentChangeResponse;
  return proto.goosecode.v2.app.source.ide.ContentChangeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.goosecode.v2.app.source.ide.ContentChangeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.goosecode.v2.app.source.ide.ContentChangeResponse}
 */
proto.goosecode.v2.app.source.ide.ContentChangeResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.goosecode.v2.app.source.ide.ContentChangeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.goosecode.v2.app.source.ide.ContentChangeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.goosecode.v2.app.source.ide.ContentChangeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.ContentChangeResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.goosecode.v2.app.source.ide.EditorDiagnosticsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.goosecode.v2.app.source.ide.EditorDiagnosticsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.goosecode.v2.app.source.ide.EditorDiagnosticsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.EditorDiagnosticsResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.goosecode.v2.app.source.ide.EditorDiagnosticsResponse}
 */
proto.goosecode.v2.app.source.ide.EditorDiagnosticsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.goosecode.v2.app.source.ide.EditorDiagnosticsResponse;
  return proto.goosecode.v2.app.source.ide.EditorDiagnosticsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.goosecode.v2.app.source.ide.EditorDiagnosticsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.goosecode.v2.app.source.ide.EditorDiagnosticsResponse}
 */
proto.goosecode.v2.app.source.ide.EditorDiagnosticsResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.goosecode.v2.app.source.ide.EditorDiagnosticsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.goosecode.v2.app.source.ide.EditorDiagnosticsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.goosecode.v2.app.source.ide.EditorDiagnosticsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.EditorDiagnosticsResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.goosecode.v2.app.source.ide.CodeSourceIDResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.goosecode.v2.app.source.ide.CodeSourceIDResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.goosecode.v2.app.source.ide.CodeSourceIDResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.CodeSourceIDResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.goosecode.v2.app.source.ide.CodeSourceIDResponse}
 */
proto.goosecode.v2.app.source.ide.CodeSourceIDResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.goosecode.v2.app.source.ide.CodeSourceIDResponse;
  return proto.goosecode.v2.app.source.ide.CodeSourceIDResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.goosecode.v2.app.source.ide.CodeSourceIDResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.goosecode.v2.app.source.ide.CodeSourceIDResponse}
 */
proto.goosecode.v2.app.source.ide.CodeSourceIDResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.goosecode.v2.app.source.ide.CodeSourceIDResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.goosecode.v2.app.source.ide.CodeSourceIDResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.goosecode.v2.app.source.ide.CodeSourceIDResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.CodeSourceIDResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.goosecode.v2.app.source.ide.CodeSourceIDResponse.prototype.getSuggestedAlias = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.goosecode.v2.app.source.ide.CodeSourceIDResponse} returns this
 */
proto.goosecode.v2.app.source.ide.CodeSourceIDResponse.prototype.setSuggestedAlias = function(value) {
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
proto.goosecode.v2.app.source.ide.ErrorResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.goosecode.v2.app.source.ide.ErrorResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.goosecode.v2.app.source.ide.ErrorResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.ErrorResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.goosecode.v2.app.source.ide.ErrorResponse}
 */
proto.goosecode.v2.app.source.ide.ErrorResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.goosecode.v2.app.source.ide.ErrorResponse;
  return proto.goosecode.v2.app.source.ide.ErrorResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.goosecode.v2.app.source.ide.ErrorResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.goosecode.v2.app.source.ide.ErrorResponse}
 */
proto.goosecode.v2.app.source.ide.ErrorResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.goosecode.v2.app.source.ide.ErrorResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.goosecode.v2.app.source.ide.ErrorResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.goosecode.v2.app.source.ide.ErrorResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.ErrorResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.goosecode.v2.app.source.ide.ErrorResponse.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.goosecode.v2.app.source.ide.ErrorResponse} returns this
 */
proto.goosecode.v2.app.source.ide.ErrorResponse.prototype.setError = function(value) {
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
proto.goosecode.v2.app.source.ide.ResponseMessage.oneofGroups_ = [[10,11,12,13,14,15,16,17,18,999]];

/**
 * @enum {number}
 */
proto.goosecode.v2.app.source.ide.ResponseMessage.DataCase = {
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
 * @return {proto.goosecode.v2.app.source.ide.ResponseMessage.DataCase}
 */
proto.goosecode.v2.app.source.ide.ResponseMessage.prototype.getDataCase = function() {
  return /** @type {proto.goosecode.v2.app.source.ide.ResponseMessage.DataCase} */(jspb.Message.computeOneofCase(this, proto.goosecode.v2.app.source.ide.ResponseMessage.oneofGroups_[0]));
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
proto.goosecode.v2.app.source.ide.ResponseMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.goosecode.v2.app.source.ide.ResponseMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.goosecode.v2.app.source.ide.ResponseMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.ResponseMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    repositorySnapshotFingerprint: jspb.Message.getFieldWithDefault(msg, 2, ""),
    listFilesResponse: (f = msg.getListFilesResponse()) && proto.goosecode.v2.app.source.ide.ListFilesResponse.toObject(includeInstance, f),
    getFilesResponse: (f = msg.getGetFilesResponse()) && proto.goosecode.v2.app.source.ide.GetFilesResponse.toObject(includeInstance, f),
    openFilesResponse: (f = msg.getOpenFilesResponse()) && proto.goosecode.v2.app.source.ide.OpenFilesResponse.toObject(includeInstance, f),
    findStringResponse: (f = msg.getFindStringResponse()) && proto.goosecode.v2.app.source.ide.FindStringResponse.toObject(includeInstance, f),
    selectRangeResponse: (f = msg.getSelectRangeResponse()) && proto.goosecode.v2.app.source.ide.SelectRangeResponse.toObject(includeInstance, f),
    describeRangeResponse: (f = msg.getDescribeRangeResponse()) && proto.goosecode.v2.app.source.ide.DescribeRangeResponse.toObject(includeInstance, f),
    goToDefinitionResponse: (f = msg.getGoToDefinitionResponse()) && proto.goosecode.v2.app.source.ide.GoToDefinitionResponse.toObject(includeInstance, f),
    renameResponse: (f = msg.getRenameResponse()) && proto.goosecode.v2.app.source.ide.RenameResponse.toObject(includeInstance, f),
    findUsesResponse: (f = msg.getFindUsesResponse()) && proto.goosecode.v2.app.source.ide.FindUsesResponse.toObject(includeInstance, f),
    errorResponse: (f = msg.getErrorResponse()) && proto.goosecode.v2.app.source.ide.ErrorResponse.toObject(includeInstance, f)
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
 * @return {!proto.goosecode.v2.app.source.ide.ResponseMessage}
 */
proto.goosecode.v2.app.source.ide.ResponseMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.goosecode.v2.app.source.ide.ResponseMessage;
  return proto.goosecode.v2.app.source.ide.ResponseMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.goosecode.v2.app.source.ide.ResponseMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.goosecode.v2.app.source.ide.ResponseMessage}
 */
proto.goosecode.v2.app.source.ide.ResponseMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.goosecode.v2.app.source.ide.ResponseType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRepositorySnapshotFingerprint(value);
      break;
    case 10:
      var value = new proto.goosecode.v2.app.source.ide.ListFilesResponse;
      reader.readMessage(value,proto.goosecode.v2.app.source.ide.ListFilesResponse.deserializeBinaryFromReader);
      msg.setListFilesResponse(value);
      break;
    case 11:
      var value = new proto.goosecode.v2.app.source.ide.GetFilesResponse;
      reader.readMessage(value,proto.goosecode.v2.app.source.ide.GetFilesResponse.deserializeBinaryFromReader);
      msg.setGetFilesResponse(value);
      break;
    case 12:
      var value = new proto.goosecode.v2.app.source.ide.OpenFilesResponse;
      reader.readMessage(value,proto.goosecode.v2.app.source.ide.OpenFilesResponse.deserializeBinaryFromReader);
      msg.setOpenFilesResponse(value);
      break;
    case 13:
      var value = new proto.goosecode.v2.app.source.ide.FindStringResponse;
      reader.readMessage(value,proto.goosecode.v2.app.source.ide.FindStringResponse.deserializeBinaryFromReader);
      msg.setFindStringResponse(value);
      break;
    case 14:
      var value = new proto.goosecode.v2.app.source.ide.SelectRangeResponse;
      reader.readMessage(value,proto.goosecode.v2.app.source.ide.SelectRangeResponse.deserializeBinaryFromReader);
      msg.setSelectRangeResponse(value);
      break;
    case 15:
      var value = new proto.goosecode.v2.app.source.ide.DescribeRangeResponse;
      reader.readMessage(value,proto.goosecode.v2.app.source.ide.DescribeRangeResponse.deserializeBinaryFromReader);
      msg.setDescribeRangeResponse(value);
      break;
    case 16:
      var value = new proto.goosecode.v2.app.source.ide.GoToDefinitionResponse;
      reader.readMessage(value,proto.goosecode.v2.app.source.ide.GoToDefinitionResponse.deserializeBinaryFromReader);
      msg.setGoToDefinitionResponse(value);
      break;
    case 17:
      var value = new proto.goosecode.v2.app.source.ide.RenameResponse;
      reader.readMessage(value,proto.goosecode.v2.app.source.ide.RenameResponse.deserializeBinaryFromReader);
      msg.setRenameResponse(value);
      break;
    case 18:
      var value = new proto.goosecode.v2.app.source.ide.FindUsesResponse;
      reader.readMessage(value,proto.goosecode.v2.app.source.ide.FindUsesResponse.deserializeBinaryFromReader);
      msg.setFindUsesResponse(value);
      break;
    case 999:
      var value = new proto.goosecode.v2.app.source.ide.ErrorResponse;
      reader.readMessage(value,proto.goosecode.v2.app.source.ide.ErrorResponse.deserializeBinaryFromReader);
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
proto.goosecode.v2.app.source.ide.ResponseMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.goosecode.v2.app.source.ide.ResponseMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.goosecode.v2.app.source.ide.ResponseMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.ResponseMessage.serializeBinaryToWriter = function(message, writer) {
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
      proto.goosecode.v2.app.source.ide.ListFilesResponse.serializeBinaryToWriter
    );
  }
  f = message.getGetFilesResponse();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.goosecode.v2.app.source.ide.GetFilesResponse.serializeBinaryToWriter
    );
  }
  f = message.getOpenFilesResponse();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.goosecode.v2.app.source.ide.OpenFilesResponse.serializeBinaryToWriter
    );
  }
  f = message.getFindStringResponse();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.goosecode.v2.app.source.ide.FindStringResponse.serializeBinaryToWriter
    );
  }
  f = message.getSelectRangeResponse();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.goosecode.v2.app.source.ide.SelectRangeResponse.serializeBinaryToWriter
    );
  }
  f = message.getDescribeRangeResponse();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.goosecode.v2.app.source.ide.DescribeRangeResponse.serializeBinaryToWriter
    );
  }
  f = message.getGoToDefinitionResponse();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.goosecode.v2.app.source.ide.GoToDefinitionResponse.serializeBinaryToWriter
    );
  }
  f = message.getRenameResponse();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.goosecode.v2.app.source.ide.RenameResponse.serializeBinaryToWriter
    );
  }
  f = message.getFindUsesResponse();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.goosecode.v2.app.source.ide.FindUsesResponse.serializeBinaryToWriter
    );
  }
  f = message.getErrorResponse();
  if (f != null) {
    writer.writeMessage(
      999,
      f,
      proto.goosecode.v2.app.source.ide.ErrorResponse.serializeBinaryToWriter
    );
  }
};


/**
 * optional ResponseType type = 1;
 * @return {!proto.goosecode.v2.app.source.ide.ResponseType}
 */
proto.goosecode.v2.app.source.ide.ResponseMessage.prototype.getType = function() {
  return /** @type {!proto.goosecode.v2.app.source.ide.ResponseType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.goosecode.v2.app.source.ide.ResponseType} value
 * @return {!proto.goosecode.v2.app.source.ide.ResponseMessage} returns this
 */
proto.goosecode.v2.app.source.ide.ResponseMessage.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string repository_snapshot_fingerprint = 2;
 * @return {string}
 */
proto.goosecode.v2.app.source.ide.ResponseMessage.prototype.getRepositorySnapshotFingerprint = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.goosecode.v2.app.source.ide.ResponseMessage} returns this
 */
proto.goosecode.v2.app.source.ide.ResponseMessage.prototype.setRepositorySnapshotFingerprint = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional ListFilesResponse list_files_response = 10;
 * @return {?proto.goosecode.v2.app.source.ide.ListFilesResponse}
 */
proto.goosecode.v2.app.source.ide.ResponseMessage.prototype.getListFilesResponse = function() {
  return /** @type{?proto.goosecode.v2.app.source.ide.ListFilesResponse} */ (
    jspb.Message.getWrapperField(this, proto.goosecode.v2.app.source.ide.ListFilesResponse, 10));
};


/**
 * @param {?proto.goosecode.v2.app.source.ide.ListFilesResponse|undefined} value
 * @return {!proto.goosecode.v2.app.source.ide.ResponseMessage} returns this
*/
proto.goosecode.v2.app.source.ide.ResponseMessage.prototype.setListFilesResponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.goosecode.v2.app.source.ide.ResponseMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.goosecode.v2.app.source.ide.ResponseMessage} returns this
 */
proto.goosecode.v2.app.source.ide.ResponseMessage.prototype.clearListFilesResponse = function() {
  return this.setListFilesResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.goosecode.v2.app.source.ide.ResponseMessage.prototype.hasListFilesResponse = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional GetFilesResponse get_files_response = 11;
 * @return {?proto.goosecode.v2.app.source.ide.GetFilesResponse}
 */
proto.goosecode.v2.app.source.ide.ResponseMessage.prototype.getGetFilesResponse = function() {
  return /** @type{?proto.goosecode.v2.app.source.ide.GetFilesResponse} */ (
    jspb.Message.getWrapperField(this, proto.goosecode.v2.app.source.ide.GetFilesResponse, 11));
};


/**
 * @param {?proto.goosecode.v2.app.source.ide.GetFilesResponse|undefined} value
 * @return {!proto.goosecode.v2.app.source.ide.ResponseMessage} returns this
*/
proto.goosecode.v2.app.source.ide.ResponseMessage.prototype.setGetFilesResponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.goosecode.v2.app.source.ide.ResponseMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.goosecode.v2.app.source.ide.ResponseMessage} returns this
 */
proto.goosecode.v2.app.source.ide.ResponseMessage.prototype.clearGetFilesResponse = function() {
  return this.setGetFilesResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.goosecode.v2.app.source.ide.ResponseMessage.prototype.hasGetFilesResponse = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional OpenFilesResponse open_files_response = 12;
 * @return {?proto.goosecode.v2.app.source.ide.OpenFilesResponse}
 */
proto.goosecode.v2.app.source.ide.ResponseMessage.prototype.getOpenFilesResponse = function() {
  return /** @type{?proto.goosecode.v2.app.source.ide.OpenFilesResponse} */ (
    jspb.Message.getWrapperField(this, proto.goosecode.v2.app.source.ide.OpenFilesResponse, 12));
};


/**
 * @param {?proto.goosecode.v2.app.source.ide.OpenFilesResponse|undefined} value
 * @return {!proto.goosecode.v2.app.source.ide.ResponseMessage} returns this
*/
proto.goosecode.v2.app.source.ide.ResponseMessage.prototype.setOpenFilesResponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.goosecode.v2.app.source.ide.ResponseMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.goosecode.v2.app.source.ide.ResponseMessage} returns this
 */
proto.goosecode.v2.app.source.ide.ResponseMessage.prototype.clearOpenFilesResponse = function() {
  return this.setOpenFilesResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.goosecode.v2.app.source.ide.ResponseMessage.prototype.hasOpenFilesResponse = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional FindStringResponse find_string_response = 13;
 * @return {?proto.goosecode.v2.app.source.ide.FindStringResponse}
 */
proto.goosecode.v2.app.source.ide.ResponseMessage.prototype.getFindStringResponse = function() {
  return /** @type{?proto.goosecode.v2.app.source.ide.FindStringResponse} */ (
    jspb.Message.getWrapperField(this, proto.goosecode.v2.app.source.ide.FindStringResponse, 13));
};


/**
 * @param {?proto.goosecode.v2.app.source.ide.FindStringResponse|undefined} value
 * @return {!proto.goosecode.v2.app.source.ide.ResponseMessage} returns this
*/
proto.goosecode.v2.app.source.ide.ResponseMessage.prototype.setFindStringResponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 13, proto.goosecode.v2.app.source.ide.ResponseMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.goosecode.v2.app.source.ide.ResponseMessage} returns this
 */
proto.goosecode.v2.app.source.ide.ResponseMessage.prototype.clearFindStringResponse = function() {
  return this.setFindStringResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.goosecode.v2.app.source.ide.ResponseMessage.prototype.hasFindStringResponse = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional SelectRangeResponse select_range_response = 14;
 * @return {?proto.goosecode.v2.app.source.ide.SelectRangeResponse}
 */
proto.goosecode.v2.app.source.ide.ResponseMessage.prototype.getSelectRangeResponse = function() {
  return /** @type{?proto.goosecode.v2.app.source.ide.SelectRangeResponse} */ (
    jspb.Message.getWrapperField(this, proto.goosecode.v2.app.source.ide.SelectRangeResponse, 14));
};


/**
 * @param {?proto.goosecode.v2.app.source.ide.SelectRangeResponse|undefined} value
 * @return {!proto.goosecode.v2.app.source.ide.ResponseMessage} returns this
*/
proto.goosecode.v2.app.source.ide.ResponseMessage.prototype.setSelectRangeResponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 14, proto.goosecode.v2.app.source.ide.ResponseMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.goosecode.v2.app.source.ide.ResponseMessage} returns this
 */
proto.goosecode.v2.app.source.ide.ResponseMessage.prototype.clearSelectRangeResponse = function() {
  return this.setSelectRangeResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.goosecode.v2.app.source.ide.ResponseMessage.prototype.hasSelectRangeResponse = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional DescribeRangeResponse describe_range_response = 15;
 * @return {?proto.goosecode.v2.app.source.ide.DescribeRangeResponse}
 */
proto.goosecode.v2.app.source.ide.ResponseMessage.prototype.getDescribeRangeResponse = function() {
  return /** @type{?proto.goosecode.v2.app.source.ide.DescribeRangeResponse} */ (
    jspb.Message.getWrapperField(this, proto.goosecode.v2.app.source.ide.DescribeRangeResponse, 15));
};


/**
 * @param {?proto.goosecode.v2.app.source.ide.DescribeRangeResponse|undefined} value
 * @return {!proto.goosecode.v2.app.source.ide.ResponseMessage} returns this
*/
proto.goosecode.v2.app.source.ide.ResponseMessage.prototype.setDescribeRangeResponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 15, proto.goosecode.v2.app.source.ide.ResponseMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.goosecode.v2.app.source.ide.ResponseMessage} returns this
 */
proto.goosecode.v2.app.source.ide.ResponseMessage.prototype.clearDescribeRangeResponse = function() {
  return this.setDescribeRangeResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.goosecode.v2.app.source.ide.ResponseMessage.prototype.hasDescribeRangeResponse = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional GoToDefinitionResponse go_to_definition_response = 16;
 * @return {?proto.goosecode.v2.app.source.ide.GoToDefinitionResponse}
 */
proto.goosecode.v2.app.source.ide.ResponseMessage.prototype.getGoToDefinitionResponse = function() {
  return /** @type{?proto.goosecode.v2.app.source.ide.GoToDefinitionResponse} */ (
    jspb.Message.getWrapperField(this, proto.goosecode.v2.app.source.ide.GoToDefinitionResponse, 16));
};


/**
 * @param {?proto.goosecode.v2.app.source.ide.GoToDefinitionResponse|undefined} value
 * @return {!proto.goosecode.v2.app.source.ide.ResponseMessage} returns this
*/
proto.goosecode.v2.app.source.ide.ResponseMessage.prototype.setGoToDefinitionResponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 16, proto.goosecode.v2.app.source.ide.ResponseMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.goosecode.v2.app.source.ide.ResponseMessage} returns this
 */
proto.goosecode.v2.app.source.ide.ResponseMessage.prototype.clearGoToDefinitionResponse = function() {
  return this.setGoToDefinitionResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.goosecode.v2.app.source.ide.ResponseMessage.prototype.hasGoToDefinitionResponse = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional RenameResponse rename_response = 17;
 * @return {?proto.goosecode.v2.app.source.ide.RenameResponse}
 */
proto.goosecode.v2.app.source.ide.ResponseMessage.prototype.getRenameResponse = function() {
  return /** @type{?proto.goosecode.v2.app.source.ide.RenameResponse} */ (
    jspb.Message.getWrapperField(this, proto.goosecode.v2.app.source.ide.RenameResponse, 17));
};


/**
 * @param {?proto.goosecode.v2.app.source.ide.RenameResponse|undefined} value
 * @return {!proto.goosecode.v2.app.source.ide.ResponseMessage} returns this
*/
proto.goosecode.v2.app.source.ide.ResponseMessage.prototype.setRenameResponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 17, proto.goosecode.v2.app.source.ide.ResponseMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.goosecode.v2.app.source.ide.ResponseMessage} returns this
 */
proto.goosecode.v2.app.source.ide.ResponseMessage.prototype.clearRenameResponse = function() {
  return this.setRenameResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.goosecode.v2.app.source.ide.ResponseMessage.prototype.hasRenameResponse = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional FindUsesResponse find_uses_response = 18;
 * @return {?proto.goosecode.v2.app.source.ide.FindUsesResponse}
 */
proto.goosecode.v2.app.source.ide.ResponseMessage.prototype.getFindUsesResponse = function() {
  return /** @type{?proto.goosecode.v2.app.source.ide.FindUsesResponse} */ (
    jspb.Message.getWrapperField(this, proto.goosecode.v2.app.source.ide.FindUsesResponse, 18));
};


/**
 * @param {?proto.goosecode.v2.app.source.ide.FindUsesResponse|undefined} value
 * @return {!proto.goosecode.v2.app.source.ide.ResponseMessage} returns this
*/
proto.goosecode.v2.app.source.ide.ResponseMessage.prototype.setFindUsesResponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 18, proto.goosecode.v2.app.source.ide.ResponseMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.goosecode.v2.app.source.ide.ResponseMessage} returns this
 */
proto.goosecode.v2.app.source.ide.ResponseMessage.prototype.clearFindUsesResponse = function() {
  return this.setFindUsesResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.goosecode.v2.app.source.ide.ResponseMessage.prototype.hasFindUsesResponse = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional ErrorResponse error_response = 999;
 * @return {?proto.goosecode.v2.app.source.ide.ErrorResponse}
 */
proto.goosecode.v2.app.source.ide.ResponseMessage.prototype.getErrorResponse = function() {
  return /** @type{?proto.goosecode.v2.app.source.ide.ErrorResponse} */ (
    jspb.Message.getWrapperField(this, proto.goosecode.v2.app.source.ide.ErrorResponse, 999));
};


/**
 * @param {?proto.goosecode.v2.app.source.ide.ErrorResponse|undefined} value
 * @return {!proto.goosecode.v2.app.source.ide.ResponseMessage} returns this
*/
proto.goosecode.v2.app.source.ide.ResponseMessage.prototype.setErrorResponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 999, proto.goosecode.v2.app.source.ide.ResponseMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.goosecode.v2.app.source.ide.ResponseMessage} returns this
 */
proto.goosecode.v2.app.source.ide.ResponseMessage.prototype.clearErrorResponse = function() {
  return this.setErrorResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.goosecode.v2.app.source.ide.ResponseMessage.prototype.hasErrorResponse = function() {
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
proto.goosecode.v2.app.source.ide.OpenPush.prototype.toObject = function(opt_includeInstance) {
  return proto.goosecode.v2.app.source.ide.OpenPush.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.goosecode.v2.app.source.ide.OpenPush} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.OpenPush.toObject = function(includeInstance, msg) {
  var f, obj = {
    path: jspb.Message.getFieldWithDefault(msg, 1, ""),
    range: (f = msg.getRange()) && proto.goosecode.v2.app.source.ide.Range.toObject(includeInstance, f),
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
 * @return {!proto.goosecode.v2.app.source.ide.OpenPush}
 */
proto.goosecode.v2.app.source.ide.OpenPush.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.goosecode.v2.app.source.ide.OpenPush;
  return proto.goosecode.v2.app.source.ide.OpenPush.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.goosecode.v2.app.source.ide.OpenPush} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.goosecode.v2.app.source.ide.OpenPush}
 */
proto.goosecode.v2.app.source.ide.OpenPush.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.goosecode.v2.app.source.ide.Range;
      reader.readMessage(value,proto.goosecode.v2.app.source.ide.Range.deserializeBinaryFromReader);
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
proto.goosecode.v2.app.source.ide.OpenPush.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.goosecode.v2.app.source.ide.OpenPush.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.goosecode.v2.app.source.ide.OpenPush} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.OpenPush.serializeBinaryToWriter = function(message, writer) {
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
      proto.goosecode.v2.app.source.ide.Range.serializeBinaryToWriter
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
proto.goosecode.v2.app.source.ide.OpenPush.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.goosecode.v2.app.source.ide.OpenPush} returns this
 */
proto.goosecode.v2.app.source.ide.OpenPush.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Range range = 2;
 * @return {?proto.goosecode.v2.app.source.ide.Range}
 */
proto.goosecode.v2.app.source.ide.OpenPush.prototype.getRange = function() {
  return /** @type{?proto.goosecode.v2.app.source.ide.Range} */ (
    jspb.Message.getWrapperField(this, proto.goosecode.v2.app.source.ide.Range, 2));
};


/**
 * @param {?proto.goosecode.v2.app.source.ide.Range|undefined} value
 * @return {!proto.goosecode.v2.app.source.ide.OpenPush} returns this
*/
proto.goosecode.v2.app.source.ide.OpenPush.prototype.setRange = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.goosecode.v2.app.source.ide.OpenPush} returns this
 */
proto.goosecode.v2.app.source.ide.OpenPush.prototype.clearRange = function() {
  return this.setRange(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.goosecode.v2.app.source.ide.OpenPush.prototype.hasRange = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool force_new = 3;
 * @return {boolean}
 */
proto.goosecode.v2.app.source.ide.OpenPush.prototype.getForceNew = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.goosecode.v2.app.source.ide.OpenPush} returns this
 */
proto.goosecode.v2.app.source.ide.OpenPush.prototype.setForceNew = function(value) {
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
proto.goosecode.v2.app.source.ide.SnippetContext.prototype.toObject = function(opt_includeInstance) {
  return proto.goosecode.v2.app.source.ide.SnippetContext.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.goosecode.v2.app.source.ide.SnippetContext} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.SnippetContext.toObject = function(includeInstance, msg) {
  var f, obj = {
    before: jspb.Message.getFieldWithDefault(msg, 1, 0),
    after: jspb.Message.getFieldWithDefault(msg, 2, 0),
    fullRange: (f = msg.getFullRange()) && proto.goosecode.v2.app.source.ide.Range.toObject(includeInstance, f)
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
 * @return {!proto.goosecode.v2.app.source.ide.SnippetContext}
 */
proto.goosecode.v2.app.source.ide.SnippetContext.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.goosecode.v2.app.source.ide.SnippetContext;
  return proto.goosecode.v2.app.source.ide.SnippetContext.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.goosecode.v2.app.source.ide.SnippetContext} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.goosecode.v2.app.source.ide.SnippetContext}
 */
proto.goosecode.v2.app.source.ide.SnippetContext.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.goosecode.v2.app.source.ide.Range;
      reader.readMessage(value,proto.goosecode.v2.app.source.ide.Range.deserializeBinaryFromReader);
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
proto.goosecode.v2.app.source.ide.SnippetContext.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.goosecode.v2.app.source.ide.SnippetContext.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.goosecode.v2.app.source.ide.SnippetContext} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.SnippetContext.serializeBinaryToWriter = function(message, writer) {
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
      proto.goosecode.v2.app.source.ide.Range.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 before = 1;
 * @return {number}
 */
proto.goosecode.v2.app.source.ide.SnippetContext.prototype.getBefore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.goosecode.v2.app.source.ide.SnippetContext} returns this
 */
proto.goosecode.v2.app.source.ide.SnippetContext.prototype.setBefore = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.goosecode.v2.app.source.ide.SnippetContext} returns this
 */
proto.goosecode.v2.app.source.ide.SnippetContext.prototype.clearBefore = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.goosecode.v2.app.source.ide.SnippetContext.prototype.hasBefore = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 after = 2;
 * @return {number}
 */
proto.goosecode.v2.app.source.ide.SnippetContext.prototype.getAfter = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.goosecode.v2.app.source.ide.SnippetContext} returns this
 */
proto.goosecode.v2.app.source.ide.SnippetContext.prototype.setAfter = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.goosecode.v2.app.source.ide.SnippetContext} returns this
 */
proto.goosecode.v2.app.source.ide.SnippetContext.prototype.clearAfter = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.goosecode.v2.app.source.ide.SnippetContext.prototype.hasAfter = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Range full_range = 3;
 * @return {?proto.goosecode.v2.app.source.ide.Range}
 */
proto.goosecode.v2.app.source.ide.SnippetContext.prototype.getFullRange = function() {
  return /** @type{?proto.goosecode.v2.app.source.ide.Range} */ (
    jspb.Message.getWrapperField(this, proto.goosecode.v2.app.source.ide.Range, 3));
};


/**
 * @param {?proto.goosecode.v2.app.source.ide.Range|undefined} value
 * @return {!proto.goosecode.v2.app.source.ide.SnippetContext} returns this
*/
proto.goosecode.v2.app.source.ide.SnippetContext.prototype.setFullRange = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.goosecode.v2.app.source.ide.SnippetContext} returns this
 */
proto.goosecode.v2.app.source.ide.SnippetContext.prototype.clearFullRange = function() {
  return this.setFullRange(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.goosecode.v2.app.source.ide.SnippetContext.prototype.hasFullRange = function() {
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
proto.goosecode.v2.app.source.ide.CreateSnippetPush.prototype.toObject = function(opt_includeInstance) {
  return proto.goosecode.v2.app.source.ide.CreateSnippetPush.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.goosecode.v2.app.source.ide.CreateSnippetPush} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.CreateSnippetPush.toObject = function(includeInstance, msg) {
  var f, obj = {
    location: (f = msg.getLocation()) && proto.goosecode.v2.app.source.ide.Location.toObject(includeInstance, f),
    context: (f = msg.getContext()) && proto.goosecode.v2.app.source.ide.SnippetContext.toObject(includeInstance, f)
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
 * @return {!proto.goosecode.v2.app.source.ide.CreateSnippetPush}
 */
proto.goosecode.v2.app.source.ide.CreateSnippetPush.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.goosecode.v2.app.source.ide.CreateSnippetPush;
  return proto.goosecode.v2.app.source.ide.CreateSnippetPush.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.goosecode.v2.app.source.ide.CreateSnippetPush} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.goosecode.v2.app.source.ide.CreateSnippetPush}
 */
proto.goosecode.v2.app.source.ide.CreateSnippetPush.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.goosecode.v2.app.source.ide.Location;
      reader.readMessage(value,proto.goosecode.v2.app.source.ide.Location.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    case 2:
      var value = new proto.goosecode.v2.app.source.ide.SnippetContext;
      reader.readMessage(value,proto.goosecode.v2.app.source.ide.SnippetContext.deserializeBinaryFromReader);
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
proto.goosecode.v2.app.source.ide.CreateSnippetPush.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.goosecode.v2.app.source.ide.CreateSnippetPush.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.goosecode.v2.app.source.ide.CreateSnippetPush} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.CreateSnippetPush.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.goosecode.v2.app.source.ide.Location.serializeBinaryToWriter
    );
  }
  f = message.getContext();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.goosecode.v2.app.source.ide.SnippetContext.serializeBinaryToWriter
    );
  }
};


/**
 * optional Location location = 1;
 * @return {?proto.goosecode.v2.app.source.ide.Location}
 */
proto.goosecode.v2.app.source.ide.CreateSnippetPush.prototype.getLocation = function() {
  return /** @type{?proto.goosecode.v2.app.source.ide.Location} */ (
    jspb.Message.getWrapperField(this, proto.goosecode.v2.app.source.ide.Location, 1));
};


/**
 * @param {?proto.goosecode.v2.app.source.ide.Location|undefined} value
 * @return {!proto.goosecode.v2.app.source.ide.CreateSnippetPush} returns this
*/
proto.goosecode.v2.app.source.ide.CreateSnippetPush.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.goosecode.v2.app.source.ide.CreateSnippetPush} returns this
 */
proto.goosecode.v2.app.source.ide.CreateSnippetPush.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.goosecode.v2.app.source.ide.CreateSnippetPush.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional SnippetContext context = 2;
 * @return {?proto.goosecode.v2.app.source.ide.SnippetContext}
 */
proto.goosecode.v2.app.source.ide.CreateSnippetPush.prototype.getContext = function() {
  return /** @type{?proto.goosecode.v2.app.source.ide.SnippetContext} */ (
    jspb.Message.getWrapperField(this, proto.goosecode.v2.app.source.ide.SnippetContext, 2));
};


/**
 * @param {?proto.goosecode.v2.app.source.ide.SnippetContext|undefined} value
 * @return {!proto.goosecode.v2.app.source.ide.CreateSnippetPush} returns this
*/
proto.goosecode.v2.app.source.ide.CreateSnippetPush.prototype.setContext = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.goosecode.v2.app.source.ide.CreateSnippetPush} returns this
 */
proto.goosecode.v2.app.source.ide.CreateSnippetPush.prototype.clearContext = function() {
  return this.setContext(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.goosecode.v2.app.source.ide.CreateSnippetPush.prototype.hasContext = function() {
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
proto.goosecode.v2.app.source.ide.BookmarkPush.prototype.toObject = function(opt_includeInstance) {
  return proto.goosecode.v2.app.source.ide.BookmarkPush.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.goosecode.v2.app.source.ide.BookmarkPush} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.BookmarkPush.toObject = function(includeInstance, msg) {
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
 * @return {!proto.goosecode.v2.app.source.ide.BookmarkPush}
 */
proto.goosecode.v2.app.source.ide.BookmarkPush.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.goosecode.v2.app.source.ide.BookmarkPush;
  return proto.goosecode.v2.app.source.ide.BookmarkPush.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.goosecode.v2.app.source.ide.BookmarkPush} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.goosecode.v2.app.source.ide.BookmarkPush}
 */
proto.goosecode.v2.app.source.ide.BookmarkPush.deserializeBinaryFromReader = function(msg, reader) {
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
proto.goosecode.v2.app.source.ide.BookmarkPush.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.goosecode.v2.app.source.ide.BookmarkPush.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.goosecode.v2.app.source.ide.BookmarkPush} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.BookmarkPush.serializeBinaryToWriter = function(message, writer) {
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
proto.goosecode.v2.app.source.ide.BookmarkPush.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.goosecode.v2.app.source.ide.BookmarkPush} returns this
 */
proto.goosecode.v2.app.source.ide.BookmarkPush.prototype.setPath = function(value) {
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
proto.goosecode.v2.app.source.ide.HighlightPush.prototype.toObject = function(opt_includeInstance) {
  return proto.goosecode.v2.app.source.ide.HighlightPush.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.goosecode.v2.app.source.ide.HighlightPush} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.HighlightPush.toObject = function(includeInstance, msg) {
  var f, obj = {
    path: jspb.Message.getFieldWithDefault(msg, 1, ""),
    range: (f = msg.getRange()) && proto.goosecode.v2.app.source.ide.Range.toObject(includeInstance, f),
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
 * @return {!proto.goosecode.v2.app.source.ide.HighlightPush}
 */
proto.goosecode.v2.app.source.ide.HighlightPush.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.goosecode.v2.app.source.ide.HighlightPush;
  return proto.goosecode.v2.app.source.ide.HighlightPush.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.goosecode.v2.app.source.ide.HighlightPush} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.goosecode.v2.app.source.ide.HighlightPush}
 */
proto.goosecode.v2.app.source.ide.HighlightPush.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.goosecode.v2.app.source.ide.Range;
      reader.readMessage(value,proto.goosecode.v2.app.source.ide.Range.deserializeBinaryFromReader);
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
proto.goosecode.v2.app.source.ide.HighlightPush.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.goosecode.v2.app.source.ide.HighlightPush.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.goosecode.v2.app.source.ide.HighlightPush} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.HighlightPush.serializeBinaryToWriter = function(message, writer) {
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
      proto.goosecode.v2.app.source.ide.Range.serializeBinaryToWriter
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
proto.goosecode.v2.app.source.ide.HighlightPush.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.goosecode.v2.app.source.ide.HighlightPush} returns this
 */
proto.goosecode.v2.app.source.ide.HighlightPush.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Range range = 2;
 * @return {?proto.goosecode.v2.app.source.ide.Range}
 */
proto.goosecode.v2.app.source.ide.HighlightPush.prototype.getRange = function() {
  return /** @type{?proto.goosecode.v2.app.source.ide.Range} */ (
    jspb.Message.getWrapperField(this, proto.goosecode.v2.app.source.ide.Range, 2));
};


/**
 * @param {?proto.goosecode.v2.app.source.ide.Range|undefined} value
 * @return {!proto.goosecode.v2.app.source.ide.HighlightPush} returns this
*/
proto.goosecode.v2.app.source.ide.HighlightPush.prototype.setRange = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.goosecode.v2.app.source.ide.HighlightPush} returns this
 */
proto.goosecode.v2.app.source.ide.HighlightPush.prototype.clearRange = function() {
  return this.setRange(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.goosecode.v2.app.source.ide.HighlightPush.prototype.hasRange = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 color = 3;
 * @return {number}
 */
proto.goosecode.v2.app.source.ide.HighlightPush.prototype.getColor = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.goosecode.v2.app.source.ide.HighlightPush} returns this
 */
proto.goosecode.v2.app.source.ide.HighlightPush.prototype.setColor = function(value) {
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
proto.goosecode.v2.app.source.ide.LocationWithContext.prototype.toObject = function(opt_includeInstance) {
  return proto.goosecode.v2.app.source.ide.LocationWithContext.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.goosecode.v2.app.source.ide.LocationWithContext} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.LocationWithContext.toObject = function(includeInstance, msg) {
  var f, obj = {
    location: (f = msg.getLocation()) && proto.goosecode.v2.app.source.ide.Location.toObject(includeInstance, f),
    context: (f = msg.getContext()) && proto.goosecode.v2.app.source.ide.SnippetContext.toObject(includeInstance, f)
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
 * @return {!proto.goosecode.v2.app.source.ide.LocationWithContext}
 */
proto.goosecode.v2.app.source.ide.LocationWithContext.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.goosecode.v2.app.source.ide.LocationWithContext;
  return proto.goosecode.v2.app.source.ide.LocationWithContext.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.goosecode.v2.app.source.ide.LocationWithContext} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.goosecode.v2.app.source.ide.LocationWithContext}
 */
proto.goosecode.v2.app.source.ide.LocationWithContext.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.goosecode.v2.app.source.ide.Location;
      reader.readMessage(value,proto.goosecode.v2.app.source.ide.Location.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    case 2:
      var value = new proto.goosecode.v2.app.source.ide.SnippetContext;
      reader.readMessage(value,proto.goosecode.v2.app.source.ide.SnippetContext.deserializeBinaryFromReader);
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
proto.goosecode.v2.app.source.ide.LocationWithContext.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.goosecode.v2.app.source.ide.LocationWithContext.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.goosecode.v2.app.source.ide.LocationWithContext} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.LocationWithContext.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.goosecode.v2.app.source.ide.Location.serializeBinaryToWriter
    );
  }
  f = message.getContext();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.goosecode.v2.app.source.ide.SnippetContext.serializeBinaryToWriter
    );
  }
};


/**
 * optional Location location = 1;
 * @return {?proto.goosecode.v2.app.source.ide.Location}
 */
proto.goosecode.v2.app.source.ide.LocationWithContext.prototype.getLocation = function() {
  return /** @type{?proto.goosecode.v2.app.source.ide.Location} */ (
    jspb.Message.getWrapperField(this, proto.goosecode.v2.app.source.ide.Location, 1));
};


/**
 * @param {?proto.goosecode.v2.app.source.ide.Location|undefined} value
 * @return {!proto.goosecode.v2.app.source.ide.LocationWithContext} returns this
*/
proto.goosecode.v2.app.source.ide.LocationWithContext.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.goosecode.v2.app.source.ide.LocationWithContext} returns this
 */
proto.goosecode.v2.app.source.ide.LocationWithContext.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.goosecode.v2.app.source.ide.LocationWithContext.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional SnippetContext context = 2;
 * @return {?proto.goosecode.v2.app.source.ide.SnippetContext}
 */
proto.goosecode.v2.app.source.ide.LocationWithContext.prototype.getContext = function() {
  return /** @type{?proto.goosecode.v2.app.source.ide.SnippetContext} */ (
    jspb.Message.getWrapperField(this, proto.goosecode.v2.app.source.ide.SnippetContext, 2));
};


/**
 * @param {?proto.goosecode.v2.app.source.ide.SnippetContext|undefined} value
 * @return {!proto.goosecode.v2.app.source.ide.LocationWithContext} returns this
*/
proto.goosecode.v2.app.source.ide.LocationWithContext.prototype.setContext = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.goosecode.v2.app.source.ide.LocationWithContext} returns this
 */
proto.goosecode.v2.app.source.ide.LocationWithContext.prototype.clearContext = function() {
  return this.setContext(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.goosecode.v2.app.source.ide.LocationWithContext.prototype.hasContext = function() {
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
proto.goosecode.v2.app.source.ide.DefinitionFollow.prototype.toObject = function(opt_includeInstance) {
  return proto.goosecode.v2.app.source.ide.DefinitionFollow.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.goosecode.v2.app.source.ide.DefinitionFollow} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.DefinitionFollow.toObject = function(includeInstance, msg) {
  var f, obj = {
    from: (f = msg.getFrom()) && proto.goosecode.v2.app.source.ide.LocationWithContext.toObject(includeInstance, f),
    to: (f = msg.getTo()) && proto.goosecode.v2.app.source.ide.LocationWithContext.toObject(includeInstance, f)
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
 * @return {!proto.goosecode.v2.app.source.ide.DefinitionFollow}
 */
proto.goosecode.v2.app.source.ide.DefinitionFollow.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.goosecode.v2.app.source.ide.DefinitionFollow;
  return proto.goosecode.v2.app.source.ide.DefinitionFollow.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.goosecode.v2.app.source.ide.DefinitionFollow} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.goosecode.v2.app.source.ide.DefinitionFollow}
 */
proto.goosecode.v2.app.source.ide.DefinitionFollow.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.goosecode.v2.app.source.ide.LocationWithContext;
      reader.readMessage(value,proto.goosecode.v2.app.source.ide.LocationWithContext.deserializeBinaryFromReader);
      msg.setFrom(value);
      break;
    case 2:
      var value = new proto.goosecode.v2.app.source.ide.LocationWithContext;
      reader.readMessage(value,proto.goosecode.v2.app.source.ide.LocationWithContext.deserializeBinaryFromReader);
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
proto.goosecode.v2.app.source.ide.DefinitionFollow.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.goosecode.v2.app.source.ide.DefinitionFollow.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.goosecode.v2.app.source.ide.DefinitionFollow} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.DefinitionFollow.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFrom();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.goosecode.v2.app.source.ide.LocationWithContext.serializeBinaryToWriter
    );
  }
  f = message.getTo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.goosecode.v2.app.source.ide.LocationWithContext.serializeBinaryToWriter
    );
  }
};


/**
 * optional LocationWithContext from = 1;
 * @return {?proto.goosecode.v2.app.source.ide.LocationWithContext}
 */
proto.goosecode.v2.app.source.ide.DefinitionFollow.prototype.getFrom = function() {
  return /** @type{?proto.goosecode.v2.app.source.ide.LocationWithContext} */ (
    jspb.Message.getWrapperField(this, proto.goosecode.v2.app.source.ide.LocationWithContext, 1));
};


/**
 * @param {?proto.goosecode.v2.app.source.ide.LocationWithContext|undefined} value
 * @return {!proto.goosecode.v2.app.source.ide.DefinitionFollow} returns this
*/
proto.goosecode.v2.app.source.ide.DefinitionFollow.prototype.setFrom = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.goosecode.v2.app.source.ide.DefinitionFollow} returns this
 */
proto.goosecode.v2.app.source.ide.DefinitionFollow.prototype.clearFrom = function() {
  return this.setFrom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.goosecode.v2.app.source.ide.DefinitionFollow.prototype.hasFrom = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional LocationWithContext to = 2;
 * @return {?proto.goosecode.v2.app.source.ide.LocationWithContext}
 */
proto.goosecode.v2.app.source.ide.DefinitionFollow.prototype.getTo = function() {
  return /** @type{?proto.goosecode.v2.app.source.ide.LocationWithContext} */ (
    jspb.Message.getWrapperField(this, proto.goosecode.v2.app.source.ide.LocationWithContext, 2));
};


/**
 * @param {?proto.goosecode.v2.app.source.ide.LocationWithContext|undefined} value
 * @return {!proto.goosecode.v2.app.source.ide.DefinitionFollow} returns this
*/
proto.goosecode.v2.app.source.ide.DefinitionFollow.prototype.setTo = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.goosecode.v2.app.source.ide.DefinitionFollow} returns this
 */
proto.goosecode.v2.app.source.ide.DefinitionFollow.prototype.clearTo = function() {
  return this.setTo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.goosecode.v2.app.source.ide.DefinitionFollow.prototype.hasTo = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.goosecode.v2.app.source.ide.ReferenceFollow.repeatedFields_ = [2];



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
proto.goosecode.v2.app.source.ide.ReferenceFollow.prototype.toObject = function(opt_includeInstance) {
  return proto.goosecode.v2.app.source.ide.ReferenceFollow.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.goosecode.v2.app.source.ide.ReferenceFollow} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.ReferenceFollow.toObject = function(includeInstance, msg) {
  var f, obj = {
    from: (f = msg.getFrom()) && proto.goosecode.v2.app.source.ide.LocationWithContext.toObject(includeInstance, f),
    toList: jspb.Message.toObjectList(msg.getToList(),
    proto.goosecode.v2.app.source.ide.LocationWithContext.toObject, includeInstance)
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
 * @return {!proto.goosecode.v2.app.source.ide.ReferenceFollow}
 */
proto.goosecode.v2.app.source.ide.ReferenceFollow.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.goosecode.v2.app.source.ide.ReferenceFollow;
  return proto.goosecode.v2.app.source.ide.ReferenceFollow.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.goosecode.v2.app.source.ide.ReferenceFollow} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.goosecode.v2.app.source.ide.ReferenceFollow}
 */
proto.goosecode.v2.app.source.ide.ReferenceFollow.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.goosecode.v2.app.source.ide.LocationWithContext;
      reader.readMessage(value,proto.goosecode.v2.app.source.ide.LocationWithContext.deserializeBinaryFromReader);
      msg.setFrom(value);
      break;
    case 2:
      var value = new proto.goosecode.v2.app.source.ide.LocationWithContext;
      reader.readMessage(value,proto.goosecode.v2.app.source.ide.LocationWithContext.deserializeBinaryFromReader);
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
proto.goosecode.v2.app.source.ide.ReferenceFollow.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.goosecode.v2.app.source.ide.ReferenceFollow.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.goosecode.v2.app.source.ide.ReferenceFollow} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.ReferenceFollow.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFrom();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.goosecode.v2.app.source.ide.LocationWithContext.serializeBinaryToWriter
    );
  }
  f = message.getToList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.goosecode.v2.app.source.ide.LocationWithContext.serializeBinaryToWriter
    );
  }
};


/**
 * optional LocationWithContext from = 1;
 * @return {?proto.goosecode.v2.app.source.ide.LocationWithContext}
 */
proto.goosecode.v2.app.source.ide.ReferenceFollow.prototype.getFrom = function() {
  return /** @type{?proto.goosecode.v2.app.source.ide.LocationWithContext} */ (
    jspb.Message.getWrapperField(this, proto.goosecode.v2.app.source.ide.LocationWithContext, 1));
};


/**
 * @param {?proto.goosecode.v2.app.source.ide.LocationWithContext|undefined} value
 * @return {!proto.goosecode.v2.app.source.ide.ReferenceFollow} returns this
*/
proto.goosecode.v2.app.source.ide.ReferenceFollow.prototype.setFrom = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.goosecode.v2.app.source.ide.ReferenceFollow} returns this
 */
proto.goosecode.v2.app.source.ide.ReferenceFollow.prototype.clearFrom = function() {
  return this.setFrom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.goosecode.v2.app.source.ide.ReferenceFollow.prototype.hasFrom = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated LocationWithContext to = 2;
 * @return {!Array<!proto.goosecode.v2.app.source.ide.LocationWithContext>}
 */
proto.goosecode.v2.app.source.ide.ReferenceFollow.prototype.getToList = function() {
  return /** @type{!Array<!proto.goosecode.v2.app.source.ide.LocationWithContext>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.goosecode.v2.app.source.ide.LocationWithContext, 2));
};


/**
 * @param {!Array<!proto.goosecode.v2.app.source.ide.LocationWithContext>} value
 * @return {!proto.goosecode.v2.app.source.ide.ReferenceFollow} returns this
*/
proto.goosecode.v2.app.source.ide.ReferenceFollow.prototype.setToList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.goosecode.v2.app.source.ide.LocationWithContext=} opt_value
 * @param {number=} opt_index
 * @return {!proto.goosecode.v2.app.source.ide.LocationWithContext}
 */
proto.goosecode.v2.app.source.ide.ReferenceFollow.prototype.addTo = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.goosecode.v2.app.source.ide.LocationWithContext, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.goosecode.v2.app.source.ide.ReferenceFollow} returns this
 */
proto.goosecode.v2.app.source.ide.ReferenceFollow.prototype.clearToList = function() {
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
proto.goosecode.v2.app.source.ide.FollowPush.oneofGroups_ = [[10,11]];

/**
 * @enum {number}
 */
proto.goosecode.v2.app.source.ide.FollowPush.DataCase = {
  DATA_NOT_SET: 0,
  DEFINITION: 10,
  REFERENCE: 11
};

/**
 * @return {proto.goosecode.v2.app.source.ide.FollowPush.DataCase}
 */
proto.goosecode.v2.app.source.ide.FollowPush.prototype.getDataCase = function() {
  return /** @type {proto.goosecode.v2.app.source.ide.FollowPush.DataCase} */(jspb.Message.computeOneofCase(this, proto.goosecode.v2.app.source.ide.FollowPush.oneofGroups_[0]));
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
proto.goosecode.v2.app.source.ide.FollowPush.prototype.toObject = function(opt_includeInstance) {
  return proto.goosecode.v2.app.source.ide.FollowPush.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.goosecode.v2.app.source.ide.FollowPush} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.FollowPush.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    definition: (f = msg.getDefinition()) && proto.goosecode.v2.app.source.ide.DefinitionFollow.toObject(includeInstance, f),
    reference: (f = msg.getReference()) && proto.goosecode.v2.app.source.ide.ReferenceFollow.toObject(includeInstance, f)
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
 * @return {!proto.goosecode.v2.app.source.ide.FollowPush}
 */
proto.goosecode.v2.app.source.ide.FollowPush.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.goosecode.v2.app.source.ide.FollowPush;
  return proto.goosecode.v2.app.source.ide.FollowPush.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.goosecode.v2.app.source.ide.FollowPush} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.goosecode.v2.app.source.ide.FollowPush}
 */
proto.goosecode.v2.app.source.ide.FollowPush.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.goosecode.v2.app.source.ide.FollowType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 10:
      var value = new proto.goosecode.v2.app.source.ide.DefinitionFollow;
      reader.readMessage(value,proto.goosecode.v2.app.source.ide.DefinitionFollow.deserializeBinaryFromReader);
      msg.setDefinition(value);
      break;
    case 11:
      var value = new proto.goosecode.v2.app.source.ide.ReferenceFollow;
      reader.readMessage(value,proto.goosecode.v2.app.source.ide.ReferenceFollow.deserializeBinaryFromReader);
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
proto.goosecode.v2.app.source.ide.FollowPush.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.goosecode.v2.app.source.ide.FollowPush.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.goosecode.v2.app.source.ide.FollowPush} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.FollowPush.serializeBinaryToWriter = function(message, writer) {
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
      proto.goosecode.v2.app.source.ide.DefinitionFollow.serializeBinaryToWriter
    );
  }
  f = message.getReference();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.goosecode.v2.app.source.ide.ReferenceFollow.serializeBinaryToWriter
    );
  }
};


/**
 * optional FollowType type = 1;
 * @return {!proto.goosecode.v2.app.source.ide.FollowType}
 */
proto.goosecode.v2.app.source.ide.FollowPush.prototype.getType = function() {
  return /** @type {!proto.goosecode.v2.app.source.ide.FollowType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.goosecode.v2.app.source.ide.FollowType} value
 * @return {!proto.goosecode.v2.app.source.ide.FollowPush} returns this
 */
proto.goosecode.v2.app.source.ide.FollowPush.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional DefinitionFollow definition = 10;
 * @return {?proto.goosecode.v2.app.source.ide.DefinitionFollow}
 */
proto.goosecode.v2.app.source.ide.FollowPush.prototype.getDefinition = function() {
  return /** @type{?proto.goosecode.v2.app.source.ide.DefinitionFollow} */ (
    jspb.Message.getWrapperField(this, proto.goosecode.v2.app.source.ide.DefinitionFollow, 10));
};


/**
 * @param {?proto.goosecode.v2.app.source.ide.DefinitionFollow|undefined} value
 * @return {!proto.goosecode.v2.app.source.ide.FollowPush} returns this
*/
proto.goosecode.v2.app.source.ide.FollowPush.prototype.setDefinition = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.goosecode.v2.app.source.ide.FollowPush.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.goosecode.v2.app.source.ide.FollowPush} returns this
 */
proto.goosecode.v2.app.source.ide.FollowPush.prototype.clearDefinition = function() {
  return this.setDefinition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.goosecode.v2.app.source.ide.FollowPush.prototype.hasDefinition = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional ReferenceFollow reference = 11;
 * @return {?proto.goosecode.v2.app.source.ide.ReferenceFollow}
 */
proto.goosecode.v2.app.source.ide.FollowPush.prototype.getReference = function() {
  return /** @type{?proto.goosecode.v2.app.source.ide.ReferenceFollow} */ (
    jspb.Message.getWrapperField(this, proto.goosecode.v2.app.source.ide.ReferenceFollow, 11));
};


/**
 * @param {?proto.goosecode.v2.app.source.ide.ReferenceFollow|undefined} value
 * @return {!proto.goosecode.v2.app.source.ide.FollowPush} returns this
*/
proto.goosecode.v2.app.source.ide.FollowPush.prototype.setReference = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.goosecode.v2.app.source.ide.FollowPush.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.goosecode.v2.app.source.ide.FollowPush} returns this
 */
proto.goosecode.v2.app.source.ide.FollowPush.prototype.clearReference = function() {
  return this.setReference(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.goosecode.v2.app.source.ide.FollowPush.prototype.hasReference = function() {
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
proto.goosecode.v2.app.source.ide.WorkspaceDetails.prototype.toObject = function(opt_includeInstance) {
  return proto.goosecode.v2.app.source.ide.WorkspaceDetails.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.goosecode.v2.app.source.ide.WorkspaceDetails} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.WorkspaceDetails.toObject = function(includeInstance, msg) {
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
 * @return {!proto.goosecode.v2.app.source.ide.WorkspaceDetails}
 */
proto.goosecode.v2.app.source.ide.WorkspaceDetails.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.goosecode.v2.app.source.ide.WorkspaceDetails;
  return proto.goosecode.v2.app.source.ide.WorkspaceDetails.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.goosecode.v2.app.source.ide.WorkspaceDetails} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.goosecode.v2.app.source.ide.WorkspaceDetails}
 */
proto.goosecode.v2.app.source.ide.WorkspaceDetails.deserializeBinaryFromReader = function(msg, reader) {
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
proto.goosecode.v2.app.source.ide.WorkspaceDetails.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.goosecode.v2.app.source.ide.WorkspaceDetails.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.goosecode.v2.app.source.ide.WorkspaceDetails} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.WorkspaceDetails.serializeBinaryToWriter = function(message, writer) {
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
proto.goosecode.v2.app.source.ide.WorkspaceDetails.prototype.getRepositorySnapshotFingerprint = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.goosecode.v2.app.source.ide.WorkspaceDetails} returns this
 */
proto.goosecode.v2.app.source.ide.WorkspaceDetails.prototype.setRepositorySnapshotFingerprint = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string workspace_root = 2;
 * @return {string}
 */
proto.goosecode.v2.app.source.ide.WorkspaceDetails.prototype.getWorkspaceRoot = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.goosecode.v2.app.source.ide.WorkspaceDetails} returns this
 */
proto.goosecode.v2.app.source.ide.WorkspaceDetails.prototype.setWorkspaceRoot = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool deleted = 3;
 * @return {boolean}
 */
proto.goosecode.v2.app.source.ide.WorkspaceDetails.prototype.getDeleted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.goosecode.v2.app.source.ide.WorkspaceDetails} returns this
 */
proto.goosecode.v2.app.source.ide.WorkspaceDetails.prototype.setDeleted = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.goosecode.v2.app.source.ide.WorkspacesPush.repeatedFields_ = [1];



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
proto.goosecode.v2.app.source.ide.WorkspacesPush.prototype.toObject = function(opt_includeInstance) {
  return proto.goosecode.v2.app.source.ide.WorkspacesPush.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.goosecode.v2.app.source.ide.WorkspacesPush} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.WorkspacesPush.toObject = function(includeInstance, msg) {
  var f, obj = {
    workspacesList: jspb.Message.toObjectList(msg.getWorkspacesList(),
    proto.goosecode.v2.app.source.ide.WorkspaceDetails.toObject, includeInstance)
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
 * @return {!proto.goosecode.v2.app.source.ide.WorkspacesPush}
 */
proto.goosecode.v2.app.source.ide.WorkspacesPush.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.goosecode.v2.app.source.ide.WorkspacesPush;
  return proto.goosecode.v2.app.source.ide.WorkspacesPush.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.goosecode.v2.app.source.ide.WorkspacesPush} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.goosecode.v2.app.source.ide.WorkspacesPush}
 */
proto.goosecode.v2.app.source.ide.WorkspacesPush.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.goosecode.v2.app.source.ide.WorkspaceDetails;
      reader.readMessage(value,proto.goosecode.v2.app.source.ide.WorkspaceDetails.deserializeBinaryFromReader);
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
proto.goosecode.v2.app.source.ide.WorkspacesPush.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.goosecode.v2.app.source.ide.WorkspacesPush.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.goosecode.v2.app.source.ide.WorkspacesPush} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.WorkspacesPush.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWorkspacesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.goosecode.v2.app.source.ide.WorkspaceDetails.serializeBinaryToWriter
    );
  }
};


/**
 * repeated WorkspaceDetails workspaces = 1;
 * @return {!Array<!proto.goosecode.v2.app.source.ide.WorkspaceDetails>}
 */
proto.goosecode.v2.app.source.ide.WorkspacesPush.prototype.getWorkspacesList = function() {
  return /** @type{!Array<!proto.goosecode.v2.app.source.ide.WorkspaceDetails>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.goosecode.v2.app.source.ide.WorkspaceDetails, 1));
};


/**
 * @param {!Array<!proto.goosecode.v2.app.source.ide.WorkspaceDetails>} value
 * @return {!proto.goosecode.v2.app.source.ide.WorkspacesPush} returns this
*/
proto.goosecode.v2.app.source.ide.WorkspacesPush.prototype.setWorkspacesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.goosecode.v2.app.source.ide.WorkspaceDetails=} opt_value
 * @param {number=} opt_index
 * @return {!proto.goosecode.v2.app.source.ide.WorkspaceDetails}
 */
proto.goosecode.v2.app.source.ide.WorkspacesPush.prototype.addWorkspaces = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.goosecode.v2.app.source.ide.WorkspaceDetails, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.goosecode.v2.app.source.ide.WorkspacesPush} returns this
 */
proto.goosecode.v2.app.source.ide.WorkspacesPush.prototype.clearWorkspacesList = function() {
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
proto.goosecode.v2.app.source.ide.AppCommandPush.prototype.toObject = function(opt_includeInstance) {
  return proto.goosecode.v2.app.source.ide.AppCommandPush.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.goosecode.v2.app.source.ide.AppCommandPush} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.AppCommandPush.toObject = function(includeInstance, msg) {
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
 * @return {!proto.goosecode.v2.app.source.ide.AppCommandPush}
 */
proto.goosecode.v2.app.source.ide.AppCommandPush.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.goosecode.v2.app.source.ide.AppCommandPush;
  return proto.goosecode.v2.app.source.ide.AppCommandPush.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.goosecode.v2.app.source.ide.AppCommandPush} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.goosecode.v2.app.source.ide.AppCommandPush}
 */
proto.goosecode.v2.app.source.ide.AppCommandPush.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.goosecode.v2.app.source.ide.AppCommandType} */ (reader.readEnum());
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
proto.goosecode.v2.app.source.ide.AppCommandPush.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.goosecode.v2.app.source.ide.AppCommandPush.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.goosecode.v2.app.source.ide.AppCommandPush} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.AppCommandPush.serializeBinaryToWriter = function(message, writer) {
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
 * @return {!proto.goosecode.v2.app.source.ide.AppCommandType}
 */
proto.goosecode.v2.app.source.ide.AppCommandPush.prototype.getType = function() {
  return /** @type {!proto.goosecode.v2.app.source.ide.AppCommandType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.goosecode.v2.app.source.ide.AppCommandType} value
 * @return {!proto.goosecode.v2.app.source.ide.AppCommandPush} returns this
 */
proto.goosecode.v2.app.source.ide.AppCommandPush.prototype.setType = function(value) {
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
proto.goosecode.v2.app.source.ide.RegeneratePush.prototype.toObject = function(opt_includeInstance) {
  return proto.goosecode.v2.app.source.ide.RegeneratePush.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.goosecode.v2.app.source.ide.RegeneratePush} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.RegeneratePush.toObject = function(includeInstance, msg) {
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
 * @return {!proto.goosecode.v2.app.source.ide.RegeneratePush}
 */
proto.goosecode.v2.app.source.ide.RegeneratePush.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.goosecode.v2.app.source.ide.RegeneratePush;
  return proto.goosecode.v2.app.source.ide.RegeneratePush.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.goosecode.v2.app.source.ide.RegeneratePush} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.goosecode.v2.app.source.ide.RegeneratePush}
 */
proto.goosecode.v2.app.source.ide.RegeneratePush.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.goosecode.v2.app.source.ide.RegenerateType} */ (reader.readEnum());
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
proto.goosecode.v2.app.source.ide.RegeneratePush.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.goosecode.v2.app.source.ide.RegeneratePush.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.goosecode.v2.app.source.ide.RegeneratePush} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.RegeneratePush.serializeBinaryToWriter = function(message, writer) {
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
 * @return {!proto.goosecode.v2.app.source.ide.RegenerateType}
 */
proto.goosecode.v2.app.source.ide.RegeneratePush.prototype.getType = function() {
  return /** @type {!proto.goosecode.v2.app.source.ide.RegenerateType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.goosecode.v2.app.source.ide.RegenerateType} value
 * @return {!proto.goosecode.v2.app.source.ide.RegeneratePush} returns this
 */
proto.goosecode.v2.app.source.ide.RegeneratePush.prototype.setType = function(value) {
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
proto.goosecode.v2.app.source.ide.ActiveSessionPush.oneofGroups_ = [[10]];

/**
 * @enum {number}
 */
proto.goosecode.v2.app.source.ide.ActiveSessionPush.DataCase = {
  DATA_NOT_SET: 0,
  REGENERATE: 10
};

/**
 * @return {proto.goosecode.v2.app.source.ide.ActiveSessionPush.DataCase}
 */
proto.goosecode.v2.app.source.ide.ActiveSessionPush.prototype.getDataCase = function() {
  return /** @type {proto.goosecode.v2.app.source.ide.ActiveSessionPush.DataCase} */(jspb.Message.computeOneofCase(this, proto.goosecode.v2.app.source.ide.ActiveSessionPush.oneofGroups_[0]));
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
proto.goosecode.v2.app.source.ide.ActiveSessionPush.prototype.toObject = function(opt_includeInstance) {
  return proto.goosecode.v2.app.source.ide.ActiveSessionPush.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.goosecode.v2.app.source.ide.ActiveSessionPush} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.ActiveSessionPush.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    regenerate: (f = msg.getRegenerate()) && proto.goosecode.v2.app.source.ide.RegeneratePush.toObject(includeInstance, f)
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
 * @return {!proto.goosecode.v2.app.source.ide.ActiveSessionPush}
 */
proto.goosecode.v2.app.source.ide.ActiveSessionPush.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.goosecode.v2.app.source.ide.ActiveSessionPush;
  return proto.goosecode.v2.app.source.ide.ActiveSessionPush.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.goosecode.v2.app.source.ide.ActiveSessionPush} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.goosecode.v2.app.source.ide.ActiveSessionPush}
 */
proto.goosecode.v2.app.source.ide.ActiveSessionPush.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.goosecode.v2.app.source.ide.ActiveSessionType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 10:
      var value = new proto.goosecode.v2.app.source.ide.RegeneratePush;
      reader.readMessage(value,proto.goosecode.v2.app.source.ide.RegeneratePush.deserializeBinaryFromReader);
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
proto.goosecode.v2.app.source.ide.ActiveSessionPush.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.goosecode.v2.app.source.ide.ActiveSessionPush.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.goosecode.v2.app.source.ide.ActiveSessionPush} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.ActiveSessionPush.serializeBinaryToWriter = function(message, writer) {
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
      proto.goosecode.v2.app.source.ide.RegeneratePush.serializeBinaryToWriter
    );
  }
};


/**
 * optional ActiveSessionType type = 1;
 * @return {!proto.goosecode.v2.app.source.ide.ActiveSessionType}
 */
proto.goosecode.v2.app.source.ide.ActiveSessionPush.prototype.getType = function() {
  return /** @type {!proto.goosecode.v2.app.source.ide.ActiveSessionType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.goosecode.v2.app.source.ide.ActiveSessionType} value
 * @return {!proto.goosecode.v2.app.source.ide.ActiveSessionPush} returns this
 */
proto.goosecode.v2.app.source.ide.ActiveSessionPush.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional RegeneratePush regenerate = 10;
 * @return {?proto.goosecode.v2.app.source.ide.RegeneratePush}
 */
proto.goosecode.v2.app.source.ide.ActiveSessionPush.prototype.getRegenerate = function() {
  return /** @type{?proto.goosecode.v2.app.source.ide.RegeneratePush} */ (
    jspb.Message.getWrapperField(this, proto.goosecode.v2.app.source.ide.RegeneratePush, 10));
};


/**
 * @param {?proto.goosecode.v2.app.source.ide.RegeneratePush|undefined} value
 * @return {!proto.goosecode.v2.app.source.ide.ActiveSessionPush} returns this
*/
proto.goosecode.v2.app.source.ide.ActiveSessionPush.prototype.setRegenerate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.goosecode.v2.app.source.ide.ActiveSessionPush.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.goosecode.v2.app.source.ide.ActiveSessionPush} returns this
 */
proto.goosecode.v2.app.source.ide.ActiveSessionPush.prototype.clearRegenerate = function() {
  return this.setRegenerate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.goosecode.v2.app.source.ide.ActiveSessionPush.prototype.hasRegenerate = function() {
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
proto.goosecode.v2.app.source.ide.VersionControlInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.goosecode.v2.app.source.ide.VersionControlInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.goosecode.v2.app.source.ide.VersionControlInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.VersionControlInfo.toObject = function(includeInstance, msg) {
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
 * @return {!proto.goosecode.v2.app.source.ide.VersionControlInfo}
 */
proto.goosecode.v2.app.source.ide.VersionControlInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.goosecode.v2.app.source.ide.VersionControlInfo;
  return proto.goosecode.v2.app.source.ide.VersionControlInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.goosecode.v2.app.source.ide.VersionControlInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.goosecode.v2.app.source.ide.VersionControlInfo}
 */
proto.goosecode.v2.app.source.ide.VersionControlInfo.deserializeBinaryFromReader = function(msg, reader) {
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
proto.goosecode.v2.app.source.ide.VersionControlInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.goosecode.v2.app.source.ide.VersionControlInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.goosecode.v2.app.source.ide.VersionControlInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.VersionControlInfo.serializeBinaryToWriter = function(message, writer) {
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
proto.goosecode.v2.app.source.ide.VersionControlInfo.prototype.getRepositoryFullname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.goosecode.v2.app.source.ide.VersionControlInfo} returns this
 */
proto.goosecode.v2.app.source.ide.VersionControlInfo.prototype.setRepositoryFullname = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string branch = 2;
 * @return {string}
 */
proto.goosecode.v2.app.source.ide.VersionControlInfo.prototype.getBranch = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.goosecode.v2.app.source.ide.VersionControlInfo} returns this
 */
proto.goosecode.v2.app.source.ide.VersionControlInfo.prototype.setBranch = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string commit = 3;
 * @return {string}
 */
proto.goosecode.v2.app.source.ide.VersionControlInfo.prototype.getCommit = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.goosecode.v2.app.source.ide.VersionControlInfo} returns this
 */
proto.goosecode.v2.app.source.ide.VersionControlInfo.prototype.setCommit = function(value) {
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
proto.goosecode.v2.app.source.ide.FileCommandPush.oneofGroups_ = [[10,11,12,13]];

/**
 * @enum {number}
 */
proto.goosecode.v2.app.source.ide.FileCommandPush.DataCase = {
  DATA_NOT_SET: 0,
  OPEN_FILE: 10,
  BOOKMARK: 11,
  HIGHLIGHT: 12,
  FOLLOW: 13
};

/**
 * @return {proto.goosecode.v2.app.source.ide.FileCommandPush.DataCase}
 */
proto.goosecode.v2.app.source.ide.FileCommandPush.prototype.getDataCase = function() {
  return /** @type {proto.goosecode.v2.app.source.ide.FileCommandPush.DataCase} */(jspb.Message.computeOneofCase(this, proto.goosecode.v2.app.source.ide.FileCommandPush.oneofGroups_[0]));
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
proto.goosecode.v2.app.source.ide.FileCommandPush.prototype.toObject = function(opt_includeInstance) {
  return proto.goosecode.v2.app.source.ide.FileCommandPush.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.goosecode.v2.app.source.ide.FileCommandPush} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.FileCommandPush.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    workspaceRoot: jspb.Message.getFieldWithDefault(msg, 2, ""),
    versionControl: (f = msg.getVersionControl()) && proto.goosecode.v2.app.source.ide.VersionControlInfo.toObject(includeInstance, f),
    openFile: (f = msg.getOpenFile()) && proto.goosecode.v2.app.source.ide.OpenPush.toObject(includeInstance, f),
    bookmark: (f = msg.getBookmark()) && proto.goosecode.v2.app.source.ide.BookmarkPush.toObject(includeInstance, f),
    highlight: (f = msg.getHighlight()) && proto.goosecode.v2.app.source.ide.HighlightPush.toObject(includeInstance, f),
    follow: (f = msg.getFollow()) && proto.goosecode.v2.app.source.ide.FollowPush.toObject(includeInstance, f)
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
 * @return {!proto.goosecode.v2.app.source.ide.FileCommandPush}
 */
proto.goosecode.v2.app.source.ide.FileCommandPush.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.goosecode.v2.app.source.ide.FileCommandPush;
  return proto.goosecode.v2.app.source.ide.FileCommandPush.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.goosecode.v2.app.source.ide.FileCommandPush} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.goosecode.v2.app.source.ide.FileCommandPush}
 */
proto.goosecode.v2.app.source.ide.FileCommandPush.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.goosecode.v2.app.source.ide.FileCommandType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorkspaceRoot(value);
      break;
    case 3:
      var value = new proto.goosecode.v2.app.source.ide.VersionControlInfo;
      reader.readMessage(value,proto.goosecode.v2.app.source.ide.VersionControlInfo.deserializeBinaryFromReader);
      msg.setVersionControl(value);
      break;
    case 10:
      var value = new proto.goosecode.v2.app.source.ide.OpenPush;
      reader.readMessage(value,proto.goosecode.v2.app.source.ide.OpenPush.deserializeBinaryFromReader);
      msg.setOpenFile(value);
      break;
    case 11:
      var value = new proto.goosecode.v2.app.source.ide.BookmarkPush;
      reader.readMessage(value,proto.goosecode.v2.app.source.ide.BookmarkPush.deserializeBinaryFromReader);
      msg.setBookmark(value);
      break;
    case 12:
      var value = new proto.goosecode.v2.app.source.ide.HighlightPush;
      reader.readMessage(value,proto.goosecode.v2.app.source.ide.HighlightPush.deserializeBinaryFromReader);
      msg.setHighlight(value);
      break;
    case 13:
      var value = new proto.goosecode.v2.app.source.ide.FollowPush;
      reader.readMessage(value,proto.goosecode.v2.app.source.ide.FollowPush.deserializeBinaryFromReader);
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
proto.goosecode.v2.app.source.ide.FileCommandPush.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.goosecode.v2.app.source.ide.FileCommandPush.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.goosecode.v2.app.source.ide.FileCommandPush} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.FileCommandPush.serializeBinaryToWriter = function(message, writer) {
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
      proto.goosecode.v2.app.source.ide.VersionControlInfo.serializeBinaryToWriter
    );
  }
  f = message.getOpenFile();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.goosecode.v2.app.source.ide.OpenPush.serializeBinaryToWriter
    );
  }
  f = message.getBookmark();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.goosecode.v2.app.source.ide.BookmarkPush.serializeBinaryToWriter
    );
  }
  f = message.getHighlight();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.goosecode.v2.app.source.ide.HighlightPush.serializeBinaryToWriter
    );
  }
  f = message.getFollow();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.goosecode.v2.app.source.ide.FollowPush.serializeBinaryToWriter
    );
  }
};


/**
 * optional FileCommandType type = 1;
 * @return {!proto.goosecode.v2.app.source.ide.FileCommandType}
 */
proto.goosecode.v2.app.source.ide.FileCommandPush.prototype.getType = function() {
  return /** @type {!proto.goosecode.v2.app.source.ide.FileCommandType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.goosecode.v2.app.source.ide.FileCommandType} value
 * @return {!proto.goosecode.v2.app.source.ide.FileCommandPush} returns this
 */
proto.goosecode.v2.app.source.ide.FileCommandPush.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string workspace_root = 2;
 * @return {string}
 */
proto.goosecode.v2.app.source.ide.FileCommandPush.prototype.getWorkspaceRoot = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.goosecode.v2.app.source.ide.FileCommandPush} returns this
 */
proto.goosecode.v2.app.source.ide.FileCommandPush.prototype.setWorkspaceRoot = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional VersionControlInfo version_control = 3;
 * @return {?proto.goosecode.v2.app.source.ide.VersionControlInfo}
 */
proto.goosecode.v2.app.source.ide.FileCommandPush.prototype.getVersionControl = function() {
  return /** @type{?proto.goosecode.v2.app.source.ide.VersionControlInfo} */ (
    jspb.Message.getWrapperField(this, proto.goosecode.v2.app.source.ide.VersionControlInfo, 3));
};


/**
 * @param {?proto.goosecode.v2.app.source.ide.VersionControlInfo|undefined} value
 * @return {!proto.goosecode.v2.app.source.ide.FileCommandPush} returns this
*/
proto.goosecode.v2.app.source.ide.FileCommandPush.prototype.setVersionControl = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.goosecode.v2.app.source.ide.FileCommandPush} returns this
 */
proto.goosecode.v2.app.source.ide.FileCommandPush.prototype.clearVersionControl = function() {
  return this.setVersionControl(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.goosecode.v2.app.source.ide.FileCommandPush.prototype.hasVersionControl = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional OpenPush open_file = 10;
 * @return {?proto.goosecode.v2.app.source.ide.OpenPush}
 */
proto.goosecode.v2.app.source.ide.FileCommandPush.prototype.getOpenFile = function() {
  return /** @type{?proto.goosecode.v2.app.source.ide.OpenPush} */ (
    jspb.Message.getWrapperField(this, proto.goosecode.v2.app.source.ide.OpenPush, 10));
};


/**
 * @param {?proto.goosecode.v2.app.source.ide.OpenPush|undefined} value
 * @return {!proto.goosecode.v2.app.source.ide.FileCommandPush} returns this
*/
proto.goosecode.v2.app.source.ide.FileCommandPush.prototype.setOpenFile = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.goosecode.v2.app.source.ide.FileCommandPush.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.goosecode.v2.app.source.ide.FileCommandPush} returns this
 */
proto.goosecode.v2.app.source.ide.FileCommandPush.prototype.clearOpenFile = function() {
  return this.setOpenFile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.goosecode.v2.app.source.ide.FileCommandPush.prototype.hasOpenFile = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional BookmarkPush bookmark = 11;
 * @return {?proto.goosecode.v2.app.source.ide.BookmarkPush}
 */
proto.goosecode.v2.app.source.ide.FileCommandPush.prototype.getBookmark = function() {
  return /** @type{?proto.goosecode.v2.app.source.ide.BookmarkPush} */ (
    jspb.Message.getWrapperField(this, proto.goosecode.v2.app.source.ide.BookmarkPush, 11));
};


/**
 * @param {?proto.goosecode.v2.app.source.ide.BookmarkPush|undefined} value
 * @return {!proto.goosecode.v2.app.source.ide.FileCommandPush} returns this
*/
proto.goosecode.v2.app.source.ide.FileCommandPush.prototype.setBookmark = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.goosecode.v2.app.source.ide.FileCommandPush.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.goosecode.v2.app.source.ide.FileCommandPush} returns this
 */
proto.goosecode.v2.app.source.ide.FileCommandPush.prototype.clearBookmark = function() {
  return this.setBookmark(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.goosecode.v2.app.source.ide.FileCommandPush.prototype.hasBookmark = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional HighlightPush highlight = 12;
 * @return {?proto.goosecode.v2.app.source.ide.HighlightPush}
 */
proto.goosecode.v2.app.source.ide.FileCommandPush.prototype.getHighlight = function() {
  return /** @type{?proto.goosecode.v2.app.source.ide.HighlightPush} */ (
    jspb.Message.getWrapperField(this, proto.goosecode.v2.app.source.ide.HighlightPush, 12));
};


/**
 * @param {?proto.goosecode.v2.app.source.ide.HighlightPush|undefined} value
 * @return {!proto.goosecode.v2.app.source.ide.FileCommandPush} returns this
*/
proto.goosecode.v2.app.source.ide.FileCommandPush.prototype.setHighlight = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.goosecode.v2.app.source.ide.FileCommandPush.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.goosecode.v2.app.source.ide.FileCommandPush} returns this
 */
proto.goosecode.v2.app.source.ide.FileCommandPush.prototype.clearHighlight = function() {
  return this.setHighlight(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.goosecode.v2.app.source.ide.FileCommandPush.prototype.hasHighlight = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional FollowPush follow = 13;
 * @return {?proto.goosecode.v2.app.source.ide.FollowPush}
 */
proto.goosecode.v2.app.source.ide.FileCommandPush.prototype.getFollow = function() {
  return /** @type{?proto.goosecode.v2.app.source.ide.FollowPush} */ (
    jspb.Message.getWrapperField(this, proto.goosecode.v2.app.source.ide.FollowPush, 13));
};


/**
 * @param {?proto.goosecode.v2.app.source.ide.FollowPush|undefined} value
 * @return {!proto.goosecode.v2.app.source.ide.FileCommandPush} returns this
*/
proto.goosecode.v2.app.source.ide.FileCommandPush.prototype.setFollow = function(value) {
  return jspb.Message.setOneofWrapperField(this, 13, proto.goosecode.v2.app.source.ide.FileCommandPush.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.goosecode.v2.app.source.ide.FileCommandPush} returns this
 */
proto.goosecode.v2.app.source.ide.FileCommandPush.prototype.clearFollow = function() {
  return this.setFollow(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.goosecode.v2.app.source.ide.FileCommandPush.prototype.hasFollow = function() {
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
proto.goosecode.v2.app.source.ide.PushMessage.oneofGroups_ = [[10,11,12,13]];

/**
 * @enum {number}
 */
proto.goosecode.v2.app.source.ide.PushMessage.DataCase = {
  DATA_NOT_SET: 0,
  APP_COMMAND: 10,
  WORKSPACES: 11,
  ACTIVE_SESSION: 12,
  FILE_COMMAND: 13
};

/**
 * @return {proto.goosecode.v2.app.source.ide.PushMessage.DataCase}
 */
proto.goosecode.v2.app.source.ide.PushMessage.prototype.getDataCase = function() {
  return /** @type {proto.goosecode.v2.app.source.ide.PushMessage.DataCase} */(jspb.Message.computeOneofCase(this, proto.goosecode.v2.app.source.ide.PushMessage.oneofGroups_[0]));
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
proto.goosecode.v2.app.source.ide.PushMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.goosecode.v2.app.source.ide.PushMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.goosecode.v2.app.source.ide.PushMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.PushMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    appCommand: (f = msg.getAppCommand()) && proto.goosecode.v2.app.source.ide.AppCommandPush.toObject(includeInstance, f),
    workspaces: (f = msg.getWorkspaces()) && proto.goosecode.v2.app.source.ide.WorkspacesPush.toObject(includeInstance, f),
    activeSession: (f = msg.getActiveSession()) && proto.goosecode.v2.app.source.ide.ActiveSessionPush.toObject(includeInstance, f),
    fileCommand: (f = msg.getFileCommand()) && proto.goosecode.v2.app.source.ide.FileCommandPush.toObject(includeInstance, f)
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
 * @return {!proto.goosecode.v2.app.source.ide.PushMessage}
 */
proto.goosecode.v2.app.source.ide.PushMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.goosecode.v2.app.source.ide.PushMessage;
  return proto.goosecode.v2.app.source.ide.PushMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.goosecode.v2.app.source.ide.PushMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.goosecode.v2.app.source.ide.PushMessage}
 */
proto.goosecode.v2.app.source.ide.PushMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.goosecode.v2.app.source.ide.PushType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 10:
      var value = new proto.goosecode.v2.app.source.ide.AppCommandPush;
      reader.readMessage(value,proto.goosecode.v2.app.source.ide.AppCommandPush.deserializeBinaryFromReader);
      msg.setAppCommand(value);
      break;
    case 11:
      var value = new proto.goosecode.v2.app.source.ide.WorkspacesPush;
      reader.readMessage(value,proto.goosecode.v2.app.source.ide.WorkspacesPush.deserializeBinaryFromReader);
      msg.setWorkspaces(value);
      break;
    case 12:
      var value = new proto.goosecode.v2.app.source.ide.ActiveSessionPush;
      reader.readMessage(value,proto.goosecode.v2.app.source.ide.ActiveSessionPush.deserializeBinaryFromReader);
      msg.setActiveSession(value);
      break;
    case 13:
      var value = new proto.goosecode.v2.app.source.ide.FileCommandPush;
      reader.readMessage(value,proto.goosecode.v2.app.source.ide.FileCommandPush.deserializeBinaryFromReader);
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
proto.goosecode.v2.app.source.ide.PushMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.goosecode.v2.app.source.ide.PushMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.goosecode.v2.app.source.ide.PushMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goosecode.v2.app.source.ide.PushMessage.serializeBinaryToWriter = function(message, writer) {
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
      proto.goosecode.v2.app.source.ide.AppCommandPush.serializeBinaryToWriter
    );
  }
  f = message.getWorkspaces();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.goosecode.v2.app.source.ide.WorkspacesPush.serializeBinaryToWriter
    );
  }
  f = message.getActiveSession();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.goosecode.v2.app.source.ide.ActiveSessionPush.serializeBinaryToWriter
    );
  }
  f = message.getFileCommand();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.goosecode.v2.app.source.ide.FileCommandPush.serializeBinaryToWriter
    );
  }
};


/**
 * optional PushType type = 1;
 * @return {!proto.goosecode.v2.app.source.ide.PushType}
 */
proto.goosecode.v2.app.source.ide.PushMessage.prototype.getType = function() {
  return /** @type {!proto.goosecode.v2.app.source.ide.PushType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.goosecode.v2.app.source.ide.PushType} value
 * @return {!proto.goosecode.v2.app.source.ide.PushMessage} returns this
 */
proto.goosecode.v2.app.source.ide.PushMessage.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional AppCommandPush app_command = 10;
 * @return {?proto.goosecode.v2.app.source.ide.AppCommandPush}
 */
proto.goosecode.v2.app.source.ide.PushMessage.prototype.getAppCommand = function() {
  return /** @type{?proto.goosecode.v2.app.source.ide.AppCommandPush} */ (
    jspb.Message.getWrapperField(this, proto.goosecode.v2.app.source.ide.AppCommandPush, 10));
};


/**
 * @param {?proto.goosecode.v2.app.source.ide.AppCommandPush|undefined} value
 * @return {!proto.goosecode.v2.app.source.ide.PushMessage} returns this
*/
proto.goosecode.v2.app.source.ide.PushMessage.prototype.setAppCommand = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.goosecode.v2.app.source.ide.PushMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.goosecode.v2.app.source.ide.PushMessage} returns this
 */
proto.goosecode.v2.app.source.ide.PushMessage.prototype.clearAppCommand = function() {
  return this.setAppCommand(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.goosecode.v2.app.source.ide.PushMessage.prototype.hasAppCommand = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional WorkspacesPush workspaces = 11;
 * @return {?proto.goosecode.v2.app.source.ide.WorkspacesPush}
 */
proto.goosecode.v2.app.source.ide.PushMessage.prototype.getWorkspaces = function() {
  return /** @type{?proto.goosecode.v2.app.source.ide.WorkspacesPush} */ (
    jspb.Message.getWrapperField(this, proto.goosecode.v2.app.source.ide.WorkspacesPush, 11));
};


/**
 * @param {?proto.goosecode.v2.app.source.ide.WorkspacesPush|undefined} value
 * @return {!proto.goosecode.v2.app.source.ide.PushMessage} returns this
*/
proto.goosecode.v2.app.source.ide.PushMessage.prototype.setWorkspaces = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.goosecode.v2.app.source.ide.PushMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.goosecode.v2.app.source.ide.PushMessage} returns this
 */
proto.goosecode.v2.app.source.ide.PushMessage.prototype.clearWorkspaces = function() {
  return this.setWorkspaces(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.goosecode.v2.app.source.ide.PushMessage.prototype.hasWorkspaces = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional ActiveSessionPush active_session = 12;
 * @return {?proto.goosecode.v2.app.source.ide.ActiveSessionPush}
 */
proto.goosecode.v2.app.source.ide.PushMessage.prototype.getActiveSession = function() {
  return /** @type{?proto.goosecode.v2.app.source.ide.ActiveSessionPush} */ (
    jspb.Message.getWrapperField(this, proto.goosecode.v2.app.source.ide.ActiveSessionPush, 12));
};


/**
 * @param {?proto.goosecode.v2.app.source.ide.ActiveSessionPush|undefined} value
 * @return {!proto.goosecode.v2.app.source.ide.PushMessage} returns this
*/
proto.goosecode.v2.app.source.ide.PushMessage.prototype.setActiveSession = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.goosecode.v2.app.source.ide.PushMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.goosecode.v2.app.source.ide.PushMessage} returns this
 */
proto.goosecode.v2.app.source.ide.PushMessage.prototype.clearActiveSession = function() {
  return this.setActiveSession(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.goosecode.v2.app.source.ide.PushMessage.prototype.hasActiveSession = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional FileCommandPush file_command = 13;
 * @return {?proto.goosecode.v2.app.source.ide.FileCommandPush}
 */
proto.goosecode.v2.app.source.ide.PushMessage.prototype.getFileCommand = function() {
  return /** @type{?proto.goosecode.v2.app.source.ide.FileCommandPush} */ (
    jspb.Message.getWrapperField(this, proto.goosecode.v2.app.source.ide.FileCommandPush, 13));
};


/**
 * @param {?proto.goosecode.v2.app.source.ide.FileCommandPush|undefined} value
 * @return {!proto.goosecode.v2.app.source.ide.PushMessage} returns this
*/
proto.goosecode.v2.app.source.ide.PushMessage.prototype.setFileCommand = function(value) {
  return jspb.Message.setOneofWrapperField(this, 13, proto.goosecode.v2.app.source.ide.PushMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.goosecode.v2.app.source.ide.PushMessage} returns this
 */
proto.goosecode.v2.app.source.ide.PushMessage.prototype.clearFileCommand = function() {
  return this.setFileCommand(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.goosecode.v2.app.source.ide.PushMessage.prototype.hasFileCommand = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * @enum {number}
 */
proto.goosecode.v2.app.source.ide.RequestType = {
  REQUEST_INVALID: 0,
  REQUEST_LIST_FILES: 2,
  REQUEST_GET_FILES: 3,
  REQUEST_OPEN_FILES: 4,
  REQUEST_FIND_STRING: 5,
  REQUEST_SELECT_RANGE: 6,
  REQUEST_DESCRIBE_RANGE: 7,
  REQUEST_GO_TO_DEFINITION: 8,
  REQUEST_RENAME: 9,
  REQUEST_FIND_USES: 10,
  REQUEST_EDITOR_STATE: 11,
  REQUEST_CONTENT_CHANGE: 12
};

/**
 * @enum {number}
 */
proto.goosecode.v2.app.source.ide.SymbolKind = {
  SYMBOL_KIND_FILE: 0,
  SYMBOL_KIND_MODULE: 1,
  SYMBOL_KIND_NAMESPACE: 2,
  SYMBOL_KIND_PACKAGE: 3,
  SYMBOL_KIND_CLASS: 4,
  SYMBOL_KIND_METHOD: 5,
  SYMBOL_KIND_PROPERTY: 6,
  SYMBOL_KIND_FIELD: 7,
  SYMBOL_KIND_CONSTRUCTOR: 8,
  SYMBOL_KIND_ENUM: 9,
  SYMBOL_KIND_INTERFACE: 10,
  SYMBOL_KIND_FUNCTION: 11,
  SYMBOL_KIND_VARIABLE: 12,
  SYMBOL_KIND_CONSTANT: 13,
  SYMBOL_KIND_STRING: 14,
  SYMBOL_KIND_NUMBER: 15,
  SYMBOL_KIND_BOOLEAN: 16,
  SYMBOL_KIND_ARRAY: 17,
  SYMBOL_KIND_OBJECT: 18,
  SYMBOL_KIND_KEY: 19,
  SYMBOL_KIND_NULL: 20,
  SYMBOL_KIND_ENUM_MEMBER: 21,
  SYMBOL_KIND_STRUCT: 22,
  SYMBOL_KIND_EVENT: 23,
  SYMBOL_KIND_OPERATOR: 24,
  SYMBOL_KIND_TYPE_PARAMETER: 25
};

/**
 * @enum {number}
 */
proto.goosecode.v2.app.source.ide.ResponseType = {
  RESPONSE_INVALID: 0,
  RESPONSE_LIST_FILES: 2,
  RESPONSE_GET_FILES: 3,
  RESPONSE_OPEN_FILES: 4,
  RESPONSE_FIND_STRING: 5,
  RESPONSE_SELECT_RANGE: 6,
  RESPONSE_DESCRIBE_RANGE: 7,
  RESPONSE_GO_TO_DEFINITION: 8,
  RESPONSE_RENAME: 9,
  RESPONSE_FIND_USES: 10,
  RESPONSE_ERROR: 999
};

/**
 * @enum {number}
 */
proto.goosecode.v2.app.source.ide.PushType = {
  PUSH_INVALID: 0,
  PUSH_APP_COMMAND: 1,
  PUSH_WORKSPACES: 2,
  PUSH_ACTIVE_SESSION: 3,
  PUSH_FILE_COMMAND: 4
};

/**
 * @enum {number}
 */
proto.goosecode.v2.app.source.ide.FollowType = {
  FOLLOW_INVALID: 0,
  FOLLOW_DEFINITION: 1,
  FOLLOW_REFERENCE: 2
};

/**
 * @enum {number}
 */
proto.goosecode.v2.app.source.ide.AppCommandType = {
  APP_COMMAND_INVALID: 0,
  APP_COMMAND_MINIMAP: 1,
  APP_COMMAND_OVERLAY: 2
};

/**
 * @enum {number}
 */
proto.goosecode.v2.app.source.ide.ActiveSessionType = {
  ACTIVE_SESSION_INVALID: 0,
  ACTIVE_SESSION_DELETE: 1,
  ACTIVE_SESSION_SAVE: 2,
  ACTIVE_SESSION_REGENERATE: 3,
  ACTIVE_SESSION_STEP: 4
};

/**
 * @enum {number}
 */
proto.goosecode.v2.app.source.ide.RegenerateType = {
  REGENERATE_INVALID: 0,
  REGENERATE_LINEAR: 1,
  REGENERATE_SWIMLANE: 2
};

/**
 * @enum {number}
 */
proto.goosecode.v2.app.source.ide.FileCommandType = {
  FILE_COMMAND_INVALID: 0,
  FILE_COMMAND_OPEN_FILE: 10,
  FILE_COMMAND_CREATE_SNIPPET: 11,
  FILE_COMMAND_PIN_FILE: 12,
  FILE_COMMAND_HIGHLIGHT: 13,
  FILE_COMMAND_FOLLOW: 14
};

goog.object.extend(exports, proto.goosecode.v2.app.source.ide);
