Page({
    data: {
    images:[
      '../../../images/swiper/swiper1.jpg',
      '../../../images/swiper/swiper2.jpg',
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,

    navs:[
      {
        image:"../../../images/nav/index.png",
        text:"首页",
        nav:"跳转到首页"
      },
      {
        image:"../../../images/nav/product.png",
        text:"商品",
        nav:"跳转到商品页"
      },
      {
        image:"../../../images/nav/zixun.png",
        text:"资讯",
        nav:"跳转到资讯页"
      },
      {
        image:"../../../images/nav/user.png",
        text:"用户",
        nav:"跳转到用户页"
      }
    ],

    products:[
      {
        id:1001,
        image:"../../../images/products/c1.jpg",
        price:2999,
        info:'这是宝马'
      },
      {
        id:1002,
        image:"../../../images/products/c2.jpg",
        price:2888,
        info:'这是福特'
      },
      {
        id:1003,
        image:"../../../images/products/c3.jpg",
        price:2777,
        info:'这是奥迪'
      },{
        id:1004,
        image:"../../../images/products/c4.jpg",
        price:2666,
        info:'这是自行车'
      }
    ]
  },
  // changeIndicatorDots: function(e) {
  //   this.setData({
  //     indicatorDots: !this.data.indicatorDots
  //   })
  // },
  // changeAutoplay: function(e) {
  //   this.setData({
  //     autoplay: !this.data.autoplay
  //   })
  // },
  // intervalChange: function(e) {
  //   this.setData({
  //     interval: e.detail.value
  //   })
  // },
  // durationChange: function(e) {
  //   this.setData({
  //     duration: e.detail.value
  //   })
  // }
    swiperChange:function(e){
      console.log(e.detail.current)
    },
    navTo:function(event){
      console.log(event.currentTarget.dataset.navto);
    },
    goto:function(event){
      console.log('id:'+event.currentTarget.dataset.id)
      var id = event.currentTarget.dataset.id;
      var obj = this.data.products;
      var data = [];
      for(let i in obj){
          if(obj[i].id == id){
              data.push(obj[i])
          }
      }
      wx.setStorage({
        key:"choose_on",
        data:data
      })
      wx.navigateTo({
        url:"../detail/detail"
      })
    }
    
});

