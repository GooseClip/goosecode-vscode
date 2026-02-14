import { create } from "@bufbuild/protobuf";
import { WorkspaceTracker } from "../workspace-tracker";
import { GooseCodeServer } from "./server/server";
import { PushResponseSchema, PushType, AppCommandPushSchema, AppCommandType } from "../gen/ide-connect/v1/push_pb";

export async function handleOverlayCommand(gooseCodeServer: GooseCodeServer, workspaceTracker: WorkspaceTracker) {
    gooseCodeServer.push(
        create(PushResponseSchema, {
            type: PushType.APP_COMMAND,
            data: {
                case: "appCommand",
                value: create(AppCommandPushSchema, {
                    type: AppCommandType.OVERLAY,
                }),
            },
        }),
    );
}

