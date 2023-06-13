---
title: 语雀文章同步至Hexo笔记
urlname: "36"
author: CC康纳百川
date: 2022-10-04T16:00:00.000Z
updated: 2022-10-04T16:00:00.000Z
translate_title: yuque-to-hexo
subtitle: Yuque to Hexo
tags:
  - 博客
  - 工具
keywords:
  - 语雀
  - 博客
  - Hexo
  - Actions
categories: 博客
description: 这篇文章主要讲一下如何用 GitHub Actions 来部署同步语雀上文章到我们的 Hexo 博客
cover: "https://pic1.afdiancdn.com/user/8a7f563c2e3811ecab5852540025c377/common/721e476cb2661152b9c43621c94e3ed7_w1366_h768_s86.png"
id: 36
---

查看本文[**语雀**](https://www.yuque.com/ccknbc/blog/36/)版本【首发】，自动同步更新至[**CC 的部落格**](https://blog.ccknbc.cc/posts/yuque-to-hexo/)！

**建议直接查看结尾，新项目！但本文中的思路仍可借鉴，缓存缩小到了 1/12！**

因为 CC 已经使用语雀有一段时间了，但是因为使用的是 `GitHub Actions` 的原因，一直没有做什么更新，但是目前`json`已经 10M 了，是时候给缓存找一个地方存档以便后续增量更新了
其实最开始的时候是直接推送到仓库的，后来有想过推送到`npm`的想法，但因为更新不怎么频繁也就一直耽搁了，但是因为不在使用条款范围内，有一定的风险，所以还是放弃了。在国庆前我就有想法传到`One Drive`这样的网盘，但是还是不是很方便，最好有现成的脚本可以使用。
于是我想到了`Artifacts`构建产物这个东西，我只要先预先生成一次产物，然后下次就能把之前的产物下载下来使用，

![image.png](https://cdn.nlark.com/yuque/0/2022/png/8391407/1664898122389-f0faa9c8-3c46-4e71-b22b-5d8f20fd33b1.png#averageHue=%2311161d&clientId=u9c173c7f-fbcf-4&errorMessage=unknown%20error&from=paste&height=367&id=u393e0845&originHeight=459&originWidth=1557&originalType=binary&ratio=1&rotation=0&showTitle=false&size=73818&status=error&style=none&taskId=ud01054b4-54f0-444b-a2d8-44b04cd20fc&title=&width=1245.6)
![image.png](https://cdn.nlark.com/yuque/0/2022/png/8391407/1664898167865-16dcd66c-6e28-4ce6-a425-794de377cf67.png#averageHue=%230f131a&clientId=u9c173c7f-fbcf-4&errorMessage=unknown%20error&from=paste&height=242&id=uc1d7e66c&originHeight=303&originWidth=582&originalType=binary&ratio=1&rotation=0&showTitle=false&size=12922&status=error&style=none&taskId=u1721969d-132c-4dcb-90b2-f441c3140ae&title=&width=465.6)

## 关于工作流程构件

构件允许您在作业完成后保留数据，并与同一工作流程中的另一个作业共享该数据。 构件是指在工作流程运行过程中产生的文件或文件集。 例如，在工作流程运行结束后，您可以使用构件保存您的构建和测试输出。 All actions and workflows called within a run have write access to that run's artifacts.

默认情况下，GitHub 会将构建日志和项目存储 90 天（对于源码公开的我，公共仓库是完全够用的，只要保证 90 天更新一次博客即可），此保留期可以自定义。 有关详细信息，请参阅“[使用限制、计费和管理](https://docs.github.com/cn/actions/reference/usage-limits-billing-and-administration#artifact-and-log-retention-policy)”。 每当有人向拉取请求推送新提交时，拉取请求的保留期都会重新开始计算。

以下是您可以上传的一些常见构件：

- 日志文件和核心转储文件
- 测试结果、失败和屏幕截图
- 二进制或压缩文件
- 压力测试性能输出和代码覆盖结果

存储构件时使用存储空间 GitHub。 GitHub Actions usage is free for standard GitHub-hosted runners in public repositories, and for self-hosted runners. For private repositories, each GitHub account receives a certain amount of free minutes and storage for use with GitHub-hosted runners, depending on the product used with the account. Any usage beyond the included amounts is controlled by spending limits. 有关详细信息，请参阅“[GitHub Actions 的计费](https://docs.github.com/cn/billing/managing-billing-for-github-actions)”。

构件会在工作流程运行过程中上传，您可以在 UI 中查看构件的名称和大小。 当构件使用 GitHub UI 下载时， 作为构件一部分单独上传的所有文件都会压缩到一个 zip 文件中。 这意味着计费是根据上传的构件大小而不是 zip 文件的大小计算的。

GitHub 提供两项可用于上传和下载构建构件的操作。 有关详细信息，请参阅 [actions/upload-artifact](https://github.com/actions/upload-artifact) 和 [download-artifact](https://github.com/actions/download-artifact) 操作。

要在作业之间共享数据：

- **上传文件**：为上传的文件指定一个名称，并在作业结束前上传数据。
- **下载文件**：只能下载在同一工作流运行期间上传的工件。 下载文件时，您可以通过名称引用该文件。

作业步骤共享运行器机器的相同环境，但在其各自的进程中运行。 要在作业的步骤之间传递数据，您可以使用输入和输出。 有关输入和输出的详细信息，请参阅“[GitHub Actions 的元数据语法](https://docs.github.com/cn/articles/metadata-syntax-for-github-actions)”。

## 比较构件和依赖项缓存

构件与缓存类似，因为它们能够在 GitHub 上存储文件，但每项功能都提供不同的用例，不能互换使用。

- 当想要重复使用在作业或工作流运行之间不频繁更改的文件时（例如从程序包管理系统构建依赖项），请使用缓存。
- 如果要保存作业生成的文件，以在工作流运行结束后查看（例如生成的二进制文件或生成日志），请使用项目。

有关依赖项缓存的详细信息，请参阅“[缓存依赖项以加快工作流](https://docs.github.com/cn/actions/using-workflows/caching-dependencies-to-speed-up-workflows#comparing-artifacts-and-dependency-caching)”。

## 上传构建和测试构件

您可以创建持续集成 (CI) 工作流程来构建和测试您的代码。 有关使用 GitHub Actions 执行 CI 的详细信息，请参阅“[关于持续集成](https://docs.github.com/cn/articles/about-continuous-integration)”。

构建和测试代码的输出通常会生成可用于调试测试失败的文件和可部署的生产代码。 您可以配置一个工作流程来构建和测试推送到仓库中的代码，并报告成功或失败状态。 您可以上传构建和测试输出，以用于部署、调试失败的测试或崩溃以及查看测试套件范围。

可以使用 `upload-artifact` 操作上传工件。 上传构件时，您可以指定单个文件或目录，或多个文件或目录。 您还可以排除某些文件或目录，以及使用通配符模式。 建议为工件命名，如果没有命名，则会使用 `artifact` 作为默认名称。 有关语法的详细信息，请参阅 [actions/upload-artifact](https://github.com/actions/upload-artifact) 操作。

### 示例

例如，您的仓库或 Web 应用程序可能包含必须转换为 CSS 和 JavaScript 的 SASS 和 TypeScript 文件。 假设生成配置输出 `dist` 目录中已编译的文件，如果所有测试均已成功完成，则可将 `dist` 目录中的文件部署到 Web 应用服务器。

```
|-- hello-world (repository)
|   └── dist
|   └── tests
|   └── src
|       └── sass/app.scss
|       └── app.ts
|   └── output
|       └── test
|
```

此示例演示了如何创建 Node.js 项目的工作流，该项目在 `src` 目录中生成代码，在 `tests` 目录中运行测试。 可以假定运行 `npm test` 会生成一个名为 `code-coverage.html`、存储在 `output/test/` 目录中的代码覆盖率报告。

工作流上传 `dist` 目录中的生产工件，但不包括任何 Markdown 文件。 它还将 `code-coverage.html` 报表作为另一个工件上传。

```yaml
name: Node CI

on: [push]

jobs:
  build_and_test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v3
      - name: npm install, build, and test
        run: |
          npm install
          npm run build --if-present
          npm test
      - name: Archive production artifacts
        uses: actions/upload-artifact@v3
        with:
          name: dist-without-markdown
          path: |
            dist
            !dist/**/*.md
      - name: Archive code coverage results
        uses: actions/upload-artifact@v3
        with:
          name: code-coverage-report
          path: output/test/code-coverage.html
```

## 配置自定义构件保留期

您可以为工作流程创建的单个构件自定义保留期。 使用工作流创建新工件时，可以同时使用 `retention-days` 和 `upload-artifact` 操作。 此示例演示如何为名为 `my-artifact` 的工件设置 5 天的自定义保留期：

`retention-days` 值不能超过存储库、组织或企业设置的保留限制。

```yaml
- name: "Upload Artifact"
  uses: actions/upload-artifact@v3
  with:
    name: my-artifact
    path: my_file.txt
    retention-days: 5
```

## 下载或删除构件

在工作流运行期间，可以使用 [actions/download-artifact](https://github.com/actions/download-artifact)操作下载以前在同一工作流运行中上传的工件。

工作流程运行完成后，您可以在 GitHub 上或使用 REST API 下载或删除构件。 有关详细信息，请参阅“[下载工作流工件](https://docs.github.com/cn/actions/managing-workflow-runs/downloading-workflow-artifacts)”、“[删除工作流工件](https://docs.github.com/cn/actions/managing-workflow-runs/removing-workflow-artifacts)”和“[工件 REST API](https://docs.github.com/cn/rest/reference/actions#artifacts)”。

### 在工作流程运行期间下载构件

[ actions/download-artifact](https://github.com/actions/download-artifact)操作可用于在工作流运行期间下载以前上传的工件。

> 注意：只能下载在同一工作流运行期间上传的工作流中的工件。

指定构件的名称以下载单个构件。 如果在未指定名称的情况下上传了工件，则默认名称为 `artifact`。

```yaml
- name: Download a single artifact
  uses: actions/download-artifact@v3
  with:
    name: my-artifact
```

您还可以不指定名称而下载工作流程运行中的所有构件。 如果您在处理大量构件，此功能非常有用。

```yaml
- name: Download all workflow run artifacts
  uses: actions/download-artifact@v3
```

如果下载所有工作流运行的工件，则会为每个工件使用其名称创建一个目录。

有关语法的详细信息，请参阅 [actions/download-artifact](https://github.com/actions/download-artifact) 操作。

## 在工作流中的作业间传递数据

可以使用 `upload-artifact` 和 `download-artifact` 操作在工作流中的作业间共享数据。 此示例工作流程说明如何在相同工作流程中的任务之间传递数据。 有关详细信息，请参阅 [actions/upload-artifact](https://github.com/actions/upload-artifact) 和 [download-artifact](https://github.com/actions/download-artifact) 操作。

依赖于以前作业构件的作业必须等待依赖项成功完成。 此工作流使用 `needs` 密钥来确保 `job_1`、`job_2` 和 `job_3` 按顺序运行。 例如，`job_2` 需要 `job_1`，方法是使用 `needs: job_1` 语法。

作业 1 执行以下步骤：

- 执行数学计算并将结果保存到名为 `math-homework.txt` 的文本文件。
- 使用 `upload-artifact` 操作上传工件名称为 `homework` 的 `math-homework.txt` 文件。

作业 2 使用上一个作业的结果：

- 下载在上一作业中上传的 `homework` 工件。 默认情况下，`download-artifact` 操作会将工件下载到该步骤执行的工作区目录中。 可以使用 `path` 输入参数指定不同的下载目录。
- 读取 `math-homework.txt` 文件中的值，执行数学计算，并再次将结果保存到 `math-homework.txt`，覆盖其内容。
- 上传 `math-homework.txt` 文件。 此上传会覆盖之前上传的构件，因为它们共用同一名称。

作业 3 显示上一个作业中上传的结果：

- 下载 `homework` 工件。
- 将数学方程式的结果打印到日志中。

在此工作流示例中执行的完整数学运算是 `(3 + 7) x 9 = 90`，工作流程运行运行将会存档它生成的任何构件。

```yaml
name: Share data between jobs

on: [push]

jobs:
  job_1:
    name: Add 3 and 7
    runs-on: ubuntu-latest
    steps:
      - shell: bash
        run: |
          expr 3 + 7 > math-homework.txt
      - name: Upload math result for job 1
        uses: actions/upload-artifact@v3
        with:
          name: homework
          path: math-homework.txt

  job_2:
    name: Multiply by 9
    needs: job_1
    runs-on: windows-latest
    steps:
      - name: Download math result for job 1
        uses: actions/download-artifact@v3
        with:
          name: homework
      - shell: bash
        run: |
          value=`cat math-homework.txt`
          expr $value \* 9 > math-homework.txt
      - name: Upload math result for job 2
        uses: actions/upload-artifact@v3
        with:
          name: homework
          path: math-homework.txt

  job_3:
    name: Display results
    needs: job_2
    runs-on: macOS-latest
    steps:
      - name: Download math result for job 2
        uses: actions/download-artifact@v3
        with:
          name: homework
      - name: Print the final result
        shell: bash
        run: |
          value=`cat math-homework.txt`
          echo The result is $value
```

## 踩坑记录

首先看看我的工作流文件，处理部分代码，会发现有一些疑问，怎么和文档提到的不太一样

```yaml
name: Deploy Yuque-Hexo Public To Pages

on:
  repository_dispatch:
  workflow_dispatch:
  push:
    branches: master

jobs:
  deploy:
    name: Deploy Yuque-Hexo Public To Pages
    runs-on: ubuntu-latest
    env:
      TZ: Asia/Shanghai
      ALGOLIA_ADMIN_API_KEY: ${{ secrets.ALGOLIA_ADMIN_API_KEY }}
      YUQUE_TOKEN: ${{ secrets.YUQUE_TOKEN }}
      webpushrKey: ${{ secrets.WEBPUSHR_KEY }}
      webpushrAuthToken: ${{ secrets.WEBPUSHR_AUTH_TOKEN }}

    steps:
      - name: Checkout
        uses: actions/checkout@main
        with:
          ref: master
          fetch-depth: 0

      - name: Setup Node
        uses: actions/setup-node@main
        id: setup-node
        with:
          node-version: "latest"
          check-latest: true
          cache: "npm"

      - name: Catch Dependencies
        uses: actions/cache@main
        id: cache-dependencies
        with:
          path: node_modules
          key: ${{runner.OS}}-${{hashFiles('**/package-lock.json')}}

      - name: Install Dependencies
        if: steps.cache-dependencies.outputs.cache-hit != 'true'
        run: |
          npm ci

      - name: Download Yuque Posts
        uses: dawidd6/action-download-artifact@v2
        with:
          github_token: ${{secrets.GITHUB_TOKEN}}
          name: "Yuque Posts"
          path: "source/_posts"

      - name: Download Yuque Cache
        uses: dawidd6/action-download-artifact@v2
        with:
          github_token: ${{secrets.GITHUB_TOKEN}}
          name: "Yuque Cache"
          path: "yuque"

      - name: Generate
        run: |
          npm i -g hexo-cli yuque-hexo
          npm run yuque
        # npm i -g hexo-cli yuque-hexo
        # mkdir yuque
        # yuque-hexo sync

      - name: Upload Yuque Cache
        uses: actions/upload-artifact@v3
        with:
          name: "Yuque Cache"
          path: yuque
          retention-days: 90

      - name: Upload Yuque Posts
        uses: actions/upload-artifact@v3
        with:
          name: "Yuque Posts"
          path: "source/_posts"
          retention-days: 90
```

如果配合`package.json`看是不是就明显多了

```json
{
  "name": "ccknbc-blog",
  "version": "latest",
  "private": false,
  "type": "module",
  "scripts": {
    "build": "hexo generate",
    "clean": "hexo clean",
    "deploy": "hexo deploy",
    "server": "hexo server",
    "yuque": "yuque-hexo sync && npm run build && hexo algolia && npm run deploy",
    "github": "npm run build && hexo algolia && npm run deploy"
  },
  "yuqueConfig": {
    "postPath": "/source/_posts/语雀",
    "cachePath": "/yuque/cache.json",
    "lastGeneratePath": "/yuque/lastGeneratePath.log",
    "mdNameFormat": "title",
    "adapter": "markdown",
    "concurrency": "5",
    "timeout": "100s",
    "baseUrl": "https://www.yuque.com/api/v2",
    "login": "ccknbc",
    "repo": "blog",
    "onlyPublished": true,
    "onlyPublic": true
  },
```

具体实现思路如下：

1. 语雀缓存 json 及其时间戳我放在博客根目录`yuque`这个文件夹里，文章只要放在`/source/_posts/`下任意目录即可，子目录也行
2. 上传脚本使用官方的就行，下载脚本得使用[action-download-artifact](https://github.com/dawidd6/action-download-artifact)，原因上面也提到了，官方的脚本`只能下载在同一工作流运行期间上传的工作流中的工件`！而这位作者的脚本默认下载上次运行成功后构建的产物，完美符合我们的需求
3. 第一次使用只保留上传脚本，注释掉下载脚本，因为没有已成功构建产物，此外在执行`yuque-hexo sync` 之前因为我没有放在根目录，所以还需要创建文件夹命令`mkdir -p yuque`否则会报错。后续使用取消注释掉的下载脚本，也可以取消这条命令了，因为加了判断，也可以不取消。
4. 一定要注意文章放文章目录下，缓存放缓存目录下！不然 hexo 识别到这么大的专属格式`json`会解析报错卡在了`hexo g`

## 后续更新

由于原作者以放弃此项目，推荐使用他的新项目同步 [@Elog](https://elog.1874.cool/)，而使用示例也可查看[我的仓库](https://github.com/ccknbc-actions/blog-butterfly)
