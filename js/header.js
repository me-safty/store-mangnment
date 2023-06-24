// header
const closeSidebarBtn = document.querySelector(".close-sidebar-btn");
const sideBar = document.querySelector(".sidebar");

closeSidebarBtn.onclick = () => sideBar.classList.toggle("active");
