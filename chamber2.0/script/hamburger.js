document.addEventListener("DOMContentLoaded", function() {
    const hamburgerBtn = document.getElementById("hamburgerbtn");
    const primaryNav = document.getElementById("primarynav");
  
    hamburgerBtn.addEventListener("click", function() {
      primaryNav.classList.toggle("show");
    });
  
    // Close the navigation when a link is clicked
    const navLinks = primaryNav.querySelectorAll("a");
    navLinks.forEach(function(link) {
      link.addEventListener("click", function() {
        primaryNav.classList.remove("show");
      });
    });
  });