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

<script src='https://cdn.jsdelivr.net/gh/ccknbc-backup/cdn/js/friend.js'></script>
<script src="https://cdn.jsdelivr.net/gh/ccknbc-backup/cdn/js/blogroll.js"></script>
<script>
    getFriendsScreenShot({
        user:"ccknbc-actions",
        repo:"blogroll",
        branch:"webp",
        suffix:"webp",
        lazyImg: "https://cdn.jsdelivr.net/gh/ccknbc-backup/photos/blog/2020-10-10~13_03_22.webp",
        duration:"5e3" //Snackbar的持续时间: 可选参数(默认5000毫秒)
    })
</script>
<script>
    let fElement = document.createElement("div");
    fElement.id = "friend1";
    document.querySelector(".flink").prepend(fElement);
    new Friend({
        el: "#friend1",
        owner: "ccknbc",
        repo: "link",
        direction_sort: "asc",
        sort_container: ["小嘉专属"],
        labelDescr: {
            大佬们: "这是一群<span style='color:lightgreen;'><b>大佬</b></span>哦",
            小伙伴们: "<span style='color:skyblue;'>这是我的小伙伴们</span>",
            菜鸡们: "<span style='color:red;'>这是一群菜鸡哦！</span>",
            备用站: "还是看关于站点界面吧",
            小嘉专属: "<span style='color:#F5F5A3;'><b>小嘉</b></span>，这个人啊，说不清",
            菜鸡: "这其实是个<span style='color:red;'><b>大佬</b></span>，不要相信他说的话就对了",
        },
    });
</script>

{% tabs links%}
<!-- tab 申请须知@fas fa-check-circle -->

**快速申请友链请{% btn 'https://gitee.com/ccknbc/link/',点击这里,far fa-hand-point-right,outline green larger %}按照`README`和`模板`提交`Issue`即可**
1. **点击我的信息，您可以复制后自行选择添加至您的友链**
2. **鼠标悬停，可显示站点`预览图`**
3. **每周`定时更新`，因此如果您想立即看到友链截图，可在审核通过后前往仓库点一下`star`**
4. **若网站截图不显示，请刷新，还有此页有`BUG`**

{% link 友链截图列表, https://cdn.jsdelivr.net/gh/ccknbc-actions/blogroll@webp/, https://cdn.jsdelivr.net/gh/ccknbc-backup/cdn/logo/logo.png %}

{% ghcard ccknbc-actions/blogroll, theme=vue %} 

<!-- endtab -->

<!-- tab 我的信息 @fas fa-id-card -->

```yaml
- name: CC的部落格
  link: https://blog.ccknbc.cc
  avatar: https://cdn.jsdelivr.net/gh/ccknbc-backup/cdn/logo/ccknbc.png
  descr: CC康纳百川
```
以下若有可配置
```yaml
  favicon: https://cdn.jsdelivr.net/gh/ccknbc-backup/cdn/logo/favicon.png
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