sucursalesarr =[
  {
      nombre:"Capital Federal",
      dirurl:"https://maps.app.goo.gl/qZqZnfg2VADXjUQRA",
      dirtext:"Av. S. Martín 2165",
      horario:"Lunes a Viernes de 9 a 18, Sábados de 9 a 14, Domingos y feriados Cerrado",
      telefono:"4444-5555",
      mapurl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1641.993236593784!2d-58.458855165023!3d-34.60450355821359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca03fd6bb8b7%3A0x17d8dbbce9227e16!2sPanaderia%20Olivero!5e0!3m2!1ses!2sar!4v1713021756339!5m2!1ses!2sar"
  },
  {
      nombre:"Rosario",
      dirurl:"https://maps.app.goo.gl/2MCvHYDvfXnWqSDS6",
      dirtext:"Mitre 1021, S2000 COU",
      horario:"Lunes a Viernes de 9 a 20, Sábados de 9 a 12 y de 15 a 21, Domingos de 9 a 12",
      telefono:"(341) 485 - 2120",
      mapurl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1341.5366683329614!2d-60.64059703899842!3d-32.94908314006509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7ab10a9975e9b%3A0x8dd1fe4f7cbd10b4!2sMitre%201021%2C%20S2000%20COU%2C%20Santa%20Fe!5e0!3m2!1ses!2sar!4v1713365448239!5m2!1ses!2sar"
  },
  {
      nombre:"Misiones",
      dirurl:"https://maps.app.goo.gl/jDSdxbusC2f2SWFg7",
      dirtext:"C. Marta Schwartz 24, N3370 - Puerto Iguazú",
      horario:"Horario: Lunes a Viernes de 9 a 20, Sábados y domingos cerrado",
      telefono:"(376) 444-7056/20/30",
      mapurl:"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3598.1475445819733!2d-54.575351999999995!3d-25.600013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDM2JzAwLjEiUyA1NMKwMzQnMzEuMyJX!5e0!3m2!1ses!2sar!4v1713365037728!5m2!1ses!2sar"
  },
  {
      nombre:"Bariloche",
      dirurl:"https://maps.app.goo.gl/adZjPdddugcR5nHZ6",
      dirtext:"Ada María Elflein 340, R8400",
      horario:"Lunes a Viernes de 9 a 12 y 15 a 21, sábados y domingos cerrado",
      telefono:"(294) 443 - 5735",
      mapurl:"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3004.922901810477!2d-71.305273!3d-41.136209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDA4JzEwLjQiUyA3McKwMTgnMTkuMCJX!5e0!3m2!1ses!2sar!4v1713365535935!5m2!1ses!2sar"
  }
]
let i=0
let cad= `<h2 style="text-align: left;width: 100%;margin-left: 1%">PODES ENCONTRARNOS EN</h2>
<br>`
for (let sucu of sucursalesarr){
  i = i+1
  cad = cad + `<div class="sucursalessub m1 animate__animated animate__backInRight animate__delay-${i}s"" style="min-width: 24%" id="sucursalesdiv">
      <div>
          <h3 style="text-align: center;">${sucu.nombre}</h3>
          <iframe id="frameurl" src=${sucu.mapurl} width=90% height="300" style="border:0;"
              allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <br>
          <p style="display: inline; font-weight: 600; font-size: large;">Direccion:</p> <a
              href="${sucu.dirurl}" target="_blank">${sucu.dirtext}</a>
              <br>
          <p><span style="font-weight: 600; font-size: large;">Horario:</span>${sucu.horario}
          </p>
          <p><span style="font-weight: 600; font-size: large;">Telefono:</span>${sucu.telefono}</p>
      </div>
  </div>
  `
}
document.getElementById("pantalla100").innerHTML =cad