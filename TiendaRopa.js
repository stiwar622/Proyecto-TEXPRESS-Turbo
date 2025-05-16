const boton = document.getElementById("hamburguesa");
const sidebar = document.getElementById("sidebar");

boton.addEventListener("click", function () {
    sidebar.classList.toggle("activo");
});

const toggleSubmenu = document.getElementById("toggleSubmenu");
const submenuList = document.getElementById("submenuList");

toggleSubmenu.addEventListener("click", function (e) {
    e.preventDefault();
    submenuList.classList.toggle("activo");
});

const toggleSubmenu1 = document.getElementById("toggleSubmenu1");
const submenuList1 = document.getElementById("submenuList1");

toggleSubmenu1.addEventListener("click", function (e) {
    e.preventDefault();
    submenuList1.classList.toggle("activo");
});

const toggleSubmenu2 = document.getElementById("toggleSubmenu2");
const submenuList2 = document.getElementById("submenuList2");

toggleSubmenu2.addEventListener("click", function (e) {
    e.preventDefault();
    submenuList2.classList.toggle("activo");
});

const toggleSubmenu3 = document.getElementById("toggleSubmenu3");
const submenuList3 = document.getElementById("submenuList3");

toggleSubmenu3.addEventListener("click", function (e) {
    e.preventDefault();
    submenuList3.classList.toggle("activo");
});

const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const cards = document.querySelectorAll('.card');

// Función para filtrar las tarjetas
function filterCards() {
    const filter = searchInput.value.toLowerCase();

    cards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        if (filter === '') {
            card.style.display = ''; // Mostrar todas las tarjetas si el campo está vacío
        } else if (title.includes(filter)) {
            card.style.display = ''; // Mostrar la tarjeta si coincide con el filtro
        } else {
            card.style.display = 'none'; // Ocultar la tarjeta si no coincide
        }
    });
}

// Ejecutar la búsqueda al hacer clic en el botón
searchButton.addEventListener('click', filterCards);

// Ejecutar la búsqueda automáticamente al escribir o borrar texto
searchInput.addEventListener('input', filterCards);

document.addEventListener('DOMContentLoaded', () => {
    const filters = document.querySelectorAll('input[type="checkbox"]');
    const cards = document.querySelectorAll('.card');

    filters.forEach(filter => {
        filter.addEventListener('change', () => {
            const activeFilters = Array.from(filters)
                .filter(f => f.checked)
                .map(f => f.id);

            cards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (activeFilters.length === 0 || activeFilters.includes(category)) {
                    card.style.display = 'block'; // Mostrar tarjeta
                } else {
                    card.style.display = 'none'; // Ocultar tarjeta
                }
            });
        });
    });
});

