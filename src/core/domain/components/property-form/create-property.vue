<script>

import RetraceToolbar from "@/core/shared/components/retrace-toolbar.component.vue";
import TheFooter from "@/core/public/components/the-footer.component.vue";
import {PropertyApiService} from "@/core/public/services/property-api.service.js";


export default {
  components: { RetraceToolbar, TheFooter },
  data() {
    return {
      id_propiedad: '',
      titulo: '',
      imagen: '',
      descripcion: '',
      precio_dolares: '',
      tipo_propiedad: '',
      operacion: '',
      entrega: '',
      area_techada_metros_cuadrados: '',
      area_total_metros_cuadrados: '',
      cantidad_dormitorios: '',
      cantidad_banios: '',
      cantidad_estacionamientos: '',
      estado_venta: 'Disponible',
      etapa_proyecto: '',
      fecha_inicio_proyecto: '',
      antiguedad: '',
      anunciantes_id_anunciante: '',
      ubicaciones_id_ubicacion: '',
      distrito: '',
      propertyApiService : new PropertyApiService()
    }
  },
  methods: {
    async create() {
      const body = {
        id_propiedad: this.id_propiedad,
        titulo: this.titulo,
        imagen: this.imagen,
        descripcion: this.descripcion,
        precio_dolares: this.precio_dolares,
        tipo_propiedad: this.tipo_propiedad,
        operacion: this.operacion,
        entrega: this.entrega,
        area_techada_metros_cuadrados: this.area_techada_metros_cuadrados,
        area_total_metros_cuadrados: this.area_total_metros_cuadrados,
        cantidad_dormitorios: this.cantidad_dormitorios,
        cantidad_banios: this.cantidad_banios,
        cantidad_estacionamientos: this.cantidad_estacionamientos,
        estado_venta: this.estado_venta,
        etapa_proyecto: this.etapa_proyecto,
        fecha_inicio_proyecto: this.fecha_inicio_proyecto,
        antiguedad: this.antiguedad,
        anunciantes_id_anunciante: this.anunciantes_id_anunciante,
        ubicaciones_id_ubicacion: this.ubicaciones_id_ubicacion,
        distrito: this.distrito
      }

      const response = await this.propertyApiService.postProperty(body)

      if(response.status === 201)
        alert('Property created');
      else
        alert('Error creating Property')
    }
  }
}


</script>

<template>
  <RetraceToolbar />

  <div class="container">
    <h2 class="title">Publica un Nuevo Anuncio</h2>

    <div class="form-container">

      <div class="form-group">
        <label for="id_propiedad" aria-label="ID de Propiedad">ID de Propiedad:</label>
        <input type="text" id="id_propiedad" v-model="this.id_propiedad" required aria-labelledby="id_propiedad">
      </div>

      <div class="form-group">
        <label for="titulo" aria-label="Título">Título:</label>
        <input type="text" id="titulo" v-model="this.titulo" required aria-labelledby="titulo">
      </div>

      <div class="form-group">
        <label for="imagen" aria-label="URL de la Imagen">URL de la Imagen:</label>
        <input type="url" id="imagen" v-model="this.imagen" required aria-labelledby="imagen">
      </div>

      <div class="form-group">
        <label for="descripcion" aria-label="Descripción">Descripción:</label>
        <textarea id="descripcion" v-model="this.descripcion" rows="4" required aria-labelledby="descripcion"></textarea>
      </div>

      <div class="form-group">
        <label for="precio_dolares" aria-label="Precio en Dólares">Precio en Dólares:</label>
        <input type="number" id="precio_dolares" v-model.number="this.precio_dolares" step="0.01" required aria-labelledby="precio_dolares">
      </div>

      <div class="form-group">
        <label for="tipo_propiedad" aria-label="Tipo de Propiedad">Tipo de Propiedad:</label>
        <select id="tipo_propiedad" v-model="this.tipo_propiedad" required aria-labelledby="tipo_propiedad">
          <option value="Casa">{{$t('searchInput.selectType1')}}</option>
          <option value="Departamento">{{$t('searchInput.selectType2')}}</option>
          <option value="Local Comercial">{{$t('searchInput.selectType3')}}</option>
          <option value="Penthouse">{{$t('searchInput.selectType4')}}</option>
          <option value="Oficina">{{$t('searchInput.selectType5')}}</option>
          <option value="Terreno">{{$t('searchInput.selectType6')}}</option>
          <option value="Local Industrial">{{$t('searchInput.selectType7')}}</option>
          <option value="Casa de Playa">{{$t('searchInput.selectType8')}}</option>
        </select>
      </div>

      <div class="form-group">
        <label for="operacion" aria-label="Operación">Operación:</label>
        <select id="operacion" v-model="this.operacion" required aria-labelledby="operacion">
          <option value="Venta">Santiago de Surco</option>
          <option value="Alquiler">Miraflores</option>
        </select>
      </div>

      <div class="form-group">
        <label for="entrega" aria-label="Entrega">Entrega:</label>
        <input type="text" id="entrega" v-model="this.entrega" required aria-labelledby="entrega">
      </div>

      <div class="form-group">
        <label for="area_techada_metros_cuadrados" aria-label="Área Techada (m²)">Área Techada (m²):</label>
        <input type="number" id="area_techada_metros_cuadrados" v-model.number="this.area_techada_metros_cuadrados" required aria-labelledby="area_techada_metros_cuadrados">
      </div>

      <div class="form-group">
        <label for="area_total_metros_cuadrados" aria-label="Área Total (m²)">Área Total (m²):</label>
        <input type="number" id="area_total_metros_cuadrados" v-model.number="this.area_total_metros_cuadrados" required aria-labelledby="area_total_metros_cuadrados">
      </div>

      <div class="form-group">
        <label for="cantidad_dormitorios" aria-label="Cantidad de Dormitorios">Cantidad de Dormitorios:</label>
        <input type="number" id="cantidad_dormitorios" v-model.number="this.cantidad_dormitorios" step="1" required aria-labelledby="cantidad_dormitorios">
      </div>

      <div class="form-group">
        <label for="cantidad_banios" aria-label="Cantidad de Baños">Cantidad de Baños:</label>
        <input type="number" id="cantidad_banios" v-model.number="this.cantidad_banios" step="1" required aria-labelledby="cantidad_banios">
      </div>

      <div class="form-group">
        <label for="cantidad_estacionamientos" aria-label="Cantidad de Estacionamientos">Cantidad de Estacionamientos:</label>
        <input type="number" id="cantidad_estacionamientos" v-model.number="this.cantidad_estacionamientos" step="1" required aria-labelledby="cantidad_estacionamientos">
      </div>

      <div class="form-group">
        <label for="etapa_proyecto" aria-label="Etapa del Proyecto">Etapa del Proyecto:</label>
        <select id="etapa_proyecto" v-model="this.etapa_proyecto" required aria-labelledby="etapa_proyecto">
          <option value="Terminado">Terminado</option>
          <option value="En construcción">En construcción</option>
          <option value="Preventa">Preventa</option>
          <option value="Lanzamiento">Lanzamiento</option>
          <option value="Planos aprobados">Planos aprobados</option>
          <option value="En diseño">En diseño</option>
        </select>
      </div>

      <div class="form-group">
        <label for="fecha_inicio_proyecto" aria-label="Fecha de Inicio del Proyecto">Fecha de Inicio del Proyecto:</label>
        <input type="date" id="fecha_inicio_proyecto" v-model="this.fecha_inicio_proyecto" required aria-labelledby="fecha_inicio_proyecto">
      </div>

      <div class="form-group">
        <label for="antiguedad" aria-label="Antigüedad">Antigüedad:</label>
        <input type="text" id="antiguedad" v-model="this.antiguedad" required aria-labelledby="antiguedad">
      </div>

      <div class="form-group">
        <label for="anunciantes_id_anunciante" aria-label="ID de Anunciante">ID de Anunciante:</label>
        <input type="text" id="anunciantes_id_anunciante" v-model="this.anunciantes_id_anunciante" required aria-labelledby="anunciantes_id_anunciante">
      </div>

      <div class="form-group">
        <label for="ubicaciones_id_ubicacion" aria-label="ID de Ubicación">ID de Ubicación:</label>
        <input type="text" id="ubicaciones_id_ubicacion" v-model="this.ubicaciones_id_ubicacion" required aria-labelledby="ubicaciones_id_ubicacion">
      </div>

      <div class="form-group">
        <label for="distrito" aria-label="Distrito">{{$t('searchInput.selectDefaultDistrict')}}:</label>
        <select id="distrito" v-model="this.distrito" required aria-labelledby="distrito">
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
      </div>

      <button @click="create()">Guardar</button>

    </div>
  </div>

  <TheFooter />
</template>

<style scoped>
.container {
  background-color: #ffffff;
  padding: 20px;
  text-align: center;
}

.title {
  margin-top: 0;
  color: black;
  font-weight: normal;
  font-size: 2rem;
}

.form-container {
  border: 2px solid #000000;
  padding: 30px;
  max-width: 600px;
  margin: 0 auto;
  border-radius: 50px;
}

.form-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
}

.readonly .result {
  background-color: transparent;
  border: none;
  padding: 0;
  font-weight: bold;
}

label {
  width: 100%;
  text-align: left;
  margin-bottom: 5px;
}

input, select {
  width: 100%;
  padding: 10px;
}

button {
  width: 100%;
  padding: 10px;
}
</style>