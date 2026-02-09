---
type: chat-message
template-version: 0
title: "<% tp.date.now("YYYY-MM-DD") %> chat: <% tp.file.title %>"
created: <% tp.file.creation_date() %>
aliases:
  - "<% tp.date.now("YYYY-MM-DD") %> chat: <% tp.file.title %>"
tags:
  - communication/chat
navigate-up:
  - "[[undefined]]"
comm-date: <% tp.date.now("YYYY-MM-DD") %>
comm-contacts: []
edit-status: new                              # new | in-progress | complete
scope: private
---
# <% tp.date.now("YYYY-MM-DD") %> chat: <% tp.file.title %>

_chat text_

<% await tp.file.include("[[notes-snippet]]") %>
