<template>
  <InitiatorComponent :contentType="classType" :content="classContent"/>
</template>

<script>
import InitiatorComponent from "@/UI/parser-json-components/InitiatorComponent";
import {mapActions} from "vuex";

export default {
  name: "ClassesView",
  components: {InitiatorComponent},
  props: {
    classType: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      classContent: null
    }
  },
  created() {
    this.getClass(this.classType).then(
        (callback) => {
          this.classContent = callback
        }
    )
  },
  methods: {
    ...mapActions(['getClass']),
  }
}
</script>

<style scoped>

</style>