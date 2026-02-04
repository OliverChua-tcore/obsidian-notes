---
type: software
template-version: 1
title: Excel formulas
aliases:
  - Excel formulas
created: 2022-12-16 07:22
tags:
  - software/microsoft
navigate-up:
  - "[[microsoft|Microsoft]]"
software-name: Excel formulas
software-author:
  - "[[microsoft|Microsoft]]"
software-license:
website:
repository:
---
%%
	`software-name`: the name of the software or service
	`software-author`: the creators of the software (i.e., publisher, individual contributors, etc.)
	`software-license`: the links to the software licenses (i.e., text of FOSS license, copy of purchase receipt, etc.)
	`website`: the links to the websites for the software (i.e., homepage, account login, support site, etc.)
	`repository`: the links where the source code for the software are hosted (e.g., GitHub)
%%
# Excel formulas

### Convert `MM-DD-YYYY` text into `YYYY-MM-DD`
```excel-formula
MID(A1,7,4) & "-" & MID(A1,1,2) & "-" & MID(A1,4,2)
```

Assuming:
- `A1` contains text like `01-13-2025` (MM-DD-YYYY)
- `MID(A1,7,4)` → `2025` (year)
- `MID(A1,1,2)` → `01` (month)
- `MID(A1,4,2)` → `13` (day)

If Excel already recognizes the cell as a true date value (not just text), the cleaner approach is:
```excel-formula
TEXT(A1,"yyyy-mm-dd")
```

## 📝 Notes
