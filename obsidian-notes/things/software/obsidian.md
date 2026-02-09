---
type: software
template-version: 1
title: Obsidian
aliases:
  - Obsidian
created: 2026-01-06 12:48
tags:
  - software/obsidian
navigate-up:
  - "[[software-main|Software]]"
software-name: Obsidian
software-author:
  - Obsidian
  - "[[@kepano]]"
  - "[[@liam]]"
  - "[[@joethei]]"
  - "[[@mgmeyers]]"
  - "[[@tgrosinger]]"
software-license:
  - https://obsidian.md/license
website:
  - https://obsidian.md
  - https://obsidian.md/account
  - https://help.obsidian.md
repository:
  - https://github.com/obsidianmd/obsidian-help
edit-status: in-progress
description: The settings for this vault
scope: public
---
%%
	`software-name`: the name of the software or service
	`software-author`: the creators of the software (i.e., publisher, individual contributors, etc.)
	`software-license`: the links to the software licenses (i.e., text of FOSS license, copy of purchase receipt, etc.)
	`website`: the links to the websites for the software (i.e., homepage, account login, support site, etc.)
	`repository`: the links where the source code for the software are hosted (e.g., GitHub)
%%
# Obsidian

> [!tip] This note contains the settings for this vault

## 🔃 Check for updates periodically
- General
- Appearance
- Community plugins

## ⌨️ Hotkeys in Windows for this vault

### Select Obsidian hotkeys
| Command                                  | Hotkey                  |
| ---------------------------------------- | ----------------------- |
| New tab                                  | `Ctrl + N`[^notdefault] |
| Toggle folder properties in current file | `Alt + F`[^notdefault]  |
| Toggle left sidebar                      | `Ctrl + L`[^notdefault] |
| Toggle right sidebar                     | `Ctrl + R`[^notdefault] |
| Undo close tab                           | `Ctrl + U`[^notdefault] |

### Select ***==core==*** plugin hotkeys
| Plugin              | Command                | Hotkey                          |
| ------------------- | ---------------------- | ------------------------------- |
| Command palette     | Open command palette   | `Ctrl + P`                      |
| Graph view          | Open graph view        | `Ctrl + G`                      |
| Graph view          | Open local graph       | `Ctrl + Shift + G`[^notdefault] |
| Quick switcher      | Open quick switcher    | `Ctrl + O`                      |
| Unique note creator | Create new unique note | `Ctrl + Shift + T`[^notdefault] |
| Workspaces          | Load workspace layout  | `Ctrl + Shift + W`[^notdefault] |

### Select ***==community==*** plugin hotkeys
| Plugin             | Command                    | Hotkey                  |
| ------------------ | -------------------------- | ----------------------- |
| Notebook Navigator | Open daily note            | `Ctrl + D`[^notdefault] |
| Omnisearch         | Vault search               | `Ctrl + O`[^notdefault] |
| Tasks              | Create or edit task        | `Ctrl + T`[^notdefault] |
| Templater          | Open insert template modal | `Alt + E`               |

[^notdefault]: Not the default hotkey

## 🔥 Tips
- See the [[markdown|cheat sheet]] for _Markdown_ syntax
- See the [[obsidian-callouts|cheat sheet]] for _callout_ syntax
- You can swipe from the top and sides on mobile
- Obsidian [[@kapano|CEO]]'s personal [vault template](https://github.com/kepano/kepano-obsidian)

# ⚙️ Obsidian setup for this vault

## Folders & notes

- [[main|🔝 Homepage]] — Top-level _Map of Content_[^moc] for this vault
- `+` — _**inbox** for notes that need to be categorized_
- `bases` — _for storing **base files**_
	- [[bases-main|Bases]] — _Map of Content_[^moc] for Map of Content (MOC) bases
- `calendar` — _for storing notes tied to a **time period**_
	- [[out-of-office|🪹 Out-of-office dates]] — _Map of Content_[^moc] for out-of-office dates
	- `1-daily-notes` — _uses [[daily-notes-template]]_
	- `2-weekly-notes` — _uses [[weekly-notes-template]]_
	- `3-monthly-notes` — _uses [[monthly-notes-template]]_
	- `4-quarterly-notes` — _uses [[quarterly-notes-template]]_
	- `5-yearly-notes` — _uses [[yearly-notes-template]]_
- `efforts` — _for storing notes related to **action items**_
	- [[tickets-main|🧑‍💻 Tickets]] — _Map of Content_[^moc] for support tickets
	- `projects`
	- `tasks`
		- [[tasks-main|📋 Tasks]] — _Map of Content_[^moc] for tasks
		- [[recurring-tasks|🔁 Recurring tasks]] — Note for storing recurring tasks
- `ideas` — _for storing notes related to **knowledge items**_
	- `communication` — _use [[email-messages-template]] or [[chat-messages-template]]_
	- `development`
	- `social`
- `local` — _for notes you don't want synced to other devices or to the cloud_
- `things` — _for storing notes related to **physical items**_
	- `inventory`
		- [[inventory-main|Inventory]] — _Map of Content_[^moc] for inventory items
	- `people` — _uses [[people-template]]_
		- [[people-main|🧑‍🤝‍🧑 People]] — _Map of Content_[^moc] for people
	- `places` — _uses [[places-template]]_
	- `software` — _uses [[software-template]]_
		- [[software-main|Software]] — _Map of Content_[^moc] for software programs
- `x` — _for storing the items that you normally don't need to access directly_
	- `attachments` — _for storing **anything that's not a note**_
	- `scripts` — _for storing [[JavaScript]] **scripts** used by [[obsidian-templater|Templater]]_
	- `templates` — _for storing **templates**_[^template]
		- `calendar-templates` — _for storing templates used by the [[obsidian-notebook-navigator|Notebook Navigator]] plugin calendar_
		- `category-templates` — _for storing templates used for various note categories_
		- `examples` — _for storing example snippets_
		- `snippets` — _for storing template snippets_

[^moc]: https://notes.linkingyourthinking.com/Cards/MOCs+Overview
[^template]: See template files for descriptions

## Options
> [!attention] Only the _changes_ to the default settings are outlined below

> [!attention] This section may be out-of-date

### General
- Advanced
	- Notify if startup takes longer than expected `ON`

### Editor
- Default view for new tabs `Reading view`
- Default editing mode `Source mode`
- Display
	- Show line numbers `ON`
	- Show indentation guides `OFF`

### Files and links
- Default location for new notes `In the folder specified below`
- Folder to create new notes in `+`
- Default location for new attachments `In the folder specified below`
- Attachment folder path `x/attachments`
- Links
	- Automatically update internal links `ON`
	- Show all file types `ON`
- Advanced
	- Excluded files
		- `main`
		- `x/undefined`

### Appearance
- Themes `Blue Topaz`
- Interface
	- Show inline title `OFF`
	- Show ribbon `OFF`
- CSS snippets
	- [S - Checkboxes](https://github.com/SlRvb/Obsidian--ITS-Theme/blob/main/Snippets/S%20-%20Checkboxes.css) `ON`

### Hotkeys

| Command                                     | Hotkey             |
| ------------------------------------------- | ------------------ |
| Graph view: Open local graph                | `Ctrl + Shift + G` |
| New tab                                     | `Ctrl + N`         |
| Notebook Navigator: Open daily note         | `Ctrl + D`         |
| Omnisearch: Vault search                    | `Ctrl + O`         |
| Tasks: Create or edit task                  | `Ctrl + T`         |
| Toggle folder properties in current file    | `Alt + F`          |
| Toggle left sidebar                         | `Ctrl + L`         |
| Toggle right sidebar                        | `Ctrl + R`         |
| Undo close tab                              | `Ctrl + U`         |
| Unique note creator: Create new unique note | `Ctrl + Shift + T` |
| Workspaces: Load workspace layout           | `Ctrl + Shift + W` |

### Keychain
- No changes to default settings

### Core plugins
- [ ] Audio recorder
- [A] Backlinks
- [A] Bases
- [-] Bookmarks[^disable] — _unless using **Bookmarks**_
- [-] Canvas[^disable] — _unless using **Canvas**_
- [A] Command palette
- [-] Daily notes[^disable] — _replaced by [[obsidian-periodic-notes|Periodic Notes]]_
- [A] File recovery
- [A] Files
- [+] Footnotes view[^enable]
- [ ] Format converter
- [A] Graph view
- [A] Note composer
- [A] Outgoing links
- [A] Outline
- [A] Page preview
- [A] Properties view
- [ ] Publish
- [A] Quick switcher
- [ ] Random note
- [A] Search
- [ ] Slash commands
- [ ] Slides
- [-] Sync[^disable] — _unless using **Obsidian Sync**_
- [A] Tags view
- [A] Templates
- [+] Unique note creator[^enable]
- [+] Web viewer[^enable]
- [A] Word count
- [+] Workspaces[^enable]

[^enable]: Enable

[^disable]: Disable

### Community plugins
- Turn on community plugins
- Automatically check for plugin updates `ON`

| Plugin name                                              | Plugin author                           |
| -------------------------------------------------------- | --------------------------------------- |
| [[obsidian-advanced-tables\|Advanced Tables]]            | [[@tgrosinger]]                         |
| [[obsidian-dataview\|Dataview]]                          | [[Michael Brenan]]                      |
| [[obsidian-git\|Git]]                                    | [[Vinzent]]                             |
| [[obsidian-hider\|Hider]]                                | [[@kepano]]                             |
| [[obsidian-sort\|Sort & Permute lines]]                  | [[Vinzent]]                             |
| [[obsidian-style-settings\|Style Settings]]              | [[@mgmeyers]]                           |
| [[obsidian-tasks\|Tasks]]                                | [[Clare Macrae]] and [[Ilyas Landikov]] |
| [[obsidian-templater\|Templater]]                        | [[SilentVoid]]                          |
| [[obsidian-fold-properties\|Fold Properties By Default]] | [[Tommy Bergeron]]                      |

## Core plugins
> [!attention] This section may be out-of-date

### Backlinks
- No changes to default settings

### Command palette
- Pinned commands
	- `Tasks: Create or edit task`
	- `Periodic Notes: Open daily note`
	- `Sort & Permute lines: Sort alphabetically`
	- `Sort & Permute lines: Sort current list alphabetically`

### File recovery
- No changes to default settings

### Note composer
- No changes to default settings

### Page preview
- Require Ctrl to trigger page preview on hover
	- Bases `OFF`

### Quick switcher
- No changes to default settings

### Sync
- Conflict resolution `Create conflict file`
- Selective sync
	- Excluded folders
		- `local`
	- All toggles `ON`
- Vault configuration sync
	- All toggles `ON`

### Templates
- Template folder location `x/templates`

### Unique note creator
- New file location `efforts/finance/transactions`
- Unique prefix format `YYYY-MM-DD-HHmmss`

### Web viewer
- Saved page folder `+`
- Search engine `Brave`

## Community plugins
> [!attention] This section may be out-of-date

### [[obsidian-advanced-tables|Advanced Tables]]
- No changes to default settings

### [[obsidian-dataview|Dataview]]
- Enable JavaScript queries `ON`
- Tasks
	- Automatic task completion tracking `ON`
	- Use emoji shorthand for completion `ON`

### [[obsidian-git|Git]]
- Hunk management
	- Signs `ON`
	- Hunk commands `ON`
	- Status bar with summary of line changes `Colored`
- Line author information
	- Show commit authoring information next to each line `ON`
	- Ignore whitespace and newlines in changes `ON`
- History view
	- Show Author `Initials`
	- Show Date `ON`
- Miscellaneous
	- Show the count of modified files in the status bar `ON`

### [[obsidian-hider|Hider]]
- Interface
	- Hide sidebar toggle buttons `ON`

### [[obsidian-periodic-notes|Periodic Notes]]

| Daily notes         | Setting                  |
| ------------------- | ------------------------ |
| Format              | `YYYY/YYYY-MM-DD-dddd`   |
| Daily note template | [[daily-notes-template]] |
| Note folder         | `calendar/1-daily-notes` |

| Weekly notes         | Setting                   |
| -------------------- | ------------------------- |
| Format               | `YYYY/YYYY-[W]-WW`        |
| Weekly note template | [[weekly-notes-template]] |
| Note folder          | `calendar/2-weekly-notes` |

| Monthly notes         | Setting                    |
| --------------------- | -------------------------- |
| Format                | `YYYY/YYYY-MM-MMMM`        |
| Monthly note template | [[monthly-notes-template]] |
| Note folder           | `calendar/3-monthly-notes` |

| Quarterly notes         | Setting                      |
| ----------------------- | ---------------------------- |
| Format                  | `YYYY-[Quarter]-Q`           |
| Quarterly note template | [[quarterly-notes-template]] |
| Note folder             | `calendar/4-quarterly-notes` |

| Yearly notes         | Setting                   |
| -------------------- | ------------------------- |
| Format               | `YYYY-[Year]`             |
| Yearly note template | [[yearly-notes-template]] |
| Note folder          | `calendar/5-yearly-notes` |

### [[obsidian-style-settings|Style Settings]]
- Import
```json
{
  "blue-topaz-theme@@layout-style-options": "bt-bubble-layout",
  "blue-topaz-theme@@h1-toggle-underline": true,
  "blue-topaz-theme@@header-1-background": true,
  "blue-topaz-theme@@h2-toggle-underline": true,
  "blue-topaz-theme@@h2-underline-style": "dotted",
  "blue-topaz-theme@@file-line-width": 60,
  "blue-topaz-theme@@fancy-hr": "fancy-hr-icon",
  "blue-topaz-theme@@fancy-hr-icon": "'🔹'",
  "blue-topaz-theme@@toggle-checked-decoration": true,
  "blue-topaz-theme@@checkbox-size": "1.3rem",
  "blue-topaz-theme@@tag-style-option": "rainbow-tag",
  "blue-topaz-theme@@outline-style": "logseq-outline-style",
  "blue-topaz-theme@@prompt-options": "fancy-prompt-1",
  "blue-topaz-theme@@tab-head-style": "underline-tab-style",
  "blue-topaz-theme@@highlight-style": "all-rounded-corners-highlight",
  "blue-topaz-theme@@toggle-calendar-shadow": true,
  "blue-topaz-theme@@enable-alternative-checkboxes": false,
  "Blue-Topaz-Codebox-Highlight@@code-line-number": true,
  "Blue-Topaz-Codebox-Highlight@@background-code-2@@light": "#00000080",
  "Blue-Topaz-Codebox-Highlight@@text-color-code@@light": "#FFFFFF",
  "checkbox@@check-color": true
}
```

### [[obsidian-tasks|Tasks]]
- Global task filter
	- Global filter `#task`
	- Remove global filter from description `ON`
- Presets
	- `group_by_due` [[obsidian-tasks#Group by due date|Code]]
	- `group_by_scheduled` [[obsidian-tasks#Group by scheduled date|Code]]

- Task statuses
	- Custom statuses
		- ITS Theme & SlRvB Checkboxes
- Dates
	- Set created date on every added task `ON`

### [[obsidian-templater|Templater]]
- Template folder location `x/templates`
- Automatic jump to cursor `ON`
- Trigger Templater on new file creation `ON`
- Folder templates:

| Folder                         | Template                     |
| ------------------------------ | ---------------------------- |
| `calendar/1-daily-notes`       | [[daily-notes-template]]     |
| `calendar/2-weekly-notes`      | [[weekly-notes-template]]    |
| `calendar/3-monthly-notes`     | [[monthly-notes-template]]   |
| `calendar/4-quarterly-notes`   | [[quarterly-notes-template]] |
| `calendar/5-yearly-notes`      | [[yearly-notes-template]]    |
| `things/people`                | [[people-template]]          |
| `things/places`                | [[places-template]]          |
| `things/software`              | [[software-template]]        |
| `/`                            | [[blank-template]]           |

- Template hotkeys
	- `x/templates/a-snippet.md`
- User script functions
	- Script files folder location `x/scripts`

## 📝 Notes
