---
title: Github Actions 为什么这么香
tags: 工具
id: -9
categories: 工具
description: 本篇文章简单介绍了 Github Actions 的用法，以及一些变量的解释
keywords: GitHub Actions
cover: https://pic1.afdiancdn.com/user/8a7f563c2e3811ecab5852540025c377/common/731ab9880a63b4eb0d82d354cdbdadec_w2240_h1260_s743.jpg
translate_title: why-github-actions-is-so-popular
subtitle: Why GitHub Actions Is So Popular
date: 2020-10-06 10:51:58
updated: 2020-10-06 12:00:00
---

## 本文存在大量纰漏待修正

`Github Actions`为什么这么香,我为什么专门建了一个组织`ccknbc-actions`来跑 actions 并储存博客源码，或者其他只是单纯来跑 actions 的项目，一开始就单纯只是想分类，forked 一堆，主账号自己的项目却混在其中，最新的反而是天天运行 actions 的（排在前面）

而对大多数博主来说，都是把自己的源码（包含源文章）仓库私有起来，而一个普通账号每个月私有仓库运行时间为 2000 分钟，确实，是完全够用的，对于我们这种月更博主来说一个月 100 分钟而已（~~好吧我就是懒~~）；不过作为白嫖党我还是公开了仓库（这样就不限制运行时间了），但如果你选择了定时执行某些项目，注意间隔最小为`5分钟`，而触发方式也是多种多样的，但最让人欣喜的是手动触发方式终于完成了技术革命，不再监控 star 动作了，而是只有项目所有者可执行，这样就不会再运行记录里出现一堆无关记录影响查看（虽然之前判断仓库所有者也是 OK，但是强迫症不接受两秒运行跳过无关记录）

而且由于分配的临时机性能还不错，速度还是很可观的，并且不受长城防火墙的限制，可以很方便的做一些其他事情，这里就不细说，回到标题，它为什么这么香呢？

可能在工作流文件书写上没其他第三方简单，用过`Travis CI`或者`Gitlab CI`的都应该有体会，但自家的经过这么久的发展，用起来还是比较舒服的，而且用户编写的 actions 可以直接拿来用发布到市场，这样有些功能的实现就不用再自己想半天去实现，几行代码就搞定，用 HEXO 写博客的都知道 Gitee 托管静态网页要更新的话就得手动点一下更新才行，而 actions 就可以帮我们去点一下以实现同步全自动更新，多平台部署

Github 本身自带的模板是 OK 的，但毕竟很多新手完全不懂，但其实上手一段时间就明白了每一步在做什么为什么要这样写，官方文档的例子虽然很简单但确实是包含了常用的一些步骤，再加上很多人分享，直接拿来用就行，毕竟搜索引擎不能摆在那不用，爬几篇文章学习一下就会了，这里我以部署 HEXO 博客为例来说一下

首先我们得明白，要让 Github 能在你 git push 上去后能自动部署博客，你得知道博客的源文件是必须要的，但备份哪些呢，下图只是以本站做一个示例，框中的是必须要有的（如果你不打算修改主题源码其实也不用备份，但毕竟可以节约时间，第一次备份前记得在主题文件夹删掉`.git`隐藏文件夹，不然推上去是空的会导致运行失败），其他根据个人需求，，配一个证书或者 README 等，但你还在疑惑；我没有.github 文件夹啊，没错这个就是我们自己新建的文件夹，在博客根目录依次建立`.github/workflows/*.yml`文件

![](https://cdn.jsdelivr.net/gh/ccknbc-backup/photos/blog/2020-10-06~11_57_17.webp#height=637&id=Vyye0&originHeight=637&originWidth=744&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=&width=744)

就像下图这样，工作流文件.yml 你可以随便命名啦，然后我们在工作流文件中添加如下内容

![](https://cdn.jsdelivr.net/gh/ccknbc-backup/photos/blog/2020-10-06~12_03_33.webp#height=119&id=heF8i&originHeight=119&originWidth=329&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=&width=329)

```yaml
name: Update Blog Butterfly Site

on:
  push:
    branches:
      - master
  workflow_dispatch:
    inputs:
      name:
        description: "手动触发"
        required: false

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v2
        with:
          ref: master

      - name: Setup Node
        uses: actions/setup-node@v2-beta
        with:
          node-version: "12.x"

      - name: Install HEXO CI
        run: |
          npm install hexo-cli -g

      - name: Catch
        uses: actions/cache@v2.1.1
        id: cache-dependencies
        with:
          path: node_modules
          key: ${{runner.OS}}-${{hashFiles('**/package-lock.json')}}

      - name: Install Dependencies
        if: steps.cache-dependencies.outputs.cache-hit != 'true'
        run: |
          npm install

      - name: Generate
        run: |
          hexo clean
          git clone https://github.com/CCKNBC/butterfly.git public
          hexo generate
          gulp

      - name: Deploy
        run: |
          cd ./public
          git config --global user.name "你的用户名"
          git config --global user.email "你的邮箱"
          git add -A
          git commit -m "Updated By Github Actions"
          git push --force --quiet "https://ccknbc:${{ secrets.GH_TOKEN }}@github.com/ccknbc/butterfly.git" master:master
          git push --force --quiet "https://ccknbc:${{ secrets.GT_TOKEN }}@gitee.com/ccknbc/butterfly.git" master:master
          git push --force --quiet "https://${{ secrets.CD_USER }}:${{ secrets.CD_TOKEN }}@e.coding.net/ccknbc/blog/butterfly.git" master:master

      - name: Build Gitee Pages
        uses: yanglbme/gitee-pages-action@master
        with:
          gitee-username: ccknbc
          gitee-password: ${{ secrets.GITEE_PASSWORD }}
          gitee-repo: ccknbc/butterfly
```

{% note info icon %}

在 workflow 文档流里我们可以用 {% raw %}`${{ secrets.GITHUB_TOKEN }}`{% endraw %} 做权限认证，是一个默认存在的变量，并不需要我们去添加 ACCESS_TOKEN，跨仓库的话还是要自己手动生成一个，[关于这点，可以查看官方文档相关内容](https://docs.github.com/en/free-pro-team@latest/actions/reference/authentication-in-a-workflow#about-the-github_token-secret)
{% endnote %}

你可能有所疑惑但又看得懂一些命令，别急，请接着往下看

## GitHub Actions 指南

`GitHub Actions`使你可以直接在你的`GitHub`库中创建自定义的工作流，工作流指的就是自动化的流程，比如构建、测试、打包、发布、部署等等，也就是说你可以直接进行 `CI`（持续集成）和 `CD`（持续部署）

## 基本概念

1. `workflow`: 一个 `workflow` 工作流就是一个完整的过程，每个`workflow` 包含一组 `jobs`任务
2. `job : jobs`任务包含一个或多个`job` ，每个 `job`包含一系列的 `steps` 步骤
3. `step` : 每个 `step` 步骤可以执行指令或者使用一个 `action` 动作
4. `action` : 每个 `action` 动作就是一个通用的基本单元

说明：

1. 最外层的 `name` 指定了 `workflow`的名称
2. `on` 声明了一旦发生了 `push` 操作就会触发这个 `workflow`
3. `jobs`定义了任务集，其中可以有一个或多个`job` 任务，示例中只有一个
4. `runs-on` 声明了运行的环境
5. `steps`定义需要执行哪些步骤
6. 每个 `step`可以定义自己的 `name`和`id`，通过 `uses` 可以声明使用一个具体的 `action`，通过`run` 声明需要执行哪些指令。
7. 可以使用上下文参数`on` 声明了何时触发 `workflow`  ，它可以是：
   1. 一个或多个`GitHub` 事件，比如 `push` 了一个 `commit` 、创建了一个`issue` ，产生了一次`pull request` 等等，示例：

```yaml
on:[push,pull_request]
```

1.  预定的时间，示例（每天零点零分触发，不过因为时差关系，是北京时间上午 8 点）：

```yaml
on:
  schedule: -cron:'0 0 * * *'
```

1.  某个外部事件。所谓外部事件触发，简而言之就是你可以通过`REST API`向 `GitHub` 发送请求去触发，具体请查阅官方文档: `repository-dispatch-event`

配置多个事件，示例：

````
```yaml
on:

# Trigger the workflow on push or pull request,

# but only for the master branch

push:

branches:

- master

pull_request:

branches:

- master

# Also trigger on page_build, as well as release created events

page_build:

release:

types: # This configuration does not affect the page_build event above

- created
````

````

详细文档请参考: 触发事件


## jobs

`jobs`可以包含一个或多个 `job` ，如:

```yaml
jobs:

my_first_job:

name: My first job

my_second_job:

name: My second job
````

如果多个`job` 之间存在依赖关系，那么你可能需要使用 `needs` :

```yaml
jobs:

job1:

job2:

needs: job1

job3:

needs: [job1, job2]
```

这里的`needs`声明了`job2` 必须等待 `job1` 成功完成，`job3`必须等待 `job1` 和 `job2`依次成功完成

每个任务默认超时时间最长为 `360`分钟，你可以通过 `timeout-minutes` 进行配置:

```yaml
jobs:
	job1:
		timeout-minutes:
```

## runs-on & strategy

`runs-on` 指定了任务的 `runner` 即执行环境，`runner` 分两种：`GitHub-hosted runner` 和 `self-hosted runner`

所谓的 `self-hosted runner` 就是用你自己的机器，但是需要 `GitHub` 能进行访问并给与其所需的机器权限，这个不在本文描述范围内，有兴趣可参考 `self-hosted runner`

`GitHub-hosted runner` 其实就是 `GitHub` 提供的虚拟环境，目前有以下四种:

1. `windows-latest : Windows Server 2019`
2. `ubuntu-latest`或 `ubuntu-18.04`
3. `ubuntu-16.04` : `Ubuntu 16.04`
4. `macos-latest` : `macOS Catalina 10.15`

比较常见的:

```yaml
runs-on:ubuntu-latest
```

## runs-on 多环境

有时候我们常常需要对多个操作系统、多个平台、多个编程语言版本进行测试，为此我们可以配置一个构建矩阵

例如：

```yaml
runs-on: ${{ matrix.os }}

strategy:

matrix:

os: [ubuntu-16.04, ubuntu-18.04]

node: [6, 8, 10]
```

示例中配置了两种`os`操作系统和三种 `node`版本即总共六种情况的构建矩阵，{% raw %} `${{matrix.os}}` {% endraw %}是一个上下文参数

`strategy` 策略，包括：

1. `matrix`: 构建矩阵
2. `fail-fast` : 默认为`true` ，即一旦某个矩阵任务失败则立即取消所有还在进行中的任务
3. `max-paraller` : 可同时执行的最大并发数，默认情况下 `GitHub` 会动态调整

示例：

```yaml
runs-on: ${{ matrix.os }}

strategy:

matrix:

os: [macos-latest, windows-latest, ubuntu-18.04]

node: [4, 6, 8, 10]

include:

# includes a new variable of npm with a value of 2 for the matrix leg matching the os and version

- os: windows-latest

node: 4

npm: 2
```

`include`声明了 `os` 为 `windows-latest` 时，增加一个 `node`和`npm`分别使用特定的版本的矩阵环境

与`include` 相反的就是`exclude` ：

```yaml
runs-on: ${{ matrix.os }}

strategy:

matrix:

os: [macos-latest, windows-latest, ubuntu-18.04]

node: [4, 6, 8, 10]

exclude:

# excludes node 4 on macOS

- os: macos-latest

node: 4
```

`exclude` 用来删除特定的配置项，比如这里当`os` 为 `macos-latest`，将 `node`为 4 的版本从构建矩阵中移除

## steps

`steps` 的通用格式类似于：

```yaml
steps:

- name: <step_name>

uses: <action>

with:

<parameter_name>: <parameter_value>

id: <step_id>

continue-on-error: true


- name: <step_name>

timeout-minutes:

run: <commands>
```

每个 `step` 步骤可以有:

1. `id` : 每个步骤的唯一标识符
2. `name` : 步骤的名称
3. `uses` : 使用哪个`action`
4. `run`: 执行哪些指令
5. `with`: 指定某个`action` 可能需要输入的参数
6. `continue-on-error` : 设置为 `true` 允许此步骤失败`job` 仍然通过
7. `timeout-minutes : step` 的超时时间

## action

`action` 动作通常是可以通用的，这意味着你可以直接使用别人定义好的`action`

## checkout action

`checkout action` 是一个标准动作，当以下情况时必须且需要率先使用:

1. `workflow` 需要项目库的代码副本，比如构建、测试、或持续集成这些操作
2. `workflow` 中至少有一个 `action`是在同一个项目库下定义的

使用示例：

```yaml
- users:action/checkout@v1
```

如果你只想浅克隆你的库，或者只复制最新的版本，你可以在 `with`中使用`fetch-depth`声明，例如:

```yaml
- user:action/checkout@v1
  with:
  	fetch-depth:1
```

## 引用 action

1. 官方`action`标准库: github.com/actions
2. 社区库:`marketplace`

## 引用公有库中的 action

引用 `action` 的格式是`{owner}/{repo}@{ref}`或 `{owner}/{repo}/{path}@{ref}`，例如上例的中`actions/checkout@v1`，你还可以使用标准库中的其它 `action`，如设置 `node` 版本:

```yaml
jobs:

my_first_job:

name: My Job Name

steps:
  - uses: actions/setup-node@v1

with:

node-version: 10.x
```

## 引用同一个库中的 action

引用格式：`{owner}/{repo}@{ref}`或 `./path/to/dir`

例如项目文件结构为：

```yaml
-- hello-world (repository)

|__ .github

└── workflows

└── my-first-workflow.yml

└── actions

|__ hello-world-action

└── action.yml
```

当你想要在`workflow` 中引用自己的`action` 时可以：

```yaml
jobs:

build:

runs-on: ubuntu-latest

steps:
  # This step checks out a copy of your repository.

  - uses: actions/checkout@v1

  # This step references the directory that contains the action.

  - uses: ./.github/actions/hello-world-action
```

## 引用 Docker Hub 上的 container

如果某个 `action` 定义在了一个`docker container image` 中且推送到了`Docker Hub` 上，你也可以引入它，格式是`docker://{image}:{tag}` ，示例：

```yaml
jobs:

my_first_job:

steps:
  - name: My first step

uses: docker://alpine:3.8
```

更多信息参考:`Docker-image.yml workflow` 和` Creating a Docker container ``action `

## 构建 actions

请参考：`building-actions`

## env

环境变量可以配置在以下地方:

1. `env`
2. `jobs.<job_id>.env`
3. `jobs.<job_id>.steps.env`

示例：

```yaml
env:

NODE_ENV: dev


jobs:

job1:

env:

NODE_ENV: test


steps:

- name:

env:

NODE_ENV: prod
```

如果重复，优先使用最近的那个

## if & context

你可以在 `job`和`step`中使用`if`条件语句，只有满足条件时才执行具体的`job` 或 `step` :

1. `jobs.<job_id>.if`
2. `jobs.<job_id>.steps.if`

任务状态检查函数:

3. `success()` : 当上一步执行成功时返回 `true`
4. `always()` : 总是返回 `true`
5. `cancelled()` : 当 `workflow`被取消时返回 `true`
6. `failure()` : 当上一步执行失败时返回 `true`

例如：

```yaml
steps:

- name: step1

if: always()


- name: step2

if: success()


- name: step3

if: failure()
```

意思就是 `step1`总是执行，`step2` 需要上一步执行成功才执行，`step3` 只有当上一步执行失败才执行

```yaml
${{<expression>}}
```

上下文和表达式: `${{<expression>}}`

有时候我们需要与第三方平台进行交互，这时候通常需要配置一个`token`，但是显然这个 `token` 不可能明文使用，这种个情况下我们要做的就是：

1. 在具体 `repository` 库`Settings` 的 `Secrets` 中添加一个密钥，如 `SOMEONE_TOKEN`

{% note warning %} 注：关于如何获取 github 或者其他平台的密钥及授权不是本文重点，大家可以自行百度 {% endnote %}

2. 然后在`workflow`中就可以通过 `${{secrets.SOMEONE_TOKEN}}` 将 `token`安全地传递给环境变量

```yaml
steps:
  - name: My first action

env:

SOMEONE_TOKEN: ${{ secrets.SOMEONE_TOKEN }}
```

这里的`secrets` 就是一个上下文，除此之外还有很多，比如：

1. `github.event_name` : 触发`workflow`的事件名称
2. `job.status` : 当前`job` 的状态，如 `success, failure, or cancelled`
3. `steps.<step id>.outputs` : 某个 `action` 的输出
4. `runner.os : runner`的操作系统如 `Linux, Windows, or macOS`

这里只列举了少数几个

另外在`if` 中使用时不需要 `${{}}` 符号，比如：

```yaml
steps:
  - name: My first step

if: github.event_name == 'pull_request' && github.event.action == 'unassigned'

run: echo This event is a pull request that had an assignee removed.
```

上下文和表达式详细信息请参考：`contexts-and-expression`

看到这里你应该对示例文件有了一定的理解，并且想自己去实验一下了，那就去 actions 页面找到官方示例去体验一下吧

但对于为什么要备份`package.json`我想大家还是心存疑惑，那我们看看具体内容吧

```json
{
  "name": "hexo-site",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "build": "hexo generate",
    "clean": "hexo clean",
    "deploy": "hexo deploy",
    "server": "hexo server"
  },
  "hexo": {
    "version": "5.2.0"
  },
  "dependencies": {
    "cheerio": "^1.0.0-rc.3",
    "gulp-htmlmin": "^5.0.1",
    "hexo": "^5.2.0",
    "hexo-baidupush": "^1.0.2",
    "hexo-charts": "^1.0.3",
    "hexo-cli": "^4.2.0",
    "hexo-deployer-git": "^2.1.0",
    "hexo-generator-archive": "^1.0.0",
    "hexo-generator-baidu-sitemap": "^0.1.9",
    "hexo-generator-category": "^1.0.0",
    "hexo-generator-feed": "^3.0.0",
    "hexo-generator-index": "^2.0.0",
    "hexo-generator-search": "^2.4.1",
    "hexo-generator-sitemap": "^2.1.0",
    "hexo-generator-tag": "^1.0.0",
    "hexo-render-pug": "^2.1.4",
    "hexo-renderer-ejs": "^1.0.0",
    "hexo-renderer-marked": "^3.3.0",
    "hexo-renderer-pug": "^1.0.0",
    "hexo-renderer-stylus": "^2.0.1",
    "hexo-server": "^2.0.0",
    "hexo-tag-aplayer": "^3.0.4",
    "hexo-wordcount": "^6.0.1",
    "pump": "^3.0.0",
    "terser": "^4.8.0"
  },
  "devDependencies": {
    "gulp": "4.0.2",
    "gulp-cli": "2.3.0",
    "gulp-clean-css": "^4.3.0",
    "gulp-htmlclean": "^2.7.22",
    "gulp-uglify": "^3.0.2"
  }
}
```

我们看到里面包含了 npm 脚本和一些依赖（包含 dev 版本的），有了这个文件我们只需执行 npm i(install)即可自动安装所以所需依赖插件，而不用一个一个去敲一堆命令啦，理解了这个简单的例子，大家在部署其他项目时也许能更得心应手吧

今天的分享就到这里结束了，本文还有很多纰漏还请读者指出，后续将更正，下篇文章见
