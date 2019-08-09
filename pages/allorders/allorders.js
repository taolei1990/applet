// pages/allorders/allorders.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabCur: 0,
    fixedNav: true,//是否开启nav导条航悬浮顶部
    prompt: false,//是否开启没数据默认提示
    tabCurList: [{
      ind: 0,
      name: "全部",
      id: "w0",
      type: "qb"
    },{
      ind: 1,
      name: "未付款",
      id: "w1",
      type: "wfk"
    }, {
      ind: 2,
      name: "带取货",
      id: "w2",
      type: "dqh"
    }, {
      ind: 3,
      name: "已完成",
      id: "w3",
      type: "ywc"
    }, {
      ind: 4,
      name: "已关闭",
      id: "w4",
      type: "ygb"
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(option) {
    console.log(option.id) //获取上个页面的url带过来的值
    /** 
    const eventChannel = this.getOpenerEventChannel()
    eventChannel.emit('acceptDataFromOpenedPage', { data: '给上一个页面传送当前页面的数据1' });
    eventChannel.emit('someEvent', { data: '给上一个页面传送当前页面的数据2' });
    // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
    eventChannel.on('acceptDataFromOpenerPage', function (data) {
      console.log("data-4")
      console.log(data)
    })
    */
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

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
   * 页面相关事件处理函数--监听用户下拉距离
   */
  onPageScroll:function(e){

    // let query = wx.createSelectorQuery()
    // query.select('#nav-id').boundingClientRect((rect) => {
    //   console.log(rect.top)
    //   let top = rect.top
    //   if (top <45) {  //临界值，根据自己的需求来调整
    //     this.setData({
    //       fixedNav: true,    //是否固定导航栏
    //       showToTop: true  //是否回到临界值的状态
    //     })
    //   } 
    //    if (top==0){
    //     this.setData({
    //       fixedNav: false,
    //       showToTop: false
    //     })
    //   }
    // }).exec()

  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    console.log("到底了")
    // 下拉触底，先判断是否有请求正在进行中
    // 以及检查当前请求页数是不是小于数据总页数，如符合条件，则发送请求
    if (!this.loading && this.data.page < this.data.pages) {
      this.fetchArticleList(this.data.page + 1)
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  tabSelect(e) {
    let type = e.currentTarget.dataset.type
    let pr=false
    if (type=="qb"){
      pr=false
    } else if (type == "wfk"){
      pr = true
    } else if (type == "dqh") {
      pr = false
    } else if (type == "ywc") {
      pr = true
    } else if (type == "ygb") {
      pr = false
    }
    this.setData({
    tabCur: e.currentTarget.dataset.ind,
    prompt: pr
  })
  },
  /**请求订单数据*/
  getOrderForm:function(e){
    wx.request({
      url: 'test.php', //仅为示例，并非真实的接口地址
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
      },
      fail(res){
        console.log("失败")
      }
    })
  }
  ,
  /**长按删除 */
  tlLongpress:function(e){
    wx.showModal({
      title: '提示',
      cancelText:'取消',
      confirmText:"删除",
      content: '确认删除订单',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  }
})