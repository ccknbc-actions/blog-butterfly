---
title: 短文
top_img: false
comments: false
date: 2021-03-14 20:00:00
updated: 2021-09-11 20:00:00
translate_title: essay
aside: false
description: CC的部落格 即刻短文页面
---
<div class="js-pjax" id="tip" style="text-align:center;">ipseak加载中</div>
<div class="js-pjax" id="ispeak"></div>
<link
  rel="stylesheet"
  href="https://cdn.staticfile.org/highlight.js/10.6.0/styles/atom-one-dark.min.css"
/>
<link
  rel="stylesheet"
  href="https://gcore.jsdelivr.net/npm/ispeak/style.css"
/>

<style>
  #article-container .D-avatar {
    margin: 0 10px 0 0;
  }
  .D-footer {
    display: none;
  }
</style>
<script src="https://cdn.staticfile.org/highlight.js/10.6.0/highlight.min.js"></script>
<script src="https://cdn.staticfile.org/marked/2.0.0/marked.min.js"></script>
<script src="https://gcore.jsdelivr.net/npm/discuss/dist/Discuss.js"></script>
<script src="https://gcore.jsdelivr.net/npm/ispeak/ispeak.umd.js"></script>
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
        api: 'https://kkapi.ccknbc.vercel.app/',
        author: '621cd42048c49d6f96787626',
        pageSize: 10,
        loading_img: 'https://gcore.jsdelivr.net/gh/ccknbc-backup/photos/blog/2021-03-08~15-13-15.gif',
        speakPage: '/essay',
        githubClientId: 'Iv1.f333c02f5f6676e8',
        initCommentName: 'Discuss',
        initCommentOptions: {
          serverURLs: 'https://discuss.ccknbc.vercel.app/'
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
