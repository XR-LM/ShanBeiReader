// pages/detile/detile.js
//引入本地json数据，这里引入的就是第一步定义的json数据
var jsonData = require('../../data/data.js');
var jsonData1 = require('../../data/list.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    book: ""

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    var index = options.id;
    var type = options.type;
    if (type == '') {
      var books = jsonData.dataList[0].books[index];
      this.setData({
        //jsonData.dataList获取json.js里定义的json数据，并赋值给dataList
        book: books,
      });
    }else{
      var books = jsonData1.dataList1[type].books[index];
      this.setData({
        //jsonData.dataList获取json.js里定义的json数据，并赋值给dataList
        book: books,
      });
    }
  },
  toread:function(e){
    wx.navigateTo({
      url: '../read/read',
    })
  }
})