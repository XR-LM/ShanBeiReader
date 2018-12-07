// pages/table/table.js
//引入本地json数据，这里引入的就是第一步定义的json数据
var jsonData = require('../../data/data.js');
var touchDot = 0; //触摸时的原点 
var touchEd = 0; //触摸结束时的位置
var time = 0; // 时间记录，用于滑动时且时间小于1s则执行左右滑动 
var interval = ""; // 记录/清理时间记录  
var i = 0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    book: "",
    bookname: "",
    bookename: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      //jsonData.dataList获取json.js里定义的json数据，并赋值给dataList
      book: jsonData.dataList,
      bookname: jsonData.dataList[0].books[0].name,
      bookename: jsonData.dataList[0].books[0].ename
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },
  tomytable: function() {
    wx.navigateTo({
      url: '../pages',
    })
  }, // 触摸开始事件 
  // 触摸开始事件 
  touchStart: function(e) {
    touchDot = e.changedTouches[0].pageX;; // 获取触摸时的原点 
    console.log(touchDot)
    // 使用js计时器记录时间  
    interval = setInterval(function() {
      time++;
    }, 100);
  },
  // 触摸移动事件 
  touchMove: function(e) {

  },
  // 触摸结束事件 
  touchEnd: function(e) {

    var that = this;
    touchEd = e.changedTouches[0].pageX;
    console.log(touchEd);
    // 向左滑动  
    if (touchDot - touchEd >= 150) {
      i = i + 1;
      if (i > 2) {
        i = i - 1;
        return;
      }
    }
    // 向右滑动 
    if (touchEd - touchDot >= 150) {
      i = i - 1;
      if (i < 0)
        return;
    }
    that.setData({
      bookname: that.data.book[0].books[i].name,
      bookename: jsonData.dataList[0].books[i].ename
    });
  },
})