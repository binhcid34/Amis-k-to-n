<template>
  <table class="departmentForm" v-if="isShowCombobox">
    <thead>
      <tr class="departmentFormTitle">
        <th class="departmentId">Mã đơn vị</th>
        <th class="departmentName">Tên đơn vị</th>
      </tr>
    </thead>
    <tbody>
      <tr
        class="departmentFormDetail"
        v-for="obj in data"
        :key="obj.departmentId"
        @click="btndepartmentFomr(obj.departmentName)"
      >
        <th class="departmentId">
          {{ obj.departmentId.split("-")[0] }}
        </th>
        <th class="departmentName">
          {{ obj.departmentName }}
        </th>
      </tr>
    </tbody>
  </table>
</template>
<style>
@import url(../../css/base/combobox.css);
</style>
<script>
export default {
  name: "Combobox",
  
  components: {},

  data() {
    return {
      isShowCombobox: true,
      data: [],
    };
  },

  props: {
    entities: {
      type: Object,
    },
  },

  methods: {},

  created() {
    var me = this;
    me.data = me.entities;
  },
};
</script>