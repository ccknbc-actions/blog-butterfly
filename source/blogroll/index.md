---
title: CC的小伙伴们
description: CC的部落格 友情链接页面
type: link
aside: false
top_img: false
comments: false
translate_title: blogroll
subtitle: Blogroll
date: 2020-06-04 22:17:49
updated: 2021-07-18 19:38:19
---
<!-- <script src="https://cdn.jsdelivr.net/gh/ccknbc-actions/blogroll@main/blogroll.js" data-pjax></script> -->
<!-- <script src="https://cdn.jsdelivr.net/npm/butterfly-friend/dist/friend.min.js"></script> -->
<!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ccknbc-actions/blogroll@main//style.css">
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
</script> -->

<!-- tab 友链@fa-solid fa-link -->

<script src='https://cdn.jsdelivr.net/npm/butterfly-friend@latest/butterfly-friend.umd.js'></script>
<link rel="stylesheet" href='https://cdn.jsdelivr.net/npm/butterfly-friend@latest/style.css'>
<script>
document.querySelector('.flink').insertAdjacentHTML('afterbegin',"<div id='friend1'></div>")
xkFriend.init({
  el: '#friend1', // 挂载容器
  api: [
    'https://blogroll.ccknbc.vercel.app/blogroll.json'
  ], // 你的json链接列表，可以是多个。
  loading_img: 'https://cdn.jsdelivr.net/gh/ccknbc-backup/photos/blog/2021-03-08~15-13-15.gif', // 加载中的图片
  fail_img: 'https://cdn.jsdelivr.net/gh/ccknbc-backup/photos/blog/2021-03-08~15-13-28.gif' // // 加载失败的图片
})
</script>

<!-- endtab -->

{% tabs links%}

<!-- tab 申请友链@fa-solid fa-check-circle -->

{% note success flat %}快速申请友链请前往{% btn 'https://github.com/ccknbc-forked/my-friend',GitHub(推荐),fa-brands fa-github,outline green larger %} 按照提示提交 PR 即可！如需修改可<button class="btn-beautify outline green small" id="chat_btn" type="button" title="给 CC 留言"><i class="fa-solid fa-sms"></i><span>给 CC 留言</span></button>或再次 PR  {% endnote %}

<!-- {% link 顺便看看友链截图列表，您可复制使用啦, https://cdn.jsdelivr.net/gh/ccknbc-actions/blogroll@webp/, https://cdn.jsdelivr.net/www.jsdelivr.com/c903573129ce0afdbc8b006baf86dba514615495/img/logo-horizontal.svg %} -->

<!-- {% ghcard ccknbc-actions/blogroll, theme=vue %}  -->

<!-- endtab -->

<!-- tab 我的信息 @fa-solid fa-id-card -->

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
# screenshot: https://image.thum.io/get/width/1024/crop/768/https://blog.ccknbc.cc
# 帮我选一个适合您站点的截图呗，默认的jsd每天更新
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

<!-- tab 朋友圈@fa-solid fa-blog -->

<div class="blogroll">
<div id="cf-container">朋友圈加载中……</div>
</div>
<script type="text/javascript">
  var fdataUser = {
    apiurl: 'https://moments.ccknbc.vercel.app/'
  }
</script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/lmm214/immmmm/themes/hello-friend/static/fcircle-beta.css">
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/lmm214/immmmm/themes/hello-friend/static/fcircle-beta.js"><script>

<!-- endtab -->

{% endtabs %}