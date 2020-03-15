// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {  // 变量
    name: 'Hello World',
    src: '/images/weixin.jpg'
  },
  getMyInfo: function (e) {
    console.log(e.detail.userInfo)
    let info = e.detail.userInfo;//let为定义变量
    this.setData({//修改变量
      name: info.nickName,//更新名称
      src: info.avatarUrl//更新图片来源
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})