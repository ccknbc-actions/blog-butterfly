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

<!-- <div id="daodao"></div>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ccknbc-backup/cdn/css/daodao.min.css">
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/ccknbc-backup/cdn/js/daodao.min.js" ></script> -->

<!-- <div id="bber"></div>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ccknbc-backup/cdn/css/newbber.min.css">
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/ccknbc-backup/cdn/js/newbber.min.js" ></script> -->

<!-- <div id='speak'></speak> -->
<!-- 使用markdown渲染 -->
<!-- <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/ispeak-bber/ispeak-bber-md.min.js" charset="utf-8" ></script> -->
<!-- 不使用markdown渲染 -->
<!-- <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/ispeak-bber/ispeak-bber.min.js" charset="utf-8" ></script> -->
<!-- 解析微信表情（参考：https://github.com/buddys/qq-wechat-emotion-parser） -->
<!-- <script src="https://cdn.jsdelivr.net/gh/buddys/qq-wechat-emotion-parser@master/dist/qq-wechat-emotion-parser.min.js"></script>
<script>
ispeakBber
    .init({
      el: '#speak', // 容器选择器
      name: 'CC 😊', // 显示的昵称
      envId: 'ccknbc-154167', // 环境id
      region: 'ap-shanghai', // 腾讯云地址，默认为上海
      limit: 10, // 每次加载的条数，默认为5
      avatar: 'https://cdn.jsdelivr.net/gh/ccknbc-backup/cdn/logo/logo.png',
      fromColor:'rgb(245, 150, 170)', // 下方标签背景颜色 默认 rgb(245, 150, 170)
      loadingImg: 'https://cdn.jsdelivr.net/gh/ccknbc-backup/photos/blog/2021-03-08~15-13-15.gif', // 自定义loading的图片，示例值为默认值
      dbName:'talks' // 数据的名称，默认talks，避免有人的命名不是这个，所以加入此配置字段。
    })
    .then(function() {
      // 哔哔加载完成后的回调函数，你可以写你自己的功能
      console.log('哔哔 加载完成')
    })
</script> -->

<div id="tip" style="text-align:center;">ipseak加载中</div>
<div id="ispeak"></div>
<link
  rel="stylesheet"
  href="https://cdn.staticfile.org/highlight.js/10.6.0/styles/atom-one-dark.min.css"
/>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/ispeak@4.2.0/style.css"
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
<script src="https://cdn.jsdelivr.net/npm/discuss/dist/Discuss.js"></script>
<script src="https://cdn.jsdelivr.net/npm/ispeak@4.2.0/ispeak.umd.js"></script>
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
        loading_img: 'https://7.dusays.com/2021/03/04/d2d5e983e2961.gif',
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


<!-- ## 哔哔 CloudBase 版本(林木木) -->

<!-- <div id="bber"></div>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ccknbc-backup/cdn/css/bber.min.css">
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js" ></script>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js" ></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/TencentCloudBase/tcb-js-sdk@master/tcbjs/1.10.10/tcb.min.js" >
</script><script src="https://cdn.jsdelivr.net/gh/buddys/qq-wechat-emotion-parser@master/dist/qq-wechat-emotion-parser.min.js" 
></script>
<script>
const app = tcb.init({
  env: 'ccknbc-154167'
  })
</script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/ccknbc-backup/cdn/js/bber.min.js" ></script> -->

<!-- ## 哔哔 CloudBase 版本(Heo) -->

<!-- <div id="bber"></div>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ccknbc-backup/cdn/css/newbber.min.css">
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/ccknbc-backup/cdn/js/newbber.min.js" ></script> -->

<!-- ## 说说(Artitalk) -->

<!-- <div id="artitalk_main"></div>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/artitalk"></script>
<script>
new Artitalk({
  appId: 'pvExDcJ4o0gsrOI1G1eGO01H-MdYXbMMI',
  appKey: 'D4V4sTiVUkTmOqyVyBN79iDB',
  atComment: false
})
</script> -->

<!-- ## hpptalk(CYFan) -->

<!-- <div id="hpp_talk"></div>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/HexoPlusPlus/HexoPlusPlus/talk.css" /> 
<script src="https://cdn.jsdelivr.net/gh/HexoPlusPlus/HexoPlusPlus/talk_user.js"></script>
<script>
new hpp_talk({
id:"hpp_talk",
domain: "blog.ccknbc.workers.dev",
limit: 10,
start: 0,
themecss: "https://cdn.jsdelivr.net/gh/HexoPlusPlus/cdn/plugin/theme/hpp_user_talk/bfonion.css" 
});
</script> -->

<!-- ## 哔哔 LeanCloud 版本(黑石) -->

<!-- <div id="bbtalk"></div>
<script src="https://cdn.jsdelivr.net/npm/bbtalk@0.1.5/dist/bbtalk.min.js"></script>
<script>
bbtalk.init({
  appId: "MH2fWakWlJvGxqbMLX6itMJL-MdYXbMMI",
  appKey: "V5akWNoPYoo3595zOEw2XX5e",
  serverURLs: 'https://mh2fwakw.api.lncldglobal.com'
})
</script> -->

<!-- ## 求新版本啊啊啊 -->