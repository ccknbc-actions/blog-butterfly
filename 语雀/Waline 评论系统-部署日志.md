---
title: Waline 评论系统-部署日志
translate_title: waline-commens-system-deployment-logs
date: 2021-01-17 00:00:00
updated: 2021-01-17 00:00:00
tags: [工具, 评论, Waline]
categories: [工具, 评论]
keywords: [工具, 评论, Waline]
description: Waline评论系统-部署日志，希望你也能用上这款评论系统
cover: https://cdn.jsdelivr.net/gh/ccknbc-backup/photos/blog/2021-01-17~15-08-37.webp
photos: https://cdn.jsdelivr.net/gh/ccknbc-backup/photos/blog/2021-01-17~15-08-37.webp
comments: true
copyright_author_href: https://www.ccknbc.cc
id: 20
---

本文首发在[**语雀**](https://www.yuque.com/ccknbc/blog/20)
自动同步更新至[**CC 的部落格**](https://blog.ccknbc.cc/posts/waline-commens-system-deployment-logs)

---

Waline - 一款从 [Valine](https://valine.js.org) 衍生的带后端评论系统。可以将 Waline 等价成 With backend Valine.

## 特性

- 快速
- 真·安全
- Markdown 语法支持
- 轻量易用
- 免费部署
- 多种部署部署方式和存储服务支持，每列选择一项多达 48 种部署方式任君选择
  | | Waline | |
  | --- | --- | --- |
  | **客户端脚本** | **服务端部署** | **数据存储** |
  | @waline/client | Vercel | LeanCloud |
  | MiniValine | CloudBase | CloudBase |
  | | Docker | MongoDB |
  | | 独立部署 | MySQL |
  | | | SQLite |
  | | | PostgreSQL |

对于想白嫖的小白， `Vercel`  + `LeanCloud`  是不错的选择，如果你主要面向对象为大陆用户，使用 `CloudBase`  部署也是个不错的选择，它在海外表现也没那么差，或者您仅使用 `CloudBase`  来做数据存储
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
{% checkbox green checked, 其它数据库支持（已支持 LeanCloud, CloudBase, MySQL, MongoDB, SQLite, PostgreSQL) %}
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

这部分请前往[官方文档](https://waline.js.org/quick-start.html)查看，不过需要注意的是如果你的 `GitHub`  账号主邮箱是 `QQ`  邮箱的话建议更改为其他邮箱（毕竟他们认为 QQ 邮箱是垃圾邮箱）再去注册 Vercel（或者你可以选择给客服发一封邮件让他们帮忙解锁你的账号）
如果您之前用过 Valine，那么关于 LeanCloud 部分你就不用做什么了，数据兼容，拿到那几个 `key`  即可

### 配置项

这个可直接参考官方文档按需进行配置即可，因为目前云开发因众所周知的原因不支持连接 `Telegram`  服务器，所以如果您要配置电报新评论通知，请使用 Vercel 进行配置，不过因为目前没有异步通知，加上反垃圾检测等功能，发布评论可能需要很长时间，这个我使用了 LeanCloud 来继续帮我发送通知（反正我也没什么评论，流控问题第二天补发评论也不是不可）
{% note warning simple %}对于邮件通知部分，目前的设定是，对于新评论，如果博主配置了 QQ/微信/Telegram 通知中任意一种或多种，则邮件通知将会取消，而对于回复（子评论），博主和被回复者（如果填了邮箱的话）均可收到邮件通知{% endnote %}
我目前使用的 Hexo Butterfly 主题已经从 3.5.0 beta3 版本起内置了 Waline 评论系统，如果您使用老版本主题请升级，或者根据您所用版本的 Valine 模板 pug 来照葫芦画瓢，根据官方配置进行对应修改，主题中 option 为可选配置，万一将来增加了某些配置，主题不必为此升级, bg 为主题配置项

```yaml
# waline - A simple comment system with backend support fork from Valine
# https://waline.js.org/
waline:
  serverURL: https://waline.ccknbc.ml # Waline server address url
  avatar: monsterid # gravatar style https://zh-tw.gravatar.com/site/implement/images/#default-image
  bg: false # waline background
  emojiCDN: https://cdn.jsdelivr.net/gh/GamerNoTitle/ValineCDN@master/
  option:
    pageSize: 10
    requiredFields: mail
    # anonymous: false
    placeholder: 可匿名评论，但您的评论必须经人工审核通过后才会显示，并可收到相关回复邮件通知，因此邮箱为必填项
    avatarCDN: https://sdn.geekzu.org/avatar/
```

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

还有就是可能有人会觉得默认邮件通知模板太单调，想和 Valine-Admin 一样切换模板，其实有这个配置的，只是目前的方法是写在环境变量中，而环境变量限制长度（大小），或者说是不适合这种方式配置，如果要改的话可以先查看[issues/106](https://github.com/lizheming/waline/issues/106)相关内容，或者等以后优化再说；当然如果你的评论不是很多，并且之前配置过 Valine-Admin，那么你仍然可以使用 LeanCloud 来做异步发送通知，关闭默认的通知配置，或者使用 js 推送

[评论 Hooks](https://waline.js.org/server/basic.html#%E8%AF%84%E8%AE%BA-hooks)，可以根据官方的例子自己做一些配置，相比于其他，违禁词，屏蔽 IP 等配置可以说是人性化了，但万一配置不好一些正常评论可能也会被判定为垃圾内容，所以我推荐使用人工审核功能，不过这边不得不说另一个评论系统 [Twikoo](https://twikoo.js.org/)，支持查看自己审核中的评论，评论置顶，点赞等，不过我想 Waline 将来也能实现，毕竟 Flag 立那了

图片上传 uploadImage 部分配置 理论上是可以适配任何图床，配置例子可查看 [issues/123](https://github.com/lizheming/waline/issues/123)，当然内置了一个默认图床，开箱即用

表情配置和之前 Valine 是一样的，同主题还可使用 `walien.json`  的配置方式，具体可查看[主题文档](https://butterfly.js.org/posts/ceeb73f/#%E8%A9%95%E8%AB%96)

## CloudBase 云开发部署

### 一键部署

一键脚本部署可以查看[官方文档](https://waline.js.org/server/cloudbase.html)，对于日访问量低于一万的站点来说够用了，但我因为删除了环境，懒得再弄了，包年包月环境挺好的
（至于我为什么拉不起云开发部署应用，就是作者链接给错了（见[Commit](https://github.com/lizheming/waline/commit/d815054bd4354e64016e147fb8deb50cf4511640)），当然我解决了之后，作者也不忘阴阳怪气的 “那您可真是棒棒的呢” ，当然是我自己不懂提问的智慧，这与作者没什么关系的，确信）

---

警告内容来自 [Twikoo 官方文档](https://twikoo.js.org/quick-start.html) 建议您直接查看 [手动部署部分](#手动部署)！！！
{% note warning simple %}
一键部署虽然方便，但是仅支持按量计费环境——也就是说，**一键部署的环境，当免费资源用尽后，将会产生费用，**且按量计费环境无法切换为包年包月环境。
大多数情况下，免费资源能够满足日访问量在 10,000 以下的站点（参考：[免费资源如何计算？](https://twikoo.js.org/faq.html#%E5%85%8D%E8%B4%B9%E8%B5%84%E6%BA%90%E5%A6%82%E4%BD%95%E8%AE%A1%E7%AE%97)）。
如果您希望，当免费资源用尽时，不产生费用，请使用手动部署。
注意：云开发免费额度变更
腾讯云已取消免费的云开发基础版 1 套餐（参考[产品定价 (opens new window)](https://cloud.tencent.com/document/product/876/39095)），同时还调整了按量计费环境的免费额度（参考[免费额度 (opens new window)](https://cloud.tencent.com/document/product/876/47816)），新的免费额度数据库读操作数由原先的 50000 次 / 天降至 500 次 / 天，**已无法支撑 Twikoo 的运行需求**。请暂时放弃免费搭建或购买 6.9 元 / 月的新特惠基础版 1，Twikoo 将会尽快寻找解决方案。
**此次免费额度变更暂时不会影响已有环境**，已有环境用户请勿随意销毁现有的基础版 1 环境。
{% endnote %}
![image.png](https://cdn.nlark.com/yuque/0/2021/png/8391407/1610953378969-db93161e-24d3-4a48-8934-5566774b94d2.png#align=left&display=inline&height=204&margin=%5Bobject%20Object%5D&name=image.png&originHeight=204&originWidth=423&size=11059&status=done&style=none&width=423)
对于新用户或者说没有创建过按量计费环境的用户会显示如下内容，记得勾选开启免费资源
![image.png](https://cdn.nlark.com/yuque/0/2021/png/8391407/1610873567827-825cde85-7c99-4c5a-95e0-44c0966784cb.png#align=left&display=inline&height=632&margin=%5Bobject%20Object%5D&name=image.png&originHeight=632&originWidth=1006&size=46404&status=done&style=none&width=1006)

为了日后升级的方便，不管您是否使用了 Vercel 部署，您都可以 fork [我的仓库](https://github.com/ccknbc-actions/waline) ，稍加配置即可完成自动部署更新

### 手动部署

首先前往**[腾讯云的活动区域](https://cloud.tencent.com/act/pro/cloudbase01)**，注册/登陆后往下滑，找到新用户专享云开发标准型（基础版 1）资源套餐，0 元购买一个免费包年包月环境

---

没错，这个环境不错吧
![image.png](https://cdn.nlark.com/yuque/0/2021/png/8391407/1610870670315-08e65148-3819-48fb-878e-03fdb0c9ab64.png#align=left&display=inline&height=536&margin=%5Bobject%20Object%5D&name=image.png&originHeight=536&originWidth=1493&size=52310&status=done&style=none&width=1493)
按照提示购买后稍等几分钟，[在这个界面可查看您所购买的环境](https://console.cloud.tencent.com/tcb/env/index)
![image.png](https://cdn.nlark.com/yuque/0/2021/png/8391407/1610870083481-8e4cad1a-c70a-4cad-9192-11be8003241c.png#align=left&display=inline&height=233&margin=%5Bobject%20Object%5D&name=image.png&originHeight=233&originWidth=523&size=10168&status=done&style=none&width=523)

##

## 如何升级

### Vercel

#### 手动升级

找到 Vercel 帮你在创建的仓库，叫 `waline`  啦，编辑 `package.json`  中依赖版本号即可完成升级，版本号以 `npm` ![](https://img.shields.io/npm/v/@waline/vercel?color=critical&logo=npm&style=flat-square#align=left&display=inline&height=20&margin=%5Bobject%20Object%5D&originHeight=20&originWidth=105&status=done&style=none&width=105)  为准，因为 GitHub 由于考虑到电报机器人自动推送消息过于频繁影响到群友，会延迟推送

#### 自动升级

其实原理还是一样的，因为 Vercel 会监控仓库文件的变化来帮我们自动部署，那么我们要做的就是自动更改版本号，这里你可以用 `Github Actions`  实现，定时每隔半小时自动更新并 push，但这样似乎有点浪费资源，所以不怎么推荐，而我们这个仓库通常都是公开的（私有也没关系）
首先你需要安装一个应用[Renovate](https://github.com/marketplace/renovate),选择免费版计划即可，他会帮我们监控所用依赖的版本更新变化，并为提交一个 `PR` ，我们要做的只是合并 PR 而已，但手动合并之前也讲过，多少有点不方便，自动合并我们知道有打标签自动合并，GitHub Actions 工具人自动合并，这些大家搜以下关键词就好，但这个应用它本身实际上支持自动合并，查看[官方文档](https://docs.renovatebot.com/configuration-options/#automerge)发现在 `renovate.json`  中配置即可，注意依赖版本是测试版还是正式版哦，目前我们用到的是 `dependencies`  而不是 devDependencies 所以不要只顾复制粘贴

如果你是公开仓库，还可以使用[Mergify](https://github.com/marketplace/mergify)，安装完成后他能它免费帮我们自动合并公开仓库的 PR，我们设定一个条件，比如 PR 提交作者为 renovate，就自动帮我们点击合并，并删除多余分支，当然这些都需要配置，这里具体会在另一篇文档中讲到
{% note info simple %}以上两个应用你可以选择安装到全部仓库，或者只安装到选择的仓库{% endnote %}

如果你想懒的话可以先删除你现有的名为 Waine 的仓库，再 fork [我的仓库](https://github.com/ccknbc-actions/waline)，然后去你的 Vercel 解绑之前的仓库，再绑定你 fork 的仓库，最后点一下重新部署即可

### CloudBase

---

#### 一键部署

咕咕咕 因为我把环境删了，所以没办法截图，就是点击[我的应用](https://console.cloud.tencent.com/tcb/apps/index)找到 Waline 点击部署即可

#### 手动部署

[点击这里](https://console.cloud.tencent.com/tcb/scf)新建云函数，[按照官方仓库](https://github.com/walinejs/tcb-starter)所有文件新建文件，最后点击保存并安装依赖即可，因为函数入口等原因
![image.png](https://cdn.nlark.com/yuque/0/2021/png/8391407/1610952138456-e87fa0a3-7cbb-4ff7-8813-bce532860885.png#align=left&display=inline&height=582&margin=%5Bobject%20Object%5D&name=image.png&originHeight=582&originWidth=687&size=31215&status=done&style=none&width=687)

##### 手动升级

就是去[仓库](https://github.com/walinejs/tcb-starter)复制粘贴的事情了

##### 自动升级

你可以 fork [我的仓库](https://github.com/ccknbc-actions/waline) 进行更改，和上面提到的原理差不多，只是用到了 Actions（如果你之前没接触过这些，建议使用 Vercel 部署或者上面的一键部署，也比较方便），在合并 PR 后帮我们自动升级部署到云开发，解释一下几个密钥，您需要在 仓库的 settings/secrets/actions 中配，组织的话可以把常用到的密钥添加为组织密钥
，比如 ID KEY 等

| 变量名                   | 变量解释                                                                                                                                                 |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SECRETID                 | API 访问密钥 ID，可[点击这里](https://console.cloud.tencent.com/cam/capi)新建/查看                                                                       |
| SECRETKEY                | API 访问密钥 KEY，可[点击这里](https://console.cloud.tencent.com/cam/capi)新建/查看                                                                      |
| TCBFUNNAME（直接写算了） | 你想要新建/已有函数的名称，比如 `Waline`                                                                                                                 |
| TCBENVID                 | 环境 ID，可[点击这里](https://console.cloud.tencent.com/tcb/env/overview)或[这里](https://console.cloud.tencent.com/tcb/env/index)查看，地址栏后也会显示 |
