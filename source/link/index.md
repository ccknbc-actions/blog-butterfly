---
title: CC的小伙伴们
date: 2020-06-04 22:17:49
type: link
comments: false
aside: false
---
{% note success %} <b><font color="#FC625D">添加或申请本站友链请</font> <a href="/links" rel="noopener"><font color="#8FBC8F">👉点击这里👈</font></a></b> {% endnote %}


<script src="https://cdn.jsdelivr.net/npm/jquery@latest/dist/jquery.min.js"></script><script src='https://unpkg.com/ifriend/index.js'></script>

<script>
    $('.flink').prepend('<div id="friend1"></div>')
    if(typeof(Friend)=='undefined'){
        location.href='/friends'
    }
    new Friend({
        el: "#friend1",
        owner: "ccknbc",
        repo: "link",
        direction_sort: "asc",
        sort_container: [],
        labelDescr: {
            大佬们: "<span style='color:light-green;'>这是一群大佬哦！</span>",
            小伙伴们: "",
            菜鸡们: "<span style='color:red;'>这是一群菜鸡哦！</span>",
            备用站: "",
        },
    });
</script>