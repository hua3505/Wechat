// pages/template/template.js
Page({
  data: {
    item: {
      index: 0,
      msg: 'this is a template',
      time: '2016-09-15'
    },
    roms: [{
      image: 'http://static1.romzj.com/images/upload/2016/11/14/thumbnails/5829834027c67.png',
      romName: '小米 Mi5 (全网通) 最新官方包 省电流畅 精简稳定'
    }, {
      image: 'http://static1.romzj.com/images/upload/2016/11/17/thumbnails/582d7cb07a126.png',
      romName: '小米 Mi5 (全网通) CyanogenMod 13.0（Android6.0.1）省电流畅 精简稳定'
    }
    ],
    romItemTemplate: "romItem",
  },
  biubiubiu: function () {
    this.setData({
      romItemTemplate: "romItem2"
    })
  }
})