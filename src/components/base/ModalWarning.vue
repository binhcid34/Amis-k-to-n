<template>
  <div class="dialog dialog-notice">
    <div class="flex center h100p">
      <div class="dialog-container">
        <div class="dialog-header">
          <!-- <div class="title">Thông tin nhân viên</div> -->
        </div>

        <div class="dialog-body">
          <div class="dialog-main-content flex">
            <div class="dialog-icon">
              <div class="icon_exclamation-error"></div>
            </div>
            <div class="dialog-message">
              <span
                v-for="(msg, index) in errMsg"
                :key="index"
                class="message"
                >{{ msg }}</span
              >
            </div>
          </div>
        </div>

        <div class="dialog-footer-modal1">
          <button
            id="btnCloseDialog"
            class="btn-accept-modal1"
            @click="btnCloseModal"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MModal",
  
  data() {
    return {};
  },
  props: {

    errMsg: {
      type: Array,
    },

    ErrorMode: {
      type: Number,
      default: 0, // 0 - lỗi , 1- cảnh báo
      required: true,
    },
  },
  methods: {

    //Hàm nhận sự kiện đóng
    //Author PQBinh (8/7/2022)
    btnCloseModal() {
      this.$emit("closeModal", false);
    },
  },
};
</script>


<style>
.dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 999;
}

.dialog-container {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 32px;
  width: 444px;
  min-width: 444px;
  top: 250px;
  left: 500px;
  position: absolute;
  border-radius: 6px;
}
.icon_exclamation-error {
  background: url("../../assets/img/Sprites.64af8f61.svg") no-repeat -598px -463px;
  width: 36px;
  height: 37px;
}
.icon-error {
  background: url("../../assets/img/Sprites.64af8f61.svg") no-repeat -752px -462px;
  width: 36px;
  height: 36px;
}
.dialog-close {
  position: absolute;
  top: 0;
  right: 0;
}

.dialog-close .dialog-close-btn {
  padding: 10px;
  cursor: pointer;
}

.dialog-close div:hover {
  background-color: #ccc;
}

.dialog-body {
  border-bottom: 1px solid #ddd;
}
.dialog-main-content {
  display: flex;
  align-items: center;
}
.dialog-message {
  overflow: auto;
  max-height: 400px;
  margin-bottom: 32px;
  padding-left: 16px;
  padding-top: 12px;
}
.dialog-icon {
  margin-right: 20px;
}
.dialog-message span {
  display: block;
}

.dialog-footer-modal1 {
  margin-top: 20px;
}

.dialog-footer-modal1 {
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn-accept-modal1 {
  background-color: #2ca01c;
  border: 1px solid transparent;
  cursor: pointer;
  width: fit-content;
  color: #fff;
  padding: 6px 16px 6px 16px;
  border-radius: 3px;
  transition: all 0.2s ease;
}
.btnCloseModal:hover {
  background-color: #35bf22;
}
</style>