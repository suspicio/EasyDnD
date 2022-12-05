<template>
  <ul>
    <li>{{content.list.substring(1)}}</li>
  </ul>
</template>

<script>
export default {
  name: "ListComponent",
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