// pages/my/my.js
//index.js
//获取应用实例
var common = require('../../common/common.js')
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    CustomBar: app.globalData.CustomBar,
    gridBorder:true,
    iconList: [{
      icon: 'deliver_fill',
      color: 'red',
      badge: 120,
      name: '未付款'
    }, {
      icon: 'goodsnewfill',
      color: 'orange',
      badge: 2,
      name: '待取货'
    }, {
      icon: 'squarecheckfill',
      color: 'yellow',
      badge: 4,
      name: '已完成'
    }, {
        icon: 'roundclosefill',
      color: 'olive',
      badge: 3,
      name: '已关闭'
      }],
    gridCol: 4,
  },

  onLoad: function () {
    wx.getSetting({
      success(res) {
       
        console.log(res.authSetting)
        // res.authSetting = {
        //   "scope.userInfo": true,
        //   "scope.userLocation": true
        // }
      }
    })
  
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
     
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  
    console.log(app.globalData.userInfo)
  },
  getUserInfo: function (e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
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

  },
  CopyLink:function(e){
    const url = '../e-signature/e-signature';
    const data = '携带参数';
    common.tlNavigateTo(url, data)
  },
  allOrders:function(e){
    console.log(e.currentTarget.dataset.praise)
    const mid = e.currentTarget.dataset.id
    const url = '../allorders/allorders?id='+mid;
    const data = '携带参数';
    common.tlNavigateTo(url, data)
  }
})