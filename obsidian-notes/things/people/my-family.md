---
type: note
template-version: 1
title: 👨‍👩‍👧‍👦 My family
created: 2026-01-10 02:17
aliases:
  - My family
  - 👨‍👩‍👧‍👦 My family
tags:
  - people/family
navigate-up: "[[people-main|🧑‍🤝‍🧑 People]]"
edit-status: complete
description: My family MOC
---
###### [[people-main|🧑‍🤝‍🧑 People]]
# 👨‍👩‍👧‍👦 My family

## 💒 Post-marriage
```base
filters:
  and:
    - file.tags.contains("people/family/immediate")
views:
  - type: cards
    name: Post-marriage
    filters:
      and:
        - '!note["navigate-up"].containsAny(link("main", "🔝"), link("people", "People"))'
    groupBy:
      property: navigate-up
      direction: ASC
    order:
      - title
      - birth-date
    sort:
      - property: title
        direction: ASC
    columnSize:
      file.name: 100
    indentProperties: false
    cardSize: 400
    imageAspectRatio: 1

```

## 🏫 Pre-marriage
```base
filters:
  and:
    - file.tags.contains("people/family/early-life")
views:
  - type: cards
    name: Pre-marriage
    filters:
      and:
        - '!note["navigate-up"].containsAny(link("main", "🔝"), link("people", "People"))'
    groupBy:
      property: navigate-up
      direction: ASC
    order:
      - title
      - birth-date
    sort:
      - property: title
        direction: ASC
    columnSize:
      file.name: 100
    indentProperties: false
    cardSize: 400

```

## 🌳 Extended
```base
filters:
  and:
    - file.tags.contains("people/family/extended")
views:
  - type: cards
    name: Extended
    filters:
      and:
        - '!note["navigate-up"].containsAny(link("main", "🔝"), link("people", "People"))'
    groupBy:
      property: navigate-up
      direction: ASC
    order:
      - title
      - birth-date
    sort:
      - property: title
        direction: ASC
    columnSize:
      file.name: 100
    indentProperties: false
    cardSize: 400

```
