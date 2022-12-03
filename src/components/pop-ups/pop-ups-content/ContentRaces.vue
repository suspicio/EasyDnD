<template>
  <div class="content-all">
    <div class="content-all__column">
      <DropdownItem text="Dragonborn" icon="DragonbornIcon" />
      <DropdownItem text="Dwarf" icon="DwarfIcon" />
      <DropdownItem text="Gnome" icon="GnomeIcon" />
    </div>
    <div class="content-all__column">
      <DropdownItem text="Elf" icon="ElfIcon" />
      <DropdownItem text="Half-Elf" icon="HalfElfIcon" />
      <DropdownItem text="Halfling" icon="HalflingIcon" />
    </div>
    <div class="content-all__column">
      <DropdownItem text="Half-Orc" icon="HalfOrcIcon" />
      <DropdownItem text="Human" icon="HumanIcon" />
      <DropdownItem text="Tiefling" icon="TieflingIcon" />
    </div>
  </div>
</template>

<script>
import DropdownItem from "@/UI/select-items/DropdownItem";

export default {
  name: "ContentRaces",
  components: {DropdownItem}
}
</script>

<style lang="scss">
@import "./src/assets/styles/components/pop-ups/pop-ups-content/ContentRaces";
</style>