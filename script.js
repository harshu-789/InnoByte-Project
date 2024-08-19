const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});
function scrollRevealOption(){
  const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };
  
  // header container
  ScrollReveal().reveal(".header p", {
    ...scrollRevealOption,
  });
  
  ScrollReveal().reveal(".header h1", {
    ...scrollRevealOption,
    delay: 500,
  });
  
  // about container
  ScrollReveal().reveal(".image-container img", {
    ...scrollRevealOption,
    origin: "left",
  });
  ScrollReveal().reveal(".text-container", {
    ...scrollRevealOption,
    delay: 500,
  });
  
  ScrollReveal().reveal(".animate__bounceInLeft", {
    ...scrollRevealOption,
    delay: 1000,
  });
  
  ScrollReveal().reveal(".yui", {
    ...scrollRevealOption,
    delay: 1500,
  });
  
  ScrollReveal().reveal(".btn2", {
    ...scrollRevealOption,
    delay: 2000,
  });
  
  // room container
  ScrollReveal().reveal(".room-card", {
    ...scrollRevealOption,
    interval: 500,
  });
  
  // service container
  ScrollReveal().reveal(".service-list li", {
    ...scrollRevealOption,
    interval: 500,
    origin: "right",
  });
  
  
}
scrollRevealOption();
