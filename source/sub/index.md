---
title: 订阅部落格文章更新
description: CC的部落格 订阅文章更新页面
aside: false
top_img: false
translate_title: subscribe-to-blog-article-updates
subtitle: Sub
date: 2020-10-14 22:17:35
updated: 2023-02-09 22:14:46
---
{% note success %} **以下方式均支持随时取消订阅，偏好可随时更改** {% endnote %}

1. RSS订阅（全文）
复制{% btn '/rss.xml',Rss,fa-solid fa-rss,outline orange %}或{% btn '/atom.xml',Atom,fa-solid fa-atom,outline blue %}地址通过邮件或阅读器阅读

2. 浏览器订阅（摘要）
点击弹窗订阅按钮（可选择不同订阅主题），并确认允许本站通知后，即可在文章有更新时通过浏览器给您发送通知。建议您在 `Windows` 上采取此种方式，且 Edge 浏览器效果较好；由于谷歌推送服务的原因基本接收不到通知，对于 `Mac` 及 `iPhone` 用户似乎现在也支持 web push 功能了，但本人买不起证书（开发者账号）。即使您清除了本站浏览器数据，当您重新浏览本站时，可能也会为您自动重新订阅，除非您主动取消订阅

3. 邮件订阅（全文）
通过{% btn 'https://follow.it/ccknbc?pub',Follow.it,fa-solid fa-paper-plane,outline green %}订阅，注册用户支持自定义关键词、标签及多渠道（例如Telegram, Twitter，将来会支持微信）通知；未注册用户请使用下表订阅（可能需要人机验证）
    <div><form data-v-2bdb5506="" action="https://api.follow.it/subscription-form/YXJvK1pRMXFIbG1QZXEvUHRyUGR1L0xMYTN5V0FHSnhFY3pVeGRpUjV1bUNBbzRLd1hRbDcwTVk0bGlMQlAvOEtXaGU5RWxrTEtTOXBSSlBXWDNyeDZ5Uk1zU2JoRlpmNDh5em9FeG41SCt0WmtQWi9oTm5VZURNbTVOMENSc3h8a1hHYUtHTHV0QmhQZHAvZ3hkOW9zWnl4aE43SjBONDlUdG45YXRJM3JxQT0=/8" method="post"><div data-v-2bdb5506="" class="form-preview"><div data-v-2bdb5506="" class="preview-input-field"><input data-v-2bdb5506="" type="email" name="email" required="required" placeholder="输入您的电子邮件地址" spellcheck="false" mstplaceholder="39225030"></div> <div data-v-2bdb5506="" class="preview-submit-button"><button data-v-2bdb5506="" type="submit" >订阅</button></div></div></form></div>

4. 最后我知道没人订阅，但该有的功能要有，提醒自己记得更新


<style>
    .preview-input-field form {
        display: block;
        position: relative;
        text-align: left;
        padding: 10px 0 10px 3%
    }

    .preview-input-field h2 {
        font-weight: bold;
        padding: 0;
        margin: 15px 0;
        font-size: 1.4em;
    }

    .preview-input-field input {
        border: 1px solid #ABB0B2;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        border-radius: 3px;
        color: var(--font-color);
        background: var(--card-bg);
    }

    .preview-input-field input:focus {
        border-color: #333;
    }

    .preview-submit-button button {
        clear: both;
        background-color: var(--btn-bg);
        border: 0 none;
        border-radius: 4px;
        transition: all 0.23s ease-in-out 0s;
        color: var(--font-color);
        cursor: pointer;
        display: inline-block;
        font-size: 15px;
        font-weight: normal;
        height: 32px;
        line-height: 32px;
        margin: 0 5px 10px 0;
        padding: 0 22px;
        text-align: center;
        text-decoration: none;
        vertical-align: top;
        white-space: nowrap;
        width: auto;
    }

    .preview-submit-button button:hover {
        background-color: #777;
    }

    .preview-input-field{
        clear: left;
        position: relative;
        width: 96%;
        padding-bottom: 3%;
        min-height: 50px;
    }

    .preview-input-field input {
        display: block;
        width: 100%;
        padding: 8px 0;
        text-indent: 2%;
        color: var(--font-color);
        background: var(--card-bg);
    }
</style>