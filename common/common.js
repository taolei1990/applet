/*调用页面跳转*/
function tlNavigateTo(u, d) {
  console.log('打开' + u)
  console.log('得到' + d)
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
      res.eventChannel.emit('acceptDataFromOpenerPage', { data: d })
    }
  })
}
//根据值找元素在数组中的位置索引
function indexOf(val,arr) {
   for (var i = 0; i < arr.length; i++) {
      if (arr[i].id == val) { return i; }
   
   }
   return -1;
}
module.exports = {
  tlNavigateTo: tlNavigateTo,
  indexOf:indexOf
}