<template>
  <div class="filter-wrapper">
    <div class="filter-inputs">
      <input placeholder="Spell Name" class="filter-input" v-model="searchingName"/>
      <v-select placeholder="Levels" class="filter-select" multiple v-model="selectedLevels" :options="levelOptions"/>
      <v-select placeholder="Schools" class="filter-select" multiple v-model="selectedSchools" :options="schoolsOptions"/>
      <v-select placeholder="Classes" class="filter-select" multiple v-model="selectedClasses" :options="classesOptions"/>
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
    initialSpell: {
      type: String,
      default: ''
    }
  },
  created() {
    if (this.initialSpell !== '')
      this.selectedSchools.push(this.initialSpell)
  },
  data() {
    return {
      searchingName: '',
      selectedLevels: [],
      selectedSchools: [],
      selectedClasses: [],
      levelOptions: ['Cantrip', '1st-level', '2nd-level', '3rd-level', '4th-level', '5th-level', '6th-level', '7th-level', '8th-level', '9th-level'],
      schoolsOptions: ['Abjuration', 'Conjuration', 'Divination', 'Enchantment', 'Evocation', 'Illusion', 'Necromancy', 'Transmutation'],
      classesOptions: ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard', 'Artificer']
    }
  },
  methods: {
    applyFilters() {
      this.$emit('applyFilters', this.searchingName, this.selectedLevels, this.selectedSchools, this.selectedClasses)
    },

    resetFilters() {
      this.$emit('applyFilters', '', [], [], []);
      this.searchingName = '';
      this.selectedClasses = [];
      this.selectedSchools = [];
      this.selectedLevels = [];
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/styles/constants.scss";

.btn {
  &-apply {
    cursor: pointer;
    margin-right: 20px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 50px;
    background: #fff;
    border-radius: 999px;
    font-family: 'Pirata One';
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 36px;


    &:hover {
      // box-shadow: 0 0 20px 10px rgba(230, 30, 10, 0.6);
      animation: burn2 1000ms ease-out forwards;

      & + .dragon-right {
        animation: dragon 1000ms ease-out forwards;
      }

      &::before {
        content: '';
        position: absolute;
        left: 40px;
        width: 100px;
        height: 40px;
        background: rgba(255, 230, 110, 1);
        border-radius: 100%;
        animation: flare 1000ms ease-out forwards;
      }

      &::after {
        content: '';
        position: absolute;
        right: 40px;
        width: 100px;
        height: 40px;
        background: rgba(255, 230, 110, 1);
        border-radius: 100%;
        animation: flare 1000ms ease-out forwards;
      }
    }


    @keyframes flare {
      100% {
        transform: translateY(-20px) scale(1.5);
        filter: blur(10px);
        opacity: 0;
      }
    }

    @keyframes dragon {
      0% {
        transform: translate(0) rotateY(180deg);
      }

      50% {
        transform: translate(-10px, 10px)  rotateY(180deg);
      }

      100% {
        transform: translate(0) rotateY(180deg);
      }
    }

    @keyframes burn {
      0% {
        color: rgba(255, 130, 110, 1);
        background: rgba(255, 230, 110, 1);
        box-shadow: 0 0 5px 0 rgba(200, 0, 10, 1),
        0 0 5px 0 rgba(230, 30, 10, 0.8),
        0 0 5px 0 rgba(230, 230, 10, 0.6);
      }

      100% {
        color: rgba(0, 0, 0, 1);
        background: rgb(239, 5, 5);
        box-shadow: 0 -35px 40px 30px rgba(255, 130, 10, 0),
        0 -30px 30px 10px rgba(230, 30, 10, 0),
        0 -20px 10px 0 rgba(255, 255, 10, 0);
      }
    }
  }

  &-reset {
    cursor: pointer;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 50px;
    background: #000;
    color: #fff;
    border-radius: 999px;
    font-family: 'Pirata One';
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 36px;


    &:hover {
      // box-shadow: 0 0 20px 10px rgba(230, 30, 10, 0.6);
      animation: burn 1000ms ease-out forwards;

      & + .dragon-left {
        animation: dragon2 1000ms ease-out forwards;
      }

      &::before {
        content: '';
        position: absolute;
        left: 40px;
        width: 100px;
        height: 40px;
        background: rgba(255, 230, 110, 1);
        border-radius: 100%;
        animation: flare 1000ms ease-out forwards;
      }

      &::after {
        content: '';
        position: absolute;
        right: 40px;
        width: 100px;
        height: 40px;
        background: rgba(255, 230, 110, 1);
        border-radius: 100%;
        animation: flare 1000ms ease-out forwards;
      }
    }

    @keyframes dragon2 {
      0% {
        transform: translate(0);
      }

      50% {
        transform: translate(10px, 10px);
      }

      100% {
        transform: translate(0);
      }
    }


    @keyframes flare {
      100% {
        transform: translateY(-20px) scale(1.5);
        filter: blur(10px);
        opacity: 0;
      }
    }

    @keyframes burn2 {
      0% {
        color: rgba(255, 130, 110, 1);
        background: rgba(255, 230, 110, 1);
        box-shadow: 0 0 5px 0 rgba(200, 0, 10, 1),
        0 0 5px 0 rgba(230, 30, 10, 0.8),
        0 0 5px 0 rgba(230, 230, 10, 0.6);
      }

      100% {
        color: rgba(255, 255, 255, 1);
        background: rgb(8, 168, 8);
        box-shadow: 0 -35px 40px 30px rgba(255, 130, 10, 0),
        0 -30px 30px 10px rgba(230, 30, 10, 0),
        0 -20px 10px 0 rgba(255, 255, 10, 0);
      }
    }
  }
}

.filter {
  &-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: $linear1;
    margin: 30px;
    padding: 50px;
  }

  &-inputs {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  &-input {
    width: 200px;
    height: 30px;
    padding: 10px;
  }

  &-select {
    width: 200px;
  }

  &-buttons {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 30px
  }
}

.vs__search {
  cursor: pointer;
}

.vs__actions, .vs__actions * {
  cursor: pointer;
}

.vs__deselect * {
  cursor: pointer;
}

.dragon {
  &-left {
    max-width: 75px;
    position: absolute;
    right: 19px;
    top: 180px;
    fill: #8dbd5c;
  }

  &-right {
    max-width: 75px;
    fill: #8dbd5c;
    position: absolute;
    right: 484px;
    top: 180px;
    transform: rotateY(180deg);
  }
}
</style>