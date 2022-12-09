/* DARK MODE */
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }

 /* ACCORDION */
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

/* FEEDBACK BUTTON */
function myFeedback() {
  var x = document.getElementById("feedback-button");
  if (x.innerHTML === "Bedankt voor uw feedback.") {
      x.innerHTML = "Vond u deze pagina nuttig?";
  } else {
      x.innerHTML = "Bedankt voor uw feedback.";
  }
}

/* RICHTLIJNEN DIALOG */

let button = document.getElementById('selecteer-richtlijn-button')
var dialogRichtlijnen = document.querySelector('#selecteer-richtlijn-dialog')

button.addEventListener('click', function() {
  dialogRichtlijnen.showModal()
})

dialogRichtlijnen.addEventListener('submit', function() {
  var selectThingy = document.querySelector('select')
  location.href = selectThingy.value
})







