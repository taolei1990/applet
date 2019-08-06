// pages/theOrder/theOrder.js
const app = getApp()
var common = require('../../common/common.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
   sumTotal: app.globalData.sumTotal,
    sum:0,
    checked:false,
   cartOrder:[{
     id:"w1",
     price:12,
     name:"菜名1",
     count:1,
     checked:null
   },{
       id: "w2",
       price: 13,
       name: "菜名2",
       count:1,
       checked: null
     }, {
       id: "w3",
       price: 14,
       name: "菜名3",
       count: 1,
       checked: null
     }],
    cartPitch: {
      aggAmo: [],
      list: []
    }
  }, 


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  // 添加数量
  ofNumberAdd: function (e) {
    let ind = common.indexOf(e.currentTarget.dataset.price,this.data.cartOrder);
    let inds = common.indexOf(e.currentTarget.dataset.price,this.data.cartPitch.list);
    let ofNumber = this.data.cartOrder[ind].count+1;
    this.data.cartOrder[ind].count = ofNumber
  
    if (inds != -1){
    
      let c = this.data.cartPitch.list[inds].count
      this.data.cartPitch.list[inds].count = c+1
      let s=0
      for (let i = 0, len = this.data.cartPitch.list; i < len.length;i++){
        s += this.data.cartPitch.list[i].count * this.data.cartPitch.list[i].price
      }
      this.setData({
        sum: s
      })
}
    // this.data.cartOrder[inds].checked = false
    this.setData({
      cartOrder: this.data.cartOrder,
      cartPitch: this.data.cartPitch
    })
  
  },

  // 减少数量
  ofNumberRed: function (e) {
    const mThis = this
    let ind = common.indexOf(e.currentTarget.dataset.price, this.data.cartOrder);
    let inds = common.indexOf(e.currentTarget.dataset.price, this.data.cartPitch.list);
    let ofNumber = this.data.cartOrder[ind].count -1;
    this.data.cartOrder[ind].count = ofNumber

    if (ofNumber <= 0) {
      wx.showModal({
        title: '提示',
        content: '将要删除除此商品',
        success(res) {
          if (res.confirm) {
            mThis.data.cartOrder[ind].count = 0
            mThis.data.cartOrder.splice(ind, 1)
            mThis.setData({
              cartOrder: mThis.data.cartOrder,
            })
          } else if (res.cancel) {
          
            mThis.data.cartOrder[ind].count = 1
            mThis.data.cartPitch.list[inds].count =  1
            mThis.setData({
              cartOrder: mThis.data.cartOrder,
            })
          }
        }
      })
    
    } else{
      mThis.setData({
        cartOrder: mThis.data.cartOrder,
      })
    }
  
    if (inds != -1) {

      let c = this.data.cartPitch.list[inds].count
      this.data.cartPitch.list[inds].count = c - 1

      let s = 0
      for (let i = 0, len = this.data.cartPitch.list; i < len.length; i++) {
        s += this.data.cartPitch.list[i].count * this.data.cartPitch.list[i].price
      }
      this.setData({
        sum: s
      })
    }
  },
  /* 全选 */
  chooseCheckbox:function(e){
    let s=0
    if (e.currentTarget.dataset.checked) {
      this.data.cartOrder.forEach(one => {
        one.checked = false
      })
      this.data.checked=false
       s=0
    } else {
  
      this.data.cartOrder.forEach(one => {
        one.checked = true
        s += one.price * one.count
      })
      this.data.checked = true
     
    }
    this.setData({
      cartOrder: this.data.cartOrder,
      checked: this.data.checked,
      sum: s
    })

  },
  //判断单项选中
  checkboxChange:function(e){
    let s = 0;
    let inds = common.indexOf(e.currentTarget.dataset.id, this.data.cartPitch.list)
    let ind = common.indexOf(e.currentTarget.dataset.id, this.data.cartOrder)
    if (e.detail.value.length == 1){
     console.log("选中")
      this.data.cartPitch.list.push({
              id: e.currentTarget.dataset.id,
             count: e.currentTarget.dataset.count,
             price: e.currentTarget.dataset.price,
      })
      this.data.cartOrder[ind].checked=true
      this.setData({
        cartPitch: this.data.cartPitch,
        cartOrder: this.data.cartOrder
      })
    }else{
      
      // this.data.cartPitch.aggAmo.splice(ind, 1)
      console.log("没选中")
      this.data.cartPitch.list.splice(inds, 1)
      this.data.cartOrder[ind].checked = false
      this.setData({
        cartPitch: this.data.cartPitch,
        cartOrder: this.data.cartOrder
      })
    }
    for (let i = 0, len = this.data.cartPitch.list; i < len.length; i++) {
      s += this.data.cartPitch.list[i].count * this.data.cartPitch.list[i].price
    }
    this.setData({
      sum: s
    })
  }
  
})