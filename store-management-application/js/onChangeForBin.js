const rows = document.querySelectorAll(".table .body .row")
rows.forEach((row) => {
	const selectBoxes = [
		...row.children[1].children,
		...row.children[3].children,
		row.children[2].children[1],
	]
	const inputsDate = row.children[2].children[0]
	const bin = row.children[4].children[0]
	let selectedLis = []
	let inputValues = []
	let selectBoxLis = []
	let valuesLength = inputValues.length + selectedLis.length
	let elementsNum = selectBoxes.length + 1

	selectBoxes.forEach((box) => {
		selectBoxLis.push(...box.children[1].children)
	})

	function trackSelectBoxAndInputChange() {
		selectedLis = []
		inputValues = []
		selectBoxes.forEach((box) => {
			const lis = [...box.children[1].children]
			lis.forEach((li) => {
				if (li.classList.contains("selected")) {
					selectedLis.push(li)
				}
			})
		})
		if (inputsDate.value !== "") {
			inputValues.push(inputsDate.value)
		}
		valuesLength = inputValues.length + selectedLis.length
		elementsNum = selectBoxes.length + 1
		if (valuesLength === elementsNum) {
			bin.style.filter = "grayscale(0)"
		} else {
			bin.style.filter = "grayscale(1)"
		}
	}

	// Create a new MutationObserver
	const observerForSelect = new MutationObserver((mutationsList, observer) => {
		// Loop through the list of mutations
		for (const mutation of mutationsList) {
			// Check if the class of the element has changed
			if (
				mutation.type === "attributes" &&
				mutation.attributeName === "class"
			) {
				// Do something when the class changes
				trackSelectBoxAndInputChange()
			}
		}
	})
	selectBoxLis.forEach((li) => {
		observerForSelect.observe(li, { attributes: true })
	})

	inputsDate.oninput = () => trackSelectBoxAndInputChange()
})
