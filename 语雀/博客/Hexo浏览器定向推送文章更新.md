---
title: Hexo浏览器定向推送文章更新
urlname: '37'
date: '<font style="color:rgb(38, 38, 38);">2022-10-05 00:00:00</font>'
updated: '<font style="color:rgb(38, 38, 38);">2023-08-29 13:05:00</font>'
cover: 'https://pic1.afdiancdn.com/user/8a7f563c2e3811ecab5852540025c377/common/d2a947d48815ed24936a919873b97841_w1366_h768_s31.png'
translate_title: hexo-webpushr-notification
subtitle: Hexo Webpushr Notification
tags:
  - 博客
  - 工具
keywords: '<font style="color:rgb(38, 38, 38);">[博客, 工具, hexo, web push, webpushr]</font>'
categories: 博客
description: '<font style="color:rgb(38, 38, 38);">这一次，CC的部落格可以根据读者订阅主题定向推送了，并且实现了NPM插件化</font>'
'<font style="color:rgb(64, 64, 64);">id</font>': '<font style="color:rgb(64, 64, 64);">37</font>'
---
查看本文[**语雀**](https://www.yuque.com/ccknbc/blog/37/)版本【首发】，自动同步更新至[**CC的部落格**](https://blog.ccknbc.cc/posts/hexo-webpushr-notification/)！



两年前，我刚开始使用`Hexo`的时候，写了一篇文章[简单浏览器更新推送的实现](https://blog.ccknbc.cc/posts/implementation-of-simple-browser-update-push/)，最近登录[webpushr](https://www.webpushr.com/)控制台，发现其支持按话题`topic`指定推送了，而原来的插件一直没有更新，且对个人的写作习惯不是很友好，所以对原插件进行了修改，并发布到了`NPM`



欢迎大家前往[订阅页面](/sub)选择合适的订阅方式，关于邮件订阅，现已支持分类订阅

## 安装


推荐使用 `npm` 以插件形式安装



```bash
npm i hexo-webpushr-notification
```

### 自定义修改


当然你也可以自定义修改[webpushr.js](https://github.com/Rock-Candy-Tea/hexo-webpushr-notification/blob/main/webpushr.js)文件后，再安装相关需要依赖，然后将文件放到`Hexo/scripts/`目录下即可正常运行，CC本人亦是如此

对于 0.2.0 以上版本，您只需要在 Hexo 所在目录安装 axios 即可，这样测试相较于安装 GitHub 更方便（以及欢迎 PR ）

```bash
npm i axios
```

## 使用
  
在你的 Hexo 根目录配置文件 `_config.yml`中添加如下内容，可按需配置，建议前往 [README](https://github.com/Rock-Candy-Tea/hexo-webpushr-notification#readme) 查看最新配置



```yaml
webpushr:
  enable: true

  webpushrKey: "webpushrKey"
  webpushrAuthToken: "webpushrAuthToken"
  # 出于安全考虑，建议将上述两个重要参数添加至系统全局环境变量，并删除或注释掉此处配置
  # 否则可在网页端向访问者或订阅用户发送推送 https://www.webpushr.com/api-playground
  # 例如GitHub Actions环境变量配置，参数名不变，密钥名自定义，可参考如下
  # env:
  #     webpushrKey: ${{ secrets.WEBPUSHR_KEY }}
  #     webpushrAuthToken: ${{ secrets.WEBPUSHR_AUTH_TOKEN }}
  # 如果您的仓库私有，则无需担心此问题

  trackingCode: "trackingCode"
  icon: "https://.../192.png" # 必须为 HTTPS 以及 192*192 png图片
  # auto_hide: false # 默认为 1，代表true，即自动隐藏
  # sort: "date" # 默认为updated，即只要最新文章更改了更新时间即推送新文章，改为date即文章第一次发布时间
  # delay: "0" # 延时推送，考虑到CDN缓存更新，默认定时为在 hexo d 10分钟后推送，单位为分钟（最短延时为5分钟，设置 0 则会立即推送）
  # expire: "15d" # 推送过期时长，默认值为7天，格式如下：'5m'代表5分钟,'5h'代表5小时, '5d'代表5天.
  # image: # 默认为文章封面，Front-matter 属性为'cover'(butterfly主题友好选项)，如果您没有定义默认封面或此属性，请在这里设置默认image
  action_buttons: # 如果你需要额外自定义按钮 可按照如下格式：
    - title: 阅读全文 # 当 title 未配置时 默认值为 “前往查看”
      # url:  # 当 url 未配置时 默认值为 最新文章链接
    - title: 订阅页面
      url: https://blog.ccknbc.cc/sub/
    # 当 action_buttons 未定义时也默认保留了一个“前往查看”按钮，除非设置为 false
    # action_buttons: false # 当设为 false 则不显示额外的按钮，因为隐藏按钮即为当前文章链接

  # 以下配置为按订阅主题推送给不同订阅用户，请按照数组形式，一一对应，具体位置请看使用文档
  categories: [工作, 博客, 工具, 生活, 音乐, 学习]
  segment: ["484223", "484224", "484225", "484226", "484227", "484229"]
  endpoint: segment # 可选配置 all / segment / sid
  # 默认为 segment，即根据不同主题推送细分，同时配置上述选项
  # 例如 all，即推送至所有用户；针对本地测试，建议只推送给单个用户即自己，同时设置下方的 sid 值
  # 您也可以将segment 设置为 all-users 对应的ID，同样也可以实现推送至所有用户
  sid: "119810055" # 单个用户ID 可在控制台查看 https://app.webpushr.com/subscribers

  # 此外，在文章 Front-Matter 处
  # 可覆盖 auto_hide 和 expire 配置，针对需要特别提醒文章可以设置不自动隐藏及过期时间延长等操作
  # 以及可指定schedule参数（例如：schedule: 2022-10-01 00:00:00），定时推送
  # 当文章头设置 webpushr: false 时，可关闭本篇文章推送，此参数主要防止久远文章更改更新时间后自动推送
```



1. 前往 webpushr 控制台获取如下参数，注册的时候可能会遇到一点困难，中国大陆用户需要科学上网来加载验证服务）
2. 关于注册及一些具体内容，可以看之前的文章 [简单浏览器更新推送的实现](https://blog.ccknbc.cc/posts/implementation-of-simple-browser-update-push/)
3. 依次点击 `Integration` > `REST API Keys`，即可看到你的`webpushrKey` 及 `webpushrAuthToken`
4. 依次点击 `Setup` > `TrackingCode`，可以看到如下代码



```javascript
<!-- start webpushr tracking code -->
  <script>(function(w,d, s, id) {if(typeof(w.webpushr)!=='undefined') return;w.webpushr=w.webpushr||function(){(w.webpushr.q=w.webpushr.q||[]).push(arguments)};var js, fjs = d.getElementsByTagName(s)[0];js = d.createElement(s); js.id = id;js.async=1;js.src = "https://cdn.webpushr.com/app.min.js";
                                 fjs.parentNode.appendChild(js);}(window,document, 'script', 'webpushr-jssdk'));
webpushr('setup',{'key':'BKOlpbdgvBCWXqXI6PtsUzobY7TLV9gwJU8bzMktrwfrSERg_xnLvbjpdw8x2GmFmi1ZcLTz0ni6OnX5MAwoM58' });</script>
  <!-- end webpushr tracking code -->
```



最后一行`BKOlpbdgvBCWXqXI6PtsUzobY7TLV9gwJU8bzMktrwfrSERg_xnLvbjpdw8x2GmFmi1ZcLTz0ni6OnX5MAwoM58` 就是你的 `trackingCode`



**注意**：因权限问题，本地测试时(`hexo s`)可能不会显示弹窗，但如果你配置了小铃铛，小铃铛会显示



## 额外配置


因官方sw脚本注册后，我们无法注册自己的sw脚本，但官方提供了配置，方便我们使用sw的缓存，拦截请求等功能



首先在配置项中添加 `sw_self: true `配置，开启自行注册sw（默认用户不用添加或者设为 `false`）

```yaml
webpushr:
  sw_self: true
```

另外，你还需要在你的脚本文件（例如`sw.js`）中引入

```javascript
importScripts('https://cdn.webpushr.com/sw-server.min.js');
```

完成这些你就可以自行注册你的`sw`脚本了，如果你需要了解如何编写或注册`service worker`脚本，可以参考以下文章或项目

[hexo-swpp](https://kmar.top/posts/73014407/)  

[Service Worker](https://blog.cyfan.top/p/c0af86bb.html)  

[clientworker](https://clientworker.js.org/)  

[Workbox](https://github.com/GoogleChrome/workbox)  

## 自定义


个人建议将控制台右上角小铃铛🔔里全部配置一遍以获得更好的效果



你需要自定义一些参数才可以使用根据不同主题，按照订阅者订阅话题推送功能（目前根据个人需求是这个设置，默认行为为当未匹配到对应分类时不推送文章，而不是向所有用户推送文章，当然你也可以配置目标为所有用户）



在控制台，点击`Setup`>`Opt-In Prompt` ，向下滑动打开`Enable Topics`（小铃铛样式无此选项，因此推荐您使用前两种样式），并新增几个主题，对应你想推送的文章分类即可



然后点击`Users`>`Segments` ，即可获取对应的`segment`关系，依次填入配置项即可

## 工作原理


当你运行`hexo generate`插件会在`public` 目录生成 `newPost.json` 这样一个文件. `newPost.json` 包含了一些你想推送的新文章相关信息，示例格式如下



```json
{
  "title": "Hexo浏览器定向推送文章更新",
  "updated": "2023-04-22T20:25:00+08:00",
  "message": "这一次，CC的部落格可以根据读者订阅主题定向推送了，并且实现了NPM插件化",
  "target_url": "https://blog.ccknbc.cc/posts/hexo-webpushr-notification/",
  "image": "https://pic1.afdiancdn.com/user/8a7f563c2e3811ecab5852540025c377/common/d2a947d48815ed24936a919873b97841_w1366_h768_s31.png",
  "categories": [
    "博客"
  ],
  "schedule": "2023-06-13T15:16:41.187Z",
  "expire": "7d",
  "auto_hide": "1"
}
```



而他的来源就是我们在文章开头`Front-Matter`自定义的那些属性，而本插件针对`Butterfly`主题做了针对性修改，您也可以在您的模板文件目录下修改文章模板文件(`Hexo/scaffolds/post.md`)，主要针对性参数如下



```yaml
date: 
updated: 
schedule: 对应配置项中定时推送时间
auto_hide: 对应配置项中是否自动隐藏
expire: 对应配置项中过期时间
categories: 文章分类
description: 对应配置项中message，即文章描述
cover: 对应配置项中image，默认选取文章封面
```



如果你的主题不是采用默认的`date` `updated` 参数，记得补充，因为这是判断最新文章的依据



如果你习惯了使用截断的方式，也无需配置`description`继续使用，示例如下，注意`<!-- more -->`



```markdown
---
title: Hexo使用Web Push Notification 浏览器通知推送
tags:
  - hexo
  - 服务器推送技术
  - push notifications
categories:
  - 开发
comments: true
abbrlink: 98ae9e55
date: 2020-02-26 10:00:00
---

Web Push Notification 是怎么工作的？个人博客为什么要使用它？如何使用它？

<!-- more -->
```



当执行 `hexo deploy`命令时，插件会比较在线版本和本地版本`newPost.json`中最新文章更新时间是否一致，如果不同，则插件将推送最新文章更新通知（默认为十分钟后推送）



**注意**：如果您是第一次使用本地测试应该看到



```bash
INFO  无文章更新 或 为首次推送更新
```



这是正常现象，因为此时你的网站还没有`newPost.json`这个文件，后续有更新时将正常推送，你可以先推送一次，再修改更新时间测试一次，当然建议测试目标选择自己，即sid选项配置



当然如果您在使用过程中有什么问题或遇到了Bug也欢迎随时在评论区或[issues](https://github.com/Rock-Candy-Tea/hexo-webpushr-notification/issues)反馈，当然因为本人是菜鸡，所以有大佬PR最好了

## 推送效果
因为我是通知自动隐藏后才截图，所以大致效果如下所示

![](https://cdn.nlark.com/yuque/0/2022/png/8391407/1664951686275-f37cb76d-34f6-40ed-94c6-9bed130d0605.png)

## 后续计划
- [x] 兼容自定义`Service Work`的功能，因为`webpushr-sw.js`优先注册的原因，只能有一个 `sw`注册，无法注册自己编写脚本。
- [x] 支持参数更多的可自定义，启用或关闭。例如不延时，立即发送；不显示按钮（因为默认就是跳转到文章）等
- [x] 目前的判断逻辑，虽然可以根据更新时间来判断，但如果很久之前的文章翻新，只要更新时间最新，也会触发推送，主要针对 updated 方式，还没想到好的解决办法，目前就是确认需要推送才更改更新时间咯
- [ ] 优化代码，减少代码量

