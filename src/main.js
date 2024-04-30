
import { createApp } from 'vue'
import App from './App.vue'
//import router from './router'
import PrimeVue from "primevue/config";
import "primevue/resources/themes/saga-blue/theme.css"
import InputText from 'primevue/inputtext';
import FloatLabel from 'primevue/floatlabel';
import Button from 'primevue/button';


const app = createApp(App)

//app.use(router)
app.use(PrimeVue);
app.component('pv-InputText', InputText);
app.component('pv-floatLabel', FloatLabel);
app.component('pv-button', Button);
app.mount('#app')

