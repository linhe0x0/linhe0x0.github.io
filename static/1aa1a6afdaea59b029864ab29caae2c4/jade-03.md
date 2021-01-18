---
title: "前端开发模板引擎 -- Jade之数据的动态传递和流程控制"
category: 技术
tags:
  - jade
date: "2015-08-20"
---

前面介绍了一些 `Jade` 的简单用法，这篇文章为大家讲一下 `Jade` 中如何进行数据的动态传递和流程控制，干货来咯~

## 1、`Jade` 中简单的变量定义和使用

我们在写 `html` 静态页面的过程中，免不了会碰到一些需要动态注入的地方，一般的写法就略显麻烦，那么我们有了 `Jade` 之后呢，不啰嗦了，我们从最简单的例子开始：

```
doctype html
html
  head
    title Hello,World.
  body
    - var title = 'sqrtthree.com';
    p welcome to #{title}
```

我想我们大概能够想象出编译结果：

```
<!DOCTYPE html>
<html>
  <head>
    <title>Hello,World.</title>
  </head>
  <body>
    <p>welcome to sqrtthree.com</p>
  </body>
</html>
```

从上面的代码中我们可以看出，在 `Jade` 中进行数据传递非常简单：

1. 通过`-` + `空格`开始，作为标记在 `Jade` 中定义变量
2. 通过 `#{变量名}` 进行输出和调用即可.

那要是我们就只是想输出 `#{}`的时候该怎么办呢？转义咯~

```
p welcome to \#{title}	// => <p>welcome to #{title}</p>
```

另外，在 `Jade` 里面我们就可以通过这种方式使用 `js`的语法了，比如这样：(为了看着方便，我就直接在后面写出关键行的编译结果了)

```
- var title = 'sqrtthree.com';
p welcome to #{title.toUpperCase()}		// => <p>welcome to SQRTTHREE.COM</p>
```

```
- var title = 'sqrtthree.com';
p welcome to #{title.charAt(0)}		// => <p>welcome to s</p>
```

```
- var title = 'sqrtthree.com';
p welcome to #{title.substring(0,4)}	// => <p>welcome to sqrt</p>
```

怎么样？有没有觉得很简单呢。

但是呢，我们在工作中是很少直接在文件中这样直接定义变量值的，通常都是在后台读取到值然后设置到页面中，那我们现在没有后台该怎么办呢？还记得第一篇文章中我们说过的 `Jade` 命令行工具么？我们可以在 `Jade` 为我们提供的命令行工具中直接传递数据，话不多说，继续上代码：

我们通过如下的命令编译下面的 `Jade` 文件，为了方便查看，就只显示部分的编译结果

```
jade test.jade  -P --obj '{"title": "sqrtthree"}'
```

`Jade` 文件如下：

```
doctype html
html
  head
    title welcome
  body
    p welcome to #{title}		// => <p>welcome to sqrtthree</p>
```

那么问题就来了，如果我们在命令行中和文件中定义了相同名字的变量，那究竟是显示哪一个变量的值呢？

```
doctype html
html
  head
    title welcome
  body
    - var title = 'sqrtthree.com'
    p welcome to #{title}		// => <p>welcome to sqrtthree.com</p>
```

根据编译结果显示，在文件中定义的值把之前外部传入的值替换掉了。

其实上面的方式中有一个坑不知道大家发现没有，就是通常我们传入数据的时候都不会只传一个的，那如果需要传入很多的数据的话，怎么还能够这么写呢？反正换我我是绝逼会崩溃的。

`Jade` 也支持传入 `json` 文件的方式进行数据传递的, 例如我们在项目里新建一个 `data.json` 文件，格式如下：

```
{
  "title": "根号三的博客",
  "href": "sqrtthree.com",
  "cont": "我可耻，我打了个硬广。^_^"
}
```

这里我们就要在命令行里执行另一个参数的命令了

```
jade test.jade  -P -O data.json		// 注意，O 为英文大写
```

页面和编译结果分别为:

```
doctype html
html
  head
    title welcome #{title}	// => <title>welcome 根号三的博客</title>
  body
    a(href='#{href}', title='#{title}') #{href}		// => <a href="sqrtthree.com" title="根号三的博客">sqrtthree.com</a>
    p #{cont}		// => <p>我可耻，我打了个硬广。^_^</p>
```

## 2、`Jade` 中的注释

变量一多，我们就难免会忘记他们的含义，为了便于后期维护，我们的好习惯是给他们都加上注释方便理解。

单行注释和 JavaScript 里是一样的，通过 `//` 来开始，并且必须为单独一行哟~

```
// just some example		// => <!-- just some example-->
p just some example		// => <p>just some example</p>
```

`Jade` 同样支持不输出的注释，只需要加一个横线 `-` 就好了

```
//- just some example
p just some example		// => <p>just some example</p>
```

如果我们需要多行注释的话，使用下面的块注释也是极好的

```
.box
  //
    h1 this is a demo.
    p this is a paragraph.
```

编译结果是这样的：

```
<div class="box">
  <!--
  h1 this is a demo.
  p this is a paragraph.
  -->
</div>
```

## 3、流程控制

有了变量，我们就可以做很多事情。比如像下面这样：

```
- var data = {"name": "sqrtthree","age": 20};

- for ( var attr in data)
  p= 'my ' + attr + ' is ' + data[attr]ighlight html %}
```

那么结果是什么样的呢？

```
<p>my name is sqrtthree</p>
<p>my age is 20</p>
```

咦，看着怎么这么熟悉呢？没错，就是 `js` 中遍历 `json`对象的操作。当然了，下面这种方式也是可以的，结果和上面是一样的

```
- var data = {"name": "sqrtthree","age": 20};

- for ( var attr in data)
  //- p= 'my ' + attr + ' is ' + data[attr]
  p my #{attr} is #{data[attr]}
```

当然了，除了 `for` 之外，`Jade` 还提供了另外一种语法糖

```
- var data = {"name": "sqrtthree","age": 20};

- each value, keys in data
  //- p=keys + ' : ' + value
  p #{keys} : #{value}
```

说完了 `json` 对象，我们来说一说他的好搭档 - 数组

```
- var skills = ['html', 'css', 'javascript', 'nodejs'];

ul
  - each skill in skills
    li #{skill}
```

编译结果是这个样子的

```
<ul>
  <li>html</li>
  <li>css</li>
  <li>javascript</li>
  <li>nodejs</li>
</ul>
```

什么？太简单了？那我们来点复杂的

```
- var data = [{id: 1,skills: ['html', 'css']},{id: 2,skills: ['javascript','nodejs']}];

dl
  - each list in data
    dt #{list.id}
    - each item in list.skills
      dd #{item}
```

结果是这样的

```
<dl>
  <dt>1</dt>
  <dd>html</dd>
  <dd>css</dd>
  <dt>2</dt>
  <dd>javascript</dd>
  <dd>nodejs</dd>
</dl>
```

说完了 `for` & `each` 语句，我们还有 `while` 语句呢，比如我们要输出 5 个 `li`，我们可以这么写：

```
- var n = 0;

ul
  while n < 5
    li=n++
```

结果很明显：

```
<ul>
  <li>0</li>
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
</ul>
```

## 4、条件判断

关于`if else`，我们可以这样用

```
- var onOff = true;
- var data = ['html','css','javascript']

ul
  if onOff
    -each skills in data
      li=skills
  else
    li none
```

当 `onOff` 变量为真时，结果为

```
<ul>
  <li>html</li>
  <li>css</li>
  <li>javascript</li>
</ul>
```

当 `onOff` 变量为假时，结果为

```
<ul>
  <li>none</li>
</ul>
```

又见语法糖，`Jade` 默认是支持 `unless` 的，那么问题来了，`unless` 究竟是个什么东东呢？

```
- var onOff = true;
- var data = ['html','css','javascript']

ul
  unless !onOff
    -each skills in data
      li=skills
  else
    li none
```

从上面的代码中，我们可以看出，`unless` 实际上就是 `if ( !(expr) )` 的等价方式.

下面我们谈谈 `case` & `when` 的用法，编译结果我就不写了，大家可以自行测试。

```
- var data = 'jser';

case data
  when 'jser'
    p Hello, jser.
  when 'weber'
    p Hello, weber.
  default
    p Hello, #{data}
```
