// pages/index/index.js
Page({
  data: {
    errorMsg: ""
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
    this.getPhoneModel(true)
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  onPullDownRefresh() {
    this.getPhoneModel(false)
  },
  getPhoneModel: function (showLoading) {
    var page = this
    wx.getSystemInfo({
      success: function (res) {
        console.log(res.model)
        page.setData({
          model: res.model
        })
        if (showLoading) {
          wx.showToast({
            titile: "加载中",
            icon: 'loading',
            duration: 10000
          })
        }
        page.requestRomList()
      }
    })
  },
  requestRomList: function () {
    var page = this;
    var model = this.data.model;
    model = model.replace(" ", "")
    model = model.toLowerCase()
    // for test
    model = "mi5"
    console.log(model)
    wx.request({
      url: 'https://romzj.applinzi.com/api/getRomList.php?model=' + model,
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        // success
        if (res.statusCode == 200) {
          page.setData({
            romList: res.data
          })
        } else {
          page.setErrorMsg("暂时没有适合您的机型的ROM")
        }

        console.log(res)
      },
      fail: function () {
        // fail

        page.setErrorMsg("网络错误")
        console.log('fail')
      },
      complete: function () {
        wx.hideToast()
        wx.stopPullDownRefresh()
      }
    })
  },
  setErrorMsg: function (errorMsg) {
    this.setData({
      errorMsg: errorMsg
    })
  },
  downloadShuame: function () {
    getApp().downloadShuame();
  },
  gotoDetail: function (event) {
    wx.navigateTo({
      url: '../detail/detail?id=' + event.target.dataset.id,
    })
  }
})