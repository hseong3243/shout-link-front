<script>
import AddLinkButton from "@/components/home/dialog/AddLinkButton.vue";
import {useLinkBundleStore} from "@/store/LinkBundleStore.js";
import api from "@/axios/index.js";
import {useAuthStore} from "@/store/AuthStore.js";

export default {
  name: "LinkSection",
  components: {AddLinkButton},
  setup() {
    const authStore = useAuthStore();
    const linkBundleStore = useLinkBundleStore();
    return { authStore, linkBundleStore }
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
      dataReady: false
    }
  },
  mounted() {
    this.linkBundleStore.$subscribe((mutation, state) => {
      this.linkBundle = state.linkBundle;
      this.findLinksApiCall();
    })
    this.dataReady = true;
  },
  methods: {
    moveToLink(link) {
      window.open(link.url);
    },
    async findLinksApiCall() {
      const axiosResponse = await api.get('/api/links', {
        params: {
          linkBundleId: this.linkBundle.linkBundleId,
        }
      });
      this.links = axiosResponse.data.links;
    }
  }
}
</script>

<template>
  <div class="d-flex flex-column">
    <div class="d-flex justify-space-between py-5">
      <div class="text-h5">{{ linkBundle.description }}</div>
      <AddLinkButton @addLinkEvent="findLinksApiCall" v-if="this.authStore.isLogin"/>
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