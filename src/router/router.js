import { createRouter, createWebHashHistory } from 'vue-router'
import Home from "@/components/Home.vue";
import LoginPage from "@/components/login/LoginPage.vue";
import SignupPage from "@/components/signup/SignupPage.vue";

const routes = [
  {path:'/', component: Home},
  {path:'/login', component: LoginPage},
  {path:'/signup', component: SignupPage}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router