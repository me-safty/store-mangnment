// dropdown menu functionality
const allDropdowns = document.querySelectorAll(".dropdown")

allDropdowns.forEach((dropdown) => {
	const menu = dropdown.children[1]
	const caret = dropdown.children[0].childNodes[3]
	const dropdownSelected = dropdown.children[0].childNodes[1]
	const lisArr = [...menu.children]

	let selected

	dropdown.addEventListener("click", () => {
		caret.classList.toggle("drop")
		menu.classList.toggle("menuActive")
	})

	lisArr.forEach((e) => {
		e.addEventListener("click", () => {
			lisArr.forEach((e) => e.classList.remove("selected"))
			e.classList.add("selected")
			dropdownSelected.innerHTML = e.innerHTML
			selected = e.innerHTML
			changeVariation()
		})
	})
})
