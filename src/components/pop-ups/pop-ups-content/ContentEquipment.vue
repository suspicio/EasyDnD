<template>
  <div class="content-all">
    <div class="content-all__column">
      <DropdownItem link="equipment" text="Equipment" icon="AberrationIcon" />
      <DropdownItem link="equipment" text="Selling Treasure" icon="BeastsIcon" />
      <DropdownItem link="equipment" text="Armor" icon="CelestialsIcon" />
    </div>
    <div class="content-all__column">
      <DropdownItem link="equipment" text="Weapons" icon="ElementalsIcon" />
      <DropdownItem link="equipment" text="Adventuring Gear" icon="FeyIcon" />
      <DropdownItem link="equipment" text="Tools" icon="FiendsIcon" />
    </div>
    <div class="content-all__column">
      <DropdownItem link="equipment" text="Mounts and Vehicles" icon="OozesIcon" />
      <DropdownItem link="equipment" text="Trade Goods" icon="PlantsIcon" />
      <DropdownItem link="equipment" text="Expenses" icon="UndeadIcon" />
    </div>
  </div>
</template>

<script>
import DropdownItem from "@/UI/select-items/DropdownItem";

export default {
  name: "ContentEquipment",
  components: {DropdownItem}
}
</script>

<style lang="scss">
@import "./src/assets/styles/components/pop-ups/pop-ups-content/ContentArtifact";
</style>