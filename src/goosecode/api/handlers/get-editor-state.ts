import * as vscode from 'vscode';
import {idepb} from "../../../proto/idepb/ide";
import RequestMessage = idepb.RequestMessage;
import ResponseMessage = idepb.ResponseMessage;
import ResponseType = idepb.ResponseType;
import EditorStateResponse = idepb.EditorStateResponse;
import {ApiError} from "../../errors";

async function handleGetEditorState(request: RequestMessage, send: (msg: ResponseMessage) => void) {
    // TODO change to the editor relevant to the requested file
    const activeEditor = vscode.window.activeTextEditor;

    if (!activeEditor) {
        throw new ApiError("No active editor");
    }

    const documentText = activeEditor.document.getText();

    const response = new ResponseMessage(
        {
            type: ResponseType.RESPONSE_EDITOR_STATE,
            command_id: request.command_id,
            editor_state_response: new EditorStateResponse()
        }
    );
    send(response);
}

export {
    handleGetEditorState,
}