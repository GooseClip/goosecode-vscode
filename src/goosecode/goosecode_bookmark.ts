import * as gc from "../gen/ide";
import { WorkspaceTracker } from "../workspace-tracker";
import { GooseCodeServer } from "./server/server";

export async function handleBookmarkCommand(gooseCodeServer: GooseCodeServer, workspaceTracker: WorkspaceTracker) {
    gooseCodeServer?.push(
        gc.PushResponse.create({
            type: gc.PushType.FILE_COMMAND,
            data: {
                oneofKind: "fileCommand",
                fileCommand: gc.FileCommandPush.create({
                    type: gc.FileCommandType.BOOKMARK,
                    data: {
                        oneofKind: "bookmark",
                        bookmark: gc.BookmarkPush.create({
                            path: workspaceTracker.currentRelativeFilePath(),
                        }),
                    }
                })
            }
        })
    );
}

