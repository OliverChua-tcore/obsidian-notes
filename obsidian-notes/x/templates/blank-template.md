---
template-version: 1
<%*

// My default template for new notes

// Use variables to prevent this template from showing up in backlinks and tag searches
const navigateUp = "main|🔝";
const defaultValue = "undefined";
let title = await tp.system.prompt("Title of file", tp.file.name);
-%>
title: "<% title %>"
aliases:
  - "<% title %>"
created: <% tp.file.creation_date() %>
tags:
  - <% tp.file.folder() %>
navigate-up:
  - "[[<% navigateUp %>]]"
  - "[[<% defaultValue %>]]"
---
# <% title %>
