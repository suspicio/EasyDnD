<template>
  <div class="spells-wrapper">
    <FilterComponent @applyFilters="applyFilters" :initialSpell="spellsType"/>
    <template v-for="(options, key) in filteredOptions">
      <SearchableObjectComponent
        :key="key + options.name"
        :classes="options.class"
        :duration="options.duration"
        :level="options.level"
        :name="options.name"
        :range="options.range"
        :schools="options.school"
      />
    </template>
  </div>
</template>

<script>
import FilterComponent from "@/components/filtering/FilterComponent";
import {mapActions} from "vuex";
import SearchableObjectComponent from "@/components/filtering/SearchableObjectComponent";

export default {
  name: "SpellsView",
  components: {SearchableObjectComponent, FilterComponent},
  props: {
    spellsType: {
      type: String,
      default: ''
    }
  },
  computed: {
    filteredOptions() {
      if (Object.keys(this.spells).length !== 0) {
        return this.spells['content'].filter((element) => {
          let use = true
          if (this.filterOptions.class.length !== 0) {
            use = use && this.filterOptions.class.find((elem) => {
              return element.class.includes(elem)
            })
          }

          if (this.filterOptions.level.length !== 0) {
            use = use && this.filterOptions.level.find((elem) => {
              return element.level.includes(elem)
            })
          }


          if (this.filterOptions.school.length !== 0) {
            use = use && this.filterOptions.school.find((elem) => {
              return element.school.includes(elem)
            })
          }


          if (this.filterOptions.name.length !== 0) {
            use = use && element.name.toLowerCase().includes(this.filterOptions.name.toLowerCase())
          }
          return use
        })
      }

      return []
    }
  },
  data() {
    return {
      filterOptions: {
        "name": "",
        "class": [],
        "school": [],
        "level": []
      },
      spells: {}
    }
  },
  created() {
    this.filterOptions.school.push(this.spellsType);
    this.getSpells().then(
        (callback) => {
          this.spells = callback
        }
    )
  },
  methods: {
    ...mapActions(['getSpells']),

    applyFilters(searchingName, selectedLevels, selectedSchools, selectedClasses) {
      this.filterOptions.name = searchingName
      this.filterOptions.level = selectedLevels
      this.filterOptions.school = selectedSchools
      this.filterOptions.class = selectedClasses
    }
  }
}
</script>

<style lang="scss">
.spells-wrapper {
  width: 100%;
  padding-bottom: 200px;
}
</style>