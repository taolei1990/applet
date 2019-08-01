// pages/loadingHidden/loadingHidden.js

Component({

  behaviors: [],
 
  properties: {
    loadingHidden: { // 属性名
      type: Boolean, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: true, // 属性初始值（可选），如果未指定则会根据类型选择一个
      observer: '_propertyChange' // 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串, 如：'_propertyChange'
    },
  },
  data: {
    A: [{
      B: 'init data.A[0].B'
    }]
  }, // 私有数据，可用于模版渲染

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
    show: function () { 
      
    },
  },

  methods: {
    // loadingTap: function () {
    //   console.log("点击1")
    //   this.setData({
    //     loadingHidden: false
    //   });
    //   var that = this;
    //   setTimeout(function () {
    //     that.setData({
    //       loadingHidden: true
    //     });
    //     // that.update();
    //   }, 3000);
      // this.triggerEvent('showTab', res.data);
      // this.triggerEvent('customevent', {}) // 只会触发 pageEventListener2
      // this.triggerEvent('customevent', {}, { bubbles: true }) // 会依次触发 pageEventListener2 、 pageEventListener1
      // this.triggerEvent('customevent', {}, { bubbles: true, composed: true }) // 会依次触发 pageEventListener2 、 anotherEventListener 、 pageEventListener1
    // },
    // onMyButtonTap: function () {
    //   this.setData({
    //     // 更新属性和数据的方法与更新页面数据的方法类似
    //     myProperty: 'Test'
    //   })
    // },
    // _myPrivateMethod: function () {
    //   // 内部方法建议以下划线开头
    //   this.replaceDataOnPath(['A', 0, 'B'], 'myPrivateData') // 这里将 data.A[0].B 设为 'myPrivateData'
    //   this.applyDataUpdates()
    // },
    _propertyChange: function (newVal, oldVal) {

    },
  
  }
})