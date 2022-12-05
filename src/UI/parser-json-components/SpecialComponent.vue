<template>
  <div class="special-component">
    <div v-if="content !== null">
      <span v-for="(text, key) in content['specialText']" :key="'special-content-' + key + '-' + text">
        <TextComponent v-if="Object.keys(text)[0] === 'text'" :content="text"/>
        <span class="special-component__text" v-else>{{text['special']}}</span>
      </span>
    </div>
  </div>
</template>

<script>
import TextComponent from "@/UI/parser-json-components/TextComponent";
export default {
  name: "SpecialComponent",
  components: {TextComponent},
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