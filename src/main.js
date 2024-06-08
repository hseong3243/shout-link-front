import {createApp} from 'vue'
import router from "@/router/router.js";
import App from "@/App.vue";

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

// Pinia
import {createPinia} from "pinia";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';


const vuetify = createVuetify({
  components,
  directives
});

//pinia
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

//dayjs
import dayjs from "dayjs";
import 'dayjs/locale/ko';
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.locale('ko')
dayjs.extend(relativeTime)


const app = createApp(App);
app.use(router)
app.use(vuetify)
app.use(pinia)
app.use(dayjs)
app.mount('#app')
