<template>
  <div class="initiator-component">
    <h1>{{contentType}}</h1>
    <div class="initiator-component__content" v-if="content !== null">
      <template v-for="(classElement, key) in content['content']">
        <HeaderComponent :key="key" v-if="Object.keys(classElement)[0] === 'header'" :content="classElement"/>
        <SmallHeaderComponent :key="key" v-else-if="Object.keys(classElement)[0] === 'smallerHeader'" :content="classElement"/>
        <ListComponent :key="key" v-else-if="Object.keys(classElement)[0] === 'list'" :content="classElement"/>
        <TableComponent :key="key" v-else-if="Object.keys(classElement)[0] === 'table'" :content="classElement"/>
        <SpecialComponent :key="key" v-else-if="Object.keys(classElement)[0] === 'specialText'" :content="classElement"/>
        <TextComponent :key="key" v-else :content="classElement"/>
        <br :key="key+'br'" />
      </template>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/UI/parser-json-components/HeaderComponent";
import TextComponent from "@/UI/parser-json-components/TextComponent";
import SmallHeaderComponent from "@/UI/parser-json-components/SmallHeaderComponent";
import ListComponent from "@/UI/parser-json-components/ListComponent";
import TableComponent from "@/UI/parser-json-components/TableComponent";
import SpecialComponent from "@/UI/parser-json-components/SpecialComponent";
export default {
  name: "InitiatorComponent",
  components: {SpecialComponent, TableComponent, ListComponent, SmallHeaderComponent, TextComponent, HeaderComponent},
  props: {
    contentType: {
      type: String,
      default: ''
    },
    content: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss">
.initiator-component {
  width: 100%;
  padding: 20px 20px 200px;
  margin: 50px 30px 10px;
  border: 5px solid #644827;
  box-shadow: 10px 5px 20px #504d4d, -10px -10px 20px #504d4d;
  color: #2e2e2e;
  background: #A4978E;
  font-family: 'Pirata One';
  font-size: 1.3rem;

  & h1 {
    margin-bottom: 10px;
    width: 100%;
    text-align: center;
  }

  &__content {
    max-width: 100%;
    margin: 0 50px;
  }
}
</style>