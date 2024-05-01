<script setup>
import { ref } from 'vue';

const selectedOption = ref(null);
const dropdownOptions = ref([
  { id: 1, name: 'Anunciante' },
  { id: 2, name: 'Interesado' },
]);

const username = ref('');
const email = ref('');
const backup_mail = ref('');
const password = ref('');
const address = ref('');
const district = ref('');
const phonenumber = ref('');
</script>

<template>
  <body>
  <div class="head-content">
    <h1>Regístrate en Propertunity</h1>
  </div>

  <div class="info-content">
    <pv-floatLabel class="p-float-label">
      <pv-InputText id="username" v-model="username"/>
      <label for="username">Nombre</label>
    </pv-floatLabel>
    <pv-floatLabel class="p-float-label">
      <pv-InputText id="email" v-model="email"/>
      <label for="email">Correo Electrónico</label>
    </pv-floatLabel>
    <pv-floatLabel class="p-float-label">
      <pv-InputText id="backup_mail"  v-model="backup_mail"/>
      <label for="backup_mail">Correo de recuperación</label>
    </pv-floatLabel>
    <pv-floatLabel class="p-float-label">
      <pv-InputText id="password"  v-model="password"/>
      <label for="password">Contraseña</label>
    </pv-floatLabel>

    <pv-floatLabel class="p-float-label">
      <pv-InputText id="address"  v-model="address"/>
      <label for="address">Dirección</label>
    </pv-floatLabel>
    <pv-floatLabel class="p-float-label">
      <pv-InputText id="district"  v-model="district"/>
      <label for="district">Distrito</label>
    </pv-floatLabel>
    <pv-floatLabel class="p-float-label">
      <pv-InputText id="phone-number"  v-model="phonenumber"/>
      <label for="phone-number">Número de teléfono</label>
    </pv-floatLabel>
    <pv-dropdown  v-model="selectedOption" :options="dropdownOptions" optionLabel="name" placeholder="Selecciona un rol" class="w-full md:w-14rem dropdown-con-padding" />
    <div class="button-container">
      <pv-FileUpload class="updata" mode="basic" name="demo[]" url="/api/upload" accept="image/*" :maxFileSize="1000000" @upload="onUpload" />
    </div>
      <pv-button class="button-register" label="Registrar" ></pv-button>


  </div>

  <div class="link-container">
    <pv-button label="Contáctanos" class="custom-button"></pv-button>
    <div class="img-container">
      <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg" alt="Icono de Facebook" width="40" height="40">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="Icono de Instagram" width="40" height="40">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png" alt="Icono de Whatsapp" width="40" height="40">
    </div>
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
  background-color: #B89CF2;
  padding: 15px;
  border-radius: 10px;
  width:80%;
  margin: 0 auto;
}

h1{
  color: white;
}

.info-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.p-float-label {
  margin-bottom: 22px;
}

.button-register{
  padding:10px;
  background-color:#FFA500;
  border-color:#FFA500;
}

.link-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:15px;
}

@media screen and (max-width: 600px) {
  .link-container {
    flex-direction: column;
    align-items: center;
  }

  .img-container {
    margin-top: 10px;
  }
}

.img-container {
  display: flex;
  gap: 10px;
  justify-content: center;
}

.dropdown-con-padding {
  padding: 10px;
  margin-bottom: 15px;
}

.custom-button{
  background-color:#FFA500;
  border-color:#FFA500;
}

.button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding:15px;
}


</style>