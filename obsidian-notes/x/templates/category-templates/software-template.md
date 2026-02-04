---
type: software
template-version: 1
<%*
// Use variables to prevent this template from showing up in backlinks and tag searches
const navigateUp   = "software-main|Software";
const defaultValue = "undefined";

let title = await tp.system.prompt("Name of software or service", tp.file.name);
-%>
title: "<% title %>"
created: <% tp.file.creation_date() %>
aliases:
  - "<% title %>"
tags:
  - software
navigate-up:
  - "[[<% navigateUp %>]]"
software-name: "<% title %>"    # the name of the software or service
software-author:                # the creators of the software (i.e., publisher, individual contributors, etc.)
  - "[[<% defaultValue %>]]"
software-license:               # the links to the software licenses (i.e., text of FOSS license, copy of purchase receipt, etc.)
  - "[[<% defaultValue %>]]"
website:                        # the links to the websites for the software (i.e., homepage, account login, support site, etc.)
  - "[[<% defaultValue %>]]"
repository:                     # the links where the source code for the software are hosted (e.g., GitHub)
  - "[[<% defaultValue %>]]"
edit-status: new                # new | in-progress | complete
---
<%*

// Template for keeping track of software (including SaaS websites)

-%>
# <% title %>

<% await tp.file.include("[[notes-snippet]]") %>
