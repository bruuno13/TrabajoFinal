// Función que muestra un mensaje de alerta al intentar salir del sitio
window.onbeforeunload = function() {
    return "Estás a punto de salir de nuestro sitio. ¿Estás seguro?";
};