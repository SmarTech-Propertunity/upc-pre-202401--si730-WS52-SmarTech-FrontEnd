<script setup>
import {ref} from "vue";
const username = ref('');
const password = ref('');
const value = ref(null);
</script>

<template>
  <body>

  <div class="container" aria-label="Encabezado de bienvenida y fondo de edificios">
    <div>  <h1>{{ $t('welcome')}}</h1></div>
    <div class="card flex justify-content-center">
      <pv-floatLabel>
        <pv-inputText id="username" v-model="value" />
        <div> <label for="username">{{ $t('username') }}</label></div>

      </pv-floatLabel>
    </div>
    <div class="card flex justify-content-center">
      <pv-floatLabel>
        <pv-inputText id="password" v-model="value" />
        <div><label for="password">{{ $t('password') }}</label></div>
      </pv-floatLabel>
    </div>
    <div>
      <pv-button :label="$t('into')" />
    </div>
    <div>
      <router-link to="/register">
       <pv-button :label="$t('register')" link />
      </router-link>
      <router-link to="/register">
        <pv-button :label="$t('recovery')" link />
      </router-link>
    </div>
    <div>
      {{$t('copyright')}}
    </div>
  </div>
  <div class="login-image">
    <img src="../../../../assets/images/login-image.jpg" alt="Imagen de inicio de sesión" />
  </div>

  </body>


</template>

<style scoped>
body{
  margin:0;
  padding:0;
  background-color:white;

}

.container {
  text-align: initial;
  padding: 15px;
  border-radius: 10px;
  width:100%;
  margin: 0 auto;
}

.card {

  padding: 15px;
  border-radius: 10px;
  width:100%;
  margin: 0 auto;
}
pv-float-label{
  width: 100%;
}

.login-image{
  text-align: end;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>