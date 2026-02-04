---
type: monthly-note
template-version: 1
<%*

// Template for monthly notes (filename: "YYYY-MM-MMMM", e.g., "2026-01-January")

// Use variables to prevent this template from showing up in backlinks and tag searches
const navigateUpPath = "calendar/4-quarterly-notes";

// Parse from filename "YYYY-MM-MMMM"
const fileDate  = moment(tp.file.title, 'YYYY-MM-MMMM');
const year      = fileDate.format("YYYY");
const monthMM   = fileDate.format("MM");                  // e.g., 01
const monthMMMM = fileDate.format("MMMM");                // e.g., January
const monthNum  = Number(monthMM);                        // e.g., 1

// title
const monthTitle = `${monthMMMM} ${year}`;

// navigate-up
const quarter         = Math.ceil(monthNum / 3);        // Compute the quarter for the month
const quarterFileName = `${year}-Quarter-${quarter}`;
const quarterTitle    = `Quarter ${quarter}, ${year}`;
const navigateUp    = `${navigateUpPath}/${quarterFileName}|${quarterTitle}`;
-%>
title: "<% monthTitle %>"
aliases:
  - "<% monthTitle %>"
created: <% tp.file.creation_date() %>
tags:
  - review/monthly
navigate-up:
  - "[[<% navigateUp %>]]"
---
# <% monthTitle %> review
```dataviewjs
// Current filename expected: "YYYY-MM-MMMM" (e.g., "2026-01-January")
const currFileName = dv.current().file.name;
const nameMatch = currFileName.match(/^(\d{4})-(\d{2})-[A-Za-z]+$/);

let currFileYear = null;
let currFileMonth = null;

currFileYear = Number(nameMatch[1]);
currFileMonth = Number(nameMatch[2]);

// Today
const now = new Date();
const currentYear = now.getFullYear();
const currentMonth = now.getMonth() + 1;

// Month difference label
const monthOffset = (currFileYear - currentYear) * 12 + (currFileMonth - currentMonth);
let monthDiffText = '';

if (monthOffset === 0) {
	monthDiffText = '**This month**';
} else if (monthOffset < -1) {
	monthDiffText = (monthOffset * -1) + ' months ago';
} else if (monthOffset === -1) {
	monthDiffText = 'Last month';
} else if (monthOffset === 1) {
	monthDiffText = '_Next month_';
} else {
	monthDiffText = monthOffset + ' months _from now_';
}

dv.paragraph(monthDiffText);

// Navigation for monthly notes, expecting filenames like "YYYY-MM-MMMM"
const allFiles = dv.pages('"' + dv.current().file.folder + '"')
	.where(p => p.file.name.match(/^\d{4}-(0[1-9]|1[0-2])-[A-Za-z]+$/))
	.map(p => {
		const m = p.file.name.match(/^(\d{4})-(\d{2})-[A-Za-z]+$/);
		return {
			name: p.file.name,
			y: Number(m[1]),
			m: Number(m[2]),
		};
	})
	.sort(p => p.name);

let prevFile = null;
let currFile = null;
let nextFile = null;

currFile = allFiles.find(p => p.y === currFileYear && p.m === currFileMonth);

if (currFile) {
	allFiles.forEach(p => {
		if (p.name < currFile.name) {
			prevFile = p;
		}
	});
	nextFile = allFiles.find(p => p.name > currFile.name);
}

const none = '(none)';
const prevText = prevFile ? '[[' + prevFile.name + ']]' : none;
const currText = currFile.name;
const nextText = nextFile ? '[[' + nextFile.name + ']]' : none;

dv.paragraph(prevText + ' ← ' + currText + ' → ' + nextText);
```

<% await tp.file.include("[[notes-snippet]]") %>
