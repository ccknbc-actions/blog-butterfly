---
title: 时间线
description: CC的部落格 更新日志
type: timeline
aside: false
comments: false
translate_title: timeline
date: 2020-08-08 14:55:19
---

## 镜像站点

{% note success flat %} 以下排名不分先后，请选择适合自己访问较快的即可<br> **[GitHub](https://ccknbc.github.io/) | [Gitlab](https://ccknbc.gitlab.io/) | [Gitee](https://ccknbc.gitee.io/) | [Vercel](https://ccknbc.now.sh/) | [Netlify](https://ccknbc.netlify.app/) | [CloudFlare（等待获取测试资格中）]()** {% endnote %}
## 升级小助手

{% timeline %}

{% timenode 2021-01-22 **小小的更新** %}

1. 评论系统增加`Twikoo`，为双评论模式，但都配有人工审核
2. 友链去除了`Jquery`[@卓越科技](https://blog.zykjofficial.top)
3. `rightside` 增加编辑按钮，并根据文章和页面进行自适应平台标题显示

{% endtimenode %}

{% timenode 2021-01-05 **评论系统的更新** %}

1. 评论系统换为`Waline`
2. 一些小改动

{% endtimenode %}

{% timenode 2020-12-28 **关于自我认知的更新** %}

1. 谷歌字体换为官方源
2. 重新启用谷歌分析（慢还是要在乎海外表现啊）
3. 评论系统换为需要登陆的`DIsqusJS`和`LiveRe`，并在文章底部引导至`语雀`评论区
4. 博客原文全部托管在`语雀`，开始用心经营`语雀`，并且不要脸的申请了{% span blue, 原创声明 %}
5. 自动部署触发感谢`Gitlab`和`百度云函数`

    立个{% span green, Flag %}：不再折腾评论系统 
    {% span red, 因本人太菜，加上现在人其实不怎么会评论了，关于垃圾评论，登录至少劝退一波 %}{% emp （确认无误）%} 

{% endtimenode %}

{% timenode 2020-12-15 **出于博客体验的更新** %}

1. 引入了谷歌字体，由 `DogeDoge` 提供 `CDN` 加速

2. 增加了[站点地图](/sitemap)单页面
3. 去除了无用`js`引入
4. 封面换为静态图
5. `SEO`优化，站点访问速度优化
6. 搜索换为 `Algolia`
7. 其他更新，继续优化中......

{% endtimenode %}

{% timenode 2020-11-26 **~~出于花里胡哨的回滚~~** %}

1. ~~关闭了`Tidio`在线聊天（因此`邮件订阅`文章更新方式-1，无所谓，也不会有人订阅）~~

2. ~~关闭了浏览器订阅文章更新通知（我也没什么`公告`，临时公告采用`snackbar`读取js的方式）~~

3. ~~关闭了`百度统计`，`不蒜子统计`~~

4. ~~关闭了`阅读`模式，`简繁`转换按钮~~

5. ~~限制了`境外IP`访问某些页面~~

6. ~~主`评论`系统换为 **[Twikoo](https://twikoo.js.org/)**~~

7. ~~全站`默哀`日当天加入7秒`弹窗`提示（单纯喜欢7，可手动关闭）~~

8. ~~其他小更改，后续可能会关闭`封面`和`顶部图`~~

{% note success %} ***简而言之，因为本来就没人访问，体验不重要了*** {% endnote %}

{% endtimenode %}

{% timenode 2020-11-23 **出于博客体验的更新** %}

👆看上面

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