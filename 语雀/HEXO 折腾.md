---
title: HEXO 折腾
urlname: '03'
date: '2020-07-01 08:00:00 +0800'
tags: HEXO
categories: 博客
description: 本篇文章简单介绍了 HEXO 博客的搭建，部署更新等过程
keywords: HEXO
cover: 'https://cdn.jsdelivr.net/gh/ccknbc-backup/photos/blog/2020-10-05~10_48_38.webp'
photos: 'https://cdn.jsdelivr.net/gh/ccknbc-backup/photos/blog/2020-10-05~10_48_38.webp'
id: 3
translate_title: hexo-toss
updated: 2020-07-01 12:00:00
---

**个人目前使用主题为 Butterfly **`**3.0.1**`**版本，HEXO **`**5.0.2**`**版本**

请按照以下步骤依次安装相应依赖和框架

## 搭建步骤

### 安装 Node.js

> **什么是 Node.js ？**
> 这得从什么是 JS 说起，JS 也就是 JavaScript。（为什么有种从盘古开天辟地开始的感觉）没错，JavaScript 就是网页的盘古。JavaScript 是一种编程语言，我们所见到的网页中的交互和逻辑处理几乎都是由 JavaScript 完成。
> JavaScript 语法简单，易学易用。（当然也请不要小瞧它，虽然它入门门槛低，但上限同样也很高。包括但不限于实现网站前后端，手机桌面应用程序，机器学习，计算机图形学等。）
> 在 Node.js 诞生前，JavaScript 都运行于浏览器端。也就是说，它是鱼，浏览器是装满了水的水缸。
> 2008 年，Chrome V8 诞生。2009 年，Node.js 诞生。并成为 GitHub 早期最著名的开源项目。GitHub 可能大家已有所了解，后续再说。
> Node.js 便是一个基于 Chrome V8 引擎的 JavaScript 运行环境。（当年第一次看到这句话时，我也一脸懵逼。）按照我的理解，JavaScript 是鱼，Chrome V8 就是抽水机，Node.js 则把这台抽水机也装在你电脑上。于是你的电脑也有了 Node.js 这个和浏览器相似的水缸，也可以在里面运行 JavaScript 了！
> 当然 Node.js 和浏览器端还是因为自身定位和一些历史原因而有些许区别的，不再展开。
> [Node.js | 百度百科](https://baike.baidu.com/item/node.js/7567977)
> [JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)

[下载｜ Node.js](https://nodejs.org/zh-cn/)

建议下载**长期支持版**而非**当前发布版**（因为如果是最新版，容易出现一些奇妙的 bug）。

全部默认下一步进行安装。

Windows 打开命令提示符，macOS 打开终端。（= =，这个不会就请百度吧。）
Linux 用户右上角关闭本标签页。

后续如提到输入命令，均默认指打开终端进行输入。

输入 `node --version`，如果得到的版本号与你方才安装的一致，那么 Node.js 就已经成功安装。

> Node.js 安装成功时也默认安装了 `npm`，在此后将会用到。
> `npm` 是随 Node.js 一起被安装的包管理工具，你可以理解成 Node.js 自带的应用商店。

对了，国内使用 npm 可能很慢。

**你可以考虑切换为 **`**taobao**`** 镜像源。**

```sh
npm config set registry https://registry.npm.taobao.org
```

> [npm & yarn 常用包与命令](https://www.yuque.com/yunyoujun/notes/npm-and-yarn#nrm)

### Git 与 GitHub

#### 安装 Git

> Visual Studio Code，简称 VS Code。
> 目前最为强大易用的编辑器，轻量且快速。（~~宇宙第一编辑器~~）
> 注意：它并不是我们常常听到的 VS，VS 常常指的是 Visual Studio，是一个功能强大的 IDE（集成开发环境），体积也相比 VS Code 都要大上一个量级。

在此之前，我建议你先安装 [VS Code](https://code.visualstudio.com/)。因为安装 Git Bash 时，可以设置 VS Code 作为默认编辑器。

> Git 是一个开源的分布式版本控制系统，由 Linus Torvalds（同时也是 Linux 的作者）为了管理 Linux 开发而开发。
> 简而言之，是一个版本管理工具。譬如设计师设计好了第三版的海报，客户却说还是要第一版吧，这时便可以通过 Git 快速回退到最初的版本。
> 你只需要把每次更改的状态（Git 会自动进行检测，你只要掌握基础的几条命令就可以了）告诉 Git，而不需要每个版本都保存一份压缩包，既方便也能大大节约空间。
> （当然这主要只对代码文本起作用，因为 Git 的本质是记录各行代码的增减，倘若是像视频、海报这类二进制文件来说便体现不出丝毫优势了。当然想要应对这种场景还有 [Git LFS](https://git-lfs.github.com/)。）

下载 [Git](https://git-scm.com/) 并安装（如果国内速度太慢，可以试试[这里](https://pc.qq.com/detail/13/detail_22693.html)）

macOS 用户可以下载官网的安装包进行安装，也可以直接安装 App Store 的 Xcode（附带会安装 Git，但是比较大）。

> 类似的工具还有：SVN。但始终更推荐 Git，因为它功能更为强大且它的背后还有更强大的生态：GitHub。

#### 注册 GitHub

这一部分内容，你也可以放到本地调试并预览成功后并打算线上部署的时候，再回过头来看。

> GitHub 一听便与 Git 有所渊源。`Git` 在英文中是懒人、饭桶之意。`Hub` 则是中心、集线器的意思。譬如 USB 集线器就是 USB Hub。所以 GitHub 就是饭桶中心（~~大雾~~）。
> GitHub 是全世界最大的开源项目与代码托管平台，也是众多开发者的交流场所。~~还是全球最大的同性交友网站~~。
> 而代码托管本身用到的正是上文提到的 Git 技术。

注册 [GitHub](https://github.com/) 账号。（虽然都是英文，但不必畏惧，也并不会造成使用障碍，只要记得最常用的选项含义即可，以及善用手头的翻译软件。）

> 注意：注册时的英文用户名将成为你可以使用的免费域名前缀。

登录 GitHub。

> 为什么要用 GitHub？
> 对于平民玩家来说，在初次尝试建立自己的网站时，也许并不会有闲钱或者说决心来购买自己的服务器与域名。
> 而 GitHub 则提供了 [GitHub Pages](https://pages.github.com/) 这一服务。
> 用户们可以利用这一服务，部署自己的静态站点。

点击右上角的 `+` -> `New repository` 新建仓库。

仓库名称务必为 `你的用户名.github.io`，用户名是英文，大小写无所谓，但建议统一小写。（因为你会发现时常切换大小写很麻烦）

> 为什么必须这个作为仓库名？
> GitHub Pages 服务的命名规范，同时若您没有自己的域名，使用 Github 提供的服务的话，请务必将此仓库设为公开，同时它也将成为你的专属域名。当然，你也可以购置自己的专属域名并用它来提供内容。

点击 `Create repository`。

### 安装 Hexo

[Hexo](https://hexo.io)

- GitHub: [https://github.com/hexojs/hexo](https://github.com/hexojs/hexo)
- [官方文档](https://hexo.io/zh-cn/docs/index.html)（直接参考文档也是一个不错的选择）

> **为嘛使用 Hexo ？**
> Hexo 是一个快速、简洁而强大的博客框架，基于 Node.js，同样托管于 GitHub 之上。生态中拥有众多插件主题。你可以基于它快速生成一些静态页面。
> 你可以使用别人的各种主题与插件，也可以自己定制开发想要的功能。
> **为什么不是...?**
> 其他常用的博客框架还有 [WordPress](https://wordpress.org/)，[Typecho](https://typecho.org/)，[Ghost](https://ghost.org/) 等，但这些往往都需要购置自己的服务器，而无法静态化地部署到 GitHub Pages 上。（当然，相应的功能和灵活性也大大提升。）静态化站点还有一个优势就是访问速度往往更快。
> 静态网站生成器还有 [Vuepress](https://vuepress.vuejs.org/)，[Gatsby](https://www.gatsbyjs.org/) 等。但这些多是为了写文档而量身定制的，你也可以使用它们，但是相较 Hexo 的博客定位，它们关于博客的插件和主题以及解决办法会少得多。
> Hexo 提供的功能与 [Hugo](https://gohugo.io/) 几乎都有，（生成大量文件时，甚至比 Hexo 更快）不过它是基于 GO 语言。日后你想对自己的网站进行自定义，即便是 Hugo，你编写前端的交互仍旧需要使用 JavaScript，所以选择基于 JavaScript 的 Hexo 可以降低学习成本。（你若对 GO 有兴趣，仍然可以尝试使用 Hugo，但本教程将不会针对 Hugo 进行展开。）
> 所以对于新手来说，使用 Hexo 作为起始点，不失为一个好选择。（当然如果你有钱租服务器，并希望快速上手的话，就可以考虑考虑 WordPress 或者 Typecho）
> 这里顺带推荐一下小伙伴 [染川瞳](https://asuhe.jp/) 的 WordPress 主题 [Sakurairo](https://github.com/mirai-mamori/Sakurairo)，[阔落](https://guhub.cn/) 的 Typecho 主题 [miracles](https://github.com/BigCoke233/miracles)，都是很漂亮的主题。

在终端中输入以下命令：

```sh
npm install hexo-cli -g
# 如果安装失败，可能是没有权限，可以尝试头部加上 sudo 重新执行
# sudo npm install hexo-cli -g
```

> `install` 自然是安装。
> `hexo-cli` 则是 `hexo` 的终端工具，可以帮助你生成一些模版文件，之后再用到。
> `-g` 代表的是全局安装。也就是在任何地方都可以使用，否则会只能在安装的目录下使用。

此时，请先通过 `cd` 进入你本地电脑打算存储网站代码的文件夹目录。（或者右键文件夹 Git Bash Here）

> [cd | DOS 命令](https://baike.baidu.com/item/cd/3516393)
> [cd （LINUXSHELL 命令）](https://baike.baidu.com/item/cd/3516411)

譬如：

> 注意：这里是你自定义的目录，请不要复制粘贴

```sh
# '#' 字符后的文字代表注释，不需要输入
# Windows
cd C:\Users\CCKNBC\Documents\GitHub\
#实际上我用的是D:blog目录,按需选择即可
# macOS
# cd /Users/yunyou/github/
```

接下来输入：

```sh
hexo init 你的名字.github.io
```

> `hexo` 正是因为我们之前安装了 `hexo-cli` 这一个包，所以我们可以在终端中使用 `hexo` 这一命令。
> `init` 初始化博客的模版文件。后面跟的是你要新建的文件夹，最好和你此前新建的仓库名一致。

```sh
# 进入你的博客文件夹
cd 你的名字.github.io
# 默认安装所有 `package.json` 文件中提到的包
npm install
# 你也可以缩写成 hexo s
hexo server
```

`server` 代表开启本地的 Hexo 服务器，这时你就可以打开浏览器，在地址栏中输入 `localhost:4000` 就可以看到本地的网页了。

按 `Ctrl + C` 中断服务器的运行。

至此，基础的模版页面便已经搭建好了。

### 主题安裝

### 使用 Hexo 主题

Hexo 默认提供的是 [hexo-theme-landscape](https://github.com/hexojs/hexo-theme-landscape) 主题。
默认主题样式简单，功能较少。所以大多数人并不会使用默认主题。

### Git 安装

在博客根目录里安装稳定版`master`分支【推荐】

```powershell
git clone -b master https://github.com/jerryc127/hexo-theme-butterfly.git themes/butterfly
```

如果想要安装比较新的`dev`分支，可以

```powershell
git clone -b dev https://github.com/jerryc127/hexo-theme-butterfly.git themes/butterfly
```

### npm 安装

> 此方法只支持`Hexo 5.0.0`以上版本

在博客根目录里

```powershell
npm i hexo-theme-butterfly
```

### 应用主题

修改 hexo 配置文件`_config.yml`（根目录），把主题改为`Butterfly`（注意配置要和你的主题文件夹名大小写完全一致哦）

```
theme: butterfly
```

> 如果你沒有`pug`以及`stylus`的渲染器，请下载安装：

```
npm install hexo-renderer-pug hexo-renderer-stylus --save
```

> 在进行配置修改之前，为了以后主题通过 git pull 平滑升级，请不要随意改动主题源码，虽然你可以通过强制合并来解决，但保险点总是没错的，并且由于主题的`**约定>配置**`特性，因此我们通常在 Hexo 根目录`**sorce/_data**`下把主题的`**_config.yml**`（主题目录）复制过来，并且重命名为`**butterfly.yml**`，然后再对 butterfly.yml 进行修改即可

有了上面的基础，我们就可以根据对应的[**文档**](https://demo.jerryc.me)修改相应的配置了,以下不再赘述

### 生成静态文件

至今我们的工作都是在本地进行，想必你也很想放到线上与小伙伴们分享。
这便轮到了 GitHub Pages 的出场，不过 GitHub Pages 只支持纯静态文件。

所以我们需要使用以下命令先来生成站点的静态文件。

```sh
# 如果进行多次生成，为了避免受错误缓存影响，最好使用 hexo clean 先清除一遍。
hexo generate
# 缩写为 hexo g
```

此时你的文件夹目录下会出现 `public` 这个文件夹，里面存放的就是你站点的静态文件。

### 与远程仓库建立关联

接下来我们将本地的仓库与此前在 GitHub 上建立的仓库建立关联。

```sh
git init # 初始化 Git 仓库，只需要执行一次即可
```

在将其部署到 GitHub Pages 上之前，我们最好先建立一个分支。

> 什么是分支？
> Git 提供了版本管理功能，其中还有一个分支功能，你现在可以简单地将其理解为平行世界。

`你的名字.github.io` 部署后，GitHub Pages 将默认使用你的 master 分支作为静态文件部署。
所以我们最好新建一个 hexo 分支（命名无所谓）用来存储 Hexo 地源代码，master 分支则用来存储部署后的静态文件。

```sh
git checkout -b hexo
```

这时便成功建立了一个 hexo 分支。（此后的工作都将在 hexo 分支下进行）

你可以通过 `git branch -v` 来查看当前有哪些分支，使用 `git branch 分支名` 来切换到对应的分支。

> [Git 学习笔记](https://www.yunyoujun.cn/note/git-learn-note/)

### 部署

为了更方便的部署到 GitHub Pages，Hexo 提供了 `hexo-deployer-git` 插件。

老规矩，安装。

```sh
npm install hexo-deployer-git
```

在 `_config.yml` 中配置。

```yaml
deploy:
  type: git
  repo: 你此前新建的仓库的链接 # 比如：https://github.com/YunYouJun/yunyoujun.github.io
  branch: master # 默认使用 master 分支
  message: Update Hexo Static Content # 你可以自定义此次部署更新的说明
```

保存，部署！

> 第一次可能需要你输入用户名与密码。
> 密码输入的时候不会出现 \*\*\*，不要害怕，已经输入进去了。

```sh
hexo deploy
```

等待完成后，打开网址 `https://你的名字.github.io` 就能看到你的线上网站了。

> 使用 https，http 可能无法正常打开。HTTPS 是多了安全加密的 HTTP，Chrome 浏览器已经默认会显示 `http` 链接为不安全。
> 为了安全，建议开启强制 https 跳转。`项目地址页面 -> Settings -> Options -> GitHub Pages -> Enforce HTTPS`。（翻到下面）
> 此时，http 网址会自动重定向到 https

### 备份与自动部署

我们当前只是将生成的静态文件部署到了云端。

为了以防万一，我们应该将网站的源代码文件也推送到 GitHub 仓库备份。

```sh
# 与远程 Git 仓库建立连接，只此一次即可
git remote add origin https://github.com/你的用户名/你的名字.github.io
```

接下来准备提交，这几句命令将是你以后每次备份所需要输入。

```sh
# 添加到缓存区
git add -A
git commit -m "这次做了什么更改，简单描述下即可"
# 推送至远程仓库
git push
# 第一次提交，你可能需设置一下默认提交分支
# git push --set-upstream origin hexo
```

每次推送都要输入这三条命令，你可能觉得有些麻烦。
那么你可以编写 bash 脚本。

譬如，在根目录下新建 `update.sh`。

```sh
# 如果没有消息后缀，默认提交信息为 `:pencil: update content`
info=$1
if ["$info" = ""];
then info=":pencil: update content"
fi
git add -A
git commit -m "$info"
git push origin hexo
```

此后更新的话，只需要在终端执行 `sh update.sh` 即可。

更新麻烦，每次部署也很麻烦，可以使用持续集成进行自动部署。

> 什么是持续集成？
> 持续集成是一种软件开发实践。对软件进行自动化构建，以此来发现错误。
> Travis CI 就是一个线上持续集成服务的提供商。它可以拉取你每次推送到 GitHub 上的代码，然后根据你的要求对其进行构建。
> 我们可以趁机让它自动生成网站静态文件，然后自动帮我们部署。
> 除此之外，你还可以使用 [GitHub Actions](https://help.github.com/en/actions/getting-started-with-github-actions/about-github-actions) ，[Netlify](https://www.netlify.com/) 等服务。
> GitHub Actions 相比 Travis 等，自身便拥有仓库的 Token，不再需要额外设置，可以直接使用 `secrets.GITHUB_TOKEN`。
> 推荐一个专门用来部署 gh-pages 的 Actions [actions-gh-pages](https://github.com/peaceiris/actions-gh-pages)

关于更多更具体的自动化部署方案和操作步骤，你可以参考我的小伙伴 ChrAlpha 的 [初探无后端静态博客自动化部署方案](https://blog.ichr.me/post/automated-deployment-of-serverless-static-blog/)。

他在文章中详细介绍了 Netlify 、GitHub Actions 和 Travis CI 的部署方法。

你也可以参考 Hexo 的官方文档 [将 Hexo 部署到 GitHub Pages](https://hexo.io/zh-cn/docs/github-pages)

我就不在此画蛇添足。

---

当然还有个更简便的方法，直接参考我的 [gh-pages.yml](https://github.com/YunYouJun/yunyoujun.github.io/blob/hexo/.github/workflows/gh-pages.yml)。

去掉夹在 `yarn install` 与 `yarn build` 之间的 `algolia` 部分，直接粘贴到你的 `.github/workflows/` 文件夹（自己新建）下 `xxx.yml` 文件里即可。

推送后便可直接自动部署。

至此，你的站点便基本搭建完成，此后继续对主题进行自定义吧。

### 开始写作

#### 文章

输入以下命令即可新建 `xxx.md` 文件。

```sh
hexo new post xxx
```

> `md` 是 `Markdown` 的后缀名，是一种简洁方便的文本标记语言。你只需要记住简单的几种语法，就可以快速进行编写。
> 为什么使用 Markdown？
> 首先 Hexo 本身就是将 Markdown 转化为静态的 Html 文件，来方便用户编写文章。
> Markdown 就好似介于 Word 与 TXT 文本之间。Word 体积大、大部分功能实际上根本用不到，且最后的文档常常带有许多冗余信息。
> 而 TXT 却无法实现加粗、标题、下划线、水平分割线等常用的功能。
> （这里所说的 TXT 只是一种纯文本格式的代称，实际上 Markdown 也是纯文本文件，不过通过语法和 Markdown 编译器，我们就可以看到一些简单的样式。）

譬如本文就是通过 Markdown 编写。

```md
# 一级标题

## 二级标题

**加粗文字**
```

> 更多语法（虽然说是更多，但是其实也没多少）：[Markdown 基本语法](https://github.com/younghz/Markdown)

这是我写的一个 Markdown 样式：[star-markdown-css](https://www.yunyoujun.cn/star-markdown-css/)

上面是渲染过后的效果，你可以与其 Markdown 的[纯文本原文](https://raw.githubusercontent.com/YunYouJun/star-markdown-css/master/demo/md/demo.md)进行对比。

#### 页面

你可以新建一些自己的自定义页面。

譬如直接在 Hexo 目录下的 `source` 文件夹下直接新建 HTML 进行编写。

也可以通过以下命令来新建页面。（当然还是 Markdown，不过也是可以在 Markdown 里写 HTML 的，也会被渲染出来。）

```md
hexo new page xxx
```

> 至于对应的参数配置，请参考主题文档

## FAQ

### 视频？

没有视频，一是懒，二是文字更利于更新勘误。

以及文章中将会频繁出现参考链接，更方便使用。

### 如何绑定你的自定义域名？

首先，你得有个自己的域名。

> 避免广告嫌疑，你可以自行前往相关域名提供商购买。
> ~~但是如果你有幸能看到谷歌广告（概率较小），可以考虑点一点。~~

并使用 CNAME 解析到 `你的名字.github.io`。（当然 A 记录直接解析到 GitHub Pages IP 地址也可以。）

> [Managing a custom domain for your GitHub Pages site](https://help.github.com/en/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain)

在 `Hexo` 工作目录下 `source` 文件夹下新建 `CNAME` 文件（没有后缀名）。

> CNAME 即相当于告诉 GitHub 允许将 xxx.github.io 为你的域名提供服务。
> source 目录下的文件除了特殊的 markdown 会被解析为 html，其余都会原样复制到生成的静态文件夹中。
> 所以你需要在 source 文件夹下建有 CNAME，它会在生成静态文件时，将 CNAME 拷贝到静态文件夹并部署到 master 分支。
> 如果只是在 GitHub 上设置（`项目地址页面 -> Settings -> Options -> GitHub Pages -> Custom domain`），它会自动添加到 master 分支上，但随后不包含 CNAME 的部署会将其覆盖。

内容填写你的域名即可。

> [About custom domains and GitHub Pages](https://help.github.com/en/github/working-with-github-pages/about-custom-domains-and-github-pages)

### 备案

如果想要使用国内的一些服务，比如 CDN，不备案确实寸步难行。

此处我指的是 ICP 备案，并非公安备案。（实际上我从来没有进行过公安备案，且目前在使用服务时，并未受到任何相关限制。）

国内备案往往意味着你还需要一台国内的服务器，譬如通过腾讯云备案时会需要你设置关联的服务器（阿里云应当也是如此）。
实际上你的网站并不一定得在这台服务器上，即便你只是免费试用了一个月，但是备案成功了，之后过期了对备案也不会有何影响。

> 也就是说你完全可以使用学生优惠（10 元左右）购买一个月的云服务器，用于关联，并在这个月内抓紧备案好，此后云服务器过期不会影响备案问题。
> 学生优惠的话 [阿里云](https://www.aliyun.com/minisite/goods?userCode=ixykjqj2) 或者 [腾讯云](https://url.cn/PLQYbz6n) 都有。

备案前需要注意的几点就是：

- 确定你的域名是否可以备案
- 关闭评论区
- 提交备案时的备注说明不得含有 `交流` 字样
- 首页不能含有其他网站的直达链接
- 遵纪守法无不良信息（这是当然的）

你也可以直接关停网站，等待备案成功后再重新打开。（今后每年偶尔会复查，但相对会宽松许多。）

此后，按照网站指引的备案步骤一步步来即可。（以前还要等待幕布寄送拍照，现在可以直接在手机上人脸验证）

备案成功后页脚必须清晰地展示备案号，且备案号含有指向 [http://www.beian.miit.gov.cn/](http://www.beian.miit.gov.cn/) 的超链接。

## 源文件备份

### 备份什么？

百密总有一疏，因此我们需要做好博客源文件的备份，你固然可以直接将整个文件夹打包，但当你后续安装的插件越来越多，你会发现压缩或者解压耗时越来越长，实际上我们只需要备份`根目录`的几个文件（夹）即可，`source`文件夹（里面存放着你博客的主要资源），`_config.yml`（HEXO 的配置，如果你不升级 HEXO 的话，这个也是很重要的），然后就是`package.json`（和它的名字一样，他能告诉你你安装了哪些插件及其对应的版本），有了这些你就能在另外一台电脑上很快恢复你的博客环境（当然我本人采用了`Cloud Studio`作为临时环境，也是不错的）

我的`package.json`一览，如果其中一些插件你也有兴趣可以按照插件官方说明尝试，这里不做功能注释，虽然总会踩一些奇奇怪怪的坑，但当你慢慢修正时，虽然很折腾，但的确是乐在其中

```json
{
  "name": "hexo-site",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "build": "hexo generate",
    "clean": "hexo clean",
    "deploy": "hexo deploy",
    "server": "hexo server"
  },
  "hexo": {
    "version": "5.0.0"
  },
  "dependencies": {
    "cheerio": "^1.0.0-rc.3",
    "cnpm": "^6.1.1",
    "gulp-htmlmin": "^5.0.1",
    "hexo": "^5.0.0",
    "hexo-abbrlink": "^2.2.1",
    "hexo-baidu-url-submit": "0.0.6",
    "hexo-deployer-git": "^2.1.0",
    "hexo-feed": "^1.0.2",
    "hexo-generator-archive": "^1.0.0",
    "hexo-generator-baidu-sitemap": "^0.1.9",
    "hexo-generator-category": "^1.0.0",
    "hexo-generator-index": "^1.0.0",
    "hexo-generator-search": "^2.4.0",
    "hexo-generator-sitemap": "^2.1.0",
    "hexo-generator-tag": "^1.0.0",
    "hexo-render-pug": "^2.1.4",
    "hexo-renderer-ejs": "^1.0.0",
    "hexo-renderer-marked": "^3.0.0",
    "hexo-renderer-pug": "^1.0.0",
    "hexo-renderer-stylus": "^1.1.0",
    "hexo-server": "^1.0.0",
    "hexo-tag-aplayer": "^3.0.4",
    "hexo-wordcount": "^6.0.1",
    "imagemin": "^7.0.1",
    "npm-check": "^5.9.2",
    "terser": "^4.8.0"
  },
  "devDependencies": {
    "gulp": "^4.0.2",
    "gulp-clean-css": "^4.3.0",
    "gulp-htmlclean": "^2.7.22",
    "gulp-imagemin": "^7.1.0",
    "gulp-uglify": "^3.0.2",
    "workbox-build": "^5.1.3"
  }
}
```

### 备份方式

不能在一棵树上吊死，所以我选择了多平台备份，分别是 Github,Gitee,Coding 三个平台，多一个平台，多一份保障，这里注册账号实名认证什么的不再赘述，大家应该都会，注意的一点就是我们建的仓库选择`**私有仓库**`，不然别人把你 md 一拷走，就成别人的的了，不过大多数人比较自觉，我们这静态博客，F12 源码什么的也看的清清楚楚，爬走很简单，主要靠自觉，防止转载（其实无所谓，秉着开源共享的理念，其实标明出处大家也就不会特别在意）

首先在博客`根目录`使用以下命令初始化本地仓库添加一个远程仓库

```bash
git init
```

> 如果本地未显示.git 文件夹，请注意打开显示隐藏文件夹

然后运行 `git remote add <shortname> <url>` 添加一个新的远程 Git 仓库，同时指定一个方便使用的简写：

```bash
git remote add <shortname> <url>
```

比如 `git remote add origin git@github.com:CCKNBC/Hexo.git`，添加多个仓库地址等更多操作请参考**Git-基础-远程仓库的使用**，按照个人喜好来添加多个仓库地址，我这里全部使用的 origin,通过手动添加了 coding,gitee 的仓库地址，不影响使用就行

然后我们运行`git remote -v`查看一下结果，是自己想要的即可

```
origin  git@github.com:CCKNBC/Hexo.git (fetch)
origin  git@github.com:CCKNBC/Hexo.git (push)
origin  git@e.coding.net:ccknbc/blog/source.git (push)
origin  git@gitee.com:ccknbc/blog.git (push)
```

然后我们就可以推送对应的内容了

```bash
git pull
git add .
git commit -m "%date% %time%: Updated By CCKNBC Local"
git push origin -u
```

> 上面`git push origin -u`这个是因为第一次推送，我们采取强制推送，如果还是不行我们`git push origin -f`（因为是第一次无所谓，以后请不要随意使用-f），以后我们只需要`git push`即可，同时 commit 的内容请根据实际需要自行修改

以下是我的`.git/config`一览,设置好后你可以更换你的第一个 url，也就是 fetch 仓库，根据个人喜好来（或者说网络原因），下面使用的是 github 的，那么 git pull 等操作就会按照这个仓库来和本地做比较，选择一个连接比较快的就好

```config
[core]
	repositoryformatversion = 0
	filemode = false
	bare = false
	logallrefupdates = true
	symlinks = false
	ignorecase = true
[remote "origin"]
	url = git@github.com:CCKNBC/Hexo.git
	fetch = +refs/heads/*:refs/remotes/origin/*
	url = git@e.coding.net:ccknbc/blog/source.git
	url = git@gitee.com:ccknbc/blog.git
[branch "master"]
	remote = origin
	merge = refs/heads/master
```

在上面的添加多个仓库中，个人因为懒的输入命令，所以直接手动添加的下面两行，反正目的达到就行

```bash
url = git@e.coding.net:ccknbc/blog/source.git
url = git@gitee.com:ccknbc/blog.git
```

然后在配置好公钥的情况下，强制推送即可，至此，你的博客源文件已经推送至你的备份仓库，可以去查看是否有一条强制推送的 commit 记录了，同时检查是否有`theme`文件夹（因为涉及到后面的魔改，部分源文件修改，因此我们也做好备份），如果没有，检查主题文件夹是否有`.git`文件夹，删掉后再次推送即可

## 如何优雅的魔改

在不动主题源文件方便日后升级的情况下，我们大部分采用外部引入 css,js 的方式实现，同时上传至 github，借用 jsDelivr 提供的 CDN 加速服务快速引用

在博客根目录`source`文件夹下新建一个`xxx.js`和`xxx.css`，名字自己取就行，最后我们正确引入即可，在主题配置文件`butterfly.yml`（下文将直接简写根配（根目录的\_confg.yml），主配（主题配置`source`目录下的 butterfly.yml））搜索 inject,然后在以下位置插入对应的 css 和 js 即可，例如，我是存放在主题文件夹子文件夹 css 和 js 内

```yaml
inject:
  head:
    - <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/CCKNBC/ccknbc.github.io@latest/css/ccknbc.css">
  bottom:
    - <script src="https://cdn.jsdelivr.net/gh/CCKNBC/ccknbc.github.io@latest/js/ccknbc.js"></script>
```

所以按照上面所说的对应的你的链接即为，其中`your name`是你的 github 用户名，请注意根据具体路径变通

```
https://cdn.jsdelivr.net/gh/your name/your name.github.io@latest/xxx.css
https://cdn.jsdelivr.net/gh/your name/your namec.github.io@latests/xxx.js
```

若是本地预览就可使用（请根据路径自己修改）

```
/css/ccknbc.css
/js/ccknbc.js
```

接下来分别编辑 css 和 js 文件即可，当然你可以直接复制粘贴或者直接引用我的链接

`**css**`

```css
@font-face {
  font-family: "sleek";
  src: url("https://cdn.jsdelivr.net/gh/lete114/CDN2/zaxiang/sleek.woff2");
}

/*标题颜色修改*/

#page-header #site_title {
  color: #8fbc8f;
}

#page-header #site-name.blog_title {
  color: #8fbc8f;
}

/* 滚动条 */

::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-thumb {
  background-color: #8fbc8f;
  background-image: -webkit-linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.4) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.4) 50%,
    rgba(255, 255, 255, 0.4) 75%,
    transparent 75%,
    transparent
  );
  border-radius: 2em;
}

::-webkit-scrollbar-corner {
  background-color: transparent;
}

::-moz-selection {
  color: #fff;
  background-color: #8fbc8f;
}

#web_bg {
  background: -webkit-linear-gradient(
    0deg,
    rgba(247, 149, 51, 0.1) 0,
    rgba(243, 112, 85, 0.1) 15%,
    rgba(239, 78, 123, 0.1) 30%,
    rgba(161, 102, 171, 0.1) 44%,
    rgba(80, 115, 184, 0.1) 58%,
    rgba(16, 152, 173, 0.1) 72%,
    rgba(7, 179, 155, 0.1) 86%,
    rgba(109, 186, 130, 0.1) 100%
  );
  background: -moz-linear-gradient(
    0deg,
    rgba(247, 149, 51, 0.1) 0,
    rgba(243, 112, 85, 0.1) 15%,
    rgba(239, 78, 123, 0.1) 30%,
    rgba(161, 102, 171, 0.1) 44%,
    rgba(80, 115, 184, 0.1) 58%,
    rgba(16, 152, 173, 0.1) 72%,
    rgba(7, 179, 155, 0.1) 86%,
    rgba(109, 186, 130, 0.1) 100%
  );
  background: -o-linear-gradient(
    0deg,
    rgba(247, 149, 51, 0.1) 0,
    rgba(243, 112, 85, 0.1) 15%,
    rgba(239, 78, 123, 0.1) 30%,
    rgba(161, 102, 171, 0.1) 44%,
    rgba(80, 115, 184, 0.1) 58%,
    rgba(16, 152, 173, 0.1) 72%,
    rgba(7, 179, 155, 0.1) 86%,
    rgba(109, 186, 130, 0.1) 100%
  );
  background: -ms-linear-gradient(
    0deg,
    rgba(247, 149, 51, 0.1) 0,
    rgba(243, 112, 85, 0.1) 15%,
    rgba(239, 78, 123, 0.1) 30%,
    rgba(161, 102, 171, 0.1) 44%,
    rgba(80, 115, 184, 0.1) 58%,
    rgba(16, 152, 173, 0.1) 72%,
    rgba(7, 179, 155, 0.1) 86%,
    rgba(109, 186, 130, 0.1) 100%
  );
  background: linear-gradient(
    90deg,
    rgba(247, 149, 51, 0.1) 0,
    rgba(243, 112, 85, 0.1) 15%,
    rgba(239, 78, 123, 0.1) 30%,
    rgba(161, 102, 171, 0.1) 44%,
    rgba(80, 115, 184, 0.1) 58%,
    rgba(16, 152, 173, 0.1) 72%,
    rgba(7, 179, 155, 0.1) 86%,
    rgba(109, 186, 130, 0.1) 100%
  );
}

.layout_post > #post {
  background: rgba(255, 255, 255, 0);
}

/* 鼠标图标 */

body {
  cursor: url(https://cdn.jsdelivr.net/gh/lete114/CDN@1.0/Use/Jkll8I.png), auto;
}

/*a标签*/

a:hover {
  cursor: url(https://cdn.jsdelivr.net/gh/lete114/CDN@1.0/Use/JkuClT.png), auto;
}

/*按钮*/

button:hover {
  cursor: url(https://cdn.jsdelivr.net/gh/lete114/CDN@1.0/Use/JkuClT.png), auto;
}

/*i标签*/

i:hover {
  cursor: url(https://cdn.jsdelivr.net/gh/lete114/CDN@1.0/Use/JkuClT.png), auto;
}

/*页脚a标签*/

/* #footer-wrap a:hover {
    text-decoration: none;
    cursor: url(https://cdn.jsdelivr.net/gh/lete114/CDN@1.0/Use/JkuClT.png), auto;
} */

/*分页器*/

#pagination .page-number:hover {
  cursor: url(https://cdn.jsdelivr.net/gh/lete114/CDN@1.0/Use/JkuClT.png), auto;
}

/*头部的导航栏*/

#nav .site-page:hover {
  cursor: url(https://cdn.jsdelivr.net/gh/lete114/CDN@1.0/Use/JkuClT.png), auto;
}

/* a(链接)标签的默认颜色 */

/* 宽度大于800小于9999执行 */

/* @media only screen and (min-width: 800px) and (max-width: 9999px) {
    
    #article-container a {
        color: #00c4b6;
        display: inline-block;
        position: relative;
    }
} */

/* 打造效果渐变 */

@-webkit-keyframes Gradient {
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}

@-moz-keyframes Gradient {
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}

@keyframes Gradient {
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}

#subtitle {
  background: linear-gradient(
    -45deg,
    #ffecd2,
    #fcb69f,
    #84fab0,
    #8fd3f4,
    #fddb92,
    #d1fdff,
    #e4afcb,
    #7edbdc,
    #eea2a2,
    #7ac5d8
  );
  background-size: 400% 400%;
  -webkit-animation: Gradient 10s ease infinite;
  -moz-animation: Gradient 10s ease infinite;
  animation: Gradient 10s ease infinite;
  -o-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

#subtitle:before {
  background-color: rgba(0, 0, 0, 0);
}
```

`**js**`

```javascript
// 设置页脚博主会动的心
$(document).ready(function (e) {
  $(".copyright").html(
    '©2020 <i style="color:#49B1F5;animation: announ_animation 0.8s linear infinite;" class="fa fa-heartbeat"></i> CC康纳百川'
  );
});

if (aidaori()) {
  $("html").css({
    filter: "gray !important",
    filter: "progid:DXImageTransform.Microsoft.BasicImage(grayscale=1)",
    filter: "grayscale(100%)",
    "-webkit-filter": "grayscale(100%)",
    "-moz-filter": "grayscale(100%)",
    "-ms-filter": "grayscale(100%)",
    "-o-filter": "grayscale(100%)",
  });
}
//在特定日期变灰
function aidaori() {
  var aidaoriarr = new Array(
    "0403",
    "0404",
    "0405",
    "0406",
    "0414",
    "0512",
    "0807",
    "0909",
    "1213"
  );
  //2020年4月4日 新冠肺炎哀悼日，清明节
  //2010年4月14日，青海玉树地震
  //2008年5月12日，四川汶川地震
  //2010年8月7日，甘肃舟曲特大泥石流
  //1976年9月9日，毛泽东逝世
  //1937年12月13日，南京大屠杀
  var mydate = new Date();
  var str = ""; // + mydate.getFullYear();
  var mm = mydate.getMonth() + 1;
  if (mydate.getMonth() > 9) {
    str += mm;
  } else {
    str += "0" + mm;
  }
  if (mydate.getDate() > 9) {
    str += mydate.getDate();
  } else {
    str += "0" + mydate.getDate();
  }
  if (aidaoriarr.indexOf(str) > -1) {
    return 1;
  } else {
    return 0;
  }
}

// 可爱的Title
var OriginTitle = document.title;
var titleTime;
document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    $('[rel="icon"]').attr(
      "href",
      "https://cdn.jsdelivr.net/gh/CCKNBC/CDN/logo/ccknbc.png"
    );
    document.title = "(つェ⊂) 我藏好了哦~~";
    clearTimeout(titleTime);
  } else {
    $('[rel="icon"]').attr(
      "href",
      "https://cdn.jsdelivr.net/gh/CCKNBC/CDN/logo/favicon.svg"
    );
    document.title = "(*´∇｀*) 被你发现啦~~" + OriginTitle;
    titleTime = setTimeout(function () {
      document.title = OriginTitle;
    }, 2000);
  }
});
```

更多类容可以百度，自己 DIY，有想法当然要实现啊

---

## 未完待续...
