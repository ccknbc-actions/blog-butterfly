---
title: 音乐
description: CC的部落格 音乐页面
top_img: false
aside: false
comments: false
translate_title: music
subtitle: Music
date: 2020-11-08 15:29:33
updated: 2023-06-09 23:13:42
---
<link rel="stylesheet" href="https://cdn1.tianli0.top/npm/aplayer/dist/APlayer.min.css">
<script src="https://cdn1.tianli0.top/npm/aplayer/dist/APlayer.min.js"></script>
<script src="https://cdn1.tianli0.top/npm/@xizeyoupan/meting/dist/Meting.min.js"></script>
<script>var meting_api="https://music.startly.cn/?server=:server&type=:type&id=:id&auth=:auth&r=:r"</script>

<!-- https://music.startly.cn/ 不支持 artist
https://meting.yany.ml/api 不支持 qq音乐 音频
https://geekswg-meting.geekswg.top/api 不支持 qq音乐
https://meting.ccknbc.cc/api 支持 Netease, QQ, YouTube Music, Spotify -->

{% folding green open, Three Man Down × Tilly Birds %}
<!-- {% note green 'fa-solid fa-dice-three' simple %}Three Man Down × Tilly Birds{% endnote %} -->
<meting-js server="netease" type="playlist" id="5457110860" list-folded="true" theme="#8fbc8f">
{% note info simple %}2022年8月22日 Ohm宣布因个人原因退出乐队，"TMD"因此也成为了缺少贝斯手的乐队{% endnote %}
{% endfolding %}

{% folding blue, 王铮亮 %}
<meting-js server="netease" type="playlist" id="7681620447" list-folded="true" theme="#8fbc8f"></meting-js>
{% endfolding %}

{% folding blue, 王铮亮2023“还是爱着”全国巡演（网易云音乐） %}
<meting-js server="netease" type="playlist" id="8448821577" list-folded="true" theme="#8fbc8f">
{% endfolding %}

{% folding blue, 王铮亮2023“还是爱着”全国巡演（QQ音乐） %}
<meting-js server="tencent" type="playlist" id="8913885866" list-folded="true" theme="#8fbc8f">
{% endfolding %}