---
type: inventory
template-version: 2
<%*

// Template for keeping track of physical items

// Use variables to prevent this template from showing up in backlinks and tag searches
const navigateUp   = "inventory|Inventory";
const defaultValue = "undefined";

let title = await tp.system.prompt("Title of file", tp.file.name);
-%>
title: "<% title %>"
aliases:
  - "<% title %>"
created: <% tp.file.creation_date() %>
tags:
  - inventory
navigate-up:
  - "[[<% navigateUp %>]]"
item-name:
item-manufacturer: "[[<% defaultValue %>]]"
item-model:
  - <% defaultValue %>
item-serial:
  - <% defaultValue %>
item-location: "[[<% defaultValue %>]]"
start-date:
end-date:
edit-status: new                              # in-progress / complete
---
%%
	`item-name`: the full name to uniquely identify the item
	`item-manufacturer`: the manufacturer of the item
	`item-model`: the model number of the item
	`item-serial`: the serial number of the item
	`item-location`: the "permanent" or usual location of the item
	`start-date`: the date you acquired the item (bought, leased, etc.)
	`end-date`: the date you no longer had the item (sold, donated, trashed, etc.)
%%
# <% title %>
`= this.item-name`

_{embed main photo here}_

> [!info]- Owner's manual
> _{embed owner's manual here}_

> [!info]- Actual photos
> _{embed photos here}_

> [!info]- Marketing photos
> _{embed photos here}_

> [!info]- Specs & details
> _{add specs & details here}_

<% await tp.file.include("[[notes-snippet]]") %>
