
<template>
  <div class="property-info-container" v-if="property">
    <h2>{{ property.title }}</h2>
    <img v-if="property.images.length" :src="property.images[0]" alt="Imagen propiedad" class="property-img-large" />
    <p><strong>Descripción:</strong> {{ property.description }}</p>
    <p><strong>Ubicación:</strong> {{ property.location }}</p>
    <p><strong>Precio:</strong> ${{ property.price }}</p>
    <p><strong>Dimensiones:</strong> {{ property.dimensions }}</p>
    <p><strong>Habitaciones:</strong> {{ property.rooms }}</p>
    <div v-if="property.features.length">
      <strong>Características:</strong>
      <ul>
        <li v-for="feature in property.features" :key="feature">{{ feature }}</li>
      </ul>
    </div>
    <div v-if="property.images.length > 1">
      <strong>Imágenes adicionales:</strong>
      <div class="property-images-list">
        <img v-for="img in property.images.slice(1)" :src="img" :key="img" class="property-img-small" />
      </div>
    </div>
    <div v-if="property.metrics">
      <strong>Métricas:</strong>
      <ul>
        <li>Vistas: {{ property.metrics.views }}</li>
        <li>Clicks: {{ property.metrics.clicks }}</li>
        <li>Solicitudes de contacto: {{ property.metrics.contactRequests }}</li>
      </ul>
    </div>
    <p><strong>Estado:</strong> {{ property.isActive ? 'Activa' : 'Inactiva' }}</p>
    <button @click="$router.push('/home')">Volver</button>
  </div>
  <div v-else>
    <p>Cargando información de la propiedad...</p>
  </div>
</template>

<script>
import { getPropertyById } from '../services/property.api.service.js';

export default {
  data() {
    return {
      property: null
    };
  },
  async mounted() {
    const id = this.$route.params.id;
    const prop = await getPropertyById(Number(id));
    // Fix: features e images siempre array
    this.property = {
      ...prop,
      features: Array.isArray(prop.features) ? prop.features : [],
      images: Array.isArray(prop.images) ? prop.images : []
    };
  }
};
</script>

<style scoped>
.property-info-container {
  max-width: 600px;
  margin: 40px auto;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  padding: 32px;
}
.property-img-large {
  width: 100%;
  height: 260px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 18px;
}
.property-images-list {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}
.property-img-small {
  width: 80px;
  height: 60px;
  object-fit: cover;
  border-radius: 8px;
}
button {
  margin-top: 24px;
  background: #0bc7da;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 10px 24px;
  font-weight: bold;
  cursor: pointer;
}
button:hover {
  background: #03145c;
}
</style>
