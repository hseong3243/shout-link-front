<script>
import {useAuthStore} from "@/store/AuthStore.js";
import api from "@/axios/index.js";
import AddHubButton from "@/components/hub/dialog/AddHubButton.vue";
import router from "@/router/router.js";

export default {
  name: "HubSection",
  components: {AddHubButton},
  setup() {
    const authStore = useAuthStore();
    return {authStore}
  },
  data() {
    return {
      dataReady: false,
      page: 0,
      hubs: [{
        hubId: 1,
        masterId: 1,
        name: "공개 허브",
        description: "설명",
        isPrivate: false,
        tags: [
          {
            tagId: 1,
            name: "태그"
          }
        ]
      },
        {
          hubId: 2,
          masterId: 1,
          name: "비공개 허브",
          description: "설명",
          isPrivate: true
        },
      ],
      totalElements: 2,
      hasNext: false,
    }
  },
  mounted() {
    this.findHubsApiCall();
    this.dataReady = true;
  },
  methods: {
    moveToHub(hub) {
      router.push('/hub/' + hub.hubId);
    },
    async findHubsApiCall() {
      const axiosResponse = await api.get('/api/hubs', {
        params: {
          page: this.page,
          size: 20,
        }
      });
      const data = axiosResponse.data;
      this.hubs = data.hubs;
      this.totalElements = data.totalElements;
      this.hasNext = data.hasNext;
    }
  }
}
</script>

<template>
  <div class="d-flex flex-column">
    <div class="text-h6 py-6">허브 목록</div>
    <div class="d-flex flex-wrap ga-2" v-if="dataReady">
      <v-card v-for="hub in hubs" :key="hub" @click="moveToHub(hub)" hover>
        <v-card-item>
          <v-card-title>
            {{ hub.name }}
            <v-icon
                size="x-small"
                icon="mdi-lock"
                v-if="hub.isPrivate"
            />
          </v-card-title>
          <v-card-subtitle>
            {{ hub.description }}
          </v-card-subtitle>
          <v-card-subtitle>
            <div class="d-flex">
              <div v-for="tag in hub.tags" :key="tag.tagId">
                #{{tag.name}}
              </div>
            </div>
          </v-card-subtitle>
        </v-card-item>
      </v-card>
    </div>
    <div class="d-flex mt-5 ga-2">
      <v-btn v-if="hasNext">더 보기</v-btn>
      <v-btn disabled v-if="!hasNext">더 보기</v-btn>
      <AddHubButton v-if="authStore.isLogin"/>
    </div>
  </div>
</template>

<style scoped>

</style>
