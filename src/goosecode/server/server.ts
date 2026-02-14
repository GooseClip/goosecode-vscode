import * as http from "node:http";
import * as http2 from "node:http2";
import { connectNodeAdapter } from "@connectrpc/connect-node";
import { createValidateInterceptor } from "@connectrpc/validate";
import { Code, ConnectError, cors as connectCors, type ConnectRouter, type Interceptor } from "@connectrpc/connect";
import { create } from "@bufbuild/protobuf";
import {
  IDEService,
  SelectResponseSchema,
  NavigateResponseSchema,
  SearchResponseSchema,
  ProbeResponseSchema,
  RefactorResponseSchema,
  ResolveSymbolResponseSchema,
  VersionControlDetailsResponseSchema,
  LintResponseSchema,
  GetIgnorePatternsResponseSchema,
  SetIgnorePatternsResponseSchema,
  ListFileCommitsResponseSchema,
  GetFileAtCommitResponseSchema,
  GetFileDiffResponseSchema,
  ProbeType,
} from "../../gen/ide-connect/v1/api_pb";
import {
  PushResponseSchema,
  PushContextSchema,
  PushType,
  WorkspacesPushSchema,
  type PushResponse,
} from "../../gen/ide-connect/v1/push_pb";
import {
  WorkspaceDetailsSchema,
  type WorkspaceDetails,
} from "../../gen/ide-connect/v1/workspace_pb";
import { VersionControlInfoSchema } from "../../gen/ide-connect/v1/version_control_pb";
import { GooseCodeExtensionConfig } from "../../config";
import { handleGetFilesRequest } from "./handlers/get-files";
import { ApiError } from "../errors";
import { Workspace, WorkspaceTracker } from "../../workspace-tracker";
import { getGitInfoFromVscodeApi, GitInfo } from "../../git";
import * as vscode from "vscode";
import { handleListFilesRequest } from "./handlers/list-files";
import { handleGoToDefinition } from "./handlers/go-to";
import { handleResolveSymbol } from "./handlers/resolve-symbol";
import { handleSearchRequest } from "./handlers/search";
import {
  handleGetIgnorePatternsRequest,
  handleSetIgnorePatternsRequest,
} from "./handlers/goosecodeignore";
import {
  handleListFileCommits,
  handleGetFileAtCommit,
  handleGetFileDiff,
} from "./handlers/commit-history";
import * as path from "path";
import { toUnixPath } from "../../util";

const MAX_CHANNEL_QUEUE_SIZE = 1000;

function createChannel<T>() {
  const queue: T[] = [];
  let resolve: (() => void) | null = null;
  let done = false;
  return {
    push(value: T) {
      if (queue.length >= MAX_CHANNEL_QUEUE_SIZE) {
        console.warn(
          `Channel queue exceeded ${MAX_CHANNEL_QUEUE_SIZE} items, dropping oldest message`,
        );
        queue.shift();
      }
      queue.push(value);
      resolve?.();
    },
    close() {
      done = true;
      resolve?.();
    },
    async *[Symbol.asyncIterator]() {
      while (!done || queue.length > 0) {
        if (queue.length > 0) {
          yield queue.shift()!;
        } else {
          await new Promise<void>((r) => (resolve = r));
        }
      }
    },
  };
}

interface ClientConnection {
  channel: ReturnType<typeof createChannel<PushResponse>>;
  clientId: string;
}

export class GooseCodeServer {
  constructor(
    private readonly workspaceTracker: WorkspaceTracker,
    public readonly extensionConfig: GooseCodeExtensionConfig,
    private readonly onConnected: () => void,
    private readonly onClosed: () => void,
  ) {}

  public get connected(): boolean {
    return this.server !== null;
  }

  public get port(): number {
    return this.extensionConfig.settings.port;
  }

  private clientConnections: Map<string, ClientConnection> = new Map();
  private server: http.Server | http2.Http2SecureServer | null = null;

  public async push(message: PushResponse) {
    if (this.clientConnections.size === 0) {
      console.warn("Cannot push message: no clients connected.");
      return;
    }

    if (message.type === PushType.FILE_COMMAND) {
      const activeWorkspace =
        this.workspaceTracker.getLastActiveGooseCodeWorkspace();
      if (!activeWorkspace) {
        console.error("[PUSH]", "No active workspace found");
        return;
      }
      const filepath = this.workspaceTracker.currentFilePath();
      const workspaceRoot = activeWorkspace.uri.fsPath;
      const isExternal =
        !(
          filepath === workspaceRoot ||
          filepath.startsWith(workspaceRoot + path.sep)
        ) || /[\\/]node_modules[\\/]/.test(filepath);

      let gitInfo: GitInfo | null;
      if (isExternal) {
        gitInfo = {
          repositoryRoot: workspaceRoot,
          repositoryFullName: activeWorkspace.config!.config.repositoryFullName,
          branch: "ext-dep",
          commit: "ext-dep",
          stagedFiles: [],
          unstagedFiles: [],
        };
      } else {
        gitInfo = await getGitInfoFromVscodeApi(vscode.Uri.file(filepath));
      }

      message.context = create(PushContextSchema, {
        workspaceRoot: toUnixPath(activeWorkspace.uri.fsPath),
        versionControl: create(VersionControlInfoSchema, {
          repositoryFullname:
            gitInfo?.repositoryFullName ||
            activeWorkspace.config!.config.repositoryFullName,
          branch: gitInfo?.branch ?? "",
          commit: gitInfo?.commit ?? "",
        }),
      });
    }

    for (const [clientId, connection] of this.clientConnections) {
      try {
        connection.channel.push(message);
      } catch (e) {
        console.error(`Failed to push to client ${clientId}:`, e);
      }
    }
  }

  public pushWorkspacesToGooseCode(
    workspaces: Workspace[],
    deleted?: WorkspaceDetails,
  ) {
    const toSend: WorkspaceDetails[] = [];

    if (workspaces) {
      for (const workspace of workspaces) {
        toSend.push(
          create(WorkspaceDetailsSchema, {
            workspaceRoot: toUnixPath(workspace.uri.fsPath),
            versionControlInfo: create(VersionControlInfoSchema, {
              repositoryFullname: workspace.config!.config.repositoryFullName,
              branch: workspace.config!.config.branch,
              commit: workspace.config!.config.commit,
            }),
            deleted: false,
          }),
        );
      }
    }

    if (deleted) {
      toSend.push(deleted);
    }

    this.push(
      create(PushResponseSchema, {
        type: PushType.WORKSPACES,
        data: {
          case: "workspaces",
          value: create(WorkspacesPushSchema, {
            workspaces: toSend.map((w) =>
              create(WorkspaceDetailsSchema, {
                workspaceRoot: w.workspaceRoot,
                versionControlInfo: w.versionControlInfo,
                deleted: w.deleted,
              }),
            ),
          }),
        },
      }),
    );
  }

  private createRoutes(): (router: ConnectRouter) => void {
    const self = this;
    return (router: ConnectRouter) => {
      router.service(IDEService, {
        async *push(request, context) {
          const clientIdHeader = context.requestHeader.get("x-client-id");
          const clientId =
            clientIdHeader ||
            `anon-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

          const existingConnection = self.clientConnections.get(clientId);
          if (existingConnection) {
            console.warn(
              `Client ${clientId} is reconnecting. Replacing their existing connection.`,
            );
            existingConnection.channel.close();
            self.clientConnections.delete(clientId);
          }

          console.log(
            `Client ${clientId} connected to push stream. Total clients: ${self.clientConnections.size + 1}`,
          );
          const channel = createChannel<PushResponse>();
          self.clientConnections.set(clientId, { channel, clientId });

          if (self.clientConnections.size === 1) {
            self.onConnected();
          }

          yield create(PushResponseSchema, { type: PushType.UNSPECIFIED });

          const workspaces = await self.workspaceTracker.refresh();
          setTimeout(() => {
            self.pushWorkspacesToGooseCode(workspaces);
          }, 1000);

          let cleanedUp = false;
          const cleanup = () => {
            if (cleanedUp) return;
            cleanedUp = true;
            const currentConnection = self.clientConnections.get(clientId);
            if (currentConnection?.channel === channel) {
              self.clientConnections.delete(clientId);
            }
            if (self.clientConnections.size === 0) {
              self.onClosed();
            }
          };

          // Register abort handler for client disconnect cleanup.
          // Node 16 types don't include addEventListener on AbortSignal,
          // but the runtime does support it. Use a fallback if unavailable.
          const signal = context.signal;
          if (typeof (signal as any).addEventListener === "function") {
            (signal as any).addEventListener("abort", () => {
              channel.close();
              cleanup();
            });
          } else {
            // Polling fallback for environments without addEventListener
            const abortInterval = setInterval(() => {
              if (signal.aborted) {
                clearInterval(abortInterval);
                channel.close();
                cleanup();
              }
            }, 1000);
          }

          try {
            for await (const m of channel) {
              yield m;
            }
          } catch (e) {
            console.error(
              `Error reading from client ${clientId} push stream:`,
              e,
            );
          } finally {
            channel.close();
            cleanup();
          }
        },

        async getFiles(request) {
          try {
            const workspace =
              await self.workspaceTracker.getWorkspaceFromContext(
                request.context!,
              );
            if (workspace === null) {
              throw new ApiError(
                `Workspace not found: ${request.context!.versionControlInfo?.repositoryFullname}`,
                422,
              );
            }
            return await handleGetFilesRequest(request, workspace!.uri!);
          } catch (e) {
            console.error(e);
            throw toConnectError(e);
          }
        },

        async listFiles(request) {
          try {
            const workspace =
              await self.workspaceTracker.getWorkspaceFromContext(
                request.context!,
              );
            if (workspace === null) {
              throw new ApiError(
                `Workspace not found: ${request.context!.versionControlInfo?.repositoryFullname}`,
                422,
              );
            }
            return await handleListFilesRequest(request, workspace.uri!);
          } catch (e) {
            console.error(e);
            throw toConnectError(e);
          }
        },

        async select() {
          return create(SelectResponseSchema, {});
        },

        async navigate(request) {
          try {
            const workspace =
              await self.workspaceTracker.getWorkspaceFromContext(
                request.context!,
              );
            if (workspace === null) {
              throw new ApiError(
                `Workspace not found: ${request.context!.versionControlInfo?.repositoryFullname}`,
                422,
              );
            }
            await handleGoToDefinition(request, workspace!.uri!);
          } catch (e) {
            console.error(e);
          }
          return create(NavigateResponseSchema, {});
        },

        async search(request) {
          try {
            if (!request.context) {
              throw new ApiError("Request context is required", 400);
            }
            const workspace =
              await self.workspaceTracker.getWorkspaceFromContext(
                request.context,
              );
            if (workspace === null) {
              throw new ApiError(
                `Workspace not found: ${request.context.versionControlInfo?.repositoryFullname}`,
                422,
              );
            }
            return await handleSearchRequest(request, workspace.uri!);
          } catch (e) {
            console.error("Search error:", e);
            return create(SearchResponseSchema, {});
          }
        },

        async probe() {
          return create(ProbeResponseSchema, { type: ProbeType.PING });
        },

        async refactor() {
          return create(RefactorResponseSchema, {});
        },

        async resolveSymbol(request) {
          try {
            const workspace =
              await self.workspaceTracker.getWorkspaceFromContext(
                request.context!,
              );
            if (workspace === null) {
              throw new ApiError(
                `Workspace not found: ${request.context!.versionControlInfo?.repositoryFullname}`,
                422,
              );
            }
            return await handleResolveSymbol(request, workspace!.uri!);
          } catch (e) {
            console.error(e);
            return create(ResolveSymbolResponseSchema, { found: false });
          }
        },

        async versionControlDetails() {
          return create(VersionControlDetailsResponseSchema, {});
        },

        async lint() {
          return create(LintResponseSchema, {});
        },

        async getIgnorePatterns(request) {
          try {
            if (!request.context) {
              throw new ApiError("Request context is required", 400);
            }
            const workspace =
              await self.workspaceTracker.getWorkspaceFromContext(
                request.context,
              );
            if (workspace === null) {
              throw new ApiError(
                `Workspace not found: ${request.context.versionControlInfo?.repositoryFullname}`,
                422,
              );
            }
            return await handleGetIgnorePatternsRequest(
              request,
              workspace.uri!,
            );
          } catch (e) {
            console.error("GetIgnorePatterns error:", e);
            return create(GetIgnorePatternsResponseSchema, {
              goosecodeignoreContent: "",
              gitignorePatterns: [],
              goosecodeignoreExists: false,
            });
          }
        },

        async setIgnorePatterns(request) {
          try {
            if (!request.context) {
              throw new ApiError("Request context is required", 400);
            }
            const workspace =
              await self.workspaceTracker.getWorkspaceFromContext(
                request.context,
              );
            if (workspace === null) {
              throw new ApiError(
                `Workspace not found: ${request.context.versionControlInfo?.repositoryFullname}`,
                422,
              );
            }
            return await handleSetIgnorePatternsRequest(
              request,
              workspace.uri!,
            );
          } catch (e) {
            console.error("SetIgnorePatterns error:", e);
            return create(SetIgnorePatternsResponseSchema, {
              success: false,
              error: e instanceof Error ? e.message : "Unknown error",
            });
          }
        },

        async listFileCommits(request) {
          try {
            if (!request.context) {
              throw new ApiError("Request context is required", 400);
            }
            const workspace =
              await self.workspaceTracker.getWorkspaceFromContext(
                request.context,
              );
            if (workspace === null) {
              throw new ApiError(
                `Workspace not found: ${request.context.versionControlInfo?.repositoryFullname}`,
                422,
              );
            }
            return await handleListFileCommits(request, workspace.uri!);
          } catch (e) {
            console.error("ListFileCommits error:", e);
            return create(ListFileCommitsResponseSchema, {
              commits: [],
              hasNextPage: false,
              totalCount: 0,
            });
          }
        },

        async getFileAtCommit(request) {
          try {
            if (!request.context) {
              throw new ApiError("Request context is required", 400);
            }
            const workspace =
              await self.workspaceTracker.getWorkspaceFromContext(
                request.context,
              );
            if (workspace === null) {
              throw new ApiError(
                `Workspace not found: ${request.context.versionControlInfo?.repositoryFullname}`,
                422,
              );
            }
            return await handleGetFileAtCommit(request, workspace.uri!);
          } catch (e) {
            console.error("GetFileAtCommit error:", e);
            return create(GetFileAtCommitResponseSchema, {
              content: "",
              fileExisted: false,
            });
          }
        },

        async getFileDiff(request) {
          try {
            if (!request.context) {
              throw new ApiError("Request context is required", 400);
            }
            const workspace =
              await self.workspaceTracker.getWorkspaceFromContext(
                request.context,
              );
            if (workspace === null) {
              throw new ApiError(
                `Workspace not found: ${request.context.versionControlInfo?.repositoryFullname}`,
                422,
              );
            }
            return await handleGetFileDiff(request, workspace.uri!);
          } catch (e) {
            console.error("GetFileDiff error:", e);
            return create(GetFileDiffResponseSchema, {
              diff: "",
              hasChanges: false,
            });
          }
        },
      });
    };
  }

  public async start(): Promise<{
    success: boolean;
    error?: { code: string; message: string };
  }> {
    const port = this.extensionConfig.settings.port;
    const ip = this.extensionConfig.settings.localhostOnly
      ? "127.0.0.1"
      : "0.0.0.0";
    const useTLS = this.extensionConfig.settings.useTLS ?? true;

    const authInterceptor: Interceptor = (next) => async (req) => {
      const auth = req.header.get("authorization");
      if (auth !== this.extensionConfig.settings.password) {
        console.error("Not authenticated");
        throw new ConnectError(
          "Not authenticated",
          Code.Unauthenticated,
        );
      }
      return next(req);
    };

    const handler = connectNodeAdapter({
      routes: this.createRoutes(),
      interceptors: [authInterceptor, createValidateInterceptor()],
    });

    // Precompute static CORS header values
    const corsMethods = connectCors.allowedMethods.join(",");
    const corsHeaders = [...connectCors.allowedHeaders, "authorization", "x-client-id"].join(",");
    const corsExposed = connectCors.exposedHeaders.join(",");

    // Wrap handler with CORS support for web browser clients
    const corsHandler = (req: http.IncomingMessage | http2.Http2ServerRequest, res: http.ServerResponse | http2.Http2ServerResponse) => {
      const origin = (req.headers.origin as string) || "*";
      res.setHeader("Access-Control-Allow-Origin", origin);
      res.setHeader("Access-Control-Allow-Methods", corsMethods);
      res.setHeader("Access-Control-Allow-Headers", corsHeaders);
      res.setHeader("Access-Control-Expose-Headers", corsExposed);
      res.setHeader("Access-Control-Max-Age", "86400");

      // Handle preflight
      if (req.method === "OPTIONS") {
        res.writeHead(204);
        res.end();
        return;
      }

      handler(req, res);
    };

    return new Promise((resolve) => {
      const onError = (err: Error) => {
        const errorCode = (err as NodeJS.ErrnoException).code ?? "UNKNOWN";
        console.error(`Server error: ${err.message} (${errorCode})`);
        this.server?.close();
        this.server = null;
        resolve({ success: false, error: { code: errorCode, message: err.message } });
      };

      try {
        if (useTLS) {
          if (
            !this.extensionConfig.tlsOptions.key ||
            !this.extensionConfig.tlsOptions.cert
          ) {
            resolve({
              success: false,
              error: {
                code: "TLS_ERROR",
                message: "TLS key or certificate is missing",
              },
            });
            return;
          }

          let privateKey: Buffer;
          if (Buffer.isBuffer(this.extensionConfig.tlsOptions.key)) {
            privateKey = this.extensionConfig.tlsOptions.key;
          } else if (typeof this.extensionConfig.tlsOptions.key === "string") {
            privateKey = Buffer.from(
              this.extensionConfig.tlsOptions.key,
              "utf-8",
            );
          } else {
            resolve({
              success: false,
              error: { code: "TLS_ERROR", message: "Invalid TLS key format" },
            });
            return;
          }

          let certChain: Buffer;
          if (Buffer.isBuffer(this.extensionConfig.tlsOptions.cert)) {
            certChain = this.extensionConfig.tlsOptions.cert;
          } else if (typeof this.extensionConfig.tlsOptions.cert === "string") {
            certChain = Buffer.from(
              this.extensionConfig.tlsOptions.cert,
              "utf-8",
            );
          } else {
            resolve({
              success: false,
              error: {
                code: "TLS_ERROR",
                message: "Invalid TLS certificate format",
              },
            });
            return;
          }

          this.server = http2.createSecureServer(
            { key: privateKey, cert: certChain },
            corsHandler,
          );
        } else {
          this.server = http.createServer(corsHandler);
        }

        this.server.on("error", onError);
        this.server.listen(port, ip, () => {
          console.log(`Server bound on port: ${port}`);
          console.log("Server started: ", `${ip}:${port}`);
          resolve({ success: true });
        });
      } catch (err) {
        onError(err as Error);
      }
    });
  }

  public stop() {
    for (const [, connection] of this.clientConnections) {
      connection.channel.close();
    }
    this.clientConnections.clear();
    if (this.server) {
      this.server.close();
      // Forcefully terminate existing connections for parity with old
      // gRPC forceShutdown(). closeAllConnections() is available in Node 18.2+.
      if (typeof (this.server as any).closeAllConnections === "function") {
        (this.server as any).closeAllConnections();
      }
      this.server = null;
    }
  }
}

function toConnectError(e: unknown): ConnectError {
  if (e instanceof ApiError) {
    const code =
      e.code === 400
        ? Code.InvalidArgument
        : e.code === 422
          ? Code.InvalidArgument
          : Code.Internal;
    return new ConnectError(e.message, code);
  }
  if (e instanceof ConnectError) {
    return e;
  }
  return new ConnectError(
    "Internal error",
    Code.Internal,
    undefined,
    undefined,
    e,
  );
}
