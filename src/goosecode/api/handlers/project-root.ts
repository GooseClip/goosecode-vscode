import {getProjectRoot, listProjectFiles} from "../../commands/commands";
import {idepb} from "../../../proto/idepb/ide";
import {ApiError} from "../../errors";
import RequestMessage = idepb.RequestMessage;
import ResponseMessage = idepb.ResponseMessage;
import ResponseType = idepb.ResponseType;
import ProjectRootResponse = idepb.ProjectRootResponse;

async function handleProjectRootRequest(request: RequestMessage, send: (msg: ResponseMessage) => void) {
    const response = new ResponseMessage({
        type: ResponseType.RESPONSE_PROJECT_ROOT,
        command_id: request.command_id,
        project_root_response: new ProjectRootResponse({
            project_root: getProjectRoot(),
        })
    });

    send(response);
}

export {
    handleProjectRootRequest,
}