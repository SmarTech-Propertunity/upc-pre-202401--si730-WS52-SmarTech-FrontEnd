<template>
  <div>
    <Navbar />
    <div class="list-property-container">
      <h2 class="list-title">Propiedades disponibles</h2>
      <div v-if="properties.length" class="property-list">
        <div v-for="property in properties" :key="property.id" class="property-card">
          <img v-if="property.images && property.images.length" :src="property.images[0]" alt="Imagen propiedad" class="property-img" />
          <div class="property-info">
            <h3>{{ property.title }}</h3>
            <p class="property-desc">{{ property.description }}</p>
            <p><strong>Ubicación:</strong> {{ property.location }}</p>
            <p><strong>Precio:</strong> ${{ property.price }}</p>
            <button class="view-btn" @click="$router.push(`/property/${property.id}`)">Ver detalle</button>
          </div>
        </div>
      </div>
      <div v-else class="empty-list">
        <p>No hay propiedades disponibles.</p>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/core/shared/components/navbar.component.vue';
import { getAllProperties } from '../services/property.api.service.js';

export default {
  components: { Navbar },
  data() {
    return {
      properties: []
    };
  },
  async mounted() {
    this.properties = await getAllProperties();
  }
};
</script>

<style scoped>
.list-property-container {
  max-width: 100vw;
  padding: 40px 0;
  background: #f7f9fa;
  min-height: 100vh;
}
.list-title {
  text-align: center;
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 32px;
  color: #03145c;
}
.property-list {
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 80vw;
  margin: 0 auto;
}
.property-card {
  display: flex;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  padding: 24px;
  align-items: center;
  transition: box-shadow 0.2s;
}
.property-card:hover {
  box-shadow: 0 4px 16px rgba(11,199,218,0.15);
}
.property-img {
  width: 180px;
  height: 140px;
  object-fit: cover;
  border-radius: 12px;
  margin-right: 32px;
  background: #eaeaea;
}
.property-info {
  flex: 1;
}
.property-info h3 {
  margin: 0 0 10px 0;
  font-size: 1.3em;
  color: #03145c;
}
.property-desc {
  color: #555;
  margin-bottom: 10px;
}
.view-btn {
  background: #0bc7da;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 8px 20px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 12px;
  transition: background 0.2s;
}
.view-btn:hover {
  background: #03145c;
}
.empty-list {
  text-align: center;
  color: #888;
  font-size: 1.1em;
  margin-top: 60px;
}
@media screen and (max-width: 900px) {
  .property-list {
    width: 98vw;
  }
  .property-card {
    flex-direction: column;
    align-items: flex-start;
  }
  .property-img {
    margin-right: 0;
    margin-bottom: 18px;
    width: 100%;
    height: 180px;
  }
}
</style>
