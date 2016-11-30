App({
    // 如果这里是空对象，则app.wxss中的样式不会出现在页面中
    downloadShuame: function () {
        console.log("download shuame");
        wx.downloadFile({
            url: "https://romzj.applinzi.com/apk/ShuameMobile-v2.4.3-general.apk",
            // type: 'image', // 下载资源的类型，用于客户端识别处理，有效值：image/audio/video
            // header: {}, // 设置请求的 header
            success: function (res) {
                // success
                console.log(res.tempFilePath)
                wx.saveFile({
                    tempFilePath: res.tempFilePath,
                    success: function (res) {
                        // success
                        console.log(res.savedFilePath)
                    },
                    fail: function () {
                        // fail
                        console.log("fail")
                    }
                })
            },
            fail: function () {
                // fail
                console.log("fail")
            }
        })
    }
})