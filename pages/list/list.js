var time = require("../../utils/util");
Page({
  data:{
    lists:[
      {
        content:"hello",
        time:Date.now(),
        id:1
      }
    ]
  },
  onLoad(){
    initData(this);
  },
  onShow(){
    initData(this);
  },
  add(){
    wx.navigateTo({
      url: '../add/add',
    })
  },
  edit(e){
    var id = e.target.dataset.id;
    console.log(e,"ddddd")
    wx.navigateTo({
      url: '../add/add?id='+id,
    })
  }
  




})

function initData(page){
  var arr = wx.getStorageSync('txt');
  console.log(arr,'initddddd')
  if(arr.length){
    arr.forEach((item,i)=>{
      var t = new Date(Number(item.time));
      item.time  = time.formatTime(t);
    })
    page.setData({
      lists:arr
    })
  }else{
    let data = page.data.lists;
    console.log(data)
    wx.setStorageSync('txt', data)

  }
}