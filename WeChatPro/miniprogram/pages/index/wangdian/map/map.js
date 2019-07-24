// miniprogram/pages/index/wangdian/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lat: '',
    lon: '',
    // 店家地址 该处坐标点用腾讯地图取坐标
    latShop: 34.666605,
    lonShop: 112.421421,
    // 标注点
    markers: [{
      iconPath: "../../../../images/nowlocal.png",
      id: 0,
      latitude: 34.666605,
      longitude: 112.421421,
      width: 30,
      height: 30
    }],
    /*    polyline: [{
         points: [{
           longitude: 113.3245211,
           latitude: 23.10229
         }, {
           longitude: 113.324520,
           latitude: 23.21229
         }],
         color: "#FF0000DD",
         width: 2,
         dottedLine: true
       }], */
    controls: [{
      id: 1,
      iconPath: '../../../../images/local.png',
      position: {
        left: 0,
        top: 500,
        width: 30,
        height: 30
      },
      clickable: true
    }]
  },
  /*   regionchange(e) {
      console.log(e.type);
    },
    markertap(e) {
      console.log(e.markerId);
    },
    controltap(e) {
      console.log(e.controlId);
    }, */
  // 点击控件移动到当前位置
  controltap: function () {
    var that = this;
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        that.setData({
          lat: res.latitude,
          lon: res.longitude
        });
        // 移动到当前定位点
        that.moveTolocation();
      }
    });
  },
  moveTolocation: function () {
    /*  //mapId 就是你在 map 标签中定义的 id
     var mapCtx = wx.createMapContext(mapId); */
    this.mapCtx.moveToLocation();
  },
  // 导航
  goToHere: function (res) {
    let markers = res.currentTarget.dataset.markers; //将数据绑定在data上，点击获取元素的标注对象信息,返回一个数组，若有多个标注还要绑定ID，根据ID循环匹配点击为哪个标注
    // res.markerId; // 获取点击的markers的id，这个不需要绑定data
    console.log(markers[0]);
    let lat = markers[0].latitude;
    let lon = markers[0].longitude;
    wx.openLocation({ //​使用微信内置地图查看位置。
      latitude: lat, //要去的纬度-地址
      longitude: lon, //要去的经度-地址
      name: "王城公园",
      address: '王城公园'
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      lat: options.lat,
      lon: options.lon
    });
    console.log(this.data.lat);
    console.log(this.data.lon);
    /*  wx.openLocation({
       latitude: this.data.latShop,
       longitude: this.data.lonShop,
       name: "堇山中路店",
       scale: 20
     }); */
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.mapCtx = wx.createMapContext('myMap');
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