<script>
import {useAuthStore} from "@/store/AuthStore.js";

export default {
  name: "Header",
  setup() {
    const authStore = useAuthStore();
    return { authStore }
  }
}
</script>

<template>
<div class="d-flex justify-space-between py-2 px-4">
  <h1>Shout Link!</h1>
  <div class="d-flex align-center ga-3">
    <router-link to="/">홈</router-link>
    <router-link to="/hub">허브</router-link>
    <p class="clickable" @click="authStore.logout" v-if="authStore.isLogin">로그아웃</p>
    <router-link to="/login" v-else>로그인</router-link>
  </div>
</div>
</template>

<style scoped>
.clickable:hover {
  cursor: pointer;
}
</style>
