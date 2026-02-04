---
type: home
template-version: 2
<%*
// Use variables to prevent this template from showing up in backlinks and tag searches
const navigateUp   = "my-homes|My homes & addresses";
const defaultValue = "undefined";

let title = await tp.system.prompt("Nickname of home", tp.file.name);
-%>
title: "<% title %>"
created: <% tp.file.creation_date() %>
aliases:
  - "<% title %>"
tags:
  - places/my-homes
navigate-up:
  - "[[<% navigateUp %>]]"
short-code:
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

// Template for keeping track of where you've lived

-%>
%%
	`short-code`: an abbreviation you use to identify the home
	`place-name`: your nickname for the home
	`place-community`: the name of the community, if the home is in a large city with distinct neighborhoods
	`place-address`: the street address of the home
	`place-city`: the city of the home
	`place-state`: the state or province (if not in the United States) of the home
	`place-zip-code`: the five-digit American ZIP code or postal code (if not in the United States) of the home
	`place-zip-four`: the nine-digit American ZIP+4 code of the home
	`country`: the country of the home
	`start-date`: the date you acquired or moved into the home
	`end-date`: the date you sold or moved out of the home
%%
# <% title %>
Length of ownership or stewardship:: `= choice(!this.end-date, date(today) - this.start-date, this.end-date - this.start-date)`

> [!info] 🏡 Address
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

---
## 📋 Tasks

---
## 📝 Notes
