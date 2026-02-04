---
title: 🏡 Our homes & addresses
aliases:
  - Our homes & addresses
  - 🏡 Our homes & addresses
created: 2026-01-08 18:34
tags:
  - places/my-homes
navigate-up:
  - "[[main|🔝]]"
---
###### [[main|🔝]]
# 🏡Our homes & addresses

## Where we've lived

```base
filters:
  and:
    - file.tags.contains("places/my-homes")
    - '!note["short-code"].isEmpty()'
properties:
  file.name:
    displayName: File
  note.short-code:
    displayName: Short code
  note.place-name:
    displayName: Home
  note.start-date:
    displayName: Start date
  note.end-date:
    displayName: End date
views:
  - type: table
    name: Where we've lived
    order:
      - short-code
      - place-name
      - start-date
      - end-date
      - file.name
    sort:
      - property: file.name
        direction: DESC
    columnSize:
      file.name: 250
      note.short-code: 150
      note.place-name: 250
      note.start-date: 150
      note.end-date: 150
```
