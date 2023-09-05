document.addEventListener("DOMContentLoaded", function() {
    var formulario = document.querySelector("form");

    formulario.addEventListener("submit", function(event) {
        event.preventDefault();

        // Mostrar un alerta que se envio el formulario
        alert("El formulario se ha enviado correctamente.");
    });
});