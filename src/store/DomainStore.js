import {defineStore} from "pinia";
import api from "@/axios/index.js";

export const useDomainStore = defineStore('domain', {
  state: () => ({
    domains: [],
    totalElements: 0,
    hasNext: false,
    domain: {},
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
    getDomain(state) {
      return state.domain;
    },
    getKeyword(state) {
      return state.keyword;
    }
  },
  actions: {
    findDomainsApiCallUsingPreviousKeyword(pageInfo) {
      this.findDomainsApiCall(this.keyword, pageInfo);
    },
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
    },
    findDomainApiCall(domainId) {
      api.get(`/api/domains/${domainId}`)
      .then(response => {
        this.domain = response.data;
      })
    }
  }
});
