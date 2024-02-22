<script>
import HubRecommendSection from "@/components/hub/HubRecommendSection.vue";
import HubTagSection from "@/components/hub/HubTagSection.vue";
import HubSection from "@/components/hub/HubSection.vue";

export default {
  name: "HubPage",
  components: {HubSection, HubTagSection, HubRecommendSection}
}
</script>

<template>
<v-container>
  <v-row>
    <v-col>
      <HubRecommendSection/>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="3">
      <HubTagSection/>
    </v-col>
    <v-col>
      <HubSection/>
    </v-col>
  </v-row>
</v-container>
</template>

<style scoped>

</style>
