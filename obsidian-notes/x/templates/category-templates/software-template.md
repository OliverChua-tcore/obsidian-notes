---
template-version: 1
<%*

// Template to keep track of software (including SaaS websites)

// Use variables to prevent this template from showing up in backlinks and tag searches
const navigateUp = "software|Software";
const defaultValue = "undefined";
let title = await tp.system.prompt("Title of file", tp.file.name);
-%>
title: "<% title %>"
aliases:
  - "<% title %>"
created: <% tp.file.creation_date() %>
tags:
  - software
navigate-up:
  - "[[<% navigateUp %>]]"
software-name: "<% title %>"
software-author:
  - "[[<% defaultValue %>]]"
software-license:
  - "[[<% defaultValue %>]]"
website:
  - "[[<% defaultValue %>]]"
repository:
  - "[[<% defaultValue %>]]"
---
%%
	`software-name`: the name of the software or service
	`software-author`: the creators of the software (i.e., publisher, individual contributors, etc.)
	`software-license`: the links to the software licenses (i.e., text of FOSS license, copy of purchase receipt, etc.)
	`website`: the links to the websites for the software (i.e., homepage, account login, support site, etc.)
	`repository`: the links where the source code for the software are hosted (e.g., GitHub)
%%
# <% title %>

<% await tp.file.include("[[notes-snippet]]") %>
