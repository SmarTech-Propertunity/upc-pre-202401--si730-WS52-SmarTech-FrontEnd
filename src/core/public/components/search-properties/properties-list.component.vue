<script setup >
import { PropertyApiService } from "@/core/public/services/property-api.service.js";
import { ref, onMounted } from 'vue';
import RetraceToolbar from "@/core/shared/components/retrace-toolbar.component.vue";
import TheFooter from "@/core/public/components/the-footer.component.vue";

const properties = ref([]);
const propertyDistrict = ref("");
const propertyType = ref("");
const maxvalue = ref(null);
const minvalue = ref(null);

onMounted(async () => {
  const response = await PropertyApiService.getAll();
  properties.value = response.data;
  console.log(properties.value);
})

async function filtered() {
  properties.value = [];
  console.log(minvalue.value,
      maxvalue.value,
      propertyType.value,
      propertyDistrict.value);
  const response = await PropertyApiService.getFiltered(
      minvalue.value,
      maxvalue.value,
      propertyType.value,
      propertyDistrict.value
  );
  properties.value = response.data;
  console.log(properties.value);
}
</script>

<template>
  <RetraceToolbar/>
  <div class="search">
    <div class="search-bar" role="search">

      <select v-model="propertyDistrict" aria-label="Opciones de distritos">
        <option value="" disabled selected hidden>{{$t('searchInput.selectDefaultDistrict')}}</option>
        <option value="Santiago de Surco">Santiago de Surco</option>
        <option value="Miraflores">Miraflores</option>
        <option value="San Isidro">San Isidro</option>
        <option value="Barranco">Barranco</option>
        <option value="San Borja">San Borja</option>
        <option value="Huaraz">Huaraz</option>
        <option value="Callao">Callao</option>
        <option value="Jesus Maria">Jesus Maria</option>
        <option value="Asia">Asia</option>
        <option value="Camaná">Camaná</option>
      </select>

      <select v-model="propertyType" aria-label="Opciones de tipo de propiedad">
        <option value="" disabled selected hidden>{{$t('searchInput.selectDefaultType')}}</option>
        <option value="Casa">{{$t('searchInput.selectType1')}}</option>
        <option value="Departamento">{{$t('searchInput.selectType2')}}</option>
        <option value="Local Comercial">{{$t('searchInput.selectType3')}}</option>
        <option value="Penthouse">{{$t('searchInput.selectType4')}}</option>
        <option value="Oficina">{{$t('searchInput.selectType5')}}</option>
        <option value="Terreno">{{$t('searchInput.selectType6')}}</option>
        <option value="Local Industrial">{{$t('searchInput.selectType7')}}</option>
        <option value="Casa de Playa">{{$t('searchInput.selectType8')}}</option>
      </select>

      <img src="https://cdn-icons-png.flaticon.com/512/3388/3388744.png" alt="icono de filtro">
      <input class="filter-input" type="number" v-model="minvalue" v-bind:placeholder="$t('searchInput.filterInputMin')" aria-label="Precio mínimo de busqueda">
      <input class="filter-input" type="number" v-model="maxvalue" v-bind:placeholder="$t('searchInput.filterInputMax')" aria-label="Precio máximo de busqueda">
      <a @click="filtered()" aria-label="Busqueda filtrada"><img src="https://www.freeiconspng.com/uploads/magnifying-glass-icon-13.png" alt="icono de lupa que inicia la busqueda al ser clikeado" /></a>
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
                <router-link :to="`/property/${property.id_propiedad - 1}`">
                  <img :src="property.imagen" alt="imagen de propiedad">
                </router-link>
              </div>
              <div class="card-content">
                <!--<h3>{{property.id_propiedad}}</h3>-->
                <h3>{{ property.titulo }}</h3>
                <div class="card-content-row">
                  <img src="https://icons.veryicon.com/png/o/business/business-finance/coin-10.png" alt="icono de moneda" > {{ $t('searchResult.cardContent1') }} {{property.precio_dolares}} <br>
                </div>
                <div class="card-content-row">
                  <img src="https://www.iconpacks.net/icons/1/free-pin-icon-48-thumb.png" alt="icono de ubicacion" > {{ $t('searchResult.cardContent2') }} {{property.distrito}}
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>

    </div>
  </div>

  <TheFooter />

</template>

<style scoped>
.search{
  margin: 3rem;
  color: black;
  font-family: Lato, sans-serif;
  padding-bottom: 0.5rem;
}
.search-bar{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  border: 1px solid black;
  border-radius: 25px;
  width: 100%;

}
::placeholder {
  color: #858585;
}

.filter-input{
  border: 1px solid black;
  border-radius: 25px;
  color: black;
  background-color: white;
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
  border: 1px solid black;
  border-radius: 25px;
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
  color: #FFA500;
  border-top: 2px solid;
  border-bottom: 2px solid;
}
.title h1{
  padding: 10px;
}
.search-results{
  margin: 2rem;
}
.search-result-bar{
  background-color: #FFA500;
  border-radius: 25px;
}
.search-result-bar h3 {
  margin: 10px;
  margin-bottom: 0;
  padding: 2px;
}

a{
  text-decoration: none;
}
.search-result-content{
  margin:0;
  padding:0;
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
  border-style: none;
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
  height: auto;
  border-radius: 25px;
}
.card-content {
  padding: 1rem;
  background-color: #ddd;
  font-size: 25px;
  color: black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.card-content img{
  width: 30px;
}
</style>