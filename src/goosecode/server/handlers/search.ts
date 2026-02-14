import * as vscode from "vscode";
import * as path from "path";
import { create } from "@bufbuild/protobuf";
import { defaultExclusions, isBinaryFile, sortFilesByPriority } from "./file-filters";
import { loadIgnorePatterns } from "./ignore-parser";
import { toUnixPath, toNativePath } from "../../../util";
import type { SearchRequest, SearchResponse } from "../../../gen/ide-connect/v1/api_pb";
import { SearchResponseSchema, SearchType, SearchMatchSchema, FindPatternResultSchema, FindUsesResultSchema } from "../../../gen/ide-connect/v1/api_pb";
import type { Location } from "../../../gen/ide-connect/v1/vscode_pb";
import { LocationSchema, PositionSchema, RangeSchema } from "../../../gen/ide-connect/v1/vscode_pb";

const MAX_FILES = 1000;

interface SearchResult {
  filePath: string;
  lineNumber: number;
  lineContent: string;
  matchStart: number;
  matchEnd: number;
  contextBefore: string[];
  contextAfter: string[];
}

interface SearchOutput {
  results: SearchResult[];
  truncated: boolean;
  totalMatches: number;
  filesTruncated: boolean;
  totalFilesSearched: number;
  totalFilesAvailable: number;
}

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
): Promise<SearchOutput> {
  const results: SearchResult[] = [];
  let totalMatches = 0;
  const maxResults = options.maxResults || 500;
  const contextLines = options.contextLines || 2;

  const ignoreConfig = await loadIgnorePatterns(workspaceUri);

  const allExclusions = [
    ...defaultExclusions,
    ...ignoreConfig.excludePatterns,
  ];
  if (options.excludedFiles && options.excludedFiles.length > 0) {
    allExclusions.push(...options.excludedFiles);
  }
  const excludePattern = allExclusions.length > 0 ? `{${allExclusions.join(",")}}` : undefined;

  console.log(`[Search] Exclude patterns (${allExclusions.length}):`, allExclusions.slice(0, 5), allExclusions.length > 5 ? '...' : '');

  let includePattern: vscode.GlobPattern;
  if (options.includedFiles && options.includedFiles.length > 0) {
    const patterns = options.includedFiles;
    console.log(`[Search] Include patterns:`, patterns);

    if (patterns.length === 1) {
      includePattern = new vscode.RelativePattern(workspaceUri, patterns[0]);
    } else {
      includePattern = new vscode.RelativePattern(workspaceUri, `{${patterns.join(",")}}`);
    }
  } else {
    includePattern = new vscode.RelativePattern(workspaceUri, "**/*");
  }

  let files = await vscode.workspace.findFiles(
    includePattern,
    excludePattern
  );

  console.log(`[Search] Found ${files.length} files from findFiles`);

  if (ignoreConfig.includePatterns.length > 0) {
    console.log(`[Search] Applying ${ignoreConfig.includePatterns.length} override patterns from .goosecodeignore`);
    try {
      const existingPaths = new Set(files.map(f => f.fsPath));
      for (const includeGlob of ignoreConfig.includePatterns) {
        const overridePattern = new vscode.RelativePattern(workspaceUri, includeGlob);
        const overrideFiles = await vscode.workspace.findFiles(overridePattern, undefined, 1000);

        for (const file of overrideFiles) {
          if (!existingPaths.has(file.fsPath)) {
            files.push(file);
            existingPaths.add(file.fsPath);
          }
        }
      }
      console.log(`[Search] After overrides: ${files.length} files`);
    } catch (e) {
      console.error('[Search] Error applying override patterns:', e);
    }
  }

  const totalFilesAvailable = files.length;
  const filesTruncated = files.length > MAX_FILES;

  if (filesTruncated) {
    console.log(`[Search] File list truncated: ${files.length} -> ${MAX_FILES}`);
    files = sortFilesByPriority(files);
    files = files.slice(0, MAX_FILES);
  } else {
    files = sortFilesByPriority(files);
  }

  const totalFilesSearched = files.length;
  console.log(`[Search] Searching ${totalFilesSearched} files for pattern: "${pattern}"`);

  let searchPattern: string;
  if (options.useRegex) {
    searchPattern = pattern;
  } else {
    searchPattern = pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  const regex = new RegExp(
    searchPattern,
    options.caseSensitive ? 'g' : 'gi'
  );

  for (const fileUri of files) {
    if (results.length >= maxResults) {
      break;
    }

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
        regex.lastIndex = 0;

        let match;
        while ((match = regex.exec(line)) !== null) {
          totalMatches++;

          if (results.length < maxResults) {
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
              lineNumber: i + 1,
              lineContent: line,
              matchStart: match.index,
              matchEnd: match.index + match[0].length,
              contextBefore,
              contextAfter,
            });
          }

          if (!regex.global || match[0].length === 0) {
            break;
          }
        }
      }
    } catch {
      // Skip files that can't be opened
    }
  }

  console.log(`[Search] Found ${totalMatches} total matches, returning ${results.length} results`);

  return {
    results,
    truncated: totalMatches > maxResults,
    totalMatches,
    filesTruncated,
    totalFilesSearched,
    totalFilesAvailable,
  };
}

export async function handleSearchRequest(
  request: SearchRequest,
  workspaceUri: vscode.Uri,
): Promise<SearchResponse> {
  if (request.data.case !== "pattern") {
    return create(SearchResponseSchema, {
      type: SearchType.USES,
      data: {
        case: "uses",
        value: create(FindUsesResultSchema, { locations: [] }),
      },
    });
  }

  const patternRequest = request.data.value;
  const searchPattern = patternRequest.searchPattern;

  if (!searchPattern || searchPattern.trim() === "") {
    return create(SearchResponseSchema, {
      type: SearchType.PATTERN,
      data: {
        case: "pattern",
        value: create(FindPatternResultSchema, {
          locations: [],
          matches: [],
          truncated: false,
          totalMatches: 0,
          filesTruncated: false,
          totalFilesSearched: 0,
          totalFilesAvailable: 0,
        }),
      },
    });
  }

  console.log(`[Search] Request - pattern: "${searchPattern}", include: ${patternRequest.includedFiles?.length || 0}, exclude: ${patternRequest.excludedFiles?.length || 0}, maxResults: ${patternRequest.maxResults}`);

  const searchOutput = await searchInWorkspace(
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

  const matches = searchOutput.results.map((r) =>
    create(SearchMatchSchema, {
      filePath: r.filePath,
      lineNumber: r.lineNumber,
      lineContent: r.lineContent,
      matchStart: r.matchStart,
      matchEnd: r.matchEnd,
      contextBefore: r.contextBefore,
      contextAfter: r.contextAfter,
    })
  );

  const locations: Location[] = searchOutput.results.map((r) =>
    create(LocationSchema, {
      path: r.filePath,
      range: create(RangeSchema, {
        start: create(PositionSchema, {
          line: BigInt(r.lineNumber - 1),
          character: BigInt(r.matchStart),
        }),
        end: create(PositionSchema, {
          line: BigInt(r.lineNumber - 1),
          character: BigInt(r.matchEnd),
        }),
      }),
    })
  );

  return create(SearchResponseSchema, {
    type: SearchType.PATTERN,
    data: {
      case: "pattern",
      value: create(FindPatternResultSchema, {
        locations,
        matches,
        truncated: searchOutput.truncated,
        totalMatches: searchOutput.totalMatches,
        filesTruncated: searchOutput.filesTruncated,
        totalFilesSearched: searchOutput.totalFilesSearched,
        totalFilesAvailable: searchOutput.totalFilesAvailable,
      }),
    },
  });
}
