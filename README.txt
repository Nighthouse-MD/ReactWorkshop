Questions?
mxm.deschamps@gmail.com

useful urls:

https://nodejs.org/en/
https://git-scm.com/
https://code.visualstudio.com/


1.
https://reactjs.org/
https://github.com/facebook/create-react-app

3.
https://material-ui.com/
https://materializecss.com/

My VSCode settings (ctrl + shift + p)

// Place your settings in this file to overwrite the default settings
{
    // Controls auto save of dirty files. Accepted values:  "off", "afterDelay", "onFocusChange" (editor loses focus), "onWindowChange" (window loses focus). If set to "afterDelay", you can configure the delay in "files.autoSaveDelay".
    //"files.autoSave": "onWindowChange",
    "explorer.openEditors.visible": 0,
    "javascript.format.enable": true,
    "editor.minimap.enabled": false,
    "editor.formatOnSave": true,
    "window.zoomLevel": -1,
    "workbench.colorTheme": "Son of Obsidian",
    "workbench.iconTheme": "vscode-icons",
    "vsicons.dontShowNewVersionMessage": true,
    "files.trimTrailingWhitespace": true,
    "javascript.updateImportsOnFileMove.enabled": "never"
}


6 redux

setup store
setup actions, reducers

connect Welcome to store
create onClick handler

connect NavBar to store

7 test

install dependencies
create Fridge test

always create small testable components
always try to extract logic to pure js files for easy testing
avoid testing js or react itself