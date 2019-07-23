// miniprogram/pages/poster/poster.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgList: [{
      id: '001',
      imgUrl: '../../../images/hb-1.png',
      actView: false

    }, {
      id: '002',
      imgUrl: '../../../images/hb-2.png',
      actView: false
    }, {
      id: '003',
      imgUrl: '../../../images/hb-3.png',
      actView: false
    }, {
      id: '004',
      imgUrl: '../../../images/hb-4.png',
      actView: false
    }],
    imgbUrl: '../../../images/hb-1b.png'
  },
  handleChoose: function (e) {
    /*  this.actView = !(this.actView);
     this.setData({
       actView: this.actView 
     }); */
    var info_id = e.currentTarget.dataset.id; //返回触发事件的ID
    for (var i = 0; i < this.data.imgList.length; i++) {
      if (this.data.imgList[i].id == info_id) {
        this.setData({
          ["imgList[" + i + "].actView"]: true
        });
      } else {
        this.setData({
          ["imgList[" + i + "].actView"]: false
        });
      }
    }
  },
  // 保存图片至本地

  saveImgToLocal: function (e) {
    let that = this;
    let imgSrc = 'images/hb-1b.png';
    console.log(imgSrc);
    wx.downloadFile({
      // 临时路径？网络路径不行，未添加到域名管理中
      url: 'http://tmp/wxd0a92048a25d1cff.o6zAJs6nJ2gf108nK9UN-7wLwXSs.ChBhTTar7Bp3a5c0aceaaedcfebbec7335eb851a489b.png',
      success: function (res) {
        console.log(res);
        //图片保存到本地
         wx.saveImageToPhotosAlbum({
           filePath: res.tempFilePath,
           success: function (data) {
             wx.showToast({
               title: '保存成功',
               icon: 'success',
               duration: 2000
             })
           },
         })
      }
    });
  },
  chooseImg: function () {
    wx.chooseImage({
      count: 9,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths;
        console.log(tempFilePaths);
      }
    })
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