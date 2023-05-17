// header
const header = document.getElementById("header")
header.innerHTML = `
	<header class="d-flex align-items-center justify-content-end gap-4">
	<button class="close-sidebar-btn btn">
	<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24" data-tags="menu"><g fill="#fff" transform="scale(0.0234375 0.0234375)"><path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"/></g></svg>
	</button>
	<img src="assets/home/notification.svg" alt="notification" />
		<div
			class="user gap-3 d-flex align-items-center justify-content-center"
		>
			<img src="assets/home/person.png" alt="user" />
			<p>Administrator</p>
		</div>
	</header>
`
const closeSidebarBtn = document.querySelector(".close-sidebar-btn")
const sideBar = document.querySelector(".sidebar")

closeSidebarBtn.onclick = () => sideBar.classList.toggle("active")