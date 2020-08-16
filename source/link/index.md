---
title: CC的小伙伴们
date: 2020-06-04 22:17:49
type: link
comments: false
aside: false
---
<div id="friend1"></div>

<script src="https://cdn.jsdelivr.net/npm/jquery@latest/dist/jquery.min.js"></script>

<script src="https://cdn.jsdelivr.net/gh/sviptzk/StaticFile_HEXO@09ca535/butterfly/js/Friend.js"></script>

<script>
    if(typeof(Friend)=='undefined'){
        location.href='/friends'
    }
    new Friend({
        el: '#friend1',
        owner: "ccknbc",
        repo: 'friend',
        labels: 'active',
        direction_sort: "asc",
        labelDescr: {
            小伙伴们: "<span style='color:red;'>我的小伙伴们</span>",
            测试卡: "<span style='color:red;'>嘻嘻嘻</span>",
        }
    })
</script>
