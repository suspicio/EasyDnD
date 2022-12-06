<template>
  <a :href="'/beast/' + name" class="object-searchable">
    <span class="object-item">{{name}}</span>
    <span style="text-transform: capitalize;" class="object-item">{{type}}</span>
    <span class="object-item">{{size}}</span>
    <span class="object-item">{{challenge_rating}}</span>
  </a>
</template>

<script>
export default {
  name: "SearchableObjectComponent",
  props: {
    name: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
    challenge_rating: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/styles/constants";

.object {
  &-searchable {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    text-decoration: none;
    color: black;
    background: #939182;;
    margin: 20px;
    box-shadow: 3px 3px 8px #504d4d, -3px -3px 8px #504d4d, 3px -3px 8px #504d4d, -3px 3px 8px #504d4d;

    &:hover {
      box-shadow: 3px 3px 8px #bde0e8, -3px -3px 8px #bde0e8, 3px -3px 8px #bde0e8, -3px 3px 8px #bde0e8;
    }
  }

  &-item {
    font-family: 'MedievalSharp';
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 24px;
    display: flex;
    align-items: center;
    max-width: 160px;
    min-width: 160px;
    word-break: keep-all;
  }
}
</style>