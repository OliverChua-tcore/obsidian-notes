---
title: 🪹 Out-of-office dates
aliases:
  - Out-of-office dates
created: 2026-01-07 23:18
tags:
  - out-of-office
navigate-up:
  - "[[main|🔝]]"
---
# 🪹 Out-of-office dates

### ✨ Holiday

```dataview
TABLE ooo-reason AS "Reason"
FROM #out-of-office/✨
SORT file.name DESC
LIMIT 10
```

### 🏖️ PTO

```dataview
TABLE ooo-reason AS "Reason"
FROM #out-of-office/🏖️
SORT file.name DESC
LIMIT 10
```

### 🤒 Sick day

```dataview
TABLE ooo-reason AS "Reason"
FROM #out-of-office/🤒
SORT file.name DESC
LIMIT 10
```

### 🕯️ Bereavement

```dataview
TABLE ooo-reason AS "Reason"
FROM #out-of-office/🕯️
SORT file.name DESC
LIMIT 10
```
