---
title: Linux commands
aliases:
  - Linux commands
created: 2025-12-28 15:35
tags:
  - software/linux
  - software/dev
navigate-up:
  - "[[software-main|Software]]"
  - "[[Linux]]"
---
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
```bash
h
```

### Hosts: Edit hosts file
```bash
sudo nano /etc/hosts
```
```bash
sudo resolvectl flush-caches
```
```bash
getent hosts funkydrummer.local
```
```bash
ping -c 1 funkydrummer.local
```
