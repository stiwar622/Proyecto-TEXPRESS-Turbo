let carrito = [];
let total = 0;

document.querySelectorAll('.agregar-carrito').forEach((boton) => {
  boton.addEventListener('submit', (e) => {
    const producto = e.target.parentNode;
    const nombre = producto.querySelector('h3').textContent;
    const precio = parseFloat(producto.querySelector('span').textContent.replace('$', '').replace('.', ''));
    const cantidad = 1;

    carrito.push({ nombre, precio, cantidad });

    actualizarCarrito();
  });

  // Seleccionar todos los botones "Agregar al carrito"
  document.querySelectorAll('.agregar-carrito').forEach((boton) => {
    // Elimina cualquier evento previo para evitar duplicados
    boton.removeEventListener('click', agregarAlCarrito);

    // Agrega el evento click
    boton.addEventListener('click', agregarAlCarrito);
  });
});


function actualizarCarrito() {
  const listaCarrito = document.getElementById('lista-carrito'); // Asegúrate de usar el ID correcto
  listaCarrito.innerHTML = '';

  carrito.forEach((producto, indice) => {
    const item = document.createElement('li');
    item.textContent = `${producto.nombre} x${producto.cantidad} = $${(producto.precio * producto.cantidad).toLocaleString('es-CO')}`;

    // Crear botón de eliminar
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.style.marginLeft = '10px';
    botonEliminar.addEventListener('click', () => {
      eliminarProducto(indice);
    });

    // Agregar el botón al elemento del carrito
    item.appendChild(botonEliminar);
    listaCarrito.appendChild(item);
  });

  total = carrito.reduce((acumulado, producto) => acumulado + producto.precio * producto.cantidad, 0);
  document.getElementById('total').textContent = `Total: $${total.toLocaleString('es-CO')}`;
}

function eliminarProducto(indice) {
  carrito.splice(indice, 1); // Elimina el producto del carrito
  actualizarCarrito(); // Actualiza la interfaz del carrito
}

document.getElementById('barrio').addEventListener('change', function () {
  const barrioSeleccionado = this.value.trim().toLowerCase(); // Normaliza el valor seleccionado
  const costoDomicilioElement = document.getElementById('costo-domicilio');
  let costoDomicilio = 0;

  // Mapeo de barrios a zonas y costos
  const zonas = {
    "Otro": {
      barrios: ["Otro Barrio"],
    },
    "zona norte": {
      barrios: ["el tres", "el dos", "casanova", "aguas clara", "piedrecitas"],
      costo: 10000,
    },
    "zona sur": {
      barrios: ["pescadores i", "pescadores ii", "la playa", "río turbo", "las garzas", "siete de agosto", "villa maría"],
      costo: 5000,
    },
    "zona urbana": {
      barrios: [
        "brisas del mar",
        "buenos aires",
        "ciudadela bolívar",
        "el bosque",
        "centro",
        "el progreso",
        "gaitán",
        "instituto-gonzalo mejía",
        "hoover quintero",
        "jesús mora",
        "juan xxiii",
        "julia orozco",
        "las delicias",
        "las flores",
        "obrero",
        "san martín",
        "santa fe",
        "urbanización monterrey i",
        "urbanización monterrey ii",
        "urbanización monterrey iii",
        "urbanización la lucila",
        "la floresta",
        "fondo obrero",
        "veranillo",
      ],
      costo: 3000,
    },
  };

  // Determinar el costo del domicilio según el barrio seleccionado
  let zonaEncontrada = false;
  for (const [zona, data] of Object.entries(zonas)) {
    if (data.barrios.includes(barrioSeleccionado)) {
      costoDomicilio = data.costo;
      zonaEncontrada = true;
      break;
    }
  }

  // Si no se encuentra el barrio, asignar un costo predeterminado
  if (!zonaEncontrada) {
    costoDomicilio = "Si su barrio no se encuentra qui, negociará con el domiciliario de la empresa";
  }

  // Actualiza el costo del domicilio en la interfaz
  if (typeof costoDomicilio === 'number') {
    costoDomicilioElement.textContent = `Costo de domicilio: $${costoDomicilio.toLocaleString('es-CO')}`;
  } else {
    costoDomicilioElement.textContent = costoDomicilio;
  }
});

document.getElementById('btn-whatsapp').addEventListener('click', function (e) {
  e.preventDefault(); // Evita la redirección predeterminada del enlace

  const nombre = document.getElementById('nombre').value.trim();
  const direccion = document.getElementById('direccion').value.trim();
  const telefono = document.getElementById('telefono').value.trim();
  const barrio = document.getElementById('barrio').value;
  const puntoReferencia = document.getElementById('PuntoReferencia').value.trim();

  // Validar los campos
  if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre)) {
    alert('¡Por favor introduzca un nombre valido!.');
    return;
  }

  if (!direccion.includes('#')) {
    alert('La dirección debe ser tal cual el ejemplo: Calle 1 # 2-3.');
    return;
  }

  if (!/^\d{10}$/.test(telefono)) {
    alert('El teléfono debe tener exactamente 10 dígitos. (Elimine espacios o caracteres especiales +57)');
    return;
  }

  if (!barrio) {
    alert('Debe seleccionar un barrio.');
    return;
  }

  if (carrito.length === 0) {
    alert('El carrito está vacío. Agrega productos antes de continuar.');
    return;    
  }

  let mensaje = 'Hola, quiero realizar un pedido:\n\n';

  carrito.forEach((producto, index) => {
    mensaje += `${index + 1}. ${producto.nombre} x ${producto.cantidad} = $${(producto.precio * producto.cantidad).toLocaleString('es-CO')}\n`;
  });

  mensaje += `\n*Nombre:* ${nombre}`;
  mensaje += `\n*Dirección:* ${direccion}`;
  mensaje += `\n*Barrio:* ${barrio}`;
  mensaje += `\n*Teléfono:* ${telefono}`;
  mensaje += `\n\n*Punto de referencia de la residencia:* ${puntoReferencia}`;
  mensaje += `\n*Precio del producto:* $${total.toLocaleString('es-CO')}`;
  mensaje += `\n*Costo de domicilio:* $${document.getElementById('costo-domicilio').textContent.replace(/[^0-9]/g, '')}`;
  mensaje += `\n\n*Total de tu pedido:* $${total + parseInt(document.getElementById('costo-domicilio').textContent.replace(/[^0-9]/g, ''))}`;
  mensaje += `\n\n*Gracias por su compra!*`;


  const numeroWhatsApp = '573207106907';
  const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, '_blank'); // Abre el enlace en una nueva pestaña
});



// Función para agregar productos al carrito
function agregarAlCarrito(e) {
  const producto = e.target.parentElement;
  const nombre = producto.querySelector('h3').textContent;
  const precio = parseInt(producto.querySelector('span').textContent.replace('.', '').replace('$', ''));
  const nuevoProducto = { nombre, precio, cantidad: 1 };

  // Verificar si el producto ya está en el carrito
  const productoExistente = carrito.find((item) => item.nombre === nombre);
  if (productoExistente) {
    productoExistente.cantidad += 1; // Incrementar la cantidad si ya existe
  } else {
    carrito.push(nuevoProducto); // Agregar el producto si no existe
  }

  actualizarCarrito();

  // Mostrar el mensaje de anuncio
  mostrarMensajeAnuncio('Producto añadido al carrito', 'agregar');
}

function actualizarCarrito() {
  const listaCarrito = document.getElementById('lista-carrito');
  listaCarrito.innerHTML = '';

  carrito.forEach((producto, indice) => {
    const item = document.createElement('li');
    item.textContent = `${producto.nombre} x${producto.cantidad} = $${(producto.precio * producto.cantidad).toLocaleString('es-CO')}`;

    // Crear botón de eliminar
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.style.marginLeft = '10px';
    botonEliminar.addEventListener('click', () => {
      eliminarProducto(indice);
    });

    // Agregar el botón al elemento del carrito
    item.appendChild(botonEliminar);
    listaCarrito.appendChild(item);
  });

  total = carrito.reduce((acumulado, producto) => acumulado + producto.precio * producto.cantidad, 0);
  document.getElementById('total').textContent = `Total: $${total.toLocaleString('es-CO')}`;
}

function eliminarProducto(indice) {
  const productoEliminado = carrito[indice].nombre; // Obtén el nombre del producto eliminado
  carrito.splice(indice, 1); // Elimina el producto del carrito
  actualizarCarrito(); // Actualiza la interfaz del carrito

  // Mostrar el mensaje de anuncio
  mostrarMensajeAnuncio(`Producto "${productoEliminado}" eliminado del carrito`, 'eliminar');
}

function mostrarMensajeAnuncio(mensaje, tipo) {
  const mensajeAnuncio = document.getElementById('mensaje-anuncio');
  mensajeAnuncio.textContent = mensaje;

  // Cambiar el color según el tipo de mensaje
  mensajeAnuncio.classList.remove('oculto', 'agregar', 'eliminar');
  mensajeAnuncio.classList.add('mostrar', tipo);

  // Ocultar el mensaje después de 3 segundos
  setTimeout(() => {
    mensajeAnuncio.classList.remove('mostrar');
    mensajeAnuncio.classList.add('oculto');
  }, 3000);
}

function mostrarDescripcion(titulo, descripcion) {
  document.getElementById('titulo-desc').innerText = titulo;
  document.getElementById('texto-desc').innerText = descripcion;
  document.getElementById('descripcion-card').classList.remove('oculto');
}

function cerrarDescripcion() {
  document.getElementById('descripcion-card').classList.add('oculto');
}

const cardsPorPagina = 10;
const totalCards = 10; // Cambia esto al número total de tarjetas que tienes
const contenedor = document.getElementById('card-container');
const paginacion = document.getElementById('paginacion');
const cards = Array.from(document.querySelectorAll('.producto')); // Selecciona todas las tarjetas

function mostrarPagina(pagina) {
  const contenedor = document.getElementById('card-container');
  contenedor.innerHTML = ''; // Limpia el contenedor

  const inicio = (pagina - 1) * cardsPorPagina;
  const fin = inicio + cardsPorPagina;
  const cardsPagina = cards.slice(inicio, fin); // Obtén las tarjetas para la página actual

  cardsPagina.forEach(card => contenedor.appendChild(card)); // Agrega las tarjetas al contenedor

  actualizarBotones(pagina);
}

function actualizarBotones(paginaActual) {
  paginacion.innerHTML = '';
  const totalPaginas = Math.ceil(cards.length / cardsPorPagina);

  for (let i = 1; i <= totalPaginas; i++) {
    const btn = document.createElement('button');
    btn.textContent = i;
    if (i === paginaActual) btn.classList.add('active');
    btn.addEventListener('click', () => mostrarPagina(i));
    paginacion.appendChild(btn);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  mostrarPagina(1); // Inicializa la primera página después de que el DOM esté cargado
});

// Inicializar en página 1
mostrarPagina(1);

const bebidas = [
  { nombre: 'Coca-Cola', precio: 3000, imagen: '../IMG/CocaCola.jpeg' },
  { nombre: 'Pepsi', precio: 3000, imagen: '../IMG/pepsipe.jpeg' },
  { nombre: 'Agua', precio: 2000, imagen: '../IMG/Agua.jpeg' },
  { nombre: 'Jugo de Naranja', precio: 4000, imagen: '../IMG/JugoNaranja.jpeg' },
  { nombre: 'Tea', precio: 3500, imagen: '../IMG/Te.jpeg' },
];

function mostrarBebidas() {
  const bebidasList = document.getElementById('bebidas-list');
  bebidas.forEach((bebida) => {
    const bebidaCard = document.createElement('div');
    bebidaCard.classList.add('bebida-card');

    bebidaCard.innerHTML = `
      <img src="${bebida.imagen}" alt="${bebida.nombre}" class="bebida-imagen">
      <h3>${bebida.nombre}</h3>
      <span>Precio: $${bebida.precio.toLocaleString('es-CO')}</span>
      <button class="agregar-bebida">Agregar</button>
    `;

    // Agregar evento para añadir al carrito
    bebidaCard.querySelector('.agregar-bebida').addEventListener('click', () => {
      const nuevoProducto = { nombre: bebida.nombre, precio: bebida.precio, cantidad: 1 };

      // Verificar si la bebida ya está en el carrito
      const productoExistente = carrito.find((item) => item.nombre === bebida.nombre);
      if (productoExistente) {
        productoExistente.cantidad += 1; // Incrementar la cantidad si ya existe
      } else {
        carrito.push(nuevoProducto); // Agregar la bebida si no existe
      }

      actualizarCarrito();

      // Mostrar el mensaje de anuncio
      mostrarMensajeAnuncio('Bebida añadida al carrito', 'agregar');
    });

    bebidasList.appendChild(bebidaCard);
  });
}

// Llamar a la función para mostrar las bebidas
mostrarBebidas();


// Obtener elementos del DOM
const sizeModal = document.getElementById('sizeModal');
const closeModal = document.getElementById('closeModal');
const sizeButtons = document.querySelectorAll('.size-button');

// Mostrar el modal al hacer clic en "Añadir al carrito" solo en botones con la clase "abrir-modal"
document.querySelectorAll('.abrir-modal').forEach((boton) => {
  boton.addEventListener('click', (e) => {
    e.preventDefault(); // Evita el comportamiento predeterminado
    const producto = e.target.closest('.producto'); // Encuentra el producto relacionado
    const nombreProducto = producto.querySelector('h3').textContent;

    // Guardar el producto seleccionado en el modal
    sizeModal.dataset.producto = nombreProducto;

    // Mostrar el modal
    sizeModal.style.display = 'block';
  });
});

// Cerrar el modal al hacer clic en la "X"
closeModal.addEventListener('click', () => {
  sizeModal.style.display = 'none';
});

// Cerrar el modal al hacer clic fuera del contenido
window.addEventListener('click', (event) => {
  if (event.target === sizeModal) {
    sizeModal.style.display = 'none';
  }
});

// Manejar la selección de tamaño
sizeButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    const selectedSize = event.target.getAttribute('data-size');
    const selectedPrice = parseFloat(event.target.getAttribute('data-price'));
    const producto = sizeModal.dataset.producto;
    const nombre = `${producto} (${selectedSize})`;
    const nuevoProducto = { nombre, precio: selectedPrice, cantidad: 1 };

    // Verificar si el producto ya está en el carrito
    const productoExistente = carrito.find((item) => item.nombre === nombre);
    if (productoExistente) {
      productoExistente.cantidad += 1; // Incrementar la cantidad si ya existe
    } else {
      carrito.push(nuevoProducto); // Agregar el producto si no existe
    }
    mostrarMensajeAnuncio('Producto añadido al carrito', 'agregar');
    actualizarCarrito();

    // Ocultar el modal
    sizeModal.style.display = 'none';
  });
});