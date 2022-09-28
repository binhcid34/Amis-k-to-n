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
              <div class="icon-information"></div>
            </div>
            <div class="dialog-message">
              <!-- <span
                v-for="(msg, index) in errMsg"
                :key="index"
                class="message"
                >{{ msg }}</span -->
              <span>Dữ liệu đã bị thay đổi. Bạn có muốn cất không?</span>
            </div>
          </div>
        </div>
        <div class="dialog-footer">
          <button
            id="btnCloseDialog"
            class="btnCloseModal3"
            @click="btnCancelModal3"
          >
            Hủy
          </button>
          <div class="btnModalRight">
            <button
              id="btnCloseDialog"
              class="btnCloseModal3"
              @click="btnNotModal3"
            >
              Không
            </button>
            <button
              style="background-color: #35bf22; color: #fff"
              id="btnCloseDialog"
              class="btnCloseModal"
              @click="btnAcceptModal3"
            >
              Có
            </button>
          </div>
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

  methods: {
    //Hàm nhận sự kiện không
    //Author PQBinh (8/7/2022)
    btnNotModal3() {
      this.$emit("notModal");
    },

    // Hàm nhận sự kiện hủy
    //Author PQBinh (8/7/2022)

    btnCancelModal3() {
      this.$emit("cancelModal");
    },

    // Hàm nhận sự kiện có
    //Author PQBinh (8/7/2022)
    btnAcceptModal3() {
      this.$emit("acceptModal");
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
  background: url("../../assets/img/Sprites.64af8f61.svg") no-repeat -832px -462px;
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
.icon-information {
  background: url("../../assets/img/Sprites.64af8f61.svg") no-repeat -832px -462px;
  width: 36px;
  height: 36px;
}
.dialog-footer {
  margin-top: 20px;
}

.dialog-footer {
  display: flex;
  justify-content: space-between;
}
.btnCloseModal {
  background-color: #2ca01c;
  border: 1px solid transparent;
  cursor: pointer;
  width: fit-content;
  color: #fff;
  padding: 6px 16px 6px 16px;
  border-radius: 3px;
  transition: all 0.2s ease;
}
.btnCloseModal3 {
  background-color: #fff;
  border: 1px solid transparent;
  cursor: pointer;
  width: fit-content;
  border: 1px solid #babec5;
  padding: 6px 16px 6px 16px;
  border-radius: 3px;
  transition: all 0.2s ease;
  height: 32px;
}
.btnCloseModal:hover {
  background-color: #35bf22;
}
.btnModalRight button {
  margin-right: 7px;
}
</style>