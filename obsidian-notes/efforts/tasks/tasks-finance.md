---
type: note
template-version: 1
title: 💰 Financial tasks
created: 2026-01-14 02:14
aliases:
  - Financial tasks
  - 💰 Financial tasks
tags:
  - tasks
navigate-up:
  - "[[tasks-main|📋 Tasks]]"
TQ_short_mode: true
edit-status: complete
description: Task checklist
---
###### [[tasks-main|📋 Tasks]]
## 💰 Financial tasks
```tasks
filter by function !task.isDone
tags include finance
preset group_by_scheduled

hide cancelled date
hide created date
hide start date
show scheduled date
hide due date
hide done date
```

## ✔️ Done/canceled tasks
```tasks
filter by function task.isDone
tags include finance

show cancelled date
hide created date
hide start date
hide scheduled date
hide due date
show done date
```
