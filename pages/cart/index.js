// pages/cart/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 收货人信息
    userInfo: {
      userName: '', //用户名
      telNumber: '', //手机号
      detailInfo: '' //地址
    }
  },
 // 设置收货地址 
  changeAddress() {
    wx.chooseAddress({
      success: res => {
        // console.log(res)
        this.setData({
          userInfo:{
            userName: res.userName, 
            telNumber: res.telNumber,
            detailInfo: res.provinceName + res.cityName + res.countyName+res.detailInfo
          }
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})