// Abre el formulario de contacto con los datos del asesor
function openContactForm(name, email, phone) {
    const contactForm = document.getElementById('contactForm');
    contactForm.classList.add('show');
    document.getElementById('asesorName').textContent = name;
    document.querySelector('form').action = `mailto:${email}`;
    document.getElementById('whatsappLink').href = `https://wa.me/${phone}?text=Hola%20${name},%20necesito%20ayuda%20con%20TEXPRESS.`;
}

// Cierra el formulario de contacto
function closeContactForm() {
    const contactForm = document.getElementById('contactForm');
    contactForm.classList.remove('show');
    showSuccessMessage(); // Muestra un mensaje de éxito al cerrar
}

// Valida los campos del formulario antes de enviarlo
function validateForm() {
    const email = document.getElementById('userEmail').value;
    const phone = document.getElementById('userPhone').value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!emailRegex.test(email)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return false;
    }

    if (!phoneRegex.test(phone)) {
        alert('Por favor, ingresa un número de teléfono válido (10 dígitos).');
        return false;
    }

    return true;
}

// Muestra un mensaje de éxito al enviar el formulario
function showSuccessMessage() {
    const successMessage = document.getElementById('successMessage');
    if (successMessage) {
        successMessage.style.display = 'block';
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 3000);
    }
}

// Desplaza la página hacia arriba (opcional para un botón "Volver al Inicio")
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}