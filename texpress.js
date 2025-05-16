const boton = document.getElementById("hamburguesa");
const sidebar = document.getElementById("sidebar");

boton.addEventListener("click", function () {
    sidebar.classList.toggle("activo");
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

document.getElementById('searchButton').addEventListener('click', function () {
    const filter = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const title = card.querySelector('.card-title').textContent.toLowerCase();
        if (title.includes(filter)) {
            card.style.display = ''; // Show the card
        } else {
            card.style.display = 'none'; // Hide the card
        }
    });
});