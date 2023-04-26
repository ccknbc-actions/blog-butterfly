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
  href="https://cdn1.tianli0.top/npm/highlight.js/styles/atom-one-dark.min.css"
/>
<link
  rel="stylesheet"
  href="https://cdn1.tianli0.top/npm/ispeak/style.css"
/>

<script src="https://cdn1.tianli0.top/npm/highlight.js/highlight.min.js"></script>
<script src="https://cdn1.tianli0.top/npm/marked@v3/marked.min.js"></script>
<script src="https://cdn1.tianli0.top/npm/ispeak/ispeak.umd.js"></script>
<!-- CSS -->
<link
  rel="stylesheet"
  href="https://cdn1.tianli0.top/npm/@waline/client/dist/waline.min.css"
/>
<!-- JS -->
<script src="https://cdn1.tianli0.top/npm/@waline/client/dist/waline.min.js"></script>
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
            login: 'enable',
            dark: 'html[data-theme="dark"]',
            imageUploader: false,
            emoji:
              [
                "https://cdn1.tianli0.top/npm/sticker-heo/Sticker-100/",
                // "https://cdn1.tianli0.top/npm/telegram-gif/Telegram-Gif/",
                // "https://cdn1.tianli0.top/npm/@waline/emojis/tw-emoji/"
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

