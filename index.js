// SCROLL HEADER 2
const scrollNav = document.getElementById("nav");

window.addEventListener("scroll", scrollHeader => {
  if (window.scrollY > scrollNav.offsetHeight + 200) {
    scrollNav.classList.add("scroll");
  } else {
    scrollNav.classList.remove("scroll");
  }

});



// HAMBURGER MENU OPEN AND CLOSE

const navOpen = document.getElementById("nav-open");
const navMenu = document.getElementById("nav-menu");

if (navOpen) {
  navOpen.addEventListener("click", () => {
    
    navMenu.classList.toggle("show");
  });
}
// HAMBURGER MENU  CLOSES WHEN CLICKED OUTSIDE

document.addEventListener("click", (e) => {
  if (e.target.id !== "nav-open" && e.target.id !== "nav-menu") {
    navMenu.classList.remove("show");
    
  }
});


/*
document.querySelectorAll(".nav_menu").forEach((n) =>
  n.addEventListener("click", () => {
    navMenu.classList.remove("show");
  })
);
*/

