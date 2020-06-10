//Page Object
Page({
  data: {
    //轮播图数组
    swiperList:[]
  },
  //options(Object)
  //页面开始加载 就会触发事件
  onLoad: function(options) {
    //发送异步请求 获取轮播图
    var reqTask = wx.request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
      success: (result)=>{
        this.setData({
          swiperList:result.data.message
        })
      }
    });
  },
  onReady: function() {
    
  },
  onShow: function() {
    
  },
  onHide: function() {

  },
  onUnload: function() {

  },
  onPullDownRefresh: function() {

  },
  onReachBottom: function() {

  },
  onShareAppMessage: function() {

  },
  onPageScroll: function() {

  },
  //item(index,pagePath,text)
  onTabItemTap:function(item) {

  }
});
  