<template>
  <div class="content-all">
    <div class="content-all__column">
      <DropdownItem link="beasts" text="Aberration" icon="AberrationIcon" />
      <DropdownItem link="beasts" text="Beast" icon="BeastsIcon" />
      <DropdownItem link="beasts" text="Celestial" icon="CelestialsIcon" />
      <DropdownItem link="beasts" text="Construct" icon="ConstructsIcon" />
      <DropdownItem link="beasts" text="Dragon" icon="DragonsIcon" />
    </div>
    <div class="content-all__column">
      <DropdownItem link="beasts" text="Elemental" icon="ElementalsIcon" />
      <DropdownItem link="beasts" text="Fey" icon="FeyIcon" />
      <DropdownItem link="beasts" text="Fiend" icon="FiendsIcon" />
      <DropdownItem link="beasts" text="Giant" icon="GiantsIcon" />
      <DropdownItem link="beasts" text="Humanoid" icon="HumanoidsIcon" />
    </div>
    <div class="content-all__column">
      <DropdownItem link="beasts" text="Ooze" icon="OozesIcon" />
      <DropdownItem link="beasts" text="Plant" icon="PlantsIcon" />
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