<template>
  <div>
    <div class="header-dropdown" >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderDropdown"
}
</script>

<style lang="scss">
@import "./src/assets/styles/components/pop-ups/HeaderDropdown";
</style>