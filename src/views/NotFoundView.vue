<template>
  <div class="not-found">
    <h1>404</h1>
    <h2>Not Found</h2>
  </div>
</template>

<script>
export default {
  name: "NotFoundView"
}
</script>

<style scoped lang="scss">
.not-found {
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding-bottom: 300px;
}

h1 {
  font-family: 'Pirata One';
  font-style: normal;
  font-weight: 400;
  font-size: 120px;
  line-height: 100px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: ivory;
  margin-bottom: 30px;
}

h2 {
  font-family: 'Pirata One';
  font-style: normal;
  font-weight: 400;
  font-size: 100px;
  line-height: 41px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: ivory;
  text-transform: uppercase;
}
</style>