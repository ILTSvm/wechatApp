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
