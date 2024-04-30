<script setup>

</script>

<template>
  <body>
  <div class="head-content">
    <h1>Regístrate en Propertunity</h1>
  </div>
  <div class="input-container">
    <pv-floatLabel class="p-float-label">
      <pv-InputText id="username"  />
      <label for="username">Username</label>
    </pv-floatLabel>
    <pv-floatLabel>
      <pv-InputText id="password"  />
      <label for="password">Password</label>
    </pv-floatLabel>
  </div>

  <div class="link-container">
    <pv-button label="Contáctanos"></pv-button>
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


.input-container {
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
</style>