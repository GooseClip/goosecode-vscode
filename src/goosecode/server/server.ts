import * as grpc from '@grpc/grpc-js';
import * as gc from "../../gen/ide";
import { adaptService } from "@protobuf-ts/grpc-backend";
import * as rpc from "@protobuf-ts/runtime-rpc";
import { GooseCodeExtensionConfig } from '../../config';
import { handleGetFilesRequest } from './handlers/get-files';
import { ApiError } from '../errors';
import { Workspace, WorkspaceTracker } from '../../workspace-tracker';
import { getGitInfoFromVscodeApi } from '../../git';
import * as vscode from "vscode";
import * as stream from "streamx";

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

  private pushStream: stream.Duplex | null = null;


  public async push(message: gc.PushResponse) {
    if (this.pushStream) {
      console.log("PUSH STREAM", typeof this.pushStream);

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

      this.pushStream.push(message);
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



  private ideService: gc.IIDEService = {
    // how can you:
    // - send no messages, just an error status *with trailer metadata*
    push: async (request: gc.PushRequest, responses: rpc.RpcInputStream<gc.PushResponse>, context: rpc.ServerCallContext): Promise<void> => {
      console.log("NEW CONNECTION");

      context.sendResponseHeaders({
        'status': 'processing...'
      });

      context.trailers = {
        'status': '...done'
      };

      if (this.pushStream) {
        console.warn('A client is already connected to the push stream. Replacing with new connection.');
        this.pushStream.end();
        this.pushStream = null;
      }

      console.log('Client connected to push stream.');
      this.pushStream = new stream.Duplex()
      this.onConnected();


      console.log("SENDING TEST MESSAGE");
      try {
        responses.send(gc.PushResponse.create({
          type: gc.PushType.UNSPECIFIED,
        }));
      } catch (e) {
        console.log("ERROR", e);
      }


      const workspaces = await this.workspaceTracker.refresh();
      // After delay, send refresh
      setTimeout(() => {
        this.pushWorkspacesToGooseCode(workspaces);
        console.log("PUSHED WORKSPACES");
      }, 1000);


      // Set up cleanup handler
      const cleanup = () => {
        this.onClosed();
      };

      // Handle cancellation
      context.onCancel(() => {
        console.log('Push stream cancelled by client.');
        cleanup();
      });

      try {
        // TODO STREAM RESPONSES TO CLIENT
        for await (const m of this.pushStream) {
          console.log("Sending message:", m);
          responses.send(m);
          // Handle client message if necessary
        }
      } catch (e) {
        console.error("Error reading from client push stream", e);
      } finally {
        console.log("Client push stream ended.");
        cleanup();
      }
    },

    getFiles: async (request: gc.GetFilesRequest, context: rpc.ServerCallContext): Promise<gc.GetFilesResponse> => {
      context.sendResponseHeaders({
        'status': 'processing...'
      });

      context.trailers = {
        'status': '...done'
      };
      try {
        const workspace = this.workspaceTracker.getWorkspaceFromFingerprint(
          request.context!.repositorySnapshotFingerprint,
        );
        if (workspace === null) {
          throw new ApiError("Workspace not found", 422);
        }

        const res = await handleGetFilesRequest(request, workspace!.uri!);
        return res;
      } catch (e) {
        console.error(e);
        throw new ApiError("Internal error", 500);
      }
    },

    listFiles: async (request: gc.ListFilesRequest, context: rpc.ServerCallContext): Promise<gc.ListFilesResponse> => {
      context.sendResponseHeaders({
        'status': 'processing...'
      });

      context.trailers = {
        'status': '...done'
      };
      return gc.ListFilesResponse.create({
        filePaths: [],
      });
    },

    select: async (request: gc.SelectRequest, context: rpc.ServerCallContext): Promise<gc.SelectResponse> => {
      context.sendResponseHeaders({
        'status': 'processing...'
      });

      context.trailers = {
        'status': '...done'
      };
      return gc.SelectResponse.create({
      });
    },

    navigate: async (request: gc.NavigateRequest, context: rpc.ServerCallContext): Promise<gc.NavigateResponse> => {
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
      context.sendResponseHeaders({
        'status': 'processing...'
      });

      context.trailers = {
        'status': '...done'
      };
      return gc.NavigateResponse.create({
      });
    },

    search: async (request: gc.SearchRequest, context: rpc.ServerCallContext): Promise<gc.SearchResponse> => {
      context.sendResponseHeaders({
        'status': 'processing...'
      });

      context.trailers = {
        'status': '...done'
      };
      return gc.SearchResponse.create({
      });
    },

    probe: async (request: gc.ProbeRequest, context: rpc.ServerCallContext): Promise<gc.ProbeResponse> => {
      context.sendResponseHeaders({
        'status': 'processing...'
      });

      context.trailers = {
        'status': '...done'
      };
      // wait for the requested amount of milliseconds
      return gc.ProbeResponse.create({
      });
    },

    refactor: async (request: gc.RefactorRequest, context: rpc.ServerCallContext): Promise<gc.RefactorResponse> => {
      context.sendResponseHeaders({
        'status': 'processing...'
      });

      context.trailers = {
        'status': '...done'
      };

      // wait for the requested amount of milliseconds
      return gc.RefactorResponse.create({
      });
    },

    versionControlDetails: async (request: gc.VersionControlDetailsRequest, context: rpc.ServerCallContext): Promise<gc.VersionControlDetailsResponse> => {
      context.sendResponseHeaders({
        'status': 'processing...'
      });

      context.trailers = {
        'status': '...done'
      };

      // wait for the requested amount of milliseconds
      return gc.VersionControlDetailsResponse.create({
      });
    },

    lint: async (request: gc.LintRequest, context: rpc.ServerCallContext): Promise<gc.LintResponse> => {
      context.sendResponseHeaders({
        'status': 'processing...'
      });

      context.trailers = {
        'status': '...done'
      };

      // wait for the requested amount of milliseconds  
      return gc.LintResponse.create({
      });
    },
  }


  public async start() {
    this.extensionConfig.tlsOptions;

    const port = this.extensionConfig.settings.port;
    const ip = this.extensionConfig.settings.localhostOnly
      ? "127.0.0.1"
      : "0.0.0.0";
    const host = `${ip}:${port}`;

    const server = this.getServer();

    if (!this.extensionConfig.tlsOptions.key || !this.extensionConfig.tlsOptions.cert) {
      throw new Error('TLS key or certificate is missing');
    }

    // Convert key and cert to Buffer if they're strings
    let privateKey: Buffer;
    if (Buffer.isBuffer(this.extensionConfig.tlsOptions.key)) {
      privateKey = this.extensionConfig.tlsOptions.key;
    } else if (typeof this.extensionConfig.tlsOptions.key === 'string') {
      privateKey = Buffer.from(this.extensionConfig.tlsOptions.key, 'utf-8');
    } else {
      throw new Error('Invalid TLS key format');
    }

    let certChain: Buffer;
    if (Buffer.isBuffer(this.extensionConfig.tlsOptions.cert)) {
      certChain = this.extensionConfig.tlsOptions.cert;
    } else if (typeof this.extensionConfig.tlsOptions.cert === 'string') {
      certChain = Buffer.from(this.extensionConfig.tlsOptions.cert, 'utf-8');
    } else {
      throw new Error('Invalid TLS certificate format');
    }

    server.bindAsync(
      host,
      grpc.ServerCredentials.createInsecure(),
      // grpc.ServerCredentials.createSsl(
      //   null, // rootCerts - null since we're not validating client certs
      //   [{
      //     private_key: privateKey,
      //     cert_chain: certChain
      //   }],
      //   false // checkClientCertificate - matches rejectUnauthorized setting
      // ),
      (err: Error | null, port: number) => {
        if (err) {
          console.error(`Server error: ${err.message}`);
        } else {
          console.log(`Server bound on port: ${port}`);
        }
      }
    );

    console.log("Server started: ", host);
  }

  public stop() {
    this.pushStream?.end();
    this.pushStream = null;
    this.server?.forceShutdown();
    this.server = null;
  }


  private server: grpc.Server | null = null;
  private getServer(): grpc.Server {
    this.server = new grpc.Server(
      {
        interceptors: [
          authInterceptorFactory(this.extensionConfig.settings.password),
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
        console.log("Received metadata: ", metadata);
        console.log("Method: ", methodDescriptor.path);
        if (validateAuthorizationMetadata(metadata, password)) {
          console.log("Authenticated");
          next(metadata);
        } else {
          console.error("Not authenticated:", metadata.get('authorization'));
          call.sendStatus({
            code: grpc.status.UNAUTHENTICATED,
            details: 'Not authenticated'
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