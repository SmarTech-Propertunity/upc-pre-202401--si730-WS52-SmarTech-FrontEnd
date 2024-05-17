<script setup>
import {ref} from "vue";
const username = ref('');
const password = ref('');

</script>

<template>
  <body>
  <div class="container" aria-label="Encabezado de bienvenida y fondo de edificios">
    <h1>{{ $t('welcome')}}</h1>
    <img src="https://www.condominiosverdes.com.br/wp-content/uploads/2017/10/condominio-sustentavel-dicas.jpg" alt="Edificios de fondo">
  </div>

  <div class="input-container">
    <pv-floatLabel class="p-float-label" aria-label="Campo de nombre de usuario">
      <pv-InputText id="username" v-model="username" />
      <label for="username">{{ $t('username')}}</label>
    </pv-floatLabel>
    <pv-floatLabel aria-label="Campo de contraseña">
      <pv-InputText id="password"  v-model="password"/>
      <label for="password">{{ $t('password')}}</label>
    </pv-floatLabel>
  </div>

  <div class="button-container">
   <router-link to="/home">
     <pv-button label="Ingresar" class="custom-button" aria-label="Botón de Ingresar">{{$t('into')}}</pv-button>
   </router-link>

    <router-link to="/register">
    <pv-button label="Registrar" class="custom-button" aria-label="Botón de Registrar">{{$t('register')}}</pv-button>
    </router-link>
  </div>

  <div class="link-container">
    <a href="/Recovery" aria-label="passwordRecoveryLabel">{{ $t('recovery')}}</a>
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
  padding: 20px;
}

.p-float-label{
  margin-bottom: 22px;
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
  margin-top: 1rem;
  margin-left: 43%;
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