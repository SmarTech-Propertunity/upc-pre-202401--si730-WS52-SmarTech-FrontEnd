<script setup>

</script>

<template>
  <body>
  <div class="container">
    <h1>Bienvenidos a Propertunity</h1>
    <img src="https://www.condominiosverdes.com.br/wp-content/uploads/2017/10/condominio-sustentavel-dicas.jpg" alt="Edificios de fondo">
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

  <div class="button-container">
    <pv-button label="Ingresar" class="custom-button"></pv-button>
    <pv-button label="Registrar" class="custom-button"></pv-button>
  </div>

  <div class="link-container">
    <pv-button label="Contáctanos" class="custom-button"></pv-button>
    <div class="img-container">
      <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg" alt="Icono de Facebook" width="40" height="40">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="Icono de Instagram" width="40" height="40">
    </div>
  </div>
  </body>

</template>

<style scoped>
body{
  background-color: #ffffff;
  margin: 0;
}

.container {
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
}

.container h1{
  font-family: 'lato', sans-serif;
  color:white;
  position: absolute;
  top:50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 20px;
}

.container img{
  width: 100%;
  height: 400px;
  overflow: hidden;
}

.input-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
}

.p-float-label{
  margin-bottom: 15px;
}

.button-container {
  display: flex;
  justify-content: center;
  gap: 20px;
}
@media screen and (max-width: 600px) {
  .button-container {
    flex-direction: column;
    align-items: center;
    padding: 1em;
  }
}

pv-button {
  padding: 10px 20px;
  background-color: #FFA500;
  color: #ffffff;
  border: none;
  border-radius: 5px;
}

.link-container{
  display: flex;
  justify-content: space-between;
  padding: 15px;
}

.img-container{
  display: flex;
  gap: 10px;
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

.custom-button{
  background-color:#FFA500;
  border-color:#FFA500;
}
</style>