import { exec as execCallback } from 'child_process';
import { promisify } from 'util';
import * as path from 'path';
import * as vscode from 'vscode';
import * as git from './git.d';

const exec = promisify(execCallback);
export interface GitInfo {
    repositoryRoot: string;
    repositoryFullName: string | null;
    branch: string;
    commit: string;
    stagedFiles: string[];
    unstagedFiles: string[];
}

// Helper function to parse GitHub repository name from URL
function parseRepoFullName(url: string): string | null {
    if (!url) {return null;}
    // Matches HTTPS and SSH URLs
    // Example HTTPS: https://github.com/owner/repo.git
    // Example SSH:   git@github.com:owner/repo.git
    const match = url.match(/^(?:https?:\/\/|git@)[^:\/]+[:\/]([^/]+\/[^/]+?)(?:\.git)?$/);
    return match ? match[1] : null;
}

async function  _getRepo(resourceUri: vscode.Uri, wait: boolean): Promise<git.Repository | null>{
    const extension = vscode.extensions.getExtension('vscode.git');
    if (!extension) {
        console.warn('VS Code Git extension not found.');
        return null;
    }

    // Activate the extension if needed
    if (!extension.isActive) {
        if(!wait){
            return null;
        }
        await extension.activate();
    }

    // Type the exports object as GitExtension and get the API
    const gitExtensionExports = extension.exports as git.GitExtension;
    const gitApi: git.API | undefined = gitExtensionExports.getAPI(1);
    if (!gitApi) {
        console.warn('Could not get Git API (version 1).');
        return null;
    }

    const repo: git.Repository | null = gitApi.getRepository(resourceUri);
    if (!repo) {
        console.log('No Git repository found containing resource:', resourceUri.fsPath);
        return null;
    }

    return repo;
}

/**
 * Gets file content at a specific commit. Returns null if repo not found or on error.
 * Use fileExisted: false when the file didn't exist at that commit.
 */
export async function getFileContentsAtSpecificCommit(
    resourceUri: vscode.Uri,
    commitSha: string
): Promise<{ content: string; fileExisted: boolean }> {
    try {
        const repo = await _getRepo(resourceUri, true);
        if (repo == null) {
            return { content: '', fileExisted: false };
        }
        const content = await repo.show(commitSha, resourceUri.fsPath);
        return { content, fileExisted: true };
    } catch (error: unknown) {
        return { content: '', fileExisted: false };
    }
}

export async function getFileContentsAtCommit(resourceUri: vscode.Uri): Promise<string | null> {
    try {
       
        const repo = await _getRepo(resourceUri, false);
        if(repo == null){
            return null;
        }
        const head = repo.state.HEAD;
        if (!head?.commit) {
            console.warn('No HEAD commit found.');
            return null;
        }
        
        return await repo.show(head.commit, resourceUri.fsPath);

    } catch (error: any) {
        const msg = String(error?.message ?? error);
        if (msg.includes("not found") || msg.includes("Git relative path")) {
            // Expected: file exists on disk but not yet committed
            console.log(`File not in HEAD commit (uncommitted): ${resourceUri.fsPath}`);
        } else {
            console.error(`Failed to get file contents for ${resourceUri.fsPath}:`, error);
        }
        return null;
    }
    
}

export async function getDiffToHead(resourceUri: vscode.Uri): Promise<string | null> {
    try {
        const repo = await _getRepo(resourceUri, false);
        if(repo == null){
            return null;
        }

        const head = repo.state.HEAD;
        if (!head?.commit) {
            console.warn('No HEAD commit found.');
            return null;
        }
        
        return await repo.diffWithHEAD(resourceUri.fsPath);

    } catch (error: any) {
        const msg = String(error?.message ?? error);
        if (msg.includes("not found") || msg.includes("Git relative path")) {
            // Expected: file exists on disk but not yet committed
            console.log(`File not in HEAD (uncommitted, no diff): ${resourceUri.fsPath}`);
        } else {
            console.error(`Failed to get diff for ${resourceUri.fsPath}:`, error);
        }
        return null;
    }
    
}

export async function getGitInfoFromVscodeApi(resourceUri: vscode.Uri): Promise<GitInfo | null> {
    try {
        const repo = await _getRepo(resourceUri, true);
        if(repo == null){
            return null;
        }

        // Wait for the repository state to be populated if it's not ready
        // This might involve a short delay if VS Code is still processing Git status
        // Adding a small explicit delay or checking a flag might be needed in complex scenarios
        // await repo.status(); // Or potentially await some internal promise if available

        const repositoryRoot = repo.rootUri.fsPath;
        const head = repo.state.HEAD;
        const branch = head?.name ?? 'HEAD';
        const commit = head?.commit ?? '';

        let repositoryFullName: string | null = null;
        const origin = repo.state.remotes.find((remote: git.Remote) => remote.name === 'origin');
        if (origin?.fetchUrl) {
            repositoryFullName = parseRepoFullName(origin.fetchUrl);
        }

        const stagedFiles = repo.state.indexChanges.map((change: git.Change) => change.uri.fsPath);
        const unstagedFiles = repo.state.workingTreeChanges.map((change: git.Change) => change.uri.fsPath);

        return {
            repositoryRoot,
            repositoryFullName,
            branch,
            commit,
            stagedFiles,
            unstagedFiles,
        };

    } catch (error: any) {
        console.error('Failed to get Git info using VS Code API:', error);
        return null;
    }
}

export async function onDidChangeCommit(
    workspaceUri: vscode.Uri,
    callback: (workspaceUri: vscode.Uri, commitSHA: string, branch: string) => void
): Promise<vscode.Disposable | null> {
    try {
        const repo = await _getRepo(workspaceUri, true);
        if(repo == null){
            return null;
        }

        let previousCommitHash: string | undefined = repo.state.HEAD?.commit;
        let previousBranch: string | undefined = repo.state.HEAD?.name;

        const disposable = repo.state.onDidChange(() => {
            const sha = repo.state.HEAD?.commit;
            const branch = repo.state.HEAD?.name;

            if (previousCommitHash !== sha || previousBranch !== branch) {
                previousCommitHash = sha;
                previousBranch = branch;
                callback(workspaceUri, sha ?? '', branch ?? '');
            }
        });

        return disposable;

    } catch (error: any) {
        console.error('Failed to set up commit change watcher:', error);
        return null;
    }
}
