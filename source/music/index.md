---
title: 音乐
description: CC的部落格 音乐界面
top_img: false
aside: false
comments: false
translate_title: music
date: 2020-11-08 15:29:33
---

<div class="artplayer-app" style="width:100%;height:480px;center"></div>
<script data-pjax js-pjax src="https://cdn.jsdelivr.net/npm/artplayer/dist/artplayer.js"></script>
<script>
    var art = new Artplayer({
    container: '.artplayer-app',
    url: 'https://file.nmb.show/down.php/86c301fbc6183f50fb0487e13e5a1f64.mp4',
    title: '夜不能寐',
    poster: 'https://img.gejiba.com/images/369f87086640f331b66b954f4f893943.jpg',
    volume: 1,
    isLive: false,
    muted: false,
    autoplay: false,
    pip: true,
    autoSize: true,
    autoMini: true,
    screenshot: false,
    setting: true,
    loop: false,
    flip: true,
    rotate: true,
    playbackRate: true,
    aspectRatio: true,
    fullscreen: true,
    fullscreenWeb: true,
    subtitleOffset: true,
    miniProgressBar: true,
    localVideo: true,
    localSubtitle: true,
    networkMonitor: true,
    mutex: true,
    light: true,
    backdrop: true,
    theme: '#8FBC8F',
    lang: navigator.language.toLowerCase(),
    subtitle: {
        url: 'https://cdn.jsdelivr.net/gh/ccknbc-backup/photos/blog/2020-11-09~10_24_06.srt',
        style: {
            color: '#4CAF50',
            'font-size': '20px',
        },
        encoding: 'utf-8',
        bilingual: true,
    },
});
</script>

<br><div class="btn-center"><div center>{% btn 'https://tv.line.me/15101475',LINETVTHAILAND版权所有,far fa-copyright,green larger %}</div>

<div class="btn-center">
{% btn 'https://www.joox.com/th/single/I6Sexy9JkQ+0PXMj94lBdg==',JOOXTHAILAND版权所有,far fa-copyright,green larger %}{% btn 'https://www.joox.com/th/single/I6Sexy9JkQ+0PXMj94lBdg==',歌词由CC康纳百川制作,far fa-copyright,green larger %}</div>

{% mmedia "meting" "server=netease"	"type=artist" "id=12838890" %}







