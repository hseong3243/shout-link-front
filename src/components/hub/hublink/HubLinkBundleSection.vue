<script>
import api from "@/axios/index.js";
import {useLinkBundleStore} from "@/store/LinkBundleStore.js";
import AddHubLinkBundleButton from "@/components/hub/hublink/dialog/AddHubLinkBundleButton.vue";
import {useAuthStore} from "@/store/AuthStore.js";

export default {
  name: "HubLinkBundleSection",
  components: {AddHubLinkBundleButton},
  props: {
    hubId: String,
    hub: Object,
  },
  setup() {
    const authStore = useAuthStore();
    const linkBundleStore = useLinkBundleStore();
    return {authStore, linkBundleStore}
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
      isHubMaster: false,
      dataReady: false
    }
  },
  mounted() {
    this.findHubLinkBundlesApiCall()
    this.checkIsHubMaster()
    this.dataReady = true;
  },
  methods: {
    async findHubLinkBundlesApiCall() {
      const axiosResponse = await api.get(`/api/hubs/${this.hubId}/link-bundles`);
      const data = axiosResponse.data;
      this.linkBundles = data.linkBundles;
      this.linkBundleStore.setLinkBundles(this.linkBundles);
    },
    checkIsHubMaster() {
      this.isHubMaster = this.authStore.getMemberId === this.hub.masterId;
    }
  }
}
</script>

<template>
  <div class="d-flex flex-column">
    <div class="d-flex justify-space-between align-center">
      <div class="text-h6 py-6">허브 링크 묶음</div>
      <AddHubLinkBundleButton
          :hub-id="hubId"
          @addHubLinkBundleEvent="findHubLinkBundlesApiCall"
          v-if="isHubMaster"/>
    </div>
    <div class="d-flex flex-wrap ga-2" v-if="dataReady">
      <v-btn
          v-for="n in linkBundles"
          :key="n"
          @click="linkBundleStore.selectLinkBundle(n)">
        {{ n.description }}
      </v-btn>
    </div>
  </div>
</template>

<style scoped>

</style>
