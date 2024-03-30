<script>
import {useDomainStore} from "@/store/DomainStore.js";

export default {
  name: "DomainListSection",
  setup() {
    const domainStore = useDomainStore();
    return {domainStore};
  },
  data() {
    return {
      page: 1,
      pageLength: 1,
      domains: [],
      totalElements: 0,
      hasNext: false,
      findDomainRequest: {
        page: 0,
        size: 10,
      }
    }
  },
  mounted() {
    this.domainStore.$subscribe((mutation, state) => {
      this.domains = state.domains;
      this.totalElements = state.totalElements;
      this.pageLength = this.totalElements / 10 + 1;
    })
  },
  watch: {
    page(val, oldVal) {
      this.findDomainsApiCall(val-1);
    }
  },
  methods: {
    selectDomain(domainId) {
      this.domainStore.findDomainApiCall(domainId);
    },
    findDomainsApiCall(page) {
      const pageInfo = {
        page: page,
        size: 10
      };
      this.domainStore.findDomainsApiCallUsingPreviousKeyword(pageInfo);
    }
  }
}
</script>

<template>
  <div>
    <v-card>
      <v-card-title>
        도메인 검색결과 {{totalElements}}건
      </v-card-title>
      <v-divider/>
      <v-list>
        <v-list-item
            v-for="domain in domains"
            :key="domain.domainId"
            @click="selectDomain(domain.domainId)">
          <v-list-item-title>
            {{ domain.rootDomain }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>
    <v-pagination
        v-model="page"
        :length="pageLength">

    </v-pagination>
  </div>
</template>

<style scoped>

</style>
