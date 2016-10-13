Page({
  data: {
    current: 4,
    goods: [],
    swiper: {
      indicatorDots: false,
      autoplay: false,
      interval: 0,
      duration: 300
    },
    icon:[
			{
				src:"/images/drawable-hdpi-v4/mine_order_payment.png",
				text:"待付款"
			},
			{
				src:"/images/drawable-hdpi-v4/mine_order_ship.png",
				text:"待发货"
			},
						{
				src:"/images/drawable-hdpi-v4/mine_order_shipped.png",
				text:"待收货"
			},
			{
				src:"/images/drawable-hdpi-v4/mine_order_delivered.png",
				text:"待晒单"
			},
			{
				src:"/images/drawable-hdpi-v4/mine_order_return.png",
				text:"退/换货"
			}
    ],
    icon2:[
    	{
				src:"/images/drawable-hdpi-v4/mine_coupon_icon.png",
				text:"优惠券"
			},
			{
				src:"/images/drawable-hdpi-v4/mine_mine_yohob_icon.png",
				text:"有货币"
			},
			{
				src:"/images/drawable-hdpi-v4/mine_limit_code.png",
				text:"限购码"
			}
    ]
  },

  onLoad: function () {
    var that = this;
    wx.request({
      url: 'http://localhost/mock/list.json',
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
