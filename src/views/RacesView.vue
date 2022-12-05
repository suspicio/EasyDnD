<template>
  <InitiatorComponent :contentType="racesType" :content="racesContent"/>
</template>

<script>
import InitiatorComponent from "@/UI/parser-json-components/InitiatorComponent";
import {mapActions} from "vuex";

export default {
  name: "RacesView",
  components: {InitiatorComponent},
  props: {
    racesType: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      racesContent: null
    }
  },
  created() {
    this.getRace(this.racesType).then(
        (callback) => {
          this.racesContent = callback
        }
    )
  },
  methods: {
    ...mapActions(['getRace']),
  }
}
</script>

<style scoped>

</style>