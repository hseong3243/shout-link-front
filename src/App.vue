<script>
import Header from "@/components/Header.vue";

export default {
  name: 'App',
  components: {Header}
}
</script>

<template>
  <div>
    <div class="font-basis max-width mx-auto">
      <Header/>
    </div>
    <div class="border-b-md"></div>
    <div class="font-basis max-width mx-auto">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
a {
  text-decoration: none;
}
.max-width {
  max-width: 1600px;
}
.font-basis {
  font-family: 'Basis', sans-serif;
}
@font-face {
  font-family: 'Basis';
  src: url("assets/fonts/GGTitleLight.ttf") format('truetype');
  font-weight: normal;
}
</style>
