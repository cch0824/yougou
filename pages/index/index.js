//index.js
import request from "../../utils/request.js"
Page({
  data:{
    // 轮播图数据
    imgUrls:[],
    // 导航数据
    navsList:[],
    // 楼层数据
    floorList:[]
  },
  onLoad(){
    // 请求轮播图数据
    request({
      url: "/home/swiperdata"
    }).then(res => {
      let {message}= res.data
      this.setData({
        imgUrls:message
      })
    })
    // 请求导航数据
    request({
      url:"/home/catitems"
    }).then(res=>{
      let {message}=res.data
      this.setData({
        navsList:message
      })
    })
    // 请求楼层数据
    request({
      url:"/home/floordata"
    }).then(res=>{
      // console.log(res)
      let {message}=res.data
      this.setData({
        floorList:message
      })
    })
  }
})
