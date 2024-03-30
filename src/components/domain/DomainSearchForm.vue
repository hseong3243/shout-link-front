<script>
import api from "@/axios/index.js";
import {debounce} from "lodash";

export default {
  name: "DomainSearchForm",
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
    }
  }
}
</script>

<template>
  <div>
    <div
        class="border rounded elevation-3 search">
      <input
          class="search-input"
          v-model="keyword"/>
    </div>
    <div
        class="border rounded elevation-3">
      <div
          class="auto-complete"
          v-for="rootDomain in rootDomains"
          :key="rootDomain">
        <div class="auto-complete-element">
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
