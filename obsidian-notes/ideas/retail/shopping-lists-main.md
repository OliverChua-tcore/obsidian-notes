---
title: 🛒 Shopping lists
aliases:
  - Shopping lists
created: 2026-01-14 15:42
tags:
  - retail
navigate-up:
  - "[[main|🔝]]"
---
# 🛒 Shopping lists

```base
filters:
  and:
    - file.tags.contains("shopping-list")
properties:
  note.title:
    displayName: Shopping list
  file.mtime:
    displayName: Last modified
  file.name:
    displayName: File
views:
  - type: table
    name: Shopping lists
    filters:
      and:
        - '!file.tags.contains("shopping-list/item")'
    order:
      - title
      - file.mtime
      - file.name
    sort:
      - property: aliases
        direction: ASC
    columnSize:
      note.title: 250
      file.mtime: 250
      file.name: 250
  - type: table
    name: Shopping list items
    filters:
      and:
        - file.tags.contains("shopping-list/item")
    order:
      - title
      - file.mtime
      - file.name
    sort:
      - property: title
        direction: ASC

```
