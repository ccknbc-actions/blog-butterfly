---
title: Waline 评论系统-部署日志
translate_title: waline-commens-system-deployment-logs
date: 2021-01-17 00:00:00
updated: 2021-03-14 14:00:00
tags: [工具, 评论, Waline]
categories: 工具
keywords: [工具, 评论, Waline]
description: Waline评论系统-部署日志，希望你也能用上这款评论系统
cover: https://cdn.jsdelivr.net/gh/ccknbc-backup/photos@master/blog/2021-01-17~15-08-37.webp
photos: https://cdn.jsdelivr.net/gh/ccknbc-backup/photos@master/blog/2021-01-17~15-08-37.webp
comments: true
id: 20
---

本文首发在[**语雀**](https://www.yuque.com/ccknbc/blog/20)
自动同步更新至[**CC 的部落格**](https://blog.ccknbc.cc/posts/waline-commens-system-deployment-logs)
**本文仅作为官方文档的补充，若有错误，还望指正**

---

Waline - 一款从 [Valine](https://valine.js.org) 衍生的带后端评论系统。可以将 Waline 等价成 With backend Valine.

## 特性

- 快速
- 真·安全
- Markdown 语法支持
- 轻量易用
- 免费部署
- 多种部署部署方式和存储服务支持，每列选择一项多达 56 种（可以更多）部署方式任君选择
  | | Waline | |
  | --- | --- | --- |
  | **客户端脚本** | **服务端部署** | **数据存储** |
  | @waline/client | Vercel | LeanCloud |
  | MiniValine | CloudBase | CloudBase |
  | | Docker | MongoDB |
  | | 独立部署 | MySQL |
  | | | SQLite |
  | | | PostgreSQL |
  | | | GitHub |

对于想白嫖的小白， `Vercel`  + `LeanCloud（国际版）`  是不错的选择，如果你主要面向对象为大陆用户，使用 `CloudBase`  部署也是个不错的选择，它在海外表现也没那么差，或者您仅使用 `CloudBase`  来做数据存储
{% note warning simple %}如果您使用 `Vercel` + `LeanCloud` ，并且使用 `Vercel`  发送评论通知，您不必担心 LeanCloud 流控问题，并且之前使用过 Valine 或者部署过 `Valine-Admin`  项目的可以直接拿来用；对于评论转移，官方提供了[迁移助手](https://waline.js.org/migration/tool.html)供您使用，不用担心之前评论丢失的问题{% endnote %}

## Todo

{% checkbox green checked, 微信通知  %}
{% checkbox green checked, QQ 通知 %}
{% checkbox green checked, Telegram 通知 %}
{% checkbox green checked, Akismet  %}
{% checkbox green checked, 文章统计 %}
{% checkbox green checked, 多语言同步%}
{% checkbox green checked, 自定义语言支持 %}
{% checkbox green checked, 登录支持 %}
{% checkbox green checked, 评论管理 %}
{% checkbox green checked, 评论删除 %}
{% checkbox green checked, 其它数据库支持 %}
{% checkbox green checked, 基于 IP 的发布评论频率限制  %}
{% checkbox green checked, 基于关键词的评论过滤限制 %}
{% checkbox green checked, IP 黑名单 %}
{% checkbox green checked, 重复内容检测 %}
{% checkbox green checked, CloudBase 腾讯云开发部署支持 %}
{% checkbox green checked, 社交登录 %}
{% checkbox red,AWS, GCP, Azure 部署支持  %}
{% checkbox red,置顶评论  %}
{% checkbox red,评论赞踩  %}
{% checkbox blue, 其它... %}

{% note warning simple %}目前社交登录仅支持 `GitHub` ， 未来会支持更多平台 {% endnote %}

---

## Vercel + LeanCloud 部署

这部分请前往[官方文档](https://waline.js.org/quick-start.html)查看，不过需要注意的是如果你的 `GitHub`  账号主邮箱是 `QQ`  邮箱的话建议更改为其他邮箱（毕竟他们认为 QQ 邮箱是垃圾邮箱）再去注册 Vercel（或者你可以选择给客服发一封邮件让他们帮忙解锁你的账号），环境变量配置部分官方文档也写了，这里不再赘述
如果您之前用过 Valine，那么关于 LeanCloud 部分你就不用做什么了，数据兼容，拿到那几个 `key`  即可

### 配置项

这个可直接参考官方文档按需进行配置即可，因为目前云开发因众所周知的原因不支持连接 `Telegram`  服务器，所以如果您要配置电报新评论通知，请使用 Vercel 进行配置，不过因为目前没有异步通知，加上反垃圾检测等功能，发布评论可能需要很长时间，这个我使用了 LeanCloud 来继续帮我发送通知（反正我也没什么评论，流控问题第二天补发评论也不是不可）
{% note warning simple %}对于邮件通知部分，目前的设定是，对于新评论，如果博主配置了 QQ/微信/Telegram 通知中任意一种或多种，则邮件通知将会取消，而对于回复（子评论），博主和被回复者（如果填了邮箱的话）均可收到邮件通知{% endnote %}
我目前使用的 Hexo Butterfly 主题已经从 3.5.0 beta3 版本起内置了 Waline 评论系统，如果您使用老版本主题请升级，或者根据您所用版本的 Valine 模板 pug 来照葫芦画瓢，根据官方配置进行对应修改，主题中 option 为可选配置，万一将来增加了某些配置，主题不必为此升级, bg 为主题配置项
这里注意一下 serverURL 以及环境变量里的 SITE_URL 网址最后的斜杠因为作者没做兼容，所以不要带上 / ，导致跳转不到对应评论界面
客户端脚本里可以通过 `langMode.admin`  这个配置自定义角标的文案,例如：

```javascript
function waline() {
  const Waline = require("@waline/client");
  new Waline({
    el: "#waline-comment",
    serverURL: "https://waline.vercel.app",
    path: window.location.pathname,
    visitor: true,
    lang: location.pathname.startsWith("/en/") ? "en" : "zh-CN",
    langMode: {
      admin: location.pathname.startsWith("/en/")
        ? "Administrator"
        : "可爱的管理员",
    },
  });
}
```

对于同主题在主题配置里找到 `waline`  配置项相关内容

```yaml
# waline - A simple comment system with backend support fork from Valine
# https://waline.js.org/
waline:
  serverURL: https://waline.ccknbc.ml # Waline server address url
  avatar: monsterid # gravatar style https://zh-tw.gravatar.com/site/implement/images/#default-image
  bg: # waline background
  emojiCDN: https://cdn.jsdelivr.net/gh/GamerNoTitle/ValineCDN@master/
  visitor: false
  option:
    pageSize: 10
    requiredFields: mail
    # anonymous: false
    placeholder:
    avatarCDN: https://sdn.geekzu.org/avatar/
    #https://valinecdn.bili33.top/
    langMode:
      admin: 博主兼管理员
      nick: 昵称(选填)
      mail: 邮箱(必填)
      link: 网址(选填)
      sofa: 这里冷冷清清的，快来留下脚印吧！
  # 如果你查看了源码，会发现还有这个可以配置 copyRight: false，但不建议大家设为 false 啦，保留也没什么的（没错，我不要脸）
```

~~还有就是可能有人会觉得默认邮件通知模板太单调，想和 Valine-Admin 一样切换模板，其实有这个配置的，只是目前的方法是写在环境变量中，而环境变量限制长度（大小），或者说是不适合这种方式配置，如果要改的话可以先查看~~[~~issues/106~~](https://github.com/lizheming/waline/issues/106)~~相关内容，或者等以后优化再说；当然如果你的评论不是很多，并且之前配置过 Valine-Admin，那么你仍然可以使用 LeanCloud 来做异步发送通知，关闭默认的通知配置，或者使用 js 推送~~
关于邮件模板大家可查看[官方文档](https://waline.js.org/server/notification.html#%E9%80%9A%E7%9F%A5%E6%A8%A1%E6%9D%BF)相关章节，或者使用[附录提供的邮件通知模板](#邮件通知模板)，也提交了 PR

[评论 Hooks](https://waline.js.org/server/basic.html#%E8%AF%84%E8%AE%BA-hooks)，可以根据官方的例子自己做一些配置，相比于其他，违禁词，屏蔽 IP 等配置可以说是人性化了，但万一配置不好一些正常评论可能也会被判定为垃圾内容，所以我推荐使用人工审核功能，不过这边不得不说另一个评论系统 [Twikoo](https://twikoo.js.org/)，支持查看自己审核中的评论，评论置顶，点赞等，不过我想 Waline 将来也能实现，毕竟 Flag 立那了

图片上传 uploadImage 部分配置 理论上是可以适配任何图床，配置例子可查看 [issues/123](https://github.com/lizheming/waline/issues/123)，当然内置了一个默认图床，开箱即用

表情配置和之前 Valine 是一样的，同主题还可使用 `walien.json`  的配置方式，具体可查看[主题文档](https://butterfly.js.org/posts/ceeb73f/#%E8%A9%95%E8%AB%96)

## CloudBase 云开发部署

### 一键部署

一键脚本部署可以查看[官方文档](https://waline.js.org/server/cloudbase.html)，我删了之后就没成功过
![image.png](https://cdn.nlark.com/yuque/0/2021/png/8391407/1612362992018-14b2a225-27d6-4996-948b-e746d26bb2e0.png#height=322&id=FOuRW&margin=%5Bobject%20Object%5D&name=image.png&originHeight=644&originWidth=1011&originalType=binary&size=48650&status=done&style=none&width=505.5)
截至文档最新更新日期，这个已被修复（不过 tcb-starter 那个链接还没改所以还是失败），不过我只能说作者非常不细心，毕竟能一天发十几个版本，详见 [commit](https://github.com/lizheming/waline/commit/d87d3092a34fd6b2b7f0b1c72bd95ad784a086e7)，他还是把链接协议头多打了一个 h ,所以请[点击这里](https://console.cloud.tencent.com/tcb/env/index?action=CreateAndDeployCloudBaseProject&appUrl=https%3A%2F%2Fgithub.com%2Fwalinejs%2Ftcb-starter&branch=master&appName=waline)一键部署
嗯，后来修复了，期待接下来的开发

---

警告内容来自 [Twikoo 官方文档](https://twikoo.js.org/quick-start.html) 建议您直接查看 [手动部署部分](#手动部署)！！！
{% note warning simple %}
一键部署虽然方便，但是仅支持按量计费环境——也就是说，**一键部署的环境，当免费资源用尽后，将会产生费用**。且按量计费环境无法切换为包年包月环境。免费额度数据库读操作数只有 500 次 / 天，**无法支撑 Twikoo 的运行需求**。Twikoo 建议您[手动部署](#手动部署)以节约成本。
{% endnote %}
![image.png](https://cdn.nlark.com/yuque/0/2021/png/8391407/1610953378969-db93161e-24d3-4a48-8934-5566774b94d2.png#height=204&id=BbUHK&margin=%5Bobject%20Object%5D&name=image.png&originHeight=204&originWidth=423&originalType=binary&size=11059&status=done&style=none&width=423)
对于新用户或者说没有创建过按量计费环境的用户会显示如下内容，记得勾选开启免费资源
![image.png](https://cdn.nlark.com/yuque/0/2021/png/8391407/1610873567827-825cde85-7c99-4c5a-95e0-44c0966784cb.png#height=632&id=v1Ort&margin=%5Bobject%20Object%5D&name=image.png&originHeight=632&originWidth=1006&originalType=binary&size=46404&status=done&style=none&width=1006)
![image.png](https://cdn.nlark.com/yuque/0/2021/png/8391407/1612859364523-006d98ba-bd5c-4868-878f-9c9ac158d836.png#height=237&id=EOKkv&margin=%5Bobject%20Object%5D&name=image.png&originHeight=473&originWidth=999&originalType=binary&size=25755&status=done&style=none&width=499.5)

为了日后升级的方便，不管您是否使用了 Vercel 部署，您都可以 fork [我的仓库](https://github.com/ccknbc-actions/waline) ，稍加配置即可完成自动部署更新

### 手动部署

首先前往[**腾讯云的活动区域**](https://cloud.tencent.com/act/pro/cloudbase01)，注册/登陆后往下滑，找到新用户专享云开发标准型（基础版 1）资源套餐，0 元购买一个免费包年包月环境

---

没错，这个环境不错吧
![image.png](https://cdn.nlark.com/yuque/0/2021/png/8391407/1610870670315-08e65148-3819-48fb-878e-03fdb0c9ab64.png#height=536&id=DWotB&margin=%5Bobject%20Object%5D&name=image.png&originHeight=536&originWidth=1493&originalType=binary&size=52310&status=done&style=none&width=1493)
按照提示购买后稍等几分钟，[在这个界面可查看您所购买的环境](https://console.cloud.tencent.com/tcb/env/index)
![image.png](https://cdn.nlark.com/yuque/0/2021/png/8391407/1610870083481-8e4cad1a-c70a-4cad-9192-11be8003241c.png#height=233&id=Q9Z3p&margin=%5Bobject%20Object%5D&name=image.png&originHeight=233&originWidth=523&originalType=binary&size=10168&status=done&style=none&width=523)
有能力的其实可以看一下 Vercel [自动升级](#自动升级)和 TCB[自动升级](#自动升级-1)部分，间接实现一键部署，自动更新
[点击云函数](https://console.cloud.tencent.com/tcb/scf/index)，新建云函数，函数内存选择 128M，名称随意，例如 Waline，其他默认,单击进入下一步
![image.png](https://cdn.nlark.com/yuque/0/2021/png/8391407/1612359288449-66b53150-2146-4ec9-aa08-910b99aebd1b.png#height=448&id=gqDSy&margin=%5Bobject%20Object%5D&name=image.png&originHeight=895&originWidth=1917&originalType=binary&size=127338&status=done&style=none&width=958.5)
下图中的函数代码部分填入以下代码
![image.png](https://cdn.nlark.com/yuque/0/2021/png/8391407/1612359460424-4b8cf9b4-2ef4-4758-92f6-09ae040a91ea.png#height=396&id=QsO9K&margin=%5Bobject%20Object%5D&name=image.png&originHeight=791&originWidth=688&originalType=binary&size=43150&status=done&style=none&width=344)

```javascript
/**
 * Tencent is pleased to support the open source community by making CloudBaseFramework - 云原生一体化部署工具 available.
 *
 * Copyright (C) 2020 THL A29 Limited, a Tencent company.  All rights reserved.
 *
 * Please refer to license text included with this package for license details.
 */
module.exports.main = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const entry = (() => {
    const result = require("./app.js");
    // const app = require('express')();
    // result = app.use(result);
    return result;
  })();
  const serverless = require("serverless-http");
  let app = entry;

  // support for async load app
  if (entry && entry.tcbGetApp && typeof entry.tcbGetApp === "function") {
    app = await entry.tcbGetApp();
  }

  return serverless(app, {
    binary: [
      "application/javascript",
      "application/json",
      "application/octet-stream",
      "application/xml",
      "font/eot",
      "font/opentype",
      "font/otf",
      "image/*",
      "video/*",
      "audio/*",
      "text/comma-separated-values",
      "text/css",
      "text/javascript",
      "text/plain",
      "text/text",
      "text/xml",
    ],
  })(event, context);
};
```

点击对应的云函数，进入在线编辑页面，按照[模板仓库](https://github.com/walinejs/tcb-starter)里的文件，新建对应的文件，并复制粘贴对应的内容即可
![image.png](https://cdn.nlark.com/yuque/0/2021/png/8391407/1612360652232-9eb2ad2b-bebe-4964-bb5f-75e2f9946d25.png#height=283&id=t6ZUG&margin=%5Bobject%20Object%5D&name=image.png&originHeight=566&originWidth=1171&originalType=binary&size=59625&status=done&style=none&width=585.5)
注意点击**保存并安装依赖**，可能会没有反应一会儿，然后等待转圈圈部署完毕即可
![image.png](https://cdn.nlark.com/yuque/0/2021/png/8391407/1612360855940-241970ec-5c18-4bc8-9168-9fd945deb761.png#height=71&id=PlC1K&margin=%5Bobject%20Object%5D&name=image.png&originHeight=142&originWidth=264&originalType=binary&size=4012&status=done&style=none&width=132)![image.png](https://cdn.nlark.com/yuque/0/2021/png/8391407/1612361085479-f39b6b2b-2293-4685-882e-9e20aa611dea.png#height=32&id=qWtmj&margin=%5Bobject%20Object%5D&name=image.png&originHeight=64&originWidth=251&originalType=binary&size=3262&status=done&style=none&width=125.5)
当然还没有结束，我们需要点击 `环境 --> HTTP 访问服务` （[点击直达](https://console.cloud.tencent.com/tcb/env/access))，如果你想绑定自定义域名可以照图中绑定，记得先申请一下证书，如果你想要 HTTPS（这个可能花的时间有点长）
![image.png](https://cdn.nlark.com/yuque/0/2021/png/8391407/1612361294908-3ef584b5-5cbc-43e5-b744-cda357057ec0.png#height=336&id=Y8wtR&margin=%5Bobject%20Object%5D&name=image.png&originHeight=671&originWidth=1596&originalType=binary&size=62417&status=done&style=none&width=798)
点击新建，新建触发路径，点击保存即可，注意路径最后没有 / ，等待构建完成后你就可通过对应的链接访问 demo 页面了，这个链接就是上面提到的 `serverURL` ，例如我的 [https://tcb.ccknbc.cc/waline](https://tcb.ccknbc.cc/waline)
![image.png](https://cdn.nlark.com/yuque/0/2021/png/8391407/1612361631129-fecd45a5-f694-4154-8707-9976eb10adb5.png#height=268&id=EJKha&margin=%5Bobject%20Object%5D&name=image.png&originHeight=535&originWidth=753&originalType=binary&size=29976&status=done&style=none&width=376.5)
然后我们需要设置[ WEB 安全域名](https://console.cloud.tencent.com/tcb/env/safety)，把你的域名放入白名单即可（本地测试的话端口也要对应上哦）

## 如何升级

### Vercel

#### 手动升级

找到 Vercel 帮你在创建的仓库，叫 `waline`  啦，编辑 `package.json`  中依赖版本号即可完成升级，版本号以 `npm` ![](https://img.shields.io/npm/v/@waline/vercel?color=critical&logo=npm&style=flat-square#height=19&id=ZBPqj&originHeight=20&originWidth=111&originalType=binary&status=done&style=none&width=105)  为准，因为 GitHub 由于考虑到电报机器人自动推送消息过于频繁影响到群友，会延迟推送

#### 自动升级

其实原理还是一样的，因为 Vercel 会监控仓库文件的变化来帮我们自动部署，那么我们要做的就是自动更改版本号，这里你可以用 `Github Actions`  实现，定时每隔半小时自动更新并 push，但这样似乎有点浪费资源，所以不怎么推荐，而我们这个仓库通常都是公开的（私有也没关系）
首先你需要安装一个应用[Renovate](https://github.com/marketplace/renovate),选择免费版计划即可，他会帮我们监控所用依赖的版本更新变化，并为提交一个 `PR` ，我们要做的只是合并 PR 而已，但手动合并之前也讲过，多少有点不方便，自动合并我们知道有打标签自动合并，GitHub Actions 工具人自动合并，这些大家搜以下关键词就好，但这个应用它本身实际上支持自动合并，查看[官方文档](https://docs.renovatebot.com/configuration-options/#automerge)发现在 `renovate.json`  中配置即可，注意依赖版本是测试版还是正式版哦，目前我们用到的是 `dependencies`  而不是 devDependencies 所以不要只顾复制粘贴

如果你是公开仓库，还可以使用[Mergify](https://github.com/marketplace/mergify)，安装完成后他能它免费帮我们自动合并公开仓库的 PR，我们设定一个条件，比如 PR 提交作者为 renovate，就自动帮我们点击合并，并删除多余分支，当然这些都需要配置，这里具体会在另一篇文档中讲到
{% note info simple %}以上两个应用你可以选择安装到全部仓库，或者只安装到选择的仓库{% endnote %}

如果你想懒的话可以先删除你现有的名为 Waine 的仓库，再 fork [我的仓库](https://github.com/ccknbc-actions/waline)，然后去你的 Vercel 解绑之前的仓库，再绑定你 fork 的仓库，最后点一下重新部署即可
但是如果你没用 tcb 就把 `.github/workflows/Update Waline TCB.yml`   里的文件删掉，因为涉及到自动部署更新云开发，还有环境变量问题，如果没设定会导致报错

### CloudBase

---

#### 一键部署

就是点击[我的应用](https://console.cloud.tencent.com/tcb/apps/index)找到 Waline 点击部署即可
![image.png](https://cdn.nlark.com/yuque/0/2021/png/8391407/1612711217029-250d0b1a-75d1-4a7c-9f4c-8a9413ab51fa.png#height=409&id=jhuJB&margin=%5Bobject%20Object%5D&name=image.png&originHeight=818&originWidth=1814&originalType=binary&size=86907&status=done&style=none&width=907)

#### 手动部署

##### 手动升级

就是去[仓库](https://github.com/walinejs/tcb-starter)复制粘贴修改过的文件的事情了，如果没有文件改动就点击 `保存并安装依赖`  即可（知道在哪了吧）

##### 自动升级

原理在上面讲了，结合 [Vercel 自动升级](#自动升级)部分查看，这部分其实可以作为上面的手动部署，或者自动部署？
你可以 fork [我的仓库](https://github.com/ccknbc-actions/waline) 进行更改，和上面提到的原理差不多，只是用到了 Actions（如果你之前没接触过这些，建议使用 Vercel 部署或者上面的一键部署，也比较方便），在合并 PR 后帮我们自动升级部署到云开发，解释一下几个密钥，您需要在 仓库的 `settings/secrets/actions` 中配置，组织的话可以把常用到的密钥添加为组织密钥
，比如 ID KEY 等

| 变量名                                         | 变量解释                                                                                                                                                                                         |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| SECRETID                                       | API 访问密钥 ID，可[点击这里](https://console.cloud.tencent.com/cam/capi)新建/查看                                                                                                               |
| SECRETKEY                                      | API 访问密钥 KEY，可[点击这里](https://console.cloud.tencent.com/cam/capi)新建/查看                                                                                                              |
| TCBFUNNAME（没什么好加密的，就叫 waline 算了） | 你想要新建/已有函数的名称，比如 `Waline`                                                                                                                                                         |
| TCBENVID                                       | 环境 ID，可[点击这里](https://console.cloud.tencent.com/tcb/env/overview)或[这里](https://console.cloud.tencent.com/tcb/env/index)查看，地址栏后也会显示，反正就是很多地方都在上面点一下就能看到 |

## 附录

### 邮件通知模板

```javascript
mailSubject: '{{parent.nick}}，您在 {{site.name}} 上发表的评论,收到了来自 {{self.nick}} 的回复',
mailSubjectAdmin: '{{site.name}} 上收到了来自 {{self.nick}} 的留言',
mailTemplate: '<head><base target="_blank"/><style id="scrollbar"type="text/css">::-webkit-scrollbar{width:0!important}pre{white-space:pre-wrap!important;word-wrap:break-word!important;*white-space:normal!important}pre{white-space:pre-wrap!important;word-wrap:break-word!important;*white-space:normal!important}#letter img{max-width:300px}</style><style id="from-wrapstyle"type="text/css">#form-wrap{overflow:hidden;height:447px;position:relative;top:0px;transition:all 1s ease-in-out.3s;z-index:0}</style><style id="from-wraphoverstyle"type="text/css">#form-wrap:hover{height:1300px;top:-200px}</style></head><body><div style="width: 530px;margin: 20px auto 0;height: 1000px;"><div id="form-wrap"><img src="https://cdn.jsdelivr.net/gh/Akilarlxh/Valine-Admin@v1.0/source/img/before.png"alt="before"style="position: absolute;bottom: 126px;left: 0px;background-repeat: no-repeat;width: 530px;height: 317px;z-index:-100"><div style="position: relative;overflow: visible;height: 1500px;width: 500px;margin: 0px auto;transition: all 1s ease-in-out .3s;padding-top:200px;"<form><div style="background: white;width: 95%;max-width: 800px;margin: auto auto;border-radius: 5px;border: 1px solid;overflow: hidden;-webkit-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.12);box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.18);"><img style="width:100%;overflow: hidden;"src="https://area.sinaapp.com/bingImg"/><div style="padding: 5px 20px;"><br><div><h3 style="text-decoration: none; color: #8fbc8f;">{{parent.nick}}，见信安：</h3></div><br><div id="letter"style="overflow:auto;height:300px;width:100%;display:block;word-break: break-all;word-wrap: break-word;"><p style="display: inline-block;">您在<a style="text-decoration: none;color: #8fbc8f"target="_blank"href="{{site.postUrl}} display: inline-block;">{{site.name}}</a>上发表的评论:</p><div style="border-bottom: #ddd 1px solid;border-left: #ddd 1px solid;padding-bottom: 20px;background-color: #eee;margin: 15px 0px;padding-left: 20px;padding-right: 20px;border-top: #ddd 1px solid;border-right: #ddd 1px solid;padding-top: 20px;font-family: "Arial", "Microsoft YaHei" , "黑体" , "宋体" , sans-serif;">{{parent.comment | safe}}</div><p>收到了来自{{self.nick}}的回复：</p><div style="border-bottom: #ddd 1px solid;border-left: #ddd 1px solid;padding-bottom: 20px;background-color: #eee;margin: 15px 0px;padding-left: 20px;padding-right: 20px;border-top: #ddd 1px solid;border-right: #ddd 1px solid;padding-top: 20px;font-family: "Arial", "Microsoft YaHei" , "黑体" , "宋体" , sans-serif;">{{self.comment | safe}}</div></div><br><div style="text-align: center;margin-top: 40px;"><img src="https://ae01.alicdn.com/kf/U0968ee80fd5c4f05a02bdda9709b041eE.png"alt="hr"style="width:100%; margin:5px auto 5px auto; display: block;"/><a style="text-transform: uppercase;text-decoration: none;font-size: 14px;border: 2px solid #ace0f9;color: #FFFFFF;padding: 10px;display: inline-block;margin: 10px auto 0;background-color: #8fbc8f;"target="_blank"href="{{site.postUrl}}">{{site.name}}｜请您签收~</a></div><p style="font-size: 12px;text-align: center;color: #999;">自动书记人偶竭诚为您服务！<br>©2020 - 2021 <a style="text-decoration:none; color:#8fbc8f"href="{{site.url}}">{{site.name}}</a></p></div></div></form></div><img src="https://cdn.jsdelivr.net/gh/Akilarlxh/Valine-Admin@v1.0/source/img/after.png"alt="after"style="      position: absolute;bottom: -2px;left: 0;background-repeat: no-repeat;width: 530px;height: 259px;z-index:100"></div></div></body>',
mailTemplateAdmin: '<head><base target="_blank"/><style id="scrollbar"type="text/css">::-webkit-scrollbar{width:0!important}pre{white-space:pre-wrap!important;word-wrap:break-word!important;*white-space:normal!important}#letter img{max-width:300px}</style><style id="from-wrapstyle"type="text/css">#form-wrap{overflow:hidden;height:447px;position:relative;top:0px;transition:all 1s ease-in-out.3s;z-index:0}</style><style id="from-wraphoverstyle"type="text/css">#form-wrap:hover{height:1300px;top:-200px}</style></head><body><div style="width: 530px;margin: 20px auto 0;height: 1000px;"><div id="form-wrap"><img src="https://cdn.jsdelivr.net/gh/Akilarlxh/Valine-Admin@v1.0/source/img/before.png"alt="before"style="position: absolute;bottom: 126px;left: 0px;background-repeat: no-repeat;width: 530px;height: 317px;z-index:-100"><div style="position: relative;overflow: visible;height: 1500px;width: 500px;margin: 0px auto;transition: all 1s ease-in-out .3s;padding-top:200px;"><form><div style="background: white;width: 95%;max-width: 800px;margin: auto auto;border-radius: 5px;border: 1px solid;overflow: hidden;-webkit-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.12);box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.18);"><img style="width:100%;overflow: hidden;"src="https://area.sinaapp.com/bingImg"/><div style="padding: 5px 20px;"><br><div><h3 style="text-decoration: none; color: #8fbc8f;">来自{{self.nick}}的留言:</h3></div><br><br><div id="letter"style="overflow:auto;height:300px;width:100%;display:block;word-break: break-all;word-wrap: break-word;"><div style="border-bottom: #ddd 1px solid;border-left: #ddd 1px solid;padding-bottom: 20px;background-color: #eee;margin: 15px 0px;padding-left: 20px;padding-right: 20px;border-top: #ddd 1px solid;border-right: #ddd 1px solid;padding-top: 20px;font-family: "Arial", "Microsoft YaHei" , "黑体" , "宋体" , sans-serif;">{{self.comment | safe}}</div></div><div style="text-align: center;margin-top: 40px;"><img src="https://ae01.alicdn.com/kf/U0968ee80fd5c4f05a02bdda9709b041eE.png"alt="hr"style="width:100%; margin:5px auto 5px auto; display: block;"/><a style="text-transform: uppercase;text-decoration: none;font-size: 14px;border: 2px solid #ace0f9;color: #FFFFFF;padding: 10px;display: inline-block;margin: 10px auto 0;background-color: #8fbc8f;"target="_blank"href="{{site.postUrl}}">{{site.name}}｜请您过目~</a></div><p style="font-size: 12px;text-align: center;color: #999;">©2020 - 2021 <a style="text-decoration:none; color:#8fbc8f"href="{{site.url}}">{{site.name}}</a></p></div></div></form></div><img src="https://cdn.jsdelivr.net/gh/Akilarlxh/Valine-Admin@v1.0/source/img/after.png"alt="after"style="      position: absolute;bottom: -2px;left: 0;background-repeat: no-repeat;width: 530px;height: 259px;z-index:100"></div></div></body>'
```

### 下载

[邮件通知模板下载](https://file.nmb.show/down.php/4ca88b8fe0729c213cd3a425f87d2f51.rar)（包含 Waline/Valine/Twikoo），您可以下载后根据官方文档提及的变量自行修改`index.js`相关内容，以上代码仅作参考，对于本文未涉及到的其他内容，请自行查看官方文档，如有错误，欢迎指正，谢谢！
