//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    array: ['美国', '中国', '巴西', '日本'],
    type_array: ['有氧运动', '无氧运动', '器械', '拉伸'],
    length_array: ['一小时', '两小时', '半小时'],
    objectArray: [
      {
        id: 0,
        name: '美国'
      },
      {
        id: 1,
        name: '中国'
      },
      {
        id: 2,
        name: '巴西'
      },
      {
        id: 3,
        name: '日本'
      }
    ],
    index: 0,
    date: '2016-09-01',
    time: '12:01'
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange: function (e) {
    this.setData({
      time: e.detail.value
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  },
  sendData: function (){
    console.log(send!!)
  /*
    var Util = require('../../../utils/util.js');
    wx.request({
      url: App.Config.post_Data,//自己的服务接口地址
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: { postdata: Util.json2Form(params) },//注意这里哈！
      success: function (data) { console.log('已经提交数据到数据库') }
    })
    */
  }
  
})
