// pages/detail/detail.js
Page({
  data: {
    errorMsg: "",
  },
  id: 0,
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    console.log("id: " + options.id)
    this.id = options.id
    // for test
    this.id = 59750
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
            romInfo: res.data
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
  previewThumbs: function (event) {
    wx.previewImage({
      current: event.target.dataset.url, // 当前显示图片的链接，不填则默认为 urls 的第一张
      urls: this.data.romInfo.image_list
    })
  },
  downloadShuame: function () {
    getApp().downloadShuame();
  },
})