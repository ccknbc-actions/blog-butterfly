---
title: Waline评论系统-部署日志
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
\*\*
**以下内容转载自 **[**官方文档**](https://waline.js.org/)**（就是懒得截图再写一遍）**

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

对于想白嫖的小白，Vercel + LeanCloud 是不错的选择，如果你主要面向对象为大陆用户，使用 CloudBase 部署也是个不错的选择，它在海外表现也没那么差，或者您仅使用 CloudBase 来做数据存储
{% note warning simple %}如果您使用 Vercel + LeanCloud，并且使用 Vercel 发送评论通知，您不必担心 LeanCloud 流控问题，并且之前使用过 Valine 或者部署过 Valine-Admin 项目的可以直接拿来用；对于评论转移，官方提供了[迁移助手](https://waline.js.org/migration/tool.html)供您使用，不用担心之前评论丢失的问题{% endnote %}

## Todo

- ✅ 邮件通知
- ✅ 微信通知
- ✅ QQ 通知
- ✅ Telegram 通知
- ✅ Akismet
- ✅ 文章统计
- ✅ 多语言同步
- ✅ 自定义语言支持
- ✅ 登录支持
- ✅ 评论管理
- ✅ 评论删除
- ✅ 其它数据库支持（已支持 LeanCloud, MySQL, MongoDB, SQLite, PostgreSQL)
- ✅ 基于 IP 的发布评论频率限制
- ✅ 基于关键词的评论过滤限制
- ✅ IP 黑名单
- ✅ 重复内容检测
- ✅ CloudBase 腾讯云开发部署支持
- ✅ 社交登录
- AWS, GCP, Azure 部署支持
- 置顶评论
- 评论赞踩
- 其它...

真·欢迎你为 Waline 的开发做贡献。
{% note warning simple %}目前社交登录仅支持 GitHub， 未来会支持更多平台 {% endnote %}

## 快速开始

如果你想在某个网页或者文章页中使用 Waline，请参照以下步骤配置

获取 APP ID 和 APP Key

请先[登录](https://console.leancloud.app/login.html#/signin)或[注册](https://console.leancloud.app/login.html#/signup) `LeanCloud 国际版`, 进入[控制台](https://console.leancloud.app/applist.html#/apps)后点击左下角[创建应用](https://console.leancloud.app/applist.html#/newapp)：

![](https://cdn.nlark.com/yuque/0/2021/jpeg/8391407/1610868219177-9a02156c-05b0-483d-9caa-77235c04852a.jpeg#align=left&display=inline&height=456&margin=%5Bobject%20Object%5D&originHeight=456&originWidth=616&size=0&status=done&style=none&width=616)

应用创建好以后，进入刚刚创建的应用，选择左下角的`设置`>`应用Key`，然后就能看到你的`APP ID`,`APP Key`和`Master Key`了：

![](https://cdn.nlark.com/yuque/0/2021/jpeg/8391407/1610868354384-7ecf0d71-1b44-4899-a7c0-b6c36e843066.jpeg#align=left&display=inline&height=533&margin=%5Bobject%20Object%5D&originHeight=533&originWidth=1202&size=0&status=done&style=none&width=1202)

> **注：**
> 这里推荐使用 Leancloud 国际版。如果你确实想用 Leancloud 国内版的话（国际版是 [leancloud.app](https://leancloud.app)，非国际版是 [leancloud.cn](https://leancloud.cn)），除了 `APP_ID`, `APP_Key` 和 `Master Key` 之外，还需要对应用进行域名绑定。
> 进入应用后选择 >  > API 访问域名 > 输入需要绑定的已备案域名点击 。之后按照页面上的提示去 DNS 上做正确的 CNAME 解析即可。
> ![](https://cdn.nlark.com/yuque/0/2021/png/8391407/1610868218749-74f7fc74-7643-4216-bb1b-b72e955cbc52.png#align=left&display=inline&height=1259&margin=%5Bobject%20Object%5D&originHeight=1259&originWidth=2891&size=0&status=done&style=none&width=2891)

## Vercel 部署

[ ![](https://cdn.nlark.com/yuque/0/2021/svg/8391407/1610867589839-a3477ee0-1238-40d2-9099-8ca638620019.svg#align=left&display=inline&height=32&margin=%5Bobject%20Object%5D&originHeight=32&originWidth=92&size=0&status=done&style=none&width=92) ](https://vercel.com/import/project?template=https://github.com/lizheming/waline/tree/master/example)

点击上方按钮，跳转至 Vercel 进行快速部署。未登录的话需要登录，这里选 Github 登录即可。登录后会让你输入 Vercel 项目名称。

![](https://cdn.nlark.com/yuque/0/2021/png/8391407/1610867589321-78ee1ab7-5ba8-4e29-95ce-cef3bbbb14d9.png#align=left&display=inline&height=1880&margin=%5Bobject%20Object%5D&originHeight=1880&originWidth=2200&size=0&status=done&style=none&width=2200)

输入名称后点击 进入下一步，输入 Github 仓库名称。Vercel 会基于 waline 模板帮助你新建并初始化该仓库。

![](https://cdn.nlark.com/yuque/0/2021/png/8391407/1610867589161-d8ff248a-e504-4629-99d4-fe42d408fcb9.png#align=left&display=inline&height=1880&margin=%5Bobject%20Object%5D&originHeight=1880&originWidth=2200&size=0&status=done&style=none&width=2200)

仓库初始化完毕后开始准备部署到 Vercel。这里需要在 Environment Variables 初配置 `LEAN_ID`, `LEAN_KEY` 和 `LEAN_MASTER_KEY` 三个环境变量。它们的值分别对应上一步在 LeanCloud 中获得的 `APP ID`, `APP KEY`, `Master Key`。如果你是 LeanCloud 国内版用户的话，还需要输入 `LEAN_SERVER` 环境变量，对应的是你在上一步上绑定的已备案域名。

![](https://cdn.nlark.com/yuque/0/2021/png/8391407/1610867589089-57cb1f84-bb5e-4f20-a190-15f915d08cfc.png#align=left&display=inline&height=2218&margin=%5Bobject%20Object%5D&originHeight=2218&originWidth=2200&size=0&status=done&style=none&width=2200)

点击 就会开始进行部署了。稍等片刻，就会看到满屏的烟花庆祝你部署成功了。点击 会跳转到部署好的网站地址上，该地址即为之后需要填入的 `serverURL` 地址。

![](https://cdn.nlark.com/yuque/0/2021/png/8391407/1610867589610-8471bd9a-88c7-4604-86d1-d100563c914e.png#align=left&display=inline&height=1100&margin=%5Bobject%20Object%5D&originHeight=1100&originWidth=2143&size=0&status=done&style=none&width=2143)

## HTML 片段

修改初始化对象中的 `serverURL` 的值为上面刚刚获取到的二级域名即可(其他可以默认)。

```html
<head>
  ..
  <script src="//cdn.jsdelivr.net/npm/@waline/client/dist/Waline.min.js"></script>
  ...
</head>
<body>
  ...
  <div id="waline"></div>
  <script>
    new Waline({
      el: "#waline",
      path: location.pathname,
      serverURL: "https://your-domain.vercel.app",
    });
  </script>
</body>
```

## 配置

修改初始化对象中的 `serverURL` 的值为上面刚刚获取到的二级域名即可(其他可以默认)。

```javascript
new Waline({
  el: "#waline",
  path: location.pathname,
});
```

## NPM

Waline 已发布到[npm](https://www.npmjs.com/package/@waline/client)，可以直接用命令安装：

```bash
# Install waline
npm install @waline/client --save-dev
```

```javascript
// Use import
import Waline from "@waline/client";
// or Use require
const Waline = require("@waline/client");

new Waline({
  el: "#waline",
  // other config
});
```

## 评论数据管理

Waline 还带有简单的后台，可以实现对评论的管理。部署完成后访问 `<serverURL>/ui/register` 进行注册，第一个注册的你会被设定成管理员。登录成功后就可以看到评论管理的界面了，大家可以收藏该地址方便后续使用。

### 配置项

这个可直接参考官方文档按需进行配置即可，因为目前云开发因众所周知的原因不支持连接 Telegram 服务器，所以如果您要配置电报新评论通知，请使用 Vercel 进行配置，不过因为目前没有异步通知，加上反垃圾检测等功能，发布评论可能需要很长时间，这个我使用了 LeanCloud 来继续帮我发送通知（反正我也没什么评论，流控问题第二天补发评论也不是不可）
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

客户端脚本里可以通过 langMode.admin 这个配置自定义角标的文案,例如：

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

## CloudBase 云开发部署

### 一键部署

Waline 还支持一键部署到腾讯云开发上。点击下方按钮，跳转至腾讯云开发进行快速部署。登录之后会让你选择部署的欢迎，你可以选择已有的应用，也可以选择新建应用。

[ ![](https://cdn.nlark.com/yuque/0/2021/svg/8391407/1610869486672-8e5192f0-efdb-46ae-9a42-45935fc9dea5.svg#align=left&display=inline&height=32&margin=%5Bobject%20Object%5D&originHeight=32&originWidth=156&size=0&status=done&style=none&width=156) ](https://console.cloud.tencent.com/tcb/env/index?action=CreateAndDeployCloudBaseProject&tdl_anchor=github&tdl_site=0&appUrl=https%3A%2F%2Fgithub.com%25walinejs%2Ftcb-starter&workDir=%2F&appName=waline)

{% note warning simple %}
一键部署虽然方便，但是仅支持按量计费环境——也就是说，**一键部署的环境，当免费资源用尽后，将会产生费用**。且按量计费环境无法切换为包年包月环境。
大多数情况下，免费资源能够满足日访问量在 10,000 以下的站点（参考：[免费资源如何计算？](https://twikoo.js.org/faq.html#%E5%85%8D%E8%B4%B9%E8%B5%84%E6%BA%90%E5%A6%82%E4%BD%95%E8%AE%A1%E7%AE%97)）。
如果您希望，当免费资源用尽时，不产生费用，请使用手动部署。{% endnote %}

![](https://cdn.nlark.com/yuque/0/2021/png/8391407/1610869486667-d7cc23ce-c0ae-4167-a410-85524718a44d.png#align=left&display=inline&height=2248&margin=%5Bobject%20Object%5D&originHeight=2248&originWidth=2082&size=0&status=done&style=none&width=2082)
对于新用户或者说没有创建过按量计费环境的用户会显示如下内容，记得勾选开启免费资源
![image.png](https://cdn.nlark.com/yuque/0/2021/png/8391407/1610873567827-825cde85-7c99-4c5a-95e0-44c0966784cb.png#align=left&display=inline&height=632&margin=%5Bobject%20Object%5D&name=image.png&originHeight=632&originWidth=1006&size=46404&status=done&style=none&width=1006)
点击后再点击，就会跳转到应用部署界面自动进行部署。此时会提示你“构建中，预计 3-5 分钟”，稍等片刻，该条目右侧就会出现访问和管理按钮。

![](https://cdn.nlark.com/yuque/0/2021/png/8391407/1610869486759-1cbce382-e2b8-4b04-8b57-3771f0bc8cd4.png#align=left&display=inline&height=2248&margin=%5Bobject%20Object%5D&originHeight=2248&originWidth=2670&size=0&status=done&style=none&width=2670)

点击 按钮获得最终部署好的网站地址，将其填入前端脚本的 `serverURL` 配置中，即可完成整个的配置。

### 手动部署

首先前往**[腾讯云的活动区域](https://cloud.tencent.com/act/pro/cloudbase01)**，注册/登陆后往下滑，找到新用户专享云开发标准型（基础版 1）资源套餐，0 元购买一个免费包年包月环境
![image.png](https://cdn.nlark.com/yuque/0/2021/png/8391407/1610870670315-08e65148-3819-48fb-878e-03fdb0c9ab64.png#align=left&display=inline&height=536&margin=%5Bobject%20Object%5D&name=image.png&originHeight=536&originWidth=1493&size=52310&status=done&style=none&width=1493)
按照提示购买后稍等几分钟，[在这个界面可查看您所购买的环境](https://console.cloud.tencent.com/tcb/env/index)，
![image.png](https://cdn.nlark.com/yuque/0/2021/png/8391407/1610870083481-8e4cad1a-c70a-4cad-9192-11be8003241c.png#align=left&display=inline&height=233&margin=%5Bobject%20Object%5D&name=image.png&originHeight=233&originWidth=523&size=10168&status=done&style=none&width=523)

##

## 如何升级

### Vercel

#### 手动升级

#### 自动升级

### CloudBase

#### 一键部署

咕咕咕 因为我把环境删了，所以没办法截图，就是点击[我的应用](https://console.cloud.tencent.com/tcb/apps/index)找到 Waline 点击部署即可

#### 手动部署

##### 手动升级

##### 自动升级
