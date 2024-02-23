<script>
import api from "@/axios/index.js";
import {useLinkBundleStore} from "@/store/LinkBundleStore.js";

export default {
  name: "HubLinkBundleSection",
  props: {
    hubId: String,
  },
  setup() {
    const linkBundleStore = useLinkBundleStore();
    return {linkBundleStore}
  },
  data() {
    return {
      linkBundles: [
        {
          linkBundleId: 1,
          description: "기본 분류",
          isDefault: true
        },
        {
          linkBundleId: 2,
          description: "관심있는 것들",
          isDefault: false
        }
      ],
      dataReady: false
    }
  },
  mounted() {
    this.findHubLinkBundlesApiCall()
    this.dataReady = true;
  },
  methods: {
    async findHubLinkBundlesApiCall() {
      const axiosResponse = await api.get(`/api/hubs/${this.hubId}/link-bundles`);
      const data = axiosResponse.data;
      this.linkBundles = data.linkBundles;
      this.linkBundleStore.setLinkBundles(this.linkBundles);
    }
  }
}
</script>

<template>
  <div class="d-flex flex-column">
    <div class="text-h6 py-6">링크 묶음</div>
  </div>
  <div class="d-flex flex-wrap ga-2" v-if="dataReady">
    <v-btn
        v-for="n in linkBundles"
        :key="n">
      {{ n.description }}
    </v-btn>
  </div>
</template>

<style scoped>

</style>
