---
title: CC的小伙伴们
type: link
comments: false
aside: false
highlight_shrink: false
top_img: false
translate_title: cc-friends
date: 2020-06-04 22:17:49
---

<script src='https://cdn.jsdelivr.net/npm/butterfly-friend/dist/friend.min.js'></script>
<div id='Friends'></div>
<script>
  var obj = {
    // 容器选择器
    el: '#friend1',
    // gitee主人id
    owner: 'ccknbc',
    // gitee仓库
    repo: 'link',
    // 排序方式
    direction_sort: 'asc',
    // 按标签排序
    sort_container: ["效果展示"],
    // 标签描述
    labelDescr: {
      效果: "<span style='color:#8FBC8F;'><b>部分组合效果展示</b></span>"
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

{% tabs links%}
<!-- tab 申请须知@fas fa-check-circle -->

快速申请友链请{% btn 'https://gitee.com/ccknbc/link/',点击这里,far fa-hand-point-right,outline green larger %}按照`README`和`模板`提交`Issue`即可

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
# 自定义网站截图（当样式为card时可以自定义网站截图，防止api接口宕掉无法显示图）
screenshot: 
```
<!-- 1. **点击我的信息，您可以复制后自行选择添加至您的友链**
2. **鼠标悬停，可显示站点`预览图`**
3. **每周`定时更新`，因此如果您想立即看到友链截图，可在审核通过后前往仓库点一下`star`**
4. **若网站截图不显示，请刷新，还有此页有`BUG`**

{% link 友链截图列表, https://cdn.jsdelivr.net/gh/ccknbc-actions/blogroll@webp/, https://cdn.jsdelivr.net/gh/ccknbc-backup/cdn/logo/logo.png %}

{% ghcard ccknbc-actions/blogroll, theme=vue %}  -->

<!-- endtab -->

<!-- tab 我的信息 @fas fa-id-card -->

```yaml
- name: CC的部落格
  link: https://blog.ccknbc.cc
  avatar: https://cdn.jsdelivr.net/gh/ccknbc-backup/cdn/logo/ccknbc.png
  descr: CC康纳百川
```
<!-- endtab -->

{% endtabs %}