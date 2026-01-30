---
title: 🏡 Home tasks
aliases:
  - "Home tasks"
created: 2026-01-14 02:35
tags:
  - tasks
navigate-up:
  - "[[tasks-main|Tasks]]"
TQ_short_mode: true
---
## 🏡 Home tasks
```tasks
filter by function !task.isDone
tags include home
tags include my-homes
preset group_by_scheduled

hide cancelled date
hide created date
hide start date
show scheduled date
hide due date
hide done date
```

> [!done]- Done/canceled tasks
> ```tasks
> filter by function task.isDone
> tags include home
> tags include my-homes
> 
> show cancelled date
> hide created date
> hide start date
> hide scheduled date
> hide due date
> show done date
> ```
