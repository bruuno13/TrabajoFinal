document.addEventListener("DOMContentLoaded", function() {
    function saludo() {
        var nombre = "";

        while (nombre === null || nombre === "") {
            nombre = prompt("Por favor, ingrese su nombre:");
            if (nombre === null) {
                break;
            } else if (nombre === "") {
                alert("Por favor, ingrese su nombre.");
            } else {
                alert("¡Bienvenido, " + nombre + "!");
            }
        }
    }

    saludo();
});
