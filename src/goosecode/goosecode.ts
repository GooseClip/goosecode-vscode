import * as vscode from "vscode";
import { Disposable } from "vscode";
import { GooseCodeServer } from "./server/server";
import {
  getDefinitions,
  getReferences,
  goToDefinition,
} from "./commands/commands";
import { convertRange } from "../util";
import { WorkspaceTracker } from "../workspace-tracker";
import { loadWorkspaceConfiguration } from "../config";

import { goosecode } from "../proto/ide/ide";
import PushMessage = goosecode.v2.app.source.ide.PushMessage;
import PushType = goosecode.v2.app.source.ide.PushType;
import ActiveSessionPush = goosecode.v2.app.source.ide.ActiveSessionPush;
import ActiveSessionType = goosecode.v2.app.source.ide.ActiveSessionType;
import RegeneratePush = goosecode.v2.app.source.ide.RegeneratePush;
import RegenerateType = goosecode.v2.app.source.ide.RegenerateType;
import FileCommandPush = goosecode.v2.app.source.ide.FileCommandPush;
import FileCommandType = goosecode.v2.app.source.ide.FileCommandType;
import OpenPush = goosecode.v2.app.source.ide.OpenPush;
import Location = goosecode.v2.app.source.ide.Location;
import Range = goosecode.v2.app.source.ide.Range;
import Position = goosecode.v2.app.source.ide.Position;
import AppCommandPush = goosecode.v2.app.source.ide.AppCommandPush;
import AppCommandType = goosecode.v2.app.source.ide.AppCommandType;
import BookmarkPush = goosecode.v2.app.source.ide.BookmarkPush;
import FollowPush = goosecode.v2.app.source.ide.FollowPush;
import FollowType = goosecode.v2.app.source.ide.FollowType;
import DefinitionFollow = goosecode.v2.app.source.ide.DefinitionFollow;
import LocationWithContext = goosecode.v2.app.source.ide.LocationWithContext;
import SnippetContext = goosecode.v2.app.source.ide.SnippetContext;
import ReferenceFollow = goosecode.v2.app.source.ide.ReferenceFollow;

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
          type: PushType.PUSH_ACTIVE_SESSION,
          active_session: new ActiveSessionPush({
            type: ActiveSessionType.ACTIVE_SESSION_DELETE,
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
          type: PushType.PUSH_ACTIVE_SESSION,
          active_session: new ActiveSessionPush({
            type: ActiveSessionType.ACTIVE_SESSION_SAVE,
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
          type: PushType.PUSH_ACTIVE_SESSION,
          active_session: new ActiveSessionPush({
            type: ActiveSessionType.ACTIVE_SESSION_REGENERATE,
            regenerate: new RegeneratePush({
              type: RegenerateType.REGENERATE_LINEAR,
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
          type: PushType.PUSH_ACTIVE_SESSION,
          active_session: new ActiveSessionPush({
            type: ActiveSessionType.ACTIVE_SESSION_REGENERATE,
            regenerate: new RegeneratePush({
              type: RegenerateType.REGENERATE_SWIMLANE,
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
          type: PushType.PUSH_ACTIVE_SESSION,
          active_session: new ActiveSessionPush({
            type: ActiveSessionType.ACTIVE_SESSION_STEP,
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
          type: PushType.PUSH_APP_COMMAND,
          app_command: new AppCommandPush({
            type: AppCommandType.APP_COMMAND_MINIMAP,
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
          type: PushType.PUSH_APP_COMMAND,
          app_command: new AppCommandPush({
            type: AppCommandType.APP_COMMAND_OVERLAY,
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
        type: PushType.PUSH_FILE_COMMAND,
        file_command: new FileCommandPush({
          type: FileCommandType.FILE_COMMAND_OPEN_FILE,
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
        type: PushType.PUSH_FILE_COMMAND,
        file_command: new FileCommandPush({
          type: FileCommandType.FILE_COMMAND_PIN_FILE,
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
    const workspaceUri = workspace.uri;
    const selection = editor.selection;
    let definitions = await getDefinitions();

    let currentDefinition: vscode.LocationLink | undefined;
    definitions = definitions.filter((def) => {
      if (def.originSelectionRange!.intersection(def.targetSelectionRange!)) {
        currentDefinition = def;
        return false;
      }
      return true;
    });

    if (definitions.length > 0) {
      if (definitions.length > 1) {
        console.warn("Multiple definitions found. Going to the first one");
      }

      gooseCodeServer?.push(
        new PushMessage({
          type: PushType.PUSH_FILE_COMMAND,
          file_command: new FileCommandPush({
            type: FileCommandType.FILE_COMMAND_FOLLOW,
            follow: new FollowPush({
              type: FollowType.FOLLOW_DEFINITION,
              definition: new DefinitionFollow({
                from: new LocationWithContext({
                  location: new Location({
                    path: workspaceTracker.relativePath(
                      editor.document.uri.fsPath,
                    ),
                    range: convertRange(definitions[0].originSelectionRange!),
                  }),
                }),
                to: new LocationWithContext({
                  location: new Location({
                    path: workspaceTracker.relativePath(
                      definitions[0].targetUri.fsPath,
                    ),
                    range: convertRange(definitions[0].targetSelectionRange!),
                  }),
                  context: new SnippetContext({
                    full_range: convertRange(definitions[0].targetRange),
                  }),
                }),
              }),
            }),
          }),
        }),
      );

      await goToDefinition(
        workspaceUri,
        new Location({
          path: workspaceTracker.relativePath(definitions[0].targetUri.fsPath),
          range: convertRange(definitions[0].targetSelectionRange!),
        }),
        false,
      );
      return;
    }

    let currentLocation: vscode.Location | undefined;
    let refs = await getReferences();

    refs = refs.filter((ref) => {
      if (ref.range!.intersection(selection)) {
        currentLocation = ref;
        return false;
      }
      return true;
    });

    if (refs.length > 0) {
      gooseCodeServer?.push(
        new PushMessage({
          type: PushType.PUSH_FILE_COMMAND,
          file_command: new FileCommandPush({
            type: FileCommandType.FILE_COMMAND_FOLLOW,
            follow: new FollowPush({
              type: FollowType.FOLLOW_REFERENCE,
              reference: new ReferenceFollow({
                from: new LocationWithContext({
                  location: new Location({
                    path: workspaceTracker.relativePath(
                      currentLocation!.uri.fsPath,
                    ),
                    range: convertRange(currentLocation!.range),
                  }),
                  context: new SnippetContext({
                    full_range: convertRange(currentDefinition!.targetRange),
                  }),
                }),
                to: refs.map(
                  (ref) =>
                    new LocationWithContext({
                      location: new Location({
                        path: workspaceTracker.relativePath(ref.uri.fsPath),
                        range: convertRange(ref.range),
                      }),
                    }),
                ),
              }),
            }),
          }),
        }),
      );
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
