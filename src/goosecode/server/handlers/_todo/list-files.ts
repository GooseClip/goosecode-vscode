// import { listProjectFiles } from "../../commands/commands";
// import { idepb } from "../../../proto/idepb/ide";
// import RequestMessage = idepb.RequestMessage;
// import ResponseMessage = idepb.ResponseMessage;
// import ResponseType = idepb.ResponseType;
// import ListFilesResponse = idepb.ListFilesResponse;
// import { CodeSourceID } from "../../../config";
//
// async function handleListFilesRequest(
//   request: RequestMessage,
//   send: (msg: ResponseMessage) => void,
// ) {
//   const files = await listProjectFiles();
//
//   const response = new ResponseMessage({
//     type: ResponseType.RESPONSE_LIST_FILES,
//     code_source_id: request.code_source_id,
//     list_files_response: new ListFilesResponse({
//       file_paths: files,
//     }),
//   });
//
//   send(response);
// }
//
// export { handleListFilesRequest };
