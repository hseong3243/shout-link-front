<script>
import api from "@/axios/index.js";
import {useLinkBundleStore} from "@/store/LinkBundleStore.js";
import AddHubLinkButton from "@/components/hub/hublink/dialog/AddHubLinkButton.vue";
import {useAuthStore} from "@/store/AuthStore.js";

export default {
  name: "HubLinkSection",
  components: {AddHubLinkButton},
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
      linkBundle: {
        linkBundleId: 1,
        description: "기본 분류",
        isDefault: true
      },
      links: [
        {
          linkId: 1,
          description: "내 블로그",
          url: "https://hseong.tistory.com/"
        },
        {
          linkId: 2,
          description: "내 깃허브",
          url: "https://github.com/hseong3243"
        }
      ],
      isHubMaster: false,
      dataReady: false
    }
  },
  mounted() {
    this.linkBundleStore.$subscribe((mutation, state) => {
      this.linkBundle = state.linkBundle;
      this.findHubLinksApiCall();
    })
    this.checkIsHubMaster();
    this.dataReady = true;
  },
  methods: {
    moveToLink(link) {
      window.open(link.url);
    },
    async findHubLinksApiCall() {
      const axiosResponse = await api.get(`/api/hubs/${this.hubId}/links`, {
        params: {
          linkBundleId: this.linkBundle.linkBundleId,
        }
      });
      this.links = axiosResponse.data.links;
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
      <div class="text-h6 py-6">{{ linkBundle.description }}</div>
      <AddHubLinkButton
          :hub-id="hubId"
          @addHubLinkEvent="findHubLinksApiCall"
      v-if="isHubMaster"/>
    </div>
    <div class="d-flex flex-wrap ga-2" v-if="dataReady">
      <v-card v-for="n in links" :key="n" @click="moveToLink(n)" hover>
        <v-card-item>
          <v-card-title>
            {{ n.description }}
          </v-card-title>
          <v-card-subtitle>
            {{ n.url }}
          </v-card-subtitle>
        </v-card-item>
      </v-card>
    </div>
  </div>
</template>

<style scoped>

</style>
