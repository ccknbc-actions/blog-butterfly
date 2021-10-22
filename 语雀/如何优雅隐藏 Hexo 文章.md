---

title: 如何优雅隐藏 Hexo 文章
translate_title: how-to-hide-hexo-articles-gracefully
subtitle: How to hide Hexo articles gracefully
date: 2021-10-22 21:00:00
updated: 2021-10-22 21:00:00
tags: [博客,Hexo]
keywords: [博客,Hexo]
categories: 博客
description: 本文介绍三种方法来优雅隐藏 Hexo 文章
cover: https://cdn.jsdelivr.net/gh/ccknbc-backup/photos@master/blog/2021-10-22~23-50-29.webp
id: 30

---

本文介绍三种方法来优雅隐藏 Hexo 文章
_<!-- more -->_

本文首发在[**语雀**](https://www.yuque.com/ccknbc/blog/30)
自动同步更新至[**CC 的部落格**](https://blog.ccknbc.cc/posts/how-to-hide-hexo-articles-gracefully)

- `_config.yml`Hexo 配置文件关闭显示未来文章，这样如果你手动指定日期晚于当前时间，就不会生成，当你想要发布文章时修改一下发布时间，或者到了预定发布的时间时重新部署一次即可展示文章

```yaml
future: false
```

- 在文章 Markdown 文件`Front-Matter`部分配置

```markdown
---
published: false
---
```

即可达到与上面一样的效果，这样当我们认为文章可以公开时，再设为`true`或者删掉这个配置即可，同样由于是静态博客，仍需要重新部署一次才会显示

- 只想在首页隐藏部分文章，而不是不公开文章，我们需要更换首页生成插件，执行以下命令

```bash
$ npm uninstall hexo-generator-index
$ npm install hexo-generator-indexed
```

隐藏文章 ，在文章的 Front-matter 中增加一个 hide 参数用来隐藏

```markdown
---
title: example
hide: true
---
```

    隐藏特定分类中的文章，在 Hexo 的 `_config.yml` 中可以通过 `hide_categories` 选项设置隐藏某个分类下的文章，例如：

```yaml
hide_categories:
  - categorie1
  - categorie2
```

对于我来说，由于我使用的时语雀，在未发布前，都储存在草稿箱所以不会有这个问题，但总有小伙伴那么几篇文章不想让别人看到，所以水了这篇文章；而对于加密这个操作，我觉得是没有必要了，但也有对应的使用场景，各取所需吧。
