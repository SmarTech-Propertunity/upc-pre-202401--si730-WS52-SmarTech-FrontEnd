
import '@/assets/styles/main.css'
import PrimeVue from "primevue/config";
import { createApp } from 'vue'
import App from '@/App.vue'
import Toolbar from "primevue/toolbar";
import Button from "primevue/button";
import Avatar from "primevue/avatar";
import InputText from "primevue/inputtext";
import FloatLabel from "primevue/floatlabel";
import Dropdown from "primevue/dropdown";
import Card from "primevue/card";
//import router from './router'
import "primevue/resources/themes/saga-blue/theme.css"
import i18n from "@/locale/i18n.js";


const app = createApp(App)
app.use(PrimeVue, {unstyled: true })
    .component('pv-toolbar', Toolbar)
    .component('pv-button', Button)
    .component('pv-avatar', Avatar)
    .component('pv-input-text', InputText)
    .component('pv-float-label', FloatLabel)
    .component('pv-dropdown', Dropdown)
    .component('pv-card', Card)
//  app.use(router)

app.mount('#app')

