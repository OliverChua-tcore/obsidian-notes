---
type: transaction
template-version: 1
<%*

// Template for logging financial transactions that can be exported to Ledger

// Use variables to prevent this template from showing up in backlinks and tag searches
const navigateUpPath  = "calendar/1-daily-notes";
const navigateUp2     = "finance-trxns.base|Transactions";
const defaultCurrency = "USD";

let trxnDate = await tp.system.prompt("Date of transaction (default: today)", tp.date.now("YYYY-MM-DD"));

// navigate-up
const fileDate    = moment(trxnDate, "YYYY-MM-DD");
const year        = fileDate.format("YYYY");
const dayFileName = fileDate.format("YYYY-MM-DD-dddd");
const dayTitle    = fileDate.format("dddd, MMMM D, YYYY");
const navigateUp  = `${navigateUpPath}/${year}/${dayFileName}|${dayTitle}`;
-%>
created: <% tp.file.creation_date() %>
tags:
  - ledger/<% fileDate.format("YYYY/MM") %>
navigate-up:
  - "[[<% navigateUp %>]]"
  - "[[<% navigateUp2 %>]]"
trxn-date: <% trxnDate %>
trxn-payee: "<% await tp.system.prompt("Payee") %>"
trxn-memo: "<% await tp.system.prompt("Memo") %>"
trxn-from: "<% await tp.user.accountPicker(tp) %>"
trxn-to:   "<% await tp.user.accountPicker(tp) %>"
trxn-amount: <% await tp.system.prompt("Amount") %>
trxn-currency: <% await tp.system.prompt("Currency", defaultCurrency) %>
trxn-cleared: false
trxn-cleared-date:
short-date: "<% trxnDate %>"
edit-status: new                              # in-progress / complete
---
### <% dayTitle %>
<% await tp.file.include("[[date-when-snippet]]") %>

```
= dateformat(this.trxn-date, "yyyy-MM-dd") + choice(this.trxn-cleared = true, " * ", " ") + this.trxn-payee + " " + this.trxn-memo + "</br>" +
"    " + this.trxn-from + "    -" + this.trxn-amount + " " + this.trxn-currency + "</br>" +
"    " + this.trxn-to + "    " +  this.trxn-amount + " " + this.trxn-currency + "</br>" +
"    ; file: " + this.file.path
```

## 📝 Notes
