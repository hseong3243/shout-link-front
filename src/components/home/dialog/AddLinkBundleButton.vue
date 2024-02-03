<script>

export default {
  name: "AddLinkBundleButton",
  methods: {},
  data() {
    return {
      dialog: false,
      createLinkBundleRequest: {
        description: "",
        isDefault: false,
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
        <v-card-title>링크 묶음 추가</v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field
                v-model="createLinkBundleRequest.description"
                label="링크 묶음 설명"
                density="comfortable"
                variant="solo">
            </v-text-field>
            <v-checkbox
                v-model="createLinkBundleRequest.isDefault"
                label="기본 묶음 지정"></v-checkbox>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn>추가</v-btn>
          <!--          <v-btn color="primary" block @click="dialog = false">Close Dialog</v-btn>-->
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<style scoped>

</style>
