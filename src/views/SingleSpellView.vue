<template>
  <div class="initiator-component">
    <h1>{{ spell.name }}</h1>
    <table class="fl-table">
      <tr>
        <td>Range: {{ spell.range }}</td>
        <td>School: {{ spell['school'] }}</td>
        <td>Class: {{ spell['class'] }}</td>
        <td>Level: {{ spell['level'] }}</td>
      </tr>
      <tr>
        <td>Components: {{ spell.components }}</td>
        <td>Duration: {{ spell.duration }}</td>
        <td>Concentration: {{ spell.concentration }}</td>
        <td>Casting time: {{ spell['casting_time'] }}</td>
      </tr>
      <tr>
        <td>Ritual: {{ spell.ritual }}</td>
        <td v-if="spell?.archetype">Archetype:&nbsp;<span v-html="spell.archetype"/></td>
        <td v-else>-</td>
        <td v-if="spell?.domains">Domains: {{ spell['domains'] }}</td>
        <td v-else>-</td>
        <td v-if="spell?.oaths">Oaths: {{ spell['oaths'] }}</td>
        <td v-else>-</td>
      </tr>
      <tr v-if="spell?.oaths || spell?.circles || spell?.patrons">
        <td v-if="spell?.circles">Circles: {{ spell['circles'] }}</td>
        <td v-else>-</td>
        <td v-if="spell?.patrons">Patrons: {{ spell['patrons'] }}</td>
        <td v-else>-</td>
      </tr>
    </table>
    <div style="margin-top: 30px" v-if="spell?.material">Material:&nbsp;<span v-html="spell.material"/></div>
    <div style="margin-top: 30px" v-html="spell.desc"/>
    <div style="margin-top: 30px" v-html="spell['higher_level']"/>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "SingleSpellView",
  props: {
    spellName: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      spell: {}
    }
  },
  created() {
    this.getSpell(this.spellName).then(
        (callback) => {
          this.spell = callback[0]
        }
    )
  },
  methods: {
    ...mapActions(['getSpell']),
  }
}
</script>

<style lang="scss">
.initiator-component table tr td {
  font-size: 24px;
}

.initiator-component {
  font-size: 24px;
}
</style>