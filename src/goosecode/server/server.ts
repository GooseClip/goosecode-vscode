import * as grpc from '@grpc/grpc-js';
import * as gc from "../../gen/ide";
import { adaptService } from "@protobuf-ts/grpc-backend";
import { IIDEService } from '../../gen/ide/v1/api.grpc-server';
import { GooseCodeExtensionConfig } from '../../config';
import { handleGetFilesRequest } from './handlers/get-files';
import { ApiError } from '../errors';
import { Workspace, WorkspaceTracker } from '../../workspace-tracker';
import { getGitInfoFromVscodeApi } from '../../git';
import * as vscode from "vscode";

export class GooseCodeServer {
  constructor(
    private readonly workspaceTracker: WorkspaceTracker,
    private readonly extensionConfig: GooseCodeExtensionConfig,
    private readonly onConnected: () => void,
    private readonly onClosed: () => void,
  ) { }

  public get connected(): boolean {
    return this.server !== null;
  }

  private pushStream: grpc.ServerWritableStream<gc.PushRequest, gc.PushResponse> | null = null;


  public async push(message: gc.PushResponse) {
    if (this.pushStream) {

      console.log("[PUSH]", message.type);
      if (message.type === gc.PushType.FILE_COMMAND) {
        const activeWorkspace =
          this.workspaceTracker.getLastActiveGooseCodeWorkspace();
        if (!activeWorkspace) {
          console.error("[PUSH]", "No active workspace found");
          return;
        }

        // Time the request
        const startTime = Date.now();

        const gitInfo = await getGitInfoFromVscodeApi(
          vscode.Uri.file(this.workspaceTracker.currentFilePath()),
        );

        const endTime = Date.now();

        console.log(`Workspace: ${activeWorkspace.uri.fsPath}`);
        console.log(`Git info: ${JSON.stringify(gitInfo)}`);
        console.log(`Time taken: ${endTime - startTime}ms`);
        // Inject the workspace root so GooseCode can automatically associate the connection
        message.context = gc.PushContext.create({
          workspaceRoot: activeWorkspace.uri.fsPath,
          versionControl: gc.VersionControlInfo.create({
            repositoryFullname: gitInfo?.repositoryFullName ?? "",
            branch: gitInfo?.branch ?? "",
            commit: gitInfo?.commit ?? "",
          }),
        });

      }

      this.pushStream.write(message);
    } else {
      console.warn("Cannot push message: no client connected to the push stream.");
    }
  }

  public pushWorkspacesToGooseCode(
    workspaces: Workspace[],
    deleted?: gc.WorkspaceDetails,
  ) {
    const toSend: gc.WorkspaceDetails[] = [];

    if (workspaces) {
      for (const workspace of workspaces) {
        toSend.push(gc.WorkspaceDetails.create({
          workspaceRoot: workspace.uri.fsPath,
          repositorySnapshotFingerprint: workspace.config!.config.fingerprint,
          deleted: false,
        }));
      }
    }

    if (deleted) {
      toSend.push(deleted);
    }

    this.push(
      gc.PushResponse.create({
        type: gc.PushType.WORKSPACES,
        data: {
          oneofKind: "workspaces",
          workspaces: gc.WorkspacesPush.create({
            workspaces: [...toSend.map((root) => gc.WorkspaceDetails.create(root))],
          }),
        }

      }),
    );
  }



  private ideService: IIDEService = {
    // how can you:
    // - send no messages, just an error status *with trailer metadata*
    push: async (call: grpc.ServerWritableStream<gc.PushRequest, gc.PushResponse>): Promise<void> => {
      if (this.pushStream) {
        console.warn('A client is already connected to the push stream. Rejecting new connection.');
        const error = {
          code: grpc.status.RESOURCE_EXHAUSTED,
          details: 'A client is already connected.',
        };
        call.destroy(new Error(error.details));
        return;
      }

      console.log('Client connected to push stream.');
      this.pushStream = call;
      this.onConnected();

      const workspaces = await this.workspaceTracker.refresh();
      // After delay, send refresh
      setTimeout(() => {
        this.pushWorkspacesToGooseCode(workspaces);
      }, 1000);

      call.on('error', (err: Error) => {
        console.error('Push stream error:', err);
        if (this.pushStream === call) {
          this.pushStream = null;
          this.onClosed();
        }
      });

      call.on('cancelled', () => {
        console.log('Push stream cancelled by client.');
        if (this.pushStream === call) {
          this.pushStream = null;
          this.onClosed();
        }
      });
    },

    getFiles: async (call: grpc.ServerUnaryCall<gc.GetFilesRequest, gc.GetFilesResponse>, callback: grpc.sendUnaryData<gc.GetFilesResponse>): Promise<void> => {

      call.on('error', args => {
        console.log("goosecode getFiles() got error:", args)
      })

      const responseHeaders = new grpc.Metadata();
      call.sendMetadata(responseHeaders);

      const trailers = new grpc.Metadata();

      const request = call.request;

      console.log(
        `Get files: ${request.context!.repositorySnapshotFingerprint} ${request.filePaths}`,
      );
      try {
        const workspace = this.workspaceTracker.getWorkspaceFromFingerprint(
          request.context!.repositorySnapshotFingerprint,
        );
        if (workspace === null) {
          throw new ApiError("Workspace not found", 422);
        }

        await handleGetFilesRequest(request, workspace!.uri!, (m) =>
          callback(
            null,
            {
              fileContents: [],
            },
            trailers
          )
        );
      } catch (e) {
        callback({
          code: grpc.status.INTERNAL,
          details: e instanceof Error ? e.message : "Unknown error",
        },);
      }

      // wait for the requested amount of milliseconds

    },

    listFiles: (call: grpc.ServerUnaryCall<gc.ListFilesRequest, gc.ListFilesResponse>, callback: grpc.sendUnaryData<gc.ListFilesResponse>): void => {
      call.on('error', args => {
        console.log("goosecode listFiles() got error:", args)
      })

      const responseHeaders = new grpc.Metadata();
      call.sendMetadata(responseHeaders);

      const trailers = new grpc.Metadata();

      // wait for the requested amount of milliseconds
      callback(
        null,
        {
          filePaths: [],
        },
        trailers
      );
    },

    select: (call: grpc.ServerUnaryCall<gc.SelectRequest, gc.SelectResponse>, callback: grpc.sendUnaryData<gc.SelectResponse>): void => {
      call.on('error', args => {
        console.log("goosecode select() got error:", args)
      })

      const responseHeaders = new grpc.Metadata();
      call.sendMetadata(responseHeaders);

      const trailers = new grpc.Metadata();

      // wait for the requested amount of milliseconds
      callback(null, null, trailers);
    },

    navigate: (call: grpc.ServerUnaryCall<gc.NavigateRequest, gc.NavigateResponse>, callback: grpc.sendUnaryData<gc.NavigateResponse>): void => {
      call.on('error', args => {
        console.log("goosecode navigate() got error:", args)
      })

      const responseHeaders = new grpc.Metadata();
      call.sendMetadata(responseHeaders);

      const trailers = new grpc.Metadata();
      /*
       console.log("GO TO DEFINITION REQUEST");
        try {
          const request: RequestMessage = req.body as RequestMessage;
          const workspace = this.workspaceTracker.getWorkspaceFromFingerprint(
            request.repository_snapshot_fingerprint,
          );
          await handleGoToDefinition(req.body, workspace!.uri!, (m) =>
            this.send(res, m),
          );
        } catch (e) {
          next(e);
        }*/

      // wait for the requested amount of milliseconds
    },

    search: (call: grpc.ServerUnaryCall<gc.SearchRequest, gc.SearchResponse>, callback: grpc.sendUnaryData<gc.SearchResponse>): void => {
      call.on('error', args => {
        console.log("goosecode search() got error:", args)
      })

      const responseHeaders = new grpc.Metadata();
      call.sendMetadata(responseHeaders);

      const trailers = new grpc.Metadata();

      // wait for the requested amount of milliseconds
    },

    probe: (call: grpc.ServerUnaryCall<gc.ProbeRequest, gc.ProbeResponse>, callback: grpc.sendUnaryData<gc.ProbeResponse>): void => {
      call.on('error', args => {
        console.log("goosecode probe() got error:", args)
      })

      const responseHeaders = new grpc.Metadata();
      call.sendMetadata(responseHeaders);

      const trailers = new grpc.Metadata();

      // wait for the requested amount of milliseconds
      callback(null, null, trailers);
    },

    refactor: (call: grpc.ServerUnaryCall<gc.RefactorRequest, gc.RefactorResponse>, callback: grpc.sendUnaryData<gc.RefactorResponse>): void => {
      call.on('error', args => {
        console.log("goosecode refactor() got error:", args)
      })

      const responseHeaders = new grpc.Metadata();
      call.sendMetadata(responseHeaders);

      const trailers = new grpc.Metadata();

      // wait for the requested amount of milliseconds
      callback(null, null, trailers);
    },

    versionControlDetails: (call: grpc.ServerUnaryCall<gc.VersionControlDetailsRequest, gc.VersionControlDetailsResponse>, callback: grpc.sendUnaryData<gc.VersionControlDetailsResponse>): void => {
      call.on('error', args => {
        console.log("goosecode versionControlDetails() got error:", args)
      })

      const responseHeaders = new grpc.Metadata();
      call.sendMetadata(responseHeaders);

      const trailers = new grpc.Metadata();

      // wait for the requested amount of milliseconds
      callback(null, null, trailers);
    },

    lint: (call: grpc.ServerUnaryCall<gc.LintRequest, gc.LintResponse>, callback: grpc.sendUnaryData<gc.LintResponse>): void => {
      call.on('error', args => {
        console.log("goosecode lint() got error:", args)
      })

      const responseHeaders = new grpc.Metadata();
      call.sendMetadata(responseHeaders);

      const trailers = new grpc.Metadata();

      // wait for the requested amount of milliseconds  
      callback(null, null, trailers);
    },
  }


  public async start() {
    if (require.main === module) {
      /*
          const app = express();
        this.server = https.createServer(this.extensionConfig.tlsOptions, app);
        const wsApp = expressWs(app as any, this.server!);
      */

      const port = this.extensionConfig.settings.port;
      const ip = this.extensionConfig.settings.localhostOnly
        ? "127.0.0.1"
        : "0.0.0.0";
      const host = `${ip}:${port}`;

      const server = this.getServer();
      server.bindAsync(
        host,
        grpc.ServerCredentials.createInsecure(), // TODO
        (err: Error | null, port: number) => {
          if (err) {
            console.error(`Server error: ${err.message}`);
          } else {
            console.log(`Server bound on port: ${port}`);
            server.start();
          }
        }
      );
    }
  }

  public stop() {
    this.pushStream?.end();
    this.server?.forceShutdown();
    this.server = null;
    this.pushStream = null;
  }


  private server: grpc.Server | null = null;
  private getServer(): grpc.Server {
    this.server = new grpc.Server(
      {
        interceptors: [
          authInterceptorFactory(this.extensionConfig.settings.password)
        ],
      }
    );
    this.server.addService(...adaptService(gc.IDEService, this.ideService));
    return this.server;
  }
}


function validateAuthorizationMetadata(metadata: grpc.Metadata, password: string) {
  const authorization = metadata.get('authorization');
  if (authorization.length < 1) {
    return false;
  }
  return authorization[0] === password;
}

function authInterceptorFactory(password: string): grpc.ServerInterceptor {
  return (methodDescriptor: grpc.ServerMethodDefinition<any, any>, call: grpc.ServerInterceptingCallInterface) => {
    const listener = (new grpc.ServerListenerBuilder())
      .withOnReceiveMetadata((metadata, next) => {
        if (validateAuthorizationMetadata(metadata, password)) {
          next(metadata);
        } else {
          call.sendStatus({
            code: grpc.status.UNAUTHENTICATED,
            details: 'Auth metadata not correct'
          });
        }
      }).build();
    const responder = (new grpc.ResponderBuilder())
      .withStart(next => {
        next(listener);
      }).build();
    return new grpc.ServerInterceptingCall(call, responder);
  };
}

/*

function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
  password: string,
) {
  if (req.path === "/connect/.websocket") {
    next();
    return;
  }

  if (req.headers.authorization !== password) {
    next(new ApiError(`Unauthorized, path: ${req.path}`, 401));
    return;
  }
  next();
}

export { authMiddleware };
*/