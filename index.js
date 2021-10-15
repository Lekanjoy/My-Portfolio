// SCROLL HEADER 2
const scrollNav = document.getElementById("nav");
window.addEventListener("scroll", scrollHeader);

function scrollHeader() {
  if (window.scrollY > scrollNav.offsetHeight + 100) {
    scrollNav.classList.add("scroll");
  } else {
    scrollNav.classList.remove("scroll");
  }
}

// CLOSE NAV-MENU ON LINK CLICKED

const navLink = document.querySelectorAll(".nav_link");

navLink.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    navMenu.classList.remove("show");
  });
});

// HAMBURGER MENU OPEN AND CLOSE

const navOpen = document.getElementById("nav-open"),
  navMenu = document.getElementById("nav-menu"),
  navClose = document.getElementById("nav-close");

if (navOpen) {
  navOpen.addEventListener("click", () => {
    navMenu.classList.add("show");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show");
  });
}
