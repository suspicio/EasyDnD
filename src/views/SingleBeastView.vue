<template>
  <div class="initiator-component">
    <h1>{{ beast.name }}</h1>
    <div>{{ beast.size }}</div>
    <div>{{ beast.type }}</div>
    <div>{{ beast.subtype }}</div>
    <div>{{ beast.alignment }}</div>
    <div>{{ beast.armor_class }}</div>
    <div>{{ beast.hit_points }}</div>
    <div>{{ beast.hit_dice }}</div>
    <div>{{ beast.speed }}</div>
    <div>{{ beast.strength }}</div>
    <div>{{ beast.dexterity }}</div>
    <div>{{ beast.constitution }}</div>
    <div>{{ beast.intelligence }}</div>
    <div>{{ beast.wisdom }}</div>
    <div>{{ beast.charisma }}</div>
    <div>{{ beast.damage_vulnerabilities }}</div>
    <div>{{ beast.damage_resistances }}</div>
    <div>{{ beast.damage_immunities }}</div>
    <div>{{ beast.condition_immunities }}</div>
    <div>{{ beast.senses }}</div>
    <div>{{ beast.languages }}</div>
    "challenge_rating" == M
    "actions" == O
    "name" == M
    "desc" == M
    "attack_bonus" == M
    "damage_dice" == O
    "damage_bonus" == O
    "special_abilities" == O
    "name" == M
    "desc" == M
    "attack_bonus" == M
    "damage_dice" == O
    "legendary_actions" == O
    "name" == M
    "desc" == M
    "attack_bonus" == M
    "damage_dice" == O
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "SingleBeastView",
  props: {
    beastName: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      beast: {}
    }
  },
  created() {
    this.getBeast(this.beastName).then(
        (callback) => {
          this.beast = callback
        }
    )
  },
  methods: {
    ...mapActions(['getBeast']),
  }
}
</script>