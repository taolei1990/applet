//index.js
var common = require('../../common/common.js')
//获取应用实例
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // thumb:"../../static/img/20160801192552_rYQdJ.thumb.700_0.jpeg",//店长头像
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
      { text: "特卖", id: "w0", name:'Promotion', icon:"shopfill"},
      { text: "动态", id: "w1", name: 'dynamic', icon: "discoverfill" },
      { text: "预约", id: "w2", name: 'subscribe', icon: "wefill" },
      { text: "优惠券", id: "w3", name: 'sponsor', icon: "sponsorfill" },
      { text: "联系我们", id: "w4", name: 'connectus', icon: "servicefill" },
      { text: "分类主页", id: "w5", name: 'classification', icon: "similar" }
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
      }],
    businessHours:'06:50-21:30',
    servicedelivery: [
      "Wi-Fi",
      "免费停车",
      "微信支付"],
    jieshao:"商户介绍"
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
   this.setData({
     businessHours:"07:00-21:30",
     servicedelivery: [
       "Wi-Fi",
       "免费停车",
       "微信支付"]
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
 //处理数据后关闭刷新
     wx.stopPullDownRefresh()
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
    common.tlNavigateTo(u,d)
  },
  /*首页菜单栏跳转*/
  tlMenuBar:function(e){
    const d = e.currentTarget.dataset.text;
    const u = "../specialSale/" + e.currentTarget.dataset.name + "/" + e.currentTarget.dataset.name + "?id=" + e.currentTarget.dataset.id + '&title=' + e.currentTarget.dataset.text;
   
    console.log(u)
    common.tlNavigateTo(u,d);

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
    common.tlNavigateTo(u, d);
  },

  imgyl:function(){
    /**图片预览 */
  wx.previewImage({
    current: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640', // 当前显示图片的http链接
    urls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ] // 需要预览的图片http链接列表
  })
}


})