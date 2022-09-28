<template>
  <div
    class="detail-function-table"
    :style="'top: ' + pos.top + 'px; left: ' + pos.left + 'px'"
  >
    <div class="detail-btn" @click="btnDouple">Nhân bản</div>
    <div class="detail-btn" @click="btnDelete">Xóa</div>
    <div class="detail-btn" @click="btnTableExpand">Ngừng sử dụng</div>
  </div>
</template>

<script>
export default {
  name: "TableExpand",

  components: {},

  methods: {
    // Hàm nhận sự kiện xóa
    //Author PQBinh (8/7/2022)
    btnDelete() {
      this.$emit("btnDelete");
    },

    //Hàm nhận sự kiện nhân bản
    //Author PQBinh (8/7/2022)
    btnDouple() {
      this.$emit("btnDouple");
    },

    // Hàm nhận sự kiện ngưng sự dụng
    //Author PQBinh (8/7/2022)

    btnTableExpand() {
      this.$emit("btnTableExpand");
    },
  },

  data() {},

  props: {
    pos: {
      type: Object,
    },
  },
};
</script>

<style>
.detail-function-table {
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 100000;
  background-color: #fff;
  border-radius: 2px;
  border: 1px solid #babec5;
}
.detail-btn {
  padding: 5px 10px 5px;
  cursor: pointer !important;
  height: 20px;
}
.detail-btn:hover {
  background-color: #babec5;
  color: #2ca01c;
}
</style>