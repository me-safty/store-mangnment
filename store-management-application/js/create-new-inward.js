// dropdown menu functionality
const dropdown = document.querySelector(".dropdown");
const caret = document.querySelector(".caret");
const menu = document.querySelector(".menu");
const liss = document.querySelectorAll(".menu li");
const dropdownSelected = document.querySelector(".dropdown .selected");

let selected;

dropdown.addEventListener("click", () => {
  caret.classList.toggle("drop");
  menu.classList.toggle("menuActive");
});

liss.forEach((e) => {
  e.addEventListener("click", () => {
    liss.forEach((e) => e.classList.remove("selected"));
    e.classList.add("selected");
    dropdownSelected.innerHTML = e.innerHTML;
    selected = e.innerHTML;
    changeVariation();
  });
});
