<script>
import axios from "axios";
import {useAuthStore} from "@/store/AuthStore.js";

export default {
  setup() {
    const authStore = useAuthStore();
    return {authStore}
  },
  data() {
    return {
      loginRequest: {
        email: "",
        password: "",
      }
    }
  },
  methods: {
    login() {
      this.authStore.loginApiCall(this.loginRequest.email, this.loginRequest.password);
    }
  }
}
</script>

<template>
  <v-form>
    <v-text-field
        v-model="loginRequest.email"
        label="이메일"
        variant="solo">
    </v-text-field>
    <v-text-field
        v-model="loginRequest.password"
        label="비밀번호"
        variant="solo">
    </v-text-field>
    <v-btn
        @click="login"
        size="large"
        block>
      로그인
    </v-btn>
  </v-form>
</template>

<style scoped>

</style>