<template>
  <nav class="navbar">
    <div class="navbar-left">
      <router-link to="/home" class="navbar-logo">SmarTech</router-link>
      <router-link to="/home" class="navbar-link">Inicio</router-link>
      <router-link to="/properties" class="navbar-link">Propiedades</router-link>
      <router-link v-if="user && user.role === 'AGENT'" to="/publish-property" class="navbar-link">Publicar propiedad</router-link>
    </div>
    <div class="navbar-right">
      <router-link to="/notifications" class="navbar-icon">
        <span class="material-icons">notifications</span>
      </router-link>
      <router-link to="/profile" class="navbar-icon">
        <span class="material-icons">account_circle</span>
      </router-link>
      <button class="navbar-link logout-btn" @click="logout">Cerrar sesión</button>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      user: JSON.parse(localStorage.getItem('user'))
    };
  },
  methods: {
    logout() {
      localStorage.removeItem('user');
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped>
.navbar {
  width: 100%;
  height: 64px;
  background: linear-gradient(90deg, #03145c 0%, #0bc7da 100%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  position: sticky;
  top: 0;
  z-index: 100;
}
.navbar-left {
  display: flex;
  align-items: center;
}
.navbar-logo {
  font-size: 1.6em;
  font-weight: bold;
  color: #fff;
  margin-right: 32px;
  text-decoration: none;
  letter-spacing: 2px;
}
.navbar-link {
  color: #fff;
  margin-right: 24px;
  text-decoration: none;
  font-size: 1em;
  font-weight: 500;
  transition: color 0.2s;
}
.navbar-link:hover {
  color: #03145c;
  background: #fff;
  border-radius: 8px;
  padding: 6px 12px;
}
.navbar-right {
  display: flex;
  align-items: center;
}
.navbar-icon {
  color: #fff;
  margin-right: 18px;
  font-size: 1.5em;
  text-decoration: none;
  display: flex;
  align-items: center;
}
.material-icons {
  font-family: 'Material Icons';
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  direction: ltr;
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
}
.logout-btn {
  background: transparent;
  border: none;
  color: #fff;
  font-size: 1em;
  font-weight: 500;
  cursor: pointer;
  margin-left: 12px;
  transition: color 0.2s;
}
.logout-btn:hover {
  color: #03145c;
  background: #fff;
  border-radius: 8px;
  padding: 6px 12px;
}
@media screen and (max-width: 768px) {
  .navbar {
    padding: 0 10px;
    height: 56px;
  }
  .navbar-logo {
    font-size: 1.2em;
    margin-right: 16px;
  }
  .navbar-link {
    margin-right: 12px;
    font-size: 0.95em;
  }
  .navbar-icon {
    margin-right: 10px;
    font-size: 1.2em;
  }
}
</style>
