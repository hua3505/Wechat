// pages/index.js
var common = require("../../modules/common.js");
Page({
    data: {
        msg: 'world',
        viewClass: 'view',
        include: false
    },
    name: "",
    onLoad: function (options) {
        // 页面初始化 options为页面跳转所带来的参数
        common.onPageLoad();
    },
    onReady: function () {
        // 页面渲染完成
    },
    onShow: function () {
        // 页面显示/**/
        console.log(getCurrentPages());
    },
    onHide: function () {
        // 页面隐藏
        console.log(getCurrentPages());
    },
    onUnload: function () {
        // 页面关闭
        common.onPageUnload();
    },
    onPullDownRefresh: function () {
        console.log("onPullDownRefresh");
    },
    onReachBottom: function () {
        console.log("onReachDown");
    },
    viewTap: function () {
        console.log(event)
        console.log("viewTap");
        if (name !== "") {
            this.setData({
                msg: name,
            });
        }
    },
    changeColor: function () {
        this.setData({
            color: getApp().getRandomColor()
        })
    },
    changeClass: function () {
        this.setData({
            viewClass: "view2"
        })
    },
    bindNameInput: function (event) {
        // console.log(event.detail.value);
        console.log(event)
    },
    bindNameInputEnd: function (event) {
        console.log("bindNameInputEnd");
        console.log(event)
        name = event.detail.value;
    },
    include: function () {
        this.setData({
            include: true
        })
    }
})