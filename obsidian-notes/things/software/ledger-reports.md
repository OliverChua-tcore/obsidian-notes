---
type: software
template-version: 1
title: Ledger reports
aliases:
  - Ledger reports
created: 2026-01-27 23:45
tags:
  - software/finance
  - finance/ledger
navigate-up:
  - "[[ledger-cli|Ledger]]"
software-name: "[[ledger-cli|Ledger]]"
software-author:
software-license:
website:
repository:
source: https://ledger-cli.org/doc/ledger3.html
---
%%
	`software-name`: the name of the software or service
	`software-author`: the creators of the software (i.e., publisher, individual contributors, etc.)
	`software-license`: the links to the software licenses (i.e., text of FOSS license, copy of purchase receipt, etc.)
	`website`: the links to the websites for the software (i.e., homepage, account login, support site, etc.)
	`repository`: the links where the source code for the software are hosted (e.g., GitHub)
%%
# Ledger reports

## Basics: File and report options

##### Location of `transactions.ledger` file
```bash
cd /mnt/d/source-code/oliverchua/obsidian-notes/obsidian-notes/x
```

##### Specify a file per command
```bash
ledger -f /path/to/transactions.ledger [OPTION] ...
```

##### Set a default file via the environment variable (then you can omit `-f`)
```bash
export LEDGER_FILE=/path/to/transactions.ledger
```

##### Useful report options
| Option                                       | Description                                           |
| -------------------------------------------- | ----------------------------------------------------- |
| [ `-p` \| `--period` ] `[PERIOD_EXPRESSION]` | Limit to time range (e.g., `this month`, `last year`) |
| [ `-b` \| `--begin` ] `[DATE]`               | Explicit begin date of range​                         |
| [ `-e` \| `--end` ] `[DATE]`                 | Explicit end date[^enddate] of range​                 |
| [ `-S` \| `--sort` ] `[VEXPR]`               | Sort register/balance output                          |

[^enddate]: End dates are always exclusive. Imagine the date is followed by 00:00:00 time. They are instants in time; not entire days.

## Balance reports (where things stand)

##### Overall balance for one or more account trees
```bash
# All assets and liabilities
ledger bal Assets Liabilities

# Net worth style view (assets minus liabilities)
ledger bal Assets Liabilities --depth 2
```

##### By account type
```bash
# All assets by account
ledger bal Assets

# All expenses (good for total spending)
ledger bal Expenses

# All income
ledger bal Income
```

##### Summarized by top‑level category
```bash
# Collapse deeper accounts into their parents
ledger bal Expenses --depth 2
```

##### Period‑limited balances (e.g., month, year)
```bash
# This month's expenses
ledger bal Expenses -p "this month"

# Last calendar year's income
ledger bal Income -p "last year"

# Explicit range
ledger bal Assets Liabilities -b 2026-01-01 -e 2026-01-31
```

## Register reports (what happened over time)

##### Basic register for one account tree
```bash
# All postings affecting a single account tree
ledger reg Assets:Bank:Chase:Checking

# All groceries transactions
ledger reg Expenses:Food:Groceries
```

##### Register filtered by payee or description
```bash
# Any posting mentioning "Grocery"
ledger reg Grocery

# Only expenses rows with any description matching "Amazon"
ledger reg Expenses and Amazon
```

##### Sorted register
```bash
# Sorted by amount descending
ledger reg Expenses -S amount

# Sorted by date (usually default)
ledger reg Expenses -S date
```

##### Period‑limited register
```bash
# This month's register for a card
ledger reg Liabilities:CreditCard:Amex -p "this month"
```

## Cleared reports (what has or hasn't posted)

##### Only cleared (`*`) transactions
```bash
ledger reg Assets:Bank:Chase:Checking --cleared
ledger bal Assets --cleared
```

##### Only uncleared transactions
```bash
ledger reg Assets:Bank:Chase:Checking --uncleared
```

##### Typical "reconcile this month's bank statement" combo
```bash
# Cleared register for this month
ledger reg Assets:Bank:Chase:Checking --cleared -p "this month"

# Cleared balance for the account
ledger bal Assets:Bank:Chase:Checking --cleared
```

## Spending and income summaries

##### Total spending by category this month
```bash
ledger bal Expenses -p "this month" --depth 2
```

##### Spending percentages by category
```bash
ledger bal Expenses --percent --sort "(total)" --depth 2
```

##### Income vs. expenses (quick profit/loss feel)
```bash
# Net over a time period
ledger bal Income Expenses -p "this month"
```

## Net worth views

##### Assets minus liabilities (overall)
```bash
ledger bal Assets Liabilities
```

##### Historical net worth snapshots
```bash
# End-of-month snapshot
ledger bal Assets Liabilities -e 2026-01-31
```

## Quick diagnostics and stats

##### Check that the journal balances and get stats
```bash
ledger stats
```

##### Show all accounts
```bash
ledger accounts
```

## Handy one‑liner examples

##### Current checking account balance
```bash
ledger bal Assets:Bank:Chase:Checking
```

##### This month's groceries
```bash
ledger bal Expenses:Food:Groceries -p "this month"
```

##### Last month's Amex activity
```bash
ledger reg Liabilities:CreditCard:Amex -p "last month"
```

##### Year‑to‑date income
```bash
ledger bal Income -p "this year"
```
