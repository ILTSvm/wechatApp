Page({
  data: {
    current: 0,
    hidden:false,
    hasRefesh:false,
    pageindex:1,
    banner1:[
      "/images/banner1.jpg",
      "/images/banner2.jpg",
      "/images/banner3.jpg",
      "/images/banner4.jpg",
      "/images/banner5.jpg",
      "/images/banner6.jpg",
      "/images/banner7.jpg",
      "/images/banner8.jpg"
    ],
    banner2:[
      "/images/banner2_1.jpg",
      "/images/banner2_2.jpg",
    ],
    img:[
      "/images/img1.jpg",
      "/images/img2.jpg",
    ],
    navimg:[
	    {
	    	src:"/images/nav1.png",
	    	text:"新品到著"
	    },
	    {
	    	src:"/images/nav2.png",
	    	text:"潮流优选"
	    },
	    {
	    	src:"/images/nav3.png",
	    	text:"新品节"
	    },
	    {
	    	src:"/images/nav4.png",
	    	text:"明星原创"
	    },
	    {
	    	src:"/images/nav5.png",
	    	text:"全部分类"
	    },
	    {
	    	src:"/images/nav6.png",
	    	text:"人气搭配"
	    },
	    {
	    	src:"/images/nav7.png",
	    	text:"领券中心"
	    },
	    {
	    	src:"/images/nav8.png",
	    	text:"全球购"
	    },
	    {
	    	src:"/images/nav9.png",
	    	text:"限定发售"
	    },
	    {
	    	src:"/images/nav10.png",
	    	text:"折扣专区"
	    }
    ],
    goods:{},
    swiper: {
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 3000,
    },
    scroll1:{
    	
    },
    sectionScroll:{
    	scrollx:false,
    	scrolly:true,
    }
  },
  onLoad: function () {
    var that = this;
    wx.request({
      url: 'https://wlwywlqk.cn/goods/getData?categorygroup=男装&pageindex='+that.data.pageindex+'&pagesize=50',
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
    wx.request({
      url: 'https://wlwywlqk.cn/goods/getData?categorygroup=男装&pageindex='+Math.ceil(Math.random()*10)+'&pagesize=10',
      header: {
          'Content-Type': 'application/json'
      },
      success: function(res) {
	      console.log(res.data);
	      that.setData({
	        scroll1:res.data,
	      });
     	},
      fail: function (error) {
        console.log(error);
      }
    });
  },
  newGood:function(e){
  	var that = this;
  	var pageindex = that.data.pageindex+1;
  	that.setData({
  		hasRefesh:true,
  		pageindex:pageindex,
  		hidden:false
  	});
  	wx.request({
      url: 'https://wlwywlqk.cn/goods/getData?categorygroup=男装&pageindex='+that.data.pageindex+'&pagesize=20',
      header: {
          'Content-Type': 'application/json'
      },
      success: function(res) {
	      console.log(res.data);
	      that.setData({
	        goods:res.data,
	        hidden:true,
	        hasRefresh:false
	      });
     	},
      fail: function (error) {
//      console.log(error);
      }
    });
  },

  loadingChange: function () {
    this.setData({
      hidden: true
    })
  },
  loadingTap: function () {
    this.setData({
      hidden: false
    })

    var that = this
    setTimeout(function () {
      that.setData({
        hidden: true
      })
    }, 1500)
  }
});
