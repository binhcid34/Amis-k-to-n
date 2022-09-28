<template>
  <div class="button-dropdown button-header-add" id="btnHeaderAdd">
    <span>Thêm</span>
    <div class="line"></div>
    <div class="button-header-add-drop">
      <div class="icon-dropdown-white icon-down-add"></div>
    </div>
  </div>
</template>
<style>
.button-header-add {
  background-color: #2ca01c;
  border: none;
  cursor: pointer;
  width: fit-content;
}

.button-header-add span {
  color: #ffffff;
  cursor: pointer;
  padding-left: 4px;
  padding-right: 16px;
  font-weight: 600;
  width: fit-content;
  padding-left: 16px;
  padding-right: 20px;
  display: flex;
  align-items: center;
  height: 36px;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  cursor: pointer;
  width: 36px;
}
.button-header-add span:hover {
  background-color: #35bf22;
}
.button-dropdown {
  border-radius: 30px;
  height: 36px;
  display: flex;
  justify-content: center;
  margin-left: 12px;
  align-items: center;
}
.button-dropdown span {
  font-weight: 600;
}
.button-header-add-drop {
  height: 36px;
  display: flex;
  align-items: center;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  padding-left: 10px;
  padding-right: 10px;
  cursor: pointer;
}
.button-header-add-drop {
  height: 36px;
  display: flex;
  align-items: center;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  padding-left: 10px;
  padding-right: 10px;
  cursor: pointer;
}

.line {
  width: 1px;
  height: 16px;
  background-color: #ffffff;
}

.button-header-add-drop:hover {
  background-color: #35bf22;
}

.icon-dropdown-white {
  background: url("../../assets/img/Sprites.64af8f61.svg") no-repeat;
  width: 16px;
  height: 16px;
  cursor: pointer;
  background-position: -848px -359px;
}
.icon-down-add {
  margin-left: 5px;
}
</style>

<script>
export default {};
</script>
