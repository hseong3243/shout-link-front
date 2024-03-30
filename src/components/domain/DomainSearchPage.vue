<script>
import DomainSearchForm from "@/components/domain/DomainSearchForm.vue";
import DomainListSection from "@/components/domain/DomainListSection.vue";
import DomainSection from "@/components/domain/DomainSection.vue";
import {useDomainStore} from "@/store/DomainStore.js";

export default {
  name: "DomainSearchPage",
  components: {DomainSection, DomainListSection, DomainSearchForm},
  setup() {
    const domainStore = useDomainStore();
    return {domainStore};
  },
  data() {
    return {
    }
  },
  mounted() {
  }
}
</script>

<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="6">
          <DomainListSection/>
        </v-col>
        <v-col cols="6">
          <DomainSection/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>

</style>
