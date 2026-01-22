---
template-version: 1
<%*

// Template for yearly notes

// Use variables to prevent this template from showing up in backlinks and tag searches
const navigateUp = "main|🔝";
const defaultValue = "undefined";

const fileDate = moment(tp.file.title,'YYYY-[Year]');
const year = fileDate.format("YYYY");
-%>
title: <% year %>
aliases:
  - "<% year %>"
created: <% tp.file.creation_date() %>
tags:
  - review/yearly
navigate-up:
  - "[[<% navigateUp %>]]"
---
# <% year %> yearly review
```dataviewjs
const now = new Date();
const currentYear = now.getFullYear();
const currFileYear = <% year %>;

// Calculate how many years ago a given year was from today
const yearsAgo = currentYear - currFileYear;
let yearsAgoText = '';

if (yearsAgo == 0) {
    yearsAgoText = 'This year';
} else if (yearsAgo == 1) {
    yearsAgoText = 'Last year';
} else {
    yearsAgoText = yearsAgo + ' years ago';
}

dv.paragraph(yearsAgoText);

<%*
// Display navigation links for yearly notes based on filenames containing years (e.g., "2023-Year")
// Example output: [[2022-Year]] ← 2023-Year → [[2024-Year]]
-%>
// Get all files in the current folder with a year in the filename
const allFiles = dv.pages('"' + dv.current().file.folder + '"')
    .where(p => p.file.name.match(/\d{4}/))
    .map(p => {
        const yearMatch = p.file.name.match(/\d{4}/); // Extract year from filename
        return [p.file.name, Number(yearMatch)]; // [filename, year]
    })
    .sort(p => p[1]);

let prevFile = undefined;
const currFile = allFiles.find(p => p[1] == currFileYear);
const nextFile = allFiles.find(p => p[1] > currFileYear);

allFiles.forEach(function (p, i) {
	if (p[1] < currFileYear) {
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
