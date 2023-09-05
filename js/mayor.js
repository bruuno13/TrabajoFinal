// Función para verificar la edad
function verificarEdad() {
    // Pregunta la edad al usuario
    var edad = prompt("Por favor, ingrese su edad:");

    // Comprueba si la edad ingresada es mayor o igual a 18
    if (edad >= 18) {
        // Si es mayor de edad, no se hace nada, se le permite el acceso
    } else {
        // Si es menor de edad, muestra un mensaje de advertencia
        alert("Lo siento, este sitio es solo para personas mayores de 18 años. Ingrese bajo su responsabilidad.");
        window.location.href = "https://www.youtube.com"
    }
}

// Llama a la función verificarEdad cuando la página se cargue
window.onload = verificarEdad;