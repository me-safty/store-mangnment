const bars = document.querySelectorAll(".dashboard-page .unit > div")

bars.forEach(bar => {
	const num = bar.getAttribute("data-num")
	bar.style.height = `${+num * 40}px`
})
