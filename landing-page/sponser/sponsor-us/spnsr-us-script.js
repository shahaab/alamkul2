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

          const scriptURL = 'https://script.google.com/macros/s/AKfycby4TTk2Tyy1r7ionBFpEsbzTqKYqwcdmck_8ujMjLllslMTGyfwMqg0_E4vy7jh7tKn/exec'
          const form = document.forms['google-sheet']
        
          form.addEventListener('submit', e => {
            e.preventDefault()
            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
              .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
              .catch(error => console.error('Error!', error.message))
          })
