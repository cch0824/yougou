/**
 * 封装类似axios
 * 1.axios的基准路径
 * 2.发起请求axios().then().catch()
 * 3.axios的错误拦截axios.onError
 */

// 2.发起请求
const request = function(config = {}) {
  if (!config.url) {
    throw new Error("请输入url地址!!")
    return
  }
  // 判断是否含有http
  if (config.url.search(/^http/) == -1) {
    // 拼接url
    config.url = request.defaults.baseURL + config.url
  }
  return new Promise((resolve, reject) => {
    wx.request({
      // 解构
      ...config,
      success(res) {
        resolve(res)
      },
      fail() {},
      complete(res) {
        // 遍历存起来的请求错误函数数组，fn就是请求失败的函数
        request.errors.forEach(fn => {
          fn(res)
        })
      }
    })
  })
};

// request的默认属性
// 1. 设置基准路径
request.defaults = {
  baseURL: ""
}
// 3. 拦截错误信息
// 将错误函数保存起来
request.errors = [];
request.onError = function(callback) {
  request.errors.push(callback)
};
export default request