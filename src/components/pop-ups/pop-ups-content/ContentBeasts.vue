<template>
  <div class="content-all">
    <div class="content-all__column">
      <DropdownItem text="Aberration" icon="AberrationIcon" />
      <DropdownItem text="Beasts" icon="BeastsIcon" />
      <DropdownItem text="Celestials" icon="CelestialsIcon" />
      <DropdownItem text="Constructs" icon="ConstructsIcon" />
      <DropdownItem text="Dragons" icon="DragonsIcon" />
    </div>
    <div class="content-all__column">
      <DropdownItem text="Elementals" icon="ElementalsIcon" />
      <DropdownItem text="Fey" icon="FeyIcon" />
      <DropdownItem text="Fiends" icon="FiendsIcon" />
      <DropdownItem text="Giants" icon="GiantsIcon" />
      <DropdownItem text="Humanoids" icon="HumanoidsIcon" />
    </div>
    <div class="content-all__column">
      <DropdownItem text="Oozes" icon="OozesIcon" />
      <DropdownItem text="Plants" icon="PlantsIcon" />
      <DropdownItem text="Undead" icon="UndeadIcon" />
    </div>
  </div>
</template>

<script>
import DropdownItem from "@/UI/select-items/DropdownItem";

export default {
  name: "ContentBeasts",
  components: {DropdownItem}
}
</script>

<style lang="scss">
@import "./src/assets/styles/components/pop-ups/pop-ups-content/ContentBeasts";
</style>