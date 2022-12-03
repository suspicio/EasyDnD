<template>
  <div class="emblem-icon">
    <slot />
  </div>
</template>

<script>
export default {
  name: "EmblemIcon"
}
</script>

<style lang="scss">
@import "@/assets/styles/constants.scss";

.emblem-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55px;
  height: 55px;
  background-color: $col6;
  border-radius: 100%;

  &__text {
    color: $col8;
    font-family: 'UnifrakturCook';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    margin-top: 7px;
    line-height: 39px;
  }
}
</style>