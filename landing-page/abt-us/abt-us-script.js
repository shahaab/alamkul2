//1. Header>Navbar>for mobile device expanding MENU section
//STARTS HERE!!!!
const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});
//1. Header>Navbar>for mobile device expanding MENU section
//ENDS HERE
//hi my name is arham he is dude 



 
// galary
