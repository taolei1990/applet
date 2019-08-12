// pages/detailPage/detailPage.js
const app = getApp();
var common = require('../../common/common.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Amount: app.globalData.Amount,
    mold:"",
    count:1,
    bgorange:false,//按钮背景标识
    sumTotal: app.globalData.sumTotal,
    gtext:'',
    texts: ['图文详情', '商品评论'],
    TabCur: 0,
    scrollLeft: 0,
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
    cotList:[
      {
        id:'w1',
        name:"磊师傅" ,
        inputValue:'输入的内容1',
        imgUrls:"/static/img/20160801192552_rYQdJ.thumb.700_0.jpeg",
        time:'2019年8月2日',
        praise:true
      },
      {
        id: 'w2',
        name: "磊师傅",
        inputValue: '输入的内容2',
        imgUrls: "/static/img/20160801192552_rYQdJ.thumb.700_0.jpeg",
        time: '2019年8月2日',
        praise: false
      }
    ],
    checkbox: [{
      value: 0,
      name: '不辣',
      checked: false,
      hot: false,
    }, {
      value: 1,
      name: '微辣',
      checked: false,
      hot: false,
    }, {
      value: 2,
      name: '中辣',
      checked: false,
      hot: false,
    }, {
      value: 3,
      name: '特辣',
      checked: false,
      hot: false,
    }, {
      value: 4,
      name: '魔鬼辣',
      checked: false,
      hot: true,
    }, {
      value: 5,
      name: '变态辣',
      checked: false,
      hot: true,
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(option) { //获取上个页面的url带过来的值
    console.log(option.id)
this.setData({
  Amount: app.globalData.Amount
})
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
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '磊哥哥给你推荐',
      // path: '/page/user?id=123',
      imageUrl:'/static/img/20160801192552_rYQdJ.thumb.700_0.jpeg'
    }
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
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
  },
  //添加评论
  bindKeyfirm:function(e){
    const mThis=this
    const timethis = common.curentTime()//获取当前时间
    var myDate = new Date();
    var inputValue= e.detail.value
    var cotListarr =this.data.cotList
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              let userInfo = res.userInfo
              let nickName = userInfo.nickName
              let avatarUrl = userInfo.avatarUrl
              let puscotList = {
                name: nickName,
                inputValue: inputValue,
                imgUrls: avatarUrl,
                time: "刚刚",
                praise: false
              }
          
              cotListarr.unshift(puscotList)
    
              mThis.setData({
                cotList: cotListarr
              })
            }
          })
        }
      }
    })
  },
  //评论点赞
  tapPraise:function(e){
    let pr = this.data.cotList[e.currentTarget.dataset.index]
    console.log(pr.praise)
    if (pr.praise){
      pr.praise=false
      console.log(pr)
    }else{
      pr.praise = true
      console.log(pr)
    }
    this.setData({
        cotList: this.data.cotList
    })
  },
  /*加入购物车弹窗*/
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target,
      gtext:e.currentTarget.dataset.text,
      mold: e.currentTarget.dataset.tayp
    })
  },
  getPurchased:function(e){
    if (this.data.mold == 'addCar') {
      wx.showToast({
        title: '加入购物车',
        icon: 'success',
        duration: 2000
      })
     
    } if (this.data.mold == 'purchase') {
      console.log("立即购买")
    }
    this.setData({
      modalName: null,
      sumTotal: app.globalData.sumTotal
    })
   
  },
  hideModal(e) {
    this.setData({
       modalName: null,
      
    })
  },
  chooseCheckbox(e) {
    let items = this.data.checkbox;
    let values = e.currentTarget.dataset.value;
    for (let i = 0; i < items.length; ++i) {
      items[i].checked = false;
    }
    for (let i = 0; i < items.length; ++i) {
      if (items[i].value == values) {
        items[i].checked = !items[i].checked;
        break
      }
    }
    this.setData({
      checkbox: items,
      bgorange: true
    })
  },
  // 加入购物车
  ofNumberAdd: function (e) {
    let ofNumber = this.data.count + 1
    this.data.count = ofNumber
    getApp().globalData.sumTotal = this.data.count
    this.setData({
      count: this.data.count,
      bgorange:true,
      sumTotal: app.globalData.sumTotal
    })
    
  },

  // 移除购物车
  ofNumberRed: function (e) {
    let ofNumber = this.data.count - 1
    this.data.count = ofNumber
    getApp().globalData.sumTotal = this.data.count
    if (ofNumber<=0){
      this.setData({
        count: 0,
        bgorange: false,
        sumTotal: app.globalData.sumTotal
      })
    }else{
      this.setData({
        count: this.data.count
      })
    }
  
  },

  //输入时触发
  onBindBlur: function (e) {
    var re = Number(e.detail.value)
    isNaN(re) ? re = 0 : ""
    console.log(isNaN(re))
    this.data.list[e.currentTarget.dataset.mid].listData[e.currentTarget.dataset.index].ofNumber = re;
    this.setData({
      list: this.data.list
    })
  },
  switchHome(){
    wx.switchTab({
      url: '/pages/index/index'
    })
  },
  linkShoppingTrolley(){
    wx.switchTab({
      url: '/pages/theOrder/theOrder'
    })
  }

})