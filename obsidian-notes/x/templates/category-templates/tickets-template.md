---
type: ticket
template-version: 1
<%*

// Template for keeping track of tickets

// Use variables to prevent this template from showing up in backlinks and tag searches
const navigateUp     = "tickets-main|Tickets";
const defaultProject = "undefined";
const defaultValue   = "undefined";

const taskTag = "#task";

const today = tp.date.now("YYYY-MM-DD");

let project = await tp.system.prompt("Project", defaultProject);
let ticketNumber = await tp.system.prompt("Complete ticket number (e.g., YZ-12345)", tp.file.name);
let parentTicket = await tp.system.prompt("Complete ticket number of parent ticket (e.g., ABCD-1234)", defaultValue);
let ticketTitle  = await tp.system.prompt("Title of ticket", defaultValue);
-%>
title: <% ticketNumber %>
aliases:
  - <% ticketNumber %>
created: <% tp.file.creation_date() %>
tags:
  - projects/<% tp.file.folder() %>
  - tickets/active
navigate-up:
  - "[[<% navigateUp %>]]"
  - "[[<% parentTicket %>]]"
project: "[[<% project %>]]"
ticket-title: "<% ticketTitle %>"
ticket-parent: "[[<% parentTicket %>]]"
ticket-assigned:
  - "[[<% today %>]]"
ticket-status: new       # new | in-progress | deployed | reassigned | shelved | canceled | info-only
scope: private
---
# <% ticketNumber %>: <% ticketTitle %>

## 🧑‍💻 Dev notes
</br>

<% await tp.file.include("[[tasks-snippet]]") %>
- [ ] <% taskTag %> Start <% ticketNumber %> ➕ <% today %> 🛫 <% today %> ⏳ <% today %> 📅 <% today %>

## 📄 Description
_add description from Jira here_</br>

## 💬 Comments summary
_add comments summary from Jira here_</br>

## 📆 Assignment history
| Date | Assignee       |
| ---- | -------------- |
| N/A  | Ticket created |

## 🧑‍💻 Code changes
</br>

<% await tp.file.include("[[notes-snippet]]") %>
