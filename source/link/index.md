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

<script src='https://cdn.jsdelivr.net/npm/butterfly-friend/dist/friend.min.js'></script>
<!-- <script src="https://cdn.jsdelivr.net/gh/zykjofficial-actions/screen_shot@main/screen_shot.js"></script> -->
<div id='Friends'></div>
<script>
  var obj = {
    el: '#friend1',
    owner: 'ccknbc',
    repo: 'link',
    direction_sort: 'asc',
    sort_container: ["效果展示"],
    labelDescr: {
      注意格式: "<span style='color:#8FBC8F;'><b>注意格式</b></span>"
    }
  }
  try {
    btf.isJqueryLoad(function () {
      $('.flink').prepend("<div id='friend1'></div>")
      new Friend(obj)
    })
  } catch (error) {
    window.onload = function () {
      btf.isJqueryLoad(function () {
        $('.flink').prepend("<div id='friend1'></div>")
        new Friend(obj)
      })
    }
  }
</script>
<!-- <script>
    getFriendsScreenShot({
        user:"ccknbc-actions",
        repo:"blogroll",
        branch:"webp",
        suffix:"webp",
        lazyImg: "https://cdn.jsdelivr.net/gh/ccknbc-backup/photos/blog/2020-10-10~13_03_22.webp",
        duration:"5e3"
    })
</script> -->
{% tabs links%}
<!-- tab 申请须知@fas fa-check-circle -->

快速申请友链请{% btn 'https://gitee.com/ccknbc/link?skip_mobile=true',点击这里,far fa-hand-point-right,outline green larger %}按照`README`和`模板`提交`Issue`即可

{% note warning simple %}部分组合效果展示，关于之前的友链，这边做了回复后进行了删除 issue 处理，就当你们收到了，本来我想一个一个自己改，但还是不知道大家会选择哪种风格，所以麻烦大家自己重新申请{% endnote %}

**Issue 配置预览**

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

# 风格 可选项 item和card
card_style: item

# 自定义网站截图，当样式为card时可以自定义网站截图
# 留空会默认使用API截图，但为防止接口宕掉无法显示截图
# 或替换以下地址中我的域名部分为您的域名，每天会自动更新截图
screenshot: https://cdn.jsdelivr.net/gh/ccknbc-actions/blogroll@webp/blog.ccknbc.cc.webp
```

{% link 友链截图列表, https://cdn.jsdelivr.net/gh/ccknbc-actions/blogroll@webp, https://cdn.jsdelivr.net/gh/ccknbc-backup/cdn/logo/logo.png %}

{% ghcard ccknbc-actions/blogroll, theme=vue %} 

<!-- endtab -->

<!-- tab 我的信息 @fas fa-id-card -->

```yaml
name: CC的部落格
link: https://blog.ccknbc.cc
avatar: https://cdn.jsdelivr.net/gh/ccknbc-backup/cdn/logo/ccknbc.png
descr: CC康纳百川
```
以下为选填信息
```yaml
--primary-color: linear-gradient(135deg, #84fab0 10%, #8fd3f4 100%)
border-width: 1px
border-style: solid
--primary-rotate: 180deg
animation: link_custom1 2s infinite alternate
img_animation: auto_rotate_right 2s linear infinite
card_style: card/item
screenshot: https://cdn.jsdelivr.net/gh/ccknbc-actions/blogroll@webp/blog.ccknbc.cc.webp
# screenshot: https://image.thum.io/get/width/1024/crop/768/https://blog.ccknbc.cc
# screenshot: https://s0.wordpress.com/mshots/v1/https://blog.ccknbc.cc?w=1280&h=960
```
<!-- endtab -->

{% endtabs %}