// miniprogram/pages/leijishouyi/leijishouyi.js
var util = require('../../utils/utils.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    txtlist: [{
      id: '001',
      name: '保单拥金',
      num: '10',
      date: new Date().toLocaleDateString().replace(/\//g,' -')
    }, {
      id: '002',
      name: '保单拥金',
      num: '20',
      date: new Date().toLocaleDateString().replace(/\//g,' - ')
    }, {
      id: '003',
      name: '保单拥金',
      num: '30',
      date: new Date().toLocaleDateString().replace(/\//g,' - ')
    }]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    /*
    系统日期 方法二
    // 调用函数时，传入new Date()参数，返回值是日期和时间
    var time = util.formatTime(new Date());
    // 再通过setData更改Page()里面的data，动态更新页面的数据
    this.setData({
      time: time
    });
    wxml
    <text class='data'> {{time}}</text>
    */

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})