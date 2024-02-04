<script>
import router from "@/router/router.js";
import api from "@/axios/index.js";

export default {
  name: "SignupForm",
  data() {
    return {
      createMemberRequest: {
        email: "",
        password: "",
        nickname: "",
      }
    }
  },
  methods: {
    createMemberApiCall() {
      api.post('/api/members', {
        email: this.createMemberRequest.email,
        password: this.createMemberRequest.password,
        nickname: this.createMemberRequest.nickname
      })
      .then((response) => {
        router.replace("/login");
      })
      .catch((error) => {
        const response = error.response.data;
        const errorCode = response.errorCode;
        switch (errorCode) {
          case 'SL901':
            alert('중복된 이메일입니다!')
            break;
          case 'SL902':
            alert('중복된 닉네임입니다!')
            break;
        }
      })
    }
  }
}
</script>

<template>
  <v-form>
    <v-text-field
        v-model="createMemberRequest.email"
        label="이메일"
        variant="solo">
    </v-text-field>
    <v-text-field
        v-model="createMemberRequest.password"
        label="비밀번호"
        variant="solo">
    </v-text-field>
    <v-text-field
        v-model="createMemberRequest.nickname"
        label="닉네임"
        variant="solo">
    </v-text-field>
    <v-btn
        @click="createMemberApiCall"
        size="large"
        block>
      회원가입
    </v-btn>
  </v-form>
</template>

<style scoped>

</style>
