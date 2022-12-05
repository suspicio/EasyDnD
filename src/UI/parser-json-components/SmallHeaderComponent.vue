<template>
  <h3>
    {{content.smallerHeader}}
  </h3>
</template>

<script>
export default {
  name: "SmallHeaderComponent",
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