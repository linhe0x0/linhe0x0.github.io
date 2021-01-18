---
title: "前端开发模板引擎 -- Jade之标签的基本写法"
description: "写一些我所知道的 jade 语法"
category: 技术
tags:
  - jade
date: "2015-08-20"
---

## 1、文档声明

我们在开始写一个 `html` 页面的时候，首先要写上 `DOCTYPE` 文档声明的，现在通常情况下我们都是采用 `HTML5` 的文档声明方式，那么在 `jade` 里面我们应该怎么写呢？

在 `jade` 里面编写文档声明有 2 种方式：

1. 我们可以直接在 `jade` 文件里面写 `doctype html` 即可
2. `jade` 为我们提供了一个简单的写法，`!!! 5` (不过好像 `jade` 在升级之后的新版本中不推荐使用此方法了)

当然，`jade` 还默认支持其他类型的文档声明，只需要使用 `doctype` 跟上下面的选项即可。`jade` 默认支持的有:

```
var doctypes = exports.doctypes = {
    '5': '<!DOCTYPE html>',
    'xml': '<?xml version="1.0" encoding="utf-8" ?>',
    'default': '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">',
    'transitional': '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">',
    'strict': '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">',
    'frameset': '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">',
    '1.1': '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">',
    'basic': '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML Basic 1.1//EN" "http://www.w3.org/TR/xhtml-basic/xhtml-basic11.dtd">',
    'mobile': '<!DOCTYPE html PUBLIC "-//WAPFORUM//DTD XHTML Mobile 1.2//EN" "http://www.openmobilealliance.org/tech/DTD/xhtml-mobile12.dtd">'
};
```

`doctype` 对大小写是不敏感的, 所以下面两个是一样的效果:

```
doctype Default
doctype default
```

例如：如果我们要想写 `XHTML 1.0 Strict` 文档声明，则可以这样写：

```
doctype strict
```

编译结果如下：

```
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
```

## 2、标签

`jade` 中的标签的写法非常的简单，就是一个单词。

```
doctype html
html
  head
    title
  body
```

以上代码会被编译成:

```
<!DOCTYPE html>
<html>
  <head>
    <title></title>
  </head>
  <body></body>
</html>
```

**`jade` 是以严格的缩进来区分标签的开始和结束的，默认为 2 个空格表示缩进。**

如果我们要写一个标签并且带有内容，比如说要写一个标题，我们只需要在标签单词后面加一个空格，然后跟上内容即可。

```
h1 this is a title.
p this is a paragraph.
```

编译结果为：

```
<h1>this is a title.</h1>
<p>this is a paragraph.</p>
```

有的时候，我们会需要输出一些特殊排版格式的文本或者是为了提高代码的阅读性，需要显示出如下的效果：

```
<p>
  1. 001
  2. 002
  3. 003
  4. 004
</p>
```

那么我们在 jade 中应该怎么写呢，这里 jade 给我们提供了两种方式，第一种是在每一行前面加上一个 `|` 和`空格`：

```
p
  | 1. 001
  | 2. 002
  | 3. 003
  | 4. 004
```

第二种方法是：在标签名后面紧跟一个 `.` 号。则此标签下面的内容会被 `jade` 解析为一个代码段：

```
p.
  1. 001
  2. 002
  3. 003
  4. 004
```

这下有的同学就傻傻分不清了，这两种方式到底有什么区别呢？这里我们就不得不说到标签混排，如果我们有这样一个需求，在上面的代码中 `1` 的后面需要加一个 `strong` 标签。

首先我们说第一种情况下，我们的写法：

```
p
  | 1. 001
  strong aaa
  | 2. 002
  | 3. 003
  | 4. 004
```

如果是第二种写法的话，我们就需要这样写：

```
p.
  1. 001
  <strong>aaa</strong>
  2. 002
  3. 003
  4. 004
```

编译结果如下：

```
<p>
  1. 001
  <strong>aaa</strong>
  2. 002
  3. 003
  4. 004
</p>
```

## 3、标签的属性和属性值

`h1` `p` 等等这些标签，我们通常都会给他们写上`id` & `class`属性的，那么这在 `jade` 中应该怎么写呢？和 `zen coding` 的语法一样，我们只需要这样写：

```
h1#id.class this is a title.
p#j-text.text this is a paragraph.
```

编译结果为：

```
<h1 id="id" class="class">this is a title.</h1>
<p id="j-text" class="text">this is a paragraph.</p>
```

等等，那我要是想添加多个 `class` 怎么办呢？这样办：

```
h1#id.class1.class2.class3 this is a title.
p#j-text.text this is a paragraph.
```

编译结果为：

```
<h1 id="id" class="class1 class2 class3">this is a title.</h1>
<p id="j-text" class="text">this is a paragraph.</p>
```

什么？写 `div` 写烦了？那就不写咯。

```
#id.class
#id.class1.class2 this is a div without tags.
```

编译结果为：

```
<div id="id" class="class"></div>
<div id="id" class="class1 class2">this is a div without tags.</div>
```

**这里要说明一下，在 `jade` 的语法里面，只有 `div` 标签能够省略不写.**

说完了 `id` 和 `class`，我们再来说一下标签其他的属性应该怎么添加。`jade` 里添加其他属性和值的语法也和 `zen coding` 类似，我们需要在标签后面加上小括号`()`，然后按照`(属性名=属性值)`的格式写就好了，如果有多个属性，中间以逗号进行分割。

比如上面的 id 和 class 的写法我们就可以改写成：

```
h1(id="id", class="class") this is a title.
p(id="j-text", class="text") this is a paragraph.
```

结果是一样的：

```
<h1 id="id" class="class">this is a title.</h1>
<p id="j-text" class="text">this is a paragraph.</p>
```

说来说去还是这两个属性，烦了？那我们换一个吧：

```
a(herf="/index.html", title="this is a link.", target="_blank", data-uid="1000") index.html
```

编译结果为：

```
<a herf="/index.html" title="this is a link." target="_blank" data-uid="1000">index.html</a>
```

那么问题就来了，如果我们要写一个单属性应该怎么写？比如给表单元素添加 `checked`属性：

```
input(type="checkbox", name="all", checked, value="全选")
```

编译结果为：

```
<input type="checkbox" name="all" checked="checked" value="全选"/>
```
