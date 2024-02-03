<script>
import AddLinkButton from "@/components/home/dialog/AddLinkButton.vue";

export default {
  name: "LinkSection",
  components: {AddLinkButton},
  data() {
    return {
      linkBundle: {
        linkBundleId: 1,
        description: "기본 분류",
        isDefault: true
      },
      links: [
        {
          linkId: 1,
          description: "내 블로그",
          url: "https://hseong.tistory.com/"
        },
        {
          linkId: 2,
          description: "내 깃허브",
          url: "https://github.com/hseong3243"
        }
      ]
    }
  },
  methods: {
    moveToLink(link) {
      window.open(link.url);
    }
  }
}
</script>

<template>
  <div class="d-flex flex-column">
    <div class="d-flex justify-space-between py-5">
      <div class="text-h5">{{ linkBundle.description }}</div>
      <AddLinkButton/>
    </div>
    <div class="d-flex flex-wrap ga-2">
      <v-card v-for="n in links" :key="n" @click="moveToLink(n)" hover>
        <v-card-item>
          <v-card-title>
            {{ n.description }}
          </v-card-title>
          <v-card-subtitle>
            {{ n.url }}
          </v-card-subtitle>
        </v-card-item>
      </v-card>
    </div>
  </div>
</template>

<style scoped>

</style>