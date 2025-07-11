
<template>
  <navbar-component />
  <div class="home-content">
    <div class="welcome">
      <h1>Bienvenido a SmarTech</h1>
      <p>La plataforma para encontrar, publicar y gestionar propiedades de forma ágil y segura.</p>
    </div>

    <div class="profile-summary" v-if="user">
      <img :src="user.profilePhoto" alt="Foto de perfil" class="profile-photo" />
      <div>
        <h2>{{ user.name }}</h2>
        <span class="role">Rol: {{ user.role }}</span>
      </div>
    </div>

    <div class="quick-actions">
      <button v-if="user && user.role === 'AGENT'" class="publish-btn" @click="$router.push('/publish-property')">
        Publicar propiedad
      </button>
    </div>

    <div class="search-section">
      <h3>Buscar propiedades</h3>
      <form @submit.prevent="searchProperties">
        <input v-model="search.location" placeholder="Ubicación" />
        <input v-model.number="search.price" type="number" placeholder="Precio máximo" />
        <select v-model="search.type">
          <option value="">Tipo</option>
          <option value="Casa">Casa</option>
          <option value="Departamento">Departamento</option>
          <option value="Local Comercial">Local Comercial</option>
          <option value="Penthouse">Penthouse</option>
          <option value="Oficina">Oficina</option>
          <option value="Terreno">Terreno</option>
        </select>
        <input v-model.number="search.rooms" type="number" min="1" placeholder="Habitaciones" />
        <button type="submit">Buscar</button>
      </form>
    </div>

    <div class="properties-section">
      <h3>Propiedades destacadas</h3>
      <div class="properties-list">
        <div v-for="property in properties" :key="property.id" class="property-card" @click="goToProperty(property.id)" style="cursor:pointer;">
          <img :src="property.images && property.images[0]" alt="Imagen propiedad" class="property-img" />
          <h4>{{ property.title }}</h4>
          <p>{{ property.location }} - ${{ property.price }}</p>
          <span>{{ property.rooms }} habitaciones</span>
        </div>
      </div>
    </div>

    <div class="notifications-section" v-if="notifications.length">
      <h3>Notificaciones recientes</h3>
      <ul>
        <li v-for="notif in notifications" :key="notif.id">
          <span :class="{ unread: !notif.isRead }">{{ notif.message }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import NavbarComponent from '../../../shared/components/navbar.component.vue';
import { getAllProperties } from '../../../domain/components/properties/services/property.api.service.js';
import { getAllNotifications } from '../../../domain/components/notifications/services/notification.api.service.js';

export default {
  components: {
    NavbarComponent
  },
  data() {
    return {
      user: JSON.parse(localStorage.getItem('user')),
      properties: [],
      notifications: [],
      search: {
        location: '',
        price: '',
        type: '',
        rooms: ''
      }
    };
  },
  async mounted() {
    await this.loadProperties();
    await this.loadNotifications();
  },
  methods: {
    async loadProperties() {
      let props = await getAllProperties();
      // Fix: features e images siempre array
      props = props.map(p => ({
        ...p,
        features: Array.isArray(p.features) ? p.features : [],
        images: Array.isArray(p.images) ? p.images : []
      }));
      // Destacadas: las más nuevas (simulado por id descendente)
      props = props.sort((a, b) => b.id - a.id).slice(0, 6);
      this.properties = props;
    },
    async loadNotifications() {
      if (!this.user) return;
      let notifs = await getAllNotifications();
      // Solo notificaciones del usuario actual, las más recientes primero
      notifs = notifs.filter(n => n.userId === this.user.id).sort((a, b) => b.id - a.id).slice(0, 5);
      this.notifications = notifs;
    },
    async searchProperties() {
      let props = await getAllProperties();
      // Fix: features e images siempre array
      props = props.map(p => ({
        ...p,
        features: Array.isArray(p.features) ? p.features : [],
        images: Array.isArray(p.images) ? p.images : []
      }));
      if (this.search.location) {
        props = props.filter(p => p.location && p.location.toLowerCase().includes(this.search.location.toLowerCase()));
      }
      if (this.search.price) {
        props = props.filter(p => p.price <= this.search.price);
      }
      if (this.search.type) {
        props = props.filter(p => p.title && p.title.toLowerCase().includes(this.search.type.toLowerCase()));
      }
      if (this.search.rooms) {
        props = props.filter(p => p.rooms == this.search.rooms);
      }
      this.properties = props;
    },
    goToProperty(id) {
      this.$router.push({ path: `/property/${id}` });
    }
  }
};
</script>

<style scoped>
.home-content {
  margin-top: 80px;
  padding: 0 20px;
}
.welcome {
  text-align: center;
  margin-bottom: 30px;
}
.profile-summary {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
  background: #f7f7f7;
  border-radius: 16px;
  padding: 16px 24px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}
.profile-photo {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #0bc7da;
}
.role {
  color: #0bc7da;
  font-weight: bold;
}
.quick-actions {
  text-align: right;
  margin-bottom: 20px;
}
.publish-btn {
  background: linear-gradient(90deg, #03145c 0%, #0bc7da 100%);
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 10px 24px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
}
.publish-btn:hover {
  background: #03145c;
}
.search-section {
  margin-bottom: 30px;
  background: #f7f7f7;
  border-radius: 16px;
  padding: 16px 24px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}
.search-section form {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;
}
.search-section input,
.search-section select {
  padding: 8px;
  border-radius: 6px;
  border: 1px solid #ccc;
}
.search-section button {
  background: #0bc7da;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 8px 16px;
  font-weight: bold;
  cursor: pointer;
}
.properties-section {
  margin-bottom: 30px;
}
.properties-list {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}
.property-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  padding: 16px;
  width: 220px;
  text-align: center;
}
.property-img {
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
}
.notifications-section {
  background: #f7f7f7;
  border-radius: 16px;
  padding: 16px 24px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  margin-bottom: 30px;
}
.notifications-section ul {
  list-style: none;
  padding: 0;
}
.notifications-section li {
  margin-bottom: 8px;
}
.unread {
  font-weight: bold;
  color: #03145c;
}
@media screen and (max-width: 768px) {
  .properties-list {
    flex-direction: column;
    align-items: center;
  }
  .profile-summary {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
