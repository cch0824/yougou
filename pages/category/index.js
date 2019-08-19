// pages/category/index.js
import request from "../../utils/request.js"
Page({
  // tab栏切换触发
  changeTab(event) {
    // console.log(event)
    let { index } = event.currentTarget.dataset
    this.setData({
      current:index
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    // 分类数据
    categorList:[],
    //  导航的下标
    current:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    // 请求分类数据
    request({
      url:"/categories"
    }).then(res=>{
      let {message}=res.data
      // console.log(message)
      this.setData({
        categorList:message
      })
    })
    
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