import axios from "axios";
/*
 ** Xử lý các thao tác gửi dữ liệu lên Api
 ** Author PQBinh(12/7/2022)
 */
export default function getApi(method, url, data) {
  try {
    var config = {
      method: method,
      url: url,
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      data: data,
    };
    axios(config)
      .then(() => {
        return 1;
      })
      .catch(function (res) {
        console.log(res);
      });
  } catch (er) {
    console.log(er);
    return 0;
  }
}
