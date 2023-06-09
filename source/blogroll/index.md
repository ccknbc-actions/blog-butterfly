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
<script src='https://cdn1.tianli0.top/npm/butterfly-friend/butterfly-friend.umd.js'></script>
<link rel="stylesheet" href='https://cdn1.tianli0.top/npm/butterfly-friend/style.css'>
<script>
document.querySelector('.flink').insertAdjacentHTML('afterbegin',"<div id='friend1' class='js-pjax'></div>")
xkFriend.init({
  el: '#friend1', // 挂载容器
  api: [
    'https://blogroll.ccknbc.cc/blogroll.json'
  ], // 你的json链接列表，可以是多个。
  loading_img: 'https://cdn1.tianli0.top/gh/ccknbc-backup/photos/blog/2021-03-08~15-13-15.gif', // 加载中的图片
  fail_img: 'https://cdn1.tianli0.top/gh/ccknbc-backup/photos/blog/2021-03-08~15-13-15.gif' // 加载失败的图片
})
</script>
</div>

{% tabs links%}

<!-- tab 申请友链@fa-solid fa-check-circle -->

{% note success flat %}快速申请友链请前往{% btn 'https://github.com/ccknbc-forked/blogroll/',GitHub(推荐),fa-brands fa-github,outline green larger %} 按照提示提交 PR 即可！如需修改可
{% btn '#post-comment',给 CC 留言,fa-solid fa-comments,outline green smaller %}
或再次 PR  {% endnote %}

<p style="padding:0 0 0 .8rem">
    请<strong>勾选</strong>你符合的条件，满足所有条件才可评论申请：
</p>
<div id="friendlink_checkboxs" style="padding:0 0 0 1.6rem">
    <p>
        <label class="checkbox">
            <input type="checkbox" id="checkbox1" onclick="checkForm()">
            我已添加  <b>CC的部落格</b>的友情链接
        </label>
    </p>
    <p>
        <label class="checkbox">
            <input type="checkbox" id="checkbox2" onclick="checkForm()">
            我的链接主体为<b>个人</b>，网站类型为<b>博客</b>
        </label>
    </p>
    <p>
        <label class="checkbox">
            <input type="checkbox" id="checkbox3" onclick="checkForm()">我的网站现在可以在中国大陆区域正常访问
        </label>
    </p>
    <p>
        <label class="checkbox">
            <input type="checkbox" id="checkbox4" onclick="checkForm()">网站内容符合中国大陆法律法规
        </label>
    </p>
    <p>
        <label class="checkbox">
            <input type="checkbox" id="checkbox5" onclick="checkForm()">我的网站可以在1分钟内加载完成首屏
        </label>
    </p>
</div>

<script>
    var walineSubmit = document.getElementsByClassName("wl-comment")[0];
    if (walineSubmit) {
        walineSubmit.style.opacity = "0";
    }
    function checkForm() {
        var checkbox1 = document.getElementById("checkbox1");
        var checkbox2 = document.getElementById("checkbox2");
        var checkbox3 = document.getElementById("checkbox3");
        var checkbox4 = document.getElementById("checkbox4");
        var checkbox5 = document.getElementById("checkbox5");
        var walineSubmit = document.getElementsByClassName("wl-comment")[0];
        if (checkbox1.checked && checkbox2.checked && checkbox3.checked && checkbox4.checked && checkbox5.checked) {
            walineSubmit.style.opacity = "1";
            walineSubmit.style.height = "auto";
            walineSubmit.style.overflow = "auto";
            var input = document.getElementsByClassName("wl-editor")[0];
            let evt = new Event('input');
            input.dispatchEvent(evt);
            input.value = '昵称: \n博客链接: \n头像链接: \n描述: \n';
            input.setSelectionRange(-1, -1);
        } else {
            walineSubmit.style.opacity = "0";
            walineSubmit.style.height = "0";
            walineSubmit.style.overflow = "hidden";
        }
    }
</script>

<style>
    .wl-comment {
        opacity: 0;
        height: 0;
        transition: opacity .5s, height .5s;
        overflow: hidden;
    }
</style>

<!-- {% link 顺便看看友链截图列表，您可复制使用啦, https://cdn1.tianli0.top/gh/ccknbc-actions/blogroll@webp/, https://cdn1.tianli0.top/www.jsdelivr.com/c903573129ce0afdbc8b006baf86dba514615495/img/logo-horizontal.svg %} -->

<!-- {% ghcard ccknbc-actions/blogroll, theme=vue %}  -->

<!-- endtab -->

<!-- tab 我的信息 @fa-solid fa-id-card -->

主要信息
```yaml
name: CC康纳百川
link: https://blog.ccknbc.cc
avatar: https://cdn1.tianli0.top/gh/ccknbc-backup/cdn/logo/ccknbc.png
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
screenshot: https://cdn1.tianli0.top/gh/ccknbc-actions/blogroll@webp/blog.ccknbc.cc.webp
# screenshot: https://s0.wordpress.com/mshots/v1/https://blog.ccknbc.cc?w=1280&h=960
# screenshot: https://image.thum.io/get/width/1024/crop/768/https://blog.ccknbc.cc
# 帮我选一个适合您站点的截图呗，默认的jsd每天更新
```
完整信息
```yaml
name: CC的部落格
link: https://blog.ccknbc.cc
avatar: https://cdn1.tianli0.top/gh/ccknbc-backup/cdn/logo/ccknbc.png
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
screenshot: https://cdn1.tianli0.top/gh/ccknbc-actions/blogroll@webp/blog.ccknbc.cc.webp
```

<!-- endtab -->

{% endtabs %}