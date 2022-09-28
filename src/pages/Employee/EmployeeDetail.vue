<template>
  <div class="blur-container" v-if="IsShowDialog">
    <div class="customer" id="formCustomer">
      <div class="customer-header">
        <div class="customer-header-left">
          <span class="b-customer-title"> Thông tin nhân viên </span>
          <span class="b-checkbox b-customer-checkbox">
            <label for="isCutomer" class="checkbox">
              <input
                type="checkbox"
                id="isCustomer"
                name="isCustomer"
                class="checkbox-value"
                value="yes"
                :checked="checkedCustomerValue == 1"
                @change="changeData"
              />
              <span class="custom-checkbox">
                <span class="custom-checkbox-inner">
                  <div class="icon-tick"></div>
                </span>
              </span>
              <span class="custom-title">Là khách hàng</span>
            </label>
          </span>
          <span class="b-checkbox b-customer-checkbox">
            <input
              type="checkbox"
              id="isNcc"
              name="accept"
              value="yes"
              class="checkbox-value"
              :checked="checkedSupplierValue == 1"
              @change="changeData"
            />
            <span class="custom-checkbox">
              <span class="custom-checkbox-inner">
                <div class="icon-tick"></div>
              </span>
            </span>
            <span class="custom-title">Là nhà cung cấp</span>
          </span>
        </div>
        <div class="b-customer-right">
          <span class="mi mi-help mi-24"></span>
          <span
            class="mi mi-close mi-24"
            id="btnCloseForm"
            @click="btnCloseDialog"
          ></span>
        </div>
      </div>

      <!-- Main Form -->
      <div class="customer-main">
        <div class="customer-content">
          <div class="b-content-l1">
            <span class="b-content-l1-t1">
              <span class="b-editor" id="formCodeContent">
                <div class="b-title-input">
                  <span class="b-title-input-content"> Mã </span>
                  <span class="b-title-input-importan"> * </span>
                </div>
                <input
                  type="text"
                  v-model="employeeSelected.employeeCode"
                  class="b-input b-code"
                  id="formCode"
                  @change="changeData"
                  @blur="checkCodeInput"
                />
                <span class="form-code-error"> Mã không được để trống.</span>
              </span>
              <span class="b-editor" id="formCodeContent">
                <div class="b-title-input">
                  <span class="b-title-input-content"> Tên </span>
                  <span class="b-title-input-importan"> * </span>
                </div>
                <input
                  type="text"
                  v-model="employeeSelected.employeeName"
                  class="b-input b-name"
                  id="formName"
                  @change="changeData"
                  @blur="checkNameInput"
                />
                <span class="form-code-error"> Tên không được để trống.</span>
              </span>
            </span>

            <span class="b-content-l1-t1">
              <div class="b-editor" id="formCodeContent">
                <div class="b-title-input">
                  <span class="b-title-input-content"> Đơn vị </span>
                  <span class="b-title-input-importan"> * </span>
                </div>
                <el-select
                  v-model="employeeSelected.departmentName"
                  class="form-control"
                  placeholder="Chọn phòng ban"
                  @change="changeDepartment"
                >
                  <el-option
                    v-for="department in departments"
                    :key="department.departmentName"
                    :label="department.departmentName"
                    :value="department.departmentName"
                    @click="
                      btndepartmentForm(
                        department.departmentName,
                        department.departmentId
                      )
                    "
                  />
                </el-select>
                <!-- <vue-single-select
                  v-model="employeeSelected.departmentName"
                  :options="departmentNames"
                  :required="true"
                  :autocomplete="on"
                  :classes="{
                    input: 'form-control',
                    wrapper: 'form-group',
                    icons: 'glyphicon',

                    dropdown: 'dropdown',
                  }"
                ></vue-single-select> -->
                <!-- <div class="b-dropdown">
                  <div class="mi mi-16 mi-down"></div>
                </div> -->
                <!-- <div class="b-combobox b-input-unit">
                  <input
                    type="text"
                    class="b-input b-combobox b-unit"
                    id="formDepartment"
                    v-model="employeeSelected.departmentName"
                    @change="changeDepartment"
                    @blur="checkDepartmentInput"
                  />
                  <span class="form-department-error">
                    Phòng ban không được để trống.</span
                  >
                  <div class="b-dropdown">
                    <div
                      class="mi mi-16 mi-down"
                      @click="toggleOpenDialog()"
                    ></div>
                  </div>
                </div> -->
              </div>
            </span>
            <!-- Department List -->
            <!-- <table class="departmentForm" v-if="isShowDepartmentDialog">
              <thead>
                <tr class="departmentFormTitle">
                  <th class="departmentId">Mã đơn vị</th>
                  <th class="departmentName">Tên đơn vị</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="departmentFormDetail"
                  v-for="department in departments"
                  :key="department.departmentId"
                  @click="
                    btndepartmentForm(
                      department.departmentName,
                      department.departmentId
                    )
                  "
                >
                  <th class="departmentId">
                    {{ department.departmentId.split("-")[0] }}
                  </th>
                  <th class="departmentName">
                    {{ department.departmentName }}
                  </th>
                </tr>
              </tbody>
            </table> -->

            <span class="b-content-l1-t1">
              <span class="b-editor">
                <div class="b-title-input">
                  <span class="b-title-input-content"> Chức danh </span>
                </div>
                <!-- <vue-single-select
                  v-model="employeeSelected.postionName"
                  :options="postionNames"
                  :required="true"
                  :autocomplete="on"
                  a-post-has-an-id="good for search and display"
                  :classes="{
                    input: 'form-control',
                    wrapper: 'form-group',
                    icons: 'glyphicon',

                    dropdown: 'dropdown',
                  }"
                ></vue-single-select> -->
                <el-select
                  v-model="employeeSelected.postionName"
                  class="form-control"
                  placeholder="Chọn phòng ban"
                >
                  <el-option
                    v-for="pos in postions"
                    :key="pos.postionName"
                    :label="pos.postionName"
                    :value="pos.postionName"
                    @click="btnPositionForm(pos.postionId, pos.postionName)"
                  />
                </el-select>
                <!-- <div class="b-dropdown">
                  <div class="mi mi-16 mi-down"></div>
                </div> -->
                <!-- <div class="b-combobox b-input-unit">
                  <input
                    type="text"
                    class="b-input b-combobox b-unit"
                    v-model="employeeSelected.postionName"
                    @change="changeData"
                  />
                  <div class="b-dropdown">
                    <div
                      class="mi mi-16 mi-down"
                      @click="toggleOpenListPossition()"
                    ></div>
                  </div>
                </div> -->
              </span>
            </span>
            <!-- <table
              class="departmentForm possitionForm"
              v-if="isShowPossitionDialog"
            >
              <thead>
                <tr class="departmentFormTitle">
                  <th class="departmentId">Mã chức vụ</th>
                  <th class="departmentName">Tên chức vụ</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="departmentFormDetail"
                  v-for="pos in postions"
                  :key="pos.postionId"
                  @click="btnPositionForm(pos.postionId, pos.postionName)"
                >
                  <th class="departmentId">
                    {{ pos.postionId.split("-")[0] }}
                  </th>
                  <th class="departmentName">
                    {{ pos.postionName }}
                  </th>
                </tr>
              </tbody>
            </table> -->
          </div>
          <div class="b-content-r1">
            <div class="b-content-r1-t1">
              <span class="b-content-l1-t1">
                <span class="b-editor">
                  <div class="b-title-input">
                    <span class="b-title-input-content"> Ngày sinh </span>
                  </div>
                  <!-- <input
                    type="date"
                    class="b-input b-date"
                    id="dateOfBirth"
                    v-model="employeeSelected.dateOfBirth"
                  /> -->
                  <el-date-picker
                    v-model="employeeSelected.dateOfBirth"
                    type="date"
                    placeholder="Pick a day"
                    format="DD/MM/YYYY"
                    value-format="DD-MM-YYYY"
                    @change="changeDate"
                  />
                </span>
                <span class="b-editor b-option-sex">
                  <div class="b-title-input">
                    <span class="b-title-input-content"> Giới tính </span>
                  </div>
                  <div class="b-input-option">
                    <div class="b-input-option-title">
                      <input
                        type="radio"
                        value="1"
                        name="radio"
                        id="formGender"
                        class="gender-checkbox-value"
                        :checked="checkedGenderValue == 1"
                        @change="changeData"
                      />
                      <span class="gender-checkbox">
                        <span class="gender-checkbox-inner">
                          <div class="tickbox"></div>
                        </span>
                      </span>
                      <label class="gender-checkbox-title">Nam</label>
                    </div>
                    <div class="b-input-option-title">
                      <input
                        type="radio"
                        value="2"
                        name="radio"
                        id="formGender"
                        :checked="checkedGenderValue == 2"
                        class="gender-checkbox-value"
                        @change="changeData"
                      />
                      <span class="gender-checkbox">
                        <span class="gender-checkbox-inner">
                          <div class="tickbox"></div>
                        </span>
                      </span>
                      <label class="gender-checkbox-title">Nữ</label>
                    </div>

                    <div class="b-input-option-title">
                      <input
                        type="radio"
                        value="3"
                        name="radio"
                        id="formGender"
                        class="gender-checkbox-value"
                        :checked="checkedGenderValue == 3"
                        @change="changeData"
                      />
                      <span class="gender-checkbox">
                        <span class="gender-checkbox-inner">
                          <div class="tickbox"></div>
                        </span>
                      </span>
                      <label class="gender-checkbox-title">Khác</label>
                    </div>
                  </div>
                </span>
              </span>

              <span class="b-content-l1-t1">
                <span class="b-editor">
                  <div class="b-title-input">
                    <span
                      class="b-title-input-content"
                      title="Số chứng minh nhân dân"
                    >
                      Số CMND
                    </span>
                  </div>
                  <input
                    type="text"
                    class="b-input b-input-cmnd"
                    v-model="employeeSelected.identityCard"
                  />
                </span>
                <span class="b-editor">
                  <div class="b-title-input">
                    <span class="b-title-input-content"> Ngày cấp </span>
                  </div>
                  <!-- <input
                    type="date"
                    class="b-input b-name b-input-dayofcmnd"
                    id="dateOfCard"
                    v-model="employeeSelected.dateOfCard"
                    @change="changeData"
                  /> -->
                  <el-date-picker
                    v-model="employeeSelected.dateOfCard"
                    type="date"
                    placeholder="Pick a day"
                    format="DD/MM/YYYY"
                    value-format="DD-MM-YYYY"
                    @change="changeData"
                  />
                </span>
              </span>

              <span class="b-content-l1-t1">
                <span class="b-editor">
                  <div class="b-title-input">
                    <span class="b-title-input-content"> Nơi cấp </span>
                  </div>
                  <div class="b-combobox b-input-unit">
                    <input
                      type="text"
                      class="b-input b-unit b-input-placeofcmnd"
                      v-model="employeeSelected.placeOfCard"
                      @change="changeData"
                    />
                  </div>
                </span>
              </span>
            </div>
          </div>
        </div>
        <div class="customer-content">
          <div class="b-content-l2">
            <div class="b-content-subtitle">
              <span class="b-content-l1-t1">
                <span class="b-editor">
                  <div class="b-title-input">
                    <span class="b-title-input-content"> Địa chỉ </span>
                  </div>
                  <input
                    type="text"
                    class="b-input b-address"
                    v-model="employeeSelected.address"
                    @change="changeData"
                  />
                </span>
              </span>
              <span class="b-content-l1-t1">
                <span class="b-editor">
                  <div class="b-title-input">
                    <span
                      class="b-title-input-content"
                      title="Điện thoại di động"
                    >
                      ĐT di động
                    </span>
                  </div>
                  <input
                    type="text"
                    class="b-input b-code"
                    v-model="employeeSelected.phoneNumber"
                    @change="changeData"
                  />
                </span>
                <span class="b-editor">
                  <div class="b-title-input">
                    <span
                      class="b-title-input-content"
                      title="Điện thoại cố định"
                    >
                      ĐT cố định
                    </span>
                  </div>
                  <input
                    type="text"
                    class="b-input b-c"
                    v-model="employeeSelected.landlineNumber"
                    @change="changeData"
                  />
                </span>
                <span class="b-editor">
                  <div class="b-title-input">
                    <span class="b-title-input-content"> Email </span>
                  </div>
                  <input
                    type="text"
                    class="b-input b-code b-email"
                    v-model="employeeSelected.email"
                    @change="changeData"
                  />
                </span>
              </span>
              <span class="b-content-l1-t1">
                <span class="b-editor">
                  <div class="b-title-input">
                    <span
                      class="b-title-input-content"
                      title="Điện thoại di động"
                    >
                      Tài khoản ngân hàng
                    </span>
                  </div>
                  <input
                    type="text"
                    class="b-input b-code"
                    v-model="employeeSelected.bankNumber"
                    @change="changeData"
                  />
                </span>
                <span class="b-editor">
                  <div class="b-title-input">
                    <span
                      class="b-title-input-content"
                      title="Điện thoại cố định"
                    >
                      Tên ngân hàng
                    </span>
                  </div>
                  <input
                    type="text"
                    class="b-input b-c"
                    v-model="employeeSelected.bankName"
                    @change="changeData"
                  />
                </span>
                <span class="b-editor">
                  <div class="b-title-input">
                    <span class="b-title-input-content"> Chi nhánh </span>
                  </div>
                  <input
                    type="text"
                    class="b-input b-code b-branch"
                    v-model="employeeSelected.bankBranch"
                    @change="changeData"
                  />
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer Form -->
      <div class="customer-footer">
        <div class="button-left">
          <div class="btn-cancel btn-footer" @click="btnCancleOnClick">Hủy</div>
        </div>

        <div class="button-right">
          <div class="btn-save btn-footer" @click="btnSaveOnClick">Cất</div>

          <div class="btn-save-add btn-footer" @click="btnSaveAndAddOnClick">
            Cất và thêm
          </div>
        </div>
      </div>
      <Modal
        v-if="IsError"
        :errMsg="errMsg"
        :ErrorMode="ErrorMode"
        @closeModal="showModal"
        :footerText="footerText"
      />
      <ModalThreeButton
        v-if="IsShowModalThreeButton"
        @cancelModal="cancelModal"
        @notModal="notModal"
        @acceptModal="acceptModal"
      />
    </div>
    <PreLoadingTable v-if="IsCompleteData" />
  </div>
</template>
<style>
@import url(../../css/layout/customer.css);
@import url(../../css/base/combobox.css);
.blur-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 999;
}
</style>
<script>
import axios from "axios";
import formatDate from "../../extension/formatDate";
import Modal from "../../components/base/Modal.vue";
import PreLoadingTable from "../../components/base/PreLoadingTable.vue";
import "mosha-vue-toastify/dist/style.css";
import baseApi from "../../base/baseApi/baseApi";
import getData from "../../base/baseApi/getData";
import ModalThreeButton from "../../components/base/ModalThreeButton.vue";
import { createToast } from "mosha-vue-toastify";
import MessageApi from "../../Enums/enumMessageApi";
import Notifications from "../../Enums/enumNotification";
export default {
  name: "EmployeeDetail",

  components: {
    Modal,
    PreLoadingTable,
    ModalThreeButton,
  },

  data() {
    return {
      employeeSelected: {},
      IsShowDialog: true,
      Ischange: 0,
      departments: [],
      departmentNames: [],
      postions: [],
      postionNames: [],
      isShowDepartmentDialog: false,
      isShowPossitionDialog: false,
      checkedGenderValue: 0,
      checkedCustomerValue: 0,
      checkedSupplierValue: 0,
      IsError: false,
      errMsg: [],
      ErrorMode: 0,
      IsCompleteData: true,
      footerText: {},
      IsShowModalChange: false,
      IsShowModalThreeButton: false,
    };
  },

  props: {
    employeeDetail: {
      type: Object,
    },

    newEmployeeCode: {
      type: String,
    },

    editMore: {
      type: Number,
      default: 0,
    },

    isDouple: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    baseApi,

    getData,

    formatDate,

    // Khi bấm vòa nút close trên dialog sẽ ẩn đi
    //Author PQBinh (8/7/2022)

    closeDialog() {
      this.IsShowDialog = false;
      this.$emit("closeDialog", false);
    },

    // Thông báo việc thay đổi dữ liệu trong form
    //Author PQBinh (8/7/2022)
    btnCloseDialog() {
      var me = this;
      if (me.Ischange == 0) {
        me.closeDialog();
      } else {
        me.IsShowModalThreeButton = true;
      }
    },

    /*
     ** Hàm nút bấm hủy
     ** Author PQBinh (8/7/2022)
     */
    btnCancleOnClick() {
      this.IsShowDialog = false;
      this.$emit("closeDialog", false);
    },

    /*
     ** Hàm lưu nhân viên
     ** Author PQBinh (8/7/2022)
     */
    btnSaveOnClick() {
      this.IsCompleteData = true;

      if (this.editMore != 0) {
        this.validateEmployee(this.employeeSelected);

        if (
          document.querySelector('input[name="radio"]:checked').value == null
        ) {
          this.employeeSelected.gender = null;
        } else
          this.employeeSelected.gender = document.querySelector(
            'input[name="radio"]:checked'
          ).value;

        console.log("save", this.employeeSelected);
        if (this.validateEmployee(this.employeeSelected) == true) {
          if (this.employeeSelected.dateOfBirth == "")
            this.employeeSelected.dateOfBirth = null;
          if (this.employeeSelected.dateOfCard == "")
            this.employeeSelected.dateOfCard = null;

          var url = "http://localhost:5240/api/v1/Employees";
          this.baseApi("put", url, this.employeeSelected);
          createToast(MessageApi.Put);
          this.$emit("reloadData");

          this.closeDialog();
        }
      } else {
        this.validateEmployee(this.employeeSelected);

        if (
          document.querySelector('input[name="radio"]:checked').value == null
        ) {
          this.employeeSelected.gender = null;
        } else
          this.employeeSelected.gender = document.querySelector(
            'input[name="radio"]:checked'
          ).value;
        console.log("add", this.employeeSelected);

        if (this.validateEmployee(this.employeeSelected) == true) {
          if (this.employeeSelected.dateOfBirth == "")
            this.employeeSelected.dateOfBirth = null;
          if (this.employeeSelected.dateOfCard == "")
            this.employeeSelected.dateOfCard = null;

          var url2 = "http://localhost:5240/api/v1/Employees";
          this.baseApi("post", url2, this.employeeSelected);
          createToast(MessageApi.Post);
          this.$emit("reloadData");

          this.closeDialog();
        }
      }
      this.IsCompleteData = false;
    },

    //Hàm nhận sự thay đổi của input
    //Author PQBinh (8/7/2022)
    changeData() {
      this.Ischange = 1;
    },

    /*
     *** Hàm lưu và thêm mới
     *** Author PQBinh (8/7/2022)
     */
    btnSaveAndAddOnClick() {
      this.IsCompleteData = true;

      this.validateEmployee(this.employeeSelected);

      this.btnSaveOnClick();

      this.IsShowDialog = true;
      this.$emit("closeDialog", true);
      // this.$emit("saveAndAdd");
      this.employeeSelected = {};
      this.getNewCode();
    },

    changeDate() {
      console.log(this.employeeSelected.dateOfBirth);
    },

    /*
      mở dialog của department
      //Author PQBinh (8/7/2022)
    */
    toggleOpenDialog() {
      this.isShowDepartmentDialog = !this.isShowDepartmentDialog;
    },

    //autocomplete cho input phòng ban
    //Author PQBinh (8/7/2022)
    btndepartmentForm(departmentName, departmentId) {
      this.employeeSelected.departmentName = departmentName;
      this.employeeSelected.departmentId = departmentId;
      this.isShowDepartmentDialog = false;
    },

    // autocomplete cho input chức vụ
    //Author PQBinh (8/7/2022)
    btnPositionForm(postionId, postionName) {
      this.employeeSelected.postionId = postionId;
      this.employeeSelected.postionName = postionName;
      this.isShowPossitionDialog = false;
    },

    //Kiểm tra input mã có hợp lệ không
    //Author PQBinh (8/7/2022)
    checkCodeInput() {
      var x = document.getElementById("formCode");
      if (x.value == "") {
        x.classList.add("input-error");
      } else x.classList.remove("input-error");
    },

    checkNameInput() {
      var x = document.getElementById("formName");
      if (x.value == "") {
        x.classList.add("input-error");
      } else x.classList.remove("input-error");
    },

    checkDepartmentInput() {
      var x = document.getElementById("formDepartment");
      if (x.value == "") {
        x.classList.add("input-department-error");
      } else x.classList.remove("input-department-error");
    },
    /*
     *** Hàm kiểm tra dữ liệu có hợp lệ hay không
     *** Author PQBinh (8/7/2022)
     */
    validateEmployee(employee) {
      var me = this;
      me.errMsg = [];
      let isValid = true;
      try {
        // 1. Kiểm tra các trường bắt buộc
        if (!employee.employeeCode) {
          isValid = false;
          me.errMsg.push(Notifications.Error.CodeEmpty);
          document.getElementById("formName");
        } else {
          //1.2. Kiểm tra xem mã nhân viên có trùng hay không
          axios
            .get(
              `http://localhost:5240/api/v1/Employees/check/${me.employeeSelected.employeeCode}`
            )
            .then(function (res) {
              if (res.data == true) {
                me.errMsg.push(
                  `Mã đơn vị <${me.employeeSelected.employeeCode}> ${Notifications.Error.CodeSame}`
                );
              }
            })
            .catch(function (res) {
              console.log(res);
            });
        }
        // Tên nhân viên không được trống
        if (!employee.employeeName) {
          isValid = false;
          me.errMsg.push(Notifications.Error.NameEmpty);
        }
        // Tên phòng ban không được trống
        if (!employee.departmentName) {
          isValid = false;
          me.errMsg.push(Notifications.Error.DepartmentEmpty);
        }
        var currentDate = new Date();
        employee.dateOfBirth = new Date(employee.dateOfBirth);
        employee.dateOfCard = new Date(employee.dateOfCard);
        // console.log("dob", dateOfBirth.getDate());
        // 2. Kiểm tra các trường liên quan đến ngày tháng
        if (employee.dateOfBirth.getYear() > currentDate.getYear()) {
          isValid = false;
          me.errMsg.push(Notifications.Error.BirthDayLarge);
        } else if (employee.dateOfBirth.getYear() == currentDate.getYear()) {
          if (employee.dateOfBirth.getMonth() > currentDate.getMonth()) {
            isValid = false;
            me.errMsg.push(Notifications.Error.DepartmentEmpty);
          } else if (
            employee.dateOfBirth.getMonth() == currentDate.getMonth()
          ) {
            if (employee.dateOfBirth.getDate() > currentDate.getDate()) {
              isValid = false;
              me.errMsg.push(Notifications.Error.DepartmentEmpty);
            }
          }
        }

        if (employee.dateOfCard.getYear() > currentDate.getYear()) {
          isValid = false;
          me.errMsg.push(Notifications.Error.CartDayLarge);
        } else if (employee.dateOfCard.getYear() == currentDate.getYear()) {
          if (employee.dateOfCard.getMonth() > currentDate.getMonth()) {
            isValid = false;
            me.errMsg.push(Notifications.Error.CartDayLarge);
          } else if (employee.dateOfCard.getMonth() == currentDate.getMonth()) {
            if (employee.dateOfCard.getDate() > currentDate.getDate()) {
              isValid = false;
              me.errMsg.push(Notifications.Error.CartDayLarge);
            }
          }
        }
        // 5. Kiểm tra xem còn lỗi validate hay không
        if (!isValid) {
          //Hiển thị thông báo lỗi
          me.showModal(true);

          return isValid;
        }
        return isValid;
      } catch (error) {
        console.log(error);
      }
    },

    // Hàm mở Modal thông báo lỗi
    //Author PQBinh (8/7/2022)
    showModal(IsShow) {
      this.IsError = IsShow;
    },

    // Nút mở combobox danh sách chức vụ
    //Author PQBinh (8/7/2022)
    toggleOpenListPossition() {
      // console.log("btn open list postion");
      this.isShowPossitionDialog = !this.isShowPossitionDialog;
    },

    // Nút mở combobox dánh sách phòng ban
    //Author PQBinh (8/7/2022)
    changeDepartment() {
      this.isShowDepartmentDialog = true;
    },

    //Lấy mã nhân viên mới
    //Author PQBinh (8/7/2022)
    getNewCode() {
      var me = this;
      try {
        axios
          .get("http://localhost:5240/api/v1/Employees/getNewCode")
          .then(function (res) {
            let newEmployeeCode = res.data;
            me.employeeSelected.employeeCode = newEmployeeCode;
            console.log("new Code", newEmployeeCode);
            // focus vào ô nhập liệu
            document.getElementById("formCode").focus();
          })
          .catch(function (res) {
            console.log(res);
          });
      } catch (er) {
        console.log(er);
      }
    },

    //Nút Hủy Modal thông báo khi đóng
    //Author PQBinh (8/7/2022)
    cancelModal() {
      this.IsShowModalThreeButton = false;
    },

    //Nút không của Modal thông báo khi đóng form
    //Author PQBinh (8/7/2022)
    notModal() {
      var me = this;
      me.IsShowModalThreeButton = false;
      me.closeDialog();
      me.$emit("reloadData");
    },

    //Nút có của Modal thông báo khi đóng form
    //Author PQBinh (8/7/2022)
    acceptModal() {
      var me = this;
      me.IsShowModalThreeButton = false;
      if (me.editMore == 0) {
        me.btnSaveOnClick();
      } else {
        me.btnSaveAndAddOnClick();
      }
    },
    getDepartmentList() {
      var me = this;
      try {
        axios
          .get("http://localhost:5240/api/v1/Departments")
          .then(function (res) {
            me.departments = res.data;
            me.departments.forEach((department) => {
              me.departmentNames.push(department.departmentName);
              return "";
            });
            // console.log("name", me.departmentNames);
          })
          .catch(function (res) {
            console.log(res);
          });
      } catch (er) {
        console.log(er);
      }
    },

    getPostionList() {
      var me = this;
      try {
        var config = {
          method: "get",
          url: "http://localhost:5240/api/v1/Possitions",
          headers: {
            "Content-Type": "application/json",
            accept: "application/json",
          },
        };
        axios(config)
          .then((res) => {
            me.postions = res.data;
            me.postions.forEach((postion) => {
              me.postionNames.push(postion.postionName);
              return "";
            });
          })
          .catch(function (res) {
            console.log(res);
          });
      } catch (er) {
        console.log(er);
      }
    },
  },
  created() {
    var me = this;
    me.employeeSelected = me.employeeDetail;
    // console.log("Douple: ", me.isDouple);

    // convert ngày sinh để có thể hiện ở input type date
    me.employeeSelected.dateOfBirth = formatDate(
      me.employeeSelected.dateOfBirth
    )
      .split("/")
      .join("-");
    // me.employeeSelected.dateOfBirth = new Date(me.employeeSelected.dateOfBirth);
    console.log(me.employeeSelected.dateOfBirth);
    //convert ngày cấp cmnd để có thể hiện ở input type date
    me.employeeSelected.dateOfCard = formatDate(me.employeeSelected.dateOfCard)
      .split("/")
      .join("-");

    //
    if (me.isDouple == 1) {
      me.getNewCode();
    }

    // document.getElementById("formGenderNu").checked = true;
    // Lấy danh sách phòng ban
    me.getDepartmentList();
    // Lấy danh sách chức vụ
    me.getPostionList();

    //Check các radio btn
    me.checkedGenderValue = me.employeeSelected.gender;
    me.checkedCustomerValue = me.employeeSelected.isCustomer;
    me.checkedSupplierValue = me.employeeSelected.isSupplier;

    if (me.editMore == 0) {
      //Lấy mã nhân viên mới
      me.getNewCode();
    }

    me.IsCompleteData = false;
  },
};
</script>