---
type: note
template-version: 1
title: 🚗 Car tasks
aliases:
  - Car tasks
  - 🚗 Car tasks
created: 2026-01-26 01:19
tags:
  - tasks
navigate-up:
  - "[[tasks-main|📋 Tasks]]"
TQ_short_mode: true
edit-status: complete
---
###### [[tasks-main|📋 Tasks]]
## 🚗 Car tasks
```tasks
filter by function !task.isDone
tags include cars
tags include my-cars
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
tags include cars
tags include my-cars

show cancelled date
hide created date
hide start date
hide scheduled date
hide due date
show done date
```
