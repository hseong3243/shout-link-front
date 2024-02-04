import {createApp} from 'vue'
import router from "@/router/router.js";
import App from "@/App.vue";
import axios from "axios";

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

//axios
axios.defaults.baseURL = 'https://shoutlink.me'

//pinia
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);
app.use(router)
app.use(vuetify)
app.use(pinia)
app.mount('#app')
