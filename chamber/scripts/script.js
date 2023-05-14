function toggleMenu(){
  document.getElementById("primarynav").classList.toggle("open");
}
const x = document.getElementById('hamburgerbtn')
x.onclick = toggleMenu;

const currentDate = new Date();
const currentTime = currentDate.toLocaleTimeString();

const dateContainer = document.getElementById("current-date");
const timeContainer = document.getElementById("current-time");
dateContainer.textContent = currentDate.toDateString();
timeContainer.textContent = currentTime;

var lastModified = new Date(document.lastModified);
document.getElementById("last-modified").innerHTML = "Last modified: " + lastModified.toLocaleString();