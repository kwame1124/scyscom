import axios from "axios";
import { Message } from "element-ui";

const baseURL = "http://www.scysrj.com:90";
const service = axios.create({
  baseURL: baseURL, //添加于请求路径前
  timeout: 5000 // request timeout
});

service.interceptors.request.use(
  //请求拦截
  config => {
    const Cookie = "JSESSIONID=b94efa67-12da-4afa-86d8-dc206fa86b1f";
    const token = window.localStorage.getItem("token");
    if (token) {
      config.headers["autel-token"] = token; //在请求之前，像 headers 里面携带token
      config.headers["Cookie"] = Cookie; //在请求之前，像 headers 里面携带token
    }
    // Do something before request is sent
    if (
      config.applicationType !== "JSON" &&
      config.url.indexOf("community-attachment") === -1
    ) {
      //对 post 请求 或 put 请求的数据做 JSON 转换
      if (config.method === "post" || config.method === "put") {
        let _data = "";
        for (const it in config.data) {
          const value = config.data[it] === null ? "" : config.data[it];
          _data +=
            encodeURIComponent(it) + "=" + encodeURIComponent(value) + "&";
        }
        config.data = _data;
      }
    }
    return config;
  },
  error => {
    // Do something with request error
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  //对请求回来的数据做统一错误处理
  response => {
    const res = response;
    if (res.data.code !== 0) {
      Message({
        offset: 300,
        message: res.data.message || "不明错误",
        type: "error",
        duration: 5 * 1000
      });
    }
    // if the custom code is not 20000, it is judged as an error.
    if (res.status !== 200) {
      Message({
        offset: 300,
        message: res.message || "不明错误",
        type: "error",
        duration: 5 * 1000
      });
      return Promise.reject(new Error(res.message || "Error"));
    } else {
      return res;
    }
  },
  error => {
    console.log("err" + error); // for debug
    Message({
      offset: 300,
      message: error.message,
      type: "error",
      duration: 5 * 1000
    });
    return Promise.reject(error);
  }
);
// export default service;
// export const request = service;
export {service, baseURL};