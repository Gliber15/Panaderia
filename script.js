$(document).ready(function() {
    let cart = [];
    let total = 0;

    // Función para agregar productos al carrito
    $('.agregar-carrito').on('click', function() {
        const producto = $(this).data('producto');
        const precio = parseFloat($(this).data('precio'));

        // Verifica si el producto ya está en el carrito
        const existingProduct = cart.find(item => item.nombre === producto);

        if (existingProduct) {
            existingProduct.cantidad += 1;
        } else {
            cart.push({ nombre: producto, precio: precio, cantidad: 1 });
        }

        // Actualiza el total
        total += precio;

        // Actualiza la vista del carrito
        updateCart();
    });

    // Función para actualizar la vista del carrito
    function updateCart() {
        $('#carrito-list').empty();
        cart.forEach(item => {
            $('#carrito-list').append(
                `<li class="list-group-item">${item.nombre} - $${item.precio} x ${item.cantidad}</li>`
            );
        });
        $('#total-precio').text(total.toFixed(2));
        $('#cart-count').text(cart.length);
    }

    // Manejo del envío del formulario de contacto
    $('#contactForm').on('submit', function(event) {
        event.preventDefault();
        $('#thankYouMessage').removeClass('hidden');
        $(this).trigger('reset'); // Reinicia el formulario
    });
});
