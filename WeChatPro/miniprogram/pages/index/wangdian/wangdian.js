// pages/index/wangdian/wangdian.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lat: '',
    lon: ''
  },


  // 获取经纬度，需先在app.json中添加permission 属性配置调用用户授权信息
  getCenterLocation: function () {
    /* wx.getLocation({
      success: function (res) {
        console.log(res.longitude);
        console.log(res.latitude);
        this.setData({
          lat: res.latitude,
          lon: res.longitude
        });
      }
    }); */
    // 跳转事件绑定
    wx.navigateTo({
      url: 'map/map?lat=' + this.data.lat + '&lon=' + this.data.lon
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /* var that = this;
    wx.getLocation({
      success: function (res) {
        console.log(res.longitude);
        console.log(res.latitude);
        that.setData({
          lat: res.latitude,
          lon: res.longitude
        });
      }
    }); */
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