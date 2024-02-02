import {createApp} from 'vue'
import './assets/main.css'
import router from "@/router/router.js";
import App from "@/App.vue";


const app = createApp(App);
app.use(router)
app.mount('#app')
