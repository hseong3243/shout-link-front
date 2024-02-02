<script>
export default {
  name: "LinkBundleSection",
  data() {
    return {
      linkBundles: [
        {
          linkBundleId: 1,
          description: "기본 분류",
          isDefault: true
        },
        {
          linkBundleId: 2,
          description: "관심있는 것들",
          isDefault: false
        }
      ]
    }
  }
}
</script>

<template>
  <div class="d-flex flex-column ga-2 mt-2">
    <div class="d-flex ga-2">
      <div class="text-h5">링크 묶음</div>
      <v-btn density="compact" icon="mdi-plus"></v-btn>
    </div>
    <div class="d-flex flex-wrap ga-2">
      <v-btn v-for="n in linkBundles"
             :key="n">
        {{ n.description }}
      </v-btn>
    </div>
  </div>
</template>

<style scoped>

</style>
