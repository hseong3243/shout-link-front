<script>
export default {
  name: "ShowUrl",
  emits: ['showUrlEvent'],
  methods: {
    clickCheckBox() {
      this.$emit('showUrlEvent');
    }
  }
}
</script>

<template>
  <div class="d-flex align-center ga-1">
    <input
        id="show-url"
        type="checkbox"
        @click="clickCheckBox">
    <label for="show-url">URL 보기</label>
  </div>
</template>

<style scoped>
input#show-url {
  width: 17px;
  height: 17px;
  border: 3px solid black;
}

input#show-url + label {
  color: dimgray;
}
</style>
