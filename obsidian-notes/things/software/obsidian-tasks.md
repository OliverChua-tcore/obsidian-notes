---
type: software
template-version: 1
title: Tasks for Obsidian
aliases:
  - Tasks
  - Tasks for Obsidian
created: 2026-01-09 16:22
tags:
  - software/obsidian
navigate-up:
  - "[[software-main|Software]]"
  - "[[obsidian|Obsidian]]"
software-name: Tasks for Obsidian
software-author:
  - "[[Clare Macrae]]"
  - "[[Ilyas Landikov]]"
  - "[[Martin Schenck]]"
software-license:
  - https://github.com/obsidian-tasks-group/obsidian-tasks#MIT-1-ov-file
website:
  - https://publish.obsidian.md/tasks
repository:
  - https://github.com/obsidian-tasks-group/obsidian-tasks
edit-status: complete
---
%%
	`software-name`: the name of the software or service
	`software-author`: the creators of the software (i.e., publisher, individual contributors, etc.)
	`software-license`: the links to the software licenses (i.e., text of FOSS license, copy of purchase receipt, etc.)
	`website`: the links to the websites for the software (i.e., homepage, account login, support site, etc.)
	`repository`: the links where the source code for the software are hosted (e.g., GitHub)
%%
# Tasks for Obsidian

## Filters

### Include tags
```
tags include include-tag
```
> Replace `include-tag` with the tag that you want to return

### Don't include tags
```
tags do not include exclude-tag
```
> Replace `exclude-tag` with the tag that you don't want to return

### Filter by done
```
filter by function task.isDone
```
- Same as the `done` filter, but might be useful in conjunction with other expressions on the same line
- `done` matches tasks with status types `DONE`, `CANCELLED` and `NON_TASK`

### Filter by not done
```
filter by function !task.isDone
```
- Same as the `not done` filter, but might be useful in conjunction with other expressions on the same line
- `not done` matches tasks with status types `TODO` and `IN_PROGRESS`

### Filter by priority
`priority is [above|below|not] [lowest|low|none|medium|high|highest]`

The available priorities are (from high to low):
1. 🔺 for highest priority
2. ⏫ for high priority
3. 🔼 for medium priority
4. No signifier indicates no priority (searched for with `none`)
5. 🔽 for low priority
6. ⏬️ for lowest priority

## Grouping

### Group by due date
```
preset group_by_due
```
```
group by function \
    const date = task.due.moment; \
    const now = moment(); \
    const tomorrow  = moment().add(1,'days'); \
    const week  = moment().add(7,'days'); \
    const label = (order, name) => `%%${order}%% ==${name}==`; \
    if (!date)                           return label(6, 'Undated'); \
    if (!date.isValid())                 return label(0, '⛔ Invalid date'); \
    if (date.isBefore(now, 'day'))       return label(1, '⚠️ Overdue'); \
    if (date.isSame(now, 'day'))         return label(2, 'Due today'); \
    if (date.isSame(tomorrow, 'day'))    return label(3, 'Due tomorrow'); \
    if (date.isBefore(week, 'day'))      return label(4, 'Due date within next 7 days'); \
    return label(5, 'Due on future date');
```

### Group by scheduled date
```
preset group_by_scheduled
```
```
group by function \
    const date       = task.scheduled.moment; \
    const lastWeek   = moment().subtract(7,'days'); \
    const yesterday  = moment().subtract(1,'days'); \
    const now        = moment(); \
    const tomorrow   = moment().add(1,'days'); \
    const nextWeek   = moment().add(7,'days'); \
    const label      = (order, name) => `%%${order}%% ${name}`; \
    if (!date)                           return label(9, 'Undated'); \
    if (!date.isValid())                 return label(0, '*==⛔ **Invalid date**==*'); \
    if (date.isBefore(lastWeek, 'day'))  return label(1, '*==⚠️ **Overdue**==*'); \
    if (date.isBefore(yesterday, 'day')) return label(2, '==👈 Scheduled date within last 7 days=='); \
    if (date.isSame(yesterday, 'day'))   return label(3, '==👈 Scheduled for yesterday=='); \
    if (date.isSame(now, 'day'))         return label(4, '==👋 Scheduled for today=='); \
    if (date.isSame(tomorrow, 'day'))    return label(5, '👉 Scheduled for tomorrow'); \
    if (date.isBefore(nextWeek, 'day'))  return label(6, '👉 Scheduled date within next 7 days'); \
    return label(7, '👉 Scheduled for future date');
```

## Layout

### Hide task elements
```
hide id
hide depends on
hide priority

hide cancelled date
hide created date
hide start date
hide scheduled date
hide due date
hide done date

hide recurrence rule
hide on completion
hide tags
```

### Hide query elements
```
hide edit button
hide postpone button
hide backlink
hide task count
```

### Show query elements
```
show tree
show urgency
```

### Full mode `DEFAULT` / short mode
```
full mode
short mode
```
```yaml
TQ_short_mode: false
TQ_short_mode: true
```
- In full mode, query results will show the emojis and the concrete recurrence rule or dates.
- In short mode, query results will only show the emojis, but not the concrete recurrence rule or dates. You can hover over the task to see the rule and dates in a tooltip.

## 📝 Notes
