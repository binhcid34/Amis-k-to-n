const Notifications = Object.freeze({
  ConfimDelete: "Bạn có chắc chắn muốn xóa nhân viên",

  Error: {
    CodeEmpty: "Mã nhân viên không được để trống",
    CodeSame: "đã tồn tại trong hệ thống, vui lòng kiểm tra lại",
    NameEmpty: "Tên nhân viên không được để trống",
    DepartmentEmpty: "Đơn vị không được để trống",
    BirthDayLarge: "Ngày sinh không được phép nhập lớn hơn ngày hiện tại",
    CartDayLarge: "Ngày cấp không được phép nhập lớn hơn ngày hiện tại",
  },
});

export default Notifications;
