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

function sendEmail(){
 Email.send({
   SecureToken:"62b168e5-16ae-4309-abdc-611d0356ed12",
   To: "alabilekanemmanuel@gmail.com",
   From: document.getElementById('mail').value,
   Subject: "New Portfolio Subscription",
   Body: "Hello, I would like to subscribe to your newsletter <br> Email: " + document.getElementById('mail').value,
 }).
 then(alert("Email Sent Succesfully"));
};


