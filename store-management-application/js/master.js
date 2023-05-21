// delete popup
const deletePopup = document.querySelector(
	".list-page .outward-page-overlay"
)
const deleteInwardBtn = document.querySelectorAll(".list-page .del")
const cancelDeleteBtn = document.querySelector(
	".list-page .outward-page-overlay .no-cancel"
)
const yesDeleteBtn = document.querySelector(
	".list-page .outward-page-overlay .delete-btn"
)
const deleteSuccessPopup = document.querySelector(
	".list-page .new-inward-overlay-delete"
)
const closeBtnSuccess = document.querySelector(
	".list-page .new-inward-overlay-delete .close-btn-success"
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
closeBtnSuccess.onclick = () =>
	(deleteSuccessPopup.style.display = "none")

// edit popups
const editPopup = document.querySelector(".edit-popup")
const closeEditPopup = document.querySelector(".edit-popup .close-btn")
const updatePopup = document.querySelector(".update-popup")
const closeUpdatePopupBtn = document.querySelector(
	".update-popup .close-btn"
)
const editBtns = document.querySelectorAll(".list-page table .edit")
const updateBtn = document.querySelector(".edit-popup .back-to-list")
closeEditPopup.onclick = () => (editPopup.style.display = "none")
editBtns.forEach((btn) => {
	btn.onclick = () => (editPopup.style.display = "flex")
})
updateBtn.onclick = () => {
	editPopup.style.display = "none"
	updatePopup.style.display = "flex"
}
closeUpdatePopupBtn.onclick = () => (updatePopup.style.display = "none")

// create popup
const createBtn = document.querySelector(".list-page .create-btn")
const detailsPopup = document.querySelector(
	".list-page .details-popup-overlay"
)
const closeDetailsPopup = document.querySelector(
	".list-page .details-popup-overlay .close-btn"
)
const createdSuccessfullyPopup = document.querySelector(
	".created-successfully-popup"
)
const closeCreatedSuccessfullyPopupBtn = document.querySelector(
	".created-successfully-popup .close-btn"
)

const backToListBtn = document.querySelector(
	".details-popup .back-to-list"
)

closeCreatedSuccessfullyPopupBtn.onclick = () =>
	(createdSuccessfullyPopup.style.display = "none")
createBtn.onclick = () => (detailsPopup.style.display = "flex")
closeDetailsPopup.onclick = () => (detailsPopup.style.display = "none")

const createPopupInputs = document.querySelectorAll(
	".create-master-popup input[type=text]"
)
const createPopupSelectBox = document.querySelectorAll(
	".create-master-popup .dropdown"
)
const createPopupSelectBoxValues = document.querySelectorAll(
	".create-master-popup .dropdown ul li"
)

backToListBtn.onclick = () => {
	// let checkSelected = 0
	// let checkInputsValue = 0
	// createPopupSelectBoxValues.forEach(li => {
	// 	if (li.classList.contains("selected")) {
	// 		checkSelected++
	// 	}
	// })
	// createPopupInputs.forEach(input=> {
	// 	if (input.value !== "" ) {
	// 		checkInputsValue++
	// 	}
	// })
	// const elementsNum = createPopupInputs.length + createPopupSelectBox.length
	// if (checkInputsValue + checkSelected === elementsNum) {
	// 	backToListBtn.classList.add("active")
	// }
	// if (backToListBtn.classList.contains("active")) {
	// 	detailsPopup.style.display = "none"
	// 	createdSuccessfullyPopup.style.display = "flex"
	// 	backToListBtn.classList.remove("active")
	// }

	detailsPopup.style.display = "none"
	createdSuccessfullyPopup.style.display = "flex"
}