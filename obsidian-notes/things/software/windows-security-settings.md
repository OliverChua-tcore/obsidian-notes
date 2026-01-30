---
template-version: 1
title: Windows security settings
aliases:
  - Windows security settings
created: 2022-06-01 02:27
tags:
  - software/windows
  - software/security
  - software/computer-setup
navigate-up:
  - "[[software-main|Software]]"
  - "[[Microsoft]]"
  - "[[Windows]]"
software-name: "[[Windows]]"
software-author:
software-license:
website:
repository:
---
%%
	`software-name`: the name of the software or service
	`software-author`: the creators of the software (i.e., publisher, individual contributors, etc.)
	`software-license`: the links to the software licenses (i.e., text of FOSS license, copy of purchase receipt, etc.)
	`website`: the links to the websites for the software (i.e., homepage, account login, support site, etc.)
	`repository`: the links where the source code for the software are hosted (e.g., GitHub)
%%
# Windows security settings

## 📝 Notes

### [[BitLocker|BitLocker]] drive encryption status
```powershell
manage-bde -status
```

### [[Microsoft Edge|Microsoft Edge]]
```
edge://settings/privacy
```

### Uninstall the [[Your Phone|Your Phone]] app
```powershell
Get-AppxPackage Microsoft.YourPhone -AllUsers | Remove-AppxPackage
```
