---
type: note
template-version: 1
title: MD-Ledger data entry best practices
aliases:
  - MD-Ledger data entry best practices
created: 2026-01-27 21:32
tags:
  - software/finance/md-ledger
  - finance/ledger
navigate-up:
  - "[[md-ledger|MD-Ledger Conversion System]]"
source: https://ledger-cli.org/doc/ledger3.html
edit-status: in-progress
---
###### [[md-ledger|MD-Ledger Conversion System]]
# MD-Ledger data entry best practices

## Core transaction patterns

##### Basic double-entry expense
```
2026-01-26 * Grocery Store Weekly shopping
    Assets:Bank:Chase:Checking        -50.00 USD
    Expenses:Food:Groceries            50.00 USD
```
- Use `*` for **cleared** transactions (reconciled with bank)​
- Payee first, then a short memo
- Always keep amounts explicit on both postings for clarity

##### Income (paycheck)
```
2026-01-31 * Employer Inc. Monthly salary
    Income:Salary:Primary           -3000.00 USD
    Assets:Bank:Chase:Checking       3000.00 USD
```
- Income accounts are typically **negative** in postings so that reports show positive income (because Ledger treats income as credit)

##### Transfers between asset accounts
```
2026-01-15 * Transfer to savings
    Assets:Bank:Chase:Checking       -500.00 USD
    Assets:Bank:Ally:Savings          500.00 USD
```
- Use `Assets` to `Assets` for internal movements (no income/expense)​

## Naming accounts: General rules

- Use the **five top‑level types**[^chart]
	- `Assets`
	- `Liabilities`
	- `Equity`
	- `Income` (Revenue)
	- `Expenses`
- Use `:` for **hierarchy** and keep names _readable and consistent_[^account]
	- `Assets:Bank:Chase:Checking`
	- `Expenses:Food:Groceries`
	- `Income:Salary:Primary`
- Keep the **last part** _unique and grep‑friendly_[^account] (e.g., `:Personal Checking` vs `:Business Checking`)​
- Prefer spaces in names for readability
- Use `:` to separate levels, not underscores[^account]

[^chart]: https://www.cubesoftware.com/blog/chart-of-accounts
[^account]: https://hledger.org/account-names.html

## 1. Assets
##### Purpose
- Things you own with monetary value (e.g., cash, bank accounts, investments, receivables, prepaid items)

##### Common structure
```
Assets:Cash:Wallet
Assets:Bank:Chase:Checking
Assets:Bank:Chase:Chase Savings
Assets:Bank:Ally:Ally Savings
Assets:Investments:Brokerage:Vanguard
Assets:Receivable:Reimbursements
```

##### Best practices
- Group by **institution**, then **account type**
	- `Assets:Bank:[INSTITUTION]:[ACCOUNT-TYPE]` is a solid pattern
- Separate **liquid cash** (`Assets:Cash:Wallet`) from **bank accounts** and **investments** for clearer reports​
- Use `Assets:Receivable:[DESCRIPTION]` for money others owe you (friend paybacks, reimbursements)

##### Example: reimbursable expense
```
2026-02-01 * Conference Lunch (reimbursable)
    Assets:Receivable:Employer         -40.00 USD
    Expenses:Travel:Meals               40.00 USD
```

## 2. Liabilities
##### Purpose
- Debts and obligations (e.g., credit cards, loans, mortgages, taxes payable)

##### Common structure
```
Liabilities:CreditCard:Amex
Liabilities:CreditCard:Chase
Liabilities:Loan:Auto
Liabilities:Loan:Student
Liabilities:Mortgage:Home
Liabilities:Taxes:Federal
Liabilities:Taxes:State
```

##### Best practices
- Use `Liabilities:CreditCard:[ISSUER]` for cards — _keep each card separate_
- For loans/mortgages, include a short descriptor (e.g., `Liabilities:Loan:Auto`, `Liabilities:Mortgage:Primary home`)
- When you _spend_ on a credit card, treat the card as the source of funds
```
2026-02-03 * Grocery Store - Amex
    Liabilities:CreditCard:Amex       -80.00 USD
    Expenses:Food:Groceries            80.00 USD
```
- When you _pay_ the card
```
2026-02-10 * Amex Payment
    Assets:Bank:Chase:Checking       -80.00 USD
    Liabilities:CreditCard:Amex       80.00 USD
```

## 3. Income
##### Purpose
- Money coming in (e.g., salary, bonuses, interest, dividends, refunds)

##### Common structure
```
Income:Salary:Primary
Income:Salary:Side hustle
Income:Investments:Dividends
Income:Investments:Capital gains
Income:Other:Refunds
Income:Other:Interest
```

##### Best practices
- Separate **earned** (salary, freelance) from **investment** income
- Use **negative amounts** on income postings so `ledger bal Income` shows positive income
- Use refund income accounts when you get money back for previous expenses
```
2026-02-05 * Refund - Shoes
    Income:Refunds:Clothing          -80.00 USD
    Assets:Bank:Chase:Checking        80.00 USD
```

## 4. Expenses
##### Purpose
- Money you spend to live and operate (e.g., groceries, rent, utilities, subscriptions)

##### Common structure
```
Expenses:Cash
Expenses:Housing:Rent
Expenses:Housing:Utilities
Expenses:Food:Groceries
Expenses:Food:Restaurants
Expenses:Transport:Gas
Expenses:Transport:Rideshare
Expenses:Health:Insurance
Expenses:Leisure:Subscriptions
Expenses:Misc:Other
```

##### Best practices
- Use `[CATEGORY]:[SUBCATEGORY]` (e.g., `Expenses:Food:Groceries`, `Expenses:Food:Restaurants`)​
- Stay flat enough to be usable — _2–3 levels is usually ideal_
- Mirror common budget categories so reports map directly to your mental model

##### Example: split expense (tip vs main)
```
2026-02-02 * Restaurant Dinner
    Assets:Bank:Chase:Checking        -60.00 USD
    Expenses:Food:Restaurants          50.00 USD
    Expenses:Food:Tips                 10.00 USD
```

## 5. Equity
##### Purpose
- Net worth bucket; “who owns the difference between assets and liabilities”
- For personal finance, you mostly touch equity when
	- Seeding initial balances
	- Doing manual adjustments or importing history

##### Common structure
```
Equity:Opening balances
Equity:Adjustments
Equity:Contributions
Equity:Distributions
```

##### Best practices
- Use `Equity:Opening balances` once to set starting balances when you adopt Ledger​
```
2026-01-01 * Opening balances
    Equity:Opening balances       -13000.00 USD
    Liabilities:CreditCard:Amex    -2000.00 USD
    Assets:Bank:Chase:Checking      5000.00 USD
    Assets:Bank:Ally:Savings       10000.00 USD
```
- Use `Equity:Adjustments` for rare corrections when you reconcile against reality and can't easily attribute the difference to a specific income/expense

## Practical naming tips
- Stick to `ASCII`, `space`, and `:` only — _this keeps scripts simple​_
- Use consistent depth
	- `Assets:Bank:[INSTITUTION]:[ACCOUNT-TYPE]`
	- `Expenses:[CATEGORY]:[SUBCATEGORY]`
	- `Income:[SOURCE]:[DETAIL]`
- Make the **rightmost segment** _easy to search_:
	- `Assets:Bank:Chase:Chase checking`
	- `Assets:Bank:Chase:Chase savings`
	- `Liabilities:CreditCard:Amex:Amex Platinum`

## `group` property
In each account file:
```
---
type: account
account-label: "Chase Checking"
account-name: "Assets:Bank:Chase:Checking"
account-type: "Assets"    # Assets, Liabilities, Income, Expenses, Equity
account-group: "Bank"     # Bank, Cash, Credit Card, Brokerage, etc.
---
```

##### Examples
- Assets
	- Wallet: `group: "Cash"`
	- Chase checking: `group: "Bank"`
	- Vanguard brokerage: `group: "Brokerage"`
- Liabilities
	- Amex: `group: "Credit Card"`
	- Mortgage: `group: "Mortgage"`
- Expenses
	- Groceries: `group: "Living"`
	- Subscriptions: `group: "Leisure"`
- Income
	- Salary: `group: "Salary"`
	- Dividends: `group: "Investments"`

This mirrors how charts of accounts use cross‑cutting categories that aren’t tied to a single institution[^chart]

---

## Dealing with petty cash
Something that stops many people from keeping a ledger at all is the insanity of tracking small cash expenses. They rarely generate a receipt, and there are often a lot of small postings, rather than a few large ones, as with checks.

One solution is: **don’t bother**. Move your spending to a debit/credit card. In general, ignore cash. _Once you withdraw it from the ATM, mark it as already spent to an `Expenses:Cash` category._

```
2004-03-15 ATM
    Assets:Checking                   -100.00 USD
    Expenses:Cash                      100.00 USD

```

If at some point you make a large cash expense that you want to track, just _move_ the amount of the expense from `Expenses:Cash` into the target account.

```
2004-03-20 Somebody
    Expenses:Cash                      -65.00 USD
    Expenses:Food                       65.00 USD
```

This way, you can still track large cash expenses, while ignoring all of the smaller ones.

## 📝 Notes
