<script>
import {useAuthStore} from "@/store/AuthStore.js";

export default {
  name: "HubSection",
  setup() {
    const authStore = useAuthStore();
    return {authStore}
  },
  data() {
    return {
      dataReady: true,
      hubs: [{
        hubId: 1,
        masterId: 1,
        name: "공개 허브",
        description: "설명",
        isPrivate: false
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
  methods: {
    moveToHub(hub) {

    },
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
                end
                size="x-small"
                icon="mdi-lock"
                v-if="hub.isPrivate"
            />
          </v-card-title>
          <v-card-subtitle>
            {{ hub.description }}
          </v-card-subtitle>
        </v-card-item>
      </v-card>
    </div>
    <div class="d-flex mt-5 ga-2">
      <v-btn v-if="hasNext">더 보기</v-btn>
      <v-btn disabled v-if="!hasNext">더 보기</v-btn>
      <v-btn v-if="authStore.isLogin">허브 만들기</v-btn>
    </div>
  </div>
</template>

<style scoped>

</style>
