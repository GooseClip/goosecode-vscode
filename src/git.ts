import { exec as execCallback } from 'child_process';
import { promisify } from 'util';
import * as path from 'path';
import * as vscode from 'vscode';
// Use 'import type' for declaration files
// Use a distinct alias to avoid potential naming conflicts
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

// export async function getGitInfo(cwd: string): Promise<GitInfo | null> {
//     try {
//         const repositoryRoot = await runGitCommand('git rev-parse --show-toplevel', cwd);

//         let repositoryFullName: string | null = null;
//         try {
//             const remoteUrl = await runGitCommand('git remote get-url origin', repositoryRoot);
//             repositoryFullName = parseRepoFullName(remoteUrl);
//         } catch (error: any) {
//             if (error.message !== 'Remote origin not found') {
//                 // Log or handle unexpected errors fetching/parsing the remote URL, but don't fail the whole function
//                 console.error('Could not determine repository full name:', error);
//             }
//             // If 'origin' doesn't exist or URL parsing fails, repositoryFullName remains null
//         }

//         const branch = await runGitCommand('git rev-parse --abbrev-ref HEAD', repositoryRoot);
//         const commit = await runGitCommand('git rev-parse HEAD', repositoryRoot);
//         const statusOutput = await runGitCommand('git status --porcelain', repositoryRoot);

//         const stagedFiles: string[] = [];
//         const unstagedFiles: string[] = [];
//         const statusLines = statusOutput.split('\n').filter(line => line.length > 0);

//         for (const line of statusLines) {
//             const status = line.substring(0, 2);
//             // Extract the file path, handling potential renames (R/C status)
//             let filePath = line.substring(3);
//             if (['R', 'C'].includes(status[0]) || ['R', 'C'].includes(status[1])) {
//                 // For renamed/copied files, the format is "XY old_path -> new_path" or "XY path"
//                 // We are interested in the final path name.
//                 const parts = filePath.split(' -> ');
//                 filePath = parts[parts.length - 1]; // Take the new path if rename/copy
//             }

//             const absoluteFilePath = path.join(repositoryRoot, filePath);

//             const indexStatus = status[0];
//             const workTreeStatus = status[1];

//             // Check Staged Status (Index)
//             if (['M', 'A', 'D', 'R', 'C'].includes(indexStatus)) {
//                 stagedFiles.push(absoluteFilePath);
//             }

//             // Check Unstaged Status (Working Tree) or Untracked
//             if (['M', 'D'].includes(workTreeStatus)) {
//                 // Avoid adding the same file twice if it's both staged and unstaged modified
//                 if (!stagedFiles.includes(absoluteFilePath) || indexStatus !== 'M') {
//                      unstagedFiles.push(absoluteFilePath);
//                 } else if (indexStatus === 'M' && workTreeStatus === 'M' && !unstagedFiles.includes(absoluteFilePath)) {
//                     // If staged modified (M ) and also unstaged modified ( M), add to unstaged as well
//                     unstagedFiles.push(absoluteFilePath);
//                  }
//             } else if (status === '??') { // Untracked files
//                 unstagedFiles.push(absoluteFilePath);
//             }
//         }

//         return {
//             repositoryRoot,
//             repositoryFullName,
//             branch,
//             commit,
//             stagedFiles,
//             unstagedFiles,
//         };
//     } catch (error: any) {
//         if (error.message === 'Not a git repository') {
//             // console.log('Directory is not a git repository:', cwd);
//             return null;
//         }
//         // Log other errors if needed
//         console.error('Failed to get Git info:', error);
//         return null;
//     }
// }

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
        // This will catch errors if the file doesn't exist in HEAD either (e.g. new untracked file)
        console.error(`Failed to get file contents for ${resourceUri.fsPath}:`, error);
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
        // This will catch errors if the file doesn't exist in HEAD either (e.g. new untracked file)
        console.error(`Failed to get file contents for ${resourceUri.fsPath}:`, error);
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
