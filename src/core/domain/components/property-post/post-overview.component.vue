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


  <div>{{this.properties[id].imagen}}</div>
  <img :src="this.properties[id].imagen">



  <div class="title">{{this.properties[id].titulo}}</div>
  <img :src="this.properties[id].imagen">
  <div>Descripción: {{this.properties[id].descripcion}}</div>
  <div>Precio en dólares: {{this.properties[id].precio_dolares}}$</div>
  <div>Tipo de propiedad: {{this.properties[id].tipo_propiedad}}</div>
  <div>En {{this.properties[id].operacion}}</div>
  <div>Entrega: {{this.properties[id].entrega}}</div>
  <div>Área techada: {{this.properties[id].area_techada_metros_cuadrados}} m²</div>
  <div>Área total: {{this.properties[id].area_total_metros_cuadrados}} m²</div>
  <div>Cantidad de dormitorios: {{this.properties[id].cantidad_dormitorios}}</div>
  <div>Cantidad de baños: {{this.properties[id].cantidad_banios}}</div>
  <div>Cantidad de estacionamientos: {{this.properties[id].cantidad_estacionamientos}}</div>
  <div>Estado de venta: {{this.properties[id].estado_venta}}</div>
  <div>Etapa del proyecto: {{this.properties[id].etapa_proyecto}}</div>
  <div>Fecha de inicio del proyecto: {{this.properties[id].fecha_inicio_proyecto}}</div>
  <div>Antigüedad: {{this.properties[id].antiguedad}}</div>
  <router-link to="/calculator">  <button type="submit" aria-label="Calcular">Calcular</button></router-link>



  <TheFooter/>



</template>

<style scoped>
.title{
  padding: 10px;
}
</style>