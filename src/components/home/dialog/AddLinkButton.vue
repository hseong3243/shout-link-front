<script>
import api from "@/axios/index.js";
import {useLinkBundleStore} from "@/store/LinkBundleStore.js";

export default {
  name: "AddLinkButton",
  setup() {
    const linkBundleStore = useLinkBundleStore();
    return {linkBundleStore};
  },
  emits: ['addLinkEvent'],
  data() {
    return {
      dialog: false,
      selectedLinkBundle: {
        linkBundleId: 1,
        description: "",
        isDefault: false,
      },
      createLinkRequest: {
        linkBundleId: 1,
        description: "",
        url: "",
      }
    }
  },
  mounted() {
    this.selectedLinkBundle = this.linkBundleStore.getSelectedLinkBundle;
  },
  methods: {
    createLinkApiCall() {
      api.post('/api/links', {
        linkBundleId: this.selectedLinkBundle.linkBundleId,
        url: this.createLinkRequest.url,
        description: this.createLinkRequest.description
      })
      .then((response) => {
        alert('새로운 링크가 추가되었습니다!');
        this.dialog = false;
        this.$emit('addLinkEvent');
      })
      .catch((error) => {

      })
    }
  }
}
</script>

<template>
  <div class="text-center">
    <v-btn density="compact" icon="mdi-plus"></v-btn>
    <v-dialog
        v-model="dialog"
        activator="parent"
        width="450"
    >
      <v-card>
        <v-card-title>링크 추가</v-card-title>
        <v-card-text>
          <v-form>
            <v-select
                v-model="selectedLinkBundle"
                :items="linkBundleStore.linkBundles"
                item-title="description"
                item-value="linkBundleId"
                label="분류"
                density="comfortable"
                variant="solo">
            </v-select>
            <v-text-field
                v-model="createLinkRequest.description"
                label="링크 설명"
                density="comfortable"
                variant="solo">
            </v-text-field>
            <v-text-field
                v-model="createLinkRequest.url"
                label="링크 url"
                density="comfortable"
                variant="solo">
            </v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="createLinkApiCall">추가</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<style scoped>

</style>
