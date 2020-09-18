  // 设置基地址
  const BASE_URL='https://www.uinav.com'
  // 公共请求方法
function request(options) {
    // 返回
    return new Promise((resolve) => {
      // 发请求
      wx.request({
        url: BASE_URL+options.url,
        success: (res) => {
          // 解构
          let { status, message } = res.data
          if (status === 200) {
            resolve(message)
          }
        }
      })
    })
  }
  export default request