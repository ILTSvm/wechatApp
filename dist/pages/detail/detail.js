Page({
  data: {
    id: 0,
    title:"123",
    toastHidden:true
  },
  goods:{},
  swiper: {
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 3000,
  },
  onLoad: function (params) {
    this.setData({
      id: params.id
    });
  },
  onReady: function () {
    wx.setNavigationBarTitle({
      title: '商品详情'
    });
    console.log("ready");
 
    
    var that = this;
	   console.log(that.data.id);
    wx.request({
      url: 'https://wlwywlqk.cn/goods/getData?_id='+that.data.id,
      header: {
          'Content-Type': 'application/json'
      },
      success: function(res) {
	      console.log(res.data);
	      that.setData({
	        goods:res.data,
	        hidden:true
	      });
     	},
      fail: function (error) {
        console.log(error);
      }
    });
  },
  onShow: function() {
    console.log(2);
  },
  onHide: function() {
    console.log(3);
  },
  onUnload: function() {
    console.log(4);
  },
  toastChange:function(){
     var that = this;
     that.setData({
	      toastHidden:false
	   });
  },
  toast1Change:function(){
     var that = this;
     that.setData({
	      toastHidden:true
	   });
  }
});