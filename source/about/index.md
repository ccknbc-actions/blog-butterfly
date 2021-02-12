---
title: 关于本站
description: CC的部落格 更新日志
aside: false
comments: false
translate_title: about
date: 2020-08-08 14:55:19
---

## 镜像站点

{% note success flat %} 以下排名不分先后，请选择适合自己访问较快的即可<br> **[GitHub](https://ccknbc.github.io) | [GitLab](https://ccknbc.gitlab.io) | [Gitee](https://ccknbc.gitee.io) | [Vercel](https://ccknbc.now.sh) | [Netlify](https://ccknbc.netlify.app) | [CloudFlare（等待获取测试资格中）]()** {% endnote %}

## 站点源码

{% note success flat %} 以下排名不分先后，请选择适合自己访问较快的即可<br> **[GitHub](https://github.com/ccknbc-actions/blog-butterfly) | [GitLab](https://gitlab.com/CCKNBC/ccknbc.gitlab.io) | [Gitee](https://gitee.com/ccknbc/blog-butterfly) | [Coding](https://ccknbc.coding.net/public/blog/blog-butterfly/git/files)** {% endnote %}

## 目录结构

blog
├─ .github
│	└─ workflows
│	 	├─ Baidu Sitemap Push.yml
│	 	├─ GitLab.yml
│	 	└─ Yuque.yml
├─ .gitignore
├─ .gitlab-ci.yml
├─ .mergify.yml
├─ LICENSE
├─ _config.butterfly.yml
├─ _config.yml
├─ config
├─ generate.py
├─ gulpfile.js
├─ hexo.sh
├─ manifest.json
├─ package-lock.json
├─ package.json
├─ renovate.json
├─ scaffolds
│	├─ draft.md
│	├─ page.md
│	└─ post.md
├─ scripts
│	├─ auto_open.js
│	└─ lazy-webp
│	 	├─ index.js
│	 	└─ lib
│	 	 	└─ process.js
├─ source
│	├─ 404.html
│	├─ LICENSE
│	├─ _data
│	│	├─ artalk.json
│	│	├─ twikoo.json
│	│	├─ waline.json
│	│	└─ widget.yml
│	├─ about
│	│	└─ index.md
│	├─ ads.txt
│	├─ background
│	│	└─ index.md
│	├─ bkpp
│	│	├─ index.md
│	│	└─ live
│	│	 	└─ index.md
│	├─ blogroll
│	│	└─ index.md
│	├─ brokenlinks.txt
│	├─ categories
│	│	└─ index.md
│	├─ charts
│	│	└─ index.md
│	├─ gallery
│	│	├─ demo
│	│	│	└─ index.md
│	│	├─ index.md
│	│	└─ real-style
│	│	 	└─ index.md
│	├─ google7787a6577761be93.html
│	├─ me
│	│	└─ index.md
│	├─ messages
│	│	└─ index.md
│	├─ moments
│	│	└─ index.md
│	├─ music
│	│	└─ index.md
│	├─ robots.txt
│	├─ say
│	│	└─ index.md
│	├─ sitemap
│	│	└─ index.html
│	├─ sub
│	│	└─ index.md
│	├─ tags
│	│	└─ index.md
│	├─ talk
│	│	└─ index.md
│	└─ will
│	 	└─ index.md
├─ sw-template.js
└─ themes
 	└─ butterfly
 	 	├─ .github
 	 	│	├─ ISSUE_TEMPLATE
 	 	│	│	├─ bug_report.md
 	 	│	│	├─ custom.md
 	 	│	│	└─ feature_request.md
 	 	│	├─ stale.yml
 	 	│	└─ workflows
 	 	│	 	└─ publish.yml
 	 	├─ LICENSE
 	 	├─ README.md
 	 	├─ README_CN.md
 	 	├─ _config.yml
 	 	├─ config
 	 	├─ git pull.bat
 	 	├─ languages
 	 	│	├─ default.yml
 	 	│	├─ en.yml
 	 	│	├─ zh-CN.yml
 	 	│	└─ zh-TW.yml
 	 	├─ layout
 	 	│	├─ 404.pug
 	 	│	├─ archive.pug
 	 	│	├─ category.pug
 	 	│	├─ includes
 	 	│	│	├─ additional-js.pug
 	 	│	│	├─ footer.pug
 	 	│	│	├─ head
 	 	│	│	│	├─ Open_Graph.pug
 	 	│	│	│	├─ analytics.pug
 	 	│	│	│	├─ config.pug
 	 	│	│	│	├─ config_site.pug
 	 	│	│	│	├─ google_adsense.pug
 	 	│	│	│	├─ noscript.pug
 	 	│	│	│	├─ preconnect.pug
 	 	│	│	│	├─ pwa.pug
 	 	│	│	│	└─ site_verification.pug
 	 	│	│	├─ head.pug
 	 	│	│	├─ header
 	 	│	│	│	├─ index.pug
 	 	│	│	│	├─ menu_item.pug
 	 	│	│	│	├─ nav.pug
 	 	│	│	│	├─ post-info.pug
 	 	│	│	│	└─ social.pug
 	 	│	│	├─ layout.pug
 	 	│	│	├─ loading
 	 	│	│	│	├─ loading-js.pug
 	 	│	│	│	└─ loading.pug
 	 	│	│	├─ mixins
 	 	│	│	│	├─ article-sort.pug
 	 	│	│	│	└─ post-ui.pug
 	 	│	│	├─ page
 	 	│	│	│	├─ artitalk.pug
 	 	│	│	│	├─ categories.pug
 	 	│	│	│	├─ default-page.pug
 	 	│	│	│	├─ flink.pug
 	 	│	│	│	├─ hpptalk.pug
 	 	│	│	│	└─ tags.pug
 	 	│	│	├─ pagination.pug
 	 	│	│	├─ post
 	 	│	│	│	├─ post-copyright.pug
 	 	│	│	│	└─ reward.pug
 	 	│	│	├─ rightside.pug
 	 	│	│	├─ sidebar.pug
 	 	│	│	├─ third-party
 	 	│	│	│	├─ aplayer.pug
 	 	│	│	│	├─ artitalk.pug
 	 	│	│	│	├─ card-post-count
 	 	│	│	│	│	├─ disqus.pug
 	 	│	│	│	│	├─ fb.pug
 	 	│	│	│	│	├─ index.pug
 	 	│	│	│	│	├─ twikoo.pug
 	 	│	│	│	│	├─ valine.pug
 	 	│	│	│	│	└─ waline.pug
 	 	│	│	│	├─ chat
 	 	│	│	│	│	├─ chatra.pug
 	 	│	│	│	│	├─ crisp.pug
 	 	│	│	│	│	├─ daovoice.pug
 	 	│	│	│	│	├─ gitter.pug
 	 	│	│	│	│	├─ index.pug
 	 	│	│	│	│	└─ tidio.pug
 	 	│	│	│	├─ comments
 	 	│	│	│	│	├─ artalk.pug
 	 	│	│	│	│	├─ beaudar.pug
 	 	│	│	│	│	├─ disqus.pug
 	 	│	│	│	│	├─ disqusjs.pug
 	 	│	│	│	│	├─ facebook_comments.pug
 	 	│	│	│	│	├─ gitalk.pug
 	 	│	│	│	│	├─ index.pug
 	 	│	│	│	│	├─ js.pug
 	 	│	│	│	│	├─ livere.pug
 	 	│	│	│	│	├─ twikoo.pug
 	 	│	│	│	│	├─ utterances.pug
 	 	│	│	│	│	├─ valine.pug
 	 	│	│	│	│	└─ waline.pug
 	 	│	│	│	├─ effect.pug
 	 	│	│	│	├─ math
 	 	│	│	│	│	├─ index.pug
 	 	│	│	│	│	├─ katex.pug
 	 	│	│	│	│	├─ mathjax.pug
 	 	│	│	│	│	└─ mermaid.pug
 	 	│	│	│	├─ newest-comments
 	 	│	│	│	│	├─ artalk-comment.pug
 	 	│	│	│	│	├─ disqus-comment.pug
 	 	│	│	│	│	├─ github-issues.pug
 	 	│	│	│	│	├─ index.pug
 	 	│	│	│	│	├─ twikoo-comment.pug
 	 	│	│	│	│	├─ valine.pug
 	 	│	│	│	│	└─ waline.pug
 	 	│	│	│	├─ pangu.pug
 	 	│	│	│	├─ pjax.pug
 	 	│	│	│	├─ prismjs.pug
 	 	│	│	│	├─ search
 	 	│	│	│	│	├─ algolia.pug
 	 	│	│	│	│	├─ index.pug
 	 	│	│	│	│	└─ local-search.pug
 	 	│	│	│	├─ share
 	 	│	│	│	│	├─ add-this.pug
 	 	│	│	│	│	├─ addtoany.pug
 	 	│	│	│	│	├─ index.pug
 	 	│	│	│	│	└─ share-js.pug
 	 	│	│	│	└─ subtitle.pug
 	 	│	│	└─ widget
 	 	│	│	 	├─ card_ad.pug
 	 	│	│	 	├─ card_announcement.pug
 	 	│	│	 	├─ card_archives.pug
 	 	│	│	 	├─ card_author.pug
 	 	│	│	 	├─ card_categories.pug
 	 	│	│	 	├─ card_newest_comment.pug
 	 	│	│	 	├─ card_post_toc.pug
 	 	│	│	 	├─ card_recent_post.pug
 	 	│	│	 	├─ card_self.pug
 	 	│	│	 	├─ card_tags.pug
 	 	│	│	 	├─ card_webinfo.pug
 	 	│	│	 	└─ index.pug
 	 	│	├─ index.pug
 	 	│	├─ page.pug
 	 	│	├─ post.pug
 	 	│	└─ tag.pug
 	 	├─ package.json
 	 	├─ scripts
 	 	│	├─ events
 	 	│	│	├─ 404.js
 	 	│	│	├─ init.js
 	 	│	│	└─ welcome.js
 	 	│	├─ filters
 	 	│	│	├─ post_lazyload.js
 	 	│	│	└─ random_cover.js
 	 	│	├─ helpers
 	 	│	│	├─ aside_archives.js
 	 	│	│	├─ aside_categories.js
 	 	│	│	├─ inject_head_js.js
 	 	│	│	├─ page.js
 	 	│	│	└─ related_post.js
 	 	│	└─ tag
 	 	│	 	├─ btn.js
 	 	│	 	├─ btns.js
 	 	│	 	├─ button.js
 	 	│	 	├─ checkbox.js
 	 	│	 	├─ dropmenu.js
 	 	│	 	├─ fancybox.js
 	 	│	 	├─ folding.js
 	 	│	 	├─ frame.js
 	 	│	 	├─ gallery.js
 	 	│	 	├─ ghbdage.js
 	 	│	 	├─ ghcard.js
 	 	│	 	├─ hide.js
 	 	│	 	├─ iconfont.js
 	 	│	 	├─ image.js
 	 	│	 	├─ inline-labels.js
 	 	│	 	├─ issues.js
 	 	│	 	├─ link.js
 	 	│	 	├─ media.js
 	 	│	 	├─ mermaid.js
 	 	│	 	├─ note.js
 	 	│	 	├─ poem.js
 	 	│	 	├─ site.js
 	 	│	 	├─ span.js
 	 	│	 	├─ table.js
 	 	│	 	├─ tabs.js
 	 	│	 	├─ timeline.js
 	 	│	 	└─ tip.js
 	 	└─ source
 	 	 	├─ css
 	 	 	│	├─ _global
 	 	 	│	│	├─ function.styl
 	 	 	│	│	└─ index.styl
 	 	 	│	├─ _highlight
 	 	 	│	│	├─ highlight
 	 	 	│	│	│	├─ diff.styl
 	 	 	│	│	│	└─ index.styl
 	 	 	│	│	├─ highlight.styl
 	 	 	│	│	├─ prismjs
 	 	 	│	│	│	├─ diff.styl
 	 	 	│	│	│	├─ index.styl
 	 	 	│	│	│	└─ line-number.styl
 	 	 	│	│	└─ theme.styl
 	 	 	│	├─ _layout
 	 	 	│	│	├─ 404.styl
 	 	 	│	│	├─ aside.styl
 	 	 	│	│	├─ chat.styl
 	 	 	│	│	├─ comments.styl
 	 	 	│	│	├─ footer.styl
 	 	 	│	│	├─ head.styl
 	 	 	│	│	├─ loading.styl
 	 	 	│	│	├─ pagination.styl
 	 	 	│	│	├─ post.styl
 	 	 	│	│	├─ relatedposts.styl
 	 	 	│	│	├─ reward.styl
 	 	 	│	│	├─ rightside.styl
 	 	 	│	│	├─ sidebar.styl
 	 	 	│	│	└─ third-party.styl
 	 	 	│	├─ _mode
 	 	 	│	│	├─ darkmode.styl
 	 	 	│	│	└─ readmode.styl
 	 	 	│	├─ _page
 	 	 	│	│	├─ archives.styl
 	 	 	│	│	├─ categories.styl
 	 	 	│	│	├─ common.styl
 	 	 	│	│	├─ flink.styl
 	 	 	│	│	├─ homepage.styl
 	 	 	│	│	└─ tags.styl
 	 	 	│	├─ _search
 	 	 	│	│	├─ algolia.styl
 	 	 	│	│	├─ index.styl
 	 	 	│	│	└─ local-search.styl
 	 	 	│	├─ _tags
 	 	 	│	│	├─ btns.styl
 	 	 	│	│	├─ button.styl
 	 	 	│	│	├─ checkbox.styl
 	 	 	│	│	├─ folding.styl
 	 	 	│	│	├─ gallery.styl
 	 	 	│	│	├─ ghcard.styl
 	 	 	│	│	├─ hexo.styl
 	 	 	│	│	├─ hide.styl
 	 	 	│	│	├─ image.styl
 	 	 	│	│	├─ inline-labels.styl
 	 	 	│	│	├─ link.styl
 	 	 	│	│	├─ media.styl
 	 	 	│	│	├─ note.styl
 	 	 	│	│	├─ poem.styl
 	 	 	│	│	├─ site-card.styl
 	 	 	│	│	├─ span.styl
 	 	 	│	│	├─ tabs.styl
 	 	 	│	│	├─ timeline.styl
 	 	 	│	│	└─ tip.styl
 	 	 	│	├─ _third-party
 	 	 	│	│	├─ font-awesome-animation.min.css
 	 	 	│	│	└─ normalize.min.css
 	 	 	│	├─ index.styl
 	 	 	│	└─ var.styl
 	 	 	└─ js
 	 	 	 	├─ main.js
 	 	 	 	├─ search
 	 	 	 	│	├─ algolia.js
 	 	 	 	│	└─ local-search.js
 	 	 	 	├─ tw_cn.js
 	 	 	 	└─ utils.js

## 更新日志

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

{% timenode 2020-06-04 **[本站诞生](https://blog.ccknbc.cc/)** %}

{% note success %} **[本站诞生](https://blog.ccknbc.cc)** {% endnote %}

{% endtimenode %}

{% endtimeline %}