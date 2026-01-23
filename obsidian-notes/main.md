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

### 📋 [[tasks-main|Tasks]]
### 💰 [[Ledger]]
### 👨‍👩‍👧‍👦 [[my-family|My family]]
- 🏡 [[my-homes|Our homes & addresses]]
- 🚗 [[my-cars|Cars we've owned]]
- 📦 [[inventory|Inventory]]

## Categories

### 🧑‍🤝‍🧑 [[People]]
### 🗺️ [[Places]]
### 🚙 [[Cars]]
### 💾 [[software|Software]]
### 🩺 [[Health]]
### 🧳 [[Travel]]
- 💬 [[Lingua franca]]
- 🛄 [[travel-checklist|Travel checklist]]
### 🛍️ [[Retail]]
- 🛒 [[shopping-lists|Shopping lists]]

## The arts

### 🎷 [[Music]]
### 📷 [[Photography]]
### 🎭 [[Dramatic works]]
### 📚 [[Written works]]
- 📰 [[reading-lists|Reading lists]]

---
> [!info]- 📚 Reference
> - [[bases-main|Bases]]
> - [[linux-commands|Linux commands]]
> - [[obsidian|Obsidian]]
> 	- [[obsidian-callouts|Obsidian callouts]]
> - [[rating-system|Rating system]]
> - [[character-map|Windows character map]]
