---
type: quarterly-note
template-version: 2
<%*

// Template for quarterly notes (filename: "YYYY-[Quarter]-Q", e.g., "2026-Quarter-1")

// Use variables to prevent this template from showing up in backlinks and tag searches
const navigateUpPath = "calendar/5-yearly-notes";

// Parse from filename "YYYY-[Quarter]-Q"
const fileDate = moment(tp.file.title, 'YYYY-[Quarter]-Q');
const year     = fileDate.format("YYYY");
const quarter  = fileDate.format("Q");

// title
const quarterTitle = `Quarter ${quarter}, ${year}`;

// navigate-up
const yearFileName = `${year}-Year`;
const yearTitle    = `${year}`;
const navigateUp    = `${navigateUpPath}/${yearFileName}|${yearTitle}`;
-%>
title: "<% quarterTitle %>"
aliases:
  - "<% quarterTitle %>"
created: <% tp.file.creation_date() %>
tags:
  - review/quarterly
navigate-up:
  - "[[<% navigateUp %>]]"
---
# <% quarterTitle %> review
```dataviewjs
const now = new Date();
const currentYear = now.getFullYear();
const currentMonth = now.getMonth() + 1
const currentQuarter = Math.ceil(currentMonth / 3);
const currFileYear = <% year %>;
const currFileQuarter = <% quarter %>;

// Calculate how many quarters ago a given year and quarter was from today
const quarterDiff = (currFileYear - currentYear) * 4 + (currFileQuarter - currentQuarter);
let quarterDiffText = '';

// Quarter difference label
if (quarterDiff == 0) {
    quarterDiffText = '**This quarter**';
} else if (quarterDiff < -1) {
    quarterDiffText = (quarterDiff * -1) + ' quarters ago';
} else if (quarterDiff == -1) {
    quarterDiffText = 'Last quarter';
} else if (quarterDiff == 1) {
    quarterDiffText = '_Next quarter_';
} else {
    quarterDiffText = quarterDiff + ' quarters _from now_';
}

dv.paragraph(quarterDiffText);

<%*
// Display navigation links for quarterly notes based on filenames containing quarters (e.g., "2023-Quarter-1")
// Example output: [[2022-Quarter-4]] ← 2023-Quarter-1 → [[2023-Quarter-2]]
-%>
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

const none = '(none)';
const prevText = prevFile ? '[[' + prevFile[0] + ']]' : none;
const currText = currFile[0];
const nextText = nextFile ? '[[' + nextFile[0] + ']]' : none;

dv.paragraph(prevText + ' ← ' + currText + ' → ' + nextText);
```
