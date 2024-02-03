<script>
import LoginForm from "@/components/login/LoginForm.vue";

export default {
  components: {LoginForm}
}

</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="6" class="mx-auto d-flex justify-center">
        <h1>로그인</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6" class="mx-auto">
        <LoginForm/>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6" class="mx-auto">
        <router-link to="/signup">
          <v-btn
              size="large"
              block>
            회원가입
          </v-btn>
        </router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>