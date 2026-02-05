---
title: Windows performance settings
aliases:
  - Windows performance settings
created: 2026-01-14 02:55
tags:
  - software/windows
  - software/computer-setup
navigate-up:
  - "[[software-main|Software]]"
  - "[[Microsoft]]"
  - "[[Windows]]"
---
# Windows performance settings

## Disable folder type discovery to speed up File Explorer[^1]
```powershell
Set-ItemProperty -Path 'HKCU:\Software\Classes\Local Settings\Software\Microsoft\Windows\Shell\Bags\AllFolders\Shell' -Name 'FolderType' -Value 'NotSpecified' -Type String
```

[^1]: https://www.makeuseof.com/i-fixed-windows-11-file-explorer-lag-by-disabling-this-old-service

## Disable automatic restart after Windows update
1. Run `gpedit.msc`
2. Navigate to `Computer Configuration` → `Administrative Templates` → `Windows Components` → `Windows Update` → `Legacy Policies`​
3. Enable `No auto‑restart with logged on users for scheduled automatic updates installations`​
4. Close the editor and run `gpupdate /force` or reboot

## 📋 Tasks
</br>

## 📝 Notes
