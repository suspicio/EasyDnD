<template>
  <div class="beasts-wrapper">
    <FilterComponent @applyFilters="applyFilters" :initialBeast="beastsType"/>
    <template v-for="(options, key) in filteredOptions">
      <SearchableObjectComponent
        :key="key + options.name"
        :size="options.size"
        :type="options.type"
        :challenge_rating="options.challenge_rating"
        :name="options.name"
      />
    </template>
  </div>
</template>

<script>
import FilterComponent from "@/components/filtering/FilterBeastsComponent";
import {mapActions} from "vuex";
import SearchableObjectComponent from "@/components/filtering/SearchableBeastsObjectComponent";

export default {
  name: "BeastsView",
  components: {SearchableObjectComponent, FilterComponent},
  props: {
    beastsType: {
      type: String,
      default: ''
    }
  },
  computed: {
    filteredOptions() {
      if (Object.keys(this.beasts).length !== 0) {
        return this.beasts.filter((element) => {
          let use = true
          if (this.filterOptions.size.length !== 0) {
            use = use && this.filterOptions.size.find((elem) => {
              return element.size.toLowerCase().includes(elem.toLowerCase())
            })
          }

          if (this.filterOptions.type.length !== 0) {
            use = use && this.filterOptions.type.find((elem) => {
              return element.type.toLowerCase().includes(elem.toLowerCase())
            })
          }


          if (this.filterOptions.challenge_rating.length !== 0) {
            use = use && this.filterOptions.challenge_rating.find((elem) => {
              return element.challenge_rating.toLowerCase().includes(elem.toLowerCase())
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
        "size": [],
        "type": [],
        "challenge_rating": []
      },
      beasts: {}
    }
  },
  created() {
    this.filterOptions.type.push(this.beastsType);
    this.getBeasts().then(
        (callback) => {
          this.beasts = callback
        }
    )
  },
  methods: {
    ...mapActions(['getBeasts']),

    applyFilters(searchingName, searchingSize, searchingType, searchingChallengeRating) {
      this.filterOptions.name = searchingName
      this.filterOptions.size = searchingSize
      this.filterOptions.type = searchingType
      this.filterOptions.challenge_rating = searchingChallengeRating
    }
  }
}
</script>

<style lang="scss">
.beasts-wrapper {
  width: 100%;
  padding-bottom: 200px;
}
</style>