const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("menu-open");
});

var lastModified = new Date(document.lastModified);
document.getElementById("last-modified").innerHTML = "Last modified: " + lastModified.toLocaleString();