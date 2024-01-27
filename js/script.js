document.addEventListener("DOMContentLoaded", function () {
  var images = document.querySelectorAll("img");

  images.forEach(function (image) {
    image.draggable = false;
  });
});

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

// Search-cancel-button function
const searchCancelBtn = document.querySelector(
  ".navbar .search-form .search-cancel-button"
);
const searchBox = document.querySelector("#search-box");

searchBox.addEventListener("input", () => {
  if (searchBox.value != "") {
    searchCancelBtn.classList.add("active");
  } else if (searchBox.value == "") {
    searchCancelBtn.classList.remove("active");
  }
});

searchCancelBtn.addEventListener("click", () => {
  searchBox.value = "";
  if (searchCancelBtn.classList.contains("active")) {
    searchCancelBtn.classList.remove("active");
  }
});

// Toggle search form
const searchForm = document.querySelector(".navbar .search-form");
const searchBtn = document.querySelector("#search-btn");

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  searchForm.classList.toggle("active");
  searchBox.focus();
});

document.addEventListener("click", (e) => {
  if (!searchForm.contains(e.target) && !searchBtn.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});

// Shopping cart function
const cartBtn = document.querySelector("#shopping-cart-btn");
const shoppingCart = document.querySelector(".shopping-cart");

cartBtn.addEventListener("click", (e) => {
  e.preventDefault();
  shoppingCart.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (!cartBtn.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// Detail modal
const detailBtn = document.querySelectorAll(".detail-btn");
const modal = document.querySelector(".modal");
const modalDetail = document.querySelector(".modal .detail");
const modalClose = document.querySelector(".close-modal-btn");

detailBtn.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    document.body.classList.add("noscroll");
    modal.classList.add("active");
  });
});

modalClose.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.remove("active");
  document.body.classList.remove("noscroll");
});

modal.addEventListener("click", (e) => {
  if (!modalDetail.contains(e.target)) {
    modal.classList.remove("active");
    document.body.classList.remove("noscroll");
  }
});

document.addEventListener("click", (e) => {
  if (
    !modal.contains(e.target) &&
    !modalClose.contains(e.target) &&
    !detailBtn.contains(e.target)
  ) {
    modal.classList.remove("active");
    document.body.classList.remove("noscroll");
  }
});
