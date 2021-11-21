---
title: CC的小伙伴们
description: CC的部落格 友情链接
type: link
aside: false
top_img: false
translate_title: blogroll
subtitle: Blogroll
date: 2020-06-04 22:17:49
updated: 2021-07-18 19:38:19
---
<script src="https://cdn.jsdelivr.net/gh/ccknbc-actions/blogroll@main/blogroll.js"></script>
<!-- <script src="https://cdn.jsdelivr.net/npm/butterfly-friend/dist/friend.min.js"></script> -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ccknbc-actions/blogroll@main//style.css">
<script>
  document.querySelector(".flink").insertAdjacentHTML("afterbegin",
    "<div id='friend1'></div>"), xkFriend.init({
    el: "#friend1",
    url: "https://api.ccknbc.vercel.app/api/github?repo=%27blogroll%27&user=%27ccknbc-actions%27&branch=%27blogroll%27&path=%27blogroll.json%27",
    labelDesc: {
    },
    loading_img: "https://cdn.jsdelivr.net/gh/ccknbc-backup/photos/blog/2021-03-08~15-13-15.gif",
    fail_img: "https://cdn.jsdelivr.net/gh/ccknbc-backup/photos/blog/2021-03-08~15-13-28.gif"
  })
</script>

  {% tabs links%}

  <!-- endtab -->

  <!-- tab 朋友圈@fas fa-blog -->
  
  <!-- 友链朋友圈样式 -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Rock-Candy-Tea/hexo-friendcircle-demo@main/css/butterfly.css">

  <!-- 挂载友链朋友圈的容器 -->
  <div id="fcircleContainer"></div>

  <!-- 全局引入友链朋友圈配置项 -->
  <script>
    // 全局变量声明区域
    var fdata = {
      apiurl: 'https://moments.ccknbc.vercel.app/api',
      initnumber: 20, //【可选】页面初始化展示文章数量
      stepnumber: 10,//【可选】每次加载增加的篇数
      error_img: '/image/404.gif' //【可选】头像加载失败时默认显示的头像
    }
    //存入本地存储
    localStorage.setItem("fdatalist",JSON.stringify(fdata))
  </script>

  <!-- 全局引入抓取方法 -->
  <script defer src="https://cdn.jsdelivr.net/gh/Rock-Candy-Tea/hexo-friendcircle-demo@main/js/fetch.js"></script>
  <!-- 局部引入页面元素生成方法 -->
  <script async src="https://cdn.jsdelivr.net/gh/Rock-Candy-Tea/hexo-friendcircle-demo@main/js/fcircle.js" charset="utf-8"></script>    <!-- js -->

  <!-- endtab -->

  <!-- tab 申请友链@fas fa-check-circle -->

  快速申请友链请前往{% btn 'https://github.com/ccknbc-actions/blogroll',GitHub(推荐),fab fa-github,outline green larger %} 按照提示和 {% emp Issue 模板 %}提交 Issue 即可，会自动打标签通过并截图，尽量不要在评论区留言，处理速度比较慢

  {% note warning flat %}之前使用 {% btn 'https://gitee.com/ccknbc/blogroll?skip_mobile=true',Gitee,far fa-hand-point-right,outline red larger %} 申请的，仍可以前往修改，如果您访问 GitHub 有困难，也可使用 Gitee 申请等待人工审核 {% endnote %}

  {% link 顺便看看友链截图列表，您可复制使用啦, https://cdn.jsdelivr.net/gh/ccknbc-actions/blogroll@webp/, https://cdn.jsdelivr.net/www.jsdelivr.com/d6676c4e3046776d2d26c7801f5b0d82ed45a59a/img/logo-horizontal.svg %}

  <!-- {% ghcard ccknbc-actions/blogroll, theme=vue %}  -->

  <!-- endtab -->

  <!-- tab 我的信息 @fas fa-id-card -->

  主要信息
  ```yaml
  name: CC康纳百川
  link: https://blog.ccknbc.cc
  avatar: https://cdn.jsdelivr.net/gh/ccknbc-backup/cdn/logo/ccknbc.png
  descr: CC康纳百川的小窝
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
  # screenshot: https://image.thum.io/get/width/1024/crop/768/www://blog.ccknbc.cc
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