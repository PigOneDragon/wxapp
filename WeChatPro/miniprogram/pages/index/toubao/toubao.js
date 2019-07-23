// miniprogram/pages/index/toubao/toubao.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 控制表单弹窗是否显示
    show: false,
    // multiIndex: [0, 0, 0],
    date: '2018-08-08',
    // 车牌的地市数组
    array: ['美国', '中国', '巴西', '日本'],
    objectArray: [{
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
    // 车牌的地市默认选中
    index: 0,
    // 车牌的地市数组
    array1: ['12000', '24000', '25800', '35000','请选择金额'],
    objectArray1: [{
        id: 0,
        name: '12000'
      },
      {
        id: 1,
        name: '24000'
      },
      {
        id: 2,
        name: '25800'
      },
      {
        id: 3,
        name: '35000'
      },
      {
        id: 4,
        name: '请选择金额'
      }
    ],
    // 车牌的地市默认选中
    index1: 4
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
    event.stopPropagation();
  },
   bindPickerJdChange: function (e) {
     console.log('picker发送选择改变，携带值为', e.detail.value);
     this.setData({
       index1: e.detail.value
     });
     event.stopPropagation();
   },
  //  点击显示弹窗
  showFrom: function () {
    this.setData({
      show: true
    });
  },
  closeFrom: function () {
    this.setData({
      show: false
    });
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