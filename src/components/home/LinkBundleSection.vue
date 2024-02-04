<script>
import AddLinkBundleButton from "@/components/home/dialog/AddLinkBundleButton.vue";
import {useAuthStore} from "@/store/AuthStore.js";
import api from "@/axios/index.js";
import {useLinkBundleStore} from "@/store/LinkBundleStore.js";

export default {
  name: "LinkBundleSection",
  components: {AddLinkBundleButton},
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
      dataReady: false
    }
  },
  mounted() {
    this.findLinkBundlesApiCall()
    this.dataReady = true;
  },
  methods: {
    async findLinkBundlesApiCall() {
      const axiosResponse = await api.get('/api/link-bundles');
      const data = axiosResponse.data;
      this.linkBundles = data.linkBundles;
      this.linkBundleStore.setLinkBundles(this.linkBundles);
    }
  }
}
</script>

<template>
  <div class="d-flex flex-column">
    <div class="d-flex justify-space-between py-5">
      <div class="text-h5">링크 묶음</div>
      <AddLinkBundleButton v-if="authStore.isLogin"/>
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
