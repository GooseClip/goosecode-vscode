import * as grpc from '@grpc/grpc-js';
import * as gc from "../../gen/ide";
import { adaptService } from "@protobuf-ts/grpc-backend";
import * as rpc from "@protobuf-ts/runtime-rpc";
import { GooseCodeExtensionConfig } from '../../config';
import { handleGetFilesRequest } from './handlers/get-files';
import { ApiError } from '../errors';
import { Workspace, WorkspaceTracker } from '../../workspace-tracker';
import { getGitInfoFromVscodeApi, GitInfo } from '../../git';
import * as vscode from "vscode";
import * as stream from "streamx";
import { handleListFilesRequest } from './handlers/list-files';
import { handleGoToDefinition } from './handlers/go-to';
import { handleResolveSymbol } from './handlers/resolve-symbol';
import * as path from 'path';

interface ClientConnection {
  stream: stream.Duplex;
  clientId: string;
}

export class GooseCodeServer {
  constructor(
    private readonly workspaceTracker: WorkspaceTracker,
    public readonly extensionConfig: GooseCodeExtensionConfig,
    private readonly onConnected: () => void,
    private readonly onClosed: () => void,
  ) { }

  public get connected(): boolean {
    return this.server !== null;
  }

  public get port(): number {
    return this.extensionConfig.settings.port;
  }

  // Map of clientId -> client connection (supports multiple concurrent clients)
  private clientConnections: Map<string, ClientConnection> = new Map();


  public async push(message: gc.PushResponse) {
    if (this.clientConnections.size === 0) {
      console.warn("Cannot push message: no clients connected.");
      return;
    }
    
    if (message.type === gc.PushType.FILE_COMMAND) {
      const activeWorkspace =
        this.workspaceTracker.getLastActiveGooseCodeWorkspace();
      if (!activeWorkspace) {
        console.error("[PUSH]", "No active workspace found");
        return;
      }
      const filepath = this.workspaceTracker.currentFilePath();
      const workspaceRoot = activeWorkspace.uri.fsPath;
      const isExternal =
        !(filepath === workspaceRoot || filepath.startsWith(workspaceRoot + path.sep)) ||
        /[\\/]node_modules[\\/]/.test(filepath);

      let gitInfo: GitInfo | null;
      if (isExternal) {
        gitInfo = {
          repositoryRoot: workspaceRoot,
          repositoryFullName: activeWorkspace.config!.config.repositoryFullName,
          branch: 'ext-dep',
          commit: 'ext-dep',
          stagedFiles: [],
          unstagedFiles: [],
        };
      } else {
        gitInfo = await getGitInfoFromVscodeApi(
          vscode.Uri.file(filepath),
        );
      }

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

    // Push to all connected clients
    for (const [clientId, connection] of this.clientConnections) {
      try {
        connection.stream.push(message);
      } catch (e) {
        console.error(`Failed to push to client ${clientId}:`, e);
      }
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
          versionControlInfo: gc.VersionControlInfo.create({
            repositoryFullname: workspace.config!.config.repositoryFullName,
            branch: workspace.config!.config.branch,
            commit: workspace.config!.config.commit,
          }),
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
      // Extract client ID from headers, or generate a random one
      const clientIdHeader = context.headers['x-client-id'];
      const clientId = (Array.isArray(clientIdHeader) ? clientIdHeader[0] : clientIdHeader) || `anon-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      
      context.sendResponseHeaders({
        'status': 'processing...'
      });

      context.trailers = {
        'status': '...done'
      };

      // Check if this specific client already has a connection
      const existingConnection = this.clientConnections.get(clientId);
      if (existingConnection) {
        console.warn(`Client ${clientId} is reconnecting. Replacing their existing connection.`);
        existingConnection.stream.destroy(new Error("Replaced by new connection from same client"));
        this.clientConnections.delete(clientId);
      }

      console.log(`Client ${clientId} connected to push stream. Total clients: ${this.clientConnections.size + 1}`);
      const myStream = new stream.Duplex();
      this.clientConnections.set(clientId, { stream: myStream, clientId });
      
      if (this.clientConnections.size === 1) {
        // First client connected
        this.onConnected();
      }

      try {
        responses.send(gc.PushResponse.create({
          type: gc.PushType.UNSPECIFIED,
        }));
      } catch (e) {
        console.error("Failed to send initial response", e);
      }

      const workspaces = await this.workspaceTracker.refresh();
      // After delay, send refresh to this client
      setTimeout(() => {
        this.pushWorkspacesToGooseCode(workspaces);
      }, 1000);

      // Set up cleanup handler
      let cleanedUp = false;
      const cleanup = () => {
        if (cleanedUp) {
          return;
        }
        cleanedUp = true;
        
        // Only remove if this is still the active connection for this client
        const currentConnection = this.clientConnections.get(clientId);
        if (currentConnection?.stream === myStream) {
          this.clientConnections.delete(clientId);
        }
        
        if (this.clientConnections.size === 0) {
          this.onClosed();
        }
      };

      // Handle cancellation
      context.onCancel(() => {
        cleanup();
      });

      try {
        for await (const m of myStream) {
          responses.send(m);
        }
      } catch (e) {
        console.error(`Error reading from client ${clientId} push stream:`, e);
      } finally {
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
        const workspace = await this.workspaceTracker.getWorkspaceFromContext(
          request.context!,
        );

        if (workspace === null) {
          throw new ApiError(`Workspace not found: ${request.context!.versionControlInfo?.repositoryFullname}`, 422);
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
      try {
        const workspace = await this.workspaceTracker.getWorkspaceFromContext(
          request.context!,
        );

        if (workspace === null) {
          throw new ApiError(`Workspace not found: ${request.context!.versionControlInfo?.repositoryFullname}`, 422);
        }

        return handleListFilesRequest(request, workspace.uri!);
      } catch (e) {
        console.error(e);
        throw new ApiError("Internal error", 500);
      }
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

      // wait for the requested amount of milliseconds
      context.sendResponseHeaders({
        'status': 'processing...'
      });

      context.trailers = {
        'status': '...done'
      };

      try {
        const workspace = await this.workspaceTracker.getWorkspaceFromContext(
          request.context!,
        );
        if (workspace === null) {
          throw new ApiError(`Workspace not found: ${request.context!.versionControlInfo?.repositoryFullname}`, 422);
        }

        await handleGoToDefinition(request, workspace!.uri!);
      } catch (e) {
        console.error(e);
      }



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

    resolveSymbol: async (request: gc.ResolveSymbolRequest, context: rpc.ServerCallContext): Promise<gc.ResolveSymbolResponse> => {
      context.sendResponseHeaders({
        'status': 'processing...'
      });

      context.trailers = {
        'status': '...done'
      };

      try {
        const workspace = await this.workspaceTracker.getWorkspaceFromContext(
          request.context!,
        );
        if (workspace === null) {
          throw new ApiError(`Workspace not found: ${request.context!.versionControlInfo?.repositoryFullname}`, 422);
        }

        return await handleResolveSymbol(request, workspace!.uri!);
      } catch (e) {
        console.error(e);
        return gc.ResolveSymbolResponse.create({ found: false });
      }
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
  };


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
      // grpc.ServerCredentials.createInsecure(),
      grpc.ServerCredentials.createSsl(
        null, // rootCerts - null since we're not validating client certs
        [{
          private_key: privateKey,
          cert_chain: certChain
        }],
        false // checkClientCertificate - matches rejectUnauthorized setting
      ),
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
    // Close all client connections
    for (const [clientId, connection] of this.clientConnections) {
      connection.stream.end();
    }
    this.clientConnections.clear();
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
        if (validateAuthorizationMetadata(metadata, password)) {
          next(metadata);
        } else {
          console.error("Not authenticated");
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