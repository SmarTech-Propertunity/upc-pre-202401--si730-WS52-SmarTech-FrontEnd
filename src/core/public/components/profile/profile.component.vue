<script setup>
import {onMounted, ref} from "vue";
import RetraceToolbar from "@/core/shared/components/retrace-toolbar.component.vue";
import TheFooter from "@/core/public/components/the-footer.component.vue";
import { UserApiService } from "@/core/public/services/user-api.service.js";

const user = ref([]);

onMounted(async () => {
  const response = await UserApiService.getUserById(user);
  user.value = response.data;
  console.log(user.value);
})

</script>


<template>

  <RetraceToolbar/>
  <div class="background">
    <div class="container">
      <div class="perfil">
        <div class="user-info">
          <div class="images">
            <img class="user-image" src="https://www.pikpng.com/pngl/b/80-805068_my-profile-icon-blank-profile-picture-circle-clipart.png" alt="imagen del usuario">
          </div>
          <div class="info">
            <h2>Perfil</h2>
            <!--<h2>{{ user[0].firstName }}  {{ user[0].LastName }}</h2>-->
            <router-link :to="`/`">
              <button on-click="ro">Cerrar Sesión</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>

  <TheFooter />
</template>

<style scoped>

header img {
  width: 30px;
  height: 30px;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

.perfil {
  width: 100%;
  max-width: 1200px;
  background-color: #ADD8E6;
  border-radius: 25px;
  margin: 1rem;
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
}

.user-info {
  display: flex;
  flex: 1 1 100%;
  align-items: center;
  padding: 1rem;
}

.images {
  display: flex;
  justify-content: center;
  flex: 1;
  margin: 1rem;
  padding: 1rem;
}

.user-image {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 2rem;
}

.info {
  flex: 3;
  margin-left: 1rem;
}

.info h3 {
  background-color: #d9d9d9;
  border-radius: 25px;
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.info button {
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 25px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 0.5rem;
}

.informacion-banner h2 {
  color: white;
  font-weight: 300;
  font-size: 1.5rem;
}


.record button {
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 25px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  margin-left: auto;
}


.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.form-group input {
  width: 100%;
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid #ccc;
}

button[type="submit"] {
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
}

@media (min-width: 768px) {
  .perfil {
    flex-direction: row;
  }

  .info {
    margin-left: 2rem;
  }

  .achivements img,
  .record button {
    margin-left: auto;
  }
}

@media (min-width: 1024px) {
  .perfil {
    flex-direction: row;
  }

  .images {
    justify-content: flex-start;
  }

  .info {
    margin-left: 3rem;
  }

  .achivements img,
  .record button {
    margin-left: auto;
  }
}
</style>