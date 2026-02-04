---
title: Markdown cheat sheet
aliases:
  - Markdown
  - Markdown cheat sheet
created: 2025-12-03 16:06
tags:
  - software/obsidian
navigate-up:
  - "[[software-main|Software]]"
  - "[[obsidian|Obsidian]]"
source: https://www.markdownguide.org/cheat-sheet
---
# Markdown cheat sheet

## Basic syntax
These are the elements outlined in John Gruber’s original design document. All Markdown applications support these elements. [More info](https://www.markdownguide.org/basic-syntax)

### Heading
```md
# H1 heading
## H2 heading
### H3 heading
#### H4 heading
##### H5 heading
###### H6 heading
```

### Bold
**bold text**
```markdown
**bold text**
```

### Italic
_italicized text_
```markdown
_italicized text_
```

### Blockquote
> blockquote
```markdown
> blockquote
```

### Ordered list
1. First item
2. Second item
3. Third item
```markdown
1. First item
2. Second item
3. Third item
```

### Unordered list
- First item
- Second item
- Third item
```markdown
- First item
- Second item
- Third item
```

### Code
`code`
```markdown
`code`
```

### Horizontal rule
---
```markdown
---
```

### Link
[Markdown Guide](https://www.markdownguide.org)
```markdown
[Markdown Guide](https://www.markdownguide.org)
```

### Image
![alt text|100x121](https://www.markdownguide.org/assets/images/tux.png)
```markdown
![alt text|100x121](https://www.markdownguide.org/assets/images/tux.png)
```
> Alt text and image size are optional

## Extended syntax
These elements extend the basic syntax by adding additional features. Not all Markdown applications support these elements. [More info](https://www.markdownguide.org/extended-syntax)
> [!note]
> These have been modified to align with [[obsidian|Obsidian]]'s version of Markdown.

### Table

| Default   | Left      |  Center   |     Right |
| --------- |:--------- |:---------:| ---------:|
| Default   | Left      |  Center   |     Right |
| alignment | alignment | alignment | alignment |

To add a table, use three or more hyphens (`---`) to create each column’s header, and use pipes (`|`) to separate each column. For compatibility, you should also add a pipe on either end of the row.
```md
| Default   | Left      |  Center   |     Right |
| --------- |:--------- |:---------:| ---------:|
| Default   | Left      |  Center   |     Right |
| alignment | alignment | alignment | alignment |
```
> [!attention] You can display a pipe (`|`) character in a table by using its HTML character code (`&#124;`)

### Fenced code block
```markdown
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```
````markdown
```
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```
````

#### Syntax highlighting
```json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```
````markdown
```json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```
````
> [!tip] See [[prism-languages|Prism]] for supported languages

### Footnote
Here's a simple footnote,[^1] and here's a longer one.[^bignote]

[^1]: This is the first footnote.
[^bignote]: Here's one with multiple paragraphs and code.
	Indent paragraphs to include them in the footnote.
	`{ my code }`
	Add as many paragraphs as you like.

```markdown
Here's a simple footnote,[^1] and here's a longer one.[^bignote]

[^1]: This is the first footnote.
[^bignote]: Here's one with multiple paragraphs and code.
    Indent paragraphs to include them in the footnote.
    `{ my code }`
    Add as many paragraphs as you like.
```

### Strikethrough
~~The world is flat.~~
```markdown
~~The world is flat.~~
```

### Task list
- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media
```markdown
- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media
```

### Highlight
I need to highlight these ==very important words==.
```markdown
I need to highlight these ==very important words==.
```

### Subscript
H<sub>2</sub>O
```markdown
H<sub>2</sub>O
```

### Superscript
X<sup>2</sup>
```markdown
X<sup>2</sup>
```
