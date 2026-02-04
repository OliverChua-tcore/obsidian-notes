---
type: note
template-version: 1
title: MD-Ledger Conversion System
aliases:
  - MD-Ledger Conversion System
created: 2026-01-27 16:59
tags:
  - software/finance/md-ledger
  - finance/ledger
navigate-up:
  - "[[ledger-cli|Ledger]]"
edit-status: complete
---
# MD-Ledger Conversion System

## Entering & editing transactions manually

1. Enter the transactions in [[obsidian|Obsidian]] using the [[obsidian#Unique note creator|Unique note creator]] core plugin `Ctrl - Shift + T`
2. If needed, edit the transactions via a base view using `bases/finance-trxns.base`

> [!tip] [[md-ledger-best-practices|MD-Ledger data entry best practices]]

## Exporting & reporting

1. [[md-ledger-trxns-ledger-exporter|Run the export script]] to (re)generate the `transactions.ledger` file from [[markdown|MD]] files
2. [[ledger-reports|Run reports]] on the `transactions.ledger` file

## Transaction file formats

### Example transaction format in [[obsidian|Obsidian]]

```yaml
---
type: transaction
trxn-date: 2026-01-26
trxn-payee: "Aldi"
trxn-memo: "Weekly shopping"
trxn-from: "Assetsx:Bank:Chase:Checking"
trxn-to: "Expenses:Food:Groceries"
trxn-amount: 50.00
trxn-currency: USD
trxn-cleared: true
trxn-cleared-date: 2026-01-27
---
```

> Import from CSV file into [[obsidian|Obsidian]]: [[md-ledger-trxns-csv-importer|Obsidian Transactions CSV importer]]

### Example transaction format in [[ledger-cli|Ledger]]

```
2026-01-26 Aldi Weekly shopping
    Assets:Bank:Chase:Checking    -50.00 USD
    Expenses:Food:Groceries        50.00 USD
    ; file: efforts/finance/transactions/2026-01-26-152023.md
```

> Export from Obsidian into [[ledger-cli|Ledger]] format: [[md-ledger-trxns-ledger-exporter|Obsidian Transactions Ledger Exporter]]

## 📝 Notes
