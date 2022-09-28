<template>
  <div>
    <div class="content-dashboard">
      <!-- <EmployeeHeader /> -->

      <div class="top-content-list">
        <div class="title1-content-list">Nhân viên</div>

        <div class="button-content">
          <!-- <div class="button-dropdown button-header-extension">
            <span>Tiện ích</span>
            <div class="icon-dropdown icon-down-extension"></div>
          </div> -->
          <div
            class="b-button button-add"
            id="btnHeaderAdd"
            @click="btnAddClick"
          >
            <span>Thêm mới nhân viên</span>
            <!-- <div class="line"></div>
            <div class="button-header-add-drop">
              <div class="icon-dropdown-white icon-down-add"></div>
            </div> -->
          </div>
          <!-- <button @click="exportExcel" class="k-button">Export Excel</button> -->
        </div>

        <!-- <download-excel
          class="btn btn-default"
          :data="json_data"
          :fields="json_fields"
          name="filename.xls"
        >
          Download Excel (you can customize this with html code!)
        </download-excel> -->
      </div>

      <div class="top-content-list top-content2-list">
        <div class="icon-header icon-left"></div>

        <div class="content2-title">Tất cả danh mục</div>
      </div>
      <div class="table-dashboard">
        <div class="top-table-dashboard">
          <div
            class="button-dropdown button-header-extension"
            @click="showBtnDelete"
          >
            <span>Thực hiện hàng loạt</span>
            <div class="icon-dropdown icon-dropdown-grey"></div>
          </div>
          <div
            class="delete-mutiple-row"
            v-if="IsShowDeleteMutile"
            @click="deleteMutileClick"
          >
            Xóa
          </div>
          <div class="top-right-table-dashboard">
            <div class="header-input input-search">
              <input
                placeholder="Nhập từ khóa tìm kiếm"
                type="text"
                class="input-search-content"
                id="search"
                @change="btnSearchClick"
              />
              <div class="header-input-icon icon-search"></div>
            </div>
            <div class="top-button-table">
              <div class="top-button-table-content" title="Tính năng mở rộng">
                <div
                  class="icon-loadData icon-header"
                  id="btnLoadData"
                  @click="reloadData()"
                ></div>
              </div>

              <div class="top-button-table-content" title="Thiết lập">
                <div
                  class="icon-exportExcel icon-header"
                  @click="btnImportClick()"
                ></div>
              </div>

              <div
                class="top-button-table-content"
                title="Trao đổi giữa DN và KT"
              >
                <div class="icon-setting icon-header" @click="exportData"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- PreLoadingTableTable -->
        <!-- table list -->
        <!-- 30 trường dữ liệu -->
        <!-- thêm một trường tick dữ liệu -->
        <div class="main-table-dashboard">
          <table class="list-table" id="tableEmployee">
            <thead class="head-table-list">
              <tr>
                <th class="row-tick-table">
                  <div class="checkbox-row">
                    <input
                      type="checkbox"
                      style="order: 4"
                      class="checkbox-table"
                      id="tickboxRow"
                      :checked="tickAll == 1"
                    />
                    <span
                      class="custom-checkbox checkbox-custom-table"
                      @click="chooseALlClick(employees)"
                    >
                      <span class="custom-checkbox-inner">
                        <div class="icon-tick"></div>
                      </span>
                    </span>
                  </div>
                </th>

                <th class="table-employeeCode">Mã nhân viên</th>
                <th class="table-employeeName">Tên nhân viên</th>
                <th class="table-gender" style="width: 15px !important">
                  Giới tính
                </th>
                <th class="table-dateOfBirth">Ngày sinh</th>
                <th class="table-identityNumber" title="Số chứng minh nhân dân">
                  Số CMND
                </th>
                <th style="width: 50px !important">Đơn vị</th>

                <th>Chức danh</th>

                <th class="table-button-function">Chức năng</th>
              </tr>
            </thead>

            <tbody class="body-table-list">
              <tr
                v-for="emp in employees"
                :key="emp.employeeId"
                @click="rowOnClick(emp)"
                @dblclick="rowOnDbClick(emp)"
                class="tr-table-list"
              >
                <td class="row-tick-table">
                  <div class="checkbox-row">
                    <input
                      type="checkbox"
                      style="order: 4"
                      class="checkbox-table"
                      id="tickboxRow"
                      :checked="tickAll == 1"
                      @click="tickEmployeeClick(emp.employeeId)"
                    />
                    <span
                      style="order: 1"
                      class="custom-checkbox checkbox-custom-table"
                    >
                      <span class="custom-checkbox-inner">
                        <div class="icon-tick"></div>
                      </span>
                    </span>
                  </div>
                </td>

                <td class="table-employeeCode">{{ emp.employeeCode }}</td>
                <td class="table-employeeName">{{ emp.employeeName }}</td>
                <td class="table-gender" style="width: 15px !important">
                  {{ gender[emp.gender - 1] }}
                </td>
                <td class="table-dateOfBirth">
                  {{ formatDate(emp.dateOfBirth) }}
                </td>
                <td class="table-identityNumber">{{ emp.identityCard }}</td>

                <td class="table-employeePosition">
                  {{ emp.departmentName }}
                </td>
                <td class="table-positionId">{{ emp.postionName }}</td>

                <td class="table-button-function">
                  <div class="btn-function-table">
                    <span id="editForm" @click="rowOnDbClick(emp)">Sửa</span>
                    <div
                      class="icon-down-edit"
                      id="icon-down-edit"
                      v-on:click="detailBtnRow"
                      ref="detailBtnRow"
                      v-click-outside="hideDetailBtnRow"
                    ></div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Footer Table -->
        <div class="footer-table-dashboard">
          <div class="left-footer-table-dashboard" id="total-list">
            <span>`Tổng số bản ghi: `</span>
            <span style="font-weight: 900"> {{ totalRecord }} </span>
          </div>

          <div class="right-footer-table-dashboard">
            <div class="custom-list-page">
              <div class="button-custom-list-page" @click="btnPaggingDetail">
                <span>{{ pageSize }} bản ghi trên 1 trang</span>
                <div class="button-drop-down">
                  <div
                    class="icon-dropdown icon-dropdown"
                    id="iconPaging"
                  ></div>
                </div>
              </div>

              <div class="custom-list-page-detail" v-if="IsShowPaging">
                <div
                  v-for="size in listSizePage"
                  :key="size"
                  @click="btnPagging(size)"
                >
                  {{ size }} bản ghi trên 1 trang
                </div>
              </div>
            </div>

            <div class="list-page">
              <span class="pre-page" @click="btnPrevPageClick">Trước</span>
              <span class="page-first">1</span>
              <span
                v-show="
                  pageIndex != 1 &&
                  pageIndex != (totalRecord / pageSize).toFixed()
                "
                >...</span
              >
              <span
                class="page-persent"
                v-show="
                  pageIndex != 1 &&
                  pageIndex != (totalRecord / pageSize).toFixed()
                "
                >{{ pageIndex }}</span
              >
              <span>...</span>
              <span class="page-last">{{
                (totalRecord / pageSize).toFixed()
              }}</span>
              <span class="next-page" @click="btnNextPageClick">Sau</span>
            </div>
          </div>
        </div>
      </div>
      <!-- <EmployeeList /> -->
    </div>
    <PreLoadingTable v-if="IsCompleteData" />
    <!-- <div>
      <div class="detail-function-table">
        <div class="detail-btn">Nhân bản</div>
        <div class="detail-btn">Sửa</div>
        <div class="detail-btn">Ngừng sử dụng</div>
      </div>
    </div> -->
    <TableExpand
      v-click-outside="hideDetailBtnRow"
      v-if="IsOpenTableExpand"
      :pos="pos"
      @btnDelete="btnDelete"
      @btnDouple="btnDouple"
      @btnTableExpand="btnTableExpand"
    />

    <EmployeeDetail
      v-if="IsShowDialog"
      :employeeDetail="employeeSelected"
      :editMore="editMore"
      :isDouple="isDouple"
      @closeDialog="showDialog"
      @reloadData="reloadData"
      @saveAndAdd="btnAddClick"
    />

    <ModalButtons
      v-if="IsShowModalDelete"
      :errMsg="errMsg"
      @confirmDelete="confirmDelete"
      @confirmCancleDelete="confirmCancleDelete"
    />
    <input
      ref="fileImport"
      id="fileImport"
      type="file"
      @click="btnImportFileClick"
    />
  </div>
</template>
<style>
@import url(../../css/layout/header.css);
@import url(../../css/layout/content.css);
@import url(../../css/base/table.css);
@import url(../../css/base/button.css);
@import url(../../css/layout/customer.css);
</style>
<script>
// import EmployeeList from "../../pages/Employee/EmployeeList.vue";
// import EmployeeHeader from "../../pages/Employee/EmployeeHeader.vue";
import axios from "axios";
import formatDate from "../../extension/formatDate";
import formatCurrency from "../../extension/formatCurrency";
import formatPhoneNumber from "../../extension/fomartPhoneNumber";
import EmployeeDetail from "./EmployeeDetail.vue";
import PreLoadingTable from "../../components/base/PreLoadingTable.vue";
import TableExpand from "../../components/base/TableExpand.vue";
// import { createToast } from "mosha-vue-toastify";
import "mosha-vue-toastify/dist/style.css";
import ClickOutside from "vue-click-outside";
import baseApi from "../../base/baseApi/baseApi";
import ModalButtons from "../../components/base/ModalButtons.vue";
import { createToast } from "mosha-vue-toastify";

// Enums
import MessageApi from "../../Enums/enumMessageApi";
import Notifications from "../../Enums/enumNotification";
import { saveExcel } from "@progress/kendo-vue-excel-export";

export default {
  name: "EmployeeList",
  components: {
    EmployeeDetail,
    PreLoadingTable,
    TableExpand,
    ModalButtons,
  },

  methods: {
    exportExcel() {
      saveExcel({
        data: this.employees,
        fileName: "myFile",
        columns: [
          { field: "STT" },
          { field: "Mã nhân viên", title: "Nhân viên" },
          { field: "Tên nhân viên", title: "Nhân viên" },
          { field: "Giới tính", title: "Nhân viên" },
          { field: "Ngày sinh", title: "Nhân viên" },
          { field: "Chức danh", title: "Nhân viên" },
          { field: "Tên đơn vị", title: "Nhân viên" },
          { field: "Tên ngân hàng", title: "Nhân viên" },
          { field: "Số tài khoản", title: "Nhân viên" },
        ],
      });
    },
    baseApi,

    formatDate,

    formatCurrency,

    formatPhoneNumber,

    /*
     ** Reload lại trang
     ** Author PQBinh(10/7/2022)
     */
    reloadData() {
      // console.log("reload");
      this.loadData();
    },

    // Khi bấm vào nút thêm mới nhân viên sẽ   mở ra dialog và lấy mã nhân viên mới
    //Author PQBinh(10/7/2022)
    btnAddClick() {
      this.showDialog(true);
      this.employeeSelected = {};
      this.editMore = 0;
    },

    // gán giá trị cho biến IshowDiaLog
    //Author PQBinh(10/7/2022)
    showDialog(isShow) {
      this.IsShowDialog = isShow;
    },

    // khi click vào 1 hàng sẽ đặt giá trị cho biến employeeS Selected
    //Author PQBinh(10/7/2022)
    rowOnClick(emp) {
      this.employeeSelected = emp;
    },

    /*
     ** Khi double click vào dòng của bảng sẽ hiện lên chi tiết nhân viên
     ** Author PQBinh(10/7/2022)
     */
    rowOnDbClick(emp) {
      this.employeeSelected = emp;
      this.IsShowDialog = true;
      this.editMore = 1;
      this.$nextTick(function () {
        document.getElementById("formCode").focus();
      });
    },

    // Khi bấm vào nút xổ xuống sẽ hiện ra chi tiết các nút trong bảng table
    //Author PQBinh(10/7/2022)
    detailBtnRow: function (event) {
      this.IsOpenTableExpand = true;
      var btnDetail = event.target.getBoundingClientRect();
      this.pos.top = btnDetail.top + 20;
      this.pos.left = btnDetail.left - 50;
    },
    hideDetailBtnRow() {
      this.IsOpenTableExpand = false;
    },

    //Xóa một nhân viên được chọn
    // author PQBinh (10/7/2022)
    btnDelete() {
      this.IsOpenTableExpand = false;
      this.errMsg = [];
      var mess = `${Notifications.ConfimDelete} <${this.employeeSelected.employeeCode}> không? `;
      this.errMsg.push(mess);
      this.IsShowModalDelete = true;
    },

    // Xác nhận xóa nhân viên đó khi modal hiện lên
    //Author PQBinh(10/7/2022)
    confirmDelete() {
      var url = `http://localhost:5240/api/v1/Employees?id=${this.employeeSelected.employeeId}`;
      this.baseApi("delete", url, this.employeeSelected.employeeId);
      createToast(MessageApi.Delete);

      this.IsShowModalDelete = false;
      this.reloadData();
    },

    // Xác nhận hủy khi modal thông báo có xác nhận xóa nhân viên đó không
    // Author PQBinh(10/7/2022)
    confirmCancleDelete() {
      this.IsShowModalDelete = false;
    },

    /*
     ** Khi bấm vào nút import sẽ chọn file để import
     ** Author PQBinh(10/7/2022)
     */
    btnImportClick() {
      this.$refs.fileImport.click();
    },

    // Lấy file chọn khi import để gửi lên Api
    //Author PQBinh(10/7/2022)
    btnImportFileClick: function () {
      var formData = new FormData();
      var file = document.getElementById("fileImport").files[0];
      formData.append("fileImport", file);
      console.log(formData);
      // try {
      //   axios
      //     .post("http://localhost:5240/api/v1/Employees/import", formData, {
      //       headers: {
      //         "Content-Type": "multipart/form-data",
      //       },
      //     })
      //     .then(function (res) {
      //       createToast(MessageApi.Post);
      //       console.log(res);
      //     });
      // } catch (er) {
      //   console.log(er);
      // }
      // console.log(document.getElementById("fileImport").files[0]);
    },

    /*
     ** Load dữ liệu với các dữ liệu như tìm kiếm, số trang
     ** Author PQBinh(10/7/2022)
     */
    loadData() {
      var me = this;
      me.IsCompleteData = true;

      try {
        var config = {
          method: "get",
          url: `http://localhost:5240/api/v1/Employees/filter/?pageIndex=${me.pageIndex}&pageSize=${me.pageSize}`,
          headers: {
            "Content-Type": "application/json",
            accept: "application/json",
          },
        };
        if (me.filter != null) {
          config.url += `&filter=${me.filter}`;
        }
        axios(config)
          .then(function (res) {
            me.employees = res.data.data;
            me.totalRecord = res.data.totalRecord;
            me.IsCompleteData = false;
          })
          .catch(function (res) {
            console.log(res);
          });
      } catch (er) {
        console.log(er);
      }
      //Kiểm tra xem pageIndex có phải 1 hay trang cuối cùng hay không để thêm css
    },

    /*
     ** hiện các lựa chọn của pagging
     ** Author PQBinh(10/7/2022)
     */
    btnPaggingDetail() {
      this.IsShowPaging = !this.IsShowPaging;

      //
    },

    /*
     ** phân trang với kích thước trang là tham số truyền vào
     ** Author PQBinh(10/7/2022)
     */
    btnPagging(size) {
      var me = this;
      me.pageSize = size;
      me.loadData();
      me.btnPaggingDetail();
    },

    /*
     ** Khi bấm vào nút tiếp để sang trang tiếp
     ** Author PQBinh(10/7/2022)
     */
    btnNextPageClick() {
      var me = this;
      if (me.pageIndex < me.totalRecord / me.pageSize) {
        me.pageIndex = me.pageIndex + 1;
        me.loadData();
      }
    },

    /*
     ** Khi bấm vào nút trước để quay lại trang trước
     ** Author PQBinh(10/7/2022)
     */
    btnPrevPageClick() {
      var me = this;
      if (me.pageIndex > 1) {
        me.pageIndex = me.pageIndex - 1;
        me.loadData();
      }
    },

    /*
     ** Khi bấm vào nút tìm kiếm dữ liệu employe với từ tìm kiếm
     ** Author PQBinh(10/7/2022)
     */
    btnSearchClick() {
      this.filter = document.getElementById("search").value;
      this.pageIndex = 1;
      this.loadData();
    },

    // Khi bấm vào nút chọn tất cả của table
    // param: employee: tất cả nhân viên hiện có trên bảng
    //Author PQBinh(10/7/2022)
    chooseALlClick(employees) {
      if (this.tickAll == 1) {
        this.tickAll = 0;
        this.employeeTicked = [];
      } else {
        this.tickAll = 1;
        employees.forEach((emp) => {
          this.employeeTicked.push(emp.employeeId);
          return emp.employeeId;
        });
      }
      if (this.employeeTicked.length == 0) {
        this.IsShowDeleteMutile = false;
      }
    },

    // Hiện ra nút xóa hàng loạt
    //Author PQBinh(10/7/2022)
    showBtnDelete() {
      if (document.querySelector("#tickboxRow:checked") != null) {
        this.IsShowDeleteMutile = !this.IsShowDeleteMutile;
      }
    },

    // Khi bấm tích chọn của 1 hàng table sẽ tích chọn hàng đó nếu chưa có thì sẽ thêm vào ,
    // nếu đã có sẽ bỏ ra khỏi danh sách các hàng được tích chọn
    //params: id: id nút của tích chọn
    //Author PQBinh(10/7/2022)
    tickEmployeeClick(id) {
      var listId = this.employeeTicked;
      var index = listId.indexOf(id);
      // var row = document.getElementsByClassName("body-table-list");
      // console.log("index", index, "/n row", row[0].children[0]);

      if (index == -1) {
        listId.push(id);
      } else {
        listId.splice(index, 1);
      }
      this.employeeSelected = listId;
      var index_ = listId.indexOf(id);
      var row = document.getElementsByClassName("body-table-list");

      row[0].children[index_].getElementsByClassName("row-tick-table").focus;

      if (listId.length == 0) {
        this.IsShowDeleteMutile = false;
      }
    },

    //Khi nút xóa hàng loạt được click sẽ xác nhận xóa các nhân viên được tích chọn
    //Author PQBinh(10/7/2022)
    deleteMutileClick() {
      try {
        this.employeeTicked.forEach((item) => {
          var url = `http://localhost:5240/api/v1/Employees?id=${item}`;
          this.baseApi("delete", url, item);
        });
        createToast(MessageApi.Delete);
        this.IsShowDeleteMutile = false;
      } catch (ex) {
        console.log(ex);
      }
    },

    //Khi nút nhân bản được click
    //Author PQBinh(10/7/2022)
    btnDouple() {
      var me = this;
      me.rowOnDbClick(me.employeeSelected);
      this.IsOpenTableExpand = false;
      me.isDouple = 1;
    },

    // Khi nút ngừng phát triển được click
    //Author PQBinh(10/7/2022)
    btnTableExpand() {
      this.IsOpenTableExpand = false;
      alert("Tính năng đang được phát triển");
    },

    //Xuất khẩu dữ liệu ra file excel
    //Author PQBinh - 24/7/2022
    exportData() {
      /* Get the HTML data using Element by Id */
      var table = document.getElementById("tableEmployee");

      /* Declaring array variable */
      var rows = [];

      //header của table
      rows.push([
        "STT",
        "Mã nhân viên",
        "Tên nhân viên",
        "Giới tính",
        "Ngày sinh",
        "Chức danh",
        "Tên đơn vị",
        "Số tài khoản",
        "Tên ngân hàng",
      ]);
      //iterate through rows of table
      for (var i = 1, row; (row = table.rows[i]); i++) {
        //rows would be accessed using the "row" variable assigned in the for loop
        //Get each cell value/column from the row
        let column1 = i;
        let column2 = row.cells[1].innerText.toString();
        let column3 = row.cells[2].innerText.toString();
        let column4 = row.cells[3].innerText.toString();
        let column5 = row.cells[4].innerText.toString();

        /* add a new records in the array */
        rows.push([column1, column2, column3, column4, column5]);
      }
      var csvContent = "data:text/csv;charset=utf-8,";
      /* add the column delimiter as comma(,) and each row splitted by new line character (\n) */
      rows.forEach(function (rowArray) {
        row = rowArray.join(",");
        csvContent += row + "\r\n";
      });

      console.log(csvContent);
      // create a hidden <a> DOM node and set its download attribute */
      var encodedUri = encodeURI(csvContent);
      var link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "test.csv");
      document.body.appendChild(link);
      // /* download the data file named "Stock_Price_Report.csv" */
      link.click();

      // var CsvString = "";
      // CsvString = "data:application/csv," + encodeURIComponent(rows);
      // var x = document.createElement("A");
      // x.setAttribute("href", CsvString);
      // x.setAttribute("download", "somedata.csv");
      // document.body.appendChild(x);
      // x.click();
    },
  },
  data() {
    return {
      IsShowDialog: false, // biến có mở dialog
      IsShowDetailBtn: 0, // biến có mở nút xóa
      employees: [], // danh sách các nhân viên được trả về khi loadData
      employeeSelected: {}, // đối tượng nhân viên được click
      editMore: 0, // biến kiểm tra có phải sửa hay thêm mới dữ liệu: sửa là 0;
      IsCompleteData: true, // biến load dữ liệu thành công
      IsOpenTableExpand: false, // biến mở menu tại table
      pos: {}, // vị trí của nút dropdown của table
      filter: null, // từ tìm kiếm
      pageIndex: 1, // vị trí trang
      pageSize: 10, // số trang
      totalRecord: 0, // tổng số bản ghi
      IsShowPaging: false, // có mở combobox chứa danh sách các lựa chọn phân trang
      gender: ["Nam", "Nữ", "Khác"], // mảng chứa giới tính
      listSizePage: [10, 20, 30, 50, 100], // mảng chứa số nhân viên trên / trang
      IsShowModalDelete: false, // có mở modal xóa
      errMsg: "", // thông báo lỗi
      tickAll: 0, // có chọn tất cả, 0 : không và 1 : đang chọn tất cả
      IsShowDeleteMutile: false, //biến mở nút xóa
      employeeTicked: [], // danh sách chứa các nhân viên được tích
      isDouple: 0, // có nhân bản: 0: không, 1: có
    };
  },

  // 1. before created
  /*
   ** Trước khi được khởi tạo, chưa khởi tạo dữ liệu và dom
   */
  beforeCreate() {},
  // 2. created
  /*
   ** Khi được khởi tạo, có thể lấy dữ liệu từ data nhưng dom chưa được khởi tạo
   */
  created() {
    this.loadData();
  },

  // 3. before mount
  beforeMount() {},
  // 4. mounted
  /*
   ** Data và dom đều đã được khởi tạo
   */
  mounted() {
    this.$refs.detailBtnRow = this.$el;
  },
  //5. beforeUpdate
  beforeUpdate() {},
  // 6. Updated
  updated() {},
  directives: {
    ClickOutside,
  },
};
</script>
