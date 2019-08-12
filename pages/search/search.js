// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    exist:'gray',
    searchList:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options.id)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    /**获取缓存 */
    const mThis=this
    wx.getStorage({
      key: 'searchHistory',
      success(res) {
        mThis.setData({
          searchList: res.data
        })
        console.log(mThis.data.searchList)
      }
    })
    
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
  bindInput: function(e) {
    let value = e.detail.value
    if (value){
      this.setData({
        exist: 'olive'
      })
    }else{
      this.setData({
        exist: 'gray'
      })
  
    
    }
  },
  /**输入框失去焦点是触发 */
  bindBlur: function(e) {
    let value = e.detail.value
    console.log(value)
  },
  /**点击键盘完成事件 */
  bindConfirm: function (e){
    /** 设置缓存*/
    this.data.searchList.length = 6
    this.data.searchList.unshift(e.detail.value)
      wx.setStorage({
        key: "searchHistory",
        data: this.data.searchList
      })


  }

})