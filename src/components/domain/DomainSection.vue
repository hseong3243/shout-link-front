<script>
import {useDomainStore} from "@/store/DomainStore.js";
import api from "@/axios/index.js";

export default {
  name: "DomainSection",
  setup() {
    const domainStore = useDomainStore();
    return {domainStore};
  },
  data() {
    return {
      page: 1,
      pageLength: 1,
      domain: {},
      links: [],
      totalElements: 0,
      findDomainLinksRequest: {
        page: 0,
        size: 10,
      },
      dataReady: false,
    }
  },
  mounted() {
    this.domainStore.$subscribe((mutation, state) => {
      if (state.isSelected) {
        this.domain = state.domain;
        this.findDomainLinksApiCall(this.domain.domainId);
      }
    })
  },
  methods: {
    moveToLink(url) {
      window.open(url);
    },
    async findDomainLinksApiCall(domainId) {
      const response = await api.get(`/api/domains/${domainId}/links`, {
        params: {
          page: this.findDomainLinksRequest.page,
          size: this.findDomainLinksRequest.size,
        }
      });
      const data = response.data;
      this.links = data.links;
      this.totalElements = data.totalElements;
    }
  }
}
</script>

<template>
  <div>
    <v-card>
      <v-card-title>
        도메인 정보
      </v-card-title>
      <v-card-text>
        <div>
          <div>
            루트 도메인
          </div>
          <div class="text-h5 font-weight-bold clickable"
               @click="moveToLink(domain.rootDomain)">
            {{ domain.rootDomain }}
          </div>
        </div>
        <v-table>
          <thead>
          <tr>
            <th class="w-75">
              연관 링크
            </th>
            <th class="w-25">
              집계수
            </th>
          </tr>
          </thead>
          <tbody>
          <tr
              v-for="link in links"
              :key="link.linkId">
            <td class="w-75 clickable"
                @click="moveToLink(link.url)">
              {{ link.url }}
            </td>
            <td class="w-25">
              {{ link.aggregationCount }}
            </td>
          </tr>
          </tbody>
        </v-table>
      </v-card-text>
    </v-card>
  </div>
</template>

<style scoped>
.clickable:hover {
  cursor: pointer;
}
</style>
