---
type: email-message
template-version: 1
<%*

// Template for keeping track of email messages received or sent

// Use variables to prevent this template from showing up in backlinks and tag searches
const navigateUp   = "ideas/communication/email-main|Email messages";
const defaultValue = "undefined";

let title = await tp.system.prompt("Title of file", tp.file.name);
-%>
title: "<% title %>"
created: <% tp.file.creation_date() %>
aliases:
  - "<% title %>"
tags:
  - communication/email
navigate-up:
  - "[[<% navigateUp %>]]"
email-date: <% tp.date.now("YYYY-MM-DD") %>
email-contacts:
  - "[[<% defaultValue %>]]"
edit-status: new                              # new | in-progress | complete
---
%%
	`email-date`: the date the email was sent or received
	`email-contacts`: the list of people sending or receiving the email, not including you
%%
# <% title %>

_{copy of email}_

> [!cite]- Draft
> _{store your draft here, if applicable, and you want to preserve it}_

<% await tp.file.include("[[notes-snippet]]") %>
