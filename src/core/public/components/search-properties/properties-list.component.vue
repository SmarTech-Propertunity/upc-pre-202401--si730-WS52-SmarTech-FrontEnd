<script setup >
import { PropertyApiService } from "@/core/public/services/property-api.service.js";
import { ref, onMounted } from 'vue';
import RetraceToolbar from "@/core/shared/components/retrace-toolbar.component.vue";

const properties = ref([]);
const search = ''; // Definición de constante search dentro de data
const maxvalue = ref(null); // Definición de constante maxvalue dentro de data
const minvalue = ref(null);

onMounted(async () => {
  const response = await PropertyApiService.getAll();
  properties.value = response.data;
  console.log(properties.value);
})

async function filtered() {
  const response = await PropertyApiService.getFiltered();
  properties.value = response.data;
  console.log(properties.value);
}
</script>

<template>
  <RetraceToolbar/>
  <div class="search">

    <div class="search-bar" role="search">
      <a @click="filtered()" aria-label="Busqueda filtrada"><img src="https://www.freeiconspng.com/uploads/magnifying-glass-icon-13.png" alt="icono de lupa que inicia la busqueda al ser clikeado" /></a>
      <input class="search-input" type="text" v-model="search" v-bind:placeholder="$t('searchInput.searchText')" aria-label="Término de búsqueda ingresada por el usuario">
      <select id="dropdown" aria-label="Opciones de tipo de propiedad">
        <option value="" disabled selected hidden>{{$t('searchInput.selectDefault')}}</option>
        <option value="Casa"> {{$t('searchInput.select1')}} </option>
        <option value="Departamento"> {{$t('searchInput.select2')}} </option>
        <option value="LocalComercial"> {{ $t('searchInput.select3') }} </option>
      </select>
      <img src="https://cdn-icons-png.flaticon.com/512/3388/3388744.png" alt="icono de filtro">
      <input class="filter-input" type="number" v-model="minvalue" v-bind:placeholder="$t('searchInput.filterInputMin')" aria-label="Precio mínimo de busqueda">
      <input class="filter-input" type="number" v-model="maxvalue" v-bind:placeholder="$t('searchInput.filterInputMax')" aria-label="Precio máximo de busqueda">
    </div>

    <div class="title">
      <h1>{{ $t('title.searchTitle') }}</h1>
    </div>

    <div class="search-results">
      <div class="search-result-bar">
        <h3> {{ $t('searchResult.searchResultBarTitle') }} </h3>
      </div>

      <div class="search-result-content">
        <ul v-for="property in properties" :key="property.id_propiedad">
          <li class="card-container" role="listitem">
            <div class="card">
              <div class="card-image">
                <router-link to="/property/1" >
                  <img :src="property.imagen" alt="imagen de propiedad">
                </router-link>
              </div>
              <div class="card-content">
                <h3>{{ property.titulo }}</h3>
                <img src="https://icons.veryicon.com/png/o/business/business-finance/coin-10.png" alt="icono de moneda" > {{ $t('searchResult.cardContent1') }} {{property.precio_dolares}} <br>
                <img src="https://www.iconpacks.net/icons/1/free-pin-icon-48-thumb.png" alt="icono de ubicacion" > {{ $t('searchResult.cardContent2') }} Av.La marina
              </div>
            </div>
          </li>
        </ul>
      </div>

    </div>
  </div>

</template>

<style scoped>
.search{
  margin: 3rem;
  background-color: #E2F1F6;
  color: black;
  font-family: Lato, sans-serif;
  padding-bottom: 0.5rem;
}
.search-bar{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;

}
::placeholder {
  color: #858585;
}
.search-input{
  color: black;
  background-color: white;
  border: none;
  margin: 10px;
  padding: 10px;
  font-size: 20px;
}
.filter-input{
  color: black;
  background-color: white;
  border: none;
  margin: 10px;
  padding: 10px;
  font-size: 20px;
  width: 150px;
}
.search-bar img{
  width: 30px;
  margin: 15px;
}
select{
  border: none;
  background-color: white;
  color: #858585;
  width: 250px;
  margin: 10px;
  padding: 10px;
  font-size: 20px;
}
.search-filter-price img{
  width: 30px;
  margin: 0;
}
.search-filter-price input{
  border: none;
  background-color: white;
  color: #858585;
  width: 200px;
  margin: 10px;
  padding: 10px;
  font-size: 20px;
}

.title{
  margin: 20px;
  text-align: center;
  background-color: #cbdde1;
}
.title h1{
  padding: 10px;
}
.search-results{
  margin: 2rem;
}
.search-result-bar{
  background-color: orange;
}
.search-result-bar h3 {
  margin: 10px;
  margin-bottom: 0px;
  padding: 2px;
}

a{
  text-decoration: none;
}
.search-result-content{
  margin:0px;
  padding:0px;
  box-sizing: border-box;
  background-color: white;
}
.card-container{
  display:flex;
  flex-direction: row;
  justify-content: center;

}
.card{
  width:90%;
  background-color: white;
  border-radius: 8px;
  margin: 20px;
  display: grid;
  grid-template-columns: 50% 50%;
}

.card-image{
  justify-content: center;
  margin: 1.5rem;
  margin-left: 50px;
}

.card-image img{
  max-width: 70%;
  min-width: 80px;
  height: auto; /* Para mantener la proporción de aspecto */
  border-style: solid;
  border-width: 3px;
  border-color: black;
}
.card-content{
  background-color: #FFA07A;
  padding: 1rem;
  font-size: 25px;
  color: black;
}
.card-content img{
  width: 30px;
}
</style>