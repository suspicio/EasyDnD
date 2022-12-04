<template>
  <div class="content-all">
    <div class="content-all__column">
      <DropdownItem link="spells" text="Abjuration" icon="AbjurationIcon" />
      <DropdownItem link="spells" text="Conjuration" icon="ConjurationIcon" />
      <DropdownItem link="spells" text="Deviation" icon="DeviationIcon" />
    </div>
    <div class="content-all__column">
      <DropdownItem link="spells" text="Enchantment" icon="EnchantmentIcon" />
      <DropdownItem link="spells" text="Evocation" icon="EvocationIcon" />
      <DropdownItem link="spells" text="Illusion" icon="IllusionIcon" />
    </div>
    <div class="content-all__column">
      <DropdownItem link="spells" text="Necromancy" icon="NecromancyIcon" />
      <DropdownItem link="spells" text="Transmutation" icon="TransmutationIcon" />
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