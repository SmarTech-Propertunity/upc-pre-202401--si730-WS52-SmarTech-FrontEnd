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
    <h1>{{ $t('registerpropertunity')}}</h1>
  </div>

  <div class="info-content">
    <pv-floatLabel class="p-float-label" aria-label="Nombre">
      <pv-InputText id="username" v-model="username" aria-label="Ingrese su nombre"/>
      <label for="username">{{ $t('name')}}</label>
    </pv-floatLabel>
    <pv-floatLabel class="p-float-label" aria-label="Correo Electrónico">
      <pv-InputText id="email" v-model="email" aria-label="Ingrese su correo electrónico"/>
      <label for="email">{{ $t('email')}}</label>
    </pv-floatLabel>
    <pv-floatLabel class="p-float-label" aria-label="Correo de recuperación">
      <pv-InputText id="backup_mail"  v-model="backup_mail" aria-label="Ingrese su correo de recuperación"/>
      <label for="backup_mail">{{ $t('recoveryemail')}}</label>
    </pv-floatLabel>
    <pv-floatLabel class="p-float-label" aria-label="Contraseña">
      <pv-InputText id="password"  v-model="password" aria-label="Ingrese su contraseña"/>
      <label for="password">{{ $t('password')}}</label>
    </pv-floatLabel>
    <pv-floatLabel class="p-float-label" aria-label="Dirección">
      <pv-InputText id="address"  v-model="address" aria-label="Ingrese su dirección"/>
      <label for="address">{{ $t('address')}}</label>
    </pv-floatLabel>
    <pv-floatLabel class="p-float-label" aria-label="Distrito">
      <pv-InputText id="district"  v-model="district" aria-label="Ingrese su distrito"/>
      <label for="district">{{ $t('district')}}</label>
    </pv-floatLabel>
    <pv-floatLabel class="p-float-label" aria-label="Número de teléfono">
      <pv-InputText id="phone-number"  v-model="phonenumber" aria-label="Ingrese su número de teléfono"/>
      <label for="phone-number">{{ $t('phone')}}</label>
    </pv-floatLabel>
    <pv-dropdown  v-model="selectedOption" :options="dropdownOptions" optionLabel="name" placeholder="Selecciona un rol" class="w-full md:w-14rem dropdown-con-padding" aria-label="Selecciona un rol"/>
    <div class="button-container">
      <pv-FileUpload class="updata" mode="basic" name="demo[]" url="/api/upload" accept="image/*" :maxFileSize="1000000" @upload="onUpload" aria-label="Subir archivo"/>
    </div>
      <pv-button class="button-register" label="Registrar" aria-label="Botón Registrar">{{ $t('register')}}</pv-button>


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
  width:100%;
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