---
title: CC的小伙伴们
description: CC的部落格 友情链接
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

快速申请友链请前往{% btn 'https://gitee.com/ccknbc/blogroll/issues/new?skip_mobile=true',Gitee,far fa-hand-point-right,outline red larger %} 或 {% btn 'https://github.com/ccknbc-actions/blogroll/issues/new?assignees=&labels=&template=blogroll.md',GitHub,fab fa-github,outline green larger %}按照 {% emp Issue 模板 %}提交 Issue 即可，若您想修改或者追加新配置可前往您所创建的 Issue 自行修改

{% note warning simple %}Item 效果鼠标悬停会显示自动截图的结果（极可能加载失败），如果你想要 [带壳截图](https://cdn.jsdelivr.net/gh/ccknbc-actions/blogroll@webp/blog.ccknbc.cc.webp)，可前往 **[友链仓库](https://github.com/ccknbc-actions/blogroll/blob/main/.github/workflows/screenshots.yml#L46)** fork仓库后 按照这个格式在下面添加一行，然后向我提交PR，或者在你的申请 Issue 下面评论告知我添加即可，每天定时自动更新{% endnote %}


{% link 友链截图列表, https://cdn.jsdelivr.net/gh/ccknbc-actions/blogroll@webp/, https://cdn.jsdelivr.net/gh/ccknbc-backup/cdn/logo/ccknbc.png %}

{% ghcard ccknbc-actions/blogroll, theme=vue %} 

<!-- endtab -->

<!-- tab 我的信息 @fas fa-id-card -->

主要信息
```yaml
name: CC康纳百川
link: https://www.ccknbc.cc
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
screenshot: https://cdn.jsdelivr.net/gh/ccknbc-actions/blogroll@webp/www.ccknbc.cc.webp
# screenshot: https://cdn.jsdelivr.net/gh/ccknbc-actions/blogroll@webp/www.ccknbc.cc.webp
# screenshot: https://s0.wordpress.com/mshots/v1/https://www.ccknbc.cc?w=1280&h=960
# screenshot: https://image.thum.io/get/width/1024/crop/768/www://blog.ccknbc.cc
# 帮我选一个适合您站点的截图呗
```
完整信息
```yaml
name: CC的部落格
link: https://www.ccknbc.cc
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
screenshot: https://cdn.jsdelivr.net/gh/ccknbc-actions/blogroll@webp/www.ccknbc.cc.webp
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
    url: "https://api.ccknbc.now.sh/api/github?repo='blogroll'&user='ccknbc-actions'&branch='blogroll'&path='blogroll.json'",
    sort_container:["康特CP专属","冰糖CP专属","菜鸡专属","小伙伴们","渣男小嘉专属"],
    labelDescr:{
      "康特CP专属":"<span style='color:#49b1f5;'>有点甜！</span>",
      "渣男小嘉专属":"<span style='color:lightgreen;'>一个 ”有趣“ 的‘男’孩子</span>",
      "小伙伴们":"谢谢你们发现了我",
      "冰糖CP专属":"<marquee direction=right behavior=alternate scrollamount=5 scrolldelay=10 align=top width=220 onmouseover=this.stop() onmouseout=this.start()><b><font color=#FFCC99>一直白嫖一直爽</marquee>",
      "菜鸡专属":"<marquee direction=right behavior=scroll scrollamount=5 scrolldelay=10 align=top width=220 onmouseover=this.stop() onmouseout=this.start()><b><font color=#FF6666>这真的是大佬</marquee>",
    },
    loading_img: 'https://cdn.jsdelivr.net/gh/ccknbc-backup/photos/blog/2021-03-08~15-13-23.gif',
    fail_img: 'https://cdn.jsdelivr.net/gh/ccknbc-backup/photos/blog/2021-03-08~15-13-28.gif'
  }
  document.querySelector('.flink').insertAdjacentHTML('afterbegin', "<div id='friend1'></div>")
  new Friend(obj)
  getFriendsScreenShot({
    user: "ccknbc-actions", // github用户名
    repo: "blogroll", // github仓库名
    branch: "webp", //  分支: 可选参数(默认gh-pages分支)
    suffix: "webp", // 图片后缀: 可选参数(默认jpg)
    lazyImg: "https://cdn.jsdelivr.net/gh/ccknbc-backup/photos/blog/2020-10-10~13_03_22.webp", // 懒加载图片: 可选参数(默认https://cdn.jsdelivr.net/gh/zykjofficial/zykjofficial.github.io@master/img/loading.gif)
    duration: 5000 //Snackbar的持续时间: 可选参数(默认5000毫秒)
})
</script>