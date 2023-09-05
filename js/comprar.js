function comprarProducto(button) {
    var distanciaKm = prompt("Por favor, ingrese la distancia en kilómetros:");
    if (distanciaKm === null || isNaN(distanciaKm)) {
        alert("Por favor, ingrese una distancia válida en kilómetros.");
        return;
    }
    // Convierte la distancia a un número entero
    distanciaKm = parseInt(distanciaKm);

    // Obtiene el precio del producto desde el atributo "data-precio"
    var precioProducto = parseInt(button.previousElementSibling.getAttribute("data-precio"));

    // Verifica si el cliente está dentro de la ciudad o a una distancia de hasta 40 km
    var costoEnvío = 0;
    if (distanciaKm > 40) {
        costoEnvío = 800;
    }
    // Calcula el precio total
    var precioTotal = precioProducto + costoEnvío;
    alert("Producto agregado al carrito. Precio total: $" + precioTotal);
}
