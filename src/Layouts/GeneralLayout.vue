<template>
  <div class="general-layout">
    <TheHeader />
    <div class="gl-wrapper">
      <slot/>
    </div>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";
import TheFooter from "@/components/TheFooter";

export default {
  name: "GeneralLayout",
  components: {
    TheHeader: TheHeader,
    TheFooter: TheFooter
  }
}
</script>

<style lang="scss">
@import "./src/assets/styles/Layouts/GeneralLayout";

</style>