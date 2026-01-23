---
title: 📋 Tasks
aliases:
  - Tasks
created: 2026-01-11 03:59
tags:
  - tasks
navigate-up:
  - "[[main|🔝]]"
TQ_short_mode: true
---
# 📋 Tasks

## 💰 [[tasks-finance|Financial tasks]]
## 🏡 [[tasks-home|Home tasks]]
## ✔️ Other tasks
```tasks
filter by function !task.isDone
tags do not include finance
tags do not include home
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
> tags do not include finance
> tags do not include home
> 
> show cancelled date
> hide created date
> hide start date
> hide scheduled date
> hide due date
> show done date
> ```
