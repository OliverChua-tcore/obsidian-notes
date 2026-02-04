<%*

// Template for adding default properties to an existing note

// Use variables to prevent this template from showing up in backlinks and tag searches
const navigateUp   = "main|🔝";
const defaultValue = "undefined";

let title = await tp.system.prompt("Title of file", tp.file.name);
-%>
type: 
template-version: 
title: "<% title %>"
created: <% tp.file.creation_date() %>
aliases:
  - "<% title %>"
tags:
  - <% tp.file.folder() %>
navigate-up:
  - "[[<% navigateUp %>]]"
  - "[[<% defaultValue %>]]"
edit-status: new
description: 
