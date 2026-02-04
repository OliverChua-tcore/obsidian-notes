---
type: software
template-version: 1
title: Dataview
aliases:
  - Dataview
  - Dataview for Obsidian
created: 2026-01-08 16:41
tags:
  - software/obsidian
navigate-up:
  - "[[software-main|Software]]"
  - "[[obsidian|Obsidian]]"
software-name: Dataview
software-author:
  - "[[Michael Brenan]]"
software-license:
  - https://github.com/blacksmithgu/obsidian-dataview#MIT-1-ov-file
website:
  - https://blacksmithgu.github.io/obsidian-dataview
repository:
  - https://github.com/blacksmithgu/obsidian-dataview
date: 2000-02-28
edit-status: in-progress
---
%%
	`software-name`: the name of the software or service
	`software-author`: the creators of the software (i.e., publisher, individual contributors, etc.)
	`software-license`: the links to the software licenses (i.e., text of FOSS license, copy of purchase receipt, etc.)
	`website`: the links to the websites for the software (i.e., homepage, account login, support site, etc.)
	`repository`: the links where the source code for the software are hosted (e.g., GitHub)
%%
# Dataview

## Date function

| Function name                        | Description                               | Live example                             |
| ------------------------------------ | ----------------------------------------- | ---------------------------------------- |
| `date(today)`                        | Current date                              | `= date(today)`                          |
| `date(now)`                          | Current time and date                     | `= date(now)`                            |
| `date(yesterday)` / `date(tomorrow)` | Yesterday and tomorrow, relative to today | `= date(yesterday)` / `= date(tomorrow)` |
| `date(sow)` / `date(eow)`            | Start/end of current week                 | `= date(sow)` / `= date(eow)`            |
| `date(som)` / `date(eom)`            | Start/end of current month                | `= date(som)` / `= date(eom)`            |
| `date(soy)` / `date(eoy)`            | Start/end of current year                 | `= date(soy)` / `= date(eoy)`            |
| `date(2021-11-11)`                   | Explicit ISO date example                 | `= date(2021-11-11)`                     |
| `date(2021-09-20T20:17)`             | Explicit ISO time and date example        | `= date(2021-09-20T20:17)`               |

## Date format function
- `dateformat(date|datetime, string)`

Format a Dataview date using a formatting string. Uses [Luxon tokens](https://moment.github.io/luxon/#/formatting?id=table-of-tokens).

```
dateformat(file.ctime,"yyyy-MM-dd") = "2022-01-05"
dateformat(file.ctime,"HH:mm:ss") = "12:18:04"
dateformat(date(now),"x") = "1407287224054"
dateformat(file.mtime,"ffff") = "Wednesday, August 6, 2014, 1:07 PM Eastern Daylight Time"
```

> [!note] Note: `dateformat()` returns a string, not a date, so you can't compare it against the result from a call to `date()` or a variable like `file.day` which already is a date. To make those comparisons you can format both arguments.

## Implicit fields

| Field name         | Data type      | Description                                                                                                                       | Live example              |
| ------------------ | -------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| `file.path`        | Text           | The full file path, including the filename                                                                                        | `= this.file.path`        |
| `file.folder`      | Text           | The path of the folder the file belongs to                                                                                        | `= this.file.folder`      |
| `file.name`        | Text           | The filename as seen in the sidebar                                                                                               | `= this.file.name`        |
| `file.ext`         | Text           | The extension of the file type (generally `md`)                                                                                   | `= this.file.ext`         |
|                    |                |                                                                                                                                   |                           |
| `file.link`        | Link           | A link to the file                                                                                                                | `= this.file.link`        |
| `file.size`        | Number         | The size (in bytes) of the file                                                                                                   | `= this.file.size`        |
| `file.ctime`       | Date with time | The date and time that the file was created                                                                                       | `= this.file.ctime`       |
| `file.cday`        | Date           | The date that the file was created                                                                                                | `= this.file.cday`        |
| `file.mtime`       | Date with time | The date and time that the file was last modified                                                                                 | `= this.file.mtime`       |
| `file.mday`        | Date           | The date that the file was last modified                                                                                          | `= this.file.mday`        |
| `file.tags`        | List           | A list of all _unique tags_ in the note[^tags]                                                                                    | `= this.file.tags`        |
| `file.etags`       | List           | A list of all _explicit tags_ in the note[^etags]                                                                                 | `= this.file.etags`       |
| `file.inlinks`     | List           | A list of all _incoming links_ (backlinks) to the file[^inlinks]                                                                  | `= this.file.inlinks`     |
| `file.outlinks`    | List           | A list of all _outgoing links_ from the file[^outlinks]                                                                           | `= this.file.outlinks`    |
| `file.aliases`     | List           | A list of all _aliases_ for the note                                                                                              | `= this.file.aliases`     |
| `file.tasks`       | List           | A list of all _tasks_ in the file                                                                                                 | `= this.file.tasks`       |
| `file.lists`       | List           | A list of all _list elements_ (including _tasks_) in the file                                                                     | `= this.file.lists`       |
| `file.frontmatter` | List           | Contains the raw values of all frontmatter in the form of `key: value`                                                            | `= this.file.frontmatter` |
| `file.day`         | Date           | Only available if the file has a date inside its filename (of form `yyyy-mm-dd` or `yyyymmdd`) or has a `date` field/inline field | `= this.file.day`         |
| `file.starred`     | Boolean        | Returns `true` if the file has been bookmarked via the Obsidian core plugin `Bookmarks`                                           | `= this.file.starred`     |

[^tags]: Sub-tags are broken down by each level, so `#Tag/1/A` will be stored in the list as `#Tag`, `#Tag/1`, and `#Tag/1/A`
[^etags]: Unlike `file.tags`, does not break sub-tags down (e.g., only `#Tag/1/A`)
[^inlinks]: All files that contain a link to the file
[^outlinks]: All links the file contains

- _Example_ list item 1
- _Example_ list item 2

- [ ] _Example_ task 1
- [x] _Example_ task 2

## 📝 Notes
