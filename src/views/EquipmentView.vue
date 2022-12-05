<template>
  <InitiatorComponent :contentType="equipmentType" :content="equipmentContent"/>
</template>

<script>
import InitiatorComponent from "@/UI/parser-json-components/InitiatorComponent";
import {mapActions} from "vuex";

export default {
  name: "EquipmentView",
  components: {InitiatorComponent},
  props: {
    equipmentType: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      equipmentContent: null
    }
  },
  created() {
    this.getEquipment(this.equipmentType).then(
        (callback) => {
          this.equipmentContent = callback
        }
    )
  },
  methods: {
    ...mapActions(['getEquipment']),
  }
}
</script>

<style scoped>

</style>