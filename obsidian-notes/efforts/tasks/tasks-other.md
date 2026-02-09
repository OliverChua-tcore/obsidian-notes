---
type: note
template-version: 1
title: ☑️ Your tasks
created: 2026-01-23 02:45
aliases:
  - Your tasks
  - ☑️ Your tasks
tags:
  - tasks
navigate-up:
  - "[[tasks-main-old|📋 Tasks]]"
TQ_short_mode: true
edit-status: complete
description: Task checklist
scope: public
---
###### [[tasks-main|📋 Tasks]]
## ☑️ Your tasks
```tasks
filter by function !task.isDone
priority is above low
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
priority is above low

show cancelled date
hide created date
hide start date
hide scheduled date
hide due date
show done date
```
