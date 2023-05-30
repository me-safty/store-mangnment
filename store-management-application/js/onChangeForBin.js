// let rows = document.querySelectorAll(".table .body .row")
// document.addEventListener(
// 	"click",
// 	() => (rows = document.querySelectorAll(".table .body .row"))
// )
// function onChangeForBin(rows) {
// 	if (rows.length !== 0) {
// 		rows.forEach((row) => {
// 			const bin = row.children[4].children[0]
// 			// const selectBoxes = [
// 			// 	...row.children[1].children,
// 			// 	...row.children[3].children,
// 			// 	row.children[2].children[1],
// 			// ]
// 			// const selectBoxesSpan = [
// 			// 	row.children[1].children[0].children[0].children[0],
// 			// 	row.children[3].children[0].children[0].children[0],
// 			// 	row.children[2].children[1].children[0].children[0],
// 			// ]
// 			// const inputsDate = row.children[2].children[0]
// 			// let selectedLis = []
// 			// let inputValues = []
// 			// let selectBoxLis = []
// 			// let valuesLength = inputValues.length + selectedLis.length
// 			// let elementsNum = selectBoxes.length + 1

// 			// selectBoxes.forEach((box) => {
// 			// 	selectBoxLis.push(...box.children[1].children)
// 			// })

// 			// function trackSelectBoxAndInputChange() {
// 			// 	selectedLis = []
// 			// 	inputValues = []
// 			// 	selectBoxes.forEach((box) => {
// 			// 		const lis = [...box.children[1].children]
// 			// 		lis.forEach((li) => {
// 			// 			if (li.classList.contains("selected")) {
// 			// 				selectedLis.push(li)
// 			// 			}
// 			// 		})
// 			// 	})
// 			// 	if (inputsDate.value !== "") {
// 			// 		inputValues.push(inputsDate.value)
// 			// 	}
// 			// 	valuesLength = inputValues.length + selectedLis.length
// 			// 	elementsNum = selectBoxes.length + 1
// 			// 	if (valuesLength === elementsNum) {
// 			// 		bin.style.filter = "grayscale(0)"
// 			// 	} else {
// 			// 		bin.style.filter = "grayscale(1)"
// 			// 	}
// 			// }

// 			// // Create a new MutationObserver
// 			// const observerForSelect = new MutationObserver(
// 			// 	(mutationsList, observer) => {
// 			// 		// Loop through the list of mutations
// 			// 		for (const mutation of mutationsList) {
// 			// 			// Check if the class of the element has changed
// 			// 			if (
// 			// 				mutation.type === "attributes" &&
// 			// 				mutation.attributeName === "class"
// 			// 			) {
// 			// 				// Do something when the class changes
// 			// 				trackSelectBoxAndInputChange()
// 			// 			}
// 			// 		}
// 			// 	}
// 			// )
// 			// selectBoxLis.forEach((li) => {
// 			// 	observerForSelect.observe(li, { attributes: true })
// 			// })
// 			// inputsDate.addEventListener("input", () => {
// 			// 	trackSelectBoxAndInputChange()
// 			// })

// 			// click bin btn functionality
// 			bin.onclick = () => {
// 				row.remove()
// 				// trackSelectBoxAndInputChange()
// 				// 	if (valuesLength === elementsNum) {
// 				// 		// empty the selected item text
// 				// 		// selectBoxesSpan.forEach((span) => {
// 				// 		// 	if (span.innerHTML !== "kg") {
// 				// 		// 		span.innerHTML = ""
// 				// 		// 	}
// 				// 		// })
// 				// 		// remove the selected class from all selected boxes
// 				// 		// selectBoxes.forEach((box) => {
// 				// 		// 	if (box.children[0].children[0].innerHTML !== "kg") {
// 				// 		// 		const lis = [...box.children[1].children]
// 				// 		// 		lis.forEach((li) => {
// 				// 		// 			if (li.classList.contains("selected")) {
// 				// 		// 				li.classList.remove("selected")
// 				// 		// 			}
// 				// 		// 		})
// 				// 		// 	}
// 				// 		// })
// 				// 		// empty the value of the input number
// 				// 		// inputsDate.value = ""
// 				// 	}
// 			}
// 			// trackSelectBoxAndInputChange()
// 		})
// 	}
// }

// // run the function
// onChangeForBin(rows)
