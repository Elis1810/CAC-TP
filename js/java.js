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
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Bungee+Spice&family=Dancing+Script&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/> 
    <link rel="stylesheet" href="./js/java.js"></link>
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
              <p> Sitio desarrollado en Codo a Codo, junto con Ignacio Pacheco, Eli Maldonado, Nico</p>
          </div>
          <div class="col-md-4 ">
            <h3>Redes Sociales</h3>
            <ul class="social-icons">
                <li><img src="/CAC-TP/img/footer/facebook.ico" alt="Facebook"></a></li>
                <li><img src="/CAC-TP/img/footer/tiktok.ico" alt="TikTok"></a></li>
                <li><img src="/CAC-TP/img/footer/instagram.ico" alt="Instagram"></a></li>
            </ul>
        </div>
        <div class="col-md-4">
            <h3>Contacto</h3>
            <p><img src="/CAC-TP/img/footer/telefono.ico" alt="Icono Teléfono">  (11)12345678</p>
            <p><img src="/CAC-TP/img/footer/location.ico" alt="Icono Ubicación">  Parque Las Heras, CABA, Buenos Aires, Argentina</p>
            <p><img src="/CAC-TP/img/footer/correo.ico" alt="Icono Email">  mundoamigurumis@gmail.com</p>
        </div>
    </div>
</div>`;
document.querySelector("footer").innerHTML = foot;

let imagenes = [
  "img/amigurumis/51b25683-7dca-46c1-bb28-38c3857c0d82.jpeg", 
  "img/amigurumis/zorro.jpg",
  "img/amigurumis/4dab778a-ca7c-4be3-8d20-b6badaeed31c.jpeg",
  "img/amigurumis/WhatsApp Image 2024-04-09 at 11.23.07.jpeg",
  " img/amigurumis/1ff645bc-d35c-4073-bcf2-38d2551ff2b8.jpg",
  "img/amigurumis/3feb000f-8bd9-44d8-81dd-efd939ad12c3.jpeg",
  "img/amigurumis/WhatsApp Image 2024-04-09 at 11.23.08 (1).jpeg",  
  "img/amigurumis/ef0daeec-6bb0-4acb-8422-04d282566869.jpeg",
  "img/amigurumis/conejitos.jpg",
  "img/amigurumis/f3b24f3f-8ddc-4eb5-81b6-ca4738f08ce7.jpeg",
  "img/amigurumis/WhatsApp Image 2024-04-25 at 10.36.10.jpeg",
  "img/amigurumis/WhatsApp Image 2024-05-02 at 18.46.27.jpeg",
  "img/amigurumis/3f1cb4f2-eed4-40a0-9c14-efe2f4f8647b.jpeg",  
  "img/amigurumis/41ea8be9-97f9-43f9-9f86-df1ec9aedd42.jpeg",
  "img/amigurumis/cdf80059-0660-439d-b49a-2bfef507ffbc.jpeg",
  "img/amigurumis/WhatsApp Image 2024-04-27 at 16.10.16.jpeg",  
  "img/amigurumis/WhatsApp Image 2024-04-09 at 11.23.11.jpeg",
  "img/amigurumis/4646fb28-60b1-4476-a3ca-198662111339.jpeg",  
  "img/amigurumis/94b54d6b-1962-4d99-a077-505da80684e9.jpeg",
  "img/amigurumis/WhatsApp Image 2024-04-09 at 11.23.08.jpeg",
  "img/amigurumis/WhatsApp Image 2024-05-02 at 19.10.31 (1).jpeg",
  "img/amigurumis/e2b6fc67-d1db-4c03-9824-ac8887ea6bd3.jpeg",
  "img/amigurumis/WhatsApp Image 2024-04-26 at 19.20.27.jpeg", 
  "img/amigurumis/WhatsApp Image 2024-04-28 at 09.26.33.jpeg", 
];

// Datos adicionales para cada imagen (nombre y precio)
let datosImagenes = [  
  { id: 1, nombre: "Girafa Tierna", precio: "$4500"},
  { id: 2, nombre: "Zorro",         precio: "$4500"}, 
  { id: 3, nombre: "Elefante",      precio: "$6000"},
  { nombre: "Ratoncito", precio: "$3000"},
  { nombre: "Canario", precio: "$3000"},
  { nombre: "Gato con Sombrero", precio: "$4800"},
  { nombre: "Tortuga Macetero", precio: "$8000"},  
  { nombre: "Caballo Grande" , precio: "$7500"},
  { nombre: "Conejo con pijama" , precio: "$6000"},
  { nombre: "Oso Grande" , precio: "$8500"},
  { nombre: "Mapache" , precio: "$5200"},
  { nombre: "Bunny" , precio: "$2500"},
  { nombre: "Mafalda" , precio: "$9500"},
  { nombre: "Shrek" , precio: "$8600"},
  { nombre: "El chavo del 8" , precio: "$7000"},
  { nombre: "Tomoe" , precio: "$9500"},    
  { nombre: "Hollow Knight" , precio: "$9000"},
  { nombre: "katsuki" , precio: "$4300"},  
  { nombre: "Luffy" , precio: "$3700"},
  { nombre: "Melody" , precio: "$12000"},
  { nombre: "Mario Bross" , precio: "$6600"},
  { nombre: "Grinch" , precio: "$8600"}, 
  { nombre: "Cascanueces" , precio: "$13000"},  
  { nombre: "Ramo" , precio: "$5000"},
];

/* id, descripcion, */

// Función para generar las tarjetas con nombres y precios
function generarTarjetas() {
  let cad = '';
  for (let i = 0; i < imagenes.length; i++) {
    cad += `
      <div class="tarjetas">
        <img src="${imagenes[i]}" alt="Producto ${i+1}">
        <h7><p></p>${datosImagenes[i].nombre}</h7>
        <h7>${datosImagenes[i].precio}</h7>
      </div>
    `;
  }
  return cad;
}

document.getElementById("columnaCentral").innerHTML = generarTarjetas();

