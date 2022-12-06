<template>
  <div class="dashboard-wrapper">
      <MainItem link="create-char" text="Create<br/>Character" icon="CreateCharacterIcon"/>
      <MainItem link="create-map" text="Create Table" icon="CreateTableIcon"/>
      <MainItem link="join" text="Join Table" icon="JoinTableIcon"/>
  </div>
</template>

<script>
import MainItem from "@/UI/select-items/MainItem";

export default {
  name: "DashboardView",
  components: {MainItem}
}
</script>

<style lang="scss">
@import "@/assets/styles/views/DashboardView.scss";

</style>