<script>
import AddLinkButton from "@/components/home/dialog/AddLinkButton.vue";
import {useLinkBundleStore} from "@/store/LinkBundleStore.js";
import api from "@/axios/index.js";
import {useAuthStore} from "@/store/AuthStore.js";
import ShowUrl from "@/components/common/ShowUrl.vue";
import dayjs from "dayjs";

export default {
  name: "LinkSection",
  components: {ShowUrl, AddLinkButton},
  setup() {
    const authStore = useAuthStore();
    const linkBundleStore = useLinkBundleStore();
    return {authStore, linkBundleStore}
  },
  data() {
    return {
      showUrl: false,
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
      linkOrderBy: 'EXPIRED_AT',
      dataReady: false
    }
  },
  watch: {
    linkOrderBy() {
      this.findLinksApiCall()
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
          linkOrderBy: this.linkOrderBy,
        }
      });
      this.links = axiosResponse.data.links;
    },
    changeShowUrl() {
      this.showUrl = !this.showUrl;
    },
    removePathFromUrl(url) {
      if (url.startsWith("http://") || url.startsWith("https://")) {
        url = new URL(url).host;
      } else {
        const firstIndexOfSlash = url.indexOf("/");
        url = url.substring(0, firstIndexOfSlash);
      }
      return url;
    },
    localDateTimeToDDay(expiredAt) {
      return dayjs(expiredAt).fromNow();
    },
    isValid(expiredAt) {
      return dayjs(expiredAt).year() < 9999;
    }
  }
}
</script>

<template>
  <div class="d-flex flex-column">
    <div class="d-flex justify-space-between py-5">
      <div class="d-flex ga-2 align-center">
        <div class="text-h5">{{ linkBundle.description }}</div>
        <ShowUrl @show-url-event="changeShowUrl"/>
      </div>
      <div class="d-flex ga-2">
        <select v-model="linkOrderBy" class="border rounded px-1">
          <option value="EXPIRED_AT">만료순</option>
          <option value="CREATED_AT">생성순</option>
        </select>
        <AddLinkButton @addLinkEvent="findLinksApiCall" v-if="this.authStore.isLogin"/>
      </div>
    </div>
    <div class="d-flex flex-wrap ga-2" v-if="dataReady">
      <v-card v-for="n in links" :key="n" @click="moveToLink(n)" hover>
        <v-card-item>
          <div class="d-flex justify-end" v-if="isValid(n.expiredAt)">
            <p>
              {{ localDateTimeToDDay(n.expiredAt) }}
            </p>
          </div>
          <v-card-title>
            {{ n.description }}
          </v-card-title>
          <v-card-subtitle>
            {{ showUrl ? n.url : removePathFromUrl(n.url) }}
          </v-card-subtitle>
        </v-card-item>
      </v-card>
    </div>
  </div>
</template>

<style scoped>

</style>