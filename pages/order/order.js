const app = getApp()
Page({
  data: {

    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    TabCur: 0,
    MainCur: 0,
    VerticalNavTop: 0,
    list: [],
    load: true
  },
  onLoad() {
    wx.showLoading({
      title: '加载中...',
      mask: true
    });
    let list = [{}];
    let listData = [{}];
    for (let i = 0; i < 26; i++) {
      list[i] = {};
      list[i].name = String.fromCharCode(65 + i);
      list[i].id = i;
      list[i].listData =[];
      for(let j=0;j<3;j++){
        list[i].listData.push({
          id: String.fromCharCode(65 + i) + "-" + j,
          theNumber: 999,
          ofNumber: 0,
          price: i + j,
          prePrice: i + j+2,
        })
      }
    };
    this.setData({
      list: list,
      listCur: list[0]
    });
    console.log("dao")
    console.log(this.data.list[6].listData)
  },
  onReady() {
    wx.hideLoading()
  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      MainCur: e.currentTarget.dataset.id,
      VerticalNavTop: (e.currentTarget.dataset.id - 1) * 50
    })
  },
  VerticalMain(e) {
    let that = this;
    let list = this.data.list;
    let tabHeight = 0;
    if (this.data.load) {
      for (let i = 0; i < list.length; i++) {
        let view = wx.createSelectorQuery().select("#main-" + list[i].id);
        view.fields({
          size: true
        }, data => {
          list[i].top = tabHeight;
          tabHeight = tabHeight + data.height;
          list[i].bottom = tabHeight;
        }).exec();
      }
      that.setData({
        load: false,
        list: list
      })
    }
    let scrollTop = e.detail.scrollTop + 20;
    for (let i = 0; i < list.length; i++) {
      if (scrollTop > list[i].top && scrollTop < list[i].bottom) {
        that.setData({
          VerticalNavTop: (list[i].id - 1) * 50,
          TabCur: list[i].id
        })
        return false
      }
    }
  }
,
// 加入购物车
  ofNumberAdd:function(e){
 
    let ofNumber = this.data.list[e.currentTarget.dataset.mid].listData[e.currentTarget.dataset.index].ofNumber + 1
    this.data.list[e.currentTarget.dataset.mid].listData[e.currentTarget.dataset.index].ofNumber = ofNumber
    this.setData({
    list: this.data.list
  })
  },

  // 移除购物车
  ofNumberRed:function(e){
    let ofNumber = this.data.list[e.currentTarget.dataset.mid].listData[e.currentTarget.dataset.index].ofNumber - 1
    this.data.list[e.currentTarget.dataset.mid].listData[e.currentTarget.dataset.index].ofNumber = ofNumber
    this.setData({
      list: this.data.list
    })
  },
  //输入时触发
  onBindBlur:function(e){
    var re = Number(e.detail.value)
    isNaN(re) ? re = 0 : ""
    console.log(isNaN(re))
    this.data.list[e.currentTarget.dataset.mid].listData[e.currentTarget.dataset.index].ofNumber = re;
     this.setData({
       list: this.data.list
     })
   }
})