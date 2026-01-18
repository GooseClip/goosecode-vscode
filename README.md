# GooseCode VS Code Extension

[![Version](https://img.shields.io/visual-studio-marketplace/v/gooseclip.goosecode)](https://marketplace.visualstudio.com/items?itemName=gooseclip.goosecode)
[![Installs](https://img.shields.io/visual-studio-marketplace/i/gooseclip.goosecode)](https://marketplace.visualstudio.com/items?itemName=gooseclip.goosecode)

This VS Code extension enables integration with the [GooseCode App](https://goosecode.app), your codebase minimap and code navigation supercharger.

![GooseCode Logo](https://storage.googleapis.com/goosecode-prod-public/branding/icon.png)

## Features

*   **Seamless Integration:** Connects VS Code to the GooseCode App for enhanced code visualization and navigation.
*   **Code Sources Management:** Easily enable or disable workspaces (code sources) for use with GooseCode directly from the VS Code activity bar.
*   **Context Menu Commands:** Access GooseCode actions like `Snippet` and `Generate` directly from the editor context menu.
*   **Generate Command:** Generate code snippets in GooseCode as you navigate your codebase using `Go to Definition` or the `Generate` command (`Option+Cmd+G` on Mac, `Alt+Ctrl+G` on Windows/Linux). Supports `Swimlane` generation strategies.
*   **Swimlane Strategy:** Organizes snippets by file into columns. Great for understanding inter-file dependencies.
*   **Minimap & Overlay Toggle:** Quickly toggle the GooseCode minimap or full overlay mode directly from VS Code.

## Getting Started

1.  **Download GooseCode:** Get the GooseCode application for your OS (Windows, Mac, iPadOS) from [goosecode.app](https://goosecode.app).
2.  **Install Extension:** Install this "GooseCode" extension from the VS Code Marketplace.
3.  **Check Settings:**
    *   Open VS Code Settings (`Cmd+,` or `Ctrl+,`).
    *   Search for "GooseCode".
    *   Review connection settings (port, password) and consider enabling `Start Automatically`.
4.  **Start Extension Server:**
    *   Use the command palette (`Cmd+Shift+P` or `Ctrl+Shift+P`) and run `GooseCode: Start`.
    *   Alternatively, find the "Connection" view in the GooseCode Activity Bar entry and click the start button if not running automatically.
5.  **Connect GooseCode App:**
    *   Open the GooseCode application.
    *   Create a new project or open an existing one.
    *   Go to the IDE control pane.
    *   Enter the connection details (IP address/hostname, port, password) found in the VS Code GooseCode settings.
    *   Click "Connect".
6.  **Enable Code Sources:**
    *   Open the GooseCode view in the VS Code Activity Bar (Goose icon).
    *   In the "Code Sources" section, hover over your desired workspace folder and click the toggle icon to enable it.
7.  **Explore:**
    *   Open a code file.
    *   Use the `Generate` command (`Alt+Cmd+G` / `Alt+Ctrl+G` or via the context menu) while navigating code to generate visualizations.
    *   Explore other commands in the context menu and the Activity Bar views.

## Commands

*   `GooseCode: Open Settings`: Opens the GooseCode extension settings.
*   `GooseCode: Start`: Starts the extension's connection server.
*   `GooseCode: Stop`: Stops the extension's connection server.
*   `GooseCode: Restart`: Restarts the extension's connection server.
*   `GooseCode: Toggle Minimap`: Toggles the GooseCode minimap overlay.
*   `GooseCode: Toggle Overlay`: Toggles the full GooseCode application overlay.
*   `GooseCode: Generate`: Generates a code snippet in GooseCode based on the cursor position (used for code navigation).
*   `GooseCode: Snippet`: Sends the current selection or symbol to GooseCode as a snippet (`Option+Ctrl+Cmd+S` on Mac, `Alt+Ctrl+S` on Windows/Linux).
*   `GooseCode: Snippet [Minimized]`: Sends the current selection or symbol to GooseCode as a mini-snippet - a compact representation (`Option+Ctrl+Cmd+M` on Mac, `Alt+Ctrl+M` on Windows/Linux).
*   (View specific commands for managing Code Sources and Active Sessions are available in the Activity Bar)

## Extension Settings

This extension contributes the following settings (accessible via VS Code Settings UI under "Extensions > GooseCode"):

*   `goosecode.startAutomatically`: (Boolean, default: `false`) Start GooseCode Extension server automatically when VS Code opens.
*   `goosecode.connections.port`: (Number, default: `60053`) The port the extension server listens on for connections from the GooseCode App.
*   `goosecode.connections.localhostOnly`: (Boolean, default: `true`) Allow only connections from the local machine. Set to `false` to allow connections from other devices on your network (use with caution).
*   `goosecode.connections.password`: (String, default: `""`) Password required for the GooseCode App to connect. If empty, a password will be generated automatically on the first start. You can view/copy the current password in the settings or regenerate it using the `GooseCode: Purge Certificates and Regenerate Password` command.

## Known Issues

Refer to the [GitHub Issues page](https://github.com/GooseClip/goosecode-issues/issues).

## Support

- **Documentation:** [gooseclip.gitbook.io/goosecode](https://gooseclip.gitbook.io/goosecode)
- **Report Issues:** [GitHub Issues](https://github.com/GooseClip/goosecode-issues)
- **Email:** [support@gooseclip.com](mailto:support@gooseclip.com)

## Links

- **Website:** [gooseclip.com](https://gooseclip.com)
- **GooseCode App:** [goosecode.app](https://goosecode.app)

## License

UNLICENSED (Private)
