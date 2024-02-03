<script>
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
        size="large"
        block>
      회원가입
    </v-btn>
  </v-form>
</template>

<style scoped>

</style>
