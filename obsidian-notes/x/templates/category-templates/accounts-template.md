---
type: account
template-version: 2
<%*

// Template for adding accounts that are compatible with Ledger

// Use variables to prevent this template from showing up in backlinks and tag searches
const navigateUp   = "chart-of-accounts|Chart of accounts";
const defaultValue = "undefined";

let accountLabel  = await tp.system.prompt("Personal and unique label for account", defaultValue);
let accountType   = await tp.system.suggester((type) => type, ["Assets", "Liabilities", "Income", "Expenses", "Equity"]);
let accountGroup  = await tp.system.suggester((group) => group, ["Bank", "Cash", "Clothing", "Credit Card", "Food", "Health", "Housing", "Investments", "Lease", "Leisure", "Loan", "Misc", "Mortgage", "Other", "Receivable", "Salary", "Taxes", "Transport", "Travel"]);
let accountName   = await tp.system.prompt("Name for account in Ledger format (e.g., Chase:Checking)", defaultValue);
-%>
title: "<% accountLabel %>"
aliases:
  - "<% accountLabel %>"
created: <% tp.file.creation_date() %>
tags:
  - finance/accounts
navigate-up:
  - "[[<% navigateUp %>]]"
short-code: 
account-label: "<% accountLabel %>"
account-name: "<% accountType + ":" + accountGroup + ":" + accountName %>"
account-type: "<% accountType %>"
account-group: "<% accountGroup %>"
start-date: 
end-date: 
edit-status: new                              # in-progress / complete
---
# <% accountLabel %>
```
<% accountType + ":" + accountGroup + ":" + accountName %>
```

![[finance-trxns.base#Account transactions]]

## 📝 Notes
