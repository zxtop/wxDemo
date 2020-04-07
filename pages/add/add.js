Page({
  data:{

  },
  onLoad:function(e){
    console.log('onload....',e)
    var id = e.id;
    if(id){
      getData(id,this)
    }else{
      this.setData({
        id:Date.now()
      })
    }
  },
  change(e){ 
    var val = e.detail.value;
    this.setData({
      content:val
    })
  },
  cancel(){
    wx.navigateBack();
  },
  sure(e){
    var re=/^\s*$/g;
    console.log(this.data.content,'sure')
    if(!this.data.content || re.test(this.data.content)){
      return
    }

    this.setData({
      time:Date.now(),
      content:this.data.content
    })
    setValue(this);
    wx.navigateBack()
    
  }

})

function getData(id,page){
  var arr = wx.getStorageSync('txt');
  arr.forEach((item,index)=>{
    if(item.id == id){
      page.setData({
        id:item.id,
        content:item.content
      })
    }
  })
  
}

function setValue(page){
  var arr = wx.getStorageSync('txt');
  var data = [],flag= true;
  if(arr.length){
    arr.forEach((item)=>{
      if(item.id == page.data.id){
        item.time = Date.now();
        item.content = page.data.content;
        flag = false;
      }
      data.push(item)
    })

  }

  if(flag){
    data.push(page.data)
  }
  wx.setStorageSync('txt', data)
}