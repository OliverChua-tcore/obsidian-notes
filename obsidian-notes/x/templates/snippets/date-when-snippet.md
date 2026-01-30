<%*

// Snippet to add how far (past, present, future) `short-date` is from today

-%>
`= choice(
	date(today) = date(this.short-date),
	"**Today**",
	choice(
		date(yesterday) = date(this.short-date),
		"Yesterday",
		choice(
			date(tomorrow) = date(this.short-date),
			"_Tomorrow_",
			choice(
				date(today) < date(this.short-date),
				date(this.short-date) - date(today) + " _from today_",
				date(today) - date(this.short-date) + " ago"
			)
		)
	)
)`