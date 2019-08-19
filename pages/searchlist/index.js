// pages/searchlist/index.js
import request from "../../utils/request.js"
Page({
  //  点击切换tab栏
  changeTab(event) {
    let {
      index
    } = event.currentTarget.dataset
    this.setData({
      current: index
    })
  },

  // 请求获取商品列表数据
  getGoodsData() {
    // 请求商品列表数据
    request({
      url: "/goods/search",
      data: {
        query: this.data.keyword,
        pagenum: this.data.pagenum,
        pagesize: this.data.pagesize
      }
    }).then(res => {
      let {
        goods
      } = res.data.message
      // 保留价格两位小数
      let newGoods = goods.map(v => {
        v.goods_price = Number(v.goods_price).toFixed(2)
        return v
      })
      this.setData({
        goods: [...this.data.goods, ...newGoods]
      })
      // 判断是否还有下一页加载
      if (goods.length < this.data.pagesize) {
        this.setData({
          ismore: false
        })
      }

    })

  },
  /**
   * 页面的初始数据
   */
  data: {
    // 定义tab栏切换下标
    current: 0,
    keyword: '',
    pagenum: 1,
    pagesize: 10,
    // 商品列表数据
    goods: [],
    // 定义变量，判断是否还有下一页列表数据
    ismore: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      keyword: options.keyword
    })
    this.getGoodsData()
  },
  // 下拉触底时触发
  onReachBottom() {
    // 如果已经是最后一页，停止加载下一页数据
    if (!this.data.ismore) {
      return
    }
    // 页码加1
    this.setData({
      pagenum: this.data.pagenum + 1
    })
    // 请求列表数据
    this.getGoodsData()
  }
})