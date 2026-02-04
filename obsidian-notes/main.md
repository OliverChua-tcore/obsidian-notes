---
title: 🔝 Homepage
aliases:
  - 🔝
  - Homepage
created: 2026-01-15 23:34
description: Start here
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
  - type: list
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
  - type: list
    name: Today ± 30 days
    filters:
      and:
        - note["short-date"] <= today() + duration("30 days")
        - note["short-date"] >= today() - duration("30 days")
    order:
      - file.name
    sort:
      - property: file.name
        direction: DESC

```

### 📋 [[tasks-main|Tasks]]
> [!tip] Shortcut to add _tasks_ `Ctrl + T`

### 👨‍👩‍👧‍👦 [[my-family|My family]]
- 🏡 [[my-homes|Our homes & addresses]]
- 🚗 [[my-cars|Cars we've owned]]
- 📦 [[inventory|Inventory]]

## Finance
- 💰 [[chart-of-accounts|Chart of accounts]]
- 💲 [[finance-trxns.base|Transactions]]
> [!tip] Shortcut to add _transactions_ `Ctrl + Shift + T`

## Categories

### 🧑‍🤝‍🧑 [[things/people/people-main|People]]

### 🗺️ [[things/places/places-main|Places]]

### 🚙 [[things/cars/cars-main|Cars]]

### 💾 [[software-main|Software]]

### 🩺 [[ideas/health/health-main|Health]]

### 🧳 [[ideas/travel/travel-main|Travel]]
- 💬 [[ideas/travel/languages-main|Lingua franca]]
- 🛄 [[travel-checklist-main|Travel checklist]]

### 🛍️ [[ideas/retail/retail-main|Retail]]
- 🛒 [[shopping-lists-main|Shopping lists]]

## The arts

### 🎷 [[ideas/music/music-main|Music]]

### 📷 [[ideas/photography/photography-main|Photography]]

### 🎭 [[ideas/dramatic-works/dramatic-works-main|Dramatic works]]

### 📚 [[ideas/written-works/written-works-main|Written works]]
- 📰 [[reading-lists-main|Reading lists]]

---

> [!info]- 🗝️ Reference
> - [[bases-main|Bases]]
> - [[emojis|Emojis]]
> - [[linux-commands|Linux commands]]
> - [[obsidian|Obsidian]]
> 	- [[obsidian-callouts|Obsidian callouts]]
> - [[rating-system|Rating system]]
> - [[character-map|Windows character map]]
