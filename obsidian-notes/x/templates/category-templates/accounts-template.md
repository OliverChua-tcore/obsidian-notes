---
type: account
template-version: 4
<%*
// Use variables to prevent this template from showing up in backlinks and tag searches
const navigateUp   = "chart-of-accounts|💰 Chart of accounts";
const defaultValue = "Unspecified";

let accountLabel  = await tp.system.prompt("Personal and unique label for account", defaultValue);
let accountType   = await tp.system.suggester((type) => type, ["Assets", "Liabilities", "Income", "Expenses", "Equity"]);
let accountGroup  = await tp.system.suggester((group) => group, ["Bank", "Cash", "Clothing", "Credit Card", "Food", "Health", "Housing", "Investments", "Lease", "Leisure", "Loan", "Misc", "Mortgage", "Other", "Receivable", "Salary", "Taxes", "Transport", "Travel"]);
let accountName   = await tp.system.prompt("Name for account in Ledger format (e.g., Chase:Checking)", defaultValue);
-%>
title: "<% accountLabel %>"
created: <% tp.file.creation_date() %>
aliases:
  - "<% accountLabel %>"
tags:
  - finance/accounts
navigate-up:
  - "[[<% navigateUp %>]]"
short-code: 
account-last-four: 
account-label: "<% accountLabel %>"
account-name: "<% accountType + ":" + accountGroup + ":" + accountName %>"
account-type: "<% accountType %>"
account-group: "<% accountGroup %>"
start-date: 
end-date: 
edit-status: new    # new | in-progress | complete
description: Ledger account
---
<%*

// Template for adding accounts that are compatible with Ledger

-%>
###### [[<% navigateUp %>]]
# <% accountLabel %>
```
<% accountType + ":" + accountGroup + ":" + accountName %>
```

![[finance-trxns.base#Account transactions]]

<% await tp.file.include("[[notes-snippet]]") %>
