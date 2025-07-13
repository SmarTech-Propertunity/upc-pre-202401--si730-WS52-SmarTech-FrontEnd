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
    <button class="appointment-btn" @click="showDialog = true">Agendar una cita</button>

    <div v-if="showDialog" class="dialog-overlay">
      <div class="dialog-box">
        <h3>Agendar una cita</h3>
        <form @submit.prevent="submitAppointment">
          <label>Agente:
            <input type="text" :value="property.agentName" disabled />
          </label>
          <label>Adquirente:
            <input type="text" :value="loggedUserName" disabled />
          </label>
          <label>Propiedad:
            <input type="text" :value="property.title" disabled />
          </label>
          <label>Fecha:
            <input type="datetime-local" v-model="appointment.date" required :min="minDateTime" :max="maxDateTime" />
          </label>
          <label>Lugar:
            <input type="text" :value="property.location" disabled />
          </label>
          <div class="dialog-actions">
            <button type="submit" class="save-btn">Agendar</button>
            <button type="button" class="cancel-btn" @click="showDialog = false">Cancelar</button>
          </div>
        </form>
        <div v-if="appointmentSuccess" class="success-msg">¡Cita agendada exitosamente!</div>
        <div v-if="appointmentError" class="error-msg">Error al agendar la cita. Intenta nuevamente.</div>
      </div>
    </div>
  </div>
  <div v-else>
    <p>Cargando información de la propiedad...</p>
  </div>
</template>

<script>
import { getPropertyById } from '../services/property.api.service.js';
import { getAgentById } from '../../profiles/services/agent.api.service.js';
import { getUserById } from '../../user-management/services/user.api.service.js';
import { createAppointment } from '../../appointment/services/appointment.api.service.js';

export default {
  data() {
    // min y max para el input datetime-local (hoy entre 08:00 y 20:00)
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const minDateTime = `${yyyy}-${mm}-${dd}T08:00`;
    const maxDateTime = `${yyyy}-${mm}-${dd}T20:00`;
    return {
      property: null,
      showDialog: false,
      appointment: {
        agentId: '',
        acquireId: '',
        date: '',
        propertyId: '',
        place: ''
      },
      appointmentSuccess: false,
      appointmentError: false,
      loggedUserName: '',
      minDateTime,
      maxDateTime
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
    this.appointment.propertyId = id;
    this.appointment.agentId = this.property.agentId;
    this.appointment.place = prop.location;
    const user = this.getLoggedUser();
    this.appointment.acquireId = user ? user.id : '';
    this.loggedUserName = user ? (user.name || user.username || user.email || user.id) : '';
    // Obtener nombre del agente desde el user vinculado al agent
    if (this.property.agentId) {
      try {
        let agent = await getAgentById(Number(this.property.agentId));
        // Fix: reviews y salesHistory siempre array
        agent = {
          ...agent,
          reviews: Array.isArray(agent.reviews) ? agent.reviews : [],
          salesHistory: Array.isArray(agent.salesHistory) ? agent.salesHistory : []
        };
        if (agent && agent.userId) {
          const agentUser = await getUserById(Number(agent.userId));
          this.property.agentName = agentUser?.name || agentUser?.username || agentUser?.email || agentUser?.id;
        } else {
          this.property.agentName = agent?.id;
        }
      } catch {
        this.property.agentName = this.property.agentId;
      }
    }
  },
  methods: {
    getLoggedUser() {
      try {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : null;
      } catch {
        return null;
      }
    },
    async submitAppointment() {
      this.appointmentSuccess = false;
      this.appointmentError = false;
      // Validar hora entre 8am y 8pm
      const date = new Date(this.appointment.date);
      const hour = date.getHours();
      if (hour < 8 || hour > 20) {
        this.appointmentError = true;
        return;
      }
      try {
        await createAppointment({
          agentId: Number(this.appointment.agentId),
          acquireId: Number(this.appointment.acquireId),
          date: this.appointment.date,
          propertyId: Number(this.appointment.propertyId),
          place: this.appointment.place
        });
        this.appointmentSuccess = true;
        setTimeout(() => {
          this.showDialog = false;
          this.appointmentSuccess = false;
        }, 1500);
      } catch (e) {
        this.appointmentError = true;
      }
    }
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
/* Estilos para el dialog de cita */
.appointment-btn {
  margin-top: 18px;
  background: #03145c;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 10px 24px;
  font-weight: bold;
  cursor: pointer;
}
.appointment-btn:hover {
  background: #0bc7da;
}
.dialog-overlay {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}
.dialog-box {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  padding: 32px 24px;
  min-width: 320px;
  max-width: 90vw;
}
.dialog-box h3 {
  margin-top: 0;
  margin-bottom: 18px;
  color: #03145c;
}
.dialog-box label {
  display: block;
  margin-bottom: 12px;
  color: #222;
}
.dialog-box input {
  width: 100%;
  padding: 8px;
  border-radius: 6px;
  border: 1px solid #ccc;
  margin-top: 4px;
  margin-bottom: 8px;
}
.dialog-actions {
  display: flex;
  gap: 12px;
  margin-top: 18px;
}
.save-btn {
  background: #0bc7da;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 8px 20px;
  font-weight: bold;
  cursor: pointer;
}
.save-btn:hover {
  background: #03145c;
}
.cancel-btn {
  background: #eee;
  color: #03145c;
  border: none;
  border-radius: 8px;
  padding: 8px 20px;
  font-weight: bold;
  cursor: pointer;
}
.cancel-btn:hover {
  background: #ccc;
}
.success-msg {
  color: #0bc7da;
  margin-top: 16px;
  font-weight: bold;
}
.error-msg {
  color: #d32f2f;
  margin-top: 16px;
  font-weight: bold;
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
