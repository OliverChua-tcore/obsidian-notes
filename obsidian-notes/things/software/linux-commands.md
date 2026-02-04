---
type: software
template-version: 1
title: Linux commands
aliases:
  - Linux commands
created: 2025-12-28 15:35
tags:
  - software/linux
  - software/dev
navigate-up:
  - "[[main|🔝]]"
  - "[[things/software/linux|Linux]]"
software-name: Linux commands
software-author:
software-license:
website:
repository:
edit-status: in-progress
---
%%
	`software-name`: the name of the software or service
	`software-author`: the creators of the software (i.e., publisher, individual contributors, etc.)
	`software-license`: the links to the software licenses (i.e., text of FOSS license, copy of purchase receipt, etc.)
	`website`: the links to the websites for the software (i.e., homepage, account login, support site, etc.)
	`repository`: the links where the source code for the software are hosted (e.g., GitHub)
%%
###### [[main|🔝]]
# Linux commands

## Symbolic link (symlink)

### Make script executable
```bash
chmod +x script-name.sh
```
> The symlink inherits execute permissions from the target, so `chmod +x` the original first

### Create symlink
```bash
sudo ln -s script-name.sh /usr/local/bin/script-name
```

> [!info]- Command breakdown
> | Command | Description |
> | --- | --- |
> | `sudo` | runs with root privileges (needed to write to `/usr/local/bin/`) |
> | `ln -s` | **link** command with `-s` flag for **symbolic** (soft) link, not hard link |
> | `script-name.sh` | **source**: the **existing script file** (wherever it currently lives) |
> | `/usr/local/bin/script-name` | **target**: the **new symlink** in a standard PATH directory |

> [!faq]- Why `/usr/local/bin/`?
> - **Standard PATH location** for user-installed executables on Linux/WSL
> - Already in `$PATH`, so no aliases or exports needed
> - Convention: `/usr/local/bin/` = locally installed, `/usr/bin/` = distro packages

### Find location of script
```bash
which script-name
```

---

## Other commands

### Update packages
```bash
sudo apt update
```
```bash
apt list --upgradable
```
```bash
sudo apt upgrade
```
```bash
sudo apt autoremove
```

### .bashrc: Reload .bashrc
```bash
source ~/.bashrc
```

### History
```bash
history
```

### Hosts: Edit hosts file
```bash
sudo nano /etc/hosts
```
```bash
sudo resolvectl flush-caches
```
```bash
getent hosts newEntry.local
```
```bash
ping -c 1 newEntry.local
```
> Replace `newEntry.local` with the name that you just added

---

## 📝 Notes
