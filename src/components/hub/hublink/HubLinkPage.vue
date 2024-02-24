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
  data() {
    return {
      dataReady: false,
      hub: {
        hubId: 1,
        masterId: 1,
        name: "허브 이름",
        description: "허브 설명",
        isPrivate: false,
        masterNickname: "마스터 이름"
      },
    }
  },
  mounted() {
    this.findHubApiCall();
    this.dataReady = true;
  },
  methods: {
    async findHubApiCall() {
      const axiosResponse = await api.get('/api/hubs/' + this.hubId);
      this.hub = axiosResponse.data;
    }
  }
}
</script>

<template>
  <v-container>
    <v-row>
      <v-col>
        <div class="d-flex flex-column">
          <div class="text-h6 py-6">{{ hub.name }}</div>
          <div class="text-subtitle-1">{{ hub.description }}</div>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="3">
        <HubLinkBundleSection :hub-id="hubId" :hub="hub"/>
      </v-col>
      <v-col>
        <HubLinkSection :hub-id="hubId"/>
      </v-col>
      <v-col cols="3">

      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>
