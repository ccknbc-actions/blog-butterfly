---
title: speak
date: 2020-08-26 21:27:12
aside: false
comments: false
---

<link rel="stylesheet" href="https://unpkg.com/ispeak/Speak.css">

<script src="https://cdn.jsdelivr.net/npm/jquery@latest/dist/jquery.min.js"></script>

<center><font size='4px'>🍭 欢迎你的来访</font></center>

<center ><font size='4px'>🍭 这里是CC的Speak页面</font></center>

## 说明

1. 这个页面是一个示例页面，因此你遇到bug，那么属于正常现象
2. 此页逻辑虽然及其简单，但仍存在许多不足。毕竟我只是一个菜鸡😏
3. 代码及样式会在以后优化，毕竟js写的太烂了。可优化空间很大！！
4. Speak仓库[码云](https://gitee.com/ccknbc/speak)
5. 可能会存在无法加载speak的情况，请尝试手动刷新即可！





<div class="is-container"></div><a class="btn-beautify button--animated  left larger prev red" href="#" title="上一页" style='display:none;'><i class="far fa-hand-point-left fa-fw "></i> 上一页 </a><a class="btn-beautify button--animated larger next red" href="#" title="下一页" style="float: right;display: none;"><i class="far fa-hand-point-right fa-fw "></i> 下一页 </a>

<span class="inline-tag grey page" style="position: absolute;transform: translateX(-50%);left: 50%;">Loading...</span>

<script src="https://cdn.jsdelivr.net/gh/sviptzk/StaticFile_HEXO@latest/butterfly/js/SpeakTool.js"></script>
<script>
    if(typeof(Speak)=='undefined'){
        location.href='/butterfly/speak/'
    }
    new Speak({
        nickname:'🦄CC',
        per_page: 3,
        owner: "ccknbc",
        reop: "speak",
        defaultLabelName: "Default",
        defaultLabelColor: "#ffc107",
        emojiLabel: {
            Coder: "🎯",
            日常:"💬",
            Whoiam:'😶',
            想法:"💫",
            TODO:"🚧",
            随便说说:"🎈",
            测试:'👻',
        }
    }); 
</script>