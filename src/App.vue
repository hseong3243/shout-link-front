<script>
import Header from "@/components/Header.vue";

export default {
  name: 'App',
  components: {Header}
}
</script>

<template>
  <Header/>
  <div class="d-flex flex-column">
    <router-view></router-view>
  </div>
</template>

<style scoped>
</style>
