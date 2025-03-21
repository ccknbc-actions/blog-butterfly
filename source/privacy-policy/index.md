---
title: 隐私政策
top_img: false
translate_title: privacy-policy
subtitle: Privacy Policy
date: 2021-05-14 17:12:24
updated: 2024-08-28 00:00:00
description: CC的部落格 隐私政策
aside: false
---
本站非常重视用户的隐私和个人信息保护。您在使用网站时，可能会收集和使用您的相关信息。通过《隐私政策》向您说明在您访问 {% label blog.ccknbc.cc blue %} 网站时，如何收集、使用、保存、共享和转让这些信息。即使我本人并不想搜集访客过多隐私信息，为了良好的浏览体验，不得不默认启用且无法禁用一些第三方服务，您可暂时使用隐私信息拦截插件去尽可能避免这种追踪。当然您可随时点击 <a class="btn-beautify inline-block green smaller" onclick="return klaro.show();" title="隐私管理" data-pjax-state=""><i class="fa-solid fa-user-lock"></i><span>隐私管理</span></a> 定制您的隐私设置，在其他页面面，您也可以在导航栏，右下角侧边栏找到隐私管理按钮。

## 如何收集和使用您的个人信息

网络身份标识信息（浏览器 UA、IP 地址）、您的地理位置信息（具体到城市）、电子邮件地址。

在您访问时，仅会处于以下目的，使用您的个人信息：

- **[Microsoft 隐私声明 - Microsoft 隐私](https://privacy.microsoft.com/zh-cn/privacystatement)** 会收集你的访问操作过程和资源加载情况 *（甚至录制你的操作过程，但对隐私信息进行了打码保护，你仍可放心浏览）*，此外 **[Copilot - Clarity (microsoft.com)](https://clarity.microsoft.com/copilot)** 会基于GPT进行数据分析
- **[隐私权政策 – 隐私权和条款 – Google](https://policies.google.com/privacy?hl=zh-CN)** 会收集你的访问信息
- **[隐私协议 | Waline](https://waline.js.org/advanced/privacy.html)** 评论数据存储在 **[Privacy Policy - TiDB](https://www.pingcap.com/privacy-policy/)**，除基本的身份标识，地理位置信息外，通知需要知晓您的电子邮件地址
- **[Privacy Policy - Webpushr](https://www.webpushr.com/privacy-policy)** 推送更新服务也收集了您的信息方便识别不同用户，进行针对性推送
- **[follow.it | Privacy & GDPR](https://follow.it/info/privacy)** 需要知晓您的电子邮件地址，以便邮件推送更新
- **[Vercel - Privacy Policy](https://vercel.com/legal/privacy)** 需要收集您的访问信息，以便进行网站优化

在访问时，本人仅会处于以下目的，使用你的个人信息：

- 用于网站的优化与文章分类，用户优化文章
- 恶意访问识别，用于维护网站
- 恶意攻击排查，用于维护网站
- 网站点击情况监测，用于优化网站页面
- 网站加载情况监测，用于优化网站性能
- 用于网站搜索结果优化
- 浏览数据的展示

 统计工具会收集您的访问信息，用于网站的优化与文章分类、恶意访问识别（被动，存储，系统定期清理）

您应该知道在您访问的时候以下信息会被统计功能使用：
<!-- <script src="https://cdn.jsdmirror.com/gh/ccknbc-backup/cdn/js/privacy.js"></script> -->

<script>
    function getIpInfo() {
        fetch("https://api.mir6.com/api/ip_json").then(function (e) {
            return e.json()
        }).then(function (e) {
            var l = e.data.location,
                m = e.data.myip,
                p = e.data.protocol,
                i = e.data.isp;
            document.getElementById("userAgentIp").innerHTML = m, document.getElementById("userAgentLocation").innerHTML =
            l, document.getElementById("userAgentProtocol").innerHTML = p, document.getElementById("userAgentIsp").innerHTML = i;
            var d = navigator.userAgent;
            document.getElementById("userAgentDevice").innerHTML = d
        })
    }
    getIpInfo();
</script>

| 类型    | IP信息                            |
| :-----: | :--------------------------------: |
| IP 地址 | <div id="userAgentIp"></div>       |
| IP 类型 | <div id="userAgentProtocol"></div> |
| 运营商  | <div id="userAgentIsp"></div>      |
| 定位    | <div id="userAgentLocation"></div> |

|             设备信息             |
| :------------------------------: |
| <div id="userAgentDevice"></div> |

<script type="text/javascript">getIpInfo()</script>

## 如何使用 Cookies 和本地 LocalStorage 存储

本站为实现简繁切换、深色模式切换等功能，会在您的浏览器中进行本地存储，您可以随时清除浏览器中保存的所有 Cookies 以及 LocalStorage。

## 如何共享、转让您的个人信息

不会与任何公司、组织和个人共享您的个人信息
不会将您的个人信息转让给任何公司、组织和个人

## Cookies

我使用Cookies来保持我的网站和我开发的软件的可靠性，安全性和个性化。当您接受Cookies时，这有助于通过我识别您的身份、记住您的偏好、或提供个性化用户体验来帮助我改善网站。

如果您对我使用您的个人信息或 Cookies 的方式有任何疑问，请通过 blog@ccknbc.cc 与我联系。

### 什么是 Cookies ？

Cookies是一种小型文本文件，当您访问网站时，网站可能会将这些文件放在您的计算机或设备上。Cookies会帮助网站或其他网站在您下次访问时识别您的设备。网站信标、像素或其他类似文件也可以做同样的事情。我在此政策中使用术语“Cookies”来指代以这种方式收集信息的所有文件。

Cookies提供许多功能。例如，他们可以帮助我记住您喜欢深色模式还是浅色模式，分析我网站的效果。

大多数网站使用 Cookies 来收集和保留有关其访问者的个人信息。大多数 Cookies 收集一般信息，例如访问者如何到达和使用我的网站，他们使用的设备，他们的互联网协议地址（IP 地址），他们正在查看的页面及其大致位置（例如，我将能够认识到您正在从北京访问我的网站）。

### Cookies 的目的

我将 Cookies 分为以下类别:

|         用途         |                             说明                             |
| :------------------: | :----------------------------------------------------------: |
|         授权         | 您登录我的网站时，我可通过 Cookie 提供正确信息，为您打造个性化的体验。例如： Cookies 会告知您通过搜索引擎搜索的具体内容来改善文章的标题优化关键词、或者创建更符合您搜索需求的文章内容。 |
|       安全措施       | 我通过 Cookies 启用及支持安全功能，监控和防止可疑活动、欺诈性流量和违反版权协议的行为。 |
|   偏好、功能和服务   | 我使用功能性 Cookies 来让我记住您的偏好，或保存您向我提供的有关您的喜好或其他信息。 |
| 网站性能、分析和研究 | 我使用这些 Cookies 来监控网站性能。这使我能够通过快速识别和解决出现的任何问题来提供高质量的体验。 |

### 我的网站上的第三方 Cookies

我还在我的网站上使用属于上述类别的第三方 Cookies，用于以下目的：

*   帮助我监控网站上的流量；
*   识别欺诈或非人为性流量；
*   协助市场调研；
*   改善网站功能；
*   监督我的版权协议和隐私政策的遵守情况。

|                         第三方服务商                         |                             用途                             |
| :----------------------------------------------------------: | :----------------------------------------------------------: |
| [Algolia Docsearch](https://www.algolia.com/policies/privacy/) | 用于提供站内搜索服务，并辅助分析用户感兴趣内容 |
| [Instatus](https://instatus.com/policies/privacy) | 用于[离线页面](/offline/)展示网站运行状态，提示用户网站状态 |
| [Microsoft CLARITY](https://privacy.microsoft.com/zh-cn/privacystatement) | 用于国内用户统计站内访问情况，文章优化，恶意攻击排查 |
| [Google Analytics](https://policies.google.com/privacy?hl=zh-CN) | 用于国外用户统计站内访问情况，文章优化，恶意攻击排查 |
| [Cloudflare Analytics](https://www.cloudflare.com/privacypolicy/) | 用于分析网站流量，恶意攻击排查 |
| [~~Google Adsense~~](https://policies.google.com/technologies/partner-sites?hl=zh-CN) | ~~用于广告投放，广告优化，广告效果分析~~ |
| [Google Tag Manager](https://policies.google.com/privacy?hl=zh-CN) | 用于广告投放，广告优化，广告效果分析 |
| [Vercel](https://vercel.com/legal/privacy-policy) | 用于提供一些扩展服务，例如评论，友链，短文等 |
| [TiDB](https://www.pingcap.com/privacy-policy/) | 在用户同意本站收集部分信息后，作为评论系统存储的数据库 |
| [ Webpushr](https://www.webpushr.com/privacy-policy) | 在用户同意订阅推送后，作为推送服务提供商需存储用户的定制化数据 |
| [Follow It](https://follow.it/info/privacy) | 在用户同意订阅推送后，作为推送服务提供商需存储用户的定制化数据 |
| [Klaro](https://klaro.org/resources/privacy) | 用于管理隐私政策，并存储用户同意本站收集部分信息的数据 |

## 对此隐私政策的更改

我可能对此隐私政策所做的任何更改都将发布在此页面上。如果更改很重要，我会在博客首页明确指出该政策已更新。

{% btn '#',最后修订时间：2024 年 8 月 28 日 00:00,fa-solid fa-history,block right outline green smaller %}
