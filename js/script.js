// Toggle class active untuk navbar
const navbarNav = document.querySelector(".navbar .navbar-nav");

// Ketika #hamburger-menu di klik
const hamburgerMenu = document.querySelector("#hamburger-menu");
hamburgerMenu.addEventListener("click", (e) => {
  e.preventDefault;
  navbarNav.classList.toggle("active");
});

// Sembunyikan sidebar ketika elemen diluarnya diklik
document.addEventListener("click", (e) => {
  if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
