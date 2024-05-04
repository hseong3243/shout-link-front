import {defineStore} from "pinia";
import api from "@/axios/index.js";

export const useHubStore = defineStore('hubStore', {
  state: () => ({
    hubs: [],
    page: 0,
    size: 20,
    totalElements: 0,

  }),
  getters: {
    getHubs() {
      return this.hubs;
    }
  },
  actions: {
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
    },
    async searchHubsApiCall(tagKeyword) {
      const axiosResponse = await api.get('/api/hubs/search', {
        params: {
          tagKeyword: tagKeyword,
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
})
