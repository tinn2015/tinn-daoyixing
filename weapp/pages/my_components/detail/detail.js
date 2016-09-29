Page({
    data:{
        products:[]
    },
    onLoad:function(){
    	var value = wx.getStorageSync('choose_on')
        this.setData({
            products:value
        })
    }
})