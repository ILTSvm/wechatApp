Page({
  data: {
    current: 3,
    list: [],
    swiper: {
      indicatorDots: false,
      autoplay: false,
      interval: 0,
      duration: 300
    }
  },

  onLoad: function () {
    var that = this;
    wx.request({
      url: 'http://localhost/mock/list.json',
      // url: 'http://felixlu.bceapp.com/list.php',
      header: {
          'Content-Type': 'application/json'
      },
      success: function(res) {
        console.log(res.data);
        that.setData({
          list: res.data
        });
      },
      fail: function (error) {
        console.log(error);
      }
    });
    // this.setData({
    //   list: [
    //     {
    //       "img": "/images/img1.jpg",
    //       "title": "西甲-巴萨3-4客负 皇马1-1丢榜首",
    //     },
    //     {
    //       "img": "/images/img2.png",
    //       "title": "英超-曼联憾平 曼城0-2热刺 瓜帅首败",
    //     },
    //     {
    //       "img": "/images/img3.jpg",
    //       "title": "意甲-AC米兰4-3 国米1-2罗马",
    //     },
    //     {
    //       "img": "/images/img4.jpg",
    //       "title": "德甲-拜仁1-1终结连胜 药厂擒多特",
    //     },
    //     {
    //       "img": "/images/img1.jpg",
    //       "title": "西甲-巴萨3-4客负 皇马1-1丢榜首",
    //     },
    //     {
    //       "img": "/images/img2.png",
    //       "title": "英超-曼联憾平 曼城0-2热刺 瓜帅首败",
    //     },
    //     {
    //       "img": "/images/img3.jpg",
    //       "title": "意甲-AC米兰4-3 国米1-2罗马",
    //     },
    //     {
    //       "img": "/images/img4.jpg",
    //       "title": "德甲-拜仁1-1终结连胜 药厂擒多特",
    //     }
    //   ]
    // })
  },

  actionToupper: function () {
    // console.log(1);
  },

  actionTolower: function () {
    // console.log(2);
  },

  switchSlider: function (event) {
    this.setData({
      current: event.target.dataset.index
    })
  },

  changeSlider: function (event) {
    this.setData({
      current: event.detail.current
    });
  }
});
