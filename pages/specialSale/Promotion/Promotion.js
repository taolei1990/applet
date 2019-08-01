// pages/specialSale/Promotion/Promotion.js
var common = require('../../../common/common.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active:1,
    condition:true,
    sort: true,//do'up'
    theSorting:[{
      text:'综合',
      indexs:'1',
      id:'c1'
    }, {
        text: '最热',
        indexs: '2',
        id:'c2'
      }, {
        text: '新品',
        indexs: '3',
        id:'c3'
      }, {
        text: '价格',
        indexs: '4',
        id:'c4',
        rank:true,//do
      }],
    recommendGreens: [{
      id: 'w1',
      productUrl: '/static/img/20190730142546.png',
      productName: '大闸蟹',
      productCurrent: '12',
      productOriginal: '30',
      productPreview: '999',
      productPraise: '998',
      productComment: '99+',
      productDays: "1小时前"
    }, {
      id: 'w2',
      productUrl: '/static/img/20190730142546.png',
      productName: '大闸蟹',
      productCurrent: '12',
      productOriginal: '30',
      productPreview: '999',
      productPraise: '998',
      productComment: '99+',
      productDays: "156天前"
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function (option) {
    this.setData({ loadingHidden: false });//页面加载动画
    console.log(option.id)//获取上个页面的url带过来的值
       wx.setNavigationBarTitle({
         title: option.title
      })
    // const eventChannel = this.getOpenerEventChannel()
    // eventChannel.emit('acceptDataFromOpenedPage', { data: '给上一个页面传送当前页面的数据1' });
    // eventChannel.emit('someEvent', { data: '给上一个页面传送当前页面的数据2' });
    // // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
    // eventChannel.on('acceptDataFromOpenerPage', function (data) {
    //   wx.setNavigationBarTitle({
    //     title: data.data
    //   })
    // })


  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //取消页面加载动画
    const mThis = this
    setTimeout(function () {
      mThis.setData({
        loadingHidden: true,
        condition: false,
      });
    }, 1000);
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
  tonActive:function(e){
  
    this.setData({
      active: e.currentTarget.dataset.num
    });
    if (e.currentTarget.dataset.rank == true){
      this.data.sort == true ? this.sortDo() : this.sortUp()
    }else{
      this.setData({
        sort: true
      });
    }
      // this.getSpecialApi()//请求数据
  },
  sortDo:function(){
    this.setData({ sort: 'do' }) 
  },
  sortUp: function () {
    this.setData({ sort: 'up' })
  },
  //调用api
  getSpecialApi:function(e){
    wx.request({
      url: 'test.php', //仅为示例，并非真实的接口地址
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {//成功返回参数
        console.log(res.data);
        console.log("res.data")
      },
      fail(res) {//失败返回参数
        console.log(res.errMsg)
      },
      complete(res) {//都要执行
        console.log("都要执行")
      }
    })
  },
  /*打开购买详情页*/
  productShopNow: function (e) {
    const u = "../../detailPage/detailPage?id=" + e.currentTarget.dataset.id;
    const d = '菜单栏携带参数';
    console.log(u)
    common.tlNavigateTo(u, d);
  },
})