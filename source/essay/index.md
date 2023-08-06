---
title: 短文
top_img: false
comments: false
date: 2021-03-14 20:00:00
updated: 2022-08-27 12:00:00
translate_title: essay
subtitle: Essay
aside: false
description: CC的部落格 即刻短文页面
---
<div class="btn-center">
{% btn 'https://ispeak-biubiu.ccknbc.cc',发表短文,fa-regular fa-message,outline green larger %}
{% btn 'https://kkadmin.ccknbc.cc/#/ispeak/list',管理短文,fa-solid fa-user-pen,outline green larger %}
</div>

<div id="tip" style="text-align:center;">ipseak加载中</div>
<div id="ispeak"></div>
<link
  rel="stylesheet"
  href="https://cdn.chuqis.com/npm/highlight.js/styles/atom-one-dark.min.css"
/>
<link
  rel="stylesheet"
  href="https://cdn.chuqis.com/npm/ispeak/style.css"
/>

<script src="https://cdn.chuqis.com/npm/highlight.js/highlight.min.js"></script>
<script src="https://cdn.chuqis.com/npm/marked@v3/marked.min.js"></script>
<script src="https://cdn.chuqis.com/npm/ispeak/ispeak.umd.js"></script>
<!-- CSS -->
<link
  rel="stylesheet"
  href="https://cdn.chuqis.com/npm/@waline/client/dist/waline.css"
/>
<link rel="stylesheet" href="https://cdn.chuqis.com/npm/@waline/client/dist/waline-meta.css"/>
<!-- JS -->
<script src="https://cdn.chuqis.com/npm/@waline/client/dist/waline.js"></script>
<script>
  var head = document.getElementsByTagName('head')[0]
  var meta = document.createElement('meta')
  meta.name = 'referrer'
  meta.content = 'no-referrer'
  head.appendChild(meta)
  if (ispeak) {
    ispeak
      .init({
        el: '#ispeak',
        api: 'https://kkapi.ccknbc.cc/',
        author: '621cd42048c49d6f96787626',
        pageSize: 10,
        loading_img: 'https://bu.dusays.com/2022/05/01/626e88f349943.gif',
        speakPage: '/essay',
        githubClientId: 'Iv1.f333c02f5f6676e8',
        comment: function (speak) {
          // 4.4.0 之后在此回调函数中初始化评论
          const { _id, title, content } = speak
          const contentSub = content.substring(0, 30)
          Waline.init({
            el: '.ispeak-comment', // 默认情况下 ipseak 生成class为 ispeak-comment 的div
            path: '/essay/speak?q=' + _id, // 手动传入当前speak的唯一id
            title: title || contentSub, // 手动传入当前speak的标题(由于content可能过长，因此截取前30个字符)
            serverURL: 'https://waline.ccknbc.cc',
            pageSize: 10,
            requiredMeta: ["nick", "mail"],
            login: 'force',
            dark: 'html[data-theme="dark"]',
            imageUploader: function (file) {
              let formData = new FormData();
              let headers = new Headers();
              formData.append("file", file);
              formData.append("album_id", "10");
              formData.append("permission", "0");
              headers.append("Authorization", "Bearer 24|o8Crl5y0oK3luyUs17fBxDtAcevk1iiLHVFMNjpA");
              headers.append("Accept", "application/json");
              return fetch("https://www.wmimg.com/api/v1/upload", {
                method: "POST",
                headers: headers,
                body: formData,
              })
                .then((resp) => resp.json())
                .then((resp) => resp.data.links.url);
              },
            turnstileKey: '0x4AAAAAAAECBl27OB5SZrQT',
            emoji:
              [
                "https://cdn.chuqis.com/npm/sticker-heo/Sticker-100/",
                // "https://cdn.chuqis.com/npm/telegram-gif/Telegram-Gif/",
                // "https://cdn.chuqis.com/npm/@waline/emojis/tw-emoji/"
              ]
          })
        }
      })
      .then(function () {
        console.log('ispeak 加载完成')
        document.getElementById('tip').style.display = 'none'
      })
  } else {
    document.getElementById('tip').innerHTML = 'ipseak依赖加载失败！'
  }
</script>

