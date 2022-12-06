<template>
  <router-link :to="link" class="main-item">
    <div class="main-item__text" v-html="text" />
    <IconManager :icon="icon"/>
  </router-link>
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
    },
    link: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
@import "./src/assets/styles/UI/MainItem";
</style>