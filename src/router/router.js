import {createRouter, createWebHashHistory} from 'vue-router'
import Home from "@/components/Home.vue";
import LoginPage from "@/components/login/LoginPage.vue";
import SignupPage from "@/components/signup/SignupPage.vue";
import HubPage from "@/components/hub/HubPage.vue";
import HubLinkPage from "@/components/hub/hublink/HubLinkPage.vue";
import DomainSearchPage from "@/components/domain/DomainSearchPage.vue";

const routes = [
  {path: '/', component: Home},
  {path: '/login', component: LoginPage},
  {path: '/signup', component: SignupPage},
  {path: '/hub', component: HubPage},
  {path: '/hub/:hubId', component: HubLinkPage, props: true},
  {path: '/domain', component: DomainSearchPage}
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router