<template>
  <div class="dashboard-wrapper">
      <MainItem text="Create<br/>Character" icon="CreateCharacterIcon"/>
      <MainItem text="Create Table" icon="CreateTableIcon"/>
      <MainItem text="Join Table" icon="JoinTableIcon"/>
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