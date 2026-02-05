---
type: weekly-note
template-version: 0
<%*
// Use variables to prevent this template from showing up in backlinks and tag searches
-%>
title:
created: <% tp.file.creation_date() %>
aliases:
tags:
  - review/weekly
navigate-up:
description: Weekly note
---
<%*

// Template for weekly notes (filename: "YYYY-[W]WW", e.g., "2026-W01")

-%>

<% await tp.file.include("[[notes-snippet]]") %>
