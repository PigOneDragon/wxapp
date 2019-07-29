// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    infoList: [{
      id: '0001',
      imgUrl: '../../images/w-1.png',
      text: '个人信息',
      link: 'information/information'
    }, {
      id: '0002',
      imgUrl: '../../images/w-2.png',
      text: '我的订单',
      link: 'information/information'
    }, {
      id: '0003',
      imgUrl: '../../images/w-3.png',
      text: '我的推广',
      link: 'information/information'
    }, {
      id: '0004',
      imgUrl: '../../images/w-4.png',
      text: '我的团队',
      link: 'information/information'
    }, {
      id: '0005',
      imgUrl: '../../images/w-5.png',
      text: '代理考试',
      link: 'information/information'
    }, {
      id: '0006',
      imgUrl: '../../images/w-6.png',
      text: '员工入口',
      link: 'information/information'
    }, {
      id: '0007',
      imgUrl: '../../images/w-7.png',
      text: '我的保险圈',
      link: 'information/information'
    }, {
      id: '0008',
      imgUrl: '../../images/w-8.png',
      text: '退出登录',
      link: 'information/information'
    }],
    // 个人信息，该信息要传递进个人信息中
    userInfo: {
      id: '123',
      // name: '何慧峰',
      userHead: '../../images/userhead1.png',
      joinDate: '2019-01-01',
      tjr: '王小二'
    },
    userInfoForm: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    // 定义用户信息，通过类似于Vuex的store，微信的本地缓存函数wx.setStorageSync(定义的存储对象的别名，要存储的对象)，在其他的页面直接通过wx.getS
    /* var userInfo = {
      id: '123',
      name: '何慧峰',
      userHead: '../../images/userhead1.png',
      joinDate: '2019-01-01',
      tjr: '王小二',
      nickName: 'admin',
      sex: '男',
      birthday: '2018-08-08'
    };
    this.setData({
      userInfo: userInfo
    });
    wx.setStorageSync('userInfo', userInfo); */
    var that = this;
    wx.getStorage({
      key: 'orderInfo',
      success: function (res) {
        // 拼接对象
        console.log(res);
        // 拼接后数值不更新？
        // var allInfo = {...res.data, ...that.data.userInfo};
        that.setData({
          userInfoForm: res.data
        });
        // console.log(that.data.userInfo);
      }
    });
    wx.getStorage({
      key: 'userImgs',
      success: function (res) {
        // 拼接对象
        console.log(res);
        // 拼接后数值不更新？
        // var allInfo = {...res.data, ...that.data.userInfo};
        that.setData({
          ["userInfo.userHead"]: res.data
        });
        // console.log(that.data.userInfo);
      }
    });
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