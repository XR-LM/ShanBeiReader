// pages/home/home.js
//引入本地json数据，这里引入的就是第一步定义的json数据
var jsonData = require('../../data/data.js');
var jsonData1 = require('../../data/list.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    book: "",
    booklist: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      //jsonData.dataList获取json.js里定义的json数据，并赋值给dataList
      book: jsonData.dataList,
      booklist: jsonData1.dataList1
    });
    console.log(this.data.book);
  },

  todetile: function(e) {
    console.log(e);
    var id = e.target.dataset.id;
    var type = e.target.dataset.type;
    wx.navigateTo({
      url: '../detile/detile?id=' + id + "&type=" + type,
    })
  }
})