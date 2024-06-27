<script>
//import {ref} from "vue";
//const username = ref('');
//const password = ref('');
//const email = ref('');
//const phonenumber = ref('');
//const value = ref(null);

export default {
  data() {
    return {
      username: '',
      password: '',
      email: '',
      phonenumber: '',
      usernameError: null,
      passwordError: null,
      emailError: null,
      phoneError: null
    };
  },
  methods: {
    validateUsername() {
      this.usernameError = null;
      if (!this.username) {
        this.usernameError = this.$t('usernameRequired');
      } else if (this.username.length < 3) {
        this.usernameError = this.$t('usernameTooShort');
      }
    },
    validatePassword() {
      this.passwordError = null;
      if (!this.password) {
        this.passwordError = this.$t('passwordRequired');
      } else if (this.password.length < 6) {
        this.passwordError = this.$t('passwordTooShort');
      }
    },
    validateEmail() {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      this.emailError = null;
      if (!this.email) {
        this.emailError = this.$t('emailRequired');
      } else if (!emailPattern.test(this.email)) {
        this.emailError = this.$t('emailInvalid');
      }
    },
    validatePhoneNumber() {
      const phonePattern = /^[0-9]{9}$/;
      this.phoneError = null;
      if (!this.phonenumber) {
        this.phoneError = this.$t('phoneRequired');
      } else if (!phonePattern.test(this.phonenumber)) {
        this.phoneError = this.$t('phoneInvalid');
      }
    },
    register() {
      this.validateUsername();
      this.validatePassword();
      this.validateEmail();
      this.validatePhoneNumber();
      if (!this.usernameError && !this.passwordError && !this.emailError && !this.phoneError) {
        const user = {
          username: this.username,
          password: this.password,
          email: this.email,
          phonenumber: this.phonenumber
        };
        localStorage.setItem('user', JSON.stringify(user));
        this.$router.push('/');
      }
    }
  }
};
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
        <pv-inputText
            class="credentials-input"
            id="username"
            v-model="username"
            @blur="validateUsername"
        />
        <div>
          <label class="credentials-textLabel" for="username">{{ $t('username') }}</label>
        </div>
        <span v-if="usernameError" class="error-message">{{ usernameError }}</span>
      </pv-floatLabel>
    </div>
    <div class="input-label">
      <pv-floatLabel class="credentials-label">
        <pv-inputText
            class="credentials-input"
            id="password"
            v-model="password"
            @blur="validatePassword"
        />
        <div>
          <label class="credentials-textLabel" for="password">{{ $t('password') }}</label>
        </div>
        <span v-if="passwordError" class="error-message">{{ passwordError }}</span>
      </pv-floatLabel>
    </div>
    <div class="input-label">
      <pv-floatLabel class="credentials-label">
        <pv-inputText
            class="credentials-input"
            id="email"
            v-model="email"
            @blur="validateEmail"
        />
        <div>
          <label class="credentials-textLabel" for="email">{{ $t('email') }}</label>
        </div>
        <span v-if="emailError" class="error-message">{{ emailError }}</span>
      </pv-floatLabel>
    </div>
    <div class="input-label">
      <pv-floatLabel class="credentials-label">
        <pv-inputText
            class="credentials-input"
            id="phonenumber"
            v-model="phonenumber"
            @blur="validatePhoneNumber"
        />
        <div>
          <label class="credentials-textLabel" for="phonenumber">{{ $t('phone') }}</label>
        </div>
        <span v-if="phoneError" class="error-message">{{ phoneError }}</span>
      </pv-floatLabel>
    </div>
    <div>
      <pv-button class="register-btn" :label="$t('registerBTN')" @click.prevent="register" />
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

 .error-message {
   color: red;
   font-size: 0.8em;
 }
</style>