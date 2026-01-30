---
type: daily-note
template-version: 4
<%*

// Template for daily notes (filename: "YYYY-MM-DD-dddd", e.g., "2026-01-01-Thursday")

// Use variables to prevent this template from showing up in backlinks and tag searches
const navigateUpPath = "calendar/3-monthly-notes";
const taskTag        = "#task";
const recurringTag   = "#task #recurring";

// Parse from filename "YYYY-MM-DD"
const fileDate  = moment(tp.file.title, 'YYYY-MM-DD');
const year      = fileDate.format("YYYY");
const monthMM   = fileDate.format("MM");                  // e.g., 01
const monthMMMM = fileDate.format("MMMM");                // e.g., January
const monthNum  = Number(monthMM);                        // e.g., 1

// title
const shortDate = fileDate.format("YYYY-MM-DD");
const longDate  = fileDate.format("dddd, MMMM D, YYYY");

// navigate-up
const monthFileName = `${year}-${monthMM}-${monthMMMM}`;
const monthTitle    = `${monthMMMM} ${year}`;
const navigateUp    = `${navigateUpPath}/${year}/${monthFileName}|${monthTitle}`;
-%>
title: "<% shortDate %> | <% longDate %>"
aliases:
  - "<% shortDate %>"
  - "<% longDate %>"
created: <% tp.file.creation_date() %>
tags:
  - daily-notes/<% fileDate.format("YYYY/MM") %>
navigate-up:
  - "[[<% navigateUp %>]]"
short-date: "<% shortDate %>"
---
# <% longDate %>
<% await tp.file.include("[[date-when-snippet]]") %>
<%*
// Display links to the previous and next daily notes in the same folder as the current note
// Example output: [[2023-06-10]] ← (2023-06-11) → [[2023-06-12]]
-%>
```dataviewjs
const currFileDate = dv.current().file.day.toISODate();

// Get all daily notes in the current folder
const allFiles = dv.pages('"' + dv.current().file.folder + '"')
	.where(p => p.file.day)
	.map(p => [p.file.name, p.file.day.toISODate()]) // [filename, ISO date string]
	.sort(p => p[1]);

let prevFile = undefined;
const currFile = allFiles.find(p => p[1] == currFileDate);
const nextFile = allFiles.find(p => p[1] > currFileDate);

allFiles.forEach(function (p, i) {
	if (p[1] < currFileDate) {
		prevFile = p;
	}
});

const nav = [];
const none = '(none)';

nav.push(prevFile ? '[[' + prevFile[0] + ']]' : none);
nav.push(currFile[0]);
nav.push(nextFile ? '[[' + nextFile[0] + ']]' : none);

dv.paragraph(nav[0] + ' ← ' + nav[1] + ' → ' + nav[2]);
```

## 📜 Notes created or modified today
> [!cite]- 🆕 Notes created today
> ![[notes-created.base]]

> [!cite]- ✏️ Notes last touched today
> ![[notes-modified.base]]

## 🤝 Today's meetings
</br>

## 💰 Today's financial transactions
![[finance-trxns.base#Today's transactions]]

## 📅 Daily questions
##### 🕙 Last night, I...
- 

##### 🤩 One thing I'm excited about right now is...
- 

##### 🥇 One thing I plan to accomplish today is...
- 

##### 😭 One thing I'm struggling with today is...
- 

## 📋 Tasks created today
- [ ] <% recurringTag %> Triage notes in [[<% fileDate.format("YYYY-MM-DD-dddd") %>|<% shortDate %>]] daily note 🔽 ➕ <% shortDate %> 🛫 <% shortDate %> ⏳ <% shortDate %> 📅 <% shortDate %>

<% await tp.file.include("[[notes-snippet]]") %>
