<template>
  <div class="content-all">
    <div class="content-all__column">
      <DropdownItem text="Barbarian" icon="BarbarianIcon" />
      <DropdownItem text="Bard" icon="BardIcon" />
      <DropdownItem text="Cleric" icon="ClericIcon" />
      <DropdownItem text="Druid" icon="DruidIcon" />
      <DropdownItem text="Fighter" icon="FighterIcon" />
    </div>
    <div class="content-all__column">
      <DropdownItem text="Monk" icon="MonkIcon" />
      <DropdownItem text="Paladin" icon="PaladinIcon" />
      <DropdownItem text="Ranger" icon="RangerIcon" />
      <DropdownItem text="Rogue" icon="RogueIcon" />
      <DropdownItem text="Sorcerer" icon="SorcererIcon" />
    </div>
    <div class="content-all__column">
      <DropdownItem text="Warlock" icon="WarlockIcon" />
      <DropdownItem text="Wizard" icon="WizardIcon" />
      <DropdownItem text="Artificer" icon="ArtificerIcon" />
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