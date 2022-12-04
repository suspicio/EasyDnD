<template>
  <div class="content-all">
    <div class="content-all__column">
      <DropdownItem link="beasts" text="Aberration" icon="AberrationIcon" />
      <DropdownItem link="beasts" text="Beasts" icon="BeastsIcon" />
      <DropdownItem link="beasts" text="Celestials" icon="CelestialsIcon" />
      <DropdownItem link="beasts" text="Constructs" icon="ConstructsIcon" />
      <DropdownItem link="beasts" text="Dragons" icon="DragonsIcon" />
    </div>
    <div class="content-all__column">
      <DropdownItem link="beasts" text="Elementals" icon="ElementalsIcon" />
      <DropdownItem link="beasts" text="Fey" icon="FeyIcon" />
      <DropdownItem link="beasts" text="Fiends" icon="FiendsIcon" />
      <DropdownItem link="beasts" text="Giants" icon="GiantsIcon" />
      <DropdownItem link="beasts" text="Humanoids" icon="HumanoidsIcon" />
    </div>
    <div class="content-all__column">
      <DropdownItem link="beasts" text="Oozes" icon="OozesIcon" />
      <DropdownItem link="beasts" text="Plants" icon="PlantsIcon" />
      <DropdownItem link="beasts" text="Undead" icon="UndeadIcon" />
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