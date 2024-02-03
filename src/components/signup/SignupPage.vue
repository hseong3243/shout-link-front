<script>
import SignupForm from "@/components/signup/SignupForm.vue";

export default {
  name: "SignupPage",
  components: {SignupForm}
}
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="6" class="mx-auto d-flex justify-center">
        <h1>회원가입</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6" class="mx-auto">
        <SignupForm/>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>
