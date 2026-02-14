# IDE API Requirements for Commit History Feature

This document describes the API endpoints that need to be implemented on the IDE extension side (goosecode-vscode) to support the commit history feature.

## Overview

The commit history feature allows users to:
1. View a list of commits that modified a specific file
2. View the content of a file at a specific commit
3. Compare the current file content against a previous commit using a diff viewer

## New RPC Methods

Two new RPC methods need to be added to the IDE service.

### 1. ListFileCommits

Lists commits that modified a specific file, with pagination support.

**Request:**

```protobuf
message ListFileCommitsRequest {
  Context context = 1;
  string file_path = 2;      // Relative path from workspace root
  int32 page = 3;            // Page number (1-indexed), default 1
  int32 per_page = 4;        // Items per page, default 20
}
```

**Response:**

```protobuf
message ListFileCommitsResponse {
  repeated FileCommitInfo commits = 1;
  bool has_next_page = 2;
  int32 total_count = 3;     // Optional: total number of commits
}

message FileCommitInfo {
  string sha = 1;            // Full 40-character commit SHA
  string message = 2;        // Full commit message
  string author_name = 3;    // Author name
  string author_email = 4;   // Author email
  int64 timestamp = 5;       // Unix timestamp in seconds
}
```

**Implementation Notes:**
- Use `git log --follow -- <filepath>` to get commits for a file
- The `--follow` flag tracks file renames
- Support pagination via `--skip` and `-n` flags
- Parse output to extract SHA, message, author, and timestamp

### 2. GetFileAtCommit

Gets the content of a file at a specific commit.

**Request:**

```protobuf
message GetFileAtCommitRequest {
  Context context = 1;
  string file_path = 2;      // Relative path from workspace root
  string commit_sha = 3;     // Full or short commit SHA
}
```

**Response:**

```protobuf
message GetFileAtCommitResponse {
  string content = 1;        // File content as UTF-8 string
  bool file_existed = 2;     // False if file didn't exist at this commit
}
```

**Implementation Notes:**
- Use `git show <commit>:<filepath>` to get file content at a commit
- Handle the case where the file didn't exist at that commit
- Return empty content with `file_existed = false` in that case

## VSCode Extension Implementation

### Git Commands

```typescript
import { execGit } from './git-utils';

/**
 * Lists commits that modified a specific file with pagination.
 */
async function listFileCommits(
  workspacePath: string,
  filePath: string,
  page: number,
  perPage: number
): Promise<{ commits: FileCommitInfo[]; hasNextPage: boolean }> {
  const skip = (page - 1) * perPage;
  
  // Fetch one extra to determine if there's a next page
  const result = await execGit(workspacePath, [
    'log',
    '--follow',
    `--format=%H|%s|%an|%ae|%ct`,
    `--skip=${skip}`,
    `-n`, `${perPage + 1}`,
    '--', filePath
  ]);

  const lines = result.trim().split('\n').filter(l => l.length > 0);
  const hasNextPage = lines.length > perPage;
  const commitLines = hasNextPage ? lines.slice(0, perPage) : lines;

  const commits = commitLines.map(line => {
    const [sha, message, authorName, authorEmail, timestamp] = line.split('|');
    return {
      sha,
      message,
      authorName,
      authorEmail,
      timestamp: parseInt(timestamp, 10)
    };
  });

  return { commits, hasNextPage };
}

/**
 * Gets file content at a specific commit.
 */
async function getFileAtCommit(
  workspacePath: string,
  filePath: string,
  commitSha: string
): Promise<{ content: string; fileExisted: boolean }> {
  try {
    const content = await execGit(workspacePath, [
      'show', `${commitSha}:${filePath}`
    ]);
    return { content, fileExisted: true };
  } catch (error) {
    // File didn't exist at this commit
    return { content: '', fileExisted: false };
  }
}
```

### Service Registration

Add the new RPC handlers in the IDE service implementation:

```typescript
// In the service handler registration
service.addHandler('ListFileCommits', async (request: ListFileCommitsRequest) => {
  const { commits, hasNextPage } = await listFileCommits(
    workspacePath,
    request.filePath,
    request.page || 1,
    request.perPage || 20
  );
  return { commits, hasNextPage };
});

service.addHandler('GetFileAtCommit', async (request: GetFileAtCommitRequest) => {
  return await getFileAtCommit(
    workspacePath,
    request.filePath,
    request.commitSha
  );
});
```

## App-Side Integration

Once the proto messages are generated, uncomment the methods in
`lib/features/canvas/files/ide/connection/unary_commands.dart`:

- `listFileCommits()` - calls `api.listFileCommits()`
- `getFileAtCommit()` - calls `api.getFileAtCommit()`

Then update `CommitPickerNotifier._fetchFromIDE()` in
`lib/features/canvas/files/commit_history/commit_picker.dart` to call
the new commands through the IDE connection.

## Existing HEAD/Changes Detection

The IDE extension already returns HEAD content via the `getFiles` endpoint:
- `FileContext.currentContent` - the current file content (may include uncommitted changes)
- `FileContext.headContent` - the committed HEAD version

This is used by the app to show the "CHANGES" badge in the code header when
`currentContent != headContent`.
