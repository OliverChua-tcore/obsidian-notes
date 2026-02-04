---
type: place
template-version: 3
<%*
// Use variables to prevent this template from showing up in backlinks and tag searches
const navigateUp   = "things/places/places-main|Places";
const defaultValue = "undefined";

let title = await tp.system.prompt("Full name of place", tp.file.name);
-%>
title: "<% title %>"
created: <% tp.file.creation_date() %>
aliases:
  - "<% title %>"
tags:
  - places
navigate-up:
  - "[[<% defaultValue %>]]"
place-name: "<% title %>"
place-community: "[[<% defaultValue %>]]"
place-address:
place-city: "[[<% defaultValue %>]]"
place-state: "[[<% defaultValue %>]]"
place-zip-code:
place-zip-four:
country: "[[<% defaultValue %>]]"
what3words:
start-date:
end-date:
edit-status: new    # new | in-progress | complete
---
<%*

// Template for keeping track of places

-%>
%%
	`place-name`: the name of the place
	`place-community`: the name of the community, if the place is in a large city with distinct neighborhoods
	`place-address`: the street address of the place
	`place-city`: the city of the place
	`place-state`: the state or province (if not in the United States) of the place
	`place-zip-code`: the five-digit American ZIP code or postal code (if not in the United States) of the place
	`place-zip-four`: the nine-digit American ZIP+4 code of the place
	`country`: the country of the place
	`start-date`: the date of your first visit
	`end-date`: the date of your last visit **if the place no longer exists**
%%
# <% title %>

> [!missing]- 📧 Email addresses
> - Email:: `<% defaultValue %>`

> [!missing]- ☎️ Phone numbers
> - Phone:: `<% defaultValue %>`

> [!info] 🏬 Address
> - Community: `= this.place-community`
> - Address: `= this.place-address`
> - City: `= this.place-city`
> - State: `= this.place-state`
> - ZIP code: `= this.place-zip-code`
> - ZIP+4: `= this.place-zip-four`

> [!quote]- Copy address elements
> `= this.place-address`
> `= upper(this.place-address)`
> `= this.place-zip-code`
> `= this.place-zip-four`

<% await tp.file.include("[[notes-snippet]]") %>
