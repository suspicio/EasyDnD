<template>
  <a :href="'/' + text" class="dropdown-item">
    <span class="dropdown-item__icon"><IconManager :icon="icon"/></span>
    <span class="dropdown-item__text">{{text}}</span>
  </a>
</template>

<script>
import IconManager from "@/UI/icons/IconManager";

export default {
  name: "DropdownItem",
  components: {
    IconManager
  },

  props: {
    text: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
@import "./src/assets/styles/UI/DropdownItem";
</style>