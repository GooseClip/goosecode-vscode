import * as vscode from "vscode";
import { Disposable } from "vscode";
import { GooseCodeServer } from "./server/server";
import { LocationOrLocationLink } from "@/types";
import {
  getDefinitions,
  getReferences,
  getDocumentSymbols,
  goToDefinition,
} from "./commands/commands";
import { convertRange } from "../util";
import { WorkspaceTracker } from "../workspace-tracker";
import { loadWorkspaceConfiguration } from "../config";

import { gooseclip } from "../proto/ide/v1/ide";
import PushMessage = gooseclip.goosecode.ide.v1.PushMessage;
import PushType = gooseclip.goosecode.ide.v1.PushType;
import ActiveSessionPush = gooseclip.goosecode.ide.v1.ActiveSessionPush;
import ActiveSessionType = gooseclip.goosecode.ide.v1.ActiveSessionType;
import RegeneratePush = gooseclip.goosecode.ide.v1.RegeneratePush;
import RegenerateType = gooseclip.goosecode.ide.v1.RegenerateType;
import FileCommandPush = gooseclip.goosecode.ide.v1.FileCommandPush;
import FileCommandType = gooseclip.goosecode.ide.v1.FileCommandType;
import OpenPush = gooseclip.goosecode.ide.v1.OpenPush;
import Location = gooseclip.goosecode.ide.v1.Location;
import Range = gooseclip.goosecode.ide.v1.Range;
import Position = gooseclip.goosecode.ide.v1.Position;
import AppCommandPush = gooseclip.goosecode.ide.v1.AppCommandPush;
import AppCommandType = gooseclip.goosecode.ide.v1.AppCommandType;
import BookmarkPush = gooseclip.goosecode.ide.v1.BookmarkPush;
import FollowPush = gooseclip.goosecode.ide.v1.FollowPush;
import FollowType = gooseclip.goosecode.ide.v1.FollowType;
import DefinitionFollow = gooseclip.goosecode.ide.v1.DefinitionFollow;
import LocationWithContext = gooseclip.goosecode.ide.v1.LocationWithContext;
import SnippetContext = gooseclip.goosecode.ide.v1.SnippetContext;
import ReferenceFollow = gooseclip.goosecode.ide.v1.ReferenceFollow;
import { getWordAtPosition, targetFullRangeFromLocation, targetRangeFromLocation, uriFromLocation } from "./vscode_extension_helpers";
import { testDefinitionClicked, fromRange, wrapFollowDefinition, wrapFollowReference, getReferencesToSelection as createReferencesFollowMessage, getDefinitionsWithoutCurrentPosition, getDefinitionsOfSelection as createDefinitionFollowMessage } from "./goosecode_follow";

async function guard(
  gooseCodeServer: GooseCodeServer | null,
  workspaceTracker: WorkspaceTracker,
  { workspaceIndependent }: { workspaceIndependent?: boolean } = {
    workspaceIndependent: false,
  },
): Promise<boolean> {
  if (!gooseCodeServer) {
    vscode.window.showErrorMessage("GooseCode server is not running");
    return false;
  }

  if (!gooseCodeServer!.connected) {
    vscode.window.showErrorMessage("GooseCode server is not connected");
    return false;
  }

  if (workspaceIndependent) {
    return true;
  }

  const editor = vscode.window.activeTextEditor;
  if (!editor) {
    vscode.window.showWarningMessage("Command requires active editor");
    return false;
  }

  var workspace = workspaceTracker.getWorkspaceFromFile(editor.document.uri);

  if (workspace && !workspace.isEnabled) {
    const selection = await vscode.window.showErrorMessage(
      "The current file workspace isn't a GooseCode code source. Do you want to enable it?",
      { modal: true },
      "Yes",
      "No",
    );

    if (selection === "Yes") {
      // Handle yes
      loadWorkspaceConfiguration(workspace!.uri.fsPath, true);
      vscode.window.showInformationMessage("Code source enabled");
      const workspaces = await workspaceTracker.refresh();
      gooseCodeServer?.pushWorkspacesToGooseCode(workspaces);
      workspaceTracker.onActiveFileChanged(editor.document.uri);
      // Wait a bit
      await new Promise((resolve) => setTimeout(resolve, 700));
      return true;
    }
    vscode.window.showInformationMessage("GooseCode follow not executed");
    return false;
  }

  // External dependency
  if (!workspace) {
    // vscode.window.showErrorMessage(
    //     "No code source to associate with external dependency",
    // );
    return true;
  }

  return true;
}

export function registerGooseCodeCommands(
  gooseCodeServer: GooseCodeServer | null,
  workspaceTracker: WorkspaceTracker,
): Array<Disposable> {
  const subscriptions: Array<Disposable> = [];

  // Active session commands

  sub = vscode.commands.registerCommand(
    "goosecode.activeSession.delete",
    async () => {
      console.log("Delete active session");
      if (
        !(await guard(gooseCodeServer, workspaceTracker, {
          workspaceIndependent: true,
        }))
      ) {
        return;
      }

      gooseCodeServer?.push(
        new PushMessage({
          type: PushType.PUSH_TYPE_ACTIVE_SESSION,
          active_session: new ActiveSessionPush({
            type: ActiveSessionType.ACTIVE_SESSION_TYPE_DELETE,
          }),
        }),
      );
    },
  );
  subscriptions.push(sub);

  sub = vscode.commands.registerCommand(
    "goosecode.activeSession.save",
    async () => {
      console.log("Save active session");
      if (
        !(await guard(gooseCodeServer, workspaceTracker, {
          workspaceIndependent: true,
        }))
      ) {
        return;
      }

      gooseCodeServer?.push(
        new PushMessage({
          type: PushType.PUSH_TYPE_ACTIVE_SESSION,
          active_session: new ActiveSessionPush({
            type: ActiveSessionType.ACTIVE_SESSION_TYPE_SAVE,
          }),
        }),
      );
    },
  );
  subscriptions.push(sub);

  sub = vscode.commands.registerCommand(
    "goosecode.activeSession.regenerateLinear",
    async () => {
      console.log("Regenerate active session");
      if (
        !(await guard(gooseCodeServer, workspaceTracker, {
          workspaceIndependent: true,
        }))
      ) {
        return;
      }

      gooseCodeServer?.push(
        new PushMessage({
          type: PushType.PUSH_TYPE_ACTIVE_SESSION,
          active_session: new ActiveSessionPush({
            type: ActiveSessionType.ACTIVE_SESSION_TYPE_REGENERATE,
            regenerate: new RegeneratePush({
              type: RegenerateType.REGENERATE_TYPE_LINEAR,
            }),
          }),
        }),
      );
    },
  );
  subscriptions.push(sub);

  sub = vscode.commands.registerCommand(
    "goosecode.activeSession.regenerateSwimlane",
    async () => {
      console.log("Regenerate active session");
      if (
        !(await guard(gooseCodeServer, workspaceTracker, {
          workspaceIndependent: true,
        }))
      ) {
        return;
      }

      gooseCodeServer?.push(
        new PushMessage({
          type: PushType.PUSH_TYPE_ACTIVE_SESSION,
          active_session: new ActiveSessionPush({
            type: ActiveSessionType.ACTIVE_SESSION_TYPE_REGENERATE,
            regenerate: new RegeneratePush({
              type: RegenerateType.REGENERATE_TYPE_SWIMLANE,
            }),
          }),
        }),
      );
    },
  );
  subscriptions.push(sub);

  sub = vscode.commands.registerCommand(
    "goosecode.activeSession.step",
    async () => {
      console.log("Step active session");
      if (
        !(await guard(gooseCodeServer, workspaceTracker, {
          workspaceIndependent: true,
        }))
      ) {
        return;
      }

      gooseCodeServer?.push(
        new PushMessage({
          type: PushType.PUSH_TYPE_ACTIVE_SESSION,
          active_session: new ActiveSessionPush({
            type: ActiveSessionType.ACTIVE_SESSION_TYPE_STEP,
          }),
        }),
      );
    },
  );
  subscriptions.push(sub);

  // Toggle minimap
  var sub = vscode.commands.registerCommand(
    "goosecode.appcommand.minimap",
    async () => {
      if (
        !(await guard(gooseCodeServer, workspaceTracker, {
          workspaceIndependent: true,
        }))
      ) {
        return;
      }
      gooseCodeServer?.push(
        new PushMessage({
          type: PushType.PUSH_TYPE_APP_COMMAND,
          app_command: new AppCommandPush({
            type: AppCommandType.APP_COMMAND_TYPE_MINIMAP,
          }),
        }),
      );
    },
  );
  subscriptions.push(sub);

  // Toggle overlay
  var sub = vscode.commands.registerCommand(
    "goosecode.appcommand.overlay",
    async () => {
      if (
        !(await guard(gooseCodeServer, workspaceTracker, {
          workspaceIndependent: true,
        }))
      ) {
        return;
      }
      gooseCodeServer?.push(
        new PushMessage({
          type: PushType.PUSH_TYPE_APP_COMMAND,
          app_command: new AppCommandPush({
            type: AppCommandType.APP_COMMAND_TYPE_OVERLAY,
          }),
        }),
      );
    },
  );
  subscriptions.push(sub);

  // Show file
  var sub = vscode.commands.registerCommand("goosecode.open", async () => {
    if (!(await guard(gooseCodeServer, workspaceTracker))) {
      return;
    }
    const editor = vscode.window.activeTextEditor!;
    gooseCodeServer?.push(
      new PushMessage({
        type: PushType.PUSH_TYPE_FILE_COMMAND,
        file_command: new FileCommandPush({
          type: FileCommandType.FILE_COMMAND_TYPE_OPEN_FILE,
          open_file: new OpenPush({
            path: workspaceTracker.currentRelativeFilePath(),
            range: selectedRange(editor),
          }),
        }),
      }),
    );
  });
  subscriptions.push(sub);

  // Create Snippet
  // sub = vscode.commands.registerCommand("goosecode.snippet", async () => {
  //   if (!(await guard(gooseCodeServer, workspaceTracker))) {
  //     return;
  //   }
  //   const editor = vscode.window.activeTextEditor!;
  //   gooseCodeServer?.push(
  //     new idedb.PushMessage({
  //       type: idedb.PushType.PUSH_FILE_COMMAND,
  //       file_command: new idedb.FileCommandPush({
  //         type: idedb.FileCommandType.FILE_COMMAND_CREATE_SNIPPET,
  //         version_control: new idedb.VersionControlInfo({
  //           repository_full_name: "goosecode/goosecode",
  //           branch: "main",
  //           commit: "1234567890",
  //           staged_files: [],
  //           unstaged_files: [],
  //         }),
  //         create_snippet: new idedb.CreateSnippetPush({
  //           location: new idedb.Location({
  //             path: workspaceTracker.currentFilePath(),
  //             range: selectedRange(editor),
  //           }),
  //           context: new idedb.SnippetContext({
  //             before: 10,
  //             after: 10,
  //           }),
  //         }),
  //       }),
  //     }),
  //   );
  // });
  // subscriptions.push(sub);

  // Pin File
  sub = vscode.commands.registerCommand("goosecode.pin", async () => {
    if (!(await guard(gooseCodeServer, workspaceTracker))) {
      return;
    }
    gooseCodeServer?.push(
      new PushMessage({
        type: PushType.PUSH_TYPE_FILE_COMMAND,
        file_command: new FileCommandPush({
          type: FileCommandType.FILE_COMMAND_TYPE_PIN_FILE,
          bookmark: new BookmarkPush({
            path: workspaceTracker.currentRelativeFilePath(),
          }),
        }),
      }),
    );
  });
  subscriptions.push(sub);

  // // Highlight
  // subscriptions.push(
  //   vscode.commands.registerCommand("goosecode.highlight", () => {
  //     const editor = vscode.window.activeTextEditor;
  //     if (editor) {
  //       gooseCodeServer.push(
  //         new PushMessage({
  //           type: idepb.PushType.PUSH_HIGHLIGHT,
  //           highlight: new HighlightPush({
  //             path: currentFilePath(editor),
  //             range: selectedRange(editor),
  //             color: 0xaaffffff,
  //           }),
  //         }),
  //       );
  //     }
  //   }),
  // );

  // Highlight
  sub = vscode.commands.registerCommand("goosecode.follow", async () => {
    if (!(await guard(gooseCodeServer, workspaceTracker))) {
      return;
    }
    const editor = vscode.window.activeTextEditor!;
    const workspace = workspaceTracker.getLastActiveGooseCodeWorkspace();
    if (workspace === null) {
      console.error("No active workspace found");
      return;
    }

    console.log("FOLLOW", workspace)
    const workspaceUri = workspace.uri;
    const selection = editor.selection;
    await getDocumentSymbols();
    let definitions = await getDefinitions();
    let references = await getReferences();

    const from = await fromRange(selection);
    const fromMsg = new LocationWithContext({
      location: new Location({
        path: workspaceTracker.relativePath(
          editor.document.uri.fsPath,
        ),
        range: from,
      }),
    });


    console.log("FROM", from.start.line, from.start.character, from.end.line, from.end.character);

    const filteredDefinitions = getDefinitionsWithoutCurrentPosition(definitions, selection);

    if (filteredDefinitions.length > 0) {
      if (filteredDefinitions.length > 1) {
        console.warn("Multiple definitions found. Going to the first one");
      }

      const msg = await createDefinitionFollowMessage(workspaceTracker, fromMsg, filteredDefinitions);
      if (!msg) {
        console.error("No definition message to push");
        return;
      }

      // Push the message to goosecode
      gooseCodeServer?.push(msg);

      // Navigate in editor to the definition
      await goToDefinition(
        workspaceUri,
        msg.file_command.follow.definition.to.location,
        false,
      );
      return;
    }

    const clickedDefinitionRef = await testDefinitionClicked(definitions, selection);
    if (clickedDefinitionRef) {
      const msg = await createReferencesFollowMessage(workspaceTracker, selection, fromMsg.clone(), clickedDefinitionRef);
      if (!msg) {
        console.error("No referencesmessage to push");
        return;
      }

      gooseCodeServer?.push(msg);
    }

  });
  subscriptions.push(sub);

  return subscriptions;
}

function selectedRange(editor: vscode.TextEditor) {
  return new Range({
    start: new Position({
      line: editor.selection.start.line,
      character: editor.selection.start.character,
    }),
    end: new Position({
      line: editor.selection.end.line,
      character: editor.selection.end.character,
    }),
  });
}
