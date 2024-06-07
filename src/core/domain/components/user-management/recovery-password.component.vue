<script setup>
import {ref} from "vue";
const email = ref('');
const password = ref('');
const value = ref(null);
</script>

<template>
  <body>

  <div class="section-login" :aria-label=" $t('recoveryTitle')">
    <div class="container">

      <h1 class="recovery-title">{{ $t('recoveryTitle')}}</h1>
      <span class="recovery-description">{{ $t('recoveryDescription')}}</span>
    </div>
    <div class="input-label">
      <pv-floatLabel class="credentials-label">
        <pv-inputText class="credentials-input" id="email" v-model="email" />
        <div> <label class="credentials-textLabel" for="email">{{ $t('email') }}</label></div>
      </pv-floatLabel>
    </div>

    <div>
      <router-link to="/"><pv-button class="login-btn" :label="$t('into')" /></router-link>

    </div>

    <div class = "user-routes">
      <router-link to="/register">
        <pv-button :label="$t('register')" link />
      </router-link>
      <router-link to="/recovery">
        <pv-button :label="$t('recovery')" link />
      </router-link>
    </div>
  </div>
  <img class="login-image" src="../../../../assets/images/login-image.jpg" alt="Imagen de inicio de sesión" />
  </body>


</template>

<style scoped>

body{
  font-family: "Monserrat", sans-serif;
  background: rgb(255,255,255);
  margin: 0;
  padding: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-btn{
  margin-top: 20px;
  font-weight: bold;
  border-radius: 15px;
  border: transparent;
  background: linear-gradient(74deg, rgba(3,20,92,1) 0%, rgba(11,199,218,1) 100%);
  color: white;
}

.login-btn:hover{
  background-color: black;
  color: white;
}
.container{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.login-title{
  font-size: 30px;
  font-weight: bold;
  color: black;
}

.login-description{
  color: grey;
  text-wrap: nowrap;
  margin: 15px 0;
}

.credentials-label{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 15px;
  border: 1px solid grey;
  margin: 15px 0;
}

.credentials-input{
  border-radius: 15px;
}

.credentials-input:focus{
  outline:none;
}

.credentials-textLabel{
  color: grey;
  font-size: 15px;
  left: 20px;
}
.section-login{
  margin: 50px;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.login-image{
  width: 50%;
  height: 90vh;
  margin-top: 20px;
  border-radius: 15px;
  object-fit: cover;
}

.user-routes{
  margin: 10px 0;
  display: flex;
}
@media screen and (max-width: 768px){
  .login-image{
    display: none;
  }
}
</style>