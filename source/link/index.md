---
title: CC的小伙伴们
date: 2020-06-04 22:17:49
type: link
comments: false
aside: false
---
{% note success %} <b><font color="#FC625D">添加或申请本站友链请</font> <a href="/links" rel="noopener"><font color="#8FBC8F">👉点击这里👈</font></a></b> {% endnote %}

<link rel="stylesheet" href="https://unpkg.com/ifriend/friend.min.css">

<script src="https://cdn.jsdelivr.net/npm/jquery@latest/dist/jquery.min.js"></script><script src='https://unpkg.com/ifriend/index.js'></script>

<script>
    $('.flink').prepend('<div id="friend1"></div>')
    if(typeof(Friend)=='undefined'){
        location.href='/link'
    }
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