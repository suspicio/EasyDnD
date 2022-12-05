<template>
  <h2>
    {{content.header}}
  </h2>
</template>

<script>
export default {
  name: "HeaderComponent",
  props: {
    content: {
      type: Object,
      default: () => {}
    }
  },
}
</script>

<style scoped>

</style>