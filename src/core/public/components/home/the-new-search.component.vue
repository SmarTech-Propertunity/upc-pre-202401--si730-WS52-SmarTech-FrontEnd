<script>
import { useRouter } from 'vue-router'
import {ref} from "vue";

export default {
  setup() {
    const router = useRouter();

    const propertyDistrict = ref("");
    const propertyType = ref("");
    const maxvalue = ref(null);
    const minvalue = ref(null);

    const navegateToSearch = () => {
      router.push({
        name: 'SearchComponent',
        params: {
          propertyDistrict: propertyDistrict.value,
          propertyType: propertyType.value,
          minvalue: minvalue.value,
          maxvalue: maxvalue.value
        }
      });
    };

    return { propertyDistrict, propertyType, minvalue, maxvalue, navegateToSearch };
  }
}
</script>


<template>
  <div class="search-container">
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

      <!-- Enlace para la búsqueda filtrada -->
     <!-- <a @click="navegateToSearch" aria-label="Busqueda filtrada">-->
      <router-link to="/search">
        <img src="https://www.freeiconspng.com/uploads/magnifying-glass-icon-13.png" alt="icono de lupa que inicia la busqueda al ser clikeado" />
      </router-link>
      <!--</a>-->

    </div>
  </div>
</template>

<style scoped>
.search-container{
  margin: 3rem;
  border: 1px solid black;
  border-radius: 25px;
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
</style>