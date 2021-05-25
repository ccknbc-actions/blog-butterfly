---
title: CC的部落格 外挂标签笔记
urlname: '22'
date: '2021-03-05 12:00:00 +0800'
tags:
  - 博客
  - HEXO
categories: 博客
description: CC的部落格 外挂标签笔记
translate_title: introduction-of-plugin-tags-based-on-butterfly
id: 22
cover: 'https://cdn.jsdelivr.net/gh/ccknbc-backup/photos/blog/2021-03-05~14-36-33.png'
hide: false
updated: 2021-05-16 12:00:00
---

{% note green success modern %}CC 的部落格 外挂标签笔记 ，其中大部分完整转载至糖果屋店长原文，根据本站实际情况进行了增减，仅保留源码和参数说明部分，若要查看具体效果，可前往{% link 糖果屋教程贴, https://akilar.top/posts/615e2dec/, https://cdn.jsdelivr.net/gh/Akilarlxh/akilarlxh.github.io/img/siteicon/favicon.ico %}{% endnote %}

## 按钮 Button

### 行内

```markdown
{% btn '#',# %}
{% btn '#',#,outline%}
```

### 固定

```markdown
{% btn '#',#,far fa-hand-point-right,block larger %}
{% btn '#',#,far fa-hand-point-right,block center larger %}
{% btn '#',#,far fa-hand-point-right,block right blue larger %}
```

### 居中多个

```markdown
<div class="btn-center">
{% btn '#',#,far fa-hand-point-right,larger %}
{% btn '#',#,far fa-hand-point-right,blue larger %}
{% btn '#',#,far fa-hand-point-right,pink larger %}
{% btn '#',#,far fa-hand-point-right,red larger %}
{% btn '#',#,far fa-hand-point-right,purple larger %}
{% btn '#',#,far fa-hand-point-right,orange larger %}
{% btn '#',#,far fa-hand-point-right,green larger %}
</div>
```

```markdown
<div class="btn-center">
{% btn '#',#,far fa-hand-point-right,outline larger %}
{% btn '#',#,far fa-hand-point-right,outline blue larger %}
{% btn '#',#,far fa-hand-point-right,outline pink larger %}
{% btn '#',#,far fa-hand-point-right,outline red larger %}
{% btn '#',#,far fa-hand-point-right,outline purple larger %}
{% btn '#',#,far fa-hand-point-right,outline orange larger %}
{% btn '#',#,far fa-hand-point-right,outline green larger %}
</div>
```

## 按钮 btns

```markdown
{% btns 样式参数 %}
{% cell 标题, 链接, 图片或者图标 %}
{% cell 标题, 链接, 图片或者图标 %}
{% endbtns %}
```

1. 圆角样式：rounded, circle
1. 增加文字样式：可以在容器内增加 `<b>标题</b>`和`<p>描述文字</p>`
1. 布局方式：
   默认为自动宽度，适合视野内只有一两个的情况。
   | 参数 | 含义 |
   | --- | --- |
   | wide | 宽一点的按钮 |
   | fill | 填充布局，自动铺满至少一行，多了会换行 |
   | center | 居中，按钮之间是固定间距 |
   | around | 居中分散 |
   | grid2 | 等宽最多 2 列，屏幕变窄会适当减少列数 |
   | grid3 | 等宽最多 3 列，屏幕变窄会适当减少列数 |
   | grid4 | 等宽最多 4 列，屏幕变窄会适当减少列数 |
   | grid5 | 等宽最多 5 列，屏幕变窄会适当减少列数 |

## 行内文本样式 text

```markdown
{% u 文本内容 %}
{% emp 文本内容 %}
{% wavy 文本内容 %}
{% del 文本内容 %}
{% kbd 文本内容 %}
{% psw 文本内容 %}
{% label 文本内容 标签颜色 %}
```

## 行内文本 span

```markdown
{% span 样式参数(参数以空格划分), 文本内容 %}
```

1. 字体: logo, code
1. 颜色: {% span red, red %},{% span yellow, yellow %},{% span green, green %},{% span cyan, cyan %},{% span blue, blue %},{% span gray, gray %}
1. 大小: small, h4, h3, h2, h1, large, huge, ultra
1. 对齐方向: left, center, right

```markdown
- 彩色文字
  在一段话中方便插入各种颜色的标签，包括：{% span red, 红色 %}、{% span yellow, 黄色 %}、{% span green, 绿色 %}、{% span cyan, 青色 %}、{% span blue, 蓝色 %}、{% span gray, 灰色 %}。
- 超大号文字
  文档「开始」页面中的标题部分就是超大号文字。
  {% span center logo large, 康纳百川 %}
  {% span center small, 康纳百川 %}
```

## 段落文本 p

```markdown
{% p 样式参数(参数以空格划分), 文本内容 %}
```

1. 字体: logo, code
1. 颜色: {% span red, red %},{% span yellow, yellow %},{% span green, green %},{% span cyan, cyan %},{% span blue, blue %},{% span gray, gray %}
1. 大小: small, h4, h3, h2, h1, large, huge, ultra
1. 对齐方向: left, center, right

```markdown
- 彩色文字
  在一段话中方便插入各种颜色的标签，包括：{% p red, 红色 %}、{% p yellow, 黄色 %}、{% p green, 绿色 %}、{% p cyan, 青色 %}、{% p blue, 蓝色 %}、{% p gray, 灰色 %}。
- 超大号文字
  文档「开始」页面中的标题部分就是超大号文字。
  {% p center logo large, CC's Blog %}
  {% p center small, CC's Blog %}
```

## 引用 note

修改主题配置文件

```yml
note:
  # Note tag style values:
  #  - simple    bs-callout old alert style. Default.
  #  - modern    bs-callout new (v2-v3) alert style.
  #  - flat      flat callout style with background, like on Mozilla or StackOverflow.
  #  - disabled  disable all CSS styles import of note tag.
  style: simple
  icons: false
  border_radius: 3
  # Offset lighter of background in % for modern and flat styles (modern: -12 | 12; flat: -18 | 6).
  # Offset also applied to label tag variables. This option can work with disabled note tag.
  light_bg_offset: 0
```

`Note`标签外挂有两种用法。`icons`和`light_bg_offset`只对方法一生效。

方法一

```markdown
{% note [class] [no-icon] [style] %}
Any content (support inline tags too.io).
{% endnote %}
```

方法二

```markdown
{% note [color] [icon] [style] %}
Any content (support inline tags too.io).
{% endnote %}
```

方法一

| 参数                                                        | 用法                                 |
| ----------------------------------------------------------- | ------------------------------------ |
| class                                                       | 【可选】标识，不同的标识有不同的配色 |
| （ default / primary / success / info / warning / danger ） |
| no-icon                                                     | 【可选】不显示 icon                  |
| style                                                       | 【可选】可以覆盖配置中的 style       |
| （simple/modern/flat/disabled）                             |

方法二

| 参数                                                        | 用法                                                                     |
| ----------------------------------------------------------- | ------------------------------------------------------------------------ |
| class                                                       | 【可选】标识，不同的标识有不同的配色                                     |
| （ default / primary / success / info / warning / danger ） |
| no-icon                                                     | 【可选】可配置自定义 icon (只支持 fontawesome 图标, 也可以配置 no-icon ) |
| style                                                       | 【可选】可以覆盖配置中的 style                                           |
| （simple/modern/flat/disabled）                             |

方法一

1.  `simple`样式

```markdown
{% note simple %}默认 提示块标签{% endnote %}

{% note default simple %}default 提示块标签{% endnote %}

{% note primary simple %}primary 提示块标签{% endnote %}

{% note success simple %}success 提示块标签{% endnote %}

{% note info simple %}info 提示块标签{% endnote %}

{% note warning simple %}warning 提示块标签{% endnote %}

{% note danger simple %}danger 提示块标签{% endnote %}
```

2.  `modern`样式

```markdown
{% note modern %}默认 提示块标签{% endnote %}

{% note default modern %}default 提示块标签{% endnote %}

{% note primary modern %}primary 提示块标签{% endnote %}

{% note success modern %}success 提示块标签{% endnote %}

{% note info modern %}info 提示块标签{% endnote %}

{% note warning modern %}warning 提示块标签{% endnote %}

{% note danger modern %}danger 提示块标签{% endnote %}
```

3.  `flat`样式

```markdown
{% note flat %}默认 提示块标签{% endnote %}

{% note default flat %}default 提示块标签{% endnote %}

{% note primary flat %}primary 提示块标签{% endnote %}

{% note success flat %}success 提示块标签{% endnote %}

{% note info flat %}info 提示块标签{% endnote %}

{% note warning flat %}warning 提示块标签{% endnote %}

{% note danger flat %}danger 提示块标签{% endnote %}
```

4.  `disabled`样式

```markdown
{% note disabled %}默认 提示块标签{% endnote %}

{% note default disabled %}default 提示块标签{% endnote %}

{% note primary disabled %}primary 提示块标签{% endnote %}

{% note success disabled %}success 提示块标签{% endnote %}

{% note info disabled %}info 提示块标签{% endnote %}

{% note warning disabled %}warning 提示块标签{% endnote %}

{% note danger disabled %}danger 提示块标签{% endnote %}
```

5.  `no-icon`样式

```markdown
{% note no-icon %}默认 提示块标签{% endnote %}

{% note default no-icon %}default 提示块标签{% endnote %}

{% note primary no-icon %}primary 提示块标签{% endnote %}

{% note success no-icon %}success 提示块标签{% endnote %}

{% note info no-icon %}info 提示块标签{% endnote %}

{% note warning no-icon %}warning 提示块标签{% endnote %}

{% note danger no-icon %}danger 提示块标签{% endnote %}
```

方法二

1.  `simple`样式

```markdown
{% note 'fab fa-cc-visa' simple %}你是刷 Visa 还是 UnionPay{% endnote %}

{% note blue 'fas fa-bullhorn' simple %}2021 年快到了....{% endnote %}

{% note pink 'fas fa-car-crash' simple %}小心开车 安全至上{% endnote %}

{% note red 'fas fa-fan' simple%}这是三片呢？还是四片？{% endnote %}

{% note orange 'fas fa-battery-half' simple %}你是刷 Visa 还是 UnionPay{% endnote %}

{% note purple 'far fa-hand-scissors' simple %}剪刀石头布{% endnote %}

{% note green 'fab fa-internet-explorer' simple %}前端最讨厌的浏览器{% endnote %}
```

2.  `modern`样式

```markdown
{% note 'fab fa-cc-visa' modern %}你是刷 Visa 还是 UnionPay{% endnote %}

{% note blue 'fas fa-bullhorn' modern %}2021 年快到了....{% endnote %}

{% note pink 'fas fa-car-crash' modern %}小心开车 安全至上{% endnote %}

{% note red 'fas fa-fan' modern%}这是三片呢？还是四片？{% endnote %}

{% note orange 'fas fa-battery-half' modern %}你是刷 Visa 还是 UnionPay{% endnote %}

{% note purple 'far fa-hand-scissors' modern %}剪刀石头布{% endnote %}

{% note green 'fab fa-internet-explorer' modern %}前端最讨厌的浏览器{% endnote %}
```

3.  `flat`样式

```markdown
{% note 'fab fa-cc-visa' flat %}你是刷 Visa 还是 UnionPay{% endnote %}

{% note blue 'fas fa-bullhorn' flat %}2021 年快到了....{% endnote %}

{% note pink 'fas fa-car-crash' flat %}小心开车 安全至上{% endnote %}

{% note red 'fas fa-fan' flat%}这是三片呢？还是四片？{% endnote %}

{% note orange 'fas fa-battery-half' flat %}你是刷 Visa 还是 UnionPay{% endnote %}

{% note purple 'far fa-hand-scissors' flat %}剪刀石头布{% endnote %}

{% note green 'fab fa-internet-explorer' flat %}前端最讨厌的浏览器{% endnote %}
```

4.  `disabled`样式

```markdown
{% note 'fab fa-cc-visa' disabled %}你是刷 Visa 还是 UnionPay{% endnote %}

{% note blue 'fas fa-bullhorn' disabled %}2021 年快到了....{% endnote %}

{% note pink 'fas fa-car-crash' disabled %}小心开车 安全至上{% endnote %}

{% note red 'fas fa-fan' disabled %}这是三片呢？还是四片？{% endnote %}

{% note orange 'fas fa-battery-half' disabled %}你是刷 Visa 还是 UnionPay{% endnote %}

{% note purple 'far fa-hand-scissors' disabled %}剪刀石头布{% endnote %}

{% note green 'fab fa-internet-explorer' disabled %}前端最讨厌的浏览器{% endnote %}
```

5.  `no-icon`样式

```markdown
{% note no-icon %}你是刷 Visa 还是 UnionPay{% endnote %}

{% note blue no-icon %}2021 年快到了....{% endnote %}

{% note pink no-icon %}小心开车 安全至上{% endnote %}

{% note red no-icon %}这是三片呢？还是四片？{% endnote %}

{% note orange no-icon %}你是刷 Visa 还是 UnionPay{% endnote %}

{% note purple no-icon %}剪刀石头布{% endnote %}

{% note green no-icon %}前端最讨厌的浏览器{% endnote %}
```

## 上标标签 tip

{% tip cogs %}
主要样式参考自[小康的 butterfly 渐变背景标签](https://www.antmoe.com/posts/3b43914f/),自己写了个`tip.js`来渲染标签，精简了一下代码。
{% endtip %}

```markdown
{% tip [参数，可选] %}文本内容{% endtip %}
```

1. 样式: success,error,warning,bolt,ban,home,sync,cogs,key,bell
1. 自定义图标: 支持 fontawesome。

```markdown
{% tip %}默认情况{% endtip %}
{% tip success %}success{% endtip %}
{% tip error %}error{% endtip %}
{% tip warning %}warning{% endtip %}
{% tip bolt %}bolt{% endtip %}
{% tip ban %}ban{% endtip %}
{% tip home %}home{% endtip %}
{% tip sync %}sync{% endtip %}
{% tip cogs %}cogs{% endtip %}
{% tip key %}key{% endtip %}
{% tip bell %}bell{% endtip %}
{% tip fa-atom %}自定义 font awesome 图标{% endtip %}
```

## 动态标签 anima

```markdown
{% tip [参数，可选] %}文本内容{% endtip %}
```

更多详情请参看[font-awesome-animation 文档](http://l-lin.github.io/font-awesome-animation/)

1. 将所需的 CSS 类添加到图标（或 DOM 中的任何元素）。
1. 对于父级悬停样式，需要给目标元素添加指定 CSS 类，同时还要给目标元素的父级元素添加 CSS 类`faa-parent animated-hover`。（详情见示例及示例源码）
   You can regulate the speed of the animation by adding the CSS class or . faa-fastfaa-slow
1. 可以通过给目标元素添加 CSS 类`faa-fast`或`faa-slow`来控制动画快慢。

|                                   On DOM load<br>当页面加载时<br>显示动画                                   |                                          On hover<br>当鼠标悬停时<br>显示动画                                           |                                  On parent hover<br>当鼠标悬停<br>在父级元素时<br>显示动画                                  |
| :---------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------: |
|             <span><i class="fas fa-wrench faa-wrench animated"></i> faa-wrench animated</span>              |             <span><i class="fas fa-wrench faa-wrench animated-hover"></i> faa-wrench animated-hover</span>              |             <span class="faa-parent animated-hover"><i class="fas fa-wrench faa-wrench"></i> faa-wrench</span>              |
|                <span><i class="fas fa-bell faa-ring animated"></i> faa-ring animated</span>                 |                <span><i class="fas fa-bell faa-ring animated-hover"></i> faa-ring animated-hover</span>                 |                <span class="faa-parent animated-hover"><i class="fas fa-bell faa-ring"></i> faa-ring</span>                 |
|        <span><i class="fas fa-envelope faa-horizontal animated"></i> faa-horizontal animated</span>         |        <span><i class="fas fa-envelope faa-horizontal animated-hover"></i> faa-horizontal animated-hover</span>         |        <span class="faa-parent animated-hover"><i class="fas fa-envelope faa-horizontal"></i> faa-horizontal</span>         |
|          <span><i class="fas fa-thumbs-up faa-vertical animated"></i> faa-vertical animated</span>          |          <span><i class="fas fa-thumbs-up faa-vertical animated-hover"></i> faa-vertical animated-hover</span>          |          <span class="faa-parent animated-hover"><i class="fas fa-thumbs-up faa-vertical"></i> faa-vertical</span>          |
|       <span><i class="fas fa-exclamation-triangle faa-flash animated"></i> faa-flash animated</span>        |       <span><i class="fas fa-exclamation-triangle faa-flash animated-hover"></i> faa-flash animated-hover</span>        |       <span class="faa-parent animated-hover"><i class="fas fa-exclamation-triangle faa-flash"></i> faa-flash</span>        |
|            <span><i class="fas fa-thumbs-up faa-bounce animated"></i> faa-bounce animated</span>            |            <span><i class="fas fa-thumbs-up faa-bounce animated-hover"></i> faa-bounce animated-hover</span>            |            <span class="faa-parent animated-hover"><i class="fas fa-thumbs-up faa-bounce"></i> faa-bounce</span>            |
|               <span><i class="fas fa-spinner faa-spin animated"></i> faa-spin animated</span>               |               <span><i class="fas fa-spinner faa-spin animated-hover"></i> faa-spin animated-hover</span>               |               <span class="faa-parent animated-hover"><i class="fas fa-spinner faa-spin"></i> faa-spin</span>               |
|                <span><i class="fas fa-plane faa-tada animated"></i> faa-tada animated</span>                |                <span><i class="fas fa-plane faa-tada animated-hover"></i> faa-tada animated-hover</span>                |                <span class="faa-parent animated-hover"><i class="fas fa-plane faa-tada"></i> faa-tada</span>                |
|               <span><i class="fas fa-heart faa-pulse animated"></i> faa-pulse animated</span>               |               <span><i class="fas fa-heart faa-pulse animated-hover"></i> faa-pulse animated-hover</span>               |               <span class="faa-parent animated-hover"><i class="fas fa-heart faa-pulse"></i> faa-pulse</span>               |
|             <span><i class="fas fa-envelope faa-shake animated"></i> faa-shake animated</span>              |             <span><i class="fas fa-envelope faa-shake animated-hover"></i> faa-shake animated-hover</span>              |             <span class="faa-parent animated-hover"><i class="fas fa-envelope faa-shake"></i> faa-shake</span>              |
|               <span><i class="fas fa-trophy faa-tada animated"></i> faa-tada animated</span>                |               <span><i class="fas fa-trophy faa-tada animated-hover"></i> faa-tada animated-hover</span>                |               <span class="faa-parent animated-hover"><i class="fas fa-trophy faa-tada"></i> faa-tada</span>                |
|         <span><i class="fas fa-space-shuttle faa-passing animated"></i> faa-passing animated</span>         |         <span><i class="fas fa-space-shuttle faa-passing animated-hover"></i> faa-passing animated-hover</span>         |         <span class="faa-parent animated-hover"><i class="fas fa-space-shuttle faa-passing"></i> faa-passing</span>         |
| <span><i class="fas fa-space-shuttle faa-passing-reverse animated"></i> faa-passing-reverse animated</span> | <span><i class="fas fa-space-shuttle faa-passing-reverse animated-hover"></i> faa-passing-reverse animated-hover</span> | <span class="faa-parent animated-hover"><i class="fas fa-space-shuttle faa-passing-reverse"></i> faa-passing-reverse</span> |
|              <span><i class="fas fa-circle faa-burst animated"></i> faa-burst animated</span>               |              <span><i class="fas fa-circle faa-burst animated-hover"></i> faa-burst animated-hover</span>               |              <span class="faa-parent animated-hover"><i class="fas fa-circle faa-burst"></i> faa-burst</span>               |
|             <span><i class="fas fa-star faa-falling animated"></i> faa-falling animated</span>              |             <span><i class="fas fa-star faa-falling animated-hover"></i> faa-falling animated-hover</span>              |             <span class="faa-parent animated-hover"><i class="fas fa-star faa-falling"></i> faa-falling</span>              |
|             <span><i class="fas fa-rocket faa-rising animated"></i> faa-rising animated</span>              |             <span><i class="fas fa-rocket faa-rising animated-hover"></i> faa-rising animated-hover</span>              |             <span class="faa-parent animated-hover"><i class="fas fa-rocket faa-rising"></i> faa-rising</span>              |

1.  On DOM load（当页面加载时显示动画）

```markdown
{% tip warning faa-horizontal animated %}warning{% endtip %}
{% tip ban faa-flash animated %}ban{% endtip %}
```

2.  调整动画速度

```markdown
{% tip warning faa-horizontal animated faa-fast %}warning{% endtip %}
{% tip ban faa-flash animated faa-slow %}ban{% endtip %}
```

3.  On hover（当鼠标悬停时显示动画）

```markdown
{% tip warning faa-horizontal animated-hover %}warning{% endtip %}
{% tip ban faa-flash animated-hover %}ban{% endtip %}
```

4.  On parent hover（当鼠标悬停在父级元素时显示动画）

```markdown
{% tip warning faa-parent animated-hover %}<p class="faa-horizontal">warning</p>{% endtip %}
{% tip ban faa-parent animated-hover %}<p class="faa-flash">ban</p>{% endtip %}
```

## 单选列表 radio

```markdown
{% radio 样式参数（可选）, 文本（支持简单md） %}
```

1. 颜色: {% span red, red %},{% span yellow, yellow %},{% span green, green %},{% span cyan, cyan %},{% span blue, blue %},{% span gray, gray %}
1. 选中状态: checked

```markdown
{% radio 纯文本测试 %}
{% radio checked, 支持简单的 [markdown](https://guides.github.com/features/mastering-markdown/) 语法 %}
{% radio red, 支持自定义颜色 %}
{% radio green, 绿色 %}
{% radio yellow, 黄色 %}
{% radio cyan, 青色 %}
{% radio blue, 蓝色 %}
```

## 复选列表 checkbox

```markdown
{% checkbox 样式参数（可选）, 文本（支持简单md） %}
```

1. 样式: plus, minus, times
1. 颜色: {% span red, red %},{% span yellow, yellow %},{% span green, green %},{% span cyan, cyan %},{% span blue, blue %},{% span gray, gray %}
1. 选中状态: checked

```markdown
{% checkbox 纯文本测试 %}
{% checkbox checked, 支持简单的 [markdown](https://guides.github.com/features/mastering-markdown/) 语法 %}
{% checkbox red, 支持自定义颜色 %}
{% checkbox green checked, 绿色 + 默认选中 %}
{% checkbox yellow checked, 黄色 + 默认选中 %}
{% checkbox cyan checked, 青色 + 默认选中 %}
{% checkbox blue checked, 蓝色 + 默认选中 %}
{% checkbox plus green checked, 增加 %}
{% checkbox minus yellow checked, 减少 %}
{% checkbox times red checked, 叉 %}
```

## 时间轴 timeline

```markdown
{% timeline 时间线标题（可选） %}
{% timenode 时间节点（标题） %}
正文内容
{% endtimenode %}
{% timenode 时间节点（标题） %}
正文内容
{% endtimenode %}
{% endtimeline %}
```

## 链接卡片 link

```markdown
{% link 标题, 链接, 图片链接（可选） %}
```

## github 卡片 ghcard

{% note blue 'fas fa-bullhorn' modern %}
ghcard 使用了`github-readme-stats`的 API，支持直接使用 markdown 语法来写。
{% endnote %}

```markdown
{% ghcard 用户名, 其它参数（可选） %}
{% ghcard 用户名/仓库, 其它参数（可选） %}
```

更多参数可以参考：
{% ghcard anuraghazra/github-readme-stats %}
使用`,`分割各个参数。写法为：`参数名=参数值`
以下只写几个常用参数值。

| 参数名        | 取值                              | 释义                             |
| ------------- | --------------------------------- | -------------------------------- |
| hide          | stars,commits,prs,issues,contribs | 隐藏指定统计                     |
| count_private | true                              | 将私人项目贡献添加到总提交计数中 |
| show_icons    | true                              | 显示图标                         |
| theme         | 请查阅 Available Themes           | 主题                             |

1.  用户信息卡片

```markdown
| {% ghcard ccknbc %}                | {% ghcard ccknbc, theme=vue %}             |
| ---------------------------------- | ------------------------------------------ |
| {% ghcard ccknbc, theme=buefy %}   | {% ghcard ccknbc, theme=solarized-light %} |
| {% ghcard ccknbc, theme=onedark %} | {% ghcard ccknbc, theme=solarized-dark %}  |
| {% ghcard ccknbc, theme=algolia %} | {% ghcard ccknbc, theme=calm %}            |
```

2.  仓库信息卡片

```markdown
| {% ghcard ccknbc-actions/blogroll %}                | {% ghcard ccknbc-actions/blogroll, theme=vue %}             |
| --------------------------------------------------- | ----------------------------------------------------------- |
| {% ghcard ccknbc-actions/blogroll, theme=buefy %}   | {% ghcard ccknbc-actions/blogroll, theme=solarized-light %} |
| {% ghcard ccknbc-actions/blogroll, theme=onedark %} | {% ghcard ccknbc-actions/blogroll, theme=solarized-dark %}  |
| {% ghcard ccknbc-actions/blogroll, theme=algolia %} | {% ghcard ccknbc-actions/blogroll, theme=calm %}            |
```

## github 徽标 ghbdage

{% tip cogs %}
关于 ghbdage 参数的更多具体用法可以参看糖果屋教程：[添加 github 徽标](https://akilar.top/posts/e87ad7f8)
{% endtip %}

```markdown
{% bdage [right],[left],[logo]||[color],[link],[title]||[option] %}
```

1. `left`：徽标左边的信息，必选参数。
1. `right`: 徽标右边的信息，必选参数，
1. `logo`：徽标图标，图标名称详见[simpleicons](https://simpleicons.org/)，可选参数。
1. `color`：徽标右边的颜色，可选参数。
1. `link`：指向的链接，可选参数。
1. `title`：徽标的额外信息，可选参数。主要用于优化 SEO，但`object`标签不会像`a`标签一样在鼠标悬停显示`title`信息。
1. `option`：自定义参数，支持[shields.io](https://shields.io/)的全部 API 参数支持，具体参数可以参看上文中的拓展写法示例。形式为`name1=value2&name2=value2`。

{% note info modern %}
本外挂标签的参数分为三组，用`||`分割。
{% endnote %}

1.  基本参数,定义徽标左右文字和图标

```markdown
{% bdage Theme,Butterfly %}
{% bdage Frame,Hexo,hexo %}
```

2.  信息参数，定义徽标右侧内容背景色，指向链接

```markdown
{% bdage CDN,JsDelivr,jsDelivr||abcdef,https://metroui.org.ua/index.html,本站使用JsDelivr为静态资源提供CDN加速 %}
//如果是跨顺序省略可选参数，仍然需要写个逗号,用作分割
{% bdage Source,GitHub,GitHub||,https://github.com/ %}
```

3.  拓展参数，支持 shields 的 API 的全部参数内容

```markdown
{% bdage Hosted,Vercel,Vercel||brightgreen,https://vercel.com/,本站采用双线部署，默认线路托管于Vercel||style=social&logoWidth=20 %}
//如果是跨顺序省略可选参数组，仍然需要写双竖线||用作分割
{% bdage Hosted,Vercel,Vercel||||style=social&logoWidth=20&logoColor=violet %}
```

## 网站卡片 sites

```markdown
{% sitegroup %}
{% site 标题, url=链接, screenshot=截图链接, avatar=头像链接（可选）, description=描述（可选） %}
{% site 标题, url=链接, screenshot=截图链接, avatar=头像链接（可选）, description=描述（可选） %}
{% endsitegroup %}
```

## 行内图片 inlineimage

```markdown
{% inlineimage 图片链接, height=高度（可选） %}
```

高度：height=\*\*px

## 单张图片 image

```markdown
{% image 链接, width=宽度（可选）, height=高度（可选）, alt=描述（可选）, bg=占位颜色（可选） %}
```

1. 图片宽度高度：width=300px, height=32px
1. 图片描述：alt=图片描述（butterfly 需要在主题配置文件中开启图片描述）
1. 占位背景色：bg=#f2f2f2

## 音频 audio

```markdown
{% audio 音频链接 %}
```

## 视频 video

```markdown
{% video 视频链接 %}
```

1.  对其方向：left, center, right
1.  列数：逗号后面直接写列数，支持 1 ～ 4 列。
1.  100%宽度

```markdown
{% video https://file.nmb.show/down.php/86c301fbc6183f50fb0487e13e5a1f64.mp4 %}
```

4.  50%宽度

```markdown
{% videos, 2 %}

......

{% endvideos %}
```

5.  25%宽度

```markdown
{% videos, 4 %}

......

{% endvideos %}
```

## 相册 gallery

1. gallerygroup 相册图库

```markdown
<div class="gallery-group-main">
{% galleryGroup name description link img-url %}
{% galleryGroup name description link img-url %}
{% galleryGroup name description link img-url %}
</div>
```

2. gallery 相册

```markdown
{% gallery %}
markdown 圖片格式
{% endgallery %}
```

1.  gallerygroup 相册图库
    {% note info %}
    思维拓展一下，相册图库的实质其实就是个快捷方式，可以自定义添加描述、封面、链接。那么我们未必要把它当做一个相册，完全可以作为一个链接卡片，链接到视频、QQ、友链都是不错的选择。
    {% endnote %}
    | 参数名 | 释义 |
    | --- | --- |
    | name | 图库名字 |
    | description | 图库描述 |
    | link | 链接到对应相册的地址 |
    | img-url | 图库封面 |

2.  gallery 相册
    区别于旧版的 Gallery 相册,新的 Gallery 相册会自动根据图片长度进行排版，书写也更加方便，与 markdown 格式一样。可根据需要插入到相应的 md。无需再自己配置长宽。**建议在粘贴时故意使用长短、大小、横竖不一的图片**，会有更好的效果。（尺寸完全相同的图片只会平铺输出，效果很糟糕）

## 隐藏折叠 tag-hide

### hide-inline

```markdown
{% hideInline 描述,按钮颜色,字体颜色 %}
{% hideInline 描述 %}
```

### hide-block

```markdown
{% hideBlock 描述 %}

......

{% endhideBlock %}
```

### hide-toggle

```markdown
{% hideToggle 描述 %}

......

{% endhideToggle %}
```

## 折叠框 folding

```markdown
{% folding 参数（可选）, 标题 %}
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper/abstract/41F215B9-261F-48B4-80B5-4E86E165259E.jpeg)
{% endfolding %}
```

1. 颜色：blue, cyan, green, yellow, red
1. 状态：状态填写 open 代表默认打开。

## 分栏 tab

```markdown
{% tabs Unique name, [index] %}

<!-- tab [Tab caption] [@icon] -->

Any content (support inline tags too).

<!-- endtab -->

{% endtabs %}
```

1. Unique name :

   - 选项卡块标签的唯一名称，不带逗号。
   - 将在#id 中用作每个标签及其索引号的前缀。
   - 如果名称中包含空格，则对于生成#id，所有空格将由破折号代替。
   - 仅当前帖子/页面的 URL 必须是唯一的！

2. [index]:

   - 活动选项卡的索引号。
   - 如果未指定，将选择第一个标签（1）。
   - 如果 index 为-1，则不会选择任何选项卡。
   - 可选参数。

3. [Tab caption]:

   - 当前选项卡的标题。
   - 如果未指定标题，则带有制表符索引后缀的唯一名称将用作制表符的标题。
   - 如果未指定标题，但指定了图标，则标题将为空。
   - 可选参数。

4. [@icon]:
   - FontAwesome 图标名称（全名，看起来像“ fas fa-font”）
   - 可以指定带空格或不带空格；
   - 例如'Tab caption @icon' 和 'Tab caption@icon'.
   - 可选参数。

嵌套

```markdown
{% subtabs name %}

......

{% endsubtabs %}
```

## 数据集合 issues

```markdown
{% issues type | api=url | group=key:value1,value2（可选） %}
```

type(类型)
根据需求不同，会将 issues 内容解析成不同的 HTML 标签，目前支持的类型有：

1.  时间轴`timeline`: 解析成`timeline`标签，`issue`的标题对应`timeline`的时间，`issue`的内容对应`timeline`的内容。
1.  网站卡片`sites`: 解析成`sites`标签，需要有`JSON`代码块,各参数对应`sites`标签参数:

```json
{
  "title": "",
  "screenshot": "",
  "url": "",
  "avatar": "",
  "description": "",
  "「keywords」": ""
}
```

| 参数       | 释义               |
| ---------- | ------------------ |
| title      | 网站名称           |
| screenshot | 网站预览图         |
| url        | 网站链接，需要添加 |

``https://协议组成完整域名。
否则可能被识别成站点相对路径。 |
| avatar | 站长头像 |
| 「keywords」 | 分组依据，
未必要叫「keywords」，
详见下文 group(分组) |

api(接口)
url 为可以调的通的 API，例如：

```
api=https://gitee.com/api/v5/repos/xaoxuu/friends/issues?sort=updated&state=open&page=1&per_page=100&labels=active
api=https://api.github.com/repos/xaoxuu/friends/issues?sort=updated&state=open&page=1&per_page=100&labels=active
```

| 参数                        | 释义                       |
| --------------------------- | -------------------------- |
| https://gitee.com/api/v5/   | gitee 仓库的 api           |
| https://api.github.com/     | github 仓库的 api          |
| repos/xaoxuu/friends/issues | repos/用户名/仓库名/issues |
| sort=updated&state=open     | 界定哪些类型的``issues 会  |
| 被读取过来渲染成相应的标签  |
| page=1&per_page=100         | 读取前 100 条 issues       |
| labels=active               | 控制默认的 issue 不显示，  |

只有自己审核通过
添加了 active 标签之后才会显示 |

group(分组)
`sites`类型的`issues`默认不分组，如果需要分组，可指定分组依据`「keywords」`，和分组白名单`「value1」`、`「value2」`等，例如：

```yml
group=version:v4,v3,v2
# 此处的version就是上文中的「keywords」
```

这个参数的作用就是，筛选出`JSON`中包含`"version": "v4"`或者`"version":"v3"`或者`"version": "v2"`的数据，并分组显示。

仓库 ISSUES 模板配置

因本主题已去 jquery 化（我也不想要，这个标签也不怎么用，不过那个时间线可以用来发说说什么的），所以为了正常显示需要先引入相关依赖，这里不再演示，请直接查看源码即可

```markdown
<script defer src="https://cdn.jsdelivr.net/npm/jquery@latest/dist/jquery.min.js"></script>
<script defer src="https://cdn.jsdelivr.net/npm/hexo-theme-volantis@latest/source/js/issues.min.js"></script>
```

- 时间轴标签`timeline`渲染

```markdown
{% issues timeline | api=https://gitee.com/api/v5/repos/xaoxuu/timeline/issues?state=open&creator=xaoxuu&sort=created&direction=desc&page=1&per_page=100 %}
```

- 网站卡片标签`sites`渲染
  - gitee 仓库示例

```markdown
{% issues sites | api=https://gitee.com/api/v5/repos/xaoxuu/friends/issues?sort=updated&state=open&page=1&per_page=100&labels=active %}
```

- github 仓库示例

```markdown
{% issues sites | api=https://api.github.com/repos/xaoxuu/friends/issues?sort=updated&state=open&page=1&per_page=100&labels=active %}
```

- 网站卡片标签`sites`分组渲染
  这是`Volantis`主题官网的「示例博客」页面的数据：

```markdown
{% issues sites | api=https://api.github.com/repos/volantis-x/examples/issues?sort=updated&state=open&page=1&per_page=100 | group=version:版本：^4.0,版本：^3.0,版本：^2.0 %}
```

## 诗词标签 poem

```markdown
{% poem [title],[author] %}
诗词内容
{% endpoem %}
```

## 进度条 progress

{% note info morden %}
进度条标签参考[沂佰孜猫-给 HEXO 文章添加彩色进度条](https://rongbuqiu.com/jdt.html)。
源样式提取自[Cuteen](https://zwying0814.gitbook.io/cuteen/)主题。
{% endnote %}

```markdown
{% progress [width] [color] [text] %}
```

1. `width`: 0 到 100 的阿拉伯数字
1. `color`: 颜色，取值有{% span red, red %},{% span yellow, yellow %},{% span green, green %},{% span cyan, cyan %},{% span blue, blue %},{% span gray, gray %}
1. `text`:进度条上的文字内容

## mermaid

```markdown
{% mermaid %}
pie
title Key elements in Product X
"Calcium" : 42.96
"Potassium" : 50.05
"Magnesium" : 10.01
"Iron" : 5
{% endmermaid %}

{% mermaid %}
gantt
title A Gantt Diagram
dateFormat YYYY-MM-DD
section Section
A task :a1, 2014-01-01, 30d
Another task :after a1 , 20d
section Another
Task in sec :2014-01-12 , 12d
another task : 24d
{% endmermaid %}

{% mermaid %}
gantt
title A Gantt Diagram
dateFormat YYYY-MM-DD
section Section
A task :a1, 2014-01-01, 30d
Another task :after a1 , 20d
section Another
Task in sec :2014-01-12 , 12d
another task : 24d
{% endmermaid %}
```

## 动态图表 chartjs

```markdown
{% chart 90% 300 %}
{
type: 'line',
data: {
labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
datasets: [{
label: 'My First dataset',
backgroundColor: 'rgb(255, 99, 132)',
borderColor: 'rgb(255, 99, 132)',
data: [0, 10, 5, 2, 20, 30, 45]
}]
},
options: {
responsive: true,
title: {
display: true,
text: 'Chart.js Line Chart'
}
}
}
{% endchart %}
```

关于预览，更多详细内容，请分别前往 [插件文档](https://shen-yu.gitee.io/2020/chartjs) | [原文档](https://chartjs.bootcss.com/docs) 查看

## 媒体 mmedia

{% tabs mmedia,11 %}

<!-- tab 安装与基本介绍 -->

简介

hexo-tag-mmedia 是一个能在 Hexo 中快速插入媒体标签的插件，目前支持的标签和平台有（持续开发中）：

- [x] Audio
- [x] Video
- [x] [Aplayer]([https://github.com/DIYgod/APlayer)](https://github.com/DIYgod/APlayer))
- [x] [MetingJS]([https://github.com/metowolf/MetingJS)](https://github.com/metowolf/MetingJS))
- [x] [Dplayer]([https://github.com/DIYgod/DPlayer)](https://github.com/DIYgod/DPlayer))
- [x] [哔哩哔哩]([https://www.bilibili.com/)](https://www.bilibili.com/))
- [x] [西瓜视频]([https://www.ixigua.com/)](https://www.ixigua.com/))
- [ ] [YouTube]()
- [x] [ArtPlayer]([https://github.com/zhw2590582/ArtPlayer)](https://github.com/zhw2590582/ArtPlayer))

DEMO

[[http://demo.hexo-tag-mmedia.u2sb.com/](http://demo.hexo-tag-mmedia.u2sb.com/)](<http://demo.hexo-tag-mmedia.u2sb.com/](http://demo.hexo-tag-mmedia.u2sb.com/)>)

使用

hexo-tag-mmedia 插件和其他 hexo 插件使用方法类似，诸如 如何启用一个插件 之类的共性问题就不再赘述了，只说 hexo-tag-mmedia 相关的。

安装

<code-group>
  <code-block title="NPM">
  ```bash
  npm install hexo-tag-mmedia@1 --save
  ```
  </code-block>

  <code-block title="PNPM" active>
  ```bash
  pnpm install hexo-tag-mmedia@1 --save
  ```
  </code-block>

  <code-block title="YARN">
  ```bash
  yarn add hexo-tag-mmedia@1 --save
  ```
  </code-block>
</code-group>

配置

如需修改配置，请务必不要保留空选项，空选项会覆盖默认配置，严重可能直接导致插件无法使用。

单项使用的文档中会详细讲解对应的使用文档，请自行阅读后再做配置。

下面只是示例，请勿全盘复制，请看清后面的讲解后组织自己的配置文件。

持续更新中，详情见详细文档和 [源码]([https://github.com/u2sb/hexo-tag-mmedia/blob/1.x/src/config/config_default.yml)](https://github.com/u2sb/hexo-tag-mmedia/blob/1.x/src/config/config_default.yml))

```yaml
mmedia:
  audio:
    default:
  video:
    default:
  aplayer:
    js: [https://cdn.jsdelivr.net/npm/aplayer@1/dist/APlayer.min.js](https://cdn.jsdelivr.net/npm/aplayer@1/dist/APlayer.min.js)
    css: [https://cdn.jsdelivr.net/npm/aplayer@1/dist/APlayer.min.css](https://cdn.jsdelivr.net/npm/aplayer@1/dist/APlayer.min.css)
    default:
      contents:
  meting:
    js: [https://cdn.jsdelivr.net/npm/meting@2/dist/Meting.min.js](https://cdn.jsdelivr.net/npm/meting@2/dist/Meting.min.js)
    api:
    default:
  dplayer:
    js: [https://cdn.jsdelivr.net/npm/dplayer@1/dist/DPlayer.min.js](https://cdn.jsdelivr.net/npm/dplayer@1/dist/DPlayer.min.js)
    hls_js: [https://cdn.jsdelivr.net/npm/hls.js/dist/hls.min.js](https://cdn.jsdelivr.net/npm/hls.js/dist/hls.min.js)
    dash_js: [https://cdn.jsdelivr.net/npm/dashjs/dist/dash.all.min.js](https://cdn.jsdelivr.net/npm/dashjs/dist/dash.all.min.js)
    shaka_dash_js: [https://cdn.jsdelivr.net/npm/shaka-player/dist/shaka-player.compiled.js](https://cdn.jsdelivr.net/npm/shaka-player/dist/shaka-player.compiled.js)
    flv_js: [https://cdn.jsdelivr.net/npm/flv.js/dist/flv.min.js](https://cdn.jsdelivr.net/npm/flv.js/dist/flv.min.js)
    webtorrent_js: [https://cdn.jsdelivr.net/npm/webtorrent/webtorrent.min.js](https://cdn.jsdelivr.net/npm/webtorrent/webtorrent.min.js)
    default:
      contents:
  bilibili:
    default:
      page: 1
      danmaku: true
      allowfullscreen: allowfullscreen
      sandbox: allow-top-navigation allow-same-origin allow-forms allow-scripts allow-popups
      width: 100%
      max_width: 850px
      margin: auto
  xigua:
    default:
      autoplay: false
      startTime: 0
      allowfullscreen: allowfullscreen
      sandbox: allow-top-navigation allow-same-origin allow-forms allow-scripts allow-popups
      width: 100%
      max_width: 850px
      margin: auto
```

解释

- 配置项较多目的是给予最大的自定义权限，默认情况下不做配置也可以使用。
- 配置文件放在博客根目录的 `_config.yml` 中
- default 为默认配置，在 `_config.yml` 中填写就不需要在每个标签全部写入了，所有允许在 mmedia 标签上写入的配置项，均可在 default 下配置。
- default 下 contents 项，用于设置 JSON 类型的默认配置，注意要使用 yaml 格式写默认配置，以下是几个示例。

示例

如无法读懂下面的示例，请阅读后面的文档后再回来看。

修改 Aplayer 的 js 文件：

```yaml
mmedia:
  aplayer:
    js: [https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js](https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js)
    css: [https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css](https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css)
```

将 Aplayer 的 JS 和 CSS 放入博客目录：

首先请下载 `APlayer.min.js` 和 `APlayer.min.js` 文件，放入博客下 `source/assets/js/` 和 `source/assets/css/` 下（路径只是示例）

```yaml
mmedia:
  aplayer:
    js: /assets/js/APlayer.min.js
    css: /assets/css/APlayer.min.css
```

Meting 修改循环方式为随机循环：

```yaml
mmedia:
  meting:
    default:
      loop: all
      order: random
```

Dplayer 修改弹幕 API：

```yaml
mmedia:
  dplayer:
    default:
      contents:
        danmaku:
          api: [https://api.prprpr.me/dplayer/v3/](https://api.prprpr.me/dplayer/v3/)
```

使用

下面只是快速示例，请阅读后面的文档后再回来看。示例只是为了展示配置方式瞎写的，一些配置不一定正确，不要照抄。

```markdown
{% mmedia "audio" "src:a.mp3" %}
```

```markdown
{% mmedia "aplayer" "name:songName" "url:a.mp3" %}
```

```markdown
{% mmedia "meting" "auto=[https://y.qq.com/n/yqq/song/001RGrEX3ija5X.html"](https://y.qq.com/n/yqq/song/001RGrEX3ija5X.html") %}
```

```markdown
{% mmedia "bilibili" "bvid:BV1hb4y1R7xf" %}
```

```markdown
{% mmedia "xigua" "xid=6925997698269053453" %}
```

```markdown
{% mmedias "dplayer" "flv:" "url:[https://dandoc.u2sb.com/video/%E5%AE%89%E8%A3%85/1-%E6%95%B0%E6%8D%AE%E5%BA%93%E5%AE%89%E8%A3%85.mp4"](https://dandoc.u2sb.com/video/%E5%AE%89%E8%A3%85/1-%E6%95%B0%E6%8D%AE%E5%BA%93%E5%AE%89%E8%A3%85.mp4") %}
{
"contextmenu":
[
{
text: "custom1",
link: "[https://github.com/DIYgod/DPlayer"](https://github.com/DIYgod/DPlayer")
}
]
}
{% endmmedias %}
```

```markdown
{% mmedias "aplayer" "autoplay:false" %}
{
"volume": 0.8,
"audio":
[
{
"name": "name1",
"artist": "artist1",
"url": "url1.mp3",
"cover": "cover1.jpg",
"lrc": "lrc1.lrc",
"theme": "#ebd0c2"
},
{
"name": "name2",
"artist": "artist2",
"url": "url2.mp3",
"cover": "cover2.jpg",
"lrc": "lrc2.lrc",
"theme": "#46718b"
}
]
}
{% endmmedias %}
```

markdown 内可以使用两种标签作为插件，分别是 `mmedia` 和 `mmedias`，使用方式为：

```markdown
{% mmedia %}
```

```markdown
{% mmedias %}
{% endmmedias %}
```

只使用 `args` 作为传参方式时，两种标签均可使用，当需要使用 `contents` 传参时，只能使用 `mmedias`。

后面第一个参数用于标记标签，可选（以详细文档为主，持续更新中）：

`audio` `video` `meting` `aplayer` `dplayer` `bilibili` `xigua`

再后面的参数将直接作为 `args` 参数直接传入插件。

参数

传入标签的参数可以写入到三个位置，分别为：`_config.yml`，`args`，`contents`，其中只有部分插件可使用 `contents` 配置，具体看详细文档，如有冲突项，覆盖规则为（后面的会被前面发覆盖）：

`contents` -> `args` -> `_config.yml` -> `插件默认`

写入到 `args` 上的参数，有两种写法，分别是使用 `:` 和 `=` 分割，两种写法是等效的，在遇到第一个 `:` 或 `=` 时会自动分割，例如：

```markdown
{% mmedia "bilibili" "bvid:BV1hb4y1R7xf" %}

{% mmedia "bilibili" "bvid=BV1hb4y1R7xf" %}
```

两种写法是等效的。

如果遇到布尔类型的参数，可以简写

```markdown
{% mmedia "audio" "src:a.mp3" "autoplay:" %}
```

```markdown
{% mmedia "audio" "src:a.mp3" "autoplay:true" %}
```

两种写法等效，但需要注意，`:` 或 `=` 一定不能省略。

JSON 传参

支持 JSON 方式传参，其中 JSON 为 [JSON5]([https://json5.org/)](https://json5.org/)) 规范。

示例：

```markdown
{% mmedias "aplayer" "autoplay:false" %}
{
"volume": 0.8,
"audio":
[
{
"name": "name1",
"artist": "artist1",
"url": "url1.mp3",
"cover": "cover1.jpg",
"lrc": "lrc1.lrc",
"theme": "#ebd0c2"
},
{
"name": "name2",
"artist": "artist2",
"url": "url2.mp3",
"cover": "cover2.jpg",
"lrc": "lrc2.lrc",
"theme": "#46718b"
}
]
}
{% endmmedias %}
```

从 0.x 升级

考虑到一部分用户 0.x 版本使用时间较长，迁移成本较高，遂将 0.x 单独发布为一个包，可以用 1.x 版本同时安装。

详情见 [0.X 版本](0990.版本0.md)。

虽然能兼容使用，但建议及时修改文章到 1.x ，0.x 版本已不再继续维护。

开发者要说的几句话

1. 这个插件并不完美，如果使用中遇到问题，请熟读文档，如果还是有问题，请再读一遍文档，还是有问题，请向开发者反馈。
2. 关于 JS 重复请求，请升级客户端浏览器版本，两个一样的 JS，只会请求一次，暂时没有想到什么好的办法，如果有，请及时告诉 Aki 。
3. 关于 pjax，这东西真的不想去做兼容（其实也不难），如果以后闲得无聊的话，可能会做，但不要催 Aki 关于 pjax 兼容的问题。
4. 不要局限于示例，放开手脚，大胆去尝试，这个插件的开放性真的非常的大。
<!-- endtab -->

<!-- tab Audio -->

介绍

可以插入 html5 原生 audio 标签

使用

```markdown
{% mmedia "audio" "src:a.mp3" %}
```

```markdown
{% mmedia "audio" "src:[https://baidu.com/a.mp3"](https://baidu.com/a.mp3") "autoplay:true" %}
```

参数

> 此部分请熟读 [Audio 相关介绍]([https://www.w3.org/TR/2014/REC-html5-20141028/embedded-content-0.html#the-audio-element)](https://www.w3.org/TR/2014/REC-html5-20141028/embedded-content-0.html#the-audio-element))

- 使用 `:` 或 `=` 分割。
- 所有 `<audio>` 标签的原生参数均可添加，只要能写进去就可以。
- 具体能否实现相关标准，取决于客户端浏览器。

JSON 参数

mmedia 插件允许在 contents 部分使用 JSON 编写配置，使用 JSON5 标准。

配置

默认配置可写入 `_config.yml` 下

```yaml
mmedia:
  audio:
    default:
      autoplay: true
      key: vaule
```

<!-- endtab -->

<!-- tab Video -->

介绍

可以插入 html5 原生 video 标签

使用

```markdown
{% mmedia "video" "src:a.mp4" %}
```

```markdown
{% mmedia "video" "src:[https://baidu.com/a.mp4"](https://baidu.com/a.mp4") "autoplay:true" %}
```

参数

> 此部分请熟读 [Video 相关介绍]([https://www.w3.org/TR/2014/REC-html5-20141028/embedded-content-0.html#the-video-element)](https://www.w3.org/TR/2014/REC-html5-20141028/embedded-content-0.html#the-video-element))

- 使用 `:` 或 `=` 分割。
- 所有 `<video>` 标签的原生参数均可添加，只要能写进去就可以。
- 具体能否实现相关标准，取决于客户端浏览器。

JSON 参数

mmedia 插件允许在 contents 部分使用 JSON 编写配置，使用 JSON5 标准。

配置

默认配置可写入 `_config.yml` 下

```yaml
mmedia:
  video:
    default:
      autoplay: true
      key: vaule
```

<!-- endtab -->

<!-- tab Meting -->

介绍

可以插入 [MetingJS]([https://github.com/metowolf/MetingJS)](https://github.com/metowolf/MetingJS)) 标签。

使用

```markdown
{% mmedia "meting" "auto=[https://y.qq.com/n/yqq/song/001RGrEX3ija5X.html"](https://y.qq.com/n/yqq/song/001RGrEX3ija5X.html") %}
```

```markdown
{% mmedia "meting" "server=netease"	"type=playlist"	"id=60198" %}
```

参数

> 此部分请熟读 [MetingJS 文档]([https://github.com/metowolf/MetingJS#option)](https://github.com/metowolf/MetingJS#option))

- 使用 `:` 或 `=` 分割。
- 所有 `<meting-js>` 标签的参数均可添加，只要能写进去就可以。

JSON 参数

mmedia 插件允许在 contents 部分使用 JSON 编写配置，使用 JSON5 标准。

```markdown
{% mmedias "meting" "server=netease" %}
{
type:"playlist",
id:"60198"
}
{% endmmedias %}
```

配置

默认配置可写入 `_config.yml` 下

```yaml
mmedia:
  meting:
    js: [https://cdn.jsdelivr.net/npm/meting@2/dist/Meting.min.js](https://cdn.jsdelivr.net/npm/meting@2/dist/Meting.min.js)
    api: [http://example.com/api.php](http://example.com/api.php)
    default:
      key: vaule
```

<!-- endtab -->

<!-- tab Aplayer -->

介绍

可以插入 aplayer 标签

使用

```markdown
{% mmedia "aplayer" "name:songName" "url:a.mp3" %}
```

```markdown
{% mmedias "aplayer" "autoplay:false" %}
{
"volume": 0.8,
"audio":
[
{
"name": "name1",
"artist": "artist1",
"url": "url1.mp3",
"cover": "cover1.jpg",
"lrc": "lrc1.lrc",
"theme": "#ebd0c2"
},
{
"name": "name2",
"artist": "artist2",
"url": "url2.mp3",
"cover": "cover2.jpg",
"lrc": "lrc2.lrc",
"theme": "#46718b"
}
]
}
{% endmmedias %}
```

参数

> 此部分请熟读 [APlayer 文档]([http://aplayer.js.org/)](http://aplayer.js.org/))

- 使用 `:` 或 `=` 分割。

详细参数表：

| 参数           | 默认   | 解释                                           |
| :------------- | :----- | :--------------------------------------------- |
| name           | -      | audio name                                     |
| artist         | -      | audio artist                                   |
| url            | -      | audio url                                      |
| cover          | -      | audio cover                                    |
| lrc            | -      | audio lrc                                      |
| theme          | -      | audio theme                                    |
| type           | auto   | audio type 可选 'auto', 'hls', 'normal'        |
| autoplay       | false  | autoplay                                       |
| loop           | 'all'  | player loop play, values: 'all', 'one', 'none' |
| order          | 'list' | player play order, values: 'list', 'random'    |
| volume         | 0.7    | default volume,                                |
| tlistMaxHeight | -      | list max height                                |

不在表格内的参数请使用下面 JSON 类型的参数。

JSON 参数

mmedia 插件允许在 contents 部分使用 JSON 编写配置，由于允许使用 JSON5，此项配置几乎与 APlayer 完全一致。

详情请见上方示例。

配置

默认配置可写入 `_config.yml` 下

```yaml
mmedia:
  aplayer:
    js: [https://cdn.jsdelivr.net/npm/aplayer@1/dist/APlayer.min.js](https://cdn.jsdelivr.net/npm/aplayer@1/dist/APlayer.min.js)
    css: [https://cdn.jsdelivr.net/npm/aplayer@1/dist/APlayer.min.css](https://cdn.jsdelivr.net/npm/aplayer@1/dist/APlayer.min.css)
    default:
      contents:
```

<!-- endtab -->

<!-- tab Dplayer -->

介绍

可以插入 dplayer 标签。

使用

```markdown
{% mmedia "dplayer" "url:a.mp4" %}
```

```markdown
{% mmedias "dplayer" "flv:" "url:[https://dandoc.u2sb.com/video/%E5%AE%89%E8%A3%85/1-%E6%95%B0%E6%8D%AE%E5%BA%93%E5%AE%89%E8%A3%85.mp4"](https://dandoc.u2sb.com/video/%E5%AE%89%E8%A3%85/1-%E6%95%B0%E6%8D%AE%E5%BA%93%E5%AE%89%E8%A3%85.mp4") %}
{
"contextmenu":
[
{
text: "custom1",
link: "[https://github.com/DIYgod/DPlayer"](https://github.com/DIYgod/DPlayer")
}
]
}
{% endmmedias %}
```

参数

> 此部分请熟读 [DPlayer 文档]([http://dplayer.js.org/)](http://dplayer.js.org/))

- 使用 `:` 或 `=` 分割。

详细参数表：

| 参数       | 默认  | 解释                                                                                                                          |
| :--------- | :---- | :---------------------------------------------------------------------------------------------------------------------------- |
| url        | -     | video.url                                                                                                                     |
| pic        | -     | video.pic                                                                                                                     |
| thumbnails | -     | video.thumbnails                                                                                                              |
| type       | auto  | video.type, values: 'auto', 'hls', 'flv', 'dash', 'webtorrent', 'normal' or other                                             |
| autoplay   | false | video autoplay                                                                                                                |
| loop       | false | video loop                                                                                                                    |
| logo       | -     | showing logo in the top left corner, you can adjust its size and position by CSS                                              |
| volume     | 0.7   | default volume                                                                                                                |
| screenshot | false | enable screenshot, if true, video and video poster must enable Cross-Origin                                                   |
| id         | -     | danmaku.id, danmaku pool id, it must be unique                                                                                |
| api        | -     | danmaku.api, see [Danmaku API]([http://dplayer.js.org/guide.html#danmaku-api)](http://dplayer.js.org/guide.html#danmaku-api)) |

上面有一个比较特殊的参数 flv，这里单独解释一下，这个参数是用于引入其他 js 文件的，目前支持的有：`hls` `dash` `shaka_dash` `flv` `webtorrent`，上述参数可多个一起使用，如果后面带有 js 地址，将直接使用，否则将使用 `_config.yml` 配置或插件默认配置，如：

```markdown
{% mmedia "dplayer" "flv:" "url:a.flv" %}
```

```markdown
{% mmedias "dplayer" "flv:" "hls:[https://cdn.jsdelivr.net/npm/hls.js/dist/hls.min.js"](https://cdn.jsdelivr.net/npm/hls.js/dist/hls.min.js") %}
{
video:
{
quality:
[
{
name: 'HLS',
url: 'a.m3u8',
type: 'hls',
},
{
name: 'FLV',
url: 'demo.mp4',
type: 'flv',
},
],
efaultQuality: 0,
ic: 'demo.png',
thumbnails: 'thumbnails.jpg',
},
}
{% endmmedias %}
```

不在表格内的参数请使用下面 JSON 类型的参数。

JSON 参数

mmedia 插件允许在 contents 部分使用 JSON 编写配置，由于允许使用 JSON5，此项配置几乎与 DPlayer 完全一致。

详情请见上方示例。

配置

默认配置可写入 `_config.yml` 下

```yaml
mmedia:
  dplayer:
    js: [https://cdn.jsdelivr.net/npm/dplayer@1/dist/DPlayer.min.js](https://cdn.jsdelivr.net/npm/dplayer@1/dist/DPlayer.min.js)
    hls_js: [https://cdn.jsdelivr.net/npm/hls.js/dist/hls.min.js](https://cdn.jsdelivr.net/npm/hls.js/dist/hls.min.js)
    dash_js: [https://cdn.jsdelivr.net/npm/dashjs/dist/dash.all.min.js](https://cdn.jsdelivr.net/npm/dashjs/dist/dash.all.min.js)
    shaka_dash_js: [https://cdn.jsdelivr.net/npm/shaka-player/dist/shaka-player.compiled.js](https://cdn.jsdelivr.net/npm/shaka-player/dist/shaka-player.compiled.js)
    flv_js: [https://cdn.jsdelivr.net/npm/flv.js/dist/flv.min.js](https://cdn.jsdelivr.net/npm/flv.js/dist/flv.min.js)
    webtorrent_js: [https://cdn.jsdelivr.net/npm/webtorrent/webtorrent.min.js](https://cdn.jsdelivr.net/npm/webtorrent/webtorrent.min.js)
    default:
      contents:
```

<!-- endtab -->

<!-- tab Artplayer -->

介绍

可以插入 artplayer 标签。

使用

```markdown
{% mmedia "artplayer" "url:[https://dandoc.u2sb.com/video/%E5%AE%89%E8%A3%85/1-%E6%95%B0%E6%8D%AE%E5%BA%93%E5%AE%89%E8%A3%85.mp4"](https://dandoc.u2sb.com/video/%E5%AE%89%E8%A3%85/1-%E6%95%B0%E6%8D%AE%E5%BA%93%E5%AE%89%E8%A3%85.mp4") %}
```

```markdown
{% mmedias "artplayer" "flv:"  %}
{
url: "[https://dandoc.u2sb.com/video/%E5%AE%89%E8%A3%85/1-%E6%95%B0%E6%8D%AE%E5%BA%93%E5%AE%89%E8%A3%85.mp4"](https://dandoc.u2sb.com/video/%E5%AE%89%E8%A3%85/1-%E6%95%B0%E6%8D%AE%E5%BA%93%E5%AE%89%E8%A3%85.mp4")
}
{% endmmedias %}
```

参数

> 此部分请熟读 [ArtPlayer 文档]([https://artplayer.org/document/#/options)](https://artplayer.org/document/#/options))

- 使用 `:` 或 `=` 分割。

详细参数表：

| 参数     | 默认  | 解释           |
| :------- | :---- | :------------- |
| url      | -     | url            |
| title    | -     | title          |
| poster   | -     | poster         |
| type     | -     | type           |
| autoplay | false | video autoplay |
| loop     | false | video loop     |
| volume   | 0.7   | default volume |
| style    | -     | style          |

上面有一个比较特殊的参数 flv，这里单独解释一下，这个参数是用于引入其他 js 文件的，目前支持的有：`hls` `dash` `shaka_dash` `flv` `webtorrent`，上述参数可多个一起使用，如果后面带有 js 地址，将直接使用，否则将使用 `_config.yml` 配置或插件默认配置，如：

```markdown
{% mmedia "artplayer" "flv:" "url:a.flv" %}
```

```markdown
{% mmedias "artplayer" "flv:" "hls:[https://cdn.jsdelivr.net/npm/hls.js/dist/hls.min.js"](https://cdn.jsdelivr.net/npm/hls.js/dist/hls.min.js") %}
{
...
}
{% endmmedias %}
```

不在表格内的参数请使用下面 JSON 类型的参数。

JSON 参数

mmedia 插件允许在 contents 部分使用 JSON 编写配置，由于允许使用 JSON5，此项配置几乎与 ArtPlayer 完全一致。

详情请见上方示例。

配置

默认配置可写入 `_config.yml` 下

```yaml
mmedia:
  artplayer:
    js: [https://cdn.jsdelivr.net/npm/artplayer@3/dist/artplayer.js](https://cdn.jsdelivr.net/npm/artplayer@3/dist/artplayer.js)
    hls_js: [https://cdn.jsdelivr.net/npm/hls.js/dist/hls.min.js](https://cdn.jsdelivr.net/npm/hls.js/dist/hls.min.js)
    dash_js: [https://cdn.jsdelivr.net/npm/dashjs/dist/dash.all.min.js](https://cdn.jsdelivr.net/npm/dashjs/dist/dash.all.min.js)
    shaka_dash_js: [https://cdn.jsdelivr.net/npm/shaka-player/dist/shaka-player.compiled.js](https://cdn.jsdelivr.net/npm/shaka-player/dist/shaka-player.compiled.js)
    flv_js: [https://cdn.jsdelivr.net/npm/flv.js/dist/flv.min.js](https://cdn.jsdelivr.net/npm/flv.js/dist/flv.min.js)
    webtorrent_js: [https://cdn.jsdelivr.net/npm/webtorrent/webtorrent.min.js](https://cdn.jsdelivr.net/npm/webtorrent/webtorrent.min.js)
    default:
      style: width:100%;height:650px;max-width:1200px;center
      contents:
        autoSize: true
        autoMini: true
        fullscreen: true
        fullscreenWeb: true
```

<!-- endtab -->

<!-- tab 哔哩哔哩 -->

介绍

可以插入 bilibili 视频

使用

```markdown
{% mmedia "bilibili" "bvid:BV1br4y1P7ND" %}
```

```markdown
{% mmedia "bilibili" "bvid:BV1br4y1P7ND" "danmaku:false" %}
```

参数

- 使用 `:` 或 `=` 分割。

详细参数表：

| 参数            | 默认             | 解释                                                    |
| :-------------- | :--------------- | :------------------------------------------------------ |
| aid             | -                | aid                                                     |
| bvid            | -                | bvid，与 aid 同时出现时以 bvid 为准                     |
| page            | 1                | page                                                    |
| danmaku         | true             | 是否有弹幕 ture or false                                |
| allowfullscreen | allowfullscreen  | 允许全屏， allowfullscreen 或 true 允许，其他选项不允许 |
| sandbox         | 见 [配置](#配置) | iframe sandbox                                          |
| width           | 100%             | css 属性                                                |
| max_width       | 850px            | css 属性                                                |
| margin          | auto             | css 属性                                                |

JSON 参数

mmedia 插件允许在 contents 部分使用 JSON 编写配置，使用 JSON5 标准。

配置

默认配置可写入 `_config.yml` 下

```yaml
mmedia:
  bilibili:
    default:
      page: 1
      danmaku: true
      allowfullscreen: allowfullscreen
      sandbox: allow-top-navigation allow-same-origin allow-forms allow-scripts allow-popups
      width: 100%
      max_width: 850px
      margin: auto
```

<!-- endtab -->

<!-- tab 西瓜视频 -->

介绍

可以插入 西瓜 视频

使用

```markdown
{% mmedia "xigua" "xid=6925997698269053453" %}
```

```markdown
{% mmedia "xigua" "xid:6925997698269053453" "autoplay:true" %}
```

参数

- 使用 `:` 或 `=` 分割。

详细参数表：

| 参数            | 默认             | 解释                                                    |
| :-------------- | :--------------- | :------------------------------------------------------ |
| xid             | -                | 西瓜视频的 ID，就是那一串数字                           |
| id              | -                | 一般情况下不需要填写                                    |
| autoplay        | false            | autoplay                                                |
| startTime       | 0                | 开始时间，秒                                            |
| allowfullscreen | allowfullscreen  | 允许全屏， allowfullscreen 或 true 允许，其他选项不允许 |
| sandbox         | 见 [配置](#配置) | iframe sandbox                                          |
| width           | 100%             | css 属性                                                |
| max_width       | 850px            | css 属性                                                |
| margin          | auto             | css 属性                                                |

JSON 参数

mmedia 插件允许在 contents 部分使用 JSON 编写配置，使用 JSON5 标准。

配置

默认配置可写入 `_config.yml` 下

```yaml
mmedia:
  xigua:
    default:
      autoplay: false
      startTime: 0
      allowfullscreen: allowfullscreen
      sandbox: allow-top-navigation allow-same-origin allow-forms allow-scripts allow-popups
      width: 100%
      max_width: 850px
      margin: auto
```

<!-- endtab -->

<!-- tab YouTube -->

待开发......

<!-- endtab -->

<!-- tab 预览 -->

请前往 <a target="_blank"  href="/music">音乐界面</a> 预览部分效果，分别用到了 Artplayer, Aplayer, Dplayer, Meting

<!-- endtab -->

{% endtabs %}
