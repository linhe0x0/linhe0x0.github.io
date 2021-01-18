---
title: "GitBook 简明教程"
category: "技术"
tags:
  - "GitBook"
  - "工具"
date: "2016-02-23"
---

> Modern book format and toolchain using Git and Markdown

这是 GitBook 项目主页上对 GitBook 的定义。

GitBook 是一个命令行工具。通过它，你能够使用 Git 和 Markdown 来编排书本。并且通过工具可以自动生成相应的 HTML、PDF 和 epub 格式的文件。

总之，就是好用，好使，加好看。

<!-- more -->

刚好近日准备通过 GitBook 来写一些教程，这里就先简明介绍一下它的使用。嗯？我写的什么教程？ 哈哈，就不告诉你，等写好了再说 <(￣ ▽ ￣)> 哇哈哈…

## 安装

因为 GitBook 是一个基于 [Node](http://nodejs.org/) 开发的命令行工具。因此需要您自行配置 [Node](http://nodejs.org/) 和 [npm](https://www.npmjs.com/package/npm) 环境。如果你已经安装好这些环境之后，GitBook 的安装只需要一步就能完成！

```
$ npm install -g gitbook-cli
```

## 使用

GitBook 的用法非常简单，老规矩，先看一下我们都有哪些命令可以使用:

```
$ gitbook help

  build [book] [output] 	 build a book
    --format 	 Format to build to (Default is website; Values are website, json, ebook)
    --log 	 Minimum log level to display (Default is info; Values are debug, info, warn, error, disabled)

  pdf [book] [output] 	 build a book to pdf
    --log 	 Minimum log level to display (Default is info; Values are debug, info, warn, error, disabled)

  epub [book] [output] 	 build a book to epub
    --log 	 Minimum log level to display (Default is info; Values are debug, info, warn, error, disabled)

  mobi [book] [output] 	 build a book to mobi
    --log 	 Minimum log level to display (Default is info; Values are debug, info, warn, error, disabled)

  serve [book] 	 Build then serve a gitbook from a directory
    --port 	 Port for server to listen on (Default is 4000)
    --lrport 	 Port for livereload server to listen on (Default is 35729)
    --watch 	 Enable/disable file watcher (Default is true)
    --format 	 Format to build to (Default is website; Values are website, json, ebook)
    --log 	 Minimum log level to display (Default is info; Values are debug, info, warn, error, disabled)

  install [book] 	 install plugins dependencies

  init [directory] 	 create files and folders based on contents of SUMMARY.md
```

实际上我们最常用的命令只有两个:

* `gitbook init`: 初始化书籍目录
* `gitbook serve`: 在编写书籍时启动一个服务器，自动编译&更新内容，并在浏览器中预览

## 使用

#### gitbook init

首先，通过终端(PC 下可使用命令提示符)进入到你想要书写内容的目录，然后执行 `gitbook init` 命令，之后目录中会自动生成 `README.md` 和 `SUMMARY.md` 两个文件。

这两个文件在 GitBook 项目中是必须存在的，其中 `README.md` 是对书籍的简单介绍，`SUMMARY.md` 是对书籍目录的描述，并且 GitBook 会通过该文件中的目录描述自动生成对应的目录和文件。

其中，`SUMMARY.md` 文件中内容的格式是这样的:

```
* [Chapter1](chapter1/README.md)
  * [Section1.1](chapter1/section1.1.md)
  * [Section1.2](chapter1/section1.2.md)
* [Chapter2](chapter2/README.md)
```

当你修改了 `SUMMARY.md` 文件中的内容后，你可以再次使用 `gitbook init` 来自动生成对应的目录和文件。

#### Multi-Languages

如果你要写的书籍是多语言版，你只需要创建一个 `LANGS.md` 文件，然后编写配置内容即可:

```
* [English](en/)
* [French](fr/)
* [Español](es/)
```

#### gitbook serve

书籍目录结构创建完成以后，我们就可以使用 `gitbook serve` 来编译和预览书籍了：

`gitbook serve` 命令实际上会首先调用 `gitbook build` 编译书籍，完成以后会打开一个 web 服务器，监听在本地的 `4000` 端口。

```
$ gitbook serve

Live reload server started on port: 35729
Press CTRL+C to quit ...

info: loading book configuration....OK
info: load plugin gitbook-plugin-highlight ....OK
info: load plugin gitbook-plugin-search ....OK
info: load plugin gitbook-plugin-sharing ....OK
info: load plugin gitbook-plugin-fontsettings ....OK
info: load plugin gitbook-plugin-livereload ....OK
info: >> 5 plugins loaded
info: start generation with website generator
info: clean website generator
info: OK
info: generation is finished

Starting server ...
Serving book on http://localhost:4000
```

之后，你就可以使用浏览器打开 `http://127.0.0.1:4000` 查看效果了。就是这么简单。

页面效果如下:

![https://camo.githubusercontent.com/c1b6c55fca8e171120ce1fd73afcee699cc2a98f/68747470733a2f2f7261772e6769746875622e636f6d2f476974626f6f6b494f2f676974626f6f6b2f6d61737465722f707265766965772e706e67](https://camo.githubusercontent.com/c1b6c55fca8e171120ce1fd73afcee699cc2a98f/68747470733a2f2f7261772e6769746875622e636f6d2f476974626f6f6b494f2f676974626f6f6b2f6d61737465722f707265766965772e706e67)

你可以尽情的使用 `Markdown` 来编写文章了，完全不需要关心样式和排版呢。

## GitBook 编辑器

如果你不喜欢使用命令行，这里也有 GitBook 可视化编辑器，[https://www.gitbook.com/editor/](https://www.gitbook.com/editor/)

## GitBook.com

[GitBook.com](https://www.gitbook.com/) 是一个围绕 GitBook 发行书籍的社区，于 2014 年初创，GitBook.com 提供免费和付费的服务，而且免费账户就可以享受诸多服务，包括：

* 1 本私有书籍
* 托管不限数量的公开书籍
* 售卖不限数量的书籍，并分享 80% 的书籍收入
* 不限数量的协作者
* 免费的在线书籍编辑器

## 其他命令

* `gitbook build`: 会生成相应的 HTML 文件供分发。
* `gitbook pdf`: 生成 PDF 文件
* `gitbook epub`: 生成 epub 文件
* `gitbook mobi`: 生成 mobi 文件

## 高级技巧

### 个性化配置

我们通过配置 `book.json` 文件来修改 `GitBook` 在编译书籍时的行为，例如：修改书籍的名称，显示效果等等。

`GitBook` 在编译书籍的时候会读取书籍源码顶层目录中的 `book.json`，`book.json` 支持的具体配置请参考[官方文档](http://help.gitbook.com/format/configuration.html)

### 安装插件

你可以通过 `gitbook install` 命令来安装一些诸如 [disqus](https://github.com/GitbookIO/plugin-disqus)、[multipart](https://github.com/citizenmatt/gitbook-plugin-multipart) 这些实用的第三方插件。
