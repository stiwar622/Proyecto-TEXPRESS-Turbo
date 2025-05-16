// Abre el modal correspondiente
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
    }
}

// Cierra el modal correspondiente
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
}

// Cierra el modal al hacer clic fuera de él
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
};

document.getElementById('direccion').addEventListener('input', function () {
    const direccion = this.value.toLowerCase();
    const costoDomicilioElement = document.getElementById('costo-domicilio');
    let costoDomicilio = 0;

    // Reglas para calcular el costo del domicilio según la dirección
    if (direccion.includes('zona norte')) {
        costoDomicilio = 5000; // Ejemplo: Zona norte cuesta $5000
    } else if (direccion.includes('zona sur')) {
        costoDomicilio = 7000; // Ejemplo: Zona sur cuesta $7000
    } else if (direccion.includes('zona centro')) {
        costoDomicilio = 3000; // Ejemplo: Zona centro cuesta $3000
    } else {
        costoDomicilio = 10000; // Dirección fuera de las zonas predefinidas
    }

    // Actualiza el costo del domicilio en la interfaz
    costoDomicilioElement.textContent = `Costo de domicilio: $${costoDomicilio.toLocaleString('es-CO')}`;
});

document.getElementById('btn-whatsapp').addEventListener('click', function () {
    const direccion = document.getElementById('direccion').value;
    const costoDomicilio = document.getElementById('costo-domicilio').textContent.split('$')[1];
    let mensaje = 'Hola, quiero realizar un pedido:\n\n';

    carrito.forEach((producto, index) => {
        mensaje += `${index + 1}. ${producto.nombre} x${producto.cantidad}\n`;
    });

    mensaje += `\nDirección: ${direccion}`;
    mensaje += `\nCosto de domicilio: $${costoDomicilio}`;
    mensaje += `\nTotal con domicilio: $${(total + parseInt(costoDomicilio.replace(',', ''))).toLocaleString('es-CO')}`;

    const numeroWhatsApp = '3147908047'; // Reemplaza con el número correcto
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    this.href = url;
});