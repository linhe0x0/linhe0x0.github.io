---
title: "前端开发模板引擎 -- Jade之开篇"
description: "写一些我所知道的 jade 语法"
category: 技术
tags:
  - jade
date: "2015-08-20"
---

随着 web 发展，前端应用变得越来越复杂，基于后端的 `javascript(Node.js)` 也开始崭露头角，此时 `javascript` 被寄予了更大的期望，与此同时 `javascript MVC` 思想也开始流行起来。为了使用户界面与业务数据（内容）分离，就产生了『模板引擎』这个概念。

说的简单点，模板引擎就是一个字符串中有几个变量待定，通过模板引擎函数把数据动态的塞进去。

今天我们就来聊一聊 `Jade` 的使用方法和语法说明。`Jade`官网：[jade-lang.com/](http://jade-lang.com/)

<!--more-->

## Jade 的使用和命令行工具构建方法

Jade 的使用需要依赖 `Node`环境，通过 `npm` 包进行安装 `Jade` 命令行工具，安装成功之后就可以新建一个文件，文件后缀名为 `*.jade`。我们就可以尽情的使用 `jade` 的语法咯，写完之后只需要通过命令行工具进行编译即可编译为我们平时使用的 `html` 静态文件。

### 安装方法

1.首先确定是否安装有 `Node` 环境和 `npm` 工具，查看方法如下

```
// 在命令行工具中执行如下代码：
node -v
=> v0.10.35
npm -v
=> 1.4.28
// 如果成功返回版本号信息即为安装成功。
```

2.通过 `npm` 全局安装 `Jade` 命令行工具

```
npm install jade -g

// mac用户可能需要管理员权限，使用如下命令
sudo npm install jade -g
```

3.创建 `*.Jade` 文件，开始任务。

4.通过使用 `Jade` 命令行工具将 `jade` 文件编译为 `html` 文件

### Jade 命令行工具使用方法

我们可以通过 `jade --help` 查看 `Jade` 命令行工具的使用参数

```
jade --help

Usage: jade [options] [dir|file ...]

  Options:

    -h, --help         output usage information / 输出使用信息
    -V, --version      output the version number / 输出版本号信息
    -O, --obj <str>    javascript options object / 传输到 jade 文件中的数据对象
    -o, --out <dir>    output the compiled html to <dir> / 输出编译后的 HTML 到 <dir>
    -p, --path <path>  filename used to resolve includes / 在处理 stdio 时，查找包含文件时的查找路径
    -P, --pretty       compile pretty html output / 格式化编译 html 文件
    -c, --client       compile function for client-side runtime.js / 编译浏览器端可用的 runtime.js
    -n, --name <str>   The name of the compiled template (requires --client) / 编译模板的名字
    -D, --no-debug     compile without debugging (smaller functions) / 关闭编译的调试选项(函数会更小)
    -w, --watch        watch files for changes and automatically re-render / 监听文件改变并自动刷新编译结果
    --name-after-file  Name the template after the last section of the file path (requires --client and overriden by --name)
    --doctype <str>    Specify the doctype on the command line (useful if it is not specified by the template) / 在命令行中指定文档类型(如果在模板中没有被指定)

  Examples:

    # 编译整个目录
    $ jade templates

    # 生成 {foo,bar}.html
    $ jade {foo,bar}.jade

    # 在标准IO下使用jade
    $ jade < my.jade > my.html

    # 在标准IO下使用jade
    $ echo 'h1 Jade!' | jade

    # foo, bar 目录渲染到 /tmp
    $ jade foo bar --out /tmp
```

实例：

```
// 比如说我们需要编译index.jade文件，默认编译到同文件夹下的同名html 文件中
jade index.jade

// 如果我们要格式化输出 index.html 文件，只需要添加 -P 参数即可
jade -P index.jade

// 如果我们要实现监听和自动编译，需要使用 -w 参数
jade -P -w index.jade
```
