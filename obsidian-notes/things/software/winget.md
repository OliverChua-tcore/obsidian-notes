---
template-version: 1
title: WinGet
aliases:
  - WinGet
  - Windows Package Manager
created: 2026-01-07 17:36
tags:
  - software/windows
  - software/computer-setup
navigate-up:
  - "[[software-main|Software]]"
  - "[[Microsoft]]"
  - "[[Windows]]"
software-name: WinGet
software-author:
  - "[[microsoft|Microsoft]]"
software-license:
  - https://github.com/microsoft/winget-cli#MIT-1-ov-file
website:
  - https://learn.microsoft.com/en-us/training/modules/explore-windows-package-manager-tool/?WT.mc_id=AZ-MVP-5004737
  - https://www.powershellgallery.com/packages/PSReadLine
repository:
  - https://github.com/microsoft/winget-cli
  - https://github.com/microsoft/winget-command-not-found
---
%%
	`software-name`: the name of the software or service
	`software-author`: the creators of the software (i.e., publisher, individual contributors, etc.)
	`software-license`: the links to the software licenses (i.e., text of FOSS license, copy of purchase receipt, etc.)
	`website`: the links to the websites for the software (i.e., homepage, account login, support site, etc.)
	`repository`: the links where the source code for the software are hosted (e.g., GitHub)
%%
# WinGet

## Install WinGet

### Method 1

```powershell
Install-Module -Name Microsoft.WinGet.Client
```

### Method 2

```powershell
Get-PSRepository
```
```powershell
Register-PSRepository -Default
```

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process
```
```powershell
Install-Script -Name winget-install
```
```powershell
winget-install
```
```powershell
winget --version
```

# Microsoft.WinGet.CommandNotFound

This is a [[powershell|PowerShell]] 7 module designed to enhance the command-line experience by suggesting relevant Windows Package Manager (`winget`) packages when an unrecognized command is entered

## Install CommandNotFound
```powershell
Install-Module -Name PSReadLine
```
```powershell
Install-PSResource -Name Microsoft.WinGet.CommandNotFound
```
```powershell
Enable-ExperimentalFeature PSFeedbackProvider
```

To load the module automatically on startup, add to your PowerShell profile:
```powershell
Import-Module -Name Microsoft.WinGet.CommandNotFound
```

## 📝 Notes
