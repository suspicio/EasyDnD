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
    ArtificerIcon: () => import('@/UI/icons/ArtificerIcon'),
    BarbarianIcon: () => import('@/UI/icons/BarbarianIcon'),
    BardIcon: () => import('@/UI/icons/BardIcon'),
    ClericIcon: () => import('@/UI/icons/ClericIcon'),
    DruidIcon: () => import('@/UI/icons/DruidIcon'),
    FighterIcon: () => import('@/UI/icons/FighterIcon'),
    MonkIcon: () => import('@/UI/icons/MonkIcon'),
    PaladinIcon: () => import('@/UI/icons/PaladinIcon'),
    RangerIcon: () => import('@/UI/icons/RangerIcon'),
    RogueIcon: () => import('@/UI/icons/RogueIcon'),
    SorcererIcon: () => import('@/UI/icons/SorcererIcon'),
    WarlockIcon: () => import('@/UI/icons/WarlockIcon'),
    WizardIcon: () => import('@/UI/icons/WizardIcon'),
  },

  props: {
    icon: {
      type: String,
      default: 'AlternativeArrowIcon'
    }
  }
}
</script>