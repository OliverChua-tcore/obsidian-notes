---
template-version: 1
<%*

// Template for quarterly notes

// Use variables to prevent this template from showing up in backlinks and tag searches
const navigateUp = "-Year";
const defaultValue = "undefined";

const fileDate = moment(tp.file.title,'YYYY-[Quarter]-Q');
const year = fileDate.format("YYYY");
const quarter = fileDate.format("Q");
const quarterName = fileDate.format("[Quarter ]Q[, ]YYYY");
-%>
title: "<% quarterName %>"
aliases:
  - "<% quarterName %>"
created: <% tp.file.creation_date() %>
tags:
  - review/quarterly
navigate-up:
  - "[[<% year %><% navigateUp %>]]"
---
# <% quarterName %> review
```dataviewjs
const now = new Date();
const currentYear = now.getFullYear();
const currentMonth = now.getMonth() + 1
const currentQuarter = Math.ceil(currentMonth / 3);
const currFileYear = <% year %>;
const currFileQuarter = <% quarter %>;

// Calculate how many quarters ago a given year and quarter was from today
const quartersAgo = (currentYear - currFileYear) * 4 + (currentQuarter - currFileQuarter);
let quartersAgoText = '';

if (quartersAgo == 0) {
    quartersAgoText = 'This quarter';
} else if (quartersAgo == 1) {
    quartersAgoText = 'Last quarter';
} else {
    quartersAgoText = quartersAgo + ' quarters ago';
}

dv.paragraph(quartersAgoText);
```
<%*
// Display navigation links for quarterly notes based on filenames containing quarters (e.g., "2023-Quarter-1")
// Example output: [[2022-Quarter-4]] ← 2023-Quarter-1 → [[2023-Quarter-2]]
-%>
```dataviewjs
// Get all files in the current folder with a quarter in the filename
const allFiles = dv.pages('"' + dv.current().file.folder + '"')
    .where(p => p.file.name.match(/\d{4}-Quarter-[1-4]/))
    .map(p => {
        const quarterMatch = p.file.name.match(/(\d{4})-Quarter-([1-4])/); // Extract year and quarter from filename
        return [p.file.name, Number(quarterMatch[1]), Number(quarterMatch[2])]; // [filename, year, quarter]
    })
    .sort(p => p[0]);

let prevFile = undefined;
const currFile = allFiles.find(p => p[1] == currFileYear && p[2] == currFileQuarter);
const nextFile = allFiles.find(p => p[0] > currFile[0]);

allFiles.forEach(function (p, i) {
	if (p[0] < currFile[0]) {
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
