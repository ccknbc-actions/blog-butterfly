---
title: 时间线
date: 2020-08-08 14:55:19
type: timeline
aside: false
comments: false
---

## 镜像站点

> **[Github](https://ccknbc.github.io/) | [Gitlab](https://ccknbc.gitlab.io/) | [Gitee](https://ccknbc.gitee.io/) | [Vercel](https://ccknbc.vercel.app/) | [Netlify](https://ccknbc.netlify.app/)**

{% timeline 升级小助手 %}

{% timenode 2020-11-23 **出于博客体验的更新** %}

1. 关闭了`Tidio`在线聊天（因此`邮件订阅`文章更新方式-1，无所谓，也不会有人订阅）
2. 关闭了浏览器订阅文章更新通知（我也没什么`公告`，临时公告采用`snackbar`读取js的方式）
3. 关闭了`百度统计`，`不蒜子统计`
4. 关闭了`阅读`模式，`简繁`转换按钮
5. 限制了`境外IP`访问某些页面
6. 主`评论`系统换为 **[Twikoo](https://twikoo.js.org/)**
7. 全站`默哀`日当天加入7秒`弹窗`提示（单纯喜欢7，可手动关闭）
8. 其他小更改，后续可能会关闭`封面`和`顶部图`

{% endtimenode %}

{% timenode 2020-10-15 **订阅方式更新** %}

{% note success %} 新增了邮件订阅，恢复了浏览器订阅 {% endnote %}

{% endtimenode %}

{% timenode 2020-10-07 **修复问题** %}

{% note warning %} 因使用`Github Actions`配合`gulp`、`imagemin`定时自动压缩优化图片，导致文件名重写，批量修改文章图片链接以修复图片加载失败，现已正常显示 {% endnote %}

{% endtimenode %}

{% timenode 2020-10-02 **小幅修改** %}

`Github Actions`触发方式修改，并借助`Actions`配置定时百度推送以优化`SEO`，补齐封面

{% endtimenode %}

{% timenode 2020-10-01 **突发状况** %}

{% note warning %} 因`不蒜子`证书到期原因，https协议无法访问，统计功能受限，恢复时间未知 {% endnote %}

{% endtimenode %}

{% timenode 2020-09-14 **评论系统更换** %}

1. 停用`Valine`评论系统，换用`Disqusjs`评论系统，保留`Beaudar`评论系统

2. 加入在线聊天系统（由`Tidio`提供支持）

{% endtimenode %}

{% timenode 2020-08-18 **完成自动部署** %}

{% note success %} 完成`Github Actions`以及`Gitlab CI`自动动部署，并配有自动更新`Gitee`部署 {% endnote %}

{% note warning %} 因仓库以及博客采用匹配次级目录索引方式，`Coding`、`Netlify`、`Vercel` 无法正常索引和获取样式，已取消托管服务 {% endnote %}

{% endtimenode %}

{% timenode 2020-06-04 **[本站诞生](/blog)** %}

{% note success %} **[本站诞生](/blog)** {% endnote %}

{% endtimenode %}

{% endtimeline %}