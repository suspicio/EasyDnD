<template>
  <div class="content-all">
    <div class="content-all__column">
      <DropdownItem link="classes" text="Barbarian" icon="BarbarianIcon" />
      <DropdownItem link="classes" text="Bard" icon="BardIcon" />
      <DropdownItem link="classes" text="Cleric" icon="ClericIcon" />
      <DropdownItem link="classes" text="Druid" icon="DruidIcon" />
      <DropdownItem link="classes" text="Fighter" icon="FighterIcon" />
    </div>
    <div class="content-all__column">
      <DropdownItem link="classes" text="Monk" icon="MonkIcon" />
      <DropdownItem link="classes" text="Paladin" icon="PaladinIcon" />
      <DropdownItem link="classes" text="Ranger" icon="RangerIcon" />
      <DropdownItem link="classes" text="Rogue" icon="RogueIcon" />
      <DropdownItem link="classes" text="Sorcerer" icon="SorcererIcon" />
    </div>
    <div class="content-all__column">
      <DropdownItem link="classes" text="Warlock" icon="WarlockIcon" />
      <DropdownItem link="classes" text="Wizard" icon="WizardIcon" />
      <DropdownItem link="classes" text="Artificer" icon="ArtificerIcon" />
    </div>
  </div>
</template>

<script>
import DropdownItem from "@/UI/select-items/DropdownItem";
export default {
  name: "ContentClasses",
  components: {DropdownItem}
}
</script>

<style lang="scss">
@import "./src/assets/styles/components/pop-ups/pop-ups-content/ContentClasses";
@import "./src/assets/styles/components/pop-ups/pop-ups-content/ContentAll";
</style>