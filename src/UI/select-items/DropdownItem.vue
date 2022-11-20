<template>
  <div class="dropdown-item">
    <div class="dropdown-item__icon"><IconManager :icon="icon"/></div>
    <div class="dropdown-item__text">{{text}}</div>
  </div>
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