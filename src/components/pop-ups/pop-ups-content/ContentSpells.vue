<template>
  <div class="content-all">
    <div class="content-all__column">
      <DropdownItem text="Abjuration" icon="AbjurationIcon" />
      <DropdownItem text="Conjuration" icon="ConjurationIcon" />
      <DropdownItem text="Deviation" icon="DeviationIcon" />
    </div>
    <div class="content-all__column">
      <DropdownItem text="Enchantment" icon="EnchantmentIcon" />
      <DropdownItem text="Evocation" icon="EvocationIcon" />
      <DropdownItem text="Illusion" icon="IllusionIcon" />
    </div>
    <div class="content-all__column">
      <DropdownItem text="Necromancy" icon="NecromancyIcon" />
      <DropdownItem text="Transmutation" icon="TransmutationIcon" />
    </div>
  </div>
</template>

<script>
import DropdownItem from "@/UI/select-items/DropdownItem";

export default {
  name: "ContentSpells",
  components: {DropdownItem}
}
</script>

<style lang="scss">
@import "./src/assets/styles/components/pop-ups/pop-ups-content/ContentSpells";
</style>