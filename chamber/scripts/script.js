function toggleMenu(){
  document.getElementById("primarynav").classList.toggle("open");
}
const x = document.getElementById('hamburgerbtn')
x.onclick = toggleMenu;
 

var lastModified = new Date(document.lastModified);
document.getElementById("last-modified").innerHTML = "Last modified: " + lastModified.toLocaleString();