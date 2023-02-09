const menuButoon = document.getElementById("button");
const cosaAMostar = document.getElementById("navbar");

menuButoon.addEventListener("click", mostrar)

function mostrar() {
    cosaAMostar.classList.toggle("ocultar")
}

