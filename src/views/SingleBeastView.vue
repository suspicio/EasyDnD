<template>
  <div class="initiator-component">
    <h2>{{ beast.name }}</h2>

    <div style="margin-bottom: 20px">
      <span>{{ beast.size + " " }}</span>
      <span>{{ beast.type + ", "}}</span>
      <span v-if="beast.subtype !== ''">{{ beast.subtype + ", "}}</span>
      <span>{{ beast.alignment }}</span>
    </div>


    <div v-if="beast.armor_class !== ''"><strong>Armor Class:</strong> {{ beast.armor_class }}</div>
    <div v-if="beast.hit_points !== ''"><strong>Hit Points:</strong> {{ beast.hit_points }} ({{ beast.hit_dice }})</div>
    <div v-if="beast.speed !== ''"><strong>Speed:</strong> {{ beast.speed }}</div>
    <table style="margin: 10px 0" class="fl-table">
      <thead>
      <th>Str</th>
      <th>Dex</th>
      <th>Con</th>
      <th>Int</th>
      <th>Wis</th>
      <th>Cha</th>
      </thead>
      <tr>
        <td>{{ beast.strength }}</td>
        <td>{{ beast.dexterity }}</td>
        <td>{{ beast.constitution }}</td>
        <td>{{ beast.intelligence }}</td>
        <td>{{ beast.wisdom }}</td>
        <td>{{ beast.charisma }}</td>
      </tr>
    </table>
    <div v-if="beast.damage_vulnerabilities !== ''"><strong>Vulnerabilities:</strong> {{ beast.damage_vulnerabilities }}</div>
    <div v-if="beast.damage_resistances !== ''"><strong>Resistances:</strong> {{ beast.damage_resistances }}</div>
    <div v-if="beast.damage_immunities !== ''"><strong>Damage Immunities:</strong> {{ beast.damage_immunities }}</div>
    <div v-if="beast.condition_immunities !== ''"><strong>Condition Immunities:</strong> {{ beast.condition_immunities }}</div>
    <div v-if="beast.senses !== ''"><strong>Senses:</strong> {{ beast.senses }}</div>
    <div v-if="beast.languages !== ''"><strong>Languages:</strong> {{ beast.languages }}</div>
    <div v-if="beast.challenge_rating !== ''"><strong>Challenge:</strong> {{ beast.challenge_rating }}</div>

    <div v-if="beast?.special_abilities">
      <h3  style="margin-top: 20px">Special Abilities: </h3>
      <div style="margin-top: 10px" v-for="(elem, key) in beast.special_abilities" :key="'special-abil-' + key">
        <i><b>{{elem.name}}.</b></i> {{elem.desc}}
      </div>
    </div>


    <div v-if="beast?.actions">
      <h3 style="margin-top: 20px">Actions: </h3>
      <div style="margin-top: 10px" v-for="(elem, key) in beast.actions" :key="'actions-' + key">
        <i><b>{{elem.name}}.</b></i> {{elem.desc}}
      </div>
    </div>

    <div v-if="beast?.legendary_actions">
      <h3 style="margin-top: 20px">Legendary Actions: </h3>
      <div style="margin-top: 10px" v-for="(elem, key) in beast.legendary_actions" :key="'legendary-actions-' + key">
        <i><b>{{elem.name}}.</b></i> {{elem.desc}}
      </div>
    </div>
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