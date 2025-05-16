// Categorías Populares (actualizado con tus datos)
const categoriasCtx = document.getElementById('categoriasChart').getContext('2d');
new Chart(categoriasCtx, {
    type: 'bar',
    data: {
        labels: ['Restaurantes', 'Mercados', 'Farmacias', 'Licores', 'Tiendas'],
        datasets: [{
            label: 'Popularidad',
            data: [1420, 980, 750, 520, 680],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            tooltip: {
                enabled: true,
                callbacks: {
                    label: function(context) {
                        return `Popularidad: ${context.parsed.y}`;
                    }
                }
            },
            legend: { display: true }
        },
        scales: {
            y: { beginAtZero: true }
        },
        hover: {
            mode: 'nearest',
            intersect: true
        }
    }
});

// Registro de Comercios
const registroCtx = document.getElementById('registroChart').getContext('2d');
new Chart(registroCtx, {
    type: 'line',
    data: {
        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May'],
        datasets: [{
            label: 'Comercios Registrados',
            data: [1420, 1380, 1650, 1720, 950],
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderWidth: 2,
            fill: true,
            tension: 0.3,
            pointRadius: 6,
            pointHoverRadius: 10,
            pointBackgroundColor: 'rgba(75, 192, 192, 1)',
            pointBorderColor: '#fff',
            pointBorderWidth: 2
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            tooltip: {
                enabled: true,
                callbacks: {
                    label: function(context) {
                        return `Comercios: ${context.parsed.y}`;
                    }
                }
            },
            legend: { display: true }
        },
        scales: {
            y: { beginAtZero: true }
        },
        hover: {
            mode: 'nearest',
            intersect: true
        }
    }
});

// Uso Semanal de la Plataforma
const usoCtx = document.getElementById('usoChart').getContext('2d');
new Chart(usoCtx, {
    type: 'line',
    data: {
        labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
        datasets: [{
            label: 'Usuarios Activos',
            data: [60, 80, 90, 110, 130, 150, 140],
            borderColor: 'rgba(255, 159, 64, 1)',
            backgroundColor: 'rgba(255, 159, 64, 0.2)',
            borderWidth: 2,
            fill: true,
            tension: 0.3,
            pointRadius: 6,
            pointHoverRadius: 10,
            pointBackgroundColor: 'rgba(255, 159, 64, 1)',
            pointBorderColor: '#fff',
            pointBorderWidth: 2
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            tooltip: {
                enabled: true,
                callbacks: {
                    label: function(context) {
                        return `Usuarios activos: ${context.parsed.y}`;
                    }
                }
            },
            legend: { display: true }
        },
        scales: {
            y: { beginAtZero: true }
        },
        hover: {
            mode: 'nearest',
            intersect: true
        }
    }
});

// Distribución de Categorías (Dona actualizada)
const tortaCtx = document.getElementById('tortaChart').getContext('2d');
new Chart(tortaCtx, {
    type: 'doughnut',
    data: {
        labels: ['Tiendas', 'Restaurantes', 'Mercados', 'Farmacias', 'Licores'],
        datasets: [{
            data: [35, 25, 20, 15, 5], // Valores porcentuales (suman 100%)
            backgroundColor: [
                '#FF6384', // Rojo para Tiendas
                '#36A2EB', // Azul para Restaurantes
                '#FFCE56', // Amarillo para Mercados
                '#4BC0C0', // Turquesa para Farmacias
                '#9966FF'  // Morado para Licores
            ],
            borderWidth: 0
        }]
    },
    options: {
        cutout: '70%',
        plugins: {
            legend: {
                position: 'right'
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return `${context.label}: ${context.raw}%`;
                    }
                }
            }
        }
    }
});