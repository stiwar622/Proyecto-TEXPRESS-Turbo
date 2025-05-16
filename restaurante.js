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
const cards = document.querySelectorAll('.card');
const filters = document.querySelectorAll('input[type="checkbox"]');

// Función para filtrar las tarjetas
function filterCards() {
    const filterText = searchInput.value.toLowerCase().trim(); // Elimina espacios al inicio y al final
    const activeFilters = Array.from(filters)
        .filter(f => f.checked)
        .map(f => f.id.toLowerCase());

    // Divide el texto de búsqueda en palabras
    const searchWords = filterText.split(/\s+/); // Divide por uno o más espacios

    cards.forEach(card => {
        const categories = card.getAttribute('data-category').toLowerCase().split(','); // Divide las categorías
        const matchesSearch = searchWords.every(word => 
            categories.some(category => category.trim().includes(word))
        ); // Verifica que todas las palabras coincidan con alguna categoría
        const matchesFilters = activeFilters.length === 0 || activeFilters.some(filter => categories.includes(filter)); // Verifica filtros activos

        // Mostrar tarjeta si coincide con el buscador o los filtros
        card.style.display = (matchesSearch && matchesFilters) || (filterText === '' && activeFilters.length === 0) ? '' : 'none';
    });
}

// Ejecutar la búsqueda automáticamente al escribir o borrar texto
searchInput.addEventListener('input', filterCards);

// Ejecutar el filtro al cambiar los checkboxes
filters.forEach(filter => {
    filter.addEventListener('change', filterCards);
});