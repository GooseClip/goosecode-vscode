/* eslint-disable @typescript-eslint/naming-convention */

// Your TypeScript code here
import { parse, stringify } from "smol-toml";
import * as fs from "fs";
import { v4 as uuidv4 } from "uuid";
import * as crypto from "crypto";
import * as vscode from "vscode";
import { ServerOptions } from "https";
import { createTLSOptions } from "./tls";
import * as path from "node:path";
import { getGitInfoFromVscodeApi } from "./git";
import { Uri } from "vscode";
import * as os from "os";
import * as gc from "./gen/ide";

const globalConfigDir = path.join(
  os.homedir(),
  ".config",
  "gooseclip",
  "goosecode",
);
const globalConfigPath = path.join(
  globalConfigDir,
  "goosecode-vscode-extension.toml",
);

const configFileName = ".goose";

function getWorkspaceId(p: string): string {
  return crypto.createHash("md5").update(p).digest("hex");
}

// Define the GooseCode type
type GooseCodeWorkspace = {
  path: string;
  repositoryFullName: string;
  branch: string;
  commit: string;
};

// New types
export type GooseCodeWorkspaces = {
  [path: string]: GooseCodeWorkspace;
};

export type ConfigWrapper = {
  GooseCode: GooseCodeWorkspaces;
};

export type GooseCodeSettings = {
  port: number;
  localhostOnly: boolean;
  startAutomatically: boolean;
  password: string;
};

export type GooseCodeWorkspaceConfig = {
  config: GooseCodeWorkspace;
};

export type GooseCodeExtensionConfig = {
  settings: GooseCodeSettings;
  tlsOptions: ServerOptions;
};

function getGlobalConfigPath(): string {
  if (!fs.existsSync(globalConfigDir)) {
    fs.mkdirSync(globalConfigDir, { recursive: true });
  }
  return globalConfigPath;
}

async function loadAllWorkspaces(): Promise<ConfigWrapper> {
  const p = getGlobalConfigPath();
  if (!fs.existsSync(p)) {
    console.warn("config file doesn't exist: $p");
    return { GooseCode: {} };
  }
  const content = fs.readFileSync(p, "utf-8");
  const parsed = parse(content) as any;
  if (!parsed.GooseCode) {
    console.warn("failed to parse config");
    return { GooseCode: {} };
  }
  return parsed as ConfigWrapper;
}

async function saveAllWorkspaces(config: ConfigWrapper): Promise<void> {
  const p = getGlobalConfigPath();
  const content = stringify(config);
  fs.writeFileSync(p, content);
}

export async function findWorkspace(
  context: gc.Context,
): Promise<GooseCodeWorkspace | null> {
  const allWorkspaces = await loadAllWorkspaces();
  const workspaces = Object.values(allWorkspaces.GooseCode);

  // Use the repository fullname and commit in search
  if (context.versionControlInfo?.commit) {
    const hit = workspaces.find(
      (w) =>
        w.repositoryFullName ===
        context.versionControlInfo?.repositoryFullname &&
        w.commit === context.versionControlInfo?.commit,
    );
    if (hit) {
      return hit;
    }
  }

  // Use the repository fullname in search
  const hit = workspaces.find(
    (w) =>
      w.repositoryFullName === context.versionControlInfo?.repositoryFullname,
  );
  return hit || null;
}

export async function updateWorkspaceConfiguration(
  config: GooseCodeWorkspaceConfig,
  root: string,
  commit: string,
  branch?: string,
): Promise<GooseCodeWorkspaceConfig> {
  const globalConfig = await loadAllWorkspaces();
  const newWorkspaceConfig: GooseCodeWorkspace = {
    path: root,
    repositoryFullName: config?.config?.repositoryFullName ?? "",
    branch: branch ?? "",
    commit: commit,
  };

  globalConfig.GooseCode[getWorkspaceId(root)] = newWorkspaceConfig;
  await saveAllWorkspaces(globalConfig);
  return { config: newWorkspaceConfig };
}

export async function removeWorkspaceConfiguration(
  root: string,
): Promise<GooseCodeWorkspace | null> {
  const globalConfig = await loadAllWorkspaces();
  const workspaceId = getWorkspaceId(root);
  const existing = globalConfig.GooseCode[workspaceId];
  if (existing) {
    delete globalConfig.GooseCode[workspaceId];
    await saveAllWorkspaces(globalConfig);
    return existing;
  }

  return null;
}

export async function loadWorkspaceConfiguration(
  root: string,
  create: boolean,
): Promise<GooseCodeWorkspaceConfig | null> {
  const globalConfig = await loadAllWorkspaces();
  const workspaceId = getWorkspaceId(root);
  let workspaceConfig = globalConfig.GooseCode[workspaceId];
  if (workspaceConfig) {
    return { config: workspaceConfig };
  }

  if (!create) {
    return null;
  }

  // If file doesn't exist, create it
  // Generate a uuid
  const gitInfo = await getGitInfoFromVscodeApi(Uri.file(root));
  // dart: base64Encode(utf8.encode("${repository.fullName}@${commit}"))
  const valid = gitInfo?.repositoryFullName && gitInfo?.commit;
  const c: GooseCodeWorkspace = {
    path: root,
    repositoryFullName: gitInfo?.repositoryFullName ?? "",
    branch: gitInfo?.branch ?? "",
    commit: gitInfo?.commit ?? "",
  };

  globalConfig.GooseCode[workspaceId] = c;
  await saveAllWorkspaces(globalConfig);

  return {
    config: c,
  };
}

export async function loadGlobalConfigurations(
  context: vscode.ExtensionContext,
): Promise<GooseCodeExtensionConfig> {
  // Get settings from vscode configuration
  const settings: GooseCodeSettings = {
    startAutomatically: vscode.workspace
      .getConfiguration("goosecode")
      .get("startAutomatically") as boolean,
    port: vscode.workspace
      .getConfiguration("goosecode")
      .get("connections.port") as number,
    localhostOnly: vscode.workspace
      .getConfiguration("goosecode")
      .get("connections.localhostOnly") as boolean,
    password: vscode.workspace
      .getConfiguration("goosecode")
      .get("connections.password") as string,
  };

  const { tlsOptions, created } = await createTLSOptions(context);

  if (created) {
    const password = generatePassword(32);
    // Save the password to the configuration at the user level
    vscode.workspace
      .getConfiguration("goosecode")
      .update(
        "connections.password",
        password,
        vscode.ConfigurationTarget.Global,
      );
    settings.password = password;
  }

  return {
    settings: settings,
    tlsOptions: tlsOptions,
  };
}

export function generatePassword(length: number): string {
  const validChars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let password = "";
  while (password.length < length) {
    const bytes = crypto.randomBytes(length);
    bytes.forEach((byte) => {
      if (password.length < length && byte < 256 - (256 % validChars.length)) {
        password += validChars.charAt(byte % validChars.length);
      }
    });
  }
  return password;
}
