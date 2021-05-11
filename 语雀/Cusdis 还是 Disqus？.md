---
title: Cusdis 还是 Disqus？
urlname: '25'
date: '2021-05-11 18:00:00 +0800'
translate_title: cusdis or disqus
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
**​**

开源，免费，开箱即用，或零成本自托管
​

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

​

<script defer src="https://cusdis.ccknbc.cc/js/widget/lang/zh-cn.js"></script><script async defer src="https://cusdis.ccknbc.cc/js/cusdis.es.js"></script>
<div id="cusdis_thread"
  data-host="https://cusdis.ccknbc.cc"
  data-app-id="2b20db28-cc27-4e04-8c94-bab2bce7788b"
  data-page-id="{{ PAGE_ID }}"
  data-page-url="{{ PAGE_URL }}"
  data-page-title="{{ PAGE_TITLE }}"
></div>
​

但目前的 [**Cusdis**](https://cusdis.com/) 它还不足以让我弃用不能在中国大陆访问的 [**Disqus**](https://disqus.com)
​

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

观望中，适配起来也很简单，但目前不打算投入使用
[

](https://cusdis.ccknbc.cc/js/cusdis.es.js"></script>)
