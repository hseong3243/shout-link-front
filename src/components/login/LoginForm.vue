<script>
export default {
  data() {
    return {
      loginRequest: {
        email: "",
        password: "",
      }
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
        size="large"
        block>
      로그인
    </v-btn>
  </v-form>
</template>

<style scoped>

</style>