/* DARK MODE */
function toggleDarkMode() {
    let element = document.body;
    element.classList.toggle("dark-mode");
 }

 /* ACCORDION */
let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

/* FEEDBACK BUTTON */
function checkFeedbackButtonContent() {
  let x = document.getElementById("feedback-button");
  if (x.innerHTML === "Bedankt voor uw feedback.") {
      x.innerHTML = "Vond u deze pagina nuttig?";
  } else {
      x.innerHTML = "Bedankt voor uw feedback.";
  }
}

/* RICHTLIJNEN DIALOG */

let button = document.getElementById('selecteer-richtlijn-button')
let dialogRichtlijnen = document.querySelector('#selecteer-richtlijn-dialog')

button.addEventListener('click', function() {
  dialogRichtlijnen.showModal()
})

dialogRichtlijnen.addEventListener('submit', function() {
  let selectThingy = document.querySelector('select')
  location.href = selectThingy.value
})







