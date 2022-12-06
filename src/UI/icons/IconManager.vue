<template>
  <component :is="icon" />
</template>

<script>
export default {
  name: "IconManager",
  components: {
    //General
    AlternativeArrowIcon: () => import("@/UI/icons/General/AlternativeArrowIcon"),
    ArrowIcon: () => import("@/UI/icons/General/ArrowIcon"),
    SwordIcon: () => import("@/UI/icons/General/SwordIcon"),
    CreateCharacterIcon: () => import("@/UI/icons/General/CreateCharacterIcon"),
    CreateTableIcon: () => import("@/UI/icons/General/CreateTableIcon"),
    JoinTableIcon: () => import("@/UI/icons/General/JoinTableIcon"),
    DragonIcon: () => import("@/UI/icons/General/DragonIcon"),

    //Social
    FacebookIcon: () => import("@/UI/icons/Social/FacebookIcon"),
    InstagramIcon: () => import("@/UI/icons/Social/InstagramIcon"),
    LinkIcon: () => import("@/UI/icons/Social/LinkIcon"),
    TwitterIcon: () => import("@/UI/icons/Social/TwitterIcon"),

    //Classes
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

    //Races
    DragonbornIcon: () => import('@/UI/icons/Races/DragonbornIcon'),
    DwarfIcon: () => import('@/UI/icons/Races/DwarfIcon'),
    ElfIcon: () => import('@/UI/icons/Races/ElfIcon'),
    GnomeIcon: () => import('@/UI/icons/Races/GnomeIcon'),
    HalfElfIcon: () => import('@/UI/icons/Races/HalfElfIcon'),
    HalflingIcon: () => import('@/UI/icons/Races/HalflingIcon'),
    HalfOrcIcon: () => import('@/UI/icons/Races/HalfOrcIcon'),
    HumanIcon: () => import('@/UI/icons/Races/HumanIcon'),
    TieflingIcon: () => import('@/UI/icons/Races/TieflingIcon'),

    //Spells classes
    AbjurationIcon: () => import('@/UI/icons/Spells/AbjurationIcon'),
    ConjurationIcon: () => import('@/UI/icons/Spells/ConjurationIcon'),
    DeviationIcon: () => import('@/UI/icons/Spells/DeviationIcon'),
    EnchantmentIcon: () => import('@/UI/icons/Spells/EnchantmentIcon'),
    EvocationIcon: () => import('@/UI/icons/Spells/EvocationIcon'),
    IllusionIcon: () => import('@/UI/icons/Spells/IllusionIcon'),
    NecromancyIcon: () => import('@/UI/icons/Spells/NecromancyIcon'),
    TransmutationIcon: () => import('@/UI/icons/Spells/TransmutationIcon'),

    //Beasts
    AberrationIcon: () => import('@/UI/icons/Beasts/AberrationIcon'),
    BeastsIcon: () => import('@/UI/icons/Beasts/BeastsIcon'),
    CelestialsIcon: () => import('@/UI/icons/Beasts/CelestialsIcon'),
    ConstructsIcon: () => import('@/UI/icons/Beasts/ConstructsIcon'),
    DragonsIcon: () => import('@/UI/icons/Beasts/DragonsIcon'),
    ElementalsIcon: () => import('@/UI/icons/Beasts/ElementalsIcon'),
    FeyIcon: () => import('@/UI/icons/Beasts/FeyIcon'),
    FiendsIcon: () => import('@/UI/icons/Beasts/FiendsIcon'),
    GiantsIcon: () => import('@/UI/icons/Beasts/GiantsIcon'),
    HumanoidsIcon: () => import('@/UI/icons/Beasts/HumanoidsIcon'),
    OozesIcon: () => import('@/UI/icons/Beasts/OozesIcon'),
    PlantsIcon: () => import('@/UI/icons/Beasts/PlantsIcon'),
    UndeadIcon: () => import('@/UI/icons/Beasts/UndeadIcon'),

    //Equipment
    AdventuringGearIcon: () => import('@/UI/icons/Equipment/AdventuringGearIcon'),
    ArmorIcon: () => import('@/UI/icons/Equipment/ArmorIcon'),
    EquipmentIcon: () => import('@/UI/icons/Equipment/EquipmentIcon'),
    ExpensesIcon: () => import('@/UI/icons/Equipment/ExpensesIcon'),
    MountsVehiclesIcon: () => import('@/UI/icons/Equipment/MountsVehiclesIcon'),
    SellingTreasureIcon: () => import('@/UI/icons/Equipment/SellingTreasureIcon'),
    ToolsIcon: () => import('@/UI/icons/Equipment/ToolsIcon'),
    TradeGoodsIcon: () => import('@/UI/icons/Equipment/TradeGoodsIcon'),
    WeaponsIcon: () => import('@/UI/icons/Equipment/WeaponsIcon'),

    //Guides
    AbilityScoresIcon: () => import('@/UI/icons/Guides/AbilityScoresIcon'),
    AdventuringIcon: () => import('@/UI/icons/Guides/AdventuringIcon'),
    CombatIcon: () => import('@/UI/icons/Guides/CombatIcon'),
    DiseasesIcon: () => import('@/UI/icons/Guides/DiseasesIcon'),
    FeatsIcon: () => import('@/UI/icons/Guides/FeatsIcon'),
    GodsIcon: () => import('@/UI/icons/Guides/GodsIcon'),
    MadnessIcon: () => import('@/UI/icons/Guides/MadnessIcon'),
    ObjectsIcon: () => import('@/UI/icons/Guides/ObjectsIcon'),
    PoisonsIcon: () => import('@/UI/icons/Guides/PoisonsIcon'),
    SpellcastingIcon: () => import('@/UI/icons/Guides/SpellcastingIcon'),
    TrapsIcon: () => import('@/UI/icons/Guides/TrapsIcon'),
  },

  props: {
    icon: {
      type: String,
      default: 'AlternativeArrowIcon'
    }
  }
}
</script>