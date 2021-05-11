---
title: Cusdis 还是 Disqus？
urlname: '25'
date: '2021-05-11 18:00:00 +0800'
translate_title: cusdis-or-disqus
tags:
  - 工具
  - 评论
keywords:
  - Hexo
  - Cusdis
  - Disqus
categories: 工具
description: 在中国大陆，如果追求用户的隐私保护，是否有更好的评论解决方案？
cover: >-
  https://cdn.jsdelivr.net/gh/ccknbc-backup/photos@master/blog/2021-05-11~19-58-44.webp
id: 25
updated: 2021-05-11 18:00:00
---

在中国大陆，如果追求用户的隐私保护，是否有更好的评论解决方案？

本文首发在[**语雀**](https://www.yuque.com/ccknbc/blog/25)
自动同步更新至[**CC 的部落格**](https://blog.ccknbc.cc/posts/cusdis-or-disqus)

开源，免费，开箱即用，或零成本自托管，未来，有更多可能……

```html
<script defer src="https://cusdis.ccknbc.cc/js/widget/lang/zh-cn.js"></script>
<script async defer src="https://cusdis.ccknbc.cc/js/cusdis.es.js"></script>
<style>
  :root {
    --cusdis--color-text-default: rgba(0, 0, 0, 0.8);
    --cusdis--color-input-border: #ddd;
    --cusdis--color-btn-text: rgba(0, 0, 0, 0.8);
    --cusdis--color-btn-bg-default: #ddd;
    --cusdis--color-btn-bg-disabled: rgba(0, 0, 0, 0.5);
    --cusdis--color-btn-border: none;
    --cusdis--color-message-text: #fff;
    --cusdis--color-message-bg: #046582;
    --cusdis--color-pagination-bg-selected: #ddd;
    --cusdis--color-comment-indicator-border: #ddd;
    --cusdis--color-comment-username-text: #000;
    --cusdis--color-mod-text: rgba(0, 0, 0, 0.8);
    --cusdis--color-mod-bg: #ddd;
  }
</style>
<div
  id="cusdis_thread"
  data-host="https://cusdis.ccknbc.cc"
  data-app-id="2b20db28-cc27-4e04-8c94-bab2bce7788b"
  data-page-id="{{ PAGE_ID }}"
  data-page-url="{{ PAGE_URL }}"
  data-page-title="{{ PAGE_TITLE }}"
  data-theme="auto"
></div>
```

<script defer src="https://cusdis.ccknbc.cc/js/widget/lang/zh-cn.js"></script><script async defer src="https://cusdis.ccknbc.cc/js/cusdis.es.js"></script>
<div id="cusdis_thread"
  data-host="https://cusdis.ccknbc.cc"
  data-app-id="2b20db28-cc27-4e04-8c94-bab2bce7788b"
  data-page-id="{{ PAGE_ID }}"
  data-page-url="{{ PAGE_URL }}"
  data-page-title="{{ PAGE_TITLE }}"
></div>

但目前的 [**Cusdis**](https://cusdis.com/) 它还不足以让我弃用不能在中国大陆访问的 [**Disqus**](https://disqus.com)

# [Cusdis](https://cusdis.com/doc#/?id=cusdis)

Open-source, lightweight (~5kb gzipped), privacy-friendly alternative to Disqus.

## [Features](https://cusdis.com/doc#/?id=features)

- Universal embed code
  - You can embed Cusdis on every website.
- Light-weight sdk
  - The SDK that embed to your website is only 5kb (gzipped). Compared to Disqus (which is 24kb gzipped), it's very light-weight.
- Email notification
- One-click import data from Disqus
- Moderation dashboard
  - Since we don't require user sign in to comment, all comments are NOT displayed by default, until the moderator approve it. We provide a moderation dashboard for it.

There are two ways to use Cusdis:

## [Self host](https://cusdis.com/doc#/?id=self-host)

_Pros: You own your data_
You can install Cusdis on your own server, just follow this[installation guide](https://cusdis.com/doc#/self-host/vercel)

## [Hosted service](https://cusdis.com/doc#/?id=hosted-service)

_Pros: Easy to use_
You can also use our[hosted service](https://cusdis.com/dashboard). We host our service on[Vercel](https://vercel.com/), the data is stored on a PostgreSQL database.

## [Compared to Disqus](https://cusdis.com/doc#/?id=compared-to-disqus)

Cusdis is not designed for a FULLY alternative to Disqus, it's aim to implement a minimist embed comment tool for small sites (like your static blog).
Below are the pros and cons of Cusdis:

### [Pros](https://cusdis.com/doc#/?id=pros)

- Cusdis is open-source and self-hostable, you own your data.
- The SDK is lightweight (~5kb gzipped)
- Cusdis doesn't required commenter to sign in. We don't use cookies at all.

### [Cons](https://cusdis.com/doc#/?id=cons)

- Cusdis is on early development stage
- You have to manually moderate comments which are not display by default until you approve it, since we dont't have a spam filter.
- Disqus is a company, we aren't.

​

## 我的观点

观望中，适配起来也很简单，但目前不打算投入使用。好在由于很简约，语言也可以自定义，也做了深色模式适配，放在侧栏当做留言板给不能访问 Disqus 的游客使用，但有人肯定会问，是 Tidio 不能满足要求吗？还是其他评论看不上？
​

开头已经说了，我不想收集用户过多隐私信息，Tidio 和其他评论系统，都会记录下系统信息，IP 等不必要的敏感信息，对于静态博客来说，其实没必要。Disqus 虽然记录其实包括邮箱在内的信息全都\*\*\*打码了，这也就是导出后的 Disqus 评论仅能作为一个备份，导入其他平台因为缺少邮箱这个信息头像无法显示的原因。Disqus 可以设定一个默认头像，当匿名评论者或者已注册的无头像用户评论时可以显示默认头像，而 Cusdis 没有头像显示这一功能，但后续应该会添加选项决定是否显示，导入 Disqus 评论后就可完美兼容，而又因为只有 5kb，不如 Disqus 那样臃肿，并且这个广告是让人无法忍受的，虽然我的博客因为流量太少官方瞧不起，不给我插广告躲过了，但万一哪天政策改了，免费用户强制广告，体验将极速降低，因为他不可控。再来我可以把数据掌握在自己手里，拥有一个够用的管理面板就够了，虽然 Disqus 侧边栏管理评论很方便，并且可以通过邮件回复完成评论审核，但也因为这样，当你关闭评论审核，新评论通知就不发送了，所以我用上了 RSS 来获取评论通知。显然 Cusdis 那边 Issue 里也有人提出希望支持 RSS 评论通知，作者也很人性的将提供了同本博客 RSS 通过邮件订阅时，自动发送的确认邮件通知和取消订阅的选项。处于快速迭代发展的它目前功能并不完善，但可以看出，它将是一个很好的评论系统。
