<script setup>
import {ref} from "vue";
const username = ref('');
const password = ref('');
const email = ref('');
const phonenumber = ref('');
const value = ref(null);
</script>

<template>
  <body>

  <div class="section-login" :aria-label="$t('registerTitle')">
    <div class="container">

      <h1 class="register-title">{{ $t('registerTitle')}}</h1>
      <span class="register-description">{{ $t('registerpropertunity')}}</span>
    </div>
    <div class="input-label">
      <pv-floatLabel class="credentials-label">
        <pv-inputText class="credentials-input" id="username" v-model="username" />
        <div> <label class="credentials-textLabel" for="username">{{ $t('username') }}</label></div>
      </pv-floatLabel>
    </div>
    <div class="input-label">
      <pv-floatLabel class="credentials-label">
        <pv-inputText class="credentials-input" id="password" v-model="password" />
        <div><label class="credentials-textLabel" for="password">{{ $t('password') }}</label></div>
      </pv-floatLabel>
    </div>
    <div class="input-label">
      <pv-floatLabel class="credentials-label">
        <pv-inputText class="credentials-input" id="password" v-model="email" />
        <div><label class="credentials-textLabel" for="email">{{ $t('email') }}</label></div>
      </pv-floatLabel>
    </div>
    <div class="input-label">
      <pv-floatLabel class="credentials-label">
        <pv-inputText class="credentials-input" id="password" v-model="phonenumber" />
        <div><label class="credentials-textLabel" for="phonenumber">{{ $t('phone') }}</label></div>
      </pv-floatLabel>
    </div>
    <div>
      <router-link to="/"><pv-button class="register-btn" :label="$t('registerBTN')" /></router-link>

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

.register-btn{
  margin-top: 20px;
  font-weight: bold;
  border-radius: 15px;
  border: transparent;
  background: linear-gradient(74deg, rgba(3,20,92,1) 0%, rgba(11,199,218,1) 100%);
  color: white;
}

.register-btn:hover{
  background-color: black;
  color: white;
}
.container{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.register-title{
  font-size: 30px;
  font-weight: bold;
  color: black;
}

.register-description{
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

@media screen and (max-width: 768px){
  .login-image{
    display: none;
  }
}
</style>