//index.js
//获取应用实例
Page({
  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [{
        src: '../../static/img/500465289_wx.jpg',
        id:"0"
      },{
        src: '../../static/img/500487848_wx.jpg',
         id: "1"
      },
      {
        src: '../../static/img/500616301_wx.jpg',
        id: "2"
      },
    ],
    menuBar:[
      { text: "特卖", id:"w0", icon:"icon-dkw_wode"},
      { text: "动态", id: "w1", icon: "icon-yingyuanxinxicanyin" },
      { text: "预约", id: "w2", icon: "icon-gouwuche-xianxing" },
      { text: "优惠券", id: "w3", icon: "icon-icon_canyin" },
      { text: "联系我们", id:"w4", icon: "icon-dkw_wode" },
      { text: "分类主页", id:"w5", icon: "icon-dkw_wode" }
    ],
    recommendGreens:[{
     id:'w1',
      productUrl:'/static/img/20190730142546.png',
      productName:'大闸蟹',
      productCurrent:'12',
      productOriginal: '30',
      productPreview: '999',
      productPraise: '998',
      productComment: '99+',
    }, {
        id: 'w2',
        productUrl: '/static/img/20190730142546.png',
        productName: '大闸蟹',
        productCurrent: '12',
        productOriginal: '30',
        productPreview: '999',
        productPraise: '998',
        productComment: '99+',
      }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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
    // wx.startPullDownRefresh({
    //   success:function(){
    //     console.log('成功')
       
    //   },
    //   fail:function(){
    //     console.log('失败')
    //   },
    //   complete: function () {
    //     console.log('都会执行');
       
    //   }
    // }),
    //  wx.stopPullDownRefresh()
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
  /*banner 跳转*/ 
  bannerLink: function(e) {
    const u = '../bannerActivity/bannerActivity?id=' + e.currentTarget.dataset.id;
    const d ='banner携带参数';
    this.tlNavigateTo(u,d)
  },
  /*首页菜单栏跳转*/
  tlMenuBar:function(e){
    const u = "../specialSale/specialSale?id=" + e.currentTarget.dataset.id;
    const d = '菜单栏携带参数';
    this.tlNavigateTo(u, d);
    console.log(u)
  },

 
  /*打电话 */
  ringUp:function(){
    wx.makePhoneCall({
      phoneNumber: '10010' //仅为示例，并非真实的电话号码
    }),
console.log("打电话")
  },
  /*打开客服会话*/
  handleContact(e) {
    console.log(e.path)
    console.log(e.query)
  },
   /*打开购买详情页*/
  productShopNow:function(e){
    const u = "../detailPage/detailPage?id=" + e.currentTarget.dataset.id;
    const d = '菜单栏携带参数';
    console.log(u)
    this.tlNavigateTo(u, d);
  },



  /*调用页面跳转*/
  tlNavigateTo: function (u, d) {
    console.log('打开' + u)
    wx.navigateTo({
      url: u,
      events: {
        // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
        acceptDataFromOpenedPage: function (data) {
          console.log("获取被打开页面传送到当前页面的数据1")
          console.log(data)
        },
        someEvent: function (data) {
          console.log("获取被打开页面传送到当前页面的数据2")
          console.log(data)
        }
      },
      success: function (res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit('acceptDataFromOpenerPage', { data: '向被打开页面传送数据' + d })
      }
    })
  }
})