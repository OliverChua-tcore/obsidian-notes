---
title: WinGet
aliases:
  - WinGet
  - Windows Package Manager
created: 2026-01-07 17:36
tags:
  - software/windows
  - software/computer-setup
navigate-up:
  - "[[Microsoft]]"
website:
  - https://www.powershellgallery.com/packages/PSReadLine
repository:
  - https://github.com/microsoft/winget-cli
  - https://github.com/microsoft/winget-command-not-found
---
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
