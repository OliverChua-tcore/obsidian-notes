---
title: PowerShell
aliases:
  - PowerShell
created: 2023-06-07 08:01
tags:
  - software/windows
  - software/dev
navigate-up:
  - "[[software-main|Software]]"
  - "[[Microsoft]]"
---
# PowerShell

### Temporarily set the PowerShell execution policy to `RemoteSigned`
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process
```

#### What `RemoteSigned` means
- _Local scripts_ (created on your machine) can run without digital signatures
- _Downloaded/remote scripts_ must be signed by a trusted publisher (or manually unblocked)
- This is a balanced policy for development—safer than Unrestricted, more permissive than Restricted

#### Why `Scope Process` is safe and useful
- **Process scope** affects only this PowerShell window/session
- When you close PowerShell or the session ends, the policy reverts automatically
- No permanent change to your system, user, or machine policy
- Perfect for one-off script runs (like Docker automation or npm installs) without admin rights or persistence

### Check current effective execution policy
```powershell
Get-ExecutionPolicy
```
```powershell
Get-ExecutionPolicy -List
```

## Install PowerShell
```powershell
winget install --id Microsoft.PowerShell --source winget
```
