import { exec as execCallback } from 'child_process';
import { promisify } from 'util';
import * as path from 'path';

const exec = promisify(execCallback);

export interface GitInfo {
    repositoryRoot: string;
    branch: string;
    commit: string;
    stagedFiles: string[];
    unstagedFiles: string[];
}

async function runGitCommand(command: string, cwd: string): Promise<string> {
    try {
        const { stdout } = await exec(command, { cwd });
        return stdout.trim();
    } catch (error: any) {
        // Rethrow specific errors or a generic one
        // console.error(`Error running git command "${command}" in ${cwd}:`, error);
        if (error.stderr?.includes('not a git repository') || error.message?.includes('not a git repository')) {
            throw new Error('Not a git repository');
        }
        throw new Error(`Failed to run git command "${command}": ${error.message}`);
    }
}

export async function getGitInfo(cwd: string): Promise<GitInfo | null> {
    try {
        const repositoryRoot = await runGitCommand('git rev-parse --show-toplevel', cwd);
        const branch = await runGitCommand('git rev-parse --abbrev-ref HEAD', repositoryRoot);
        const commit = await runGitCommand('git rev-parse HEAD', repositoryRoot);
        const statusOutput = await runGitCommand('git status --porcelain', repositoryRoot);

        const stagedFiles: string[] = [];
        const unstagedFiles: string[] = [];
        const statusLines = statusOutput.split('\n').filter(line => line.length > 0);

        for (const line of statusLines) {
            const status = line.substring(0, 2);
            // Extract the file path, handling potential renames (R/C status)
            let filePath = line.substring(3);
            if (['R', 'C'].includes(status[0]) || ['R', 'C'].includes(status[1])) {
                // For renamed/copied files, the format is "XY old_path -> new_path" or "XY path"
                // We are interested in the final path name.
                const parts = filePath.split(' -> ');
                filePath = parts[parts.length - 1]; // Take the new path if rename/copy
            }
            
            const absoluteFilePath = path.join(repositoryRoot, filePath);

            const indexStatus = status[0];
            const workTreeStatus = status[1];

            // Check Staged Status (Index)
            if (['M', 'A', 'D', 'R', 'C'].includes(indexStatus)) {
                stagedFiles.push(absoluteFilePath);
            }

            // Check Unstaged Status (Working Tree) or Untracked
            if (['M', 'D'].includes(workTreeStatus)) {
                // Avoid adding the same file twice if it's both staged and unstaged modified
                if (!stagedFiles.includes(absoluteFilePath) || indexStatus !== 'M') {
                     unstagedFiles.push(absoluteFilePath);
                } else if (indexStatus === 'M' && workTreeStatus === 'M' && !unstagedFiles.includes(absoluteFilePath)) {
                    // If staged modified (M ) and also unstaged modified ( M), add to unstaged as well
                    unstagedFiles.push(absoluteFilePath);
                 }
            } else if (status === '??') { // Untracked files
                unstagedFiles.push(absoluteFilePath);
            }
        }

        return {
            repositoryRoot,
            branch,
            commit,
            stagedFiles,
            unstagedFiles,
        };
    } catch (error: any) {
        if (error.message === 'Not a git repository') {
            // console.log('Directory is not a git repository:', cwd);
            return null;
        }
        // Log other errors if needed
        console.error('Failed to get Git info:', error);
        return null;
    }
}
