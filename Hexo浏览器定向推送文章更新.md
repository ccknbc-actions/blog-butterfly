---
title: Hexo浏览器定向推送文章更新
translate_title: hexo-webpushr-notification
subtitle: Hexo Webpushr Notification
date: 2022-10-05 00:00:00
updated: 2022-12-18 18:00:00
tags: [博客, 工具]
keywords: [博客, 工具, hexo, web push, webpushr]
categories: 博客
description: 这一次，CC的部落格可以根据读者订阅主题定向推送了，并且实现了NPM插件化
cover: https://pic1.afdiancdn.com/user/8a7f563c2e3811ecab5852540025c377/common/d2a947d48815ed24936a919873b97841_w1366_h768_s31.png
id: 37
---

查看本文[**语雀**](https://www.yuque.com/ccknbc/blog/37)版本【首发】，自动同步更新至[**CC 的部落格**](https://blog.ccknbc.cc/posts/hexo-webpushr-notification)！

两年前，我刚开始使用`Hexo`的时候，写了一篇文章[简单浏览器更新推送的实现](https://blog.ccknbc.cc/posts/implementation-of-simple-browser-update-push/)，最近登录[webpushr](https://www.webpushr.com/)控制台，发现其支持按话题`topic`指定推送了，而原来的插件一直没有更新，且对个人的写作习惯不是很友好，所以对原插件进行了修改，并发布到了`NPM`

欢迎大家前往[订阅页面](/sub)选择合适的订阅方式，关于邮件订阅，现已支持分类订阅

## 安装

推荐使用 `npm` 以插件形式安装

```bash
npm i hexo-webpushr-notification
```

当然你也可以自定义修改[index.js](https://github.com/Rock-Candy-Tea/hexo-webpushr-notification/blob/main/index.js)文件后，再安装相关需要依赖，然后将文件放到`Hexo/scripts/`目录下即可正常运行，CC 本人亦是如此

## 使用

在你的 Hexo 根目录配置文件 `_config.yml`中添加如下内容，可按需配置

```yaml
webpushr:
  webpushrKey: "webpushrKey"
  webpushrAuthToken: "webpushrAuthToken"

  # 出于安全考虑，建议将上述两个重要参数添加至系统全局环境变量，并删除或注释掉此处配置
  # 否则可在网页端向访问者或订阅用户发送推送 https://www.webpushr.com/api-playground
  # 例如GitHub Actions环境变量配置，参数名不变，密钥名自定义，可参考如下
  # env:
  #     webpushrKey: ${{ secrets.WEBPUSHR_KEY }}
  #     webpushrAuthToken: ${{ secrets.WEBPUSHR_AUTH_TOKEN }}
  # 如果您的仓库私有，则无需担心此问题

  trackingCode: "BB9Y-w9p3u0CKA7UP9nupB6I-_NqE2MuODmKJjyC4W2YflX06Ff_hEhrNJfonrut5l6gCa28gC83q2OII7Qv-oA"
  icon: "https://.../192.png" # 必须为192*192 png图片
  # auto_hide: "0" # 默认为 1，代表true，即自动隐藏
  # sort: "date" # 默认为updated，即只要最新文章更改了更新时间即推送新文章，改为date即文章第一次发布时间
  # delay: "30" # 延时推送，考虑到CDN缓存更新，默认定时为在 hexo d 10分钟后推送，单位为分钟（最短时间为5min）
  # expire: "15d" # 推送过期时长，默认值为7天，格式如下：'5m'代表5分钟,'5h'代表5小时, '5d'代表5天.
  # image: # 默认为文章封面，Front-matter 属性为'cover'(butterfly主题友好选项)，如果您没有定义默认封面或此属性，请在这里设置默认image
  action_buttons: #false # ，默认第一个按钮为前往查看文章，您可以关闭false后替换第二个按钮相关属性，因参数需求限制（本人太菜）否则将显示两个前往查看按钮
    [{ "title": "订阅页面", "url": "https://blog.ccknbc.cc/sub" }]
  # 以下配置为按订阅主题推送给不同订阅用户，请按照数组形式，一一对应，具体位置请看使用文档
  categories: [工作, 博客, 工具, 生活, 音乐, 学习]
  segment: ["484223", "484224", "484225", "484226", "484227", "484229"]
  # endpoint: sid # 可选配置 all / segment / sid
  # 默认为 segment，即根据不同主题推送细分，同时配置上述选项
  # 官方文档参数见 https://docs.webpushr.com/introduction-to-rest-api
  # 例如 all，即推送至所有用户；针对测试，可只推送给单个用户即自己，同时设置 sid 选项
  sid: "119810055" # 单个用户ID 可在控制台查看 https://app.webpushr.com/subscribers


  # 此外，在文章 Frontmatter 处
  # 可覆盖auto_hide和expire配置，针对特别提醒文章可以设置不自动隐藏及过期时间延长等操作
  # 以及可指定schedule参数（例如：schedule: 2022-10-01 00:00:00），定时推送，而非延时发送
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

因官方 sw 脚本注册后，我们无法注册自己的 sw 脚本，但官方提供了配置，方便我们使用 sw 的缓存，拦截请求等功能
因兼容性未知，不确定是否有其他问题，但我个人目前没什么问题，主要是 sw 脚本编写问题

首先在配置项中添加`sw: "none"`配置项

```yaml
webpushr:
  sw: "none"
```

另外，你还需要在你的脚本文件（例如 sw.js）中引入

```javascript
importScripts("https://cdn.webpushr.com/sw-server.min.js");
```

如果你需要了解如何编写 service worker 脚本，可以参考以下文章或项目

[hexo-swpp](https://kmar.top/posts/73014407/)

[Service Worker](https://blog.cyfan.top/p/c0af86bb.html)

[clientworker](https://clientworker.js.org/)

[Workbox](https://github.com/GoogleChrome/workbox)

## 自定义

个人建议将控制台右上角小铃铛 🔔 里全部配置一遍以获得更好的效果

你需要自定义一些参数才可以使用根据不同主题，按照订阅者订阅话题推送功能（目前根据个人需求是这个设置，默认行为为当未匹配到对应分类时不推送文章，而不是向所有用户推送文章，当然你也可以配置目标为所有用户）

在控制台，点击`Setup`>`Opt-In Prompt` ，向下滑动打开`Enable Topics`（小铃铛样式无此选项，因此推荐您使用前两种样式），并新增几个主题，对应你想推送的文章分类即可

然后点击`Users`>`Segments` ，即可获取对应的 segment 关系，依次填入配置项即可

## 工作原理

当你运行`hexo generate`插件会在`public` 目录生成 `newPost.json` 这样一个文件. `newPost.json` 包含了一些你想推送的新文章相关信息，格式如下

```json
{
  "title": "如何优雅隐藏 Hexo 文章",
  "updated": "09/18/2022",
  "message": "本文介绍三种方法来优雅隐藏 Hexo 文章",
  "path": "posts/how-to-hide-hexo-articles-gracefully/",
  "target_url": "https://blog.ccknbc.cc/posts/how-to-hide-hexo-articles-gracefully/",
  "image": "https://***.jpg",
  "tags": ["博客"],
  "categories": ["博客"],
  "schedule": "2022-10-04T06:58:04.459Z",
  "expire": "7d",
  "auto_hide": "1"
}
```

而他的来源就是我们在文章开头`FrontMatter`自定义的那些属性，而本插件针对`Butterfly`主题做了针对性修改，您也可以在您的模板文件目录下修改文章模板文件(`Hexo/scaffolds/post.md`)，主要针对性参数如下

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

如果你的主题不是采用默认的`data` `updated` 参数，记得补充，因为这是判断最新文章的依据

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

这是正常现象，因为此时你的网站还没有`newPost.json`这个文件，后续有更新时将正常推送

当然如果您在使用过程中有什么问题或遇到了 Bug 也欢迎随时在评论区或[issues](https://github.com/Rock-Candy-Tea/hexo-webpushr-notification/issues)反馈，当然因为本人是菜鸡，所以有大佬 PR 最好了

## 推送效果

因为我是通知自动隐藏后才截图，所以大致效果如下所示
![image.png](https://cdn.nlark.com/yuque/0/2022/png/8391407/1664951686275-f37cb76d-34f6-40ed-94c6-9bed130d0605.png#averageHue=%23bec0b3&clientId=ub7fa2e19-f596-4&crop=0&crop=0&crop=1&crop=1&errorMessage=unknown%20error&from=paste&height=402&id=u898a4c3c&margin=%5Bobject%20Object%5D&name=image.png&originHeight=502&originWidth=412&originalType=binary&ratio=1&rotation=0&showTitle=false&size=165943&status=error&style=none&taskId=u3d6496ee-c850-4052-978a-8c49a9055ca&title=&width=329.6)

## 后续计划

- [ ] 兼容`Workbox`的功能，因为`webpushr-sw.js`的原因，只能有一个注册，这方面可能 webpushr 自身也要考虑，现在的状况是如果启用了缓存通知会以`json`形式展示

```javascript
self.addEventListener('push', function (e) {
  var msg;
  if (e.data) {
    var msg = JSON.parse(e.data.text());
  } else {
    body = { t: "Aegir Alert", m: "" };
  }

  var options = {
    body: msg.m,
    title: msg.t,
    icon: "/img/icons/favicon-32x32.png",
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now()
    },
    ]
  };
  e.waitUntil(
    self.registration.showNotification(msg.t, options)
  );
});
```

- [ ] 支持参数更多的可自定义，启用或关闭。例如不延时，立即发送；不显示`icon`, `image`, `按钮`（因为默认就是跳转到文章）等
