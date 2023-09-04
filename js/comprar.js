document.addEventListener('DOMContentLoaded', function () {
    const productos = document.querySelectorAll('.producto');
    const totalConIVAElement = document.getElementById('total-con-iva');
    const comprarBtn = document.getElementById('comprar-btn');

    let total = 0;

    productos.forEach(producto => {
        const precioSinIVA = parseFloat(producto.getAttribute('data-precio'));
        producto.querySelector('.btn-comprar').addEventListener('click', () => {
            total += precioSinIVA * 1.21; // Aplicar el 21% de IVA
            totalConIVAElement.textContent = `$${total.toFixed(2)}`;
        });
    });

    comprarBtn.addEventListener('click', () => {
            // Aquí puedes agregar código para finalizar la compra, como enviar datos al servidor o mostrar un mensaje de confirmación.
        alert(`Compra realizada por un total de $${total.toFixed(2)} con IVA.`);
    });
});




