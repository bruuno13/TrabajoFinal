function comprarProducto(button) {
    // Solicitar la distancia al cliente usando un cuadro de diálogo de entrada
    var distanciaKm = prompt("Por favor, ingrese la distancia en kilómetros:");

    // Verifica si el cliente ingresó un valor válido (un número)
    if (distanciaKm === null || isNaN(distanciaKm)) {
        alert("Por favor, ingrese una distancia válida en kilómetros.");
        return; // Sale de la función si el valor no es válido
    }

    // Convierte la distancia a un número entero
    distanciaKm = parseInt(distanciaKm);

    // Obtiene el precio del producto desde el atributo "data-precio"
    var precioProducto = parseInt(button.previousElementSibling.getAttribute("data-precio"));

    // Verifica si el cliente está dentro de la ciudad o a una distancia de hasta 40 km
    var costoEnvío = 0; // Inicialmente, el costo de envío es gratuito
    if (distanciaKm > 40) {
        costoEnvío = 800; // Si está fuera de la ciudad, aplica el costo de envío de $800
    }

    // Calcula el precio total
    var precioTotal = precioProducto + costoEnvío;

    // Realiza otras acciones, como agregar el producto al carrito, procesar el pago, etc.
    // ...

    // Muestra un mensaje de confirmación o redirige al usuario a la página de pago
    alert("Producto agregado al carrito. Precio total: $" + precioTotal);
}
