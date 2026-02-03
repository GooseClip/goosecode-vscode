import * as fs from "fs";
import * as path from "path";
import * as vscode from "vscode";

export interface IgnoreConfig {
  /** Combined exclude patterns from .gitignore + .goosecodeignore */
  excludePatterns: string[];
  /** Include patterns from .goosecodeignore (!except: or ! syntax) that override exclusions */
  includePatterns: string[];
  /** Raw .gitignore patterns for display in UI */
  gitignorePatterns: string[];
  /** Raw .goosecodeignore content */
  goosecodeignoreContent: string;
  /** Whether .goosecodeignore file exists */
  goosecodeignoreExists: boolean;
}

/**
 * Parse a gitignore-style file content into patterns.
 * Filters out comments and empty lines.
 */
function parseIgnoreFile(content: string): string[] {
  return content
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("#"));
}

/**
 * Parse .goosecodeignore content into exclude and include patterns.
 *
 * Supports:
 * - Standard patterns (same as .gitignore): exclude files
 * - !pattern: Standard negation, include these files
 * - !except:pattern: Override .gitignore, include these files despite gitignore
 */
function parseGooseCodeIgnore(content: string): {
  excludePatterns: string[];
  includePatterns: string[];
} {
  const excludePatterns: string[] = [];
  const includePatterns: string[] = [];

  for (const line of content.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;

    if (trimmed.startsWith("!except:")) {
      // Override gitignore - INCLUDE these files even if gitignored
      const pattern = trimmed.slice(8).trim();
      if (pattern) {
        includePatterns.push(pattern);
      }
    } else if (trimmed.startsWith("!")) {
      // Standard negation - include these files
      const pattern = trimmed.slice(1).trim();
      if (pattern) {
        includePatterns.push(pattern);
      }
    } else {
      // Standard exclusion pattern
      excludePatterns.push(trimmed);
    }
  }

  return { excludePatterns, includePatterns };
}


// Convert a gitignore pattern to a VS Code glob pattern.
//
// Gitignore patterns need some conversion:
// - dir/ becomes **/dir/** (directory anywhere)
// - *.ext becomes **/*.ext (file extension anywhere, if no path separator)
// - Leading / means root-relative, otherwise matches anywhere
//
function gitignoreToGlob(pattern: string): string {
  let glob = pattern;

  // Remove leading slash (indicates root-relative in gitignore)
  const isRootRelative = glob.startsWith("/");
  if (isRootRelative) {
    glob = glob.slice(1);
  }

  // Trailing slash means directory
  const isDirectory = glob.endsWith("/");
  if (isDirectory) {
    glob = glob.slice(0, -1);
  }

  // If pattern doesn't contain path separator and not root-relative,
  // it should match anywhere in the tree
  if (!isRootRelative && !glob.includes("/")) {
    glob = "**/" + glob;
  }

  // If it's a directory pattern, also match all contents
  if (isDirectory) {
    glob = glob + "/**";
  }

  return glob;
}

/**
 * Load ignore patterns from .gitignore and .goosecodeignore files.
 */
export async function loadIgnorePatterns(
  workspaceUri: vscode.Uri
): Promise<IgnoreConfig> {
  const excludePatterns: string[] = [];
  const includePatterns: string[] = [];
  const gitignorePatterns: string[] = [];
  let goosecodeignoreContent = "";
  let goosecodeignoreExists = false;

  // 1. Load .gitignore
  const gitignorePath = path.join(workspaceUri.fsPath, ".gitignore");
  try {
    if (fs.existsSync(gitignorePath)) {
      const content = fs.readFileSync(gitignorePath, "utf8");
      const patterns = parseIgnoreFile(content);
      gitignorePatterns.push(...patterns);

      // Convert to glob patterns for exclusion
      for (const pattern of patterns) {
        // Skip negation patterns in gitignore (they're complex to handle)
        if (!pattern.startsWith("!")) {
          excludePatterns.push(gitignoreToGlob(pattern));
        }
      }
    }
  } catch (e) {
    // Silently ignore errors reading .gitignore
  }

  // 2. Load .goosecodeignore
  const goosecodeignorePath = path.join(
    workspaceUri.fsPath,
    ".goosecodeignore"
  );
  try {
    if (fs.existsSync(goosecodeignorePath)) {
      goosecodeignoreExists = true;
      goosecodeignoreContent = fs.readFileSync(goosecodeignorePath, "utf8");
      const parsed = parseGooseCodeIgnore(goosecodeignoreContent);

      // Add exclude patterns from .goosecodeignore
      for (const pattern of parsed.excludePatterns) {
        excludePatterns.push(gitignoreToGlob(pattern));
      }

      // Add include patterns (these override exclusions)
      for (const pattern of parsed.includePatterns) {
        includePatterns.push(gitignoreToGlob(pattern));
      }
    }
  } catch (e) {
    // Silently ignore errors reading .goosecodeignore
  }

  return {
    excludePatterns,
    includePatterns,
    gitignorePatterns,
    goosecodeignoreContent,
    goosecodeignoreExists,
  };
}

/**
 * Get .goosecodeignore content and .gitignore patterns for the UI.
 */
export async function getIgnorePatternsForUI(
  workspaceUri: vscode.Uri
): Promise<{
  goosecodeignoreContent: string;
  gitignorePatterns: string[];
  goosecodeignoreExists: boolean;
}> {
  const config = await loadIgnorePatterns(workspaceUri);
  return {
    goosecodeignoreContent: config.goosecodeignoreContent,
    gitignorePatterns: config.gitignorePatterns,
    goosecodeignoreExists: config.goosecodeignoreExists,
  };
}

/**
 * Write content to .goosecodeignore file.
 */
export async function setGooseCodeIgnoreContent(
  workspaceUri: vscode.Uri,
  content: string
): Promise<{ success: boolean; error?: string }> {
  const goosecodeignorePath = path.join(
    workspaceUri.fsPath,
    ".goosecodeignore"
  );

  try {
    fs.writeFileSync(goosecodeignorePath, content, "utf8");
    return { success: true };
  } catch (e) {
    return {
      success: false,
      error: e instanceof Error ? e.message : "Failed to write file",
    };
  }
}
