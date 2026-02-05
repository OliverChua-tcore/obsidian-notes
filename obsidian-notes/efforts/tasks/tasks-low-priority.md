---
type: note
template-version: 1
title: 🔽 Low priority tasks
created: 2026-01-23 03:00
aliases:
  - Low priority tasks
  - 🔽 Low priority tasks
tags:
  - tasks
navigate-up:
  - "[[tasks-main|📋 Tasks]]"
TQ_short_mode: true
edit-status: complete
description: Task checklist
---
###### [[tasks-main|📋 Tasks]]
## 🔽 Low priority tasks
```tasks
filter by function !task.isDone
tags do not include finance
tags do not include cars
tags do not include home
tags do not include my-cars
tags do not include my-home
priority is below none
scheduled before next 7 days
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
tags do not include finance
tags do not include cars
tags do not include home
tags do not include my-cars
tags do not include my-home
priority is below none

show cancelled date
hide created date
hide start date
hide scheduled date
hide due date
show done date
```
