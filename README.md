# wxDemo
微信小程序-记事本
需求：
能够添加笔记，并更新记事时间；
数据暂存在小程序中的Storage；

页面结构，两个页面，列表页和添加页；
思路：
1.页面首先加载列表页，数据的渲染先从storage获取判断，取到时间和内容，加载在页面结构中
2.给列表页的内容和添加按钮添加点击时间bindtap，跳转到add页面，内容再次编辑点击时要传入一个id给add页面，所以为了区分列表的状态，给每一个列表添加一个id属性，传入到add页面中，add页面接收可通过onload加载中获取
3.add页需要做两个事情，一是判断是新增加内容还是再次编辑，二是提交内容到stroage中命名的txt中，取消则跳转返回即可
