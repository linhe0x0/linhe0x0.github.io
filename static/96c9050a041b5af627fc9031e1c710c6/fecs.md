---
title: "前端代码风格检查套件 FECS"
category: 技术
date: "2015-12-25"
---

> All code in any code-base should look like a single person typed it, no matter how many people contributed. — idiomatic.js
>
> 在任一个代码库中，不管是多少人协同开发，所有的代码都应该看起来像是一个人写的。- idiomatic.js

This means strictly enforcing these agreed upon guidelines at all times.

今天要讲的不是代码规范，关于代码规范网上已经有了非常好的实践和各大公司公开的实践指南，大家可自行查询。 例如: [code-guide chinese](http://zoomzhao.github.io/code-guide/).

然而，有了规范是一回事，执行起来又是一回事。今天要介绍的就是一款按照指定风格检测代码是否符合规范的工具，通过工具的自动检测，以确保每一行代码都符合规范。

## FECS 是什么？

[fecs](http://fecs.baidu.com/) 是以百度前端代码规范为目标的基于 Node.js 的前端代码风格检测工具，套件内包括了 `htmlcs、csshint、lesslint` 和 `jformatter` 等工具。

因此，`fecs` 不仅能检查 `HTML/CSS/LESS/JavaScript` 代码的规范问题，而且还能修复代码的规范问题。

## FECS 能干什么？

### fecs check

首先，主要功能就是代码格式的检查，当然了呢，因为是最初是供于百度内部使用的工具，自然就是以 [百度前端代码规范](https://github.com/ecomfe/spec/) 为首要目标，好在该规范第一开源，第二还不错，因此可以直接使用。

当然了，如果你不喜欢其中的某些规则，`FECS` 也是支持配置文件设置规则的方式的，具体的在下文说明。

需要说明的是，`FECS` 目前只支持 `HTML/CSS/LESS/JavaScript` 四种文件和语法的检测。

#### Javascript

`Javascript` 方面 `FECS` 采用了 `eslint` 检测引擎，因此你在自定义规则的时候可以参考 [esling](http://esling.org/) 的文档进行相关配置。`FECS` 只是在 `eslint` 基础之上针对百度的代码规范作了新的规则实现或调整。详细内容见 [FECS 自有规则](https://github.com/ecomfe/fecs/wiki/FECSRules)

#### CSS/LESS/HTML

CSS 的 linter 是使用了内部优化过的 `csshint`。LESS 和 HTML 方面则分别使用了 `lesslint` 和 `htmlcs`。

## FECS 的安装及其使用

### 安装

安装 `FECS` 需要依赖 `node` `npm` 环境支持，执行以下命令即可安装:

```
$ [sudo] npm install fecs -g
```

### 使用

使用方式可使用以下命令查看:

```
$ fecs --help
$ fecs check --help
$ fecs format --help
```

具体的命令参数？哎呀，官方已经写的够详细的了，还是看官方文档吧: [FECS 命令参数](https://github.com/ecomfe/fecs/wiki/CLI)

## 自定义配置

`FECS` 支持通过配置文件的方式指定特定的规则。

配置文件的支持来自 `manis`，支持使用 `.fecsrc` 或 `package.json`，但以第一个找到的为准。配置文件 `.fecsrc` 大体是这个样子的:

```
{
  "files": [],

  "eslint": {...},

  "csshint": {...},

  "htmlcs": {...},

  "csscomb": {...}
  ...
}
```

比如说他们的[JavaScript 编码规范](https://github.com/ecomfe/spec/blob/master/javascript-style-guide.md) 中关于换行中有这样一条 [对于 if...else...try...catch...finally 等语句，推荐使用在 } 号后添加一个换行的风格，使代码层次结构更清晰，阅读性更好](https://github.com/ecomfe/spec/blob/master/javascript-style-guide.md#建议-对于-ifelsetrycatchfinally-等语句推荐使用在--号后添加一个换行-的风格使代码层次结构更清晰阅读性更好)，这一条我就很不喜欢嘛，那我可以这样配置:

```
{
  "eslint": {
    "rules": {
      "brace-style": [2, "1tbs", {}]
    }
  }
}
```

这样配置之后再进行检测，就能愉快的按照下面这种写法愉快的 coding 了。

```
if (condition) {
  // some statements;
} else {
  // some statements;
}
```

## 多工具支持

详情支持列表请参考官方文档 [工具支持](https://github.com/ecomfe/fecs#工具支持)。

嗯。文档依旧写的很完善，基本上已经没什么好补充的了。

在这里我有一个小提示，就是工具对 `atom` 编辑器的支持相对于对 `sublime` 的支持来说要优秀很多， 包括检测速度呀，错误提示呀，`atom` 都略称一筹，这取决于 `atom` 优秀的插件机制。并且我在 `sublime`下面使用的时候发现了一个 bug，就是错误提示会显示为特殊编码导致无法以中文显示。解决方案呢，在这里[https://github.com/leeight/Baidu-FE-Code-Style/issues/6](https://github.com/leeight/Baidu-FE-Code-Style/issues/6)，不过感觉略麻烦的样子。

## Tips:

`FECS` 的错误报告默认为英文格式，由各 linter 直接提供。`FECS` 根据百度前端代码规范，作了一次影射转换，通过指定 reporter 为 baidu 可以看到中文的报告输出效果，对于某些比较抽象的描述，会同时在括号内提供英文原文补充说明。

例如，你可以这样用:

```
fecs check --reporter=baidu
```

或者，更直接一点，直接添加一个 `alias`，使其在执行 `fecs check` 命令时默认为中文输出。

```
alias fecs='fecs --reporter=baidu'
```

## 相关链接:

* [FECS 官网](http://fecs.baidu.com/)
* [FECS WIKI](http://github.com/ecomfe/fecs/wiki)
* [FECS Github](http://github.com/ecomfe/fecs)
