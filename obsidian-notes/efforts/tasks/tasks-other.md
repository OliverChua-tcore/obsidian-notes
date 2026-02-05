---
type: note
template-version: 1
title: ☑️ Other tasks
created: 2026-01-23 02:45
aliases:
  - Other tasks
  - ☑️ Other tasks
tags:
  - tasks
navigate-up:
  - "[[tasks-main|📋 Tasks]]"
TQ_short_mode: true
edit-status: complete
description: Task checklist
---
###### [[tasks-main|📋 Tasks]]
## ☑️ Other tasks
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
