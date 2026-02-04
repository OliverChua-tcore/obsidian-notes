---
type: person
template-version: 1
<%*

// Template for keeping track of people

// Use variables to prevent this template from showing up in backlinks and tag searches
const navigateUp   = "people-main|People";
const defaultValue = "undefined";

let title = await tp.system.prompt("Title of file", tp.file.name);
-%>
title: "<% title %>"
created: <% tp.file.creation_date() %>
aliases:
  - "<% title %>"
  - "<% title %>"
  - "<% title %>"
tags:
  - people
navigate-up:
  - "[[<% navigateUp %>]]"
person-name: <% title %>
person-prefix:
  - "[[<% defaultValue %>]]"
person-first:
person-middle:
person-last: "[[<% defaultValue %>]]"
person-suffix:
  - "[[<% defaultValue %>]]"
person-address:
  - "[[<% defaultValue %>]]"
person-address-mailing:
  - "[[<% defaultValue %>]]"
person-title:
  - "[[<% defaultValue %>]]"
person-company:
  - "[[<% defaultValue %>]]"
birth-date:
start-date:
edit-status: new                              # in-progress / complete
---
%%
	`navigate-up`: the parents (whether biological or not) of the person
	`person-name`: the full name of the person
	`person-prefix`: any prefixes or honorifics you use to call the person
	`person-first`: the given name of the person
	`person-middle`: the middle name or names of the person
	`person-last`: the surname of the person
	`person-suffix`: any suffixes the person has been given or earned (e.g., Jr., IV, PhD, RN, OBE)
	`person-address`: any addresses tied to the person
	`person-address-mailing`: any mailing address tied to the person
	`person-title`: any professional titles held by the person
	`person-company`: any companies which the person is connected to
	`birth-date`: the date the person was born
	`start-date`: the date you met the person
%%
# <% title %>

> [!missing]- 📧 Email addresses
> - Email:: `<% defaultValue %>`

> [!missing]- ☎️ Phone numbers
> - Phone:: `<% defaultValue %>`

> [!info] 👨‍👩‍👧‍👦 Family
> - Mother:: `<% defaultValue %>`
> - Father:: `<% defaultValue %>`
> - Siblings:: `<% defaultValue %>`
> - Significant other:: `<% defaultValue %>`
> - Children:: `<% defaultValue %>`

<% await tp.file.include("[[notes-snippet]]") %>
