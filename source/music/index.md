---
title: 音乐
description: CC的部落格 音乐页面
top_img: false
aside: false
comments: false
translate_title: music
subtitle: Music
date: 2020-11-08 15:29:33
updated: 2023-02-19 13:12:58
---
<!-- {% note green 'fa-solid fa-dice-three' simple %}Three Man Down{% endnote %}
{% mmedia "meting" "auto=https://music.163.com/#/artist?id=12838890" "theme:#8fbc8f" %}
{% note info simple %}2022年8月22日 Ohm宣布因个人原因退出乐队，"TMD"因此也成为了缺少贝斯手的乐队{% endnote %}

{% note pink 'fa-solid fa-smile-wink' simple %}The TOYS{% endnote %}
{% mmedia "meting" "auto=https://music.163.com/#/artist?id=12322107" "theme:#8fbc8f" %} -->

<style>
.page-title {
  display: none;
}
#page:has(#anMusic-page) {
  border: 0;
  box-shadow: none !important;
  padding: 0 !important;
  background: transparent !important;
}
#an_music_bg {
  display: none;
  filter: blur(63px);
  opacity: 0.6;
  position: fixed;
  z-index: -999;
  background-attachment: local;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 200%;
  height: 200%;
  top: -50%;
  left: -50%;
  transform: rotate(0deg);
}
body:has(#anMusic-page) #an_music_bg {
  display: block;
}

body:has(#anMusic-page) {
  background: rgb(13, 13, 13);
}

#anMusic-page meting-js .aplayer {
  display: flex;
  flex-direction: row-reverse;
  background: rgba(0, 0, 0, 0);
  border: none;
  box-shadow: none;
}

body:has(#anMusic-page) #web_bg {
  display: none;
}
body:has(#anMusic-page) #footer,
body:has(#anMusic-page) #nav-music {
  display: none;
}

#anMusic-page .aplayer-body {
  width: 40%;
  height: 75vh;
}

#anMusic-page ol > li:hover {
  background: #FFFFFF33;
  border-radius: 6px;
}
#anMusic-page .aplayer-pic {
  float: none;
  width: 180px;
  height: 180px;
  border-radius: 12px;
  margin: auto;
  left: 0;
  right: 0;
}

#anMusic-page .aplayer-info {
  margin: 0 20px 0 20px;
  border-bottom: none;
}

#anMusic-page .aplayer-info .aplayer-music {
  text-align: center;
  height: auto;
  margin: 15px;
}

#anMusic-page .aplayer-info .aplayer-music .aplayer-author,
#anMusic-page .aplayer-info .aplayer-music .aplayer-title {
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
}

#anMusic-page .aplayer-info .aplayer-lrc {
  height: 800%;
  margin-top: 80px;
  mask-image: linear-gradient(to bottom, #000, #000, #000, #000, #000, #000, #000, #000, #000, #000, #0000, #0000);
}
#anMusic-page .aplayer-info .aplayer-lrc p {
  font-size: 14px;
  color: #fff;
}
#anMusic-page .aplayer .aplayer-lrc:after,
#anMusic-page .aplayer .aplayer-lrc:before {
  display: none;
}

/* 控制器 */
#anMusic-page .aplayer-info .aplayer-controller {
  position: fixed;
  max-width: 1500px;
  margin: auto;
  left: 0;
  right: 0;
  bottom: 50px;
}
#anMusic-page .aplayer-info .aplayer-controller .aplayer-bar-wrap {
  margin: 0 160px 0 150px;
}
#anMusic-page .aplayer-info .aplayer-controller .aplayer-played {
  background: #FFFFFFB3 !important;
}
#anMusic-page .aplayer-info .aplayer-controller .aplayer-thumb {
  -webkit-transform: none;
  transform: none;
  background: #fff !important;
}
#anMusic-page .aplayer-info .aplayer-time .aplayer-icon-back,
#anMusic-page .aplayer-info .aplayer-time .aplayer-icon-forward,
#anMusic-page .aplayer-info .aplayer-time .aplayer-icon-play {
  display: inline;
  position: fixed;
}
#anMusic-page .aplayer-info .aplayer-time {
  position: absolute;
  width: 100%;
  bottom: 21px;
  height: 0;
  display: flex;
  justify-content: flex-end;
}
#anMusic-page .aplayer-info .aplayer-time .aplayer-time-inner {
  margin-right: 18px;
  margin-top: -8px;
}
#anMusic-page .aplayer-info .aplayer-time .aplayer-icon-back {
  position: absolute;
  left: 0;
}
#anMusic-page .aplayer-info .aplayer-time .aplayer-icon-play {
  position: absolute;
  left: 40px;
}
#anMusic-page .aplayer-info .aplayer-time .aplayer-icon-forward {
  position: absolute;
  left: 80px;
}

#anMusic-page .aplayer-info .aplayer-time .aplayer-icon {
  width: 2rem;
  height: 2rem;
  margin-left: 15px;
}

#anMusic-page .aplayer-info .aplayer-time .aplayer-icon-menu {
  display: none;
}

#anMusic-page .aplayer-info .aplayer-time .aplayer-icon path {
  fill: #FFFFFFB3;
  opacity: 0.8;
}

#anMusic-page .aplayer-list {
  width: 60%;
  max-height: none !important;
  height: 100%;
}
#anMusic-page ol {
  max-height: 75vh !important;
  padding-right: 25px;
}
#anMusic-page ol > li {
  border-top: 1px solid transparent;
  font-size: 14px;
}
#anMusic-page ol > li.aplayer-list-light {
  background: rgb(255 255 255 / 20%);
  border-radius: 6px;
}

#anMusic-page ol > li span {
  color: #FFFFFFB3;
}

#anMusic-page ol > li.aplayer-list-light .aplayer-list-cur {
  display: none;
}
#anMusic-page ol > li span.aplayer-list-author {
  opacity: 0.6;
}

/* 导航栏 */
.page:has(#anMusic-page) #nav {
  backdrop-filter: none !important;
  background: 0 0 !important;
  border-bottom: none !important;
}

.page:has(#anMusic-page) #page-header.not-top-img #nav a,
.page:has(#anMusic-page) #page-header #nav .back-home-button {
  color: #FFFFFFB3;
}

body:has(#anMusic-page) .s-sticker div {
  color: #FFFFFFB3 !important;
}

body:has(#anMusic-page) .aplayer .aplayer-info .aplayer-controller .aplayer-time .aplayer-icon.aplayer-icon-loop {
  margin-right: 15px;
}

[data-theme="dark"] .page:has(#anMusic-page) #page-header:before {
  background-color: transparent;
}

/* **** 移动端样式 ***** */
@media screen and (max-width: 768px) {
  body:has(#anMusic-page) #rightside {
    display: none;
  }
  body:has(#anMusic-page) #content-inner,
  body:has(#anMusic-page) #page {
    z-index: auto;
  }
  /* 歌曲列表 */
  #anMusic-page .aplayer-list {
    position: fixed;
    z-index: 1002;
    width: 100%;
    bottom: -76%;
    left: 0;
    background: var(--sidebar-bg);
    height: auto;
    border-radius: 15px 15px 0px 0px;
    padding: 15px 0px;
  }
  #anMusic-page .aplayer-list.aplayer-list-hide {
    bottom: 0% !important;
  }
  #anMusic-page ol {
    max-height: 60vh !important;
    padding-right: 0px;
  }
  #anMusic-page ol > li {
    display: flex;
    margin: 0 10px;
  }
  #anMusic-page ol > li span {
    color: #FFFFFFB3;
  }
  #anMusic-page ol > li span.aplayer-list-title {
    width: 30%;
  }
  #anMusic-page ol > li.aplayer-list-light {
    background: #33a673;
    padding: 5px 20px;
    border-radius: 10px;
  }
  #anMusic-page ol > li.aplayer-list-light span {
    color: #fff;
  }
  #anMusic-page ol > li span.aplayer-list-title {
    max-width: 55%;
    width: auto;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    overflow: hidden;
    -webkit-box-orient: vertical;
  }
  #anMusic-page ol > li span.aplayer-list-author {
    position: absolute;
    right: 10px;
    width: auto;
    max-width: 35%;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    overflow: hidden;
    -webkit-box-orient: vertical;
  }
  #anMusic-page ol > li.aplayer-list-light span.aplayer-list-author {
    right: 15px;
  }
  /* 歌词信息 */
  #anMusic-page .aplayer-body {
    width: 100%;

    position: fixed;
    margin: auto;
    left: 0;
    right: 0;
    top: 100px;
  }
  #anMusic-page .aplayer-info .aplayer-lrc {
    margin-top: 40px;
    height: auto;
    max-height: 200%;
    min-height: 100%;
    mask-image: linear-gradient(to bottom, #000, #000, #000, #000, #0000, #0000);
  }
  #anMusic-page .aplayer-info .aplayer-lrc p.aplayer-lrc-current {
    color: #33a673;
  }
  /* 控制按键和进度条 */
  #anMusic-page .aplayer-info .aplayer-controller {
    width: 100%;
    bottom: 100px;
  }
  #anMusic-page .aplayer-info .aplayer-controller .aplayer-bar-wrap {
    margin: 0 30px;
  }
  #anMusic-page .aplayer-info .aplayer-time {
    bottom: -40px;
  }
  #anMusic-page .aplayer-info .aplayer-time .aplayer-time-inner {
    position: absolute;
    width: 100%;
    margin-right: 0;
    margin-top: -33px;
  }
  #anMusic-page .aplayer-info .aplayer-time .aplayer-time-inner .aplayer-dtime {
    position: absolute;
    right: 30px;
  }
  #anMusic-page .aplayer-info .aplayer-time .aplayer-time-inner .aplayer-ptime {
    position: absolute;
    left: 35px;
  }
  #anMusic-page .aplayer-info .aplayer-time .aplayer-icon-back {
    margin: auto;
    right: 110px;
  }
  #anMusic-page .aplayer-info .aplayer-time .aplayer-icon-play {
    margin: auto;
    right: 0;
    left: 0;
  }
  #anMusic-page .aplayer-info .aplayer-time .aplayer-icon-forward {
    margin: auto;
    left: 110px;
    right: 0;
  }
  #anMusic-page .aplayer-info .aplayer-time .aplayer-icon-order {
    position: absolute;
    left: 22px;
  }
  #anMusic-page .aplayer-info .aplayer-time .aplayer-icon-loop {
    position: absolute;
    right: 25px;
  }
  #anMusic-page .aplayer-info .aplayer-time .aplayer-icon-menu {
    display: inline;
    position: absolute;
    right: 25px;
    top: -90px;
  }
  #anMusic-page .aplayer-volume-bar-wrap {
    bottom: 0px;
    right: 7px;
  }
  #anMusic-page .aplayer .aplayer-info .aplayer-controller .aplayer-volume-wrap {
    left: -66px;
  }
}
</style>

<script>
var anzhiyu = {
  // 音乐节目切换背景
  changeMusicBg: function (isChangeBg = true) {
    if (window.location.pathname != "/music/") {
      return;
    }
    const anMusicBg = document.getElementById("an_music_bg")

    if (isChangeBg) {
      // player listswitch 会进入此处
      const musiccover = document.querySelector("#anMusic-page .aplayer-pic");
      anMusicBg.style.backgroundImage = musiccover.style.backgroundImage;
    } else {
      // 第一次进入，绑定事件，改背景
      let timer = setInterval(()=>{
        const musiccover = document.querySelector("#anMusic-page .aplayer-pic");
        // 确保player加载完成
        console.info(anMusicBg);
        if (musiccover) {
          clearInterval(timer)
          anMusicBg.style.backgroundImage = musiccover.style.backgroundImage;
          // 绑定事件
          anzhiyu.addEventListenerChangeMusicBg();

          // 暂停nav的音乐
          if (document.querySelector("#nav-music meting-js") && !document.querySelector("#nav-music meting-js").paused){
            anzhiyu.musicToggle()
          }
        }
      }, 100)
    }
  },
  addEventListenerChangeMusicBg: function () {
    const anMusicPage = document.getElementById("anMusic-page");
    const aplayerIconMenu = anMusicPage.querySelector(".aplayer-info .aplayer-time .aplayer-icon-menu");

    anMusicPage.querySelector("meting-js").aplayer.on('loadeddata', function () {
      anzhiyu.changeMusicBg();
      console.info('player loadeddata');
    });

    aplayerIconMenu.addEventListener("click", function () {
      document.getElementById('menu-mask').style.display = "block";
      document.getElementById('menu-mask').style.animation = "0.5s ease 0s 1 normal none running to_show";
    })

    document.getElementById('menu-mask').addEventListener("click", function () {
      if (window.location.pathname != "/music/") return;
      anMusicPage.querySelector('.aplayer-list').classList.remove("aplayer-list-hide");
    })
  },
}

// 调用
anzhiyu.changeMusicBg(false);
</script>

<link rel="stylesheet" href="https://jsd.cdn.zzko.cn/npm/aplayer/dist/APlayer.min.css" media="print" onload='this.media="all"'>
<script src="https://jsd.cdn.zzko.cn/npm/aplayer/dist/APlayer.min.js"></script>
<!-- <script src="https://jsd.cdn.zzko.cn/npm/butterfly-extsrc/metingjs/dist/Meting.min.js"></script> -->
<script src="https://jsd.cdn.zzko.cn/npm/meting/dist/Meting.min.js"></script>

<div id="anMusic-page">
<meting-js id="12838890" server="netease" type="artist" mutex="true" preload="auto" order="list"></meting-js>
</div>

<!-- <div id="eoMusic-page">
    <div class="aplayer aplayer-withlrc aplayer-withlist" id="eo-music" data-id="12838890" data-server="netease" data-type="artist" data-fixed="false" data-autoplay="false">
    </div>
</div> -->