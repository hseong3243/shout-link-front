<script>
import HubLinkBundleSection from "@/components/hub/hublink/HubLinkBundleSection.vue";
import HubLinkSection from "@/components/hub/hublink/HubLinkSection.vue";
import api from "@/axios/index.js";

export default {
  name: "HubLinkPage",
  components: {HubLinkSection, HubLinkBundleSection},
  props: {
    hubId: String,
  },

}
</script>

<template>
  <v-container>
    <v-row>
      <v-col>
        <div class="d-flex flex-column">
          <div class="text-h6 py-6">허브 이름</div>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="3">
        <HubLinkBundleSection :hub-id="hubId"/>
      </v-col>
      <v-col>
        <HubLinkSection/>
      </v-col>
      <v-col cols="3">

      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>
