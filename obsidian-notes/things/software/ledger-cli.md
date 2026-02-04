---
type: software
template-version: 1
title: Ledger CLI
aliases:
  - Ledger
  - Ledger CLI
created: 2026-01-16 06:03
tags:
  - software/finance
  - finance/ledger
navigate-up:
  - "[[software-main|Software]]"
software-name: Ledger CLI
software-author:
  - "[[John Wiegley]]"
software-license:
  - https://github.com/ledger/ledger#License-1-ov-file
website:
  - https://ledger-cli.org
  - https://ledger-cli.org/doc/ledger3.html
repository:
  - https://github.com/ledger/ledger
---
%%
	`software-name`: the name of the software or service
	`software-author`: the creators of the software (i.e., publisher, individual contributors, etc.)
	`software-license`: the links to the software licenses (i.e., text of FOSS license, copy of purchase receipt, etc.)
	`website`: the links to the websites for the software (i.e., homepage, account login, support site, etc.)
	`repository`: the links where the source code for the software are hosted (e.g., GitHub)
%%
# Ledger CLI

## Install Ledger

```bash
conda create -n ledger-env
```
```bash
conda activate ledger-env
```
```bash
conda config --add channels conda-forge
```
```bash
conda config --set channel_priority strict
```
```bash
conda install ledger
```

### To fix `libtinfo` error
```bash
conda install -c conda-forge "ncurses>=6.4"
```

## 📝 Notes
