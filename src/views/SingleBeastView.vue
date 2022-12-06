<template>
  <div class="initiator-component">
    <h1>{{ beast.name }}</h1>
    <h1>{{ beast.size }}</h1>
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