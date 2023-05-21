const savePopup = document.querySelector(
	".new-inward-page > .new-inward-overlay"
)

const saveBtn = document.querySelector(".new-inward-page .save-btn")
const selectBoxes = document.querySelectorAll(".dropdown")
const inputsDate = document.querySelectorAll("input")
const selectBoxLis = document.querySelectorAll("li")
let selectedLis = []
let inputValues = []
let valuesLength = inputValues.length + selectedLis.length
let elementsNum = selectBoxes.length + inputsDate.length

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
	} else {
		saveBtn.style.opacity = ".7"
	}
}

saveBtn.onclick = () => {
	trackSelectBoxAndInputChange()
	if (valuesLength === elementsNum) {
		savePopup.style.display = "flex"
	}
}

// Create a new MutationObserver
const observerForSelect = new MutationObserver(
	(mutationsList, observer) => {
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
	}
)

selectBoxLis.forEach((li) => {
	observerForSelect.observe(li, { attributes: true })
})

inputsDate.forEach((input) => {
	input.oninput = () => trackSelectBoxAndInputChange()
})