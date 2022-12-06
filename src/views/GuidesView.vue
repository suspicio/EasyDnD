<template>
    <InitiatorComponent :contentType="guideType" :content="guideContent"/>
  </template>
  
  <script>
  import InitiatorComponent from "@/UI/parser-json-components/InitiatorComponent";
  import {mapActions} from "vuex";
  
  export default {
    name: "GuidesView",
    components: {InitiatorComponent},
    props: {
      guideType: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        guideContent: null
      }
    },
    created() {
      this.getGuide(this.guideType).then(
          (callback) => {
            this.guideContent = callback
          }
      )
    },
    methods: {
      ...mapActions(['getGuide']),
    }
  }
  </script>
  
  <style scoped>
  
  </style>