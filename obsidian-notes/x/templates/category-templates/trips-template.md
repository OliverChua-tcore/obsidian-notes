---
type: trip
template-version: 1
<%*

// Template for keeping track of trips

// Use variables to prevent this template from showing up in backlinks and tag searches
const navigateUp   = "ideas/travel/my-trips|Our trips";
const defaultValue = "undefined";

let title = await tp.system.prompt("Title of file", tp.file.name);
-%>
title: "<% title %>"
aliases:
  - "<% title %>"
created: <% tp.file.creation_date() %>
tags:
  - travel/trip
navigate-up:
  - "[[<% navigateUp %>]]"
travelers:
  - "[[<% defaultValue %>]]"
destinations:
  - "[[<% defaultValue %>]]"
start-date:
end-date:
edit-status: new                              # in-progress / complete
---
%%
	`travelers`: the people who went or are going on the trip
	`destinations`: the countries/states/cities the travelers visited or are visiting on the trip
	`start-date`: the date the travelers left or are leaving for the trip
	`end-date`: the date the travelers returned or are returning from the trip
%%
# <% title %>
