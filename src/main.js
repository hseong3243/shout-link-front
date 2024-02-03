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

const vuetify = createVuetify({
  components,
  directives
});

//axios
axios.defaults.baseURL = 'https://shoutlink.me'

const app = createApp(App);
app.use(router)
app.use(vuetify)
app.mount('#app')
