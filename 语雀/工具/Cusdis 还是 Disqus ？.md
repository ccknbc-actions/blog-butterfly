---
title: Cusdis 还是 Disqus ？
urlname: '25'
date: 2021-05-11T18:00:00.000Z
updated: 2021-05-12T12:00:00.000Z
cover: 'https://cdn.nlark.com/yuque/0/2021/png/8391407/1620734397431-dfd65654-d06b-4e42-a20e-b68857ccc9cf.png'
translate_title: cusdis-or-disqus
subtitle: Cusdis or Disqus
'<font style="color:#404040;">tags': </font>工具
'<font style="color:#404040;">keywords': '</font>[Hexo,Cusdis,Disqus]'
'<font style="color:#404040;">categories': 工具</font>
'<font style="color:#404040;">description': </font>在中国大陆，如果追求用户的隐私保护，是否有更好的评论解决方案？
'<font style="color:#404040;">cover': '</font>https://pic1.afdiancdn.com/user/8a7f563c2e3811ecab5852540025c377/common/826d1d0e2095fde8cdd3db7dff112b2c_w1920_h1080_s583.jpg'
'<font style="color:#404040;">id': 25</font>
---
在中国大陆，如果追求用户的隐私保护，是否有更好的评论解决方案？



<!-- more -->



本文首发在[**语雀**](https://www.yuque.com/ccknbc/blog/25/)

自动同步更新至[**CC的部落格**](https://blog.ccknbc.cc/posts/cusdis-or-disqus/)



开源，免费，开箱即用，或零成本自托管，未来，有更多可能……



但目前的 [**Cusdis**](https://cusdis.com/) 它还不足以让我弃用不能在中国大陆访问的 [**Disqus**](https://disqus.com)



## [Cusdis](https://cusdis.com/doc#/?id=cusdis)
<font style="color:#34495E;">Open-source, lightweight (~5kb gzipped), privacy-friendly alternative to Disqus.</font>

## [Features](https://cusdis.com/doc#/?id=features)
+ <font style="color:#34495E;">Universal embed code</font>
    - <font style="color:#34495E;">You can embed Cusdis on every website.</font>
+ <font style="color:#34495E;">Light-weight sdk</font>
    - <font style="color:#34495E;">The SDK that embed to your website is only 5kb (gzipped). Compared to Disqus (which is 24kb gzipped), it's very light-weight.</font>
+ <font style="color:#34495E;">Email notification</font>
+ <font style="color:#34495E;">One-click import data from Disqus</font>
+ <font style="color:#34495E;">Moderation dashboard</font>
    - <font style="color:#34495E;">Since we don't require user sign in to comment, all comments are NOT displayed by default, until the moderator approve it. We provide a moderation dashboard for it.</font>

<font style="color:#34495E;">There are two ways to use Cusdis:</font>

## [Self host](https://cusdis.com/doc#/?id=self-host)
_<font style="color:#7F8C8D;">Pros: You own your data</font>_

<font style="color:#34495E;">You can install Cusdis on your own server, just follow this</font>[installation guide](https://cusdis.com/doc#/self-host/vercel)

## [Hosted service](https://cusdis.com/doc#/?id=hosted-service)
_<font style="color:#7F8C8D;">Pros: Easy to use</font>_

<font style="color:#34495E;">You can also use our</font>[hosted service](https://cusdis.com/dashboard)<font style="color:#34495E;">. We host our service on</font>[Vercel](https://vercel.com/)<font style="color:#34495E;">, the data is stored on a PostgreSQL database.</font>

## [Compared to Disqus](https://cusdis.com/doc#/?id=compared-to-disqus)
<font style="color:#34495E;">Cusdis is not designed for a FULLY alternative to Disqus, it's aim to implement a minimist embed comment tool for small sites (like your static blog).</font>

<font style="color:#34495E;">Below are the pros and cons of Cusdis:</font>

### [Pros](https://cusdis.com/doc#/?id=pros)
+ <font style="color:#34495E;">Cusdis is open-source and self-hostable, you own your data.</font>
+ <font style="color:#34495E;">The SDK is lightweight (~5kb gzipped)</font>
+ <font style="color:#34495E;">Cusdis doesn't required commenter to sign in. We don't use cookies at all.</font>

### [Cons](https://cusdis.com/doc#/?id=cons)
+ <font style="color:#34495E;">Cusdis is on early development stage</font>
+ <font style="color:#34495E;">You have to manually moderate comments which are not display by default until you approve it, since we dont't have a spam filter.</font>
+ <font style="color:#34495E;">Disqus is a company, we aren't.</font>



## 我的观点


<font style="color:#34495E;">观望中，适配起来也很简单，但目前不打算投入使用。好在由于很简约，语言也可以自定义，也做了深色模式适配，放在侧栏当做留言板给不能访问 Disqus 的游客使用，但有人肯定会问，是 Tidio 不能满足要求吗？还是其他评论看不上？</font>



<font style="color:#34495E;">开头已经说了，我不想收集用户过多隐私信息，Tidio 和其他评论系统，都会记录下系统信息，IP等不必要的敏感信息，对于静态博客来说，其实没必要。Disqus 虽然记录其实包括邮箱在内的信息全都***打码了，这也就是导出后的Disqus评论仅能作为一个备份，导入其他平台因为缺少邮箱这个信息头像无法显示的原因。Disqus 可以设定一个默认头像，当匿名评论者或者已注册的无头像用户评论时可以显示默认头像，并且它的 CDN 服务没有被墙，所以包括图片表情在内的都可正常显示，不用担心头像镜像的问题，只是 DisqusJS 没做这么多。而 Cusdis 目前没有头像显示这一功能，但后续应该会添加选项决定是否显示，导入 Disqus 评论后就可完美兼容，而又因为只有5kb，不如 Disqus 那样臃肿，并且这个广告是让人无法忍受的，虽然我的博客因为流量太少官方瞧不起，不给我插广告躲过了，但万一哪天政策改了，免费用户强制广告，体验将极速降低，因为他不可控。再来我可以把数据掌握在自己手里，拥有一个够用的管理面板就够了。</font>

<font style="color:#34495E;"></font>

<font style="color:#34495E;">虽然 Disqus 侧边栏管理评论很方便，并且可以通过邮件回复完成评论审核，但也因为这样，当你关闭评论审核，新评论通知就不发送了，所以我用上了 RSS 来获取评论通知。很开心 Cusdis 作者也很人性的将提供了同本博客RSS通过邮件订阅时，自动发送的确认邮件通知和取消订阅的选项。而对于博主收到的邮件提醒会附带一个按钮指向无需登陆批准回复的管理页面，电报等 Webhook 通知也如此。但这么一看目前好像全部都要审核很不方便，但该有的都会有的，处于快速迭代发展的它目前功能并不完善，但可以看出，它将是一个很好的评论系统。</font>

<font style="color:#34495E;"></font>

<font style="color:#34495E;">Disqus 的匿名评论还有一点，就是需要谷歌真人验证</font><font style="color:#34495E;">🤔</font><font style="color:#34495E;">，可以极大减少垃圾灌水评论，但本就无法访问服务的大陆用户真的会为了评论好不容易开了代理准备评论发现要点击图片验证，去注册一个账号？对于违禁词过滤似乎没考虑到中文这种分词，要求至少三个字所以不人性化，而长期缺少中文的训练或许反垃圾对于中文也很拉闸。</font>

<font style="color:#34495E;"></font>

<font style="color:#34495E;">但作为博客灵活选择博客开启回应，页面关闭回应让游客反馈本篇文章如何却是我会在乎的。至于相关推荐还是使用使用自带的根据分类来吧，因为它抓取容易抓不到封面，而且并不是很智能。置顶，点赞，编辑评论，社交登陆等功能目前与这个输入信息一次性的评论来说显得格格不入，但不保证 Cusdis 未来会以小部件的方式供使用者自行选择，此外还期待一下可以和 Disqus 小部件一样人性化的最新评论功能，因为它简单的请求参数便可控制，是否显示头像，头像大小，评论条数，字数限制，以及是否显示管理员评论这些功能。</font>

<font style="color:#34495E;"></font>

<font style="color:#34495E;">作者对包的体积似乎很执着，但平平淡淡才是真</font>

<font style="color:#34495E;"></font>

## DEMO
```html
<div id="cusdis_thread"  
     data-host="https://cusdis.ccknbc.cc"  
     data-app-id="blog"  
     data-page-id="/cusdis-or-disqus"  
     data-page-url="/cusdis-or-disqus"  
     data-page-title="Cusdis 还是 Disqus ？">
</div>
<script defer src="https://cusdis.ccknbc.cc/js/widget/lang/zh-cn.js"></script>
<script async defer src="https://cusdis.ccknbc.cc/js/cusdis.es.js"></script>
```

## Widget
### 评论
```html
<div id="wpac-comment"></div>
<script type="text/javascript">
wpac_init = window.wpac_init || [];
wpac_init.push({widget: 'Comment', id: 25905});
(function() {
    if ('WIDGETPACK_LOADED' in window) return;
    WIDGETPACK_LOADED = true;
    var mc = document.createElement('script');
    mc.type = 'text/javascript';
    mc.async = true;
    mc.src = 'https://embed.widgetpack.com/widget.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(mc, s.nextSibling);
})();
</script>
<a href="https://widgetpack.com" class="wpac-cr">Comments System WIDGET PACK</a>
```



### 点评
```html
<div id="wpac-review"></div>
<script type="text/javascript">
wpac_init = window.wpac_init || [];
wpac_init.push({widget: 'Review', id: 25905});
(function() {
    if ('WIDGETPACK_LOADED' in window) return;
    WIDGETPACK_LOADED = true;
    var mc = document.createElement('script');
    mc.type = 'text/javascript';
    mc.async = true;
    mc.src = 'https://embed.widgetpack.com/widget.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(mc, s.nextSibling);
})();
</script>
<a href="https://widgetpack.com" class="wpac-cr">Reviews System WIDGET PACK</a>
```



