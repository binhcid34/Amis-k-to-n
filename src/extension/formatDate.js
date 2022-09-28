export default function formatDate(dateOfBirth) {
  let _dateOfBirth = new Date(dateOfBirth);
  if (
    dateOfBirth &&
    _dateOfBirth instanceof Date &&
    !isNaN(_dateOfBirth.valueOf())
  ) {
    let _date = _dateOfBirth.getDate();
    let _month = _dateOfBirth.getMonth() + 1;
    let _year = _dateOfBirth.getFullYear();

    // xử lý tháng nếu tháng < 10 thì thêm số 0 ở đầu
    if (_month <= 9) {
      if (_date <= 9) {
        _dateOfBirth = `0${_date}/0${_month}/${_year}`;
      } else {
        _dateOfBirth = `${_date}/0${_month}/${_year}`;
      }
    } else {
      _dateOfBirth = `${_date}/${_month}/${_year}`;
    }
    // dateOfBirth = _dateOfBirth;
    // var newdate = dateOfBirth.split("-").reverse().join("-");
    return _dateOfBirth;
  } else {
    return "";
  }
}
