---
title: CC的小伙伴们
description: CC的部落格 友情链接页面
type: link
aside: false
top_img: false
comments: true
translate_title: blogroll
subtitle: Blogroll
date: 2020-06-04 22:17:49
updated: 2022-08-27 12:00:00
---
<div id='blogroll'>
<script src='https://cdn.jsdelivr.ren/npm/butterfly-friend/butterfly-friend.umd.js'></script>
<link rel="stylesheet" href='https://cdn.jsdelivr.ren/npm/butterfly-friend/style.css'>
<script>
document.querySelector('.flink').insertAdjacentHTML('afterbegin',"<div id='friend1' class='js-pjax'></div>")
xkFriend.init({
  el: '#friend1', // 挂载容器
  api: [
    'https://blogroll.ccknbc.cc/blogroll.json'
  ], // 你的json链接列表，可以是多个。
  loading_img: 'https://cdn.jsdelivr.ren/gh/ccknbc-backup/photos/blog/2021-03-08~15-13-15.gif', // 加载中的图片
  fail_img: 'https://cdn.jsdelivr.ren/gh/ccknbc-backup/photos/blog/2021-03-08~15-13-15.gif' // 加载失败的图片
})
</script>
</div>

{% tabs links%}

<!-- tab 申请友链@fa-solid fa-check-circle -->

{% note success flat %}快速申请友链请前往{% btn 'https://github.com/ccknbc-forked/blogroll/',GitHub(推荐),fa-brands fa-github,outline green larger %} 按照提示提交 PR 即可！如需修改可
{% btn '#post-comment',给 CC 留言,fa-solid fa-comments,outline green smaller %}
或再次 PR  {% endnote %}

<!-- {% link 顺便看看友链截图列表，您可复制使用啦, https://cdn.jsdelivr.ren/gh/ccknbc-actions/blogroll@webp/, https://cdn.jsdelivr.ren/www.jsdelivr.com/c903573129ce0afdbc8b006baf86dba514615495/img/logo-horizontal.svg %} -->

<!-- {% ghcard ccknbc-actions/blogroll, theme=vue %}  -->

<!-- endtab -->

<!-- tab 我的信息 @fa-solid fa-id-card -->

主要信息
```yaml
name: CC康纳百川
link: https://blog.ccknbc.cc
avatar: https://cdn.jsdelivr.ren/gh/ccknbc-backup/cdn/logo/ccknbc.png
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
screenshot: https://cdn.jsdelivr.ren/gh/ccknbc-actions/blogroll@webp/blog.ccknbc.cc.webp
# screenshot: https://s0.wordpress.com/mshots/v1/https://blog.ccknbc.cc?w=1280&h=960
# screenshot: https://image.thum.io/get/width/1024/crop/768/https://blog.ccknbc.cc
# 帮我选一个适合您站点的截图呗，默认的jsd每天更新
```
完整信息
```yaml
name: CC的部落格
link: https://blog.ccknbc.cc
avatar: https://cdn.jsdelivr.ren/gh/ccknbc-backup/cdn/logo/ccknbc.png
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
screenshot: https://cdn.jsdelivr.ren/gh/ccknbc-actions/blogroll@webp/blog.ccknbc.cc.webp
```

<!-- endtab -->

{% endtabs %}