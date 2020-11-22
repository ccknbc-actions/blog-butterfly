---
title: CC的小伙伴们
date: 2020-06-04 22:17:49
type: link
comments: false
aside: false
top_img: false
---

{% tabs links%}
<!-- tab 申请须知@fas fa-check-circle -->
1. **快速申请友链请[点击这里](https://gitee.com/ccknbc/link/)按照模板提交Issue即可**

2. **点击我的信息，您可以复制后自行选择添加至您的友链**
<!-- endtab -->

<!-- tab 我的信息 @fas fa-id-card -->
```yaml
- name: CC康纳百川
  link: https://blog.ccknbc.cc
  avatar: https://cdn.jsdelivr.net/gh/ccknbc-backup/cdn/logo/ccknbc.png
  favicon: https://cdn.jsdelivr.net/gh/ccknbc-backup/cdn/logo/favicon.png
  descr: 一个无趣的人
  # 以下若有可配置
  # 边框大小 默认为0 
  width: 0px
  # 边框样式 默认 solid
  style: solid
  # 边框颜色 默认淡蓝色 #49b1f5
  color: "#fddb92"
  # 自动旋转 可选值 flash（闪现） link_custom（单色呼吸灯） link_custom1（彩色呼吸灯）
  custom: link_custom1
  # 动画时长设定，默认为0
  time: 4s
  # name的颜色
  namecolor: "#8fbc8f"
  # descr的颜色
  descolor: "#49b1f5"
  # 背景颜色      
  background: "#fddb92"
  # 鼠标悬停旋转角度
  rotate: 360deg
  # 自动旋转 latuo左旋转 rauto右旋转
  autorotate: "lauto"
  # 旋转的周期（时长）
  autotime: 2s
  #移除此链接的权重 0为否 非0为移除
  remove: 0
```
<!-- endtab -->

{% endtabs %}

<script src="https://cdn.jsdelivr.net/npm/jquery@latest/dist/jquery.min.js"></script><script src="https://unpkg.com/ifriend/dist/index.js"></script>

<script>
    $('.flink').prepend('<div id="friend1"></div>')
    new Friend({
        el: "#friend1",
        owner: "ccknbc",
        repo: "link",
        direction_sort: "asc",
        sort_container: [],
        labelDescr: {
            大佬们: "<span style='color:lightgreen;'>这是一群<b>大佬</b>哦！</span>",
            小伙伴们: "<span style='color:skyblue;'>这是我的小伙伴们</span>",
            菜鸡们: "<span style='color:red;'>这是一群菜鸡哦！</span>",
            备用站: "",
        },
    });
</script>