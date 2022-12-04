<template>
  <div class="main-item">
    <IconManager :icon="icon"/>
    <div class="main-item__text" v-html="text" />
  </div>
</template>

<script>
import IconManager from "@/UI/icons/IconManager";
export default {
  name: "MainItem",
  components: {IconManager},
  props: {
    icon: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
@import "./src/assets/styles/UI/MainItem";
</style>