// pages/detailPage/detailPage.js
var common = require('../../common/common.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    animation: [],
    imgUrls: [
      '../../static/img/500465289_wx.jpg',
      '../../static/img/500487848_wx.jpg',
      '../../static/img/500616301_wx.jpg'
    ],
    current: 0,
    dishName: '菜名菜名菜名菜',
    present: "10",
    ruling: '15',
    freight: "10",
    browse: '999+',
    vipcard: "会员卡",
    recommend: "介绍介绍介绍介绍介绍",
    counting: 5,
    imgName: [
      { id: "w1", url: '../../static/img/20160801192552_rYQdJ.thumb.700_0.jpeg'},
      { id: "w2", url: '../../static/img/20160801192552_rYQdJ.thumb.700_0.jpeg'}
    ],
    praise: false,//点赞标识
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(option) { //获取上个页面的url带过来的值
    console.log(option.id)

    // const eventChannel = this.getOpenerEventChannel()
    // eventChannel.emit('acceptDataFromOpenedPage', {
    //   data: '给上一个页面传送当前页面的数据1'
    // });
    // eventChannel.emit('someEvent', {
    //   data: '给上一个页面传送当前页面的数据2'
    // });
    // // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
    // eventChannel.on('acceptDataFromOpenerPage', function(data) {
    //     console.log("data-4")
    //     console.log(data)

    //   }),
      // 查看是否授权
      wx.getSetting({
        success(res) {
          if (res.authSetting['scope.userInfo']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称
            wx.getUserInfo({
              success: function(res) {
                console.log(res.userInfo)
              }
            })
          }
        }
      })
  },
  bindGetUserInfo(e) {
    console.log(e.detail.userInfo);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    this.animation = wx.createAnimation()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  displayNumber: function(e) {
    this.setData({
      current: e.detail.current
    })
  },

  tlLikenumInt: function(e) {
    const mThis=this
    console.log(e.currentTarget.dataset.praise)
    let x = 1;
    if (e.currentTarget.dataset.praise) {
       //取消点赞
      let mid = mThis.data.imgName[mThis.data.imgName.length-1].id
    
      console.log("返回" + common.indexOf(mid, mThis.data.imgName))
      mThis.data.imgName.splice(common.indexOf(mid, mThis.data.imgName),1)//根据id在数组的索引来删除头像
      
      console.log(mThis.data.imgName)
      mThis.setData({
        praise: false,
        imgName: mThis.data.imgName
      })
    } else {
      //点赞
      mThis.setData({
        praise: true
      })
      wx.getUserInfo({
        success: function (res) {
          let userInfo = res.userInfo
          let avatarUrl = userInfo.avatarUrl
          let avatarId = "taolei_1"//用户id
          let dxs = { id: avatarId, url: avatarUrl }
          mThis.data.imgName.push(dxs)
          console.log(mThis.data.imgName)
          mThis.setData({ imgName: mThis.data.imgName})
        }
      })
    }
    e.currentTarget.dataset.praise == true ? x = 1 : x = 1.5
    this.animation.scale(x).step()
    this.setData({
        animation: this.animation.export()
      })
   
  },

})