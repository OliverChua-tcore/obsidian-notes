<%*

// Snippet for adding an out-of-office reason to a daily note

// Use variables to prevent this template from showing up in backlinks and tag searches
const note = "out-of-office|OOO";
const tag  = "#out-of-office";
-%>
> `Holiday` {name-of-holiday}
> OOO Reason:: [[<% note %>]] due to {name-of-holiday} holiday <% tag %>/✨

> `PTO`
> OOO Reason:: [[<% note %>]] due to {reason} <% tag %>/🏖️

> `Sick day`
> OOO Reason:: [[<% note %>]] due to {reason} <% tag %>/🤒

> `Bereavement`
> OOO Reason:: [[<% note %>]] due to {reason} <% tag %>/🕯️
