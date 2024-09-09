/* eslint-disable @typescript-eslint/naming-convention */

// Your TypeScript code here
import { parse, stringify } from "smol-toml";
import * as fs from "fs";
import { v4 as uuidv4 } from "uuid";
import { getProjectRoot } from "./goosecode/commands/commands";
import * as crypto from "crypto";
import * as vscode from "vscode";
import { ServerOptions } from "https";
import { createTLSOptions } from "./tls";

const configFileName = ".goose";

export type CodeSourceID = string;

// Define the GooseCode type
type GooseCodeWorkspace = {
  code_source_id: CodeSourceID;
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

export function loadWorkspaceConfiguration(): GooseCodeWorkspaceConfig {
  const path = getProjectRoot() + configFileName;

  // If file doesn't exist, create it
  if (!fs.existsSync(path)) {
    // Generate a uuid
    const uuid = uuidv4();
    const t = stringify({
      GooseCode: {
        code_source_id: uuid,
      },
    });
    fs.writeFileSync(path, t);
  }

  const c = fs.readFileSync(path, "utf-8");
  const parsed = parse(c);

  console.log("Parsed config file: ", parsed);
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
