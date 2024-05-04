<script>
import {useHubStore} from "@/store/HubStore.js";

export default {
  name: "HubTagSection",
  setup() {
    const hubStore = useHubStore();
    return {hubStore}
  },
  data() {
    return {
      tagKeyword: "",
      page: 0,
    }
  },
  methods: {
    async searchHubsApiCall() {
      await this.hubStore.searchHubsApiCall(this.tagKeyword)
    }
  }
}
</script>

<template>
  <div class="d-flex flex-column">
    <div class="text-h6 py-6">태그 검색</div>
    <div class="text-body-1">
      <v-text-field
          v-model="tagKeyword"
          prepend-inner-icon="mdi-magnify"
          variant="outlined"
          density="comfortable"
          @keydown.enter="searchHubsApiCall"
      >

      </v-text-field>
    </div>
  </div>
</template>

<style scoped>
.search {
  height: 40px;
}

.search-input {
  padding-left: 10px;
  width: 100%;
  height: 100%;
  font-size: 18px;
}
</style>
