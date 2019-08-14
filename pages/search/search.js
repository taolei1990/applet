// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    exist:'gray',
    searchList:[],
    dataSwitch:false,
    cplist:[{
      name:'菜A',
      price:15,
      id:"w1"
    }, {
        name: '菜B',
        price: 16,
        id: "w2"
      }]
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
       
    
      }
    })
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    /**获取缓存 */
    const mThis = this
    wx.getStorage({
      key: 'searchHistory',
      success(res) {
        mThis.setData({
          searchList: res.data
        })
        console.log(mThis.data.searchList.length)

      }
    })
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
    const mThis=this
    this.data.searchList.unshift(e.detail.value)
    if (this.data.searchList.length > 6){
      this.data.searchList.length=6
    }
      wx.setStorage({
        key: "searchHistory",
        data: this.data.searchList,
        success(){
          mThis.setData({
            searchList: mThis.data.searchList
          })
        }
      })
  },
  /**清除缓存 */
    tlEliminate:function(){
      wx.removeStorage({
        key: 'searchHistory',
      })
    
      this.setData({
        searchList:[]
      })
      console.log(this.data.searchList.length)
    },
    /**组件监听事件 */
  myEventListener:function(e){
    console.log("组件监听事件")
    console.log(e.detail)
  },
  myCart:function(e){

   let checkbox= [{
      value: 0,
      name: '不辣',
      checked: false,
      hot: false,
    }, {
      value: 1,
      name: '微辣',
      checked: false,
      hot: false,
    }]
    this.setData({
      dataSwitch:true,
      checkbox: checkbox,
       myId: e.currentTarget.dataset.id,
       myProperty: "myProperty",
    })
  }
})