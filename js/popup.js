var link = document.querySelector(".button-search");
var popup = document.querySelector(".modal");



popup.classList.add("modal-close");
link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("modal-close");
});

