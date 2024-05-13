/*let cad = ''
cad = "asd"
for elemento of datos{
  cad = cad + '
  createApp({
    data() {
      return {
        url: "./js/sucursales.json",
        datos: [],
        error: false
      }
    },
    methods:{
      fetchData(url) {
        fetch(url)
        .then(response => response.json()) 
        .then(data => {
          console.log(data)
          this.datos = data
          }
       )
      .catch(error => {
        console.log("Error: " + error)
        this.error = true
      });
      }      
    },
    created() {
      this.fetchData(this.url)
    }
  })
  .mount('#pantalla100')

      <div style = "min-width: 24%;" v-for= "elemento in datos" id = sucursalesdiv id = "imp"class="m1 animate__animated animate__backInRight animate__delay-1s" >
        <div>
          <h3 style="text-align: center;">{{ elemento.nombre }}</h3>
          <iframe
            src={{ elemento.mapurl }}
            width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade" ></iframe>
          <br>
            <p style="display: inline; font-weight: 600; font-size: large;">Direccion:</p> <a href="elemento.dirurl">{{ elemento.dirtext }}</a>
            <p><span style="font-weight: 600; font-size: large;">Horario:</span> {{ elemento.horario }}</p>
            <p><span style="font-weight: 600; font-size: large;">Telefono:</span> {{ elemento.telefono }}</p>
        </div>

}


document.querySelector("#pantalla100").innerHTML = cad


*/

const { createApp} = Vue




  createApp({
    data() {
      return {
        url: "./js/sucursales.json",
        datos:[],
        error:false
      }
    },





    methods:{
      fetchData() {
        newURL=this.url
        fetch(newURL)
        .then(response => response.json()) 
        .then(data => {
          console.log(data)
          this.datos = data
          }
        )
      .catch(error => {
        console.log("Error: " + error)
        this.error = true
      });
      }      
    },
    created() {
      this.fetchData(this.url)
    }
  }).mount('#pantalla100')
