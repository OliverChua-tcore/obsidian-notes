---
title: 💰 Financial tasks
aliases:
  - "Financial tasks"
created: 2026-01-14 02:14
tags:
  - tasks
navigate-up:
  - "[[tasks-main|Tasks]]"
TQ_short_mode: true
---
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

> [!done]- Done/canceled tasks
> ```tasks
> filter by function task.isDone
> tags include finance
> 
> show cancelled date
> hide created date
> hide start date
> hide scheduled date
> hide due date
> show done date
> ```
