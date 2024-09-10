import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

export class GenerateSessionProvider implements vscode.TreeDataProvider<GenerateSessionItem> {

    private _onDidChangeTreeData: vscode.EventEmitter<GenerateSessionItem | undefined | void> = new vscode.EventEmitter<GenerateSessionItem | undefined | void>();
    readonly onDidChangeTreeData: vscode.Event<GenerateSessionItem | undefined | void> = this._onDidChangeTreeData.event;

    constructor() {
    }

    refresh(): void {
        this._onDidChangeTreeData.fire();
    }

    getTreeItem(element: GenerateSessionItem): vscode.TreeItem {
        return element;
    }

    getChildren(element?: GenerateSessionItem): Thenable<GenerateSessionItem[]> {
        return Promise.resolve([]);
    }


    private pathExists(p: string): boolean {
        try {
            fs.accessSync(p);
        } catch (err) {
            return false;
        }

        return true;
    }
}

export class GenerateSessionItem extends vscode.TreeItem {

    constructor(
        public readonly label: string,
        private readonly version: string,
        public readonly collapsibleState: vscode.TreeItemCollapsibleState,
        public readonly command?: vscode.Command
    ) {
        super(label, collapsibleState);

        this.tooltip = `${this.label}-${this.version}`;
        this.description = this.version;
    }

    iconPath = {
        light: path.join(__filename, '..', '..', 'resources', 'light', 'refresh.svg'),
        dark: path.join(__filename, '..', '..', 'resources', 'dark', 'refresh.svg')
    };

    contextValue = 'dependency';
}