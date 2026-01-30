import * as vscode from "vscode";
import * as path from "path";
import * as gc from "../../../gen/ide";
import { defaultExclusions, isBinaryFile } from "./file-filters";
import { toUnixPath, toNativePath } from "../../../util";

interface SearchResult {
  filePath: string;
  lineNumber: number;
  lineContent: string;
  matchStart: number;
  matchEnd: number;
  contextBefore: string[];
  contextAfter: string[];
}

/**
 * Search for a pattern in workspace files using VSCode's search API
 */
async function searchInWorkspace(
  workspaceUri: vscode.Uri,
  pattern: string,
  options: {
    includedFiles?: string[];
    excludedFiles?: string[];
    caseSensitive?: boolean;
    useRegex?: boolean;
    maxResults?: number;
    contextLines?: number;
  }
): Promise<{ results: SearchResult[]; truncated: boolean; totalMatches: number }> {
  const results: SearchResult[] = [];
  let totalMatches = 0;
  const maxResults = options.maxResults || 500;
  const contextLines = options.contextLines || 2;

  // Build include pattern
  let includePattern: vscode.GlobPattern;
  if (options.includedFiles && options.includedFiles.length > 0) {
    // If specific files are provided, create a pattern for them
    // Convert incoming UNIX-style paths to native format
    const relativePaths = options.includedFiles.map(f => {
      const nativePath = toNativePath(f);
      return nativePath.startsWith('/') || nativePath.startsWith('\\') 
        ? path.relative(workspaceUri.fsPath, nativePath) 
        : nativePath;
    });
    includePattern = new vscode.RelativePattern(workspaceUri, `{${relativePaths.join(',')}}`);
  } else {
    includePattern = new vscode.RelativePattern(workspaceUri, "**/*");
  }

  // Build exclude pattern
  const excludePatterns = [...defaultExclusions];
  if (options.excludedFiles) {
    excludePatterns.push(...options.excludedFiles);
  }
  const excludePattern = `{${excludePatterns.join(",")}}`;

  // Find all matching files first
  const files = await vscode.workspace.findFiles(includePattern, excludePattern, 1000);

  // Create the search pattern (escape if not using regex)
  let searchPattern: string;
  if (options.useRegex) {
    searchPattern = pattern;
  } else {
    // Escape special regex characters for literal search
    searchPattern = pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  const regex = new RegExp(
    searchPattern,
    options.caseSensitive ? 'g' : 'gi'
  );

  // Search through each file
  for (const fileUri of files) {
    if (results.length >= maxResults) {
      break;
    }

    // Skip binary files
    if (isBinaryFile(fileUri.fsPath)) {
      continue;
    }

    try {
      const document = await vscode.workspace.openTextDocument(fileUri);
      const text = document.getText();
      const lines = text.split('\n');
      const relativePath = toUnixPath(path.relative(workspaceUri.fsPath, fileUri.fsPath));

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        regex.lastIndex = 0; // Reset regex state
        
        let match;
        while ((match = regex.exec(line)) !== null) {
          totalMatches++;
          
          if (results.length < maxResults) {
            // Get context lines
            const contextBefore: string[] = [];
            const contextAfter: string[] = [];

            for (let j = Math.max(0, i - contextLines); j < i; j++) {
              contextBefore.push(lines[j]);
            }
            for (let j = i + 1; j <= Math.min(lines.length - 1, i + contextLines); j++) {
              contextAfter.push(lines[j]);
            }

            results.push({
              filePath: relativePath,
              lineNumber: i + 1, // 1-indexed
              lineContent: line,
              matchStart: match.index,
              matchEnd: match.index + match[0].length,
              contextBefore,
              contextAfter,
            });
          }

          // For non-global regex or zero-length matches, break to avoid infinite loop
          if (!regex.global || match[0].length === 0) {
            break;
          }
        }
      }
    } catch {
      // Skip files that can't be opened (binary, too large, etc.)
      // Silently ignore - binary files are already filtered above
    }
  }

  return {
    results,
    truncated: totalMatches > maxResults,
    totalMatches,
  };
}

/**
 * Handle search request from GooseCode
 */
export async function handleSearchRequest(
  request: gc.SearchRequest,
  workspaceUri: vscode.Uri,
): Promise<gc.SearchResponse> {
  if (request.data.oneofKind !== "pattern") {
    // For now, only pattern search is supported
    // FindUses would require symbol analysis
    return gc.SearchResponse.create({
      type: gc.SearchType.USES,
      data: {
        oneofKind: "uses",
        uses: gc.FindUsesResult.create({ locations: [] }),
      },
    });
  }

  const patternRequest = request.data.pattern;
  const searchPattern = patternRequest.searchPattern;

  if (!searchPattern || searchPattern.trim() === "") {
    return gc.SearchResponse.create({
      type: gc.SearchType.PATTERN,
      data: {
        oneofKind: "pattern",
        pattern: gc.FindPatternResult.create({
          locations: [],
          matches: [],
          truncated: false,
          totalMatches: 0,
        }),
      },
    });
  }

  const { results, truncated, totalMatches } = await searchInWorkspace(
    workspaceUri,
    searchPattern,
    {
      includedFiles: patternRequest.includedFiles,
      excludedFiles: patternRequest.excludedFiles,
      caseSensitive: patternRequest.caseSensitive,
      useRegex: patternRequest.useRegex,
      maxResults: patternRequest.maxResults || 500,
      contextLines: patternRequest.contextLines || 2,
    }
  );

  // Convert to proto format
  const matches: gc.SearchMatch[] = results.map((r) =>
    gc.SearchMatch.create({
      filePath: r.filePath,
      lineNumber: r.lineNumber,
      lineContent: r.lineContent,
      matchStart: r.matchStart,
      matchEnd: r.matchEnd,
      contextBefore: r.contextBefore,
      contextAfter: r.contextAfter,
    })
  );

  // Also create Location objects for backward compatibility
  const locations: gc.Location[] = results.map((r) =>
    gc.Location.create({
      path: r.filePath,
      range: gc.Range.create({
        start: gc.Position.create({
          line: BigInt(r.lineNumber - 1), // 0-indexed for Location
          character: BigInt(r.matchStart),
        }),
        end: gc.Position.create({
          line: BigInt(r.lineNumber - 1),
          character: BigInt(r.matchEnd),
        }),
      }),
    })
  );

  return gc.SearchResponse.create({
    type: gc.SearchType.PATTERN,
    data: {
      oneofKind: "pattern",
      pattern: gc.FindPatternResult.create({
        locations,
        matches,
        truncated,
        totalMatches,
      }),
    },
  });
}
