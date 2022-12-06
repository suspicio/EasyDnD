<template>
  <div class="table-wrapper">
    <table class="fl-table" >
      <thead>
        <th v-for="(header, key) in Object.keys(content['table'])" :key="'header-'+key+header" class="table-header">
          {{header}}
        </th>
      </thead>
      <tr v-for="(elem, ht) in content['table'][Object.keys(content['table'])[0]]" :key="'subheader-'+ht+elem">
        <td v-for="(header, key) in Object.keys(content['table'])" :key="'content-'+ht+'-'+key+header" class="table-content">
          {{content['table'][header][ht].toString()}}
        </td>
      </tr>
    </table>
  </div>

</template>

<script>
export default {
  name: "TableComponent",
  props: {
    content: {
      type: Object,
      default: () => {}
    }
  },
}
</script>

<style lang="scss">
.table-wrapper{
  margin: 10px 70px 70px;
  box-shadow: 0px 35px 50px rgba( 0, 0, 0, 0.2 );
}

.fl-table {
  border-radius: 5px;
  font-size: 24px;
  font-weight: normal;
  border: none;
  border-collapse: collapse;
  width: 100%;
  max-width: 100%;
  background-color: #c8d0d3;

  & td, .fl-table th {
    text-align: center;
    padding: 8px;
  }

  & td {
    border-bottom: 1px solid #3D6772;
    font-size: 20px;
  }

  & thead th {
    color: #c2c2c2;
    background: #103A44;
  }
}

.table-content {
  color: #132226;
}
</style>