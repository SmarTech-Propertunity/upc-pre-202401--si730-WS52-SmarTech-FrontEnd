<script>
import {PropertyApiService} from "@/core/public/services/property-api.service.js";
import RetraceToolbar from "@/core/shared/components/retrace-toolbar.component.vue";


import TheFooter from "@/core/public/components/the-footer.component.vue";


export default
{
  name: "post-overview",
  components: {


    TheFooter,

    RetraceToolbar
  },
  props: {
    id: {
      type: String
    }
  },

  data()
  {
    return {
      properties: [],
    }
  },
  beforeMount()
  {
    PropertyApiService.getAll().then((response) => {
      if (response.status === 200)
      {
        this.properties = response.data;
      }
      else
      {
        alert("There was a warning (or error) fetching data.");
      }
    }).catch((error) => {
      alert("An error has occurred. Full error info: " + error.message);
    })
  }
}
</script>

<template>
  <RetraceToolbar/>
<body>

<div class="container">
  <div class="general-information">
    <div class="title">{{this.properties[id].titulo}}</div>
    <div class="price-text">Precio en dólares <span class="price">{{this.properties[id].precio_dolares}}$</span></div>
    <img :src="this.properties[id].imagen" height="360" />
  </div>

  <div class="project-information">
    <h1>Información del proyecto</h1>
    <h1>¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯</h1>
    <table>
      <tr>
        <td>Tipo de propiedad</td>
        <td>{{this.properties[id].tipo_propiedad}}</td>
      </tr>
      <tr>
        <td>En</td>
        <td>{{this.properties[id].operacion}}</td>
      </tr>
      <tr>
        <td>Entrega</td>
        <td>{{this.properties[id].entrega}}</td>
      </tr>
      <tr>
        <td>Área techada</td>
        <td>{{this.properties[id].area_techada_metros_cuadrados}} m²</td>
      </tr>
      <tr>
        <td>Área total</td>
        <td>{{this.properties[id].area_total_metros_cuadrados}} m²</td>
      </tr>
      <tr>
        <td>Cantidad de dormitorios</td>
        <td>{{this.properties[id].cantidad_dormitorios}}</td>
      </tr>
      <tr>
        <td>Cantidad de baños</td>
        <td>{{this.properties[id].cantidad_banios}}</td>
      </tr>
      <tr>
        <td>Cantidad de estacionamientos</td>
        <td>{{this.properties[id].cantidad_estacionamientos}}</td>
      </tr>
      <tr>
        <td>Estado de venta</td>
        <td>{{this.properties[id].estado_venta}}</td>
      </tr>
      <tr>
        <td>Etapa del proyecto</td>
        <td>{{this.properties[id].etapa_proyecto}}</td>
      </tr>
      <tr>
        <td>Fecha de inicio del proyecto</td>
        <td>{{this.properties[id].fecha_inicio_proyecto}}</td>
      </tr>
      <tr>
        <td>Antigüedad</td>
        <td>{{this.properties[id].antiguedad}}</td>
      </tr>
    </table>
  </div>
</div>

<div class="description">
  <h1>Descripción del proyecto</h1>
  <h1>¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯</h1>
  <div class="description-text">{{this.properties[id].descripcion}}</div>
</div>

<div class="button-calculate">
  <router-link to="/calculator">  <button type="submit" class="styled-button" aria-label="Calcular">Calcular</button></router-link>
</div>

<div class="map-container">
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086776376948!2d-122.41941548537805!3d37.77492977975861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c4b3bf63b%3A0x0e26b97d74c3fbc3!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1598479535569!5m2!1sen!2sus" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
</div>
</body>
  <TheFooter/>

</template>

<style scoped>
body{
  padding:20px;
  font-size: 16px;
}

.container{
  display:flex;
  flex-wrap: wrap;
  justify-content:space-between;
}

.general-information, .project-information {
  width: 48%;
}

.project-information h1 + h1 {
  margin-top: -1em;
}

.project-information {
  border-collapse: collapse;
  border-spacing: 0;
}

.general-information{
  font-size:18px;
}

.project-information table {
  width: 100%;
  padding:10px;
  border: 1px solid #FFA500;
}

.project-information th, .project-information td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.project-information tr:nth-child(even) {
  background-color: #f2f2f2;
}

.title{
  padding-bottom: 10px;
  color:#FFA500;
  font-weight: bold;
  font-size: 25px;
}

.price{
  color:#FFA500;
  padding: 10px;
}

.price-text{
  padding:20px;
  padding-left:0;
}

.description{
  width: 48%;
}

.description h1{
  color: #FFA500;
  font-size: 25px;
  margin:0;
  padding:0;
}

.description-text{
  font-size: 20px;
}

.project-information h1{
  color: #FFA500;
  font-size: 25px;
}

.button-calculate{
  padding:20px;
  padding-left: 18%;
}

.styled-button {
  background-color: #FFA500;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

.styled-button:hover {
  background-color: #DD9E2B;
}
.map-container {
  width: 100%;
  height: 500px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.map-container iframe {
  padding:20px;
  width: 80%;
  height: 100%;
  border: none;
}

@media screen and (min-width: 768px) {
  .general-information, .project-information, .description {
    width: 48%; /* Ancho del 48% en pantallas más grandes */
  }

  .description {
    margin-right: 2%; /* Espacio entre .description y .project-information */
  }

  .map-container {
    width: 100%;
    height: 500px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .map-container iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
}

@media screen and (max-width: 767px) {
  .button-calculate {
    padding: 15px 20px; /* Ajustar el tamaño del botón para dispositivos pequeños */
    padding-left: 0;
  }
}

@media screen and (max-width: 767px) {
  /* Reducir el padding del botón de calcular */
  .button-calculate {
    padding: 15px 20px;
    padding-left: 0;
  }

  /* Reducir el tamaño de la fuente en la tabla */
  .project-information table {
    font-size: 14px;
  }
}

@media screen and (max-width: 767px) {
  .container {
    flex-direction: column; /* Cambiar a dirección de columna */
  }

  /* Ajustar el ancho de los elementos en pantallas pequeñas */
  .general-information, .project-information, .description {
    width: 100%; /* Ancho completo en pantallas pequeñas */
    margin-bottom: 20px; /* Agregar margen inferior para separar los elementos */
  }

  /* Estilos adicionales para otros elementos en pantallas pequeñas */
}
</style>