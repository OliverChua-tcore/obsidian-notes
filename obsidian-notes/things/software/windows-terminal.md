---
type: software
template-version: 1
title: Windows Terminal
aliases:
  - Windows Terminal
created: 2026-01-30 08:12
tags:
  - software/windows
  - software/computer-setup
navigate-up:
  - "[[Microsoft]]"
software-name: Windows Terminal
software-author:
  - "[[microsoft|Microsoft]]"
software-license:
  - https://github.com/microsoft/terminal#MIT-1-ov-file
website:
  - https://learn.microsoft.com/en-us/windows/terminal/
repository:
  - https://github.com/microsoft/terminal
---
%%
	`software-name`: the name of the software or service
	`software-author`: the creators of the software (i.e., publisher, individual contributors, etc.)
	`software-license`: the links to the software licenses (i.e., text of FOSS license, copy of purchase receipt, etc.)
	`website`: the links to the websites for the software (i.e., homepage, account login, support site, etc.)
	`repository`: the links where the source code for the software are hosted (e.g., GitHub)
%%
# Windows Terminal

## Install Windows Terminal
```powershell
winget install --id Microsoft.WindowsTerminal -e
```

> [!info]- `settings.json`
> ```json
> {
>     "$help": "https://aka.ms/terminal-documentation",
>     "$schema": "https://aka.ms/terminal-profiles-schema",
>     "actions": [],
>     "copyFormatting": "none",
>     "copyOnSelect": false,
>     "defaultProfile": "{574e775e-4f2a-5b96-ac1e-a2962a402336}",
>     "initialPosition": "0,0",
>     "keybindings": 
>     [
>         {
>             "id": "Terminal.CopyToClipboard",
>             "keys": "ctrl+c"
>         },
>         {
>             "id": "Terminal.PasteFromClipboard",
>             "keys": "ctrl+v"
>         },
>         {
>             "id": "Terminal.DuplicatePaneAuto",
>             "keys": "alt+shift+d"
>         }
>     ],
>     "language": "en-US",
>     "newTabMenu": 
>     [
>         {
>             "type": "remainingProfiles"
>         }
>     ],
>     "profiles": 
>     {
>         "defaults": {},
>         "list": 
>         [
>             {
>                 "guid": "{574e775e-4f2a-5b96-ac1e-a2962a402336}",
>                 "hidden": false,
>                 "name": "PowerShell",
>                 "source": "Windows.Terminal.PowershellCore"
>             },
>             {
>                 "guid": "{b453ae62-4e3d-5e58-b989-0a998ec441b8}",
>                 "hidden": false,
>                 "name": "Azure Cloud Shell",
>                 "source": "Windows.Terminal.Azure"
>             },
>             {
>                 "commandline": "%SystemRoot%\\System32\\cmd.exe",
>                 "guid": "{0caa0dad-35be-5f56-a8ff-afceeeaa6101}",
>                 "hidden": false,
>                 "name": "Command Prompt"
>             },
>             {
>                 "guid": "{c6d55c2d-569c-5f17-9291-e79f18af400b}",
>                 "hidden": false,
>                 "name": "Developer Command Prompt for VS 2022",
>                 "source": "Windows.Terminal.VisualStudio"
>             },
>             {
>                 "guid": "{9a868c2c-a0fa-59a3-aa66-a89d3ba7d34d}",
>                 "hidden": false,
>                 "name": "Developer PowerShell for VS 2022",
>                 "source": "Windows.Terminal.VisualStudio"
>             },
>             {
>                 "guid": "{2ece5bfe-50ed-5f3a-ab87-5cd4baafed2b}",
>                 "hidden": false,
>                 "name": "Git Bash",
>                 "source": "Git"
>             },
>             {
>                 "commandline": "%SystemRoot%\\System32\\WindowsPowerShell\\v1.0\\powershell.exe",
>                 "guid": "{61c54bbd-c2c6-5271-96e7-009a87ff44bf}",
>                 "hidden": false,
>                 "name": "Windows PowerShell"
>             }
>         ]
>     },
>     "schemes": [],
>     "themes": []
> }
> ```

## 📝 Notes
