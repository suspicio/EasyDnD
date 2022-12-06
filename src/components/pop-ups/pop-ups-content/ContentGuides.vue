<template>
  <div class="content-all">
    <div class="content-all__column">
      <DropdownItem link="guides" text="Ability Scores" icon="AbilityScoresIcon" />
      <DropdownItem link="guides" text="Adventuring" icon="AdventuringIcon" />
      <DropdownItem link="guides" text="Combat" icon="CombatIcon" />
      <DropdownItem link="guides" text="Diseases" icon="DiseasesIcon" />
    </div>
    <div class="content-all__column">
      <DropdownItem link="guides" text="Feats" icon="FeatsIcon" />
      <DropdownItem link="guides" text="Gods" icon="GodsIcon" />
      <DropdownItem link="guides" text="Madness" icon="MadnessIcon" />
      <DropdownItem link="guides" text="Objects" icon="ObjectsIcon" />
    </div>
    <div class="content-all__column">
      <DropdownItem link="guides" text="Poisons" icon="PoisonsIcon" />
      <DropdownItem link="guides" text="Spellcasting" icon="SpellcastingIcon" />
      <DropdownItem link="guides" text="Traps" icon="TrapsIcon" />
    </div>
  </div>
</template>



<script>
import DropdownItem from "@/UI/select-items/DropdownItem";

export default {
  name: "ContentGuides",
  components: {DropdownItem}
}
</script>

<style lang="scss">
@import "./src/assets/styles/components/pop-ups/pop-ups-content/ContentGuides";
</style>