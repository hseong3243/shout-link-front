<script>
export default {
  name: "AddLinkButton",
  data() {
    return {
      dialog: false,
      linkBundles: [
        {
          linkBundleId: 1,
          description: "기본 분류",
          isDefault: true,
        }
      ],
      createLinkRequest: {
        linkBundleId: 1,
        description: "",
        url: "",
      }
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
                v-model="createLinkRequest.linkBundleId"
                :items="linkBundles"
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
          <v-btn>추가</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<style scoped>

</style>
