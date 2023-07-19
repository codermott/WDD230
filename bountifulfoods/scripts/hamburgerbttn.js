document.addEventListener('DOMContentLoaded', function () {
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const headerNav = document.querySelector('.headernav');

    hamburgerBtn.addEventListener('click', function () {
        headerNav.classList.toggle('show');
    });
});