---
title: CC的小伙伴们
description: CC的小伙伴们
type: link
comments: false
aside: false
highlight_shrink: false
top_img: false
translate_title: cc-friends
date: 2020-06-04 22:17:49
---

{% tabs links%}
<!-- tab 申请须知@fas fa-check-circle -->

快速申请友链请{% btn 'https://gitee.com/ccknbc/blogroll?skip_mobile=true',点击这里,far fa-hand-point-right,outline green larger %}按照 {% emp README %} 和 {% wavy Issue 模板 %} 提交 `Issue` 即可

{% note warning simple %}关于定时自动截图，由于换了一个免费的接口，由于没有延时参数设置，加上 jsDelivr 的缓存，所以你的站点可能某天（或者每一天）没有截图，对于 Item 样式，鼠标悬停会显示当天的截图{% endnote %}

**Issue 配置预览**，若您想修改或者追加新配置可前往您所创建的 Issue 自行修改

```yaml
# 显示名称
name: 你的名称

# 跳转地址
link: 你的链接

# 你的头像
avatar: 你的头像

# 你的描述
descr: 你的描述

#------------------------------#
#       以下字段为选填字段       #

# 边框及鼠标悬停的背景颜色，允许设置渐变色
--primary-color: #49b1f5

# 昵称和描述颜色，不允许设置渐变色
--namecolor: 

# 鼠标悬停的昵称和描述颜色，不允许设置渐变色
--namecolorHover: 

# 边框大小
border-width: 0px

# 边框样式
border-style: solid

# 鼠标悬停头像旋转角度
--primary-rotate: 0deg

# 边框动画 参考 https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation
# 内置动画：borderFlash（边框闪现）、link_custom1(跑马灯)、link_custom(主颜色呼吸灯)
animation: borderFlash 0s infinite alternate

# 头像动画 参考 https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation
# 内置动画：auto_rotate_left（左旋转）、auto_rotate_right（右旋转）
img_animation: auto_rotate_right 0s linear infinite

# 风格 可选项 item 和 card
card_style: item

# 自定义网站截图，当样式为 card 时可以自定义网站截图
# 1.如果您的站点不常更新，可留空，会使用默认接口 https://image.thum.io/get/width/1024/crop/768/https://blog.ccknbc.cc
# 2.如果您的站点加载完毕耗时较长，请自行替换为此接口中网址部分填入 https://s0.wordpress.com/mshots/v1/https://blog.ccknbc.cc?w=1280&h=960 
# 3.如果您的站点更新较为频繁，加载速度还不错，可替换此链接中域名部分填入 https://cdn.jsdelivr.net/gh/ccknbc-actions/blogroll@webp/blog.ccknbc.cc.webp
# 如果您知道其他好用的接口，欢迎给我留言，谢谢！！！
screenshot: 
```

{% link 友链截图列表, https://cdn.jsdelivr.net/gh/ccknbc-actions/blogroll@webp/, https://cdn.jsdelivr.net/gh/ccknbc-backup/cdn/logo/ccknbc.png %}

{% ghcard ccknbc-actions/blogroll, theme=vue %} 

<!-- endtab -->

<!-- tab 我的信息 @fas fa-id-card -->
主要信息
```yaml
name: CC的部落格
link: https://blog.ccknbc.cc
avatar: https://cdn.jsdelivr.net/gh/ccknbc-backup/cdn/logo/ccknbc.png
descr: CC康纳百川
```
选填信息
```yaml
--primary-color: linear-gradient(0deg,#ffdee9 0,#b5fffc 100%)
--namecolor: #8fbc8f
--namecolorHover: #ffcc00
border-width: 1px
border-style: solid
--primary-rotate: 180deg
animation: link_custom1 2s infinite alternate
img_animation: auto_rotate_right 2s linear infinite
card_style: card/item
screenshot: https://cdn.jsdelivr.net/gh/ccknbc-actions/blogroll@webp/blog.ccknbc.cc.webp
# screenshot: https://s0.wordpress.com/mshots/v1/https://blog.ccknbc.cc?w=1280&h=960
# screenshot: https://image.thum.io/get/width/1024/crop/768/https://blog.ccknbc.cc
# 帮我选一个适合您站点的截图呗
```
完整信息
```yaml
name: CC的部落格
link: https://blog.ccknbc.cc
avatar: https://cdn.jsdelivr.net/gh/ccknbc-backup/cdn/logo/ccknbc.png
descr: CC康纳百川
--primary-color: linear-gradient(0deg,#ffdee9 0,#b5fffc 100%)
--namecolor: #8fbc8f
--namecolorHover: #ffcc00
border-width: 1px
border-style: solid
--primary-rotate: 180deg
animation: link_custom1 2s infinite alternate
img_animation: auto_rotate_right 2s linear infinite
card_style: item
screenshot: https://cdn.jsdelivr.net/gh/ccknbc-actions/blogroll@webp/blog.ccknbc.cc.webp
```
<!-- endtab -->

{% endtabs %}

<script data-pjax src="https://cdn.jsdelivr.net/gh/ccknbc-actions/blogroll@main/blogroll.js"></script>
<script data-pjax src="https://cdn.jsdelivr.net/gh/ccknbc-actions/blogroll@main/screenshot.js"></script>
<script> 
  if(typeof(Friend)=='undefined'){
    location.href='/blogroll'
  }
  var obj = {
    el: '#friend1',
    owner: 'ccknbc',
    repo: 'blogroll',
    direction_sort: 'asc',
    sort_container:["康特CP专属","冰糖CP专属","菜鸡专属","小伙伴们","渣男小嘉专属","效果展示"],
    labelDescr:{
      "康特CP专属":"<span style='color:#49b1f5;'>有点甜！</span>",
      "渣男小嘉专属":"<span style='color:lightgreen;'>一个 ”有趣“ 的‘男’孩子</span>",
      "小伙伴们":"谢谢你们发现了我",
      "冰糖CP专属":"<marquee direction=right behavior=alternate scrollamount=5 scrolldelay=10 align=top width=220 onmouseover=this.stop() onmouseout=this.start()><b><font color=#FFCC99>一直白嫖一直爽</marquee>",
      "菜鸡专属":"<marquee direction=right behavior=scroll scrollamount=5 scrolldelay=10 align=top width=220 onmouseover=this.stop() onmouseout=this.start()><b><font color=#FF6666>这真的是大佬</marquee>",
      "效果展示":"Item 风格不同配置效果展示"
    },
    fail_img: 'https://cdn.jsdelivr.net/gh/ccknbc-backup/photos/blog/2020-10-10~13_03_22.webp'
  }
  document.querySelector('.flink').insertAdjacentHTML('afterbegin', "<div id='friend1'></div>")
  new Friend(obj)
  getFriendsScreenShot({
    user:"ccknbc-actions",
    repo:"blogroll",
    branch:"webp",
    suffix:"webp",
    lazyImg: "https://cdn.jsdelivr.net/gh/ccknbc-backup/photos/blog/2020-10-10~13_03_22.webp",
    duration:"5e3"
  })
</script>