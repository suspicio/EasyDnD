<template>
  <div class="content-all">
    <div class="content-all__column">
      <DropdownItem link="races" text="Dragonborn" icon="DragonbornIcon" />
      <DropdownItem link="races" text="Dwarf" icon="DwarfIcon" />
      <DropdownItem link="races" text="Gnome" icon="GnomeIcon" />
    </div>
    <div class="content-all__column">
      <DropdownItem link="races" text="Elf" icon="ElfIcon" />
      <DropdownItem link="races" text="Half-Elf" icon="HalfElfIcon" />
      <DropdownItem link="races" text="Halfling" icon="HalflingIcon" />
    </div>
    <div class="content-all__column">
      <DropdownItem link="races" text="Half-Orc" icon="HalfOrcIcon" />
      <DropdownItem link="races" text="Human" icon="HumanIcon" />
      <DropdownItem link="races" text="Tiefling" icon="TieflingIcon" />
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