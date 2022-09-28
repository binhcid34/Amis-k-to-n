import axios from "axios";
/*
 ** Xử lý các thao tác lấy dữ liệu lên Api
 ** @params : @url: tên miền, @param:  các tham số gửi lên, @data: dữ liệu gửi về
 ** Author PQBinh(12/7/2022)
 */
export default function getApi(url, param, data) {
  try {
    var config = {
      method: "get",
      url: url,
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      data: param,
    };
    axios(config)
      .then((res) => {
        data = res.data;
        console.log("data", data);
      })
      .catch(function (res) {
        console.log(res);
      });
  } catch (er) {
    console.log(er);
  }

  return data;
}
