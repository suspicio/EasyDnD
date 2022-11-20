<template>
  <div id="app">
    <GeneralLayout v-if="$route.meta !== 'inGame'">
      <router-view />
    </GeneralLayout>
    <InGameLayout v-else>
      <router-view />
    </InGameLayout>
  </div>
</template>

<script>
import GeneralLayout from "@/Layouts/GeneralLayout";
import InGameLayout from "@/Layouts/InGameLayout";

export default {
  name: 'App',
  components: {
    GeneralLayout,
    InGameLayout
  }
}
</script>

<style lang="scss">
  @import "./assets/styles/app";
</style>
