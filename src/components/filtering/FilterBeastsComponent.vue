<template>
  <div class="filter-wrapper">
    <div class="filter-inputs">
      <input placeholder="Beast Name" class="filter-input" v-model="searchingName"/>
      <v-select placeholder="Beast Type" class="filter-select" multiple v-model="searchingType" :options="typeOptions"/>
      <v-select placeholder="Beast Size" class="filter-select" multiple v-model="searchingSize" :options="sizeOptions"/>
      <v-select placeholder="Beast Challenge Rating" class="filter-select" multiple v-model="searchingChallenge" :options="challengeOptions"/>
    </div>
    <div class="filter-buttons">
      <button @click="applyFilters" class="btn-apply">Apply Filters</button>
      <IconManager class="dragon-right" icon="DragonIcon"/>
      <button @click="resetFilters" class="btn-reset">Reset Filters</button>
      <IconManager class="dragon-left" icon="DragonIcon"/>
    </div>
  </div>
</template>

<script>

import IconManager from "@/UI/icons/IconManager";
export default {
  name: "FilterComponent",
  components: {IconManager},
  props: {
    initialBeast: {
      type: String,
      default: ''
    }
  },
  created() {
    if (this.initialBeast !== '')
      this.searchingType.push(this.initialBeast)
  },
  data() {
    return {
      searchingName: '',
      searchingSize: [],
      searchingType: [],
      searchingChallenge: [],
      sizeOptions: ['Tiny', 'Small', 'Medium', 'Large', 'Huge', 'Gargantuan'],
      typeOptions: ['Aberration', 'Beast', 'Celestial', 'Construct', 'Dragon', 'Elemental', 'Fey', 'Fiend',
        'Giant', 'Humanoid', 'Ooze', 'Plant', 'Undead'],
      challengeOptions: ['0', '1/8', '1/4', '1/2', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
        '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'
      ]
    }
  },
  methods: {
    applyFilters() {
      this.$emit('applyFilters', this.searchingName, this.searchingSize, this.searchingType, this.searchingChallenge)
    },

    resetFilters() {
      this.$emit('applyFilters', '', [], [], []);
      this.searchingName = '';
      this.searchingSize = [];
      this.searchingType = [];
      this.searchingChallenge = [];
    }
  }
}
</script>

<style lang="scss">
</style>