---
type: note
template-version: 1
title: Obsidian CSS selectors
aliases:
  - Obsidian CSS selectors
created: 2026-02-02 01:02
tags:
  - software/obsidian
navigate-up:
  - "[[obsidian|Obsidian]]"
edit-status: in-progress
---
###### [[obsidian|Obsidian]]
# Obsidian CSS selectors

Obsidian uses CSS classes from [[CodeMirror]] (`.cm-`), its workspace layout, and [[markdown|Markdown]] rendering. Use [[DevTools]] `Ctrl + Shift + I` to inspect elements.

## Workspace structure

| Selector                           | Targets                                                   |
| ---------------------------------- | --------------------------------------------------------- |
| `.workspace`                       | Entire app container (everything inside ribbons/sidebars) |
| `.workspace-ribbon`                | Left + right ribbons (dock panels)                        |
| `.workspace-ribbon.mod-left`       | **Left ribbon** only                                      |
| `.workspace-ribbon.mod-right`      | **Right ribbon** only                                     |
| `.workspace-split.mod-root`        | Main note area (center)                                   |
| `.workspace-split.mod-left-split`  | **Left sidebar**                                          |
| `.workspace-split.mod-right-split` | **Right sidebar**                                         |

## Note views

| Selector                 | Targets                                            |
| ------------------------ | -------------------------------------------------- |
| `.markdown-preview-view` | **Reading View** (rendered Markdown)               |
| `.cm-content`            | **Editor content** (Live Preview + Source Mode)    |
| `.markdown-source-view`  | **Source Mode** editor container                   |
| `.markdown-reading-view` | **Reading View** container                         |
| `.cm-editor`             | Full **CodeMirror editor** (includes line numbers) |
| `.cm-line`               | Individual **editor lines**                        |

## File explorer & sidebar

| Selector              | Targets                           |
| --------------------- | --------------------------------- |
| `.nav-file-title`     | File names in **File Explorer**   |
| `.nav-folder-title`   | Folder names in **File Explorer** |
| `.tag-pane-tag-title` | **Tags pane** entries             |
| `.backlink-pane`      | **Backlinks pane** container      |
| `.outline-pane`       | **Outline pane** container        |

## UI elements

| Selector          | Targets                          |
| ----------------- | -------------------------------- |
| `.titlebar`       | **Title bar** (top of window)    |
| `.status-bar`     | **Status bar** (bottom)          |
| `.modal`          | Popups/modals                    |
| `.callout`        | **Callout blocks** (`> [!note]`) |
| `.HyperMD-header` | **Headings** in Live Preview     |
| `a.internal-link` | **Wiki-style links** `[[Note]]`  |
| `a.external-link` | External `http://` links         |

## States & interactions

| Selector         | Targets                       |
| ---------------- | ----------------------------- |
| `.is-active`     | Active tab/pane               |
| `.mod-selected`  | Selected item (files, tabs)   |
| `:hover`         | Hovered elements              |
| `.cm-fat-cursor` | **Block cursor** (if enabled) |

## Example usage

```css
/* Bigger headings in Reading View only */
.markdown-preview-view h1 {
  font-size: 2em;
}

/* Mono font for code blocks */
.cm-content pre,
.markdown-preview-view code {
  font-family: "JetBrains Mono", monospace;
}

/* Custom emoji, numbers stay normal */
.markdown-preview-view,
.cm-content {
  font-family: "JetBrains Mono", "Segoe UI", "Noto Color Emoji";
}
```

> [!tip] Pro tip
> Use `.markdown-preview-view` and `.cm-content` together for "everywhere in notes." Inspect with `Ctrl + Shift + C` to find exact classes for your theme/plugins.[^workflow]

[^workflow]: https://forum.obsidian.md/t/obsidian-css-inspector-workflow/58178

---

## 📝 Notes
