<script>
export default {
  name: "AddHubButton",
  data() {
    return {
      dialog: false,
      createHubRequest: {
        name: "",
        description: "",
        isPrivate: false,
      }
    }
  },
  methods: {
    createHubApiCall() {

    }
  }
}
</script>

<template>
  <div class="text-center">
    <v-btn>허브 만들기</v-btn>
    <v-dialog
        v-model="dialog"
        activator="parent"
        width="450"
    >
      <v-card>
        <v-card-title>허브 만들기</v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field
                v-model="createHubRequest.name"
                label="허브 이름"
                density="comfortable"
                variant="solo">
            </v-text-field>
            <v-text-field
                v-model="createHubRequest.description"
                label="허브 설명"
                density="comfortable"
                variant="solo">
            </v-text-field>
            <v-checkbox
                v-model="createHubRequest.isPrivate"
                label="허브 공개 여부"></v-checkbox>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="createHubApiCall">추가</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<style scoped>

</style>
