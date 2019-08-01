// pages/specialSale/classification/classification.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loadingHidden:false,
    userShow:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //取消加载动画
    const mThis=this
       setTimeout(function () {
         mThis.setData({
          loadingHidden: true
        });
      }, 2000);
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
  loadingTaps: function () {
    console.log('点击');
    this.setData({dataFieldA:false})
   
  },
  pageEventListener1: function (e) {
    console.log('触发自定义组件')
    e.detail // 自定义组件触发事件时提供的detail对象
  },

   
})