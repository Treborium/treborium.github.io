function toggleMenu(x) {
    x.classList.toggle("change");
}

window.addEventListener("DOMContentLoaded", function() {
    var card = document.getElementById("card-template");

    for (var i = 0; i < 10; i++) {
        document.getElementById("posts").appendChild(card.cloneNode(true));
    }
}, false);