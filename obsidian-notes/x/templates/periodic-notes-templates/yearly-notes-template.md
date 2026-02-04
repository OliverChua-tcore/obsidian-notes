---
type: yearly-note
template-version: 3
<%*

// Template for yearly notes (filename: "YYYY-[Year]", e.g. "2026-Year")

// Use variables to prevent this template from showing up in backlinks and tag searches
const navigateUp = "main|🔝";

// Parse from filename "YYYY-[Year]"
const fileDate = moment(tp.file.title, 'YYYY-[Year]');
const year     = fileDate.format("YYYY");

// title
const yearTitle = `Year ${year}`;
-%>
title: <% yearTitle %>
aliases:
  - "<% yearTitle %>"
created: <% tp.file.creation_date() %>
tags:
  - review/yearly
navigate-up:
  - "[[<% navigateUp %>]]"
---
# <% yearTitle %> review
```dataviewjs
const now = new Date();
const currentYear = now.getFullYear();
const currFileYear = <% year %>;

// Calculate how many years ago a given year was from today
const yearDiff = currFileYear - currentYear;
let yearDiffText = '';

if (yearDiff == 0) {
    yearDiffText = '**This year**';
} else if (yearDiff < -1) {
    yearDiffText = (yearDiff * -1) + ' years ago';
} else if (yearDiff == -1) {
    yearDiffText = 'Last year';
} else if (yearDiff == 1) {
    yearDiffText = '_Next year_';
} else {
    yearDiffText = yearDiff + ' years _from now_';
}

dv.paragraph(yearDiffText);

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

const none = '(none)';
const prevText = prevFile ? '[[' + prevFile[0] + ']]' : none;
const currText = currFile[0];
const nextText = nextFile ? '[[' + nextFile[0] + ']]' : none;

dv.paragraph(prevText + ' ← ' + currText + ' → ' + nextText);
```

<% await tp.file.include("[[notes-snippet]]") %>
