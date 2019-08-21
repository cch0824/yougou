// pages/cart/index.js
Page({
  // 更改全选选中状态
  changeAllChecked(){
    let { goods } = this.data
    // 如果当前商品有未选中的，点击后，全选
    // 全选取反
      this.setData({
        allChecked: !this.data.allChecked
      })
    Object.keys(goods).forEach(v=>{
      goods[v].ischecked = this.data.allChecked
    })
    wx.setStorageSync("goods", goods)
    this.getAllPrice()
  },

  // 监听全选状态
  watchAllChecked(){
    this.setData({
      goods: wx.getStorageSync("goods") || {}
    })
    let { goods } = this.data
    let isAllSelect = true
    Object.keys(goods).forEach(v => {
      if (!isAllSelect) return
      if (!goods[v].ischecked) {
        isAllSelect = false
      }
    })
    this.setData({
      allChecked: isAllSelect
    })
    this.getAllPrice()
  },

  // 更改单个选中状态
  changeChecked(event){
    let { id } = event.currentTarget.dataset
    let { goods } = this.data
    goods[id].ischecked = !goods[id].ischecked
    wx.setStorageSync("goods", goods)
    //  将本地数据存储在this.data.goods上
    this.setData({
      goods
    })
    // 监听全选状态
    this.watchAllChecked()
  },
  // 商品数量 -1
  reduceGoodsNumber(event) {
    let { goods } = this.data
    let { id } = event.currentTarget.dataset
    // 如果数量为1，弹窗提示删除
    if (goods[id].number == 1) {
      wx.showModal({
        title: '提示',
        content: '是否删除商品',
        success: (res) => {
          if (res.confirm) {
            delete goods[id]
            // // // 重新设置本地存储数据
            wx.setStorageSync("goods", goods)
            this.getAllPrice()
          }
        }
      })
    } else {
      goods[id].number -= 1
      // 重新设置本地存储数据
      wx.setStorageSync("goods", goods)
      this.getAllPrice()
    }
  },
  // 商品数量＋1
  addGoodsNumber(event) {
    let { goods } = this.data
    let { id } = event.currentTarget.dataset
    goods[id].number += 1
    wx.setStorageSync("goods", goods)
    this.getAllPrice()
  },
  // 求总金额
  getAllPrice() {
    //  将本地数据存储在this.data.goods上
    this.setData({
      goods: wx.getStorageSync("goods") || {}
    })
    let { goods } = this.data
    let allPrice = 0;
    Object.keys(goods).forEach(v => {
      if (goods[v].ischecked){
        allPrice += goods[v].goods_price * goods[v].number
      }
    })
    this.setData({
      allPrice
    })
    // wx.setStorageSync("goods", this.data.goods)
  },
  /**
   * 页面的初始数据
   */
  data: {
    // 收货人信息
    userInfo: {
      userName: '', //用户名
      telNumber: '', //手机号
      detailInfo: '' //地址
    },
    goods: {}, // 本地存储的购物车商品数据
    allPrice: 0, // 合计购物车价格
    allChecked: true, //
  },
  // 设置收货地址 
  changeAddress() {
    wx.chooseAddress({
      success: res => {
        this.setData({
          userInfo: {
            userName: res.userName,
            telNumber: res.telNumber,
            detailInfo: res.provinceName + res.cityName + res.countyName + res.detailInfo
          }
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.watchAllChecked()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
  }
})