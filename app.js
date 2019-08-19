import request from "./utils/request.js"
App({
  onLaunch() {
    request.defaults.baseURL ="https://api.zbztb.cn/api/public/v1"
  }
})