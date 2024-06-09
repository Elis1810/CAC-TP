
/*comillas invertidad alt+96*/
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