// pages/bxq/bxq.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   /*  // 切换图片的类
    showView: false, */
    // 给点赞的元素添加ID，匹配哪个内容发生了点击
    imgTxtList: [{
      id:'001',
      showView: true,
      desc: '公平保险就是保险期望损失为0的保单，即保单的期望损失等于保险费，是基于概率理论、期望理论引申而来的。',
      imgUrls: ['../../images/b_1.jpg', '../../images/b_1.jpg', '../../images/b_1.jpg'],
      view: 105,
      ly: 32,
      good: 10
    }, {
      id: '002',
      showView: true,
      desc: '公平保险就是保险期望损失为0的保单，即保单的期望损失等于保险费，是基于概率理论、期望理论引申而来的。',
      imgUrls: ['../../images/b_1.jpg', '../../images/b_1.jpg', '../../images/b_1.jpg'],
      view: 105,
      ly: 32,
      good: 12
    }, {
      id: '003',
      showView: true,
      desc: '公平保险就是保险期望损失为0的保单，即保单的期望损失等于保险费，是基于概率理论、期望理论引申而来的。',
      imgUrls: ['../../images/b_1.jpg', '../../images/b_1.jpg', '../../images/b_1.jpg'],
      view: 105,
      ly: 32,
      good: 13
    }, {
      id: '004',
      showView: true,
      desc: '公平保险就是保险期望损失为0的保单，即保单的期望损失等于保险费，是基于概率理论、期望理论引申而来的。',
      imgUrls: ['../../images/b_1.jpg', '../../images/b_1.jpg', '../../images/b_1.jpg'],
      view: 105,
      ly: 32,
      good: 14
    }]
  },
  // 给点赞功能绑定点击事件，点击时切换图片
  // （一个用户点赞一次？后期更新）
  handleClick: function (e) {
    /*  that.setData({
       showView: (!that.data.showView)
     }); */
    //  点击实现点赞数加1
    var info_id = e.currentTarget.dataset.id; //返回触发事件的ID
    console.log(info_id);
    for (var i = 0; i < this.data.imgTxtList.length; i++) {
      if (this.data.imgTxtList[i].id == info_id) {
        this.setData({
            // 改变对象 i 节点的图片显示的值为true,当前的点赞数加一
            ["imgTxtList[" + i + "].showView"]: false,
            ["imgTxtList[" + i + "].good"]: parseInt(this.data.imgTxtList[i].good) + 1
          });
      }
    }
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