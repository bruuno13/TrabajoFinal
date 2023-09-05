function verificarEdad() {
    var edad = prompt("Por favor, ingrese su edad:");
    if (edad >= 18) {
    } else {
        alert("Lo siento, este sitio es solo para personas mayores de 18 años. Ingrese bajo su responsabilidad.");
        window.location.href = "https://www.youtube.com"
    }
}
// Llama a la función
window.onload = verificarEdad;