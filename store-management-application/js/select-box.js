// dropdown menu functionality
let allDropdowns = document.querySelectorAll(".dropdown:not(.read-only)")
function useSelectBox(allDropdowns) {
	let selectedArr = []
	allDropdowns.forEach((dropdown) => {
		const menu = dropdown.children[1]
		const caret = dropdown.children[0].childNodes[3]
		const dropdownSelected = dropdown.children[0].childNodes[1]
		const lisArr = [...menu.children]
		const span = dropdown.children[0].children[0]

		let selected
		document.addEventListener("click", (e) => {
			if (
				e.target.parentElement === dropdown ||
				e.target === span ||
				e.target === caret
			) {
				caret.classList.toggle("drop")
				menu.classList.toggle("menuActive")
			}
		})

		lisArr.forEach((e) => {
			e.addEventListener("click", () => {
				lisArr.forEach((e) => e.classList.remove("selected"))
				e.classList.add("selected")
				dropdownSelected.innerHTML = e.innerHTML
				selected = e.innerHTML
				selectedArr.push(selected)
			})
		})
		// Hide the date picker when clicking outside of it
		document.addEventListener("click", (event) => {
			if (
				event.target !== dropdown.children[0] &&
				event.target !== span &&
				event.target !== caret
			) {
				menu.classList.remove("menuActive")
				caret.classList.remove("drop")
			}
		})
	})
}

// run the function
useSelectBox(allDropdowns)
