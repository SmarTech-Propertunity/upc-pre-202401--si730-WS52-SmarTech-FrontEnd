
import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/index.js";
import PrimeVue from "primevue/config";
import "primevue/resources/themes/saga-blue/theme.css"
import InputText from 'primevue/inputtext';
import FloatLabel from 'primevue/floatlabel';
import Button from 'primevue/button';
import Dropdown from "primevue/dropdown";
import Card from "primevue/card";
import FileUpload from 'primevue/fileupload';
import Toolbar from "primevue/toolbar";
import Galleria from 'primevue/galleria';
import i18n from "@/locale/i18n.js";
const app = createApp(App)

//app.use(router)
app.use(PrimeVue);
app.use(router);
app.use(i18n);
app.component('pv-inputText', InputText);
app.component('pv-toolbar', Toolbar);
app.component('pv-floatLabel', FloatLabel);
app.component('pv-button', Button);
app.component('pv-dropdown', Dropdown)
app.component('pv-card', Card)
app.component('pv-FileUpload', FileUpload)
app.component('pv-Galleria', Galleria)
app.mount('#app')

