---
template-version: 1
title: Templater
aliases:
  - Templater
  - Templater for Obsidian
created: 2026-01-08 16:41
tags:
  - software/obsidian
navigate-up:
  - "[[software|Software]]"
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
---
%%
	`software-name`: the name of the software or service
	`software-author`: the creators of the software (i.e., publisher, individual contributors, etc.)
	`software-license`: the links to the software licenses (i.e., text of FOSS license, copy of purchase receipt, etc.)
	`website`: the links to the websites for the software (i.e., homepage, account login, support site, etc.)
	`repository`: the links where the source code for the software are hosted (e.g., GitHub)
%%
# Templater

## Date now

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

## Date tomorrow

`tp.date.tomorrow(format: string = "YYYY-MM-DD")`

- Retrieves tomorrow's date.

##### Examples
```
// Date tomorrow
<% tp.date.tomorrow() %>
// Date tomorrow with format
<% tp.date.tomorrow("Do MMMM YYYY") %>
```

## System prompt

`tp.system.prompt(prompt_text?: string, default_value?: string, throw_on_cancel: boolean = false, multiline?: boolean = false)`

- Spawns a prompt modal and returns the user's input

| Argument          | Description                                                                                      |
| ----------------- | ------------------------------------------------------------------------------------------------ |
| `prompt_text`     | Text placed above the input field                                                                |
| `default_value`   | A default value for the input field                                                              |
| `throw_on_cancel` | If set to `true`, throws an error if the prompt is canceled, instead of returning a `null` value |
| `multiline`       | If set to `true`, the input field will be a multiline text area                                  |
