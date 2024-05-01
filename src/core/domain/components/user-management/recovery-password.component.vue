<script setup>
import {ref} from "vue";

const username = ref('');
const password = ref('');

</script>

<template>
  <body>
  <div class="head-content">
    <h1>¿Perdiste tu contraseña?</h1>
  </div>
  <div class="input-container">
    <pv-floatLabel class="p-float-label">
      <pv-InputText id="username"  v-model="username"/>
      <label for="username">Username</label>
    </pv-floatLabel>
    <pv-floatLabel>
      <pv-InputText id="password"  v-model="password"/>
      <label for="password">Password</label>
    </pv-floatLabel>
    <pv-button label="Recuperar Contraseña" class="custom-button"></pv-button>
  </div>

  <div class="link-container">
    <pv-button label="Contáctanos" class="custom-button"></pv-button>
  </div>
  </body>
</template>

<style scoped>
body{
  margin:0;
  padding:0;
  background-color:white;
}

.head-content {
  text-align: center;
  background-color: #03145c;
  padding: 15px;
  border-radius: 10px;
  width:80%;
  margin: 0 auto;
}

h1{
  color: white;
}


.input-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.p-float-label {
  margin-bottom: 22px;
}


.link-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
}

@media screen and (max-width: 600px) {
  .link-container {
    flex-direction: column;
    align-items: center;
  }
}

.custom-button{
  background-color:#FFA500;
  border-color:#FFA500;
}
</style>