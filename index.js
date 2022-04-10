// SCROLL HEADER 2
const scrollNav = document.getElementById("nav");

window.addEventListener("scroll", () => {
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
};

// HAMBURGER MENU  CLOSES WHEN CLICKED OUTSIDE

window.addEventListener("click", (e) => {
  if (e.target.id !== "nav-open" && e.target.id !== "nav-menu") {
    navMenu.classList.remove("show"); 
  }
});


const downloadCv = document.getElementById('download');

 downloadCv.style.fontWeight = "bold";

downloadCv.addEventListener("click", () => {

  downloadCv.textContent = "Downloading . . ."

  setTimeout(() => {
    downloadCv.textContent = "Download CV"
  },5000)
});


/*
document.querySelectorAll(".nav_menu").forEach((n) =>
  n.addEventListener("click", () => {
    navMenu.classList.remove("show");
  })
);
*/

