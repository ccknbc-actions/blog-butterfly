---
title: 背景切换
translate_title: background
date: 2020-12-24 22:13:41
description: CC的部落格 背景切换
aside: false
top_img: false
comments: false
---

<style>
#aside_content .card-widget,#recent-posts>.recent-post-item,.layout_page>div:first-child:not(.recent-posts),.layout_post>#page,.layout_post>#post,.read-mode .layout_post>#post {
    background: var(--light_bg_color)
}

[data-theme=dark] #nav,[data-theme=dark] .layout_page>div:first-child:not(.recent-posts),[data-theme=dark] .layout_post>#post {
    background-color: var(--dark_bg_color)
}
</style>

<script>
// 获取标签
// 全局背景div
var web_bg = document.getElementById("web_bg");
// 公共父级
var content_inner = document.getElementById("content-inner");
// 获取Cookies
// 透明度
var opacity = Cookies.get("opacity");
// 背景
var bg = Cookies.get("bg");
// 动画
var animation = Cookies.get("animation");
// 背景类型
var type = Cookies.get("type");
// 声明遍历 用于记录当前color
// 设置背景
if (bg) {
  web_bg.style.background = bg;
  web_bg.setAttribute("data-type", type);
  if (animation) {
    web_bg.style.animation = animation;
  }
}
function setColor(opacity) {
  // style="--light_bg_color: rgb(255, 255, 255,.3);--dark_bg_color: rgba(18,18,18,.2);"
  var light_bg_color = "--light_bg_color: rgb(255, 255, 255," + opacity + ");";
  var dark_bg_color = "--dark_bg_color: rgba(18,18,18," + opacity + ");";
  content_inner.setAttribute("style", light_bg_color + dark_bg_color);
}
setColor(opacity);
</script>

<style>@keyframes gradientBG{0%{background-position: 0% 50%;}50%{background-position: 100% 50%;}100% {background-position: 0% 50%;}}#rightside{display:none;}</style>

> <center>这个页面是用来测试渐变背景的效果，以及不同透明度（待修复）的效果（偷的<a href="https://www.antmoe.com/posts/a811d614/index.html#%E8%83%8C%E6%99%AF%E8%AE%BE%E7%BD%AE%E9%A1%B5"><b>小康大佬</b></a>的）<br><a onClick="javascript :history.back(-1);"> <b>返回</b></a></center>

## 透明度调节

<center style="margin-bottom:20px" id="opt">
<a style="margin-bottom:10px" href="#" class="far fa-hand-point-down fa-fw" data-opacity="0" data-pjax data-state="">&nbsp;透明度&nbsp;0</a> &nbsp;
<a style="margin-bottom:10px" href="#" class="far fa-hand-point-down fa-fw" data-opacity="0.1" data-pjax data-state="">&nbsp;透明度&nbsp;0.1</a> &nbsp;
<a style="margin-bottom:10px" href="#" class="far fa-hand-point-down fa-fw" data-opacity="0.2" data-pjax data-state="">&nbsp;透明度&nbsp;0.2</a> &nbsp;
<a style="margin-bottom:10px" href="#" class="far fa-hand-point-down fa-fw" data-opacity="0.3" data-pjax data-state="">&nbsp;透明度&nbsp;0.3</a> &nbsp;
<a style="margin-bottom:10px" href="#" class="far fa-hand-point-down fa-fw" data-opacity="0.4" data-pjax data-state="">&nbsp;透明度&nbsp;0.4</a> &nbsp;
<a style="margin-bottom:10px" href="#" class="far fa-hand-point-down fa-fw" data-opacity="0.5" data-pjax data-state="">&nbsp;透明度&nbsp;0.5</a> &nbsp;
<a style="margin-bottom:10px" href="#" class="far fa-hand-point-down fa-fw" data-opacity="0.6" data-pjax data-state="">&nbsp;透明度&nbsp;0.6</a> &nbsp;
<a style="margin-bottom:10px" href="#" class="far fa-hand-point-down fa-fw" data-opacity="0.7" data-pjax data-state="">&nbsp;透明度&nbsp;0.7</a> &nbsp;
<a style="margin-bottom:10px" href="#" class="far fa-hand-point-down fa-fw" data-opacity="0.8" data-pjax data-state="">&nbsp;透明度&nbsp;0.8</a> &nbsp;
<a style="margin-bottom:10px" href="#" class="far fa-hand-point-down fa-fw" data-opacity="0.9" data-pjax data-state="">&nbsp;透明度&nbsp;0.9</a> &nbsp;
<a style="margin-bottom:10px" href="#" class="far fa-hand-point-down fa-fw" data-opacity="1" data-pjax data-state="">&nbsp;透明度&nbsp;1</a></center>

## 背景调节

<div id='demo_style' style='text-align:center;margin:0 auto;'>

### 渐变类

<div data-type="photo" class='bg_test' style="display:inline-block;width: 200px;height:200px;background: url(&quot;https://ae01.alicdn.com/kf/H5662031fbf344418aa2c8bf74c68826eV.png&quot;),linear-gradient(45deg, #6dd0f2 15%, #f59abe 85%);text-align: center;line-height: 200px;margin-bottom:5px;cursor: pointer;">粉蓝色有图片</div>

<div data-type="color" class='bg_test' style="display:inline-block;width: 200px;height:200px;background: linear-gradient(45deg, #6dd0f2 15%, #f59abe 85%);text-align: center;line-height: 200px;cursor: pointer;">粉蓝色无图片</div>

<div data-type="color" class='bg_test' style="display:inline-block;width: 200px;height:200px;background: linear-gradient(102.7deg,#fddaff 8.2%,#dfadfc 19.6%,#adcdfc 36.8%,#adfcf4 73.2%,#caf8d0 90.9%);text-align: center;line-height: 200px;cursor: pointer;">美美哒渐变</div>

<div data-type="color" class='bg_test' style="display:inline-block;width: 200px;height:200px; background: linear-gradient(90deg,rgba(247,149,51,.1) 0,rgba(243,112,85,.1) 15%,rgba(239,78,123,.1) 30%,rgba(161,102,171,.1) 44%,rgba(80,115,184,.1) 58%,rgba(16,152,173,.1) 72%,rgba(7,179,155,.1) 86%,rgba(109,186,130,.1) 100%);text-align: center;line-height: 200px;cursor: pointer;">小康同款</div>

<div data-type="color" class='bg_test' style="display:inline-block;width: 200px;height:200px; background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);    background-size: 400% 400%;animation: gradientBG 8s ease infinite;text-align: center;line-height: 200px;cursor: pointer;">动态渐变</div>

<div data-type="color" class='bg_test' style="display:inline-block;width: 200px;height:200px; background: linear-gradient(to right bottom, rgb(0, 255, 240), rgb(92, 159, 247) 40%, rgb(211, 34, 255) 80%);text-align: center;line-height: 200px;cursor: pointer;">紫蓝色渐变</div>

<div data-type="color" class="bg_test" style="display:inline-block;width:200px;height:200px;background:linear-gradient(to bottom right,#fbd255,#fb55f9,#55b3fb,#fb555c);text-align:center;line-height:200px;cursor:pointer">花里胡哨</div>


<div data-type="color" class='bg_test' style="display:inline-block;width: 200px;height:200px; background: linear-gradient(135deg,#fff1eb,#ace0f9);text-align: center;line-height: 200px;cursor: pointer;">CC同款</div>

<div data-type="color" class="bg_test" style="display:inline-block;width:200px;height:200px;background:linear-gradient(to left bottom,#ffc0b2 0,#b2ffc3 100%);text-align:center;line-height:200px;cursor:pointer">红绿色渐变</div>

<div data-type="color" class="bg_test" style="display:inline-block;width:200px;height:200px;background:linear-gradient(to left bottom,#b2f7ff 0,#b2d1ff 100%);text-align:center;line-height:200px;cursor:pointer">蓝色渐变</div>

<div data-type="color" class="bg_test" style="display:inline-block;width:200px;height:200px;background:linear-gradient(to left bottom,#ffe8b2 0,#b2d4ff 100%);text-align:center;line-height:200px;cursor:pointer">蓝黄色渐变</div>

<div data-type="color" class="bg_test" style="display:inline-block;width:200px;height:200px;background:linear-gradient(to left bottom,#ffdbb2 0,#f2ffb2 100%);text-align:center;line-height:200px;cursor:pointer">红黄色渐变</div>

<div data-type="color" class='bg_test' style="display:inline-block;width: 200px;height:200px; background: linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%);text-align: center;line-height: 200px;cursor: pointer;">CC备用1</div>

<div data-type="color" class='bg_test' style="display:inline-block;width: 200px;height:200px; background: linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%);text-align: center;line-height: 200px;cursor: pointer;">CC备用2</div>

<div data-type="color" class='bg_test' style="display:inline-block;width: 200px;height:200px; background: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);text-align: center;line-height: 200px;cursor: pointer;">CC备用3</div>

<div data-type="color" class='bg_test' style="display:inline-block;width: 200px;height:200px; background: linear-gradient(-225deg, #7085B6 0%, #87A7D9 50%, #DEF3F8 100%);text-align: center;line-height: 200px;cursor: pointer;">页脚现用</div>

### 渐变加图片类

<div data-type="photo" class='bg_test' style="display:inline-block;width: 200px;height:200px; background: linear-gradient(60deg, rgba(255, 165, 150, 0.5) 5%, rgba(0, 228, 255, 0.35)), url(https://ae01.alicdn.com/kf/H18a4b998752a4ae68b8e85d432a5aef0l.png),url(https://ae01.alicdn.com/kf/H21b5f6b8496141a1979a33666e1074d9x.jpg)0% 0% / cover;text-align: center;line-height: 200px;cursor: pointer; background-size: cover;">紫蓝色渐变</div>

### 图片类

<div data-type="photo" class="bg_test" style="display:inline-block;width:200px;height:200px;background:url(https://ae01.alicdn.com/kf/H97c9c76cdd0642fabcb6f57671022a3bQ.png);text-align:center;line-height:200px;cursor:pointer;background-size:cover">一款渐变类图片</div>

<div data-type="photo" class='bg_test' style="display:inline-block;width: 200px;height:200px; background: url(https://area.sinaapp.com/bingImg/);text-align: center;line-height: 200px;cursor: pointer; background-size: cover;">必应壁纸</div>

<div data-type="photo" class='bg_test' style="display:inline-block;width: 200px;height:200px; background: url(https://api.zylearning.top/api/wallpaper?lx=fj);text-align: center;line-height: 200px;cursor: pointer; background-size: cover;">随机风景图源1</div>

<div data-type="photo" class='bg_test' style="display:inline-block;width: 200px;height:200px; background: url(https://api.ixiaowai.cn/gqapi/gqapi.php);text-align: center;line-height: 200px;cursor: pointer; background-size: cover;">随机风景图源2</div>

<div data-type="photo" class='bg_test' style="display:inline-block;width: 200px;height:200px; background: url(https://api.zylearning.top/api/wallpaper?lx=dm);text-align: center;line-height: 200px;cursor: pointer; background-size: cover;">随机动漫图</div>

<div data-type="photo" class='bg_test' style="display:inline-block;width: 200px;height:200px; background: url(https://api.zylearning.top/api/wallpaper?lx=dw);text-align: center;line-height: 200px;cursor: pointer; background-size: cover;">随机动物图</div>

<div data-type="photo" class='bg_test' style="display:inline-block;width: 200px;height:200px; background: url(https://api.zylearning.top/api/wallpaper?lx=4k);text-align: center;line-height: 200px;cursor: pointer; background-size: cover;">随机4K</div>

<div data-type="photo" class='bg_test' style="display:inline-block;width: 200px;height:200px; background: url(https://api.zylearning.top/api/wallpaper);text-align: center;line-height: 200px;cursor: pointer; background-size: cover;">随缘类型随机图</div>

<script>var article_container=document.getElementById("demo_style"),opt=document.getElementById("opt");article_container.addEventListener("click",function(e){var t=e.target;"DIV"===t.nodeName&&"bg_test"===t.className&&(web_bg.style.background=t.style.background,web_bg.style.animation=t.style.animation),Cookies.set("bg",t.style.background,{expires:1}),Cookies.set("animation",t.style.animation,{expires:1}),Cookies.set("type",t.getAttribute("data-type"),{expires:1})}),opt.addEventListener("click",function(e){var t=e.target;if("A"===t.nodeName){var a=t.getAttribute("data-opacity");if(a){Cookies.set("opacity",a,{expires:1});var n="--light_bg_color: rgb(255, 255, 255,"+a+");",i="--dark_bg_color: rgba(18,18,18,"+a+");";document.getElementById("content-inner").setAttribute("style",n+i)}}e.preventDefault()});</script>