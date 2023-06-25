---
title: 你以为 AddThis 只是个分享工具吗？
urlname: "26"
author: CC康纳百川
date: 2021-05-15T21:00:00.000Z
updated: 2023-06-25T20:44:00.000Z
translate_title: the-real-addthis
subtitle: The Real Addthis
tags: 工具
keywords:
  - 工具
  - AddThis
categories: 工具
description: 本文介绍了 AddThis 的使用
cover: "https://pic1.afdiancdn.com/user/8a7f563c2e3811ecab5852540025c377/common/bbf0970587cfd0f4a654efda9c375844_w1920_h1080_s216.jpg"
id: 26
---

本文首发在[**语雀**](https://www.yuque.com/ccknbc/blog/26/)，
自动同步更新至[**CC 的部落格**](https://blog.ccknbc.cc/the-real-addthis/)

## 本文作废

## Notice of Termination of AddThis Services.

### **What’s Changing?**

As part of a periodic product portfolio review, Oracle has made the business decision to terminate all AddThis services effective as of May 31, 2023.
![](https://cdn.nlark.com/yuque/0/2023/svg/8391407/1687697102686-a8f7d67f-e0d7-4a91-8f75-7328ced3de35.svg#clientId=ue2da133d-1f48-4&from=paste&id=u9b6a40f1&originHeight=150&originWidth=200&originalType=url&ratio=1.25&rotation=0&showTitle=false&status=done&style=none&taskId=u56108136-5207-40b8-a18a-a242b3b1260&title=)

### **Key Dates**

Existing AddThis users can expect that after May 31, 2023:

- the user must immediately cease its use of AddThis services, and promptly remove all AddThis related code and technology from its websites;
- AddThis buttons may disappear from the user’s websites;
- the AddThis dashboard associated with the user’s registration for AddThis, and all support for AddThis services, will no longer be available;
- all features of AddThis configured to interoperate with user’s websites, any other Oracle services, or any third-party tools and plug-ins will no longer function.

Oracle thanks you for your attention and understanding in this matter, and for the many years of allowing Oracle to provide this service to you.

### **How Do I Uninstall the AddThis Button?**

If you’ve copied and pasted the code into your website, go back into the code and look for <!-- ADDTHIS BUTTON BEGIN --> and <!-- ADDTHIS BUTTON END -->, then delete these lines and any code between them. If you’ve used another method to install AddThis on your page, please contact us and we’ll be happy to help you.

总结：终止服务，主题已移除

## Butterfly 如何使用

打开 [**AddThis**](https://www.addthis.com/) 官网，标语是 Turn your visitors into engaged customers. 听起来是个营销工具，但[主题集成](https://butterfly.js.org/posts/ceeb73f/#分享)的时候选择了它，并且没有做特别说明，只是让我们找到 `pub-id` ，并没有说如何配置

实际上要想和 AddToAny 或者 sharejs 一样使用文章内分享，我们得在控制台添加 Tools，就像下图所示
![image.png](https://cdn.nlark.com/yuque/0/2021/png/8391407/1621142780727-b0ba0833-f60e-4a95-bb23-2875dd54c3c2.png#averageHue=%23f4f3f3&height=719&id=ue75333d4&originHeight=719&originWidth=1036&originalType=binary&ratio=1&rotation=0&showTitle=false&size=69605&status=done&style=none&title=&width=1036)
然后选择行内工具
![image.png](https://cdn.nlark.com/yuque/0/2021/png/8391407/1621142848618-8ff7ab42-7118-4161-9da3-77319203967a.png#averageHue=%23c9c7c7&height=808&id=udf8793a9&originHeight=808&originWidth=1269&originalType=binary&ratio=1&rotation=0&showTitle=false&size=54618&status=done&style=none&title=&width=1269)
后面样式部分就根据自己喜好和需求按钮多少，在哪些页面显示等来自行配置啦。比如我还同时选择了，自动展开分享按钮。而且他能很好的自适应，并且后台修改之后我们博客无需任何操作即可更新。
![image.png](https://cdn.nlark.com/yuque/0/2021/png/8391407/1621143046263-9f6aafa6-32f0-4ff6-85e4-be1b7e375617.png#averageHue=%23ff6b57&height=56&id=uc42770eb&originHeight=56&originWidth=1020&originalType=binary&ratio=1&rotation=0&showTitle=false&size=9002&status=done&style=none&title=&width=1020)
![image.png](https://cdn.nlark.com/yuque/0/2021/png/8391407/1621143097471-85b42c6c-3561-4348-a164-f312328a598c.png#averageHue=%23f7f2f1&height=60&id=u37bce032&originHeight=60&originWidth=457&originalType=binary&ratio=1&rotation=0&showTitle=false&size=5342&status=done&style=none&title=&width=457)

## 其他工具

但还有其他工具也很好用，比如你点进文章来之前，应该有弹窗提示你要阅读隐私政策，实际上这是链接推广工具的活用。再比如放在顶栏作为临时公告，并且都有很好的自适应人性化选择，你下滑就会收起来，上滑再弹出。同样如果你是文章页或者订阅页面，因为我配置了仅在这些页面显示，会弹出一个订阅文章更新弹窗，这里收集邮件工具派上了用场，并且与 Mailchimp 配合完成了这项工作，至于配置邮件订阅，可以查看之前的文章 [**为你的 Hexo 博客添加邮件订阅**](/posts/add-email-subscription-to-your-hexo-blog/) 。
![image.png](https://cdn.nlark.com/yuque/0/2021/png/8391407/1621144135285-b67842b1-b8c9-47a5-bf51-5bbe3e4953d5.png#averageHue=%23373737&height=780&id=u06f3186e&originHeight=780&originWidth=422&originalType=binary&ratio=1&rotation=0&showTitle=false&size=36857&status=done&style=none&title=&width=422)
不过为了邮件订阅，我同样整合到了 [Tidio](https://www.tidio.com/)，详情见[**订阅页面**](/sub)。当然如果你也在乎其他平台的关注数量，可以使用关注按钮来实现推广效果，文章推荐和打赏这里还是建议使用主题自带的就好。此外它还配有统计分析工具（这里强烈推荐您阅读 [**隐私政策**](/privacy-policy)），以帮助你实现更好的内容转化。
![image.png](https://cdn.nlark.com/yuque/0/2021/png/8391407/1621143646876-ecadedf5-be33-4048-a8b9-a1591f3e8fe2.png#averageHue=%23fcfbfb&height=3898&id=ufa0dc4e3&originHeight=3898&originWidth=1584&originalType=binary&ratio=1&rotation=0&showTitle=false&size=279916&status=done&style=none&title=&width=1584)
所以结合起来正常情况下我开起了五个工具
![image.png](https://cdn.nlark.com/yuque/0/2021/png/8391407/1621144000308-6da07ca0-5aad-421f-a711-ac1d00aeefd7.png#averageHue=%23fafafa&height=1004&id=uf5bf2d57&originHeight=1004&originWidth=1579&originalType=binary&ratio=1&rotation=0&showTitle=false&size=83395&status=done&style=none&title=&width=1579)
当需要发布临时公告时，我会根据重要程度选择左下角或者顶栏
![image.png](https://cdn.nlark.com/yuque/0/2021/png/8391407/1621144072301-650ffe7c-8331-4bc4-ab8e-a8870f62dce1.png#averageHue=%23fbfbfb&height=405&id=uca0d9fc5&originHeight=405&originWidth=1583&originalType=binary&ratio=1&rotation=0&showTitle=false&size=32828&status=done&style=none&title=&width=1583)
就免费来说，他做的很不错了，相比于专门做弹窗的 [poptin](https://www.poptin.com/blog/zh/create-mailchimp-pop-ups-grow-email-list/) 似乎更简单的与 mailchimp 集成，但毕竟术业有专攻，比弹窗肯定不如人家，不过白嫖来说已经够了，我也不用使用 snackbar 刷新 jsd 缓存来实现临时公告了。
而我现在重新使用了 webpushr 来实现浏览器通知，不管是否订阅，我均可以发送公告，并可保留最近 3 条公告，然后这就涉及到了空间利用率和用户体验的问题，所以我就得考虑关闭一些小部件，比如邮件订阅弹窗（据说会影响搜索引擎权重），还有分享按钮。电脑上无所谓，手机上显得有点挤（不过可以选择根据设备或者宽度自适应是否显示），即使我放在右下角，分享按钮放在左下角。所以我在公告栏加入了邮件订阅表格，并添加链接导向订阅页，但毕竟也没人订阅，还是链接导向[订阅页面](/sub)吧。
