---
title: 🚗 Cars we've owned
aliases:
  - Cars we've owned
created: 2017-12-09 10:06
tags:
  - cars
navigate-up:
  - "[[main|🔝]]"
---
# 🚗 Cars we've owned

```base
filters:
  and:
    - file.tags.contains("cars/my-cars")
    - '!note["short-code"].isEmpty()'
properties:
  note.short-code:
    displayName: Short code
  note.car-name:
    displayName: Car
  file.name:
    displayName: File
views:
  - type: table
    name: Cars we've owned
    order:
      - short-code
      - car-name
      - file.name
    sort:
      - property: short-code
        direction: ASC
    columnSize:
      note.short-code: 150
      note.car-name: 450
      file.name: 350
```
