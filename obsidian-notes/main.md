---
title: 🔝 Homepage
aliases:
  - 🔝
  - Homepage
created: 2026-01-15 23:34
tags:
  - start-here
---
# Personal Knowledge Management (PKM) notes

### 📆 Daily notes
```base
filters:
  and:
    - file.tags.contains("daily-notes")
properties:
  file.name:
    displayName: Daily note
views:
  - type: table
    name: Recent daily notes
    filters:
      and:
        - note["short-date"] <= today()
    order:
      - file.name
    sort:
      - property: file.name
        direction: DESC
    limit: 7
```
- 🪹 [[out-of-office|Out-of-office dates]]

## 🧑‍💻 [[tickets-main|Tickets]]
![[tickets-active-views.base]]

## 📋 [[tasks-main|Tasks]]
![[tasks-main#To-do/in-progress tasks]]

## 🚧 Projects
- 

## 🗃️ Repositories
- 

## Categories

### 🧑‍🤝‍🧑 [[People]]
### 🗺️ [[Places]]
### 💾 [[software|Software]]
- 📰 [[reading-lists|Reading lists]]

---
> [!info]- 📚 Reference
> - [[bases-main|Bases]]
> - [[linux-commands|Linux commands]]
> - [[obsidian|Obsidian]]
> 	- [[obsidian-callouts|Obsidian callouts]]
> - [[rating-system|Rating system]]
> - [[character-map|Windows character map]]
