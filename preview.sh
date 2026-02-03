#!/usr/bin/env bash

# https://code.visualstudio.com/api/references/extension-manifest
# https://code.visualstudio.com/api/working-with-extensions/publishing-extension#create-a-publisher
# npm i --global @vscode/vsce
# vsce login gooseclip
# vsce publish minor

# To publish
#vsce publish

# To test
#vsce package
#code --install-extension my-extension-0.0.1.vsix

#To load an extension, you need to copy the files to your VS Code extensions folder .vscode/extensions. Depending on your operating system, this folder has a different location:
 #
 #    Windows: %USERPROFILE%\.vscode\extensions
 #    macOS: ~/.vscode/extensions
 #    Linux: ~/.vscode/extensions

# https://marketplace.visualstudio.com/items/golang.go example
 # TODO update readme as it is displayed
 # TODO update changelog
 # TODO update support

 # Prerelease - users still get access
# vsce package --pre-release
# vsce publish --pre-release


#The currently available platforms are: win32-x64, win32-arm64, linux-x64, linux-arm64, linux-armhf, alpine-x64, alpine-arm64, darwin-x64, darwin-arm64 and web.
 #
 #If you want a platform-specific extension to also support running in the browser as a web extension, it must target the web platform when publishing. The web platform respects the browser entry point in the package.json. To disable the extension capabilities that are not supported in the web, we recommend using when clauses in the package.json instead of shipping separate package.json for the web platform or removing parts of the VSIX that do not work in the web.
 #Publishing
 #
 #Starting from version 1.99.0, vsce supports a --target parameter that allows you to specify the target platform while packaging and publishing a VSIX.
 #
 #Here's how you can publish a VSIX for the win32-x64 and win32-arm64 platforms:
 #
 #vsce publish --target win32-x64 win32-arm64
 #
 #Alternatively, you can also use the --target flag when packaging to create a platform-specific VSIX. For example, to package a VSIX for the win32-x64 platform and then publish it:
 #
 #vsce package --target win32-x64
 #vsce publish --packagePath PATH_TO_WIN32X64_VSIX
vsce package --pre-release
vsce publish --pre-release