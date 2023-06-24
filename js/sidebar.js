const lis = document.querySelectorAll(".sidebar ul li")
const master = document.querySelector(".sidebar #master")
const masterList = document.querySelector(".sidebar #master ul")
const pathname = window.location.pathname.split("/").reverse()[0]
const popup = document.querySelector("#sidebar .overlay")
const logoutBtn = document.querySelector(".sidebar .logout")
const cancelBtn = document.querySelector("#sidebar .cancel")
logoutBtn.onclick = () => (popup.style.display = "flex")

cancelBtn.onclick = () => (popup.style.display = "none")

const masterListChildren = [...masterList.children]
const masterListPaths = masterListChildren.map(
  (e) => e.childNodes[0]?.href.split("/").reverse()[0]
)

lis.forEach((li) => {
  const pagePath = li.childNodes[1]?.href.split("/").reverse()[0]
  if (masterListPaths.includes(pathname)) {
    masterList.style.display = "block"
    masterListChildren.forEach((e) => {
      const listPath = e.childNodes[0]?.href.split("/").reverse()[0]
      if (listPath === pathname) {
        e.classList.add("active")
        if (li.id === "master") {
          li.children[0].classList.add("active")
        }
      }
    })
  } else if (pathname === pagePath) {
    li.classList.add("active")
  } else if (pathname?.split(/[-.]/).includes(pagePath?.split(/[-.]/)[0])) {
    li.classList.add("active")
  }
})
