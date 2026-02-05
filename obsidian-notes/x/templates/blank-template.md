---
type: note
template-version: 1
<%*
// Use variables to prevent this template from showing up in backlinks and tag searches
const navigateUp   = "main|🔝";
const defaultValue = "undefined";

let title = await tp.system.prompt("Title of file", tp.file.name);
-%>
title: "<% title %>"
created: <% tp.file.creation_date() %>
aliases:
  - "<% title %>"
tags:
  - <% tp.file.folder() %>
navigate-up:
  - "[[<% navigateUp %>]]"
  - "[[<% defaultValue %>]]"
edit-status: new                              # new | in-progress | complete
description: 
---
<%*

// Default template for new notes

-%>
# <% title %>

<% await tp.file.include("[[notes-snippet]]") %>
