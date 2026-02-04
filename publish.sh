#!/usr/bin/env bash

vsce package
vsce publish

# Cursor uses https://open-vsx.org/
#   npx ovsx publish --packagePath your-extension.vsix -p YOUR_TOKEN