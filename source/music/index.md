---
title: 音乐
description: CC的部落格 音乐界面
top_img: false
aside: false
comments: false
translate_title: music
date: 2020-11-08 15:29:33
---
### 建议 UA 切换为电脑版观看
{% mmedias "artplayer"  %}
{
  style: 'width:100%;height:500px;max-width:1200px;center',
  url: "https://file.nmb.show/down.php/86c301fbc6183f50fb0487e13e5a1f64.mp4",
  title: "夜不能寐",
  poster: "https://img.maocdn.cn/img/2021/03/03/f8cf7f0e7ef97df7f20da1289eb6608c.jpg",
  theme: "#8FBC8F",
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
  fullscreenWeb: false,
  subtitleOffset: true,
  miniProgressBar: true,
  localVideo: true,
  localSubtitle: true,
  networkMonitor: true,
  mutex: true,
  light: true,
  backdrop: true,
  subtitle: {
    url: "https://cdn.jsdelivr.net/gh/ccknbc-backup/photos/blog/2020-11-09~10_24_06.srt",
    bilingual: false,
    style: {
      color: '#5cb85c'
    }
  },
  thumbnails: {
    url: 'https://img.maocdn.cn/img/2021/03/03/d66c31ee22c75fb85c8a891fc5885379.png',
    number: 60,
    width: 160,
    height: 90,
    column: 10
  },
  highlight: [
    {
      time: 30,
      text: '30秒哦',
    },
    {
      time: 60,
      text: '一分钟咯',
    },
    {
      time: 90,
      text: '90秒哦',
    },
    {
      time: 120,
      text: '两分钟咯',
    },
    {
      time: 240,
      text: '要放完啦',
    },
  ],
  subtitleOffset: true
}
{% endmmedias %}
<br>
{% mmedias "aplayer" "autoplay:false" %}
{
  "volume": 0.8,
  "audio":
  [
    {
      "name": "นอนไม่หลับ(The Remake)",
      "artist": "Three Man Down",
      "url": "https://file.nmb.show/down.php/fc178ad5791961bf520fcfc7e4f0b450.flac",
      "cover": "https://img.maocdn.cn/img/2021/03/03/1000.jpg",
      "lrc": "https://cdn.jsdelivr.net/gh/ccknbc-backup/photos/blog/2020-11-08~21_39_21.lrc",
      "theme": "#8fbc8f"
    }
  ]
}
{% endmmedias %}

{% mmedias "dplayer" "hls:https://cdn.jsdelivr.net/npm/hls.js/dist/hls.min.js" "url:https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"  "pic:https://cdn.jsdelivr.net/gh/ccknbc-backup/photos/blog/2020-10-12~18_03_38.webp" %}
{
  live: true,
  theme: "#8fbc8f",
  volume: 1,
  mutex: true,
  screenshot: true
}
{% endmmedias %}

<br><div class="btn-center"><div center>{% btn 'https://tv.line.me/15101475',LINETVTHAILAND版权所有,far fa-copyright,green larger %}</div>

<div class="btn-center">
{% btn 'https://www.joox.com/th/single/I6Sexy9JkQ+0PXMj94lBdg==',JOOXTHAILAND版权所有,far fa-copyright,green larger %}{% btn 'https://www.joox.com/th/single/I6Sexy9JkQ+0PXMj94lBdg==',歌词由CC康纳百川制作,far fa-copyright,green larger %}</div>

{% mmedia "meting" "auto=https://music.163.com/#/artist?id=12838890" "theme:#8fbc8f" %}