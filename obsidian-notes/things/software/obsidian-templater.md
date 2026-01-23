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

### `tp.system.prompt(prompt_text: string, default_value: string, throw_on_cancel: boolean = false, multiline: boolean = false)`
Spawns a prompt modal and returns the user's input

| Argument          | Description                                                                                      |
| ----------------- | ------------------------------------------------------------------------------------------------ |
| `prompt_text`     | Text placed above the input field                                                                |
| `default_value`   | A default value for the input field                                                              |
| `throw_on_cancel` | If set to `true`, throws an error if the prompt is canceled, instead of returning a `null` value |
| `multiline`       | If set to `true`, the input field will be a multiline text area                                  |
