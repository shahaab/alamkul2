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


// demovdo
var divs = ["Menu1", "Menu2", "Menu3", "Menu4"];
var visibleDivId = null;
function toggleVisibility(divId) {
  if(visibleDivId === divId) {
    //visibleDivId = null;
  } else {
    visibleDivId = divId;
  }
  hideNonVisibleDivs();
}
function hideNonVisibleDivs() {
  var i, divId, div;
  for(i = 0; i < divs.length; i++) {
    divId = divs[i];
    div = document.getElementById(divId);
    if(visibleDivId === divId) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  }
}



// abt course

function myFunction() {
  var radioL = document.getElementById("switch_left");
  var radioR = document.getElementById("switch_right");
  var categories = document.getElementById("elite");
  var alphabetical = document.getElementById("basic");
  if (radioL.checked == true){
     elite.style.display = "block";
  } else {
     elite.style.display = "none";
  }
if (radioR.checked == true){
     basic.style.display = "block";
  } else {
     basic.style.display = "none";
  }
}



              const scriptURL = 'https://script.google.com/macros/s/AKfycbztp2jExlyNGzO7HkrRe9vY9SQdG2sB2VgrSxtwbx0Skax4PkgatX-B452Gr5jkfls/exec'
              const form = document.forms['google-sheet']
            
              form.addEventListener('submit', e => {
                e.preventDefault()
                fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                  .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
                  .catch(error => console.error('Error!', error.message))
              })
