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

const configFileName = ".goose";

// Define the GooseCode type
type GooseCodeWorkspace = {
  repositoryFullName: string;
  branch: string;
  commit: string;
};

// Define the outer structure with GooseCode
// NOTE: There are plans for broader GooseClip product integrations
export type GooseClipConfig = {
  GooseCode: GooseCodeWorkspace;
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

export async function updateWorkspaceConfiguration(
  config: GooseCodeWorkspaceConfig,
  root: string,
  commit: string,
  branch?: string,
): Promise<GooseClipConfig> {

  const c: GooseClipConfig = {
    GooseCode: {
      repositoryFullName: config?.config?.repositoryFullName ?? "",
      branch: branch ?? "",
      commit: commit,
    },
  };
  const t = stringify(c);

  const p = path.join(root, configFileName);
  console.log(`[DEBUG][UPDATE CONFIG] ${p} ${t}`);
  fs.writeFileSync(p, t);

  return c;
}

export async function removeWorkspaceConfiguration(
  root: string,
): Promise<GooseCodeWorkspace | null> {
  const p = path.join(root, configFileName);
  const config = await loadWorkspaceConfiguration(root, false);
  const exists = fs.existsSync(p);
  if (exists) {
    fs.unlinkSync(p);
  }
  return config?.config ?? null;
}

export async function loadWorkspaceConfiguration(
  root: string,
  create: boolean,
): Promise<GooseCodeWorkspaceConfig | null> {
  const p = path.join(root, configFileName);
  const exists = fs.existsSync(p);

  if (!create && !exists) {
    return null;
  }

  // const fingerprint = Buffer.from(`${config?.config?.repositoryFullName}@${commit}`).toString('base64');
  // const fingerprint = valid ? Buffer.from(`${gitInfo?.repositoryFullName}@${gitInfo?.commit}`).toString('base64') : uuidv4();

  // If file doesn't exist, create it
  if (!exists) {
    // Generate a uuid
    const gitInfo = await getGitInfoFromVscodeApi(Uri.file(root));
    // dart: base64Encode(utf8.encode("${repository.fullName}@${commit}"))
    const valid = gitInfo?.repositoryFullName && gitInfo?.commit;
    const c: GooseClipConfig = {
      GooseCode: {
        repositoryFullName: gitInfo?.repositoryFullName ?? "",
        branch: gitInfo?.branch ?? "",
        commit: gitInfo?.commit ?? "",
      },
    };
    const t = stringify(c);
    fs.writeFileSync(p, t);
  }

  const c = fs.readFileSync(p, "utf-8");
  const parsed = parse(c);

  const config: GooseCodeWorkspace = (parsed as GooseClipConfig).GooseCode;

  return {
    config: config,
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

  console.log("GooseCode settings: ", settings);

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
