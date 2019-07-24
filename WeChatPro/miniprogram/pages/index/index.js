//index.js
const app = getApp()

Page({
  data: {
    imgList:[
      { url: '../../images/ban-1.png' },
      {url: '../../images/ban-2.png'}
    ],
    iconList: [{
      id: '001',
        url: '../../images/v1.png',
        txt: '车险投保',
        src: 'toubao/toubao'
      },
      {
      id: '002',
        url: '../../images/v2.png',
        txt: '热销产品',
        src: 'hots/hots'
      },
      {
      id: '003',
        url: '../../images/v3.png', 
        txt: '续保提醒',
        src: 'tips/tips'
      },
      {
      id: '004',
        url: '../../images/v4.png',
        txt: '特约网点',
        src: 'wangdian/wangdian'
      }
    ],
    // 轮播组件设置
    indicatorDots: true,
      autoplay: false,
      interval: 5000,
      duration: 1000,
      indicatorColor: '#fff',
      indicatorActiveColor: '#009b62',
  },
// 跳转事件绑定
navToPage: function (e) {
  var info_src = e.currentTarget.dataset.src; //返回触发事件的ID
  // 调用微信的方法
  wx.navigateTo({
    url: info_src
  });
},
  onLoad: function() {
    if (!wx.cloud) {
      wx.redirectTo({
        url: '../chooseLib/chooseLib',
      });
      return;
    }

    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              this.setData({
                avatarUrl: res.userInfo.avatarUrl,
                userInfo: res.userInfo
              })
            }
          })
        }
      }
    })
  },

  onGetUserInfo: function(e) {
    if (!this.logged && e.detail.userInfo) {
      this.setData({
        logged: true,
        avatarUrl: e.detail.userInfo.avatarUrl,
        userInfo: e.detail.userInfo
      })
    }
  },

  onGetOpenid: function() {
    // 调用云函数
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        console.log('[云函数] [login] user openid: ', res.result.openid)
        app.globalData.openid = res.result.openid
        wx.navigateTo({
          url: '../userConsole/userConsole',
        })
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
        wx.navigateTo({
          url: '../deployFunctions/deployFunctions',
        })
      }
    })
  },

  // 上传图片
  doUpload: function () {
    // 选择图片
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {

        wx.showLoading({
          title: '上传中',
        })

        const filePath = res.tempFilePaths[0]
        
        // 上传图片
        const cloudPath = 'my-image' + filePath.match(/\.[^.]+?$/)[0]
        wx.cloud.uploadFile({
          cloudPath,
          filePath,
          success: res => {
            console.log('[上传文件] 成功：', res)

            app.globalData.fileID = res.fileID
            app.globalData.cloudPath = cloudPath
            app.globalData.imagePath = filePath
            
            wx.navigateTo({
              url: '../storageConsole/storageConsole'
            })
          },
          fail: e => {
            console.error('[上传文件] 失败：', e)
            wx.showToast({
              icon: 'none',
              title: '上传失败',
            })
          },
          complete: () => {
            wx.hideLoading()
          }
        })

      },
      fail: e => {
        console.error(e)
      }
    })
  },

})
