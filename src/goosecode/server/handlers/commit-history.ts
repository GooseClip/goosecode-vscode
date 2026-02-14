import { execFile } from 'child_process';
import { promisify } from 'util';
import * as path from 'path';
import * as vscode from 'vscode';
import { create } from '@bufbuild/protobuf';
import type { ListFileCommitsRequest, GetFileAtCommitRequest, GetFileDiffRequest } from '../../../gen/ide-connect/v1/api_pb';
import { ListFileCommitsResponseSchema, FileCommitInfoSchema, GetFileAtCommitResponseSchema, GetFileDiffResponseSchema } from '../../../gen/ide-connect/v1/api_pb';
import { getFileContentsAtSpecificCommit } from '../../../git';
import { toNativePath } from '../../../util';

const execFileAsync = promisify(execFile);

/**
 * Lists commits that modified a specific file with pagination.
 * Uses `git log --follow` to track file renames.
 */
export async function handleListFileCommits(
    request: ListFileCommitsRequest,
    workspaceUri: vscode.Uri
) {
    const page = request.page || 1;
    const perPage = request.perPage || 20;
    const skip = (page - 1) * perPage;

    const nativePath = toNativePath(request.filePath);
    const workspaceRoot = workspaceUri.fsPath;

    try {
        // Get current HEAD SHA
        const { stdout: headOut } = await execFileAsync('git', [
            'rev-parse', 'HEAD',
        ], { cwd: workspaceRoot });
        const headSha = headOut.trim();

        // Use %x00 as delimiter to avoid parsing issues with | in commit messages
        const { stdout } = await execFileAsync('git', [
            'log',
            '--follow',
            '--format=%H%x00%s%x00%an%x00%ae%x00%ct',
            `--skip=${skip}`,
            '-n',
            `${perPage + 1}`,
            '--',
            nativePath,
        ], { cwd: workspaceRoot });

        const lines = stdout.trim().split('\n').filter((l) => l.length > 0);
        const hasNextPage = lines.length > perPage;
        const commitLines = hasNextPage ? lines.slice(0, perPage) : lines;

        const commits = commitLines.map((line) => {
            const [sha, message, authorName, authorEmail, timestampStr] = line.split('\0');
            const timestamp = BigInt(parseInt(timestampStr || '0', 10));
            return create(FileCommitInfoSchema, {
                sha: sha || '',
                message: message || '',
                authorName: authorName || '',
                authorEmail: authorEmail || '',
                timestamp,
            });
        });

        return create(ListFileCommitsResponseSchema, {
            commits,
            hasNextPage,
            totalCount: 0, // Not computed for efficiency
            headSha,
        });
    } catch (error) {
        console.error('ListFileCommits error:', error);
        return create(ListFileCommitsResponseSchema, {
            commits: [],
            hasNextPage: false,
            totalCount: 0,
        });
    }
}

/**
 * Gets file content at a specific commit.
 */
export async function handleGetFileAtCommit(
    request: GetFileAtCommitRequest,
    workspaceUri: vscode.Uri
) {
    const nativePath = toNativePath(request.filePath);
    const fullPath = path.join(workspaceUri.fsPath, nativePath);
    const resourceUri = vscode.Uri.file(fullPath);

    const result = await getFileContentsAtSpecificCommit(resourceUri, request.commitSha);
    return create(GetFileAtCommitResponseSchema, {
        content: result.content,
        fileExisted: result.fileExisted,
    });
}

/**
 * Gets the unified diff for a file between two git refs.
 * If headRef is empty, diffs against the working copy.
 */
export async function handleGetFileDiff(
    request: GetFileDiffRequest,
    workspaceUri: vscode.Uri
) {
    const nativePath = toNativePath(request.filePath);
    const workspaceRoot = workspaceUri.fsPath;

    try {
        const args = ['diff'];

        if (request.headRef) {
            // Diff between two refs
            args.push(`${request.baseRef}..${request.headRef}`);
        } else {
            // Diff ref vs working copy
            args.push(request.baseRef);
        }

        args.push('--', nativePath);

        const { stdout } = await execFileAsync('git', args, {
            cwd: workspaceRoot,
            maxBuffer: 10 * 1024 * 1024, // 10MB for large diffs
        });

        return create(GetFileDiffResponseSchema, {
            diff: stdout,
            hasChanges: stdout.trim().length > 0,
        });
    } catch (error) {
        console.error('GetFileDiff error:', error);
        return create(GetFileDiffResponseSchema, {
            diff: '',
            hasChanges: false,
        });
    }
}
