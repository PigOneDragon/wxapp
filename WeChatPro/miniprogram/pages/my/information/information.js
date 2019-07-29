// miniprogram/pages/information/information.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   
      haad: '../../../images/pic-1.png',
      user: 'admin',
      name: '王**',
      sex: '男',
      date: '2018-08-08',
      userInfo: {}
 
  },
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({
      date: e.detail.value
    });
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({
      index: e.detail.value
    });
  },
  bindPickerJdChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({
      index1: e.detail.value
    });
  },
  // 监听用户是否在个人信息页面发生了信息更改，同步更新传入的本地缓存数据
  changeValue: function (e) {
    var val = e.detail.value;
    // 重新设置下本地缓存对象
    this.data.userInfo.name = val;
    wx.setStorageSync('userInfo', this.data.userInfo);
  }, 
/*   vv: function () {
    console.log(userInfo);
  }, */
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 页面加载时改变today的值
    var timestamp = Date.parse(new Date());
    var date = new Date(timestamp);
    //获取年份  
    var Y = date.getFullYear();
    //获取月份  
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    //获取当日日期 
    var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    const day = Y + "-" + M + "-" + D;
    this.today = day;
    this.setData({
      today: day
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var userInfo = wx.getStorageSync('userInfo');
    console.log(userInfo);
    this.setData({
      userInfo: userInfo
    });
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