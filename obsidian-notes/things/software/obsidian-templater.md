---
type: software
template-version: 1
title: Templater
aliases:
  - Templater
  - Templater for Obsidian
created: 2026-01-08 16:41
tags:
  - software/obsidian
navigate-up:
  - "[[software-main|Software]]"
  - "[[obsidian|Obsidian]]"
software-name: Templater
software-author:
  - "[[SilentVoid]]"
software-license:
  - https://github.com/SilentVoid13/Templater#AGPL-3.0-1-ov-file
website:
  - https://silentvoid13.github.io/Templater
repository:
  - https://github.com/SilentVoid13/Templater
edit-status: in-progress
---
%%
	`software-name`: the name of the software or service
	`software-author`: the creators of the software (i.e., publisher, individual contributors, etc.)
	`software-license`: the links to the software licenses (i.e., text of FOSS license, copy of purchase receipt, etc.)
	`website`: the links to the websites for the software (i.e., homepage, account login, support site, etc.)
	`repository`: the links where the source code for the software are hosted (e.g., GitHub)
%%
# Templater

### Date now

`tp.date.now(format: string = "YYYY-MM-DD", offset?: number⎮string, reference?: string, reference_format?: string)`

- Retrieves the date.

##### Examples
```
// Date now
<% tp.date.now() %>
// Date now with format
<% tp.date.now("Do MMMM YYYY") %>
// Last week
<% tp.date.now("YYYY-MM-DD", -7) %>
// Next week
<% tp.date.now("YYYY-MM-DD", 7) %>
// Last month
<% tp.date.now("YYYY-MM-DD", "P-1M") %>
// Next year
<% tp.date.now("YYYY-MM-DD", "P1Y") %>
// File's title date + 1 day (tomorrow)
<% tp.date.now("YYYY-MM-DD", 1, tp.file.title, "YYYY-MM-DD") %>
// File's title date - 1 day (yesterday)
<% tp.date.now("YYYY-MM-DD", -1, tp.file.title, "YYYY-MM-DD") %>
```

### Date tomorrow

`tp.date.tomorrow(format: string = "YYYY-MM-DD")`

- Retrieves tomorrow's date.

##### Examples
```
// Date tomorrow
<% tp.date.tomorrow() %>
// Date tomorrow with format
<% tp.date.tomorrow("Do MMMM YYYY") %>
```

### System prompt

`tp.system.prompt(prompt_text: string, default_value: string, throw_on_cancel: boolean = false, multiline: boolean = false)`

Spawns a prompt modal and returns the user's input

| Argument          | Description                                                                                      |
| ----------------- | ------------------------------------------------------------------------------------------------ |
| `prompt_text`     | Text placed above the input field                                                                |
| `default_value`   | A default value for the input field                                                              |
| `throw_on_cancel` | If set to `true`, throws an error if the prompt is canceled, instead of returning a `null` value |
| `multiline`       | If set to `true`, the input field will be a multiline text area                                  |

##### Examples
```
// Prompt
<% await tp.system.prompt("Please enter a value") %>
// Prompt with default value
<% await tp.system.prompt("What is your mood today?", "happy") %>
// Multiline prompt
<% await tp.system.prompt("What is your mood today?", null, false, true) %>
// Reuse output from prompt
<%*
let value = await tp.system.prompt("Please enter a value");
%>
# <% value %>
selected value: <% value %>
```

### System suggester

`tp.system.suggester(text_items: string[] ⎮ ((item: T) => string), items: T[], throw_on_cancel: boolean = false, placeholder: string = "", limit?: number = undefined)`

Spawns a suggester prompt and returns the user's chosen item

| Argument          | Description                                                                                                                                                                   |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `text_items`      | Array of strings representing the text that will be displayed for each item in the suggester prompt. This can also be a function that maps an item to its text representation |
| `items`           | Array containing the values of each item in the correct order                                                                                                                 |
| `throw_on_cancel` | Throws an error if the prompt is canceled, instead of returning a `null` value                                                                                                |
| `placeholder`     | Placeholder string of the prompt                                                                                                                                              |
| `limit`           | Limit the number of items rendered at once (useful to improve performance when displaying large lists)                                                                        |

##### Examples
```
// Suggester
<% await tp.system.suggester(["Happy", "Sad", "Confused"], ["Happy", "Sad", "Confused"]) %>
// Suggester with mapping function (same as above example)
<% await tp.system.suggester((item) => item, ["Happy", "Sad", "Confused"]) %>
// Suggester for files
[[<% (await tp.system.suggester((item) => item.basename, tp.app.vault.getMarkdownFiles())).basename %>]]
// Suggester for tags
<% await tp.system.suggester(item => item, Object.keys(tp.app.metadataCache.getTags()).map(x => x.replace("#", ""))) %>
// Reuse value from suggester
<%*
let selectedValue = await tp.system.suggester(["Happy", "Sad", "Confused"], ["Happy", "Sad", "Confused"]);
%>
# <% selectedValue %>
selected value: <% selectedValue %>
```

## 📝 Notes
