import * as gc from "../gen/ide";
import { WorkspaceTracker } from "../workspace-tracker";
import { GooseCodeServer } from "./server/server";

export async function handleOverlayCommand(gooseCodeServer: GooseCodeServer, workspaceTracker: WorkspaceTracker) {
    gooseCodeServer.push(
        gc.PushResponse.create({
            type: gc.PushType.APP_COMMAND,
            data: {
                oneofKind: "appCommand",
                appCommand: gc.AppCommandPush.create({
                    type: gc.AppCommandType.OVERLAY,
                }),
            }
        }),
    );
}

