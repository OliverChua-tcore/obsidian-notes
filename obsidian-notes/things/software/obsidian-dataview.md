---
template-version: 1
title: Dataview
aliases:
  - Dataview
  - Dataview for Obsidian
created: 2026-01-08 16:41
tags:
  - software/obsidian
navigate-up:
  - "[[software|Software]]"
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

- `date(today)` – current date
- `date(now)` – current date and time
- `date(tomorrow)` / `date(yesterday)` – relative to today
- `date(sow)` / `date(eow)` – start/end of current week
- `date(som)` / `date(eom)` – start/end of current month​
- `date(soy)` / `date(eoy)` – start/end of current year​    
- `date(2021-11-11)` or `date(2021-09-20T20:17)` – explicit ISO dates

## Implicit fields

| Field Name         | Data Type      | Description                                                                                                                                                                      |
| ------------------ | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `file.name`        | Text           | The file name as seen in Obsidians sidebar.                                                                                                                                      |
| `file.folder`      | Text           | The path of the folder this file belongs to.                                                                                                                                     |
| `file.path`        | Text           | The full file path, including the files name.                                                                                                                                    |
| `file.ext`         | Text           | The extension of the file type; generally `md`.                                                                                                                                  |
| `file.link`        | Link           | A link to the file.                                                                                                                                                              |
| `file.size`        | Number         | The size (in bytes) of the file.                                                                                                                                                 |
| `file.ctime`       | Date with Time | The date that the file was created.                                                                                                                                              |
| `file.cday`        | Date           | The date that the file was created.                                                                                                                                              |
| `file.mtime`       | Date with Time | The date that the file was last modified.                                                                                                                                        |
| `file.mday`        | Date           | The date that the file was last modified.                                                                                                                                        |
| `file.tags`        | List           | A list of all unique tags in the note. Subtags are broken down by each level, so `#Tag/1/A` will be stored in the list as `[#Tag, #Tag/1, #Tag/1/A]`.                            |
| `file.etags`       | List           | A list of all explicit tags in the note; unlike `file.tags`, does not break subtags down, i.e. `[#Tag/1/A]`                                                                      |
| `file.inlinks`     | List           | A list of all incoming links to this file, meaning all files that contain a link to this file.                                                                                   |
| `file.outlinks`    | List           | A list of all outgoing links from this file, meaning all links the file contains.                                                                                                |
| `file.aliases`     | List           | A list of all aliases for the note as defined via the [YAML frontmatter](https://help.obsidian.md/How+to/Add+aliases+to+note).                                                   |
| `file.tasks`       | List           | A list of all tasks (I.e., `\| [ ] some task`) in this file.                                                                                                                     |
| `file.lists`       | List           | A list of all list elements in the file (including tasks); these elements are effectively tasks and can be rendered in task views.                                               |
| `file.frontmatter` | List           | Contains the raw values of all frontmatter in form of `key \| value` text values; mainly useful for checking raw frontmatter values or for dynamically listing frontmatter keys. |
| `file.day`         | Date           | Only available if the file has a date inside its file name (of form `yyyy-mm-dd` or `yyyymmdd`), or has a `Date` field/inline field.                                             |
| `file.starred`     | Boolean        | If this file has been bookmarked via the Obsidian Core Plugin "Bookmarks".                                                                                                       |
