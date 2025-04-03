#!/bin/sh
apk update
apk add git

code --install-extension esbenp.prettier-vscode
code --install-extension dbaeumer.vscode-eslint
code --install-extension eamodio.gitlens
code --install-extension PKief.material-icon-theme
code --install-extension ms-vscode.js-debug-nightly
code --install-extension ms-azuretools.vscode-docker

