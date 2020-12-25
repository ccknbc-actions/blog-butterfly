---
title: 为你的Hexo博客添加邮件订阅
urlname: '11'
date: '2020-10-16 18:00:00 +0800'
tags:
  - 工具
  - 订阅
id: 11
categories:
  - 工具
  - 订阅
description: 本篇文章简单介绍了利用mailchimp为你的Hexo博客添加邮件订阅功能
keywords: '工具,订阅,邮件订阅'
cover: 'https://cdn.jsdelivr.net/gh/ccknbc-backup/photos/blog/2020-10-16~18_24_19.webp'
photos: 'https://cdn.jsdelivr.net/gh/ccknbc-backup/photos/blog/2020-10-16~18_24_19.webp'
top_img: false
translate_title: add-email-subscription-to-your-hexo-blog
copyright_author_href: 'https://www.ccknbc.cc/'
updated: 2020-11-29 11:20:00
---

你可能为你的 Hexo 博客配置了 RSS 订阅，但为什么不真正的利用它免费为你的博客添加邮件订阅呢？之前有讲过浏览器订阅，但只能本机订阅，并且数据清除了就相当于取消订阅，邮件订阅的自定义程度也蛮高的，所以个人也是极力推荐的

## 使用 mailchimp

![](https://cdn.jsdelivr.net/gh/ccknbc-backup/photos/blog/2020-10-15~17_17_21.webp#align=left&display=inline&height=1200&margin=%5Bobject%20Object%5D&originHeight=1200&originWidth=1200&status=done&style=none&width=1200)

你可能对它不是很熟悉，但或许见过这个 logo，Mailchimp 是通过电子邮件订阅 RSS 的在线工具

邮件推广是非常重要的营销方法之一。今天给各位做外贸电商的同学介绍一个免费的电子邮件发送工具：MailChimp，大家可以好好利用一下。MailChimp 的注册用户每月可以免费发送 10000 封邮件，收件人达 2000 人，这对于很多中小型电商来说，应该是足够用的。当然，如果你的会员数和月发信量超过了上面的标准，就需要付费了。

MailChimp，名字翻译过来就是邮件猩猩。最初 MailChimp 只是一家小型项目公司，为客户制作网站，有几个客户需要使用 email 发送器，所以他们就开发了一套 email 发送器给客户使用。当时 MailChimp 创造者们的想法是，这些客户都不太会操作电脑，为了避免麻烦，所以一定要做得非常简单，所以他们就将这套发送器昵称为“MailChimp”，意思是说，这套发送器，简单到连猩猩都会用。

也许有人听过这个网站，如果你有一些电子邮件想要大量寄给客户，可以自行购买或开发自己的邮件群发器，或者也可以上传到 MailChimp 的主机，由他们来帮你发送，顺便计算开信率、点击率……等等数字。MailChimp 发展了 10 年，今天已经是非常知名的发信工具，连[TED](https://baike.baidu.com/item/TED/8095)（该公司每年举行的 TED 大会非常著名）、[Magento](https://baike.baidu.com/item/Magento)、[经济学人](https://baike.baidu.com/item/%E7%BB%8F%E6%B5%8E%E5%AD%A6%E4%BA%BA)等知名组织或公司都使用它，总共会员数高达 83 万，每个月必须平均寄出 17.5 亿封 email 出去。

下面就跟着我来慢慢实现这些功能吧

## 安装插件

我们首先需要生成文章 RSS 文件，然后提供给读者订阅阅读，如果你已经配置过了，可以跳过此步骤

[按照官方进行配置即可](https://github.com/hexojs/hexo-generator-feed)

```
$ npm install hexo-generator-feed --save
```

然后在博客配置文件`_config.yml`中添加以下内容

```yaml
feed:
  enable: true
  type: atom
  path: atom.xml
  limit: 20
  hub:
  content: false
  content_limit: false
  content_limit_delim: " "
  order_by: -date
  icon: icon.webp
  autodiscovery: true
  template:
```

更多配置可参考官方说明，但这里还是要说一下，我的博客目前是限制 1 篇，采用 rss 并选择全文输出，这样当我有更新时就可以将最新文章以 html 邮件的方式全文推送给订阅用户

到此当你执行`hexo g`命令时便会根据你的配置生成 RSS 文件

## 注册 mailchimp

mailchimp 官网在大陆访问并不慢，但某些域名（咱们可能用到的）访问就很慢，即使你关闭了谷歌人机验证选项，所以还是建议科学上网环境下操作

[访问官网](https://mailchimp.com/)，自己按照要求注册就好了，不涉及注意事项，所以不再赘述，应该很简单就能注册吧，注册完毕后就进入[控制台界面了](https://us2.admin.mailchimp.com/)

![](https://cdn.jsdelivr.net/gh/ccknbc-backup/photos/blog/2020-10-15~17_39_28.webp#align=left&display=inline&height=576&margin=%5Bobject%20Object%5D&originHeight=576&originWidth=1474&status=done&style=none&width=1474)

## 配置 mailchimp

这里直接放链接跳转了，不然又要写点击步骤太繁琐

1. [点击这里](https://us2.admin.mailchimp.com/campaigns/#/create-campaign/explore/emailCampaign:custom)根据我们的需要选择，我们这里选择的是分享博客更新(rss)，[或点击直达](https://us2.admin.mailchimp.com/campaigns/#/create-campaign/explore/rss)，当然有其他需求我们也可以自行配置，比如我就配置了欢迎新订阅者邮件，祝订阅者生日快乐邮件，反正一个月一万封邮件免费额度，又不会有很多人订阅，测试就都配置了

![](https://cdn.jsdelivr.net/gh/ccknbc-backup/photos/blog/2020-10-16~17_23_41.webp#align=left&display=inline&height=744&margin=%5Bobject%20Object%5D&originHeight=744&originWidth=1228&status=done&style=none&width=1228)

2. 然后我们按照要求填写你的广告活动名称，选择受众 tag，

![](https://cdn.jsdelivr.net/gh/ccknbc-backup/photos/blog/2020-10-16~17_27_51.webp#align=left&display=inline&height=471&margin=%5Bobject%20Object%5D&originHeight=471&originWidth=741&status=done&style=none&width=741)

3. 然后就开始根据你的需要自定义配置了，如果你的英语不是很好，建议选择带有翻译功能的浏览器，这里推送时间我们先按需要选择，然后待会儿去设置里更改时区即可，模板方面我们用免费的就够了，在设计界面拖动你想要的版块到需要的位置点击即可编辑

![](https://cdn.jsdelivr.net/gh/ccknbc-backup/photos/blog/2020-10-16~17_32_30.webp#align=left&display=inline&height=908&margin=%5Bobject%20Object%5D&originHeight=908&originWidth=1920&status=done&style=none&width=1920)

![](https://cdn.jsdelivr.net/gh/ccknbc-backup/photos/blog/2020-10-16~17_35_51.webp#align=left&display=inline&height=914&margin=%5Bobject%20Object%5D&originHeight=914&originWidth=1920&status=done&style=none&width=1920)

你可以通过发送测试邮件查看邮件查看效果或者待会儿配置完毕后预览（后面提到）

![](https://cdn.jsdelivr.net/gh/ccknbc-backup/photos/blog/2020-10-16~17_37_41.webp#align=left&display=inline&height=807&margin=%5Bobject%20Object%5D&originHeight=807&originWidth=1350&status=done&style=none&width=1350)

最后确定所有内容符合要求（绿色）没有警告即可确认完成配置`Start RSS`（最后一步警告的话，请根据提示自行解决，比较简单）

然后我们可以[点击这里](https://us2.admin.mailchimp.com/campaigns/#/)选择查看邮件最后预览效果

![](https://cdn.jsdelivr.net/gh/ccknbc-backup/photos/blog/2020-10-16~17_42_39.webp#align=left&display=inline&height=815&margin=%5Bobject%20Object%5D&originHeight=815&originWidth=1848&status=done&style=none&width=1848)

4. 接下来我们配置一下用户订阅表格，我们主要用到的是第一种，当然后两种也可以配置，但是个人觉得没必要，不过你还是可以前往[订阅页面](/sub)查看一下效果

![](https://cdn.jsdelivr.net/gh/ccknbc-backup/photos/blog/2020-10-16~17_47_51.webp#align=left&display=inline&height=286&margin=%5Bobject%20Object%5D&originHeight=286&originWidth=306&status=done&style=none&width=306)

![](https://cdn.jsdelivr.net/gh/ccknbc-backup/photos/blog/2020-10-17~10_49_49.webp#align=left&display=inline&height=832&margin=%5Bobject%20Object%5D&originHeight=832&originWidth=1568&status=done&style=none&width=1568)

选择完毕后我们可以根据自己的需要编辑订阅页面然后完成所有步骤后保存即可，我们复制链接加入网站订阅页即可

![](https://cdn.jsdelivr.net/gh/ccknbc-backup/photos/blog/2020-10-16~17_56_04.webp#align=left&display=inline&height=894&margin=%5Bobject%20Object%5D&originHeight=894&originWidth=1620&status=done&style=none&width=1620)

5. 但我们别忘了还有些时区没改呢，[点击直达](https://us2.admin.mailchimp.com/account/details/)，根据自己的实际情况和喜好修改即可

![](https://cdn.jsdelivr.net/gh/ccknbc-backup/photos/blog/2020-10-16~17_59_34.webp#align=left&display=inline&height=867&margin=%5Bobject%20Object%5D&originHeight=867&originWidth=849&status=done&style=none&width=849)

到这里我们的配置基本结束了，其他细节配置请各位读者按照需要自行修改即可，这里不再赘述

## 测试邮件发送实际效果

![](https://cdn.jsdelivr.net/gh/ccknbc-backup/photos/blog/2020-10-15~17_48_43.webp#align=left&display=inline&height=907&margin=%5Bobject%20Object%5D&originHeight=907&originWidth=1920&status=done&style=none&width=1920)

关于邮件内容自定义程度很高，tag 关键词匹配等等，你可以根据个人喜好和需求去搭配使用，目前我设定好的模板预览如下

![](https://cdn.jsdelivr.net/gh/ccknbc-backup/photos/blog/2020-10-16~17_17_22.webp#align=left&display=inline&height=905&margin=%5Bobject%20Object%5D&originHeight=905&originWidth=1920&status=done&style=none&width=1920)

![](https://cdn.jsdelivr.net/gh/ccknbc-backup/photos/blog/2020-10-16~17_18_13.webp#align=left&display=inline&height=344&margin=%5Bobject%20Object%5D&originHeight=344&originWidth=558&status=done&style=none&width=558)

当然它关于邮件的变量不同的搭配可以实现最新文章，包含封面，最近文章，全文等等，其他搭配就根据你的需要决定啦

## 其他平台

你在订阅页也看到了，订阅界面一使用了其他平台，或者与 Tidio 等第三方进行了整合，下面简单介绍一下就好

[Briefcake](https://briefcake.com/)它的界面就很简洁，和上面的平台相比，如果你不是付费用户，选择我是创作者并配置好后

![](https://cdn.jsdelivr.net/gh/ccknbc-backup/photos/blog/2020-10-18~16_57_28.webp#align=left&display=inline&height=559&margin=%5Bobject%20Object%5D&originHeight=559&originWidth=1102&status=done&style=none&width=1102)

![](https://cdn.jsdelivr.net/gh/ccknbc-backup/photos/blog/2020-10-18~17_00_58.webp#align=left&display=inline&height=1415&margin=%5Bobject%20Object%5D&originHeight=1415&originWidth=1140&status=done&style=none&width=1140)

每天北京时间 8 点会给订阅者发送文章更新（如果有更新的话），并且是没有限制的，但功能比较简陋，页脚也不能自定义，但就提醒更新这个初衷来说是够用的，所以我也配置了，因为访问速度还不错啦

最后的最后，和之前介绍浏览器订阅一样，你还是得坚持内容产出，不要把它当作广告推销去使用而违背了初衷，因为我们只是博客，仅此而已，虽然现在阅读人数很少了，但哪天真的有人订阅了并且愿意等着你更新的话，也许值得曾经付出的默默码字的时光吧
