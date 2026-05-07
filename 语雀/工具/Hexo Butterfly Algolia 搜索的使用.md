---
title: Hexo Butterfly Algolia 搜索的使用
urlname: '24'
date: 2021-05-11T11:00:00.000Z
updated: 2023-02-16T19:11:40.000Z
cover: 'https://cdn.nlark.com/yuque/0/2021/png/8391407/1620704686808-3b3ea7dc-2529-4e1e-a930-9e338dc07963.png'
translate_title: hexo-butterfly-algolia
subtitle: Hexo Butterfly Algolia
'<font style="color:#404040;">tags': </font>工具
'<font style="color:#404040;">keywords': '</font>[Hexo,Butterfly,Algolia]'
'<font style="color:#404040;">categories': 工具</font>
'<font style="color:#404040;">description': </font>本文介绍了 Hexo Butterfly 主题下 Algolia 搜索的使用
'<font style="color:#404040;">cover': '</font>https://pic1.afdiancdn.com/user/8a7f563c2e3811ecab5852540025c377/common/c9dcd19b9621a425f914ffb64cf2f8c1_w1920_h1080_s281.jpg'
'<font style="color:#404040;">id': 24</font>
---
本文介绍了 Hexo Butterfly 主题下 Algolia 搜索的使用



本文首发在[**语雀**](https://www.yuque.com/ccknbc/blog/24/)

自动同步更新至[**CC的部落格**](https://blog.ccknbc.cc/posts/hexo-butterfly-algolia/)



## 注册账号
前往 [Algolia](https://www.algolia.com/users/sign_up) 官网注册一个账号，新建 应用和 index

![](https://cdn.nlark.com/yuque/0/2021/png/8391407/1620791672826-3bac29b1-3f60-4be8-bdc5-7b615e72f78a.png)

数据中心建议选择新加坡或香港，当然根据你自己情况而定

![](https://cdn.nlark.com/yuque/0/2021/png/8391407/1620791714386-d2a2ac19-edfd-4c8b-ab02-9de7b770ff21.png)

![](https://cdn.nlark.com/yuque/0/2021/png/8391407/1620791516501-3f36941d-cf13-49aa-bdb4-e956f632283a.png)

## 安装插件
```bash
npm install hexo-algolia --save
npm install hexo-algoliasearch --save
```

分别是 [hexo-algolia](https://github.com/oncletom/hexo-algolia) 和 [hexo-algoliasearch](https://github.com/LouisBarranqueiro/hexo-algoliasearch)，他们的介绍分别为 

> Index your hexo website content to Algolia Search.  
>
> 🔎 A plugin to index posts of your Hexo blog on Algolia
>

也就很明显了，如果你想要全站搜索可选择前者，如果你只想搜索文章两者兼可。但前者不能将文章内容作为索引上传（其实老版本是支持的，但因为索引大小限制，在新版本取消索引了文章内容），后者目前仍可全文上传。

然后就是 HEXO配置文件中添加以下内容，下文基本以 `hexo-algoliasearch` 为例，因为我个人认为访客只会搜文章吧（事实上是搜索根本没人用，毕竟也根本没人访问），hexo-algolia 可查看官方文档，注意配置和命令的区别

>  _config.yml :
>

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

>  _config.butterfly.yml :
>

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

![](https://cdn.nlark.com/yuque/0/2021/png/8391407/1620789827112-9247b7ae-f3c9-4807-93cd-46c2b8dbb2bc.png)

![](https://cdn.jsdelivr.net/gh/oncletom/hexo-algolia@main/algolia-write-key.png)

对于 Windows 系统，如果你不想每次都进行设定变量操作，可以添加`ALGOLIA_ADMIN_API_KEY`到系统的环境变量中

![](https://cdn.nlark.com/yuque/0/2021/png/8391407/1620789745876-cbf0d411-f694-45c7-bcbd-c0987f71f718.png)

而 hexo-algolia 插件环境变量名称为 `HEXO_ALGOLIA_INDEXING_KEY` 注意根据对应的文档更改，当然也可以使用命令行工具

```bash
# Windows
## 微软的 powershell)
$env:ALGOLIA_ADMIN_API_KEY = ""

## cmd
建议不用 cmd，正经人不用 cmd

# Linux
## sh/bash
export ALGOLIA_ADMIN_API_KEY=

## fish
set -xg ALGOLIA_ADMIN_API_KEY ""
```



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

![](https://cdn.nlark.com/yuque/0/2021/png/8391407/1620790208902-1a6311bf-bd58-4889-9261-f2b6dd4d779e.png)

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

但对于博客来说，没人会按照 tags photos（或者cover）来搜索吧，所以有些内容不必要上传，并如果你和我一样有多个镜像站，在不改源码（algolia.js）的情况下，不会使用 permalink 而使用 path（改源码可以使用 slug，但没必要），并且只留下必要的内容，如下所示：

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

![](https://cdn.nlark.com/yuque/0/2021/png/8391407/1620792250950-8c6c2e31-a5f4-41d3-8526-c101b88ca2f0.png)

事实上到这里已经可以获得下图所示的搜索效果（这是冰老师博客的效果，它使用的是 hexo-algolia，毕竟有关于我界面）

![](https://cdn.nlark.com/yuque/0/2021/png/8391407/1623297781030-708a3fa6-a56d-4fe0-bb45-5c3bb9081eba.png)

## Algolia配置
这里不细节讲，你可以查阅[官方文档](https://community.algolia.com/instantsearch.js/v2/getting-started.html)，虽然有些过时的参数，但结合 [Upgrade from v2 to v3](https://www.algolia.com/doc/guides/building-search-ui/upgrade-guides/js/#upgrade-from-v2-to-v3) 还是勉强能用，蝴蝶已经做好了高亮标题，虽然会查询文章内容，但并不会高亮文章内容节选，我们要做的就是修改部分 js 内容，并对应的设置好 Algolia，以便按照我们要求的优先顺序展示搜索结果，而不是默认的很奇怪的排序，毕竟针对中文分词他是一个一个分不能按照英语那样，针对英文我们可以开启分词查询，驼峰查找而不是盲目的匹配整个单词，并且允许拼错字母或汉字的情况存在，这些都是一个搜索系统要考虑的问题。然后针对搜索速度，我们可以对文章内容进行切片或者<font style="color:#23263B;">属性的刻画，但 V2 所支持的功能实在太少，派的上用场的大概就是 匹配的字词内容，匹配度，匹配内容的摘录（默认10个字词），还有高级搜索用法的启用。</font>

![](https://cdn.nlark.com/yuque/0/2021/png/8391407/1620792329244-9538543c-aafa-4a2a-a13b-a856839d99b4.png)



![](https://cdn.nlark.com/yuque/0/2021/png/8391407/1620792359705-aca4db80-07ec-41b5-ba89-3e398e4832c3.png)

![](https://cdn.nlark.com/yuque/0/2021/png/8391407/1620792403427-919eeaf3-beee-43b8-ba15-33d179fb7483.png)

![](https://cdn.nlark.com/yuque/0/2021/png/8391407/1620792429374-c10f685c-42df-4b2f-8112-b63b811686f5.png)

![](https://cdn.nlark.com/yuque/0/2021/png/8391407/1620792467160-7192cedf-ad20-4fd0-bcb2-4f7557fc904d.png)

![](https://cdn.nlark.com/yuque/0/2021/png/8391407/1620792523507-460b449b-cd80-4efc-897b-898aa544d09a.png)![](https://cdn.nlark.com/yuque/0/2021/png/8391407/1620792559182-d559fb1a-94e4-49ad-a13a-f9848fa7f784.png)![](https://cdn.nlark.com/yuque/0/2021/png/8391407/1620792603109-0c127f51-0fd2-4f86-9290-1f25cf7b4deb.png)![](https://cdn.nlark.com/yuque/0/2021/png/8391407/1620792626661-af14bf9c-6dfb-4306-beaf-d4153095ffbf.png)![](https://cdn.nlark.com/yuque/0/2021/png/8391407/1620792659190-7a5767d3-64f9-4f57-a247-1bbe65f45da5.png)

## JS修改
### 主题4.0.0以下版本
<font style="color:#23263B;">到这里还没有结束，如果你这样操作就会有一个问题，假设你的访问流量很大，有很多人用搜索功能，那么免费的1万次搜索额度可能不够一个月的使用，需要按下</font>`<font style="color:#23263B;">ENTER</font>`<font style="color:#23263B;">键再执行搜索而不是实时搜索，因此可以稍作修改（</font>blog\themes\butterfly\source\js\search\algolia.js) js的部分内容<font style="color:#23263B;">，不想动源码的可以保存到其他与主题不冲突的路径，然后更换 CDN 地址即可</font>

<font style="color:#23263B;">主要修改以下内容，然后就是排版问题改了改位置，不喜欢的可以不改，很直白就不用过多解释了，这样就可获得和本博客一样的搜索效果了</font>

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

### 主题4.0.0以上版本
已经升级到V4版本，那么一些特性就可以使用了，修改内容其实差不多，只是建议对于第87行的页数限制，主要是为了手机上排版美观，不会转到下一行，但是这样会有一个问题，如果结果超过5页，那么将无法显示，最后一页代表第5页，所以我个人会选择删掉这个参数限制，同时合并删除了部分代码，以及使用widget的powerby组件而不是官方的svg代码解决方案。另外因为新版官方的每次访问网站都会有一次全局请求，这在消耗免费额度的同时，也影响网站加载的速度，所以修改默认行为为按下回车后再请求

同样的部分参数发生了改变（L55-59），可以自行比对或查看[**官方文档**](https://www.algolia.com/doc/guides/building-search-ui/getting-started/js/)，也可以直接[**引用我的**](https://cdn.jsdelivr.net/gh/CCKNBC/ccknbc.github.io/js/search/algolia.js)

****

**特别提一嘴**

**官方切片方式对我来说140个字太长了，所以如果可以接受就用官方的，不用做其他更改，但想要和我的显示方式一样，就注意配置好切片，默认是10个词符，毕竟有现成的切片高亮处理可以用，就没必要再来一次了**

****

![](https://cdn.nlark.com/yuque/0/2022/png/8391407/1669548282470-47f14d26-cf31-4b01-8890-5946f68c699e.png)

另外，新版浏览器支持搜索并定位高亮处理，所以对跳转链接也做了处理，算是弥补了一点不能精准定位的缺陷，比如点击如下链接它会跳转到搜索结果对应的位置，至于前后匹配多少字符你们自行修改，但也是处于不太好用的状态，毕竟是分片还是有点奇怪，对英文来说应该是单词识别，只是中文恰巧是另一标准，单字变成了词



[#:~:text=勿滥用-,表情,-符号和](/posts/how-to-ask-questions-the-smart-way/#:~:text=勿滥用-,表情,-符号和)



![](https://cdn.nlark.com/yuque/0/2022/png/8391407/1669550104799-99697278-0900-4dca-aa04-65a5a2536c1d.png)



```yaml
CDN:
  # search
  algolia_js: https://cdn.jsdelivr.net/gh/CCKNBC/ccknbc.github.io/js/search/algolia.js
```

```javascript
window.addEventListener('load', () => {
  const openSearch = () => {
    const bodyStyle = document.body.style
    bodyStyle.width = '100%'
    bodyStyle.overflow = 'hidden'
    btf.animateIn(document.getElementById('search-mask'), 'to_show 0.5s')
    btf.animateIn(document.querySelector('#algolia-search .search-dialog'), 'titleScale 0.5s')
    setTimeout(() => { document.querySelector('#algolia-search .ais-SearchBox-input').focus() }, 100)

    // shortcut: ESC
    document.addEventListener('keydown', function f (event) {
      if (event.code === 'Escape') {
        closeSearch()
        document.removeEventListener('keydown', f)
      }
    })
  }

  const closeSearch = () => {
    const bodyStyle = document.body.style
    bodyStyle.width = ''
    bodyStyle.overflow = ''
    btf.animateOut(document.querySelector('#algolia-search .search-dialog'), 'search_close .5s')
    btf.animateOut(document.getElementById('search-mask'), 'to_hide 0.5s')
  }

  const searchClickFn = () => {
    document.querySelector('#search-button > .search').addEventListener('click', openSearch)
  }

  const searchClickFnOnce = () => {
    document.getElementById('search-mask').addEventListener('click', closeSearch)
    document.querySelector('#algolia-search .search-close-button').addEventListener('click', closeSearch)
  }

  const algolia = GLOBAL_CONFIG.algolia
  const isAlgoliaValid = algolia.appId && algolia.apiKey && algolia.indexName
  if (!isAlgoliaValid) {
    return console.error('Algolia setting is invalid!')
  }

  const search = instantsearch({
    indexName: algolia.indexName,
    searchClient: algoliasearch(algolia.appId, algolia.apiKey),
    searchFunction(helper) {
      helper.state.query && helper.search()
    },
  })

  const configure = instantsearch.widgets.configure({
    hitsPerPage: algolia.per_page || 5
  })

  const searchBox = instantsearch.widgets.searchBox({
    container: '#algolia-search-input',
    showReset: false,
    showSubmit: false,
    searchAsYouType: false,
    placeholder: GLOBAL_CONFIG.algolia.languages.input_placeholder,
    showLoadingIndicator: true
  })

  const hits = instantsearch.widgets.hits({
    container: '#algolia-hits',
    templates: {
      item(data) {
        const link = data.permalink ? data.permalink : (GLOBAL_CONFIG.root + data.path)
        const content = data._snippetResult.contentStrip.value
        return `
          <a href="${link}#:~:text=${content.substring(content.indexOf('<mark>')-3,content.indexOf('<mark>'))}-,${content.substring(content.indexOf('<mark>')+6,content.indexOf('</mark>'))},-${content.substring(content.indexOf('</mark>')+7,content.indexOf('</mark>')+10)}" class="algolia-hit-item-link">
          <b>${data._highlightResult.title.value || "no-title"}</b>
          <br>${content}</br>
          匹配字词: <em><mark>${
          data._highlightResult.contentStrip.matchedWords
          }</mark></em> | 匹配等级: <em><mark>${
          data._highlightResult.contentStrip.matchLevel
          }</mark></em>
          </a>`;
      },
      empty: function (data) {
        return (
          '<div id="algolia-hits-empty">' +
          GLOBAL_CONFIG.algolia.languages.hits_empty.replace(/\$\{query}/, data.query) +
          '</div>'
        )
      }
    }
  })

  const stats = instantsearch.widgets.stats({
    container: '#algolia-info > .algolia-stats',
    templates: {
      text: function (data) {
        const stats = GLOBAL_CONFIG.algolia.languages.hits_stats
          .replace(/\$\{hits}/, data.nbHits)
          .replace(/\$\{time}/, data.processingTimeMS)
        return (
          `<hr>${stats}`
        )
      }
    }
  })

  const powerBy = instantsearch.widgets.poweredBy({
    container: '#algolia-info > .algolia-poweredBy',
  })

  const pagination = instantsearch.widgets.pagination({
    container: '#algolia-pagination',
    totalPages: algolia.totalPages,
    templates: {
      first: '<i class="fa-solid fa-angle-double-left" title="第一页"></i>',
      last: '<i class="fa-solid fa-angle-double-right" title="最后一页"></i>',
      previous: '<i class="fa-solid fa-angle-left" title="上一页"></i>',
      next: '<i class="fa-solid fa-angle-right" title="下一页"></i>'
    }
  })


  search.addWidgets([configure,searchBox,hits,stats,powerBy,pagination]) // add the widgets to the instantsearch instance

  search.start()

  searchClickFn()
  searchClickFnOnce()

  window.addEventListener('pjax:complete', () => {
    getComputedStyle(document.querySelector('#algolia-search .search-dialog')).display === 'block' && closeSearch()
    searchClickFn()
  })

  window.pjax && search.on('render', () => {
    window.pjax.refresh(document.getElementById('algolia-hits'))
  })
})
```

## 效果预览
![](https://cdn.nlark.com/yuque/0/2021/png/8391407/1623297948979-16f7476e-0978-49ee-a667-2dc060896c88.png)

（这个是因为我修改了源码，实际上也能通过修改 JS 实现，但大多数人不会关心这些搜索小贴士）

![](https://cdn.nlark.com/yuque/0/2021/png/8391407/1623298049726-3cded22e-2e40-44b3-a445-d542b3bc3c80.png)

对于中文它当作单字匹配

![](https://cdn.nlark.com/yuque/0/2021/png/8391407/1623298062241-b4dd37f7-aa87-485f-a394-950943e0c211.png)

允许拼写错误

![](https://cdn.nlark.com/yuque/0/2021/png/8391407/1623298137784-eb2713f9-377f-4f5d-824d-a7a7b7a881c4.png)

## 特别说明
因两个月前已申请通过，本博客已切换至不限搜索次数的[**DocSearch**](https://docsearch.algolia.com/)！同时也加入了[**开源计划**](https://www.algolia.com/for-open-source/)，但因为10DSN太香了，虽然instantsearch可玩性更好，但我也只申请了200k/月的额度（虽然可以增加），所以为了即时搜索我还是选择了白嫖，而且设定为每天自动爬取的话，省去了生成索引上传的这一步骤，节省了自动部署的时间。而且爬取到数据后，前端我并非一定要使用docsearch方案，用instantsearch配合其他插件也不是不可以。

![](https://cdn.nlark.com/yuque/0/2023/png/8391407/1676545133728-0a8f5c54-05e9-422c-b427-21087c6b0372.png)





