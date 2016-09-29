// wx.getUserInfo({
//   success: function(res) {
//     var userInfo = res.userInfo
//     var nickName = userInfo.nickName
//     var avatarUrl = userInfo.avatarUrl
//     var gender = userInfo.gender //性别 0：未知、1：男、2：女 
//     var province = userInfo.province
//     var city = userInfo.city
//     var country = userInfo.country
//   }
// })
console.log(1)
var app = getApp();
Page({
    data:{
        userInfo:[]
    },
    onLoad:function(){
        var that = this;
        app.getUserInfo(function(userInfo){
            that.setData({
                userInfo:userInfo
            })
        })
    },
    onReady:function(){
        console.log('ready:'+"ready")
        console.log(this.data.userInfo)
    }
})
// Page({
//   data: {
//     motto: 'Hello World',
//     userInfo: {}
//   },
//   //事件处理函数
//   bindViewTap: function() {
//     wx.navigateTo({
//       url: '../logs/logs'
//     })
//   },
//   onLoad: function () {
//     console.log('onLoad')
//     var that = this
//     //调用应用实例的方法获取全局数据
//     app.getUserInfo(function(userInfo){
//       //更新数据
//       that.setData({
//         userInfo:userInfo
//       })
//     })
//   }
// })