<script>
import api from "@/axios/index.js";
import {useLinkBundleStore} from "@/store/LinkBundleStore.js";
import AddHubLinkButton from "@/components/hub/hublink/dialog/AddHubLinkButton.vue";
import {useAuthStore} from "@/store/AuthStore.js";
import ShowUrl from "@/components/common/ShowUrl.vue";
import dayjs from "dayjs";

export default {
  name: "HubLinkSection",
  components: {ShowUrl, AddHubLinkButton},
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
      isHubMaster: false,
      linkOrderBy: 'EXPIRED_AT',
      dataReady: false
    }
  },
  watch: {
    linkOrderBy() {
      this.findHubLinksApiCall()
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
          linkOrderBy: this.linkOrderBy
        }
      });
      this.links = axiosResponse.data.links;
    },
    checkIsHubMaster() {
      this.isHubMaster = this.authStore.getMemberId === this.hub.masterId;
    },
    changeShowUrl() {
      this.showUrl = !this.showUrl;
    },
    removePathFromUrl(url) {
      if(url.startsWith("http://") || url.startsWith("https://")) {
        url = new URL(url).host;
      } else {
        const firstIndexOfSlash = url.indexOf("/");
        url = url.substring(0, firstIndexOfSlash);
      }
      return url;
    },
    localDateTimeToDDay(expiredAt) {
      return '만료일 - ' + dayjs(expiredAt).fromNow();
    },
    isValid(expiredAt) {
      return dayjs(expiredAt).year() < 9999;
    }
  }
}
</script>

<template>
  <div class="d-flex flex-column">
    <div class="d-flex justify-space-between align-center">
      <div class="d-flex align-center ga-2">
        <div class="text-h6 py-6">{{ linkBundle.description }}</div>
        <ShowUrl @show-url-event="changeShowUrl"/>
      </div>
      <div class="d-flex ga-2">
        <select v-model="linkOrderBy" class="border rounded px-1">
          <option value="EXPIRED_AT">만료순</option>
          <option value="CREATED_AT">생성순</option>
        </select>
      <AddHubLinkButton
          :hub-id="hubId"
          @addHubLinkEvent="findHubLinksApiCall"
          v-if="isHubMaster"/>
      </div>
    </div>
    <div class="d-flex flex-wrap ga-2" v-if="dataReady">
      <v-card v-for="n in links" :key="n" @click="moveToLink(n)" hover>
        <v-card-item>
          <div class="d-flex justify-end" v-if="isValid(n.expiredAt)">
            <p>
              {{localDateTimeToDDay(n.expiredAt)}}
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
