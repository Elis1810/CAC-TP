function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');

  navLinks.classList.toggle('show');
}

/*comillas invertidad alt+96*/

let links = `
    <link rel="stylesheet" href="./css/estilos.css"> 
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js">
    <link rel="stylesheet" href="https://unpkg.com/vue@3/dist/vue.global.js">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Bungee+Spice&family=Dancing+Script&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/> 
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
    <link rel="stylesheet" href="./js/java.js"></link>
    <link rel="stylesheet" href="./js/api.json"></link>
          
`;
document.querySelector("head").innerHTML = links;

let nav = `
<div class="nav-position">                  
<nav class="navbar">
    <div class="logo">
        <a>CaC</a>
    </div>            
    <div>
        <ul class="nav-links">
          <li><a href="index.html">Inicio</a></li>
          <li><a href="productos.html">Productos</a></li>            
          <li><a href="pedidos.html">Pedidos</a></li>
          <li><a href="metodosdepagos.html">Métodos de Pagos</a></li>           
          <li><a href="contactanos.html">Contactanos</a></li>                        
        </ul>
        <div class="burger" onclick="toggleMenu()">
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
        </div>
    </div> 
</nav>    
</div>   
<div>
<h1 id="encabezado">
  <p>Amigumis</p>
</h1>
</div>`;
document.querySelector("header").innerHTML = nav;

let foot = `
<footer class="site-footer">
      <div class="row">
          <div class="col-md-4">
              <h3>Nosotros</h3>
              <p>Somos una tienda especializada en amigurumis hechos a mano con amor.</p>
              <p> Sitio desarrollado en Codo a Codo, junto con Ignacio Pacheco, Eliana Maldonado, Nicolas praszek</p>
          </div>
          <div class="col-md-4 ">
            <h3>Redes Sociales</h3>
            <ul class="social-icons">
                <li><img src="/img/footer/facebook.ico" alt="Facebook"></a></li>
                <li><img src="/img/footer/tiktok.ico" alt="TikTok"></a></li>
                <li><img src="/img/footer/instagram.ico" alt="Instagram"></a></li>
            </ul>
        </div>
        <div class="col-md-4">
            <h3>Contacto</h3>
            <p><img src="/img/footer/telefono.ico" alt="Icono Teléfono">  (11)12345678</p>
            <p><img src="/img/footer/location.ico" alt="Icono Ubicación">  Parque Las Heras, CABA, Buenos Aires, Argentina</p>
            <p><img src="/img/footer/correo.ico" alt="Icono Email">  mundoamigurumis@gmail.com</p>
        </div>
    </div>
</div>`;
document.querySelector("footer").innerHTML = foot;

const rutaJSON = "./js/api.json"; // Cargar los datos del archivo JSON, creando la ruta
//fetch se utiliza para obtener el contenido del archivo JSON desde la ruta especificada.
fetch(rutaJSON)
  .then(response => response.json())
  .then(data => {
    // Luego de cargar los datos, llamo a la función para generar las tarjetas
    document.getElementById("columnaCentral").innerHTML = generarTarjetas(data);
  })
function generarTarjetas(datosProductos) {
  let cad = ``;
  for (let producto of datosProductos) {
    cad += `
    <div class="tarjetas">
        <img src="${producto.img}" alt="Producto ${producto.id}"> 
        <p>${producto.nombre}</p>
        <p>Precio: $${producto.precio}</p>
        <p>${producto.id}</p>
      </div>
    `;
  }
  return cad;
}

const { createApp } = Vue;
createApp({
  data() {
    return {
      url: "./js/api.json",
      datos: [],
      error: false,
      filtroTipo: 'animales',
    };
  },
  methods: {
    fetchData(url) {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          this.datos = data; // Guarda los datos en la variable datos
        })
        .catch(error => {
          console.log("Error:" + error);
          this.error = true;
        });
    },
  },
  computed: {
    filteredDatos() {
      return this.datos.filter(elemento => elemento.tipo === this.filtroTipo);
    },
  },
  created() {
    // Se ejecuta cada vez que se crea el objeto VUE
    this.fetchData(this.url);         
  },
}).mount("#app");

createApp({
  data() {
    return {
      url: "./js/api.json",
      datos: [],
      error: false,
      filtroTipo: 'anime',
    };
  },
  methods: {
    fetchData(url) {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          this.datos = data; // Guarda los datos en la variable datos
        })
        .catch(error => {
          console.log("Error:" + error);
          this.error = true;
        });
    },
  },
  computed: {
    filteredDatos() {
      return this.datos.filter(elemento => elemento.tipo === this.filtroTipo);
    },
  },
  created() {
    // Se ejecuta cada vez que se crea el objeto VUE
    this.fetchData(this.url);         
  },
}).mount("#appAnime");

createApp({
  data() {
    return {
      url: "./js/api.json",
      datos: [],
      error: false,
      filtroTipo: 'personajes',
    };
  },
  methods: {
    fetchData(url) {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          this.datos = data; // Guarda los datos en la variable datos
        })
        .catch(error => {
          console.log("Error:" + error);
          this.error = true;
        });
    },
  },
  computed: {
    filteredDatos() {
      return this.datos.filter(elemento => elemento.tipo === this.filtroTipo);
    },
  },
  created() {
    // Se ejecuta cada vez que se crea el objeto VUE
    this.fetchData(this.url);         
  },
}).mount("#appPersonajes");

createApp({
  data() {
    return {
      url: "./js/api.json",
      datos: [],
      error: false,
      filtroTipo: 'ramos',
    };
  },
  methods: {
    fetchData(url) {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          this.datos = data; // Guarda los datos en la variable datos
        })
        .catch(error => {
          console.log("Error:" + error);
          this.error = true;
        });
    },
  },
  computed: {
    filteredDatos() {
      return this.datos.filter(elemento => elemento.tipo === this.filtroTipo);
    },
  },
  created() {
    // Se ejecuta cada vez que se crea el objeto VUE
    this.fetchData(this.url);         
  },
}).mount("#appRamos");

createApp({
  data() {
    return {
      url: "./js/api.json",
      datos: [],
      error: false,
      filtroTipo: 'varios',
    };
  },
  methods: {
    fetchData(url) {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          this.datos = data; // Guarda los datos en la variable datos
        })
        .catch(error => {
          console.log("Error:" + error);
          this.error = true;
        });
    },
  },
  computed: {
    filteredDatos() {
      return this.datos.filter(elemento => elemento.tipo === this.filtroTipo);
    },
  },
  created() {
    // Se ejecuta cada vez que se crea el objeto VUE
    this.fetchData(this.url);         
  },
}).mount("#appVarios");

