---
title: 如何优雅隐藏 Hexo 文章
urlname: '30'
date: 2021-10-22T21:00:00.000Z
updated: 2022-09-18T21:00:00.000Z
author: CC康纳百川
cover: 'https://pic1.afdiancdn.com/user/8a7f563c2e3811ecab5852540025c377/common/aa5ebc0731a66fa5fb73df76da759ae3_w1920_h1080_s557.jpg'
description: 本文介绍三种方法来优雅隐藏 Hexo 文章
translate_title: how-to-hide-hexo-articles-gracefully
subtitle: How to hide Hexo articles gracefully
tags: 博客
categories: 博客
id: 30
---
本文首发在[**语雀**](https://www.yuque.com/ccknbc/blog/30/)，自动同步更新至[**CC的部落格**](https://blog.ccknbc.cc/posts/how-to-hide-hexo-articles-gracefully/)

## 延迟发布
+ `_config.yml`(<font style="color:rgb(51, 51, 51);"> {% label Hexo blue %}</font>配置文件)关闭显示未来文章（即将`future`配置为<font style="color:rgb(51, 51, 51);"> {% label false red %}</font>，这样如果你手动指定日期晚于当前时间，就不会生成，当你想要发布文章时修改一下发布时间，或者到了预定发布的时间时重新部署一次即可展示文章

```yaml
# Writing
new_post_name: :title.md
default_layout: post
auto_spacing: true
titlecase: false
external_link:
  enable: true
  field: site
  exclude: ''
filename_case: 0
render_drafts: false
post_asset_folder: false
relative_link: false
future: true
```

## 发布状态
+ 在文章Markdown文件`Front-Matter`部分配置`published`参数

```markdown
---
published: false
---
```

即可达到与上面一样的效果，这样当我们认为文章可以公开时，再设为`true`或者删掉这个配置即可，同样由于是静态博客，仍需要重新部署一次才会显示

## 首页隐藏
+ 前两种方式如果你的源码仓库闭源的话，是完全隐藏的，只有你知道，但是有时候我们只想在首页隐藏部分文章，而不是不公开文章，我们需要更换首页生成插件，执行以下命令

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

## 存为草稿
对于我来说，由于我使用的是语雀，在未发布前，都储存在草稿箱所以不会有这个问题，而我发布后文章会同步到源代码仓库`posts`分支；但总有小伙伴那么几篇文章不想让别人看到，所以水了这篇文章；并且生成后的代码仓库大多数情况下是公开的，所以还是推荐没写完就不要发布了，留在草稿箱，即使你指定一个只有你自己知道的路径，虽然一般人不会闲得慌去看你仓库，但并没有达到不想公开的效果，因此可以在博客目录`.gitignore`文件添加忽略草稿目录

```plain
.DS_Store
Thumbs.db
db.json
hexo.bat
yuque.json
*.log
public
node_modules
.deploy*
.nojekyll
source/_posts/语雀
themes/butterfly/.git
source/_drafts
```

当然在使用草稿功能前，注意检查`_config.yml`Hexo配置文件是否关闭显示（渲染）草稿

```yaml
render_drafts: false
```

此外，在最开始的`Hexo`<font style="color:rgb(51, 51, 51);">的{% label Writing blue%}部分配置项中我们知道</font>`default_layout: post`，即默认布局为`post`文章类别，又因为`new`可以简写为`n`，因此默认情况下以下3条新建文章命令等效

```bash
$ hexo new post <title>
或
$ hexo new <title>
或
$ hexo n <title>
```

同理，在 [**Hexo 官方文档**](https://hexo.io/zh-cn/docs/writing#%E8%8D%89%E7%A8%BF)中也有提到，如果要新建草稿，可使用如下命令

```bash
$ hexo new draft <title>
或
$ hexo n draft <title>
```

当然我们还要知道默认的layout模板文件存在`根目录/scaffolds`下（我们可以自行新建或修改模板，这里不做展开），草稿存在`根目录/source/_drafts`下，文章存在`根目录/source/_posts`下

![](https://cdn.nlark.com/yuque/0/2021/png/8391407/1634995673577-e2dcbc1a-09aa-4e23-9e85-e9fb14569860.png)

<font style="color:rgb(68, 68, 68);">刚刚提到了 </font>`<font style="color:rgb(68, 68, 68);">Hexo</font>`<font style="color:rgb(68, 68, 68);"> 的一种特殊布局：</font>`<font style="color:rgb(77, 77, 76);background-color:rgb(238, 238, 238);">draft</font>`<font style="color:rgb(68, 68, 68);">，这种布局在建立时会被保存到 </font>`<font style="color:rgb(77, 77, 76);background-color:rgb(238, 238, 238);">source/_drafts</font>`<font style="color:rgb(68, 68, 68);">文件夹，您可通过</font>`<font style="color:rgb(77, 77, 76);background-color:rgb(238, 238, 238);">publish</font>`<font style="color:rgb(68, 68, 68);"> 命令将草稿移动到 </font>`<font style="color:rgb(77, 77, 76);background-color:rgb(238, 238, 238);">source/_posts</font>`<font style="color:rgb(68, 68, 68);"> 文件夹，该命令的使用方式与 </font>`<font style="color:rgb(77, 77, 76);background-color:rgb(238, 238, 238);">new</font>`<font style="color:rgb(68, 68, 68);"> 十分类似，您也可在命令中指定 </font><font style="color:rgb(77, 77, 76);background-color:rgb(238, 238, 238);">layout</font><font style="color:rgb(68, 68, 68);"> 来指定布局。</font>

```bash
$ hexo publish [layout] <title>
```

那么如果我们要发布草稿即可使用如下命令

```bash
$ hexo publish <title>
或
$ hexo p <title>
```

草稿默认不会显示在页面中，您可在执行时加上 `--draft`参数，或是把 `render_drafts` 参数设为 <font style="color:rgb(51, 51, 51);"> {% label true green %} </font>来预览草稿。

```bash
$ hexo s --draft
$ hexo g --draft
```

<font style="color:rgb(77, 77, 77);">若日后想将正式文章转为为草稿，只需手动将文章从</font>` source/_posts`<font style="color:rgb(77, 77, 77);">目录移动到</font>` source/_drafts`<font style="color:rgb(77, 77, 77);">目录即可。</font>

## <font style="color:rgb(68, 68, 68);">source</font>
> <font style="color:rgb(68, 68, 68);">资源文件夹，除了模板以外的 Asset，例如 CSS、JavaScript 文件等，都应该放在这个文件夹中。文件或文件夹开头名称为 </font><font style="color:rgb(77, 77, 76);background-color:rgb(238, 238, 238);">_</font><font style="color:rgb(68, 68, 68);">（下划线线）或隐藏的文件会被忽略。</font>
>
> <font style="color:rgb(68, 68, 68);">如果文件可以被渲染的话，会经过解析然后储存到 </font><font style="color:rgb(77, 77, 76);background-color:rgb(238, 238, 238);">public</font><font style="color:rgb(68, 68, 68);"> 文件夹，否则会直接拷贝到 </font><font style="color:rgb(77, 77, 76);background-color:rgb(238, 238, 238);">public</font><font style="color:rgb(68, 68, 68);"> 文件夹。</font>
>
> 
>
> 资源文件夹是存放用户资源的地方。除 _posts 文件夹之外，开头命名为 _ (下划线)的文件 / 文件夹和隐藏的文件将会被忽略。Markdown 和 HTML 文件会被解析并放到 public 文件夹，而其他文件会被拷贝过去。
>

<font style="color:rgb(68, 68, 68);">官方其实考虑到这个问题，事实上我们在</font>`<font style="color:rgb(68, 68, 68);">_post</font>`<font style="color:rgb(68, 68, 68);">（文章）文件夹内可以按照类别来存放文章，这样做既方便我们查找，也能形成系统性文档，所以可以建立不同的子文件夹存放不同类别的文章，说到这可能你想到了，如果我建立一个文件夹</font>`<font style="color:rgb(68, 68, 68);">_还未准备好发布的文章</font>`<font style="color:rgb(68, 68, 68);">，或者把文件夹设置为隐藏，那这样也能跳过渲染实现和草稿一样的效果。</font>

### <font style="color:rgb(68, 68, 68);">题外话</font>
而对于加密这个操作，我觉得是没有必要了，但也有对应的使用场景，各取所需吧。

