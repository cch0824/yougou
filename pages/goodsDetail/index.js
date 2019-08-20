// pages/goodsDetail/index.js

import request from "../../utils/request.js"
Page({
  // 添加进购物车
  handleAddGoods(){
    // wx.setStorageSync("goods", goods)
  },

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [],
    richText:"",
    goodsData:{},  //当前商品的数据
    goods:{}  // 本地存储的购物车商品数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 请求商品详细数据
    request({
      url:'/goods/detail',
      data:{
        goods_id:options.goods_id
      }
    }).then(res=>{
      let {message}=res.data
      this.setData({
        goodsData:message,
        imgUrls: message.pics,
        richText: message.goods_introduce
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