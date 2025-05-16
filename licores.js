function openModal(title, description) {
    const modal = document.getElementById('infoModal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');

    modalTitle.textContent = title;
    modalDescription.textContent = description;

    modal.style.display = 'flex'; // Mostrar el modal
}

function closeModal() {
    const modal = document.getElementById('infoModal');
    modal.style.display = 'none'; // Ocultar el modal
}

// Cerrar el modal al hacer clic fuera de él
window.onclick = function(event) {
    const modal = document.getElementById('infoModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};