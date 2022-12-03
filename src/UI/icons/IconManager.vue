<template>
  <component :is="icon" />
</template>

<script>
export default {
  name: "IconManager",
  components: {
    AlternativeArrowIcon: () => import("@/UI/icons/AlternativeArrowIcon"),
    ArrowIcon: () => import("@/UI/icons/ArrowIcon"),
    SwordIcon: () => import("@/UI/icons/SwordIcon"),
    ArtificerIcon: () => import('@/UI/icons/Classes/ArtificerIcon'),
    BarbarianIcon: () => import('@/UI/icons/Classes/BarbarianIcon'),
    BardIcon: () => import('@/UI/icons/Classes/BardIcon'),
    ClericIcon: () => import('@/UI/icons/Classes/ClericIcon'),
    DruidIcon: () => import('@/UI/icons/Classes/DruidIcon'),
    FighterIcon: () => import('@/UI/icons/Classes/FighterIcon'),
    MonkIcon: () => import('@/UI/icons/Classes/MonkIcon'),
    PaladinIcon: () => import('@/UI/icons/Classes/PaladinIcon'),
    RangerIcon: () => import('@/UI/icons/Classes/RangerIcon'),
    RogueIcon: () => import('@/UI/icons/Classes/RogueIcon'),
    SorcererIcon: () => import('@/UI/icons/Classes/SorcererIcon'),
    WarlockIcon: () => import('@/UI/icons/Classes/WarlockIcon'),
    WizardIcon: () => import('@/UI/icons/Classes/WizardIcon'),
    DragonbornIcon: () => import('@/UI/icons/Races/DragonbornIcon'),
    DwarfIcon: () => import('@/UI/icons/Races/DwarfIcon'),
    ElfIcon: () => import('@/UI/icons/Races/ElfIcon'),
    GnomeIcon: () => import('@/UI/icons/Races/GnomeIcon'),
    HalfElfIcon: () => import('@/UI/icons/Races/HalfElfIcon'),
    HalflingIcon: () => import('@/UI/icons/Races/HalflingIcon'),
    HalfOrcIcon: () => import('@/UI/icons/Races/HalfOrcIcon'),
    HumanIcon: () => import('@/UI/icons/Races/HumanIcon'),
    TieflingIcon: () => import('@/UI/icons/Races/TieflingIcon'),
    AbjurationIcon: () => import('@/UI/icons/Spells/AbjurationIcon'),
    ConjurationIcon: () => import('@/UI/icons/Spells/ConjurationIcon'),
    DeviationIcon: () => import('@/UI/icons/Spells/DeviationIcon'),
    EnchantmentIcon: () => import('@/UI/icons/Spells/EnchantmentIcon'),
    EvocationIcon: () => import('@/UI/icons/Spells/EvocationIcon'),
    IllusionIcon: () => import('@/UI/icons/Spells/IllusionIcon'),
    NecromancyIcon: () => import('@/UI/icons/Spells/NecromancyIcon'),
    TransmutationIcon: () => import('@/UI/icons/Spells/TransmutationIcon'),
  },

  props: {
    icon: {
      type: String,
      default: 'AlternativeArrowIcon'
    }
  }
}
</script>