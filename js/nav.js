function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
  
    navLinks.classList.toggle('show');
  }

 

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
