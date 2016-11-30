// pages/detail/detail.js
Page({
  data: {
    errorMsg: ""
  },
  id: 0,
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    console.log("id: " + options.id)
    this.id = options.id
  },
  onReady: function () {
    // 页面渲染完成
    wx.showToast({
      titile: "加载中",
      icon: 'loading',
      duration: 10000
    })
    this.requestDetail()
  },
  requestDetail: function () {
    var page = this
    wx.request({
      url: 'https://romzj.applinzi.com/api/getRomDetail.php?id=' + this.id,
      method: 'GET',
      success: function (res) {
        // success
        wx.hideToast()
        if (res.statusCode == 200) {
          page.setData({
            romList: res.data
          })
        } else {
          page.setErrorMsg("网络错误")
        }
        console.log(res)
      },
      fail: function () {
        // fail
        wx.hideToast()
        page.setErrorMsg("网络错误")
        console.log("fail")
      },
    })
  },
  setErrorMsg: function (errorMsg) {
    this.setData({
      errorMsg: errorMsg
    })
  },
})