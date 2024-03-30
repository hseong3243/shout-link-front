<script>
import api from "@/axios/index.js";
import {debounce} from "lodash";
import {useDomainStore} from "@/store/DomainStore.js";

export default {
  name: "DomainSearchForm",
  setup() {
    const domainStore = useDomainStore();
    return {domainStore};
  },
  data() {
    return {
      keyword: "",
      rootDomains: []
    }
  },
  watch: {
    keyword: debounce(function (val, oldVal) {
      this.findRootDomainsApiCall(val);
    }, 200),
  },
  methods: {
    searchDomain(keyword) {
      const pageInfo = {
        page: 0,
        size: 10
      }
      this.domainStore.findDomainsApiCall(keyword, pageInfo);
    },
    async findRootDomainsApiCall(keyword) {
      if (keyword.length < 1) {
        this.rootDomains = [];
      }
      const response = await api.get("/api/domains/search", {
        params: {
          keyword: keyword,
          size: 10,
        }
      });
      this.rootDomains = response.data.rootDomains;
    },
  }
}
</script>

<template>
  <div>
    <div
        class="border rounded elevation-3 search">
      <input
          class="search-input"
          v-model="keyword"
          @keyup.enter="searchDomain(keyword)"/>
    </div>
    <div
        class="border rounded elevation-3">
      <div
          class="auto-complete"
          v-for="rootDomain in rootDomains"
          :key="rootDomain">
        <div class="auto-complete-element"
             @click="searchDomain(rootDomain)">
          {{ rootDomain }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.search {
  height: 50px;
}

.search-input {
  padding-left: 10px;
  width: 100%;
  height: 100%;
  font-size: 18px;
}

.search-input:focus {
  outline: none;
}

.auto-complete {
  padding-top: 10px;
  padding-bottom: 10px;
}

.auto-complete-element {
  padding-left: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 18px;
}

.auto-complete-element:hover {
  background-color: #e5e5e5;
}
</style>
