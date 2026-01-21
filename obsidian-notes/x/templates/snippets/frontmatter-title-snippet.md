<%*

// Template for adding the `title` property to an existing note

let title = await tp.system.prompt("Title of file", tp.file.name);
-%>
title: "<% title %>"
