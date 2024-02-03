<script>
import LoginPage from "@/components/login/LoginPage.vue";
import LinkBundleSection from "@/components/home/LinkBundleSection.vue";
import LinkSection from "@/components/home/LinkSection.vue";
import InterestedSection from "@/components/home/InterestedSection.vue";

export default {
  name: "Main",
  components: {InterestedSection, LinkSection, LinkBundleSection, LoginPage}
}
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="3">
        <LinkBundleSection/>
      </v-col>
      <v-col>
        <LinkSection/>
      </v-col>
      <v-col cols="3">
        <InterestedSection/>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>
