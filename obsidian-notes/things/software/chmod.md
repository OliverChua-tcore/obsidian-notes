---
title: chmod cheat sheet
aliases:
  - chmod
  - chmod cheat sheet
tags:
  - software/linux
  - software/security
---
# chmod cheat sheet
[[Linux|Linux]]

## `drwxrwxrwx`

|     |           |
| --- | --------- |
| d   | Directory |
| r   | Read      |
| w   | Write     |
| x   | Execute   |

|     |     |     |
| --- | --- | --- |
| 7   | rwx | 111 |
| 6   | rw- | 110 |
| 5   | r-x | 101 |
| 4   | r-- | 100 |
| 3   | -wx | 011 |
| 2   | -w- | 010 |
| 1   | --x | 001 |
| 0   | --- | 000 | 

### Example: `chmod 777`

| Directory | Owner | Group | Others |
| --------- | ----- | ----- | ------ |
| -         | rwx   | rwx   | rwx    | 
| d         | rwx   | rwx   | rwx    | 

> [!info]- Source image
> ![[chmod.png|400]]
