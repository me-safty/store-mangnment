const deletePopup = document.querySelector(
	".outward-inside-page .outward-page-overlay"
)
const deleteInwardBtn = document.querySelectorAll(".outward-inside-page .del")
const cancelDeleteBtn = document.querySelector(
	".outward-inside-page .outward-page-overlay .no-cancel"
)
const yesDeleteBtn = document.querySelector(
	".outward-inside-page .outward-page-overlay .delete-btn"
)
const deleteSuccessPopup = document.querySelector(
	".outward-inside-page .new-inward-overlay-delete"
)
const closeBtnSuccess = document.querySelector(
	".outward-inside-page .new-inward-overlay-delete .close-btn-success"
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

// outward Filter Popup

const outwardFilterPopup = document.querySelector(
	".outward-inside-page .overlay-filter"
)
const outwardCancelFilter = document.querySelector(
	".outward-inside-page .overlay-filter .cancel-filter"
)
const outwardFilterBtn = document.querySelector(
	".outward-inside-page button[role=search]"
)

outwardFilterBtn.onclick = (e) => {
	e.preventDefault()
	outwardFilterPopup.style.display = "flex"
}

outwardCancelFilter.onclick = () => (outwardFilterPopup.style.display = "none")

const viewMoreBtns = document.querySelectorAll(".list-page table td > span")
const detailsPopup = document.querySelector(".list-page .details-popup-overlay")
const closeDetailsPopup = document.querySelector(
	".list-page .details-popup-overlay .close-btn"
)
viewMoreBtns.forEach((btn) => {
	btn.onclick = () => (detailsPopup.style.display = "flex")
})
closeDetailsPopup.onclick = () => (detailsPopup.style.display = "none")

const updatePopup = document.querySelector(".update-popup")
const backToListBtn = document.querySelector(".details-popup .back-to-list")
backToListBtn.onclick = () => {
	detailsPopup.style.display = "none"
	// updatePopup.style.display = "flex"
}
