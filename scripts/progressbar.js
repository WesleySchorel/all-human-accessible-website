var items = document.querySelectorAll("input[type=checkbox]");

for (var i = 0; i < items.length; i++) {
items[i].addEventListener("click", function() {
var completed = document.querySelectorAll("input[type=checkbox]:checked").length;
var progress = (completed / items.length) * 100;
var progressbar = document.querySelector(".progressbar");
progressbar.style.width = progress + "%";
});
}