<template>
  <span>
    {{content.text}}
    <br/>
  </span>
</template>

<script>
export default {
  name: "TextComponent",
  props: {
    content: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scoped>

</style>