// components/popup/popup.js
const app = getApp();
Component({
  options: {
    styleIsolation: 'apply-shared'
  },
  behaviors: [],

  // 属性定义（详情参见下文）
  properties: {
    dataSwitch:  Boolean,
    myProperty: Object, // 简化的定义方式
    checkbox:Array,
    myId:String
  },
  data: {
    count: 1,
    myId:'MR',
    gtext:'加入购物车',
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
  }, // 私有数据，可用于模板渲染

  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () { },
    moved: function () { },
    detached: function () { },
  },

  // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
  attached: function () { }, // 此处attached的声明会被lifetimes字段中的声明覆盖
  ready: function () { },

  pageLifetimes: {
    // 组件所在页面的生命周期函数
    show: function () { },
    hide: function () { },
    resize: function () { },
  },

  methods: {
    onMyButtonTap: function () {
      this.setData({
        // 更新属性和数据的方法与更新页面数据的方法类似
      })
    },
    // 内部方法建议以下划线开头
    _myPrivateMethod: function () {
      // 这里将 data.A[0].B 设为 'myPrivateData'
      this.setData({
        'A[0].B': 'myPrivateData'
      })
    },
    _propertyChange: function (newVal, oldVal) {

    },

    /**选择购买 */
    onPurchased: function (e) {
    
      var myEventDetail = {data:'detail对象，提供给事件监听函数'} // detail对象，提供给事件监听函数
      var myEventOption = {} // 触发事件的选项
      this.triggerEvent('myevent', myEventDetail, myEventOption)
      this.triggerEvent('customevent', myEventDetail, { bubbles: true, composed: true }) 

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
        dataSwitch: false,
        sumTotal: app.globalData.sumTotal
      })

    },
    hideModal(e) {
      this.setData({
        dataSwitch: false,
      })
    },
    /**选择口味 */
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
        bgorange: true,
        sumTotal: app.globalData.sumTotal
      })
    },

    // 移除购物车
    ofNumberRed: function (e) {
      let ofNumber = this.data.count - 1
      this.data.count = ofNumber
      getApp().globalData.sumTotal = this.data.count
      if (ofNumber <= 0) {
        this.setData({
          count: 0,
          bgorange: false,
          sumTotal: app.globalData.sumTotal
        })
      } else {
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
    }
  }

})