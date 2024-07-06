const rutaJSON = "https://eli24177x.pythonanywhere.com/productos"; // Cargar los datos del archivo JSON, creando la ruta

let datosProductos = []; // Definir una variable global para almacenar los datos del JSON

fetch(rutaJSON)
  .then(response => response.json())
  .then(data => {
    datosProductos = data; // Asignar los datos a la variable global
    document.getElementById("columnaCentral").innerHTML = generarTarjetas(data);
  });

function generarTarjetas(datosProductos) {
  let cad = ``;
  for (let producto of datosProductos) {
    cad += `
    <div class="tarjetas">
        <img src="${"./img/amigurumis/"+producto.imagen}" alt="Producto ${producto.id}">
        <p>${producto.nombre}</p>
        <p>Precio: $${producto.precio}</p>
        <button class="boton-item" data-id="${producto.id}">Agregar al Carrito</button>
      </div>
    `;
  }
  return cad;
}

// Carrito compras
var carritoVisible = false;

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', ready);
} else {
  ready();
}

function ready() {
  // Delegación de eventos para botones "Agregar al Carrito"
  document.addEventListener('click', function (event) {
    if (event.target && event.target.classList.contains('boton-item')) {
      var idProducto = event.target.getAttribute('data-id');
      var producto = datosProductos.find(producto => producto.id == idProducto);
      agregarItemAlCarrito(producto);
    }
  });

  // Delegación de eventos para botones en el carrito
  document.addEventListener('click', function (event) {
    if (event.target && event.target.closest('.btn-eliminar')) {
      eliminarItemCarrito(event);
    }
    if (event.target && event.target.classList.contains('sumar-cantidad')) {
      sumarCantidad(event);
    }
    if (event.target && event.target.classList.contains('restar-cantidad')) {
      restarCantidad(event);
    }
  });
}

function eliminarItemCarrito(event) {
  var buttonClicked = event.target.closest('.carrito-item');
  buttonClicked.remove();

  // Actualizar el total cuando se elimina item
  actualizarTotalCarrito();
  ocultarCarrito(); // Llamar a la función ocultarCarrito después de eliminar un elemento del carrito
}

function actualizarTotalCarrito() {
  var carritoItems = document.getElementsByClassName('carrito-item');
  var total = 0;

  for (var i = 0; i < carritoItems.length; i++) {
    var item = carritoItems[i];
    var precioElemento = item.querySelector('.carrito-item-precio');
    var precio = parseFloat(precioElemento.innerText.replace('$', '')); // Obtener el precio como número

    var cantidadElemento = item.querySelector('.carrito-item-cantidad');
    var cantidad = parseInt(cantidadElemento.value);
    total += precio * cantidad;
  }
  total = Math.round(total * 100) / 100;
  document.querySelector('.carrito-precio-total').innerText = '$' + total.toLocaleString();
}

// Asegúrate de llamar a la función actualizarTotalCarrito() cuando se cambie la cantidad de un artículo
document.querySelectorAll('.carrito-item-cantidad').forEach(input => {
  input.addEventListener('change', actualizarTotalCarrito);
});

function ocultarCarrito() {
  var carritoItems = document.getElementsByClassName('carrito-items')[0];
  if (carritoItems.childElementCount == 0) {
    var carrito = document.getElementsByClassName('carrito')[0];
    carrito.style.marginRight = '-100%';
    carrito.style.opacity = '0';
    carritoVisible = false;

    var items = document.getElementsByClassName('contenedor-items')[0];
    items.style.width = '80%';
  }
}

function sumarCantidad(event) {
  var buttonClicked = event.target;
  var selector = buttonClicked.parentElement;
  var cantidadActual = parseInt(selector.querySelector('.carrito-item-cantidad').value);
  cantidadActual++;
  selector.querySelector('.carrito-item-cantidad').value = cantidadActual;
  actualizarTotalCarrito();
}

function restarCantidad(event) {
  var buttonClicked = event.target;
  var selector = buttonClicked.parentElement;
  var cantidadActual = parseInt(selector.querySelector('.carrito-item-cantidad').value);
  cantidadActual--;
  if (cantidadActual >= 1) {
    selector.querySelector('.carrito-item-cantidad').value = cantidadActual;
    actualizarTotalCarrito();
  }
}

function agregarItemAlCarrito(producto) {
  var nuevoItemCarrito = document.createElement('div');
  nuevoItemCarrito.classList.add('carrito-item');

  nuevoItemCarrito.innerHTML = `
      <img src="${producto.img}" width="60px">
      <div class="carrito-item-detalles">
          <span class="carrito-item-titulo">${producto.nombre}</span>
          <div class="selector-cantidad">
              <i class="fa-solid fa-minus restar-cantidad"></i>
              <input type="text" value="1" class="carrito-item-cantidad" disabled>
              <i class="fa-solid fa-plus sumar-cantidad"></i>
          </div>
          <span class="carrito-item-precio">$${producto.precio}</span>
      </div>
      <span class="btn-eliminar">
          <i class="fa-solid fa-trash"></i>
      </span>
  `;

  var contenedorItemsCarrito = document.querySelector('.carrito-items');
  contenedorItemsCarrito.appendChild(nuevoItemCarrito);

  actualizarTotalCarrito();
}