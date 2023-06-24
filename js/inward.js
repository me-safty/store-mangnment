const deletePopup = document.querySelector(".inward-page .inward-page-overlay")
const deleteInwardBtn = document.querySelectorAll(".inward-page .del")
const cancelDeleteBtn = document.querySelector(
	".inward-page-overlay .no-cancel"
)
const yesDeleteBtn = document.querySelector(".inward-page-overlay .delete-btn")
const deleteSuccessPopup = document.querySelector(".new-inward-overlay-delete")
const closeBtnSuccess = document.querySelector(
	".new-inward-overlay-delete .close-btn-success"
)
deleteInwardBtn.forEach((btn) => {
	btn.onclick = () => {
		deletePopup.style.display = "flex"
	}
})
cancelDeleteBtn.onclick = () => (deletePopup.style.display = "none")
yesDeleteBtn.onclick = () => {
	deletePopup.style.display = "none"
	deleteSuccessPopup.style.display = "flex"
}
closeBtnSuccess.onclick = () => (deleteSuccessPopup.style.display = "none")

// inward Filter Popup

const inwardFilterPopup = document.querySelector(".inward-page .overlay-filter")
const inwardCancelFilter = document.querySelector(
	".inward-page .overlay-filter .cancel-filter"
)
const inwardFilterBtn = document.querySelector(
	".inward-page button[role=search]"
)

inwardFilterBtn.onclick = (e) => {
	e.preventDefault()
	inwardFilterPopup.style.display = "flex"
}

inwardCancelFilter.onclick = () => (inwardFilterPopup.style.display = "none")

