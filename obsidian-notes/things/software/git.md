---
template-version: 1
title: Git
aliases:
  - Git
created: 2026-01-23 17:00
tags:
  - software/git
navigate-up:
  - "[[software-main|Software]]"
software-name: Git
software-author:
  - Git
software-license:
  - https://github.com/git/git?tab=License-1-ov-file#readme
website:
  - https://git-scm.com
repository:
  - https://github.com/git/git
---
%%
	`software-name`: the name of the software or service
	`software-author`: the creators of the software (i.e., publisher, individual contributors, etc.)
	`software-license`: the links to the software licenses (i.e., text of FOSS license, copy of purchase receipt, etc.)
	`website`: the links to the websites for the software (i.e., homepage, account login, support site, etc.)
	`repository`: the links where the source code for the software are hosted (e.g., GitHub)
%%
# Git

## Create a private fork of a public repository[^fork]
```shell
git clone --bare https://github.com/original-owner/public-repo.git public-repo
cd public-repo

git push --mirror https://github.com/your-username/private-repo.git
cd ..

git clone https://github.com/your-username/private-repo.git private-repo
cd private-repo

git remote add public https://github.com/original-owner/public-repo.git
git pull public main
git push origin main
```

[^fork]: [[2025-10-03]] https://docs.8labs.id/docs/git/private-fork

## 📝 Notes
