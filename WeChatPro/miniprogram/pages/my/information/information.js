// miniprogram/pages/information/information.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    head: '../../../images/pic-1.png',
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

  changeValue: function (e) {
    // var orderInfo = e.detail.value;
    // 提交表单时将页面内的this.data里的存储用户信息的对象赋值
    console.log("表单值:", e.detail.value);
    var dataF = e.detail.value;
    // 有个问题，每次进入该页面都用的data里的数据
    this.setData({
      user: dataF.nickname,
      name: dataF.name,
      sex: dataF.sex,
      date: dataF.birthday,
      userInfo: e.detail.value
    });
    // console.log(this.data.name);
    wx.setStorage({
      key: 'orderInfo',
      // 存入缓存的数据
      data: this.data.userInfo,
      success: function (res) {
        // 提交成功后显示提示信息
        wx.showToast({
          title: "保存成功"
        });
      }
    });
 
    /*  wx.navigateTo({
       url: '../my'
     }); */
  },
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