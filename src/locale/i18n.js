import {createI18n} from "vue-i18n";
import en from "@/locale/en.js";
import es from "@/locale/es.js";

const  i18n = createI18n({
    locale: 'es',
    messages: {
        en,
        es
    }
})
export default i18n