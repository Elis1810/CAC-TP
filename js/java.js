var visible = false; 
 function iniciar() { 
 var elemento = document.getElementById("menu-img"); 
 elemento.addEventListener("click", mostrarMenu); 
 } 
 function mostrarMenu() { 
 var elemento = document.getElementById("menuprincipal"); 
 if (!visible) { 
 elemento.style.display = "flex"; 
 visible = true; 
 } else { 
 elemento.style.display = "none"; 
 visible = false; 
 } 
 } 
 window.addEventListener("load", iniciar); 
 

/*const switchButton = document.getElementById('switch');
 
switchButton.addEventListener('click', () => {
    document.body.classList.toggle('dark'); //alterna el HTML a modo 'dark'
    switchButton.classList.toggle('active');//cuando el boton esta en modo activo cambia a modo claro
});*/