---
title: Hexo Butterfly Algolia 搜索的使用
translate_title: hexo-butterfly-algolia
subtitle: Hexo Butterfly Algolia
date: 2021-05-11 11:00:00
updated: 2021-12-01 20:09:00
tags: [工具, Algolia]
keywords: [Hexo, Butterfly, Algolia]
categories: 工具
description: 本文介绍了 Hexo Butterfly 主题下 Algolia 搜索的使用
cover: https://cdn.jsdelivr.net/gh/ccknbc-backup/photos@master/blog/2021-05-11~11-06-48.webp
id: 24
---

本文介绍了 Hexo Butterfly 主题下 Algolia 搜索的使用

本文首发在[**语雀**](https://www.yuque.com/ccknbc/blog/24)
自动同步更新至[**CC 的部落格**](https://blog.ccknbc.cc/posts/hexo-butterfly-algolia)

~~因为蝴蝶还在使用 V2，而官方已进入 V4 ，所以这里以 V2 做一下展开，虽然功能不是那么全，但对于静态博客来说搜索体验是达到了的，可以点击右上角的 🔍 体验一下。~~
~~​~~

截止文章更新的前几天，主题已经在测试版升级到 V4，配置项也做了对应的修改，我也做了对应的修改，请自行查看或[**引用**](https://cdn.jsdelivr.net/gh/CCKNBC/ccknbc.github.io/js/search/algolia.js)

## 注册账号

前往 [Algolia](https://www.algolia.com/users/sign_up) 官网注册一个账号，新建 应用和 index
![image.png](https://cdn.nlark.com/yuque/0/2021/png/8391407/1620791672826-3bac29b1-3f60-4be8-bdc5-7b615e72f78a.png#crop=0&crop=0&crop=1&crop=1&height=721&id=u2756c9ea&margin=%5Bobject%20Object%5D&name=image.png&originHeight=721&originWidth=1469&originalType=binary&ratio=1&rotation=0&showTitle=false&size=115021&status=done&style=none&title=&width=1469)
数据中心建议选择新加坡或香港，当然根据你自己情况而定
![image.png](https://cdn.nlark.com/yuque/0/2021/png/8391407/1620791714386-d2a2ac19-edfd-4c8b-ab02-9de7b770ff21.png#crop=0&crop=0&crop=1&crop=1&height=771&id=uce195a9b&margin=%5Bobject%20Object%5D&name=image.png&originHeight=771&originWidth=1204&originalType=binary&ratio=1&rotation=0&showTitle=false&size=116921&status=done&style=none&title=&width=1204)
![image.png](https://cdn.nlark.com/yuque/0/2021/png/8391407/1620791516501-3f36941d-cf13-49aa-bdb4-e956f632283a.png#crop=0&crop=0&crop=1&crop=1&height=447&id=u8c5cd22c&margin=%5Bobject%20Object%5D&name=image.png&originHeight=447&originWidth=799&originalType=binary&ratio=1&rotation=0&showTitle=false&size=23823&status=done&style=none&title=&width=799)

## 安装插件

```bash
npm install hexo-algolia --save
npm install hexo-algoliasearch --save
```

分别是 [hexo-algolia](https://github.com/oncletom/hexo-algolia) 和 [hexo-algoliasearch](https://github.com/LouisBarranqueiro/hexo-algoliasearch)，他们的介绍分别为

> Index your hexo website content to Algolia Search.  
> 🔎 A plugin to index posts of your Hexo blog on Algolia

也就很明显了，如果你想要全站搜索可选择前者，如果你只想搜索文章两者兼可。但前者不能将文章内容作为索引上传，后者可全文上传。
然后就是 HEXO 配置文件中添加以下内容，下文基本以 `hexo-algoliasearch` 为例，因为我个人认为访客只会搜文章吧（事实上是搜索根本没人用，毕竟也根本没人访问），hexo-algolia 可查看官方文档，注意配置和命令的区别

> \_config.yml :

```yaml
algolia:
  appId: "Z7A3XW4R2I"
  apiKey: "12db1ad54372045549ef465881c17e743"
  adminApiKey: "40321c7c207e7f73b63a19aa24c4761b"
  chunkSize: 5000
  indexName: "my-hexo-blog"
  fields:
    - content:strip:truncate,0,500
    - excerpt:strip
    - gallery
    - permalink
    - photos
    - slug
    - tags
    - title
```

为了保险，识别到插件，还可以加入以下内容

```yaml
plugins:
  - hexo-algoliasearch
```

去主题配置文件打开 Algolia 搜索，记得关闭本地搜索，二者只能取其一！

> \_config.butterfly.yml :

```yaml
# Algolia search
algolia_search:
  enable: true
  hits:
    per_page: 3

# Local search
local_search:
  enable: false
```

然后来看以下具体的参数配置获取方式
`appId`，`apiKey`，`adminApiKey`可在 API Keys 页面获取，注意保管好你的 Admin Key，不要让其他人知道，不建议直接写在配置中
![image.png](https://cdn.nlark.com/yuque/0/2021/png/8391407/1620789827112-9247b7ae-f3c9-4807-93cd-46c2b8dbb2bc.png#crop=0&crop=0&crop=1&crop=1&height=707&id=u63248bc0&margin=%5Bobject%20Object%5D&name=image.png&originHeight=707&originWidth=1900&originalType=binary&ratio=1&rotation=0&showTitle=false&size=115433&status=done&style=none&title=&width=1900)
![](https://cdn.jsdelivr.net/gh/oncletom/hexo-algolia@main/algolia-write-key.png#crop=0&crop=0&crop=1&crop=1&id=E3NUV&originHeight=1172&originWidth=1176&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)
对于 Windows 系统，如果你不想每次都进行设定变量操作，可以添加到系统的环境变量中
![image.png](https://cdn.nlark.com/yuque/0/2021/png/8391407/1620789745876-cbf0d411-f694-45c7-bcbd-c0987f71f718.png#crop=0&crop=0&crop=1&crop=1&height=217&id=ub7f3b987&name=image.png&originHeight=217&originWidth=839&originalType=binary&ratio=1&rotation=0&showTitle=false&size=13413&status=done&style=none&title=&width=839)
或者使用 `set` 或 `setx` 设置临时或永久环境变量，而 hexo-algolia 插件环境变量名称为 `HEXO_ALGOLIA_INDEXING_KEY` 注意根据对应的文档更改

如果你和我一样使用的自动部署，例如 Github Actions，你可以在工作流中一开始或者对应的步骤添加环境变量，记得 Secrets 中也要添加哦

```yaml
jobs:
  deploy:
    name: Deploy Hexo Public To Pages
    runs-on: ubuntu-latest
    env:
      TZ: Asia/Shanghai
      ALGOLIA_ADMIN_API_KEY: ${{ secrets.ALGOLIA_ADMIN_API_KEY }}
```

或者使用

```bash
export ALGOLIA_ADMIN_API_KEY=…
export HEXO_ALGOLIA_INDEXING_KEY=…
```

`indexName` 即你开始新建的索引名称
![image.png](https://cdn.nlark.com/yuque/0/2021/png/8391407/1620790208902-1a6311bf-bd58-4889-9261-f2b6dd4d779e.png#crop=0&crop=0&crop=1&crop=1&height=64&id=u57f4c82d&margin=%5Bobject%20Object%5D&name=image.png&originHeight=64&originWidth=379&originalType=binary&ratio=1&rotation=0&showTitle=false&size=5668&status=done&style=none&title=&width=379)
其他内容保持默认即可，但对于`fields`

### 配置示例

这里选择不截取上传全文，并且删除 html 标签，只留下有用的搜索内容

```yaml
fields:
  - content:strip
  - excerpt:strip
  - gallery
  - permalink
  - photos
  - slug
  - tags
  - title
```

但对于博客来说，没人会按照 tags photos（或者 cover）来搜索吧，所以有些内容不必要上传，并如果你和我一样有多个镜像站，在不改源码（algolia.js）的情况下，不会使用 permalink 而使用 path（改源码可以使用 slug，但没必要），并且只留下必要的内容，如下所示：

```yaml
algolia:
  appId: "947RX7HP3E"
  apiKey: "9114b3fa2a3307b2cc8eec7e3ae5a8ea"
  chunkSize: 5000
  indexName: "ccknbc-blog"
  fields:
    - path
    - title
    - content:strip
```

这样有了标题，全文内容，路径即可在不同镜像站找到对应的页面，而不是跳到主站，当然你选择跳到主站无可厚非。

## 使用命令

```bash
hexo algolia
而在这之前还需要hexo g生成文件
所以具体使用命令就是
hexo cl && hexo g && hexo algolia
或者在未安装 HEXO CLI 的情况下使用以下命令
npm run clean && npm run build && hexo algolia -n && gulp
```

### 可选配置

是否删除之前建立好的索引重新建立索引？

```bash
hexo algolia -n
或者
hexo algolia --no-clear
```

注意查看命令行输出信息，然后去官网检查索引是否生成
![image.png](https://cdn.nlark.com/yuque/0/2021/png/8391407/1620792250950-8c6c2e31-a5f4-41d3-8526-c101b88ca2f0.png#crop=0&crop=0&crop=1&crop=1&height=676&id=u0aaf2648&margin=%5Bobject%20Object%5D&name=image.png&originHeight=676&originWidth=1865&originalType=binary&ratio=1&rotation=0&showTitle=false&size=125864&status=done&style=none&title=&width=1865)
事实上到这里已经可以获得下图所示的搜索效果（这是冰老师博客的效果，它使用的是 hexo-algolia，毕竟有关于我界面）
![image.png](https://cdn.nlark.com/yuque/0/2021/png/8391407/1623297781030-708a3fa6-a56d-4fe0-bb45-5c3bb9081eba.png#clientId=uc24fb27d-4fc5-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=udc02fc71&margin=%5Bobject%20Object%5D&name=image.png&originHeight=508&originWidth=751&originalType=binary&ratio=2&rotation=0&showTitle=false&size=35158&status=done&style=none&taskId=u0178d8fc-c514-4ab9-9efb-12d94a7bcc6&title=)

## Algolia 配置

这里不细节讲，你可以查阅[官方文档](https://community.algolia.com/instantsearch.js/v2/getting-started.html)，虽然有些过时的参数，但结合 [Upgrade from v2 to v3](https://www.algolia.com/doc/guides/building-search-ui/upgrade-guides/js/#upgrade-from-v2-to-v3) 还是勉强能用，蝴蝶已经做好了高亮标题，虽然会查询文章内容，但并不会高亮文章内容节选，我们要做的就是修改部分 js 内容，并对应的设置好 Algolia，以便按照我们要求的优先顺序展示搜索结果，而不是默认的很奇怪的排序，毕竟针对中文分词他是一个一个分不能按照英语那样，针对英文我们可以开启分词查询，驼峰查找而不是盲目的匹配整个单词，并且允许拼错字母或汉字的情况存在，这些都是一个搜索系统要考虑的问题。然后针对搜索速度，我们可以对文章内容进行切片或者属性的刻画，但 V2 所支持的功能实在太少，派的上用场的大概就是 匹配的字词内容，匹配度，匹配内容的摘录（默认 10 个字词），还有高级搜索用法的启用。
![image.png](https://cdn.nlark.com/yuque/0/2021/png/8391407/1620792329244-9538543c-aafa-4a2a-a13b-a856839d99b4.png#crop=0&crop=0&crop=1&crop=1&height=490&id=u96dacffc&margin=%5Bobject%20Object%5D&name=image.png&originHeight=490&originWidth=1526&originalType=binary&ratio=1&rotation=0&showTitle=false&size=53168&status=done&style=none&title=&width=1526)

![image.png](https://cdn.nlark.com/yuque/0/2021/png/8391407/1620792359705-aca4db80-07ec-41b5-ba89-3e398e4832c3.png#crop=0&crop=0&crop=1&crop=1&height=286&id=u1d01bcee&margin=%5Bobject%20Object%5D&name=image.png&originHeight=572&originWidth=1520&originalType=binary&ratio=1&rotation=0&showTitle=false&size=75266&status=done&style=none&title=&width=760)
![image.png](https://cdn.nlark.com/yuque/0/2021/png/8391407/1620792403427-919eeaf3-beee-43b8-ba15-33d179fb7483.png#crop=0&crop=0&crop=1&crop=1&height=390&id=ua294bd74&margin=%5Bobject%20Object%5D&name=image.png&originHeight=780&originWidth=1510&originalType=binary&ratio=1&rotation=0&showTitle=false&size=98311&status=done&style=none&title=&width=755)
![image.png](https://cdn.nlark.com/yuque/0/2021/png/8391407/1620792429374-c10f685c-42df-4b2f-8112-b63b811686f5.png#crop=0&crop=0&crop=1&crop=1&height=815&id=u8c98eecf&margin=%5Bobject%20Object%5D&name=image.png&originHeight=815&originWidth=1524&originalType=binary&ratio=1&rotation=0&showTitle=false&size=88864&status=done&style=none&title=&width=1524)
![image.png](https://cdn.nlark.com/yuque/0/2021/png/8391407/1620792467160-7192cedf-ad20-4fd0-bcb2-4f7557fc904d.png#crop=0&crop=0&crop=1&crop=1&height=567&id=u6ca53735&margin=%5Bobject%20Object%5D&name=image.png&originHeight=567&originWidth=1515&originalType=binary&ratio=1&rotation=0&showTitle=false&size=65520&status=done&style=none&title=&width=1515)
![image.png](https://cdn.nlark.com/yuque/0/2021/png/8391407/1620792523507-460b449b-cd80-4efc-897b-898aa544d09a.png#crop=0&crop=0&crop=1&crop=1&height=592&id=u28791a5d&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1183&originWidth=1537&originalType=binary&ratio=1&rotation=0&showTitle=false&size=130557&status=done&style=none&title=&width=768.5)![image.png](https://cdn.nlark.com/yuque/0/2021/png/8391407/1620792559182-d559fb1a-94e4-49ad-a13a-f9848fa7f784.png#crop=0&crop=0&crop=1&crop=1&height=363&id=u5d9546e2&margin=%5Bobject%20Object%5D&name=image.png&originHeight=725&originWidth=1511&originalType=binary&ratio=1&rotation=0&showTitle=false&size=75980&status=done&style=none&title=&width=755.5)![image.png](https://cdn.nlark.com/yuque/0/2021/png/8391407/1620792603109-0c127f51-0fd2-4f86-9290-1f25cf7b4deb.png#crop=0&crop=0&crop=1&crop=1&height=358&id=u1977ad48&margin=%5Bobject%20Object%5D&name=image.png&originHeight=358&originWidth=999&originalType=binary&ratio=1&rotation=0&showTitle=false&size=26859&status=done&style=none&title=&width=999)![image.png](https://cdn.nlark.com/yuque/0/2021/png/8391407/1620792626661-af14bf9c-6dfb-4306-beaf-d4153095ffbf.png#crop=0&crop=0&crop=1&crop=1&height=444&id=uf6f4182f&margin=%5Bobject%20Object%5D&name=image.png&originHeight=444&originWidth=997&originalType=binary&ratio=1&rotation=0&showTitle=false&size=27018&status=done&style=none&title=&width=997)![image.png](https://cdn.nlark.com/yuque/0/2021/png/8391407/1620792659190-7a5767d3-64f9-4f57-a247-1bbe65f45da5.png#crop=0&crop=0&crop=1&crop=1&height=196&id=u51baa85f&margin=%5Bobject%20Object%5D&name=image.png&originHeight=196&originWidth=976&originalType=binary&ratio=1&rotation=0&showTitle=false&size=17315&status=done&style=none&title=&width=976)

## JS 修改

### 主题 4.0.0 以下版本

到这里还没有结束，如果你这样操作就会有一个问题，假设你的访问流量很大，有很多人用搜索功能，那么免费的 1 万次搜索额度可能不够一个月的使用，需要按下`ENTER`键再执行搜索而不是实时搜索，因此可以稍作修改（blog\themes\butterfly\source\js\search\algolia.js) js 的部分内容，不想动源码的可以保存到其他与主题不冲突的路径，然后更换 CDN 地址即可
主要修改以下内容，然后就是排版问题改了改位置，不喜欢的可以不改，很直白就不用过多解释了，这样就可获得和本博客一样的搜索效果了

```diff
  search.addWidget(
    instantsearch.widgets.searchBox({
      container: '#algolia-search-input',
      reset: false,
      magnifier: false,
+      searchOnEnterKeyPressOnly: true,
      placeholder: GLOBAL_CONFIG.algolia.languages.input_placeholder
    })
  )
  search.addWidget(
    instantsearch.widgets.hits({
      container: '#algolia-hits',
      templates: {
        item: function (data) {
          const link = data.permalink ? data.permalink : (GLOBAL_CONFIG.root + data.path)
          return (
            '<a href="' + link + '" class="algolia-hit-item-link"><b>' +
            data._highlightResult.title.value + '</b><br>'
+            + data._snippetResult.contentStrip.value + '<br>( 匹配字词 : '
+            + data._highlightResult.contentStrip.matchedWords + ' ) | ( 匹配等级 : '
+            + data._highlightResult.contentStrip.matchLevel + ' )</a>'
          )
        },
```

### 主题 4.0.0 以上版本

已经升级到 V4 版本，那么一些特性就可以使用了，修改内容其实差不多，只是建议还是
对于第 87 行的页数限制，主要是为了手机上排版美观，不会转到下一行，但是这样会有一个问题，如果结果超过 5 页，那么将无法显示，最后一页代表第 5 页，所以我个人会选择删掉这个参数限制，同时合并删除了部分代码，以及使用 widget 的 powerby 组件而不是官方的 svg 代码解决方案
同样的部分参数发生了改变（L55-59），可以自行比对或查看[**官方文档**](https://www.algolia.com/doc/guides/building-search-ui/getting-started/js/)，也可以直接[**引用我的**](https://cdn.jsdelivr.net/gh/CCKNBC/ccknbc.github.io/js/search/algolia.js)

```yaml
CDN:
  # search
  algolia_js: https://cdn.jsdelivr.net/gh/CCKNBC/ccknbc.github.io/js/search/algolia.js
```

```javascript
window.addEventListener("load", () => {
  const openSearch = () => {
    const bodyStyle = document.body.style;
    bodyStyle.width = "100%";
    bodyStyle.overflow = "hidden";
    btf.animateIn(document.getElementById("search-mask"), "to_show 0.5s");
    btf.animateIn(
      document.querySelector("#algolia-search .search-dialog"),
      "titleScale 0.5s"
    );
    setTimeout(() => {
      document.querySelector("#algolia-search .ais-SearchBox-input").focus();
    }, 100);

    // shortcut: ESC
    document.addEventListener("keydown", function f(event) {
      if (event.code === "Escape") {
        closeSearch();
        document.removeEventListener("keydown", f);
      }
    });
  };

  const closeSearch = () => {
    const bodyStyle = document.body.style;
    bodyStyle.width = "";
    bodyStyle.overflow = "";
    btf.animateOut(
      document.querySelector("#algolia-search .search-dialog"),
      "search_close .5s"
    );
    btf.animateOut(document.getElementById("search-mask"), "to_hide 0.5s");
  };

  const searchClickFn = () => {
    document
      .querySelector("#search-button > .search")
      .addEventListener("click", openSearch);
    document
      .getElementById("search-mask")
      .addEventListener("click", closeSearch);
    document
      .querySelector("#algolia-search .search-close-button")
      .addEventListener("click", closeSearch);
  };

  searchClickFn();

  window.addEventListener("pjax:complete", function () {
    getComputedStyle(document.querySelector("#algolia-search .search-dialog"))
      .display === "block" && closeSearch();
    searchClickFn();
  });

  const algolia = GLOBAL_CONFIG.algolia;
  const isAlgoliaValid = algolia.appId && algolia.apiKey && algolia.indexName;
  if (!isAlgoliaValid) {
    return console.error("Algolia setting is invalid!");
  }

  const searchClient = window.algoliasearch(algolia.appId, algolia.apiKey);
  const search = instantsearch({
    indexName: algolia.indexName,
    searchClient,
  });

  search.addWidgets([
    instantsearch.widgets.searchBox({
      container: "#algolia-search-input",
      showReset: false,
      showSubmit: false,
      placeholder: GLOBAL_CONFIG.algolia.languages.input_placeholder,
      searchAsYouType: false,
      showLoadingIndicator: true,
    }),
    instantsearch.widgets.configure({
      hitsPerPage: algolia.hits.per_page || 5,
    }),
    instantsearch.widgets.hits({
      container: "#algolia-hits",
      templates: {
        item: function (data) {
          const link = data.permalink
            ? data.permalink
            : GLOBAL_CONFIG.root + data.path;
          return `
            <a href="${link}" class="algolia-hit-item-link">
            <b>${data._highlightResult.title.value || "no-title"}</b>
            <br>${data._snippetResult.contentStrip.value}</br>
            匹配字词: <em><mark>${
              data._highlightResult.contentStrip.matchedWords
            }</mark></em> | 匹配等级: <em><mark>${
            data._highlightResult.contentStrip.matchLevel
          }</emmark></em>
            </a>`;
        },
        empty: function (data) {
          return (
            '<div id="algolia-hits-empty">' +
            GLOBAL_CONFIG.algolia.languages.hits_empty.replace(
              /\$\{query}/,
              data.query
            ) +
            "</div>"
          );
        },
      },
    }),
    instantsearch.widgets.pagination({
      container: "#algolia-pagination",
      totalPages: 5,
      templates: {
        first: '<i class="fas fa-angle-double-left" title="第一页"></i>',
        last: '<i class="fas fa-angle-double-right" title="最后一页"></i>',
        previous: '<i class="fas fa-angle-left" title="上一页"></i>',
        next: '<i class="fas fa-angle-right" title="下一页"></i>',
      },
    }),
    instantsearch.widgets.stats({
      container: "#algolia-stats",
      templates: {
        text: function (data) {
          const stats = GLOBAL_CONFIG.algolia.languages.hits_stats
            .replace(/\$\{hits}/, data.nbHits)
            .replace(/\$\{time}/, data.processingTimeMS);
          return `${stats}`;
        },
      },
    }),
    instantsearch.widgets.poweredBy({
      container: "#algolia-powered-by",
    }),
  ]);
  search.start();

  window.pjax &&
    search.on("render", () => {
      window.pjax.refresh(document.getElementById("algolia-hits"));
    });
});
```

## 最终效果

### 主题 4.0.0 以下版本

![image.png](https://cdn.nlark.com/yuque/0/2021/png/8391407/1623297948979-16f7476e-0978-49ee-a667-2dc060896c88.png#clientId=uc24fb27d-4fc5-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=ud3ca95b0&margin=%5Bobject%20Object%5D&name=image.png&originHeight=413&originWidth=753&originalType=binary&ratio=2&rotation=0&showTitle=false&size=40542&status=done&style=none&taskId=u9d85e4b7-062e-432f-b6d8-854d2e5d2eb&title=)
（这个是因为我修改了源码，实际上也能通过修改 JS 实现，但大多数人不会关心这些搜索小贴士）
![image.png](https://cdn.nlark.com/yuque/0/2021/png/8391407/1623298049726-3cded22e-2e40-44b3-a445-d542b3bc3c80.png#clientId=uc24fb27d-4fc5-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u13b48f0e&margin=%5Bobject%20Object%5D&name=image.png&originHeight=601&originWidth=750&originalType=binary&ratio=2&rotation=0&showTitle=false&size=61545&status=done&style=none&taskId=ua59892ff-66db-45b5-a905-ac97bcb7b4d&title=)
对于中文它当作单字匹配
![image.png](https://cdn.nlark.com/yuque/0/2021/png/8391407/1623298062241-b4dd37f7-aa87-485f-a394-950943e0c211.png#clientId=uc24fb27d-4fc5-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u8d3029fa&margin=%5Bobject%20Object%5D&name=image.png&originHeight=498&originWidth=752&originalType=binary&ratio=2&rotation=0&showTitle=false&size=40466&status=done&style=none&taskId=uca3eae79-9718-4088-8c72-c34e98f6782&title=)
允许拼写错误
![image.png](https://cdn.nlark.com/yuque/0/2021/png/8391407/1623298137784-eb2713f9-377f-4f5d-824d-a7a7b7a881c4.png#clientId=uc24fb27d-4fc5-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=uc7968f09&margin=%5Bobject%20Object%5D&name=image.png&originHeight=598&originWidth=750&originalType=binary&ratio=2&rotation=0&showTitle=false&size=61697&status=done&style=none&taskId=u9c8b459e-8141-46ef-9d7e-11bd8cc917f&title=)

### 主题 4.0.0 以上版本

本博客目前使用效果点击搜索按钮即可查看

## 如有错误，还望指正！
