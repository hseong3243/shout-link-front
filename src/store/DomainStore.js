import {defineStore} from "pinia";
import api from "@/axios/index.js";

export const useDomainStore = defineStore('domain', {
  state: () => ({
    domains: [],
    totalElements: 0,
    hasNext: false,
    keyword: "",
  }),
  getters: {
    getDomains(state) {
      return state.domains;
    },
    getTotalElements(state) {
      return state.totalElements;
    },
    getHasNext(state) {
      return state.hasNext;
    },
    getKeyword(state) {
      return state.keyword;
    }
  },
  actions: {
    findDomainsApiCall(keyword, pageInfo) {
      this.keyword = keyword;
      
      api.get("/api/domains", {
        params: {
          keyword: keyword,
          page: pageInfo.page,
          size: pageInfo.size,
        }
      })
      .then(response => {
        const data = response.data;
        this.domains = data.domains;
        this.totalElements = data.totalElements;
        this.hasNext = data.hasNext;
      })
    }
  }
});
