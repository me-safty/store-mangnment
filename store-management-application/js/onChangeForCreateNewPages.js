function onChangeForCreateNewPages(
	saveBtn,
	selectBoxes,
	allInputsDate,
	selectBoxLis,
	btnFunction,
	callbackFunc,
	callbackFuncIfFalse = () => undefined
) {
	const inputsDate = []
	allInputsDate.forEach((input) => {
		if (input.classList.contains("no-validation") === false) {
			inputsDate.push(input)
		}
	})

	let selectedLis = []
	let inputValues = []
	let valuesLength = inputValues.length + selectedLis.length
	let elementsNum = selectBoxes.length + inputsDate.length

	// saveBtn.style.opacity = ".7"

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
		inputsDate.forEach((input) => {
			if (input.value !== "") {
				inputValues.push(input.value)
			}
		})
		valuesLength = inputValues.length + selectedLis.length
		elementsNum = selectBoxes.length + inputsDate.length
		if (valuesLength === elementsNum) {
			saveBtn.style.opacity = "1"
			saveBtn.disabled = false
			callbackFunc()
		} else {
			saveBtn.style.opacity = ".7"
			saveBtn.disabled = true
			callbackFuncIfFalse()
		}
	}

	saveBtn.onclick = () => {
		trackSelectBoxAndInputChange()
		if (valuesLength === elementsNum) {
			btnFunction()
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

	inputsDate.forEach((input) => {
		input.addEventListener("input", () => {
			trackSelectBoxAndInputChange()
		})
	})

	document.addEventListener("click", () => {
		trackSelectBoxAndInputChange()
	})
	trackSelectBoxAndInputChange()
}
