import { createRouter, createWebHashHistory } from 'vue-router'
import Home from "@/components/Home.vue";
import LoginPage from "@/components/login/LoginPage.vue";
import SignupPage from "@/components/signup/SignupPage.vue";
import HubPage from "@/components/hub/HubPage.vue";

const routes = [
  {path:'/', component: Home},
  {path:'/login', component: LoginPage},
  {path:'/signup', component: SignupPage},
  {path:'/hub', component: HubPage}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router