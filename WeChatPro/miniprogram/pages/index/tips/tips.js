// miniprogram/pages/index/tips/tips.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checked: false,
    sum: 0,
    show: false,
    // 投保数据
    infoList: [{
      id: '001',
      name: '王二',
      tel: '13688888888',
      car: '宝马X5',
      carNum: '浙B88888',
      date: '2019-04-10',
      pirce: '8888元',
      time: '2019-04-11 ~ 2020-04-10',
      day: '285',
      checked: false
    }, {
      id: '002',
      name: '张三',
      tel: '13688888888',
      car: '宝马X5',
      carNum: '浙B88888',
      date: '2019-04-10',
      pirce: '8888元',
      time: '2019-04-11 ~ 2020-04-10',
      day: '285',
      checked: false
    }, {
      id: '003',
      name: '李四',
      tel: '13688888888',
      car: '宝马X5',
      carNum: '浙B88888',
      date: '2019-04-10',
      pirce: '8888元',
      time: '2019-04-11 ~ 2020-04-10',
      day: '285',
      checked: false
    }],
    date: '请选择投保日期',
    date1: '请选择生效日期',
    date2: '请选择到期日期'
  },
  // 全选
  seleceAll: function () {
    // 点击改变自身的选择状态
    var curren = this.data.checked;
    if (!curren) {
      // 如果全选未选，点击全选执行
      this.setData({
        checked: true
      });
      for (let i = 0; i < this.data.infoList.length; i++) {
        this.setData({
          ["infoList[" + i + "].checked"]: true
        });
      }
    } else {
      this.setData({
        checked: false
      });
      for (let i = 0; i < this.data.infoList.length; i++) {
        this.setData({
          ["infoList[" + i + "].checked"]: false
        });
      }
    }
  },
  // 子元素选中状态改变时判断是否全选
  // 下例将点击事件绑定到了item上，若绑定在con上，target触发的元素获取设置的checked属性值时只能将data-checked绑定在checkbox元素上才可捕捉
  selectSubChange: function (e) {
    // console.log('click');
    var sum = this.data.sum;
    var length = this.data.infoList.length;
    // 选中状态改变时更新后台数据
    // currentTarget 不冒泡， target可冒泡
    var info_id = e.currentTarget.dataset.id;
    var lastState = e.currentTarget.dataset.checked;

    // 将选中的子元素个数与总数对比，等于总数全选按钮选中，不等于取消全选样式
    for (let i = 0; i < length; i++) {
      if (this.data.infoList[i].id == info_id) {
        this.setData({
          ["infoList[" + i + "].checked"]: !lastState
        });
      }
    }
    // 布尔值不加引号
    for (let index = 0; index < length; index++) {
      if (this.data.infoList[index].checked == true) {
        sum = sum + 1;
        // console.log(sum);
      }

    }
    // 循环完判断
    if (sum == length) {
      this.setData({
        checked: true
      });
    } else {
      this.setData({
        checked: false
      });
    }
  },
  // 日期选择
   bindDateChange: function (e) {
     console.log('picker发送选择改变，携带值为', e.detail.value);
     this.setData({
       date: e.detail.value
     });
   },
   bindDateChange1: function (e) {
     console.log('picker发送选择改变，携带值为', e.detail.value);
     this.setData({
       date1: e.detail.value
     });
   },
   bindDateChange2: function (e) {
     console.log('picker发送选择改变，携带值为', e.detail.value);
     this.setData({
       date2: e.detail.value
     });
   },
   showDate: function () {
     var state = ! this.data.show;
     this.setData({
       show: state
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