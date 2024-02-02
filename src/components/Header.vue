<script>
export default {
  name: "Header"
}
</script>

<template>
<div class="d-flex justify-space-between border-b-md">
  <div class="text-h3">Shout Link!</div>
  <div class="d-flex">
    <router-link to="/">홈</router-link>
    <router-link to="/login">로그인</router-link>
  </div>
</div>
</template>

<style scoped>

</style>