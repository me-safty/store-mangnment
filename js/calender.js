// Get the input element and the date picker element
const inputs = document.querySelectorAll("#custom-date")
inputs.forEach((input) => {
	const datePicker = document.createElement("div")
	datePicker.classList.add("custom-date-picker")

	// Create the header2
	const header2 = document.createElement("div")
	header2.classList.add("header2")
	const prevMonth = document.createElement("div")
	prevMonth.classList.add("prev-month")
	prevMonth.innerHTML = "<div class='caret-r'></div>"
	const nextMonth = document.createElement("div")
	nextMonth.classList.add("next-month")
	nextMonth.innerHTML = "<div class='caret-l'></div>"
	const monthYear = document.createElement("div")
	monthYear.classList.add("month-year")
	header2.appendChild(prevMonth)
	header2.appendChild(monthYear)
	header2.appendChild(nextMonth)
	datePicker.appendChild(header2)

	// Create the table
	const table = document.createElement("table")
	const daysOfWeek = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"]
	const dayHeader2s = document.createElement("tr")
	daysOfWeek.forEach((day) => {
		const th = document.createElement("th")
		th.textContent = day
		dayHeader2s.appendChild(th)
	})
	table.appendChild(dayHeader2s)
	for (let i = 0; i < 6; i++) {
		const row = document.createElement("tr")
		for (let j = 0; j < 7; j++) {
			const td = document.createElement("td")
			row.appendChild(td)
		}
		table.appendChild(row)
	}
	datePicker.appendChild(table)

	// Add the date picker to the DOM
	input.parentNode.insertBefore(datePicker, input.nextSibling)

	// Initialize the date picker
	const today = new Date()
	let selectedDate = today
	let currentMonth = today.getMonth()
	let currentYear = today.getFullYear()
	updateDatePicker(currentYear, currentMonth)

	// Show the date picker on input click
	input.addEventListener("click", () => {
		datePicker.style.display = "block"
	})

	// Hide the date picker when clicking outside of it
	document.addEventListener("click", (event) => {
		if (!datePicker.contains(event.target) && event.target !== input) {
			datePicker.style.display = "none"
		}
	})

	// Add event listeners to the header2 buttons
	prevMonth.addEventListener("click", () => {
		currentMonth--
		if (currentMonth < 0) {
			currentMonth = 11
			currentYear--
		}
		updateDatePicker(currentYear, currentMonth)
	})

	nextMonth.addEventListener("click", () => {
		currentMonth++
		if (currentMonth > 11) {
			currentMonth = 0
			currentYear++
		}
		updateDatePicker(currentYear, currentMonth)
	})

	// Add event listeners to the table cells
	table.addEventListener("click", (event) => {
		const td = event.target.closest("td")
		if (!td) return
		const date = new Date(currentYear, currentMonth, td.textContent)
		selectedDate = date
		updateDatePicker(currentYear, currentMonth)
		input.value = formatDate(date)
		datePicker.style.display = "none"
	})

	// Update the date picker with the given year and month
	function updateDatePicker(year, month) {
		// Update the header2
		monthYear.textContent = `${getMonthName(month)} ${year}`

		// Update the table
		const firstDayOfMonth = new Date(year, month, 1).getDay()
		const daysInMonth = new Date(year, month + 1, 0).getDate()
		let day = 1
		for (let i = 0; i < 6; i++) {
			for (let j = 0; j < 7; j++) {
				const td = table.rows[i + 1].cells[j]
				if (i === 0 && j < firstDayOfMonth) {
					td.textContent = ""
					td.classList.remove("selected")
				} else if (day > daysInMonth) {
					td.textContent = ""
					td.classList.remove("selected")
				} else {
					td.textContent = day
					if (
						selectedDate.getFullYear() === year &&
						selectedDate.getMonth() === month &&
						selectedDate.getDate() === day
					) {
						td.classList.add("selected")
					} else {
						td.classList.remove("selected")
					}
					day++
				}
			}
		}
	}

	// Format a date as "DD-MM-YYYY"
	function formatDate(date) {
		const year = date.getFullYear()
		const month = String(date.getMonth() + 1).padStart(2, "0")
		const day = String(date.getDate()).padStart(2, "0")
		return `${day}-${month}-${year}`
	}

	// Get the name of a month by its index (0-11)
	function getMonthName(monthIndex) {
		const months = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December",
		]
		return months[monthIndex]
	}
})
