<template>
  <div class="special-component">
    <div v-if="content !== null">
      <span v-for="(text, key) in content['specialText']" :key="'special-content-' + key + '-' + text">
        <span v-if="Object.keys(text)[0] === 'text'">{{text['text']}}</span>
        <span class="special-component__text" v-else>{{text['special']}}&nbsp;</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "SpecialComponent",
  props: {
    content: {
      type: Object,
      default: () => {}
    }
  },
}
</script>

<style scoped lang="scss">
.special-component {
  &__text {
    font-style: italic;
  }
}
</style>