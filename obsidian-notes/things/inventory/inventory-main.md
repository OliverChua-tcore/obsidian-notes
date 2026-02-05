---
type: note
template-version: 1
title: 📦 Inventory
created: 2026-01-18 00:18
aliases:
  - Inventory
  - 📦 Inventory
tags:
  - inventory
navigate-up:
  - "[[main|🔝]]"
edit-status: complete
description: Inventory MOC
---
###### [[main|🔝]]
# 📦 Inventory

👇 _See dropdown for **inactive** inventory_
```base
filters:
  and:
    - file.tags.contains("inventory")
properties:
  file.name:
    displayName: File
  note.title:
    displayName: Item
views:
  - type: table
    name: Active inventory
    filters:
      and:
        - file.tags.contains("inventory/active")
    groupBy:
      property: item-location
      direction: ASC
    order:
      - title
      - file.name
    sort:
      - property: title
        direction: ASC
    columnSize:
      note.title: 400
      file.name: 300
  - type: table
    name: Inactive inventory
    filters:
      and:
        - '!file.tags.contains("inventory/active")'
        - file.name != "inventory"
    groupBy:
      property: item-location
      direction: ASC
    order:
      - title
      - file.name
    sort:
      - property: title
        direction: ASC
    columnSize:
      note.title: 400
      file.name: 300

```
