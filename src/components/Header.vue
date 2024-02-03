<script>
export default {
  name: "Header"
}
</script>

<template>
<div class="d-flex justify-space-between py-2 px-4">
  <h1>Shout Link!</h1>
  <div class="d-flex align-center ga-3">
    <router-link to="/">홈</router-link>
    <router-link to="/login">로그인</router-link>
  </div>
</div>
</template>

<style scoped>

</style>