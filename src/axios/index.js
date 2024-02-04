import axios from "axios";
import { useAuthStore } from "@/store/AuthStore.js";

const api = axios.create();

api.defaults.baseURL = 'https://shoutlink.me'
api.defaults.withCredentials = true

api.interceptors.request.use(config => {
  const authStore = useAuthStore();
  if(authStore.isLogin) {
    config.headers.Authorization = authStore.getBearerToken;
  }
  return config;
})

export default api;
