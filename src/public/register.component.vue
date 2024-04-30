<script setup>

</script>

<template>
  <body>
  <div class="head-content">
    <h1>Regístrate en Propertunity</h1>
  </div>

  <div class="info-content">
    <pv-floatLabel class="p-float-label">
      <pv-InputText id="username" />
      <label for="username">Usuario</label>
    </pv-floatLabel>
    <pv-floatLabel class="p-float-label">
      <pv-InputText id="password" />
      <label for="password">Password</label>
    </pv-floatLabel>
    <pv-floatLabel class="p-float-label">
      <pv-InputText id="correo"  />
      <label for="correo">Correo</label>
    </pv-floatLabel>
    <pv-floatLabel class="p-float-label">
      <pv-InputText id="phone"  />
      <label for="phone">Phone</label>
    </pv-floatLabel>
    <pv-button label="Registrar"></pv-button>
  </div>

  <div class="link-container">
    <pv-button label="Contáctanos"></pv-button>
    <div class="img-container">
      <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg" width="40" height="40">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" width="40" height="40">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png" width="40" height="40">
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
  background-color: rgba(169, 169, 169, 0.5);
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
  padding: 15px;
}

.p-float-label {
  margin-bottom: 15px;
}

.link-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.img-container {
  display: flex;
  gap: 10px;
  justify-content: center;
}

</style>