---
type: trip
template-version: 1
<%*
// Use variables to prevent this template from showing up in backlinks and tag searches
const navigateUp   = "ideas/travel/my-trips|Our trips";
const defaultValue = "undefined";

let title = await tp.system.prompt("Title of trip", tp.file.name);
-%>
title: "<% title %>"
created: <% tp.file.creation_date() %>
aliases:
  - "<% title %>"
tags:
  - travel/trip
navigate-up:
  - "[[<% navigateUp %>]]"
travelers:                     # the people who went or are going on the trip
  - "[[<% defaultValue %>]]"
destinations:                  # the countries/states/cities the travelers visited or are visiting on the trip
  - "[[<% defaultValue %>]]"
start-date:                    # the date the travelers left or are leaving for the trip
end-date:                      # the date the travelers returned or are returning from the trip
edit-status: new               # new | in-progress | complete
---
<%*

// Template for keeping track of trips

-%>
# <% title %>
