---
title: "jQuery 3.0 终于发布啦！"
category: 技术
tags:
  - jQuery3.0
  - 译文
date: "2016-06-13"
---

jQuery 3.0 现在发布啦！这个版本从 2014 年 10 月就已经在开始开发了。我们的目标是创建一个更轻量、更快的 jQuery（带有向后兼容的思想）。我们删除了所有的兼容旧版本 IE 浏览器的解决办法，并在一些有意义的地方利用了一些较为现代的 web APIs。它是 2.x 分支的延续，但是包含了少量我们认为早该出现的改变。在一段时间内， 1.12 和 2.2 分支仍将继续获得关键性的支持补丁，但是它们不会得到任何新功能或是重大修订。jQuery 3.0 就是 jQuery 的未来。如果你需要支持 IE6-8，你可以继续使用最新的 1.12 版。

尽管版本号是 3.0，但是我们预感在升级现有的代码时并不会造成太多的麻烦。是，是有一些 “breaking changes”，这对于主版本号跳跃来说是合理的，但是我们希望这些改变并没有真正影响到很多人。

为了帮助升级，我们有一个新的 [3.0 升级指南](https://jquery.com/upgrade-guide/3.0/)，并且 [jQuery Migrate 3.0](https://github.com/jquery/jquery-migrate#migrate-older-jquery-code-to-jquery-30) 将会帮助你识别代码中的兼容性问题。您在这次变化中的反馈将对我们有非常大的帮助，所以请尝试在您现有的代码和插件中使用它吧！

你可以在 jQuery CDN 中获取到这些文件，或者直接链接他们：

[https://code.jquery.com/jquery-3.0.0.js](https://code.jquery.com/jquery-3.0.0.js)

[https://code.jquery.com/jquery-3.0.0.min.js](https://code.jquery.com/jquery-3.0.0.min.js)

你也可以从 `npm` 中得到这个版本：

```
npm install jquery@3.0.0
```

附带着，我们也发布了 `jQuery Migrate 3.0`。我们强烈建议你使用它来定位 jQuery 3.0 的重大改变而带来的任何问题。你可以在这里获取这些文件：

[https://code.jquery.com/jquery-migrate-3.0.0.js](https://code.jquery.com/jquery-migrate-3.0.0.js)

[https://code.jquery.com/jquery-migrate-3.0.0.min.js](https://code.jquery.com/jquery-migrate-3.0.0.min.js)

```
npm install jquery-migrate@3.0.0
```

有关借助 jQuery Migrate 将你的 jQuery 1.x 和 2.x 页面升级到 jQuery 3.0 的更多信息，请看 [ the jQuery Migrate 1.4.1 blog post.](http://blog.jquery.com/2016/05/19/jquery-migrate-1-4-1-released-and-the-path-to-jquery-3-0/)

#### 轻量级构建

最后，我们在这个版本里添加了一些新东西。有时你不需要 ajax, 或者你更喜欢使用一个专注于 ajax 请求的独立库。你往往使用 CSS 类作为一个简单的组合来操作的所有的网页动画。随着包含 ajax 和动画效果模块的普通版本的 jQuery，我们发布了一个排除了这些模块的 “slim” 版本。总而言之，它排除了 ajax，动画和当前过时的代码。在这关注加载性能的时代，jQuery 的大小是非常罕见的，但是 slim 版本比普通版小了近 6k （gzip 压缩字节）- 23.6k 对 30k。这些文件在 CDN 和 npm 上都是可用的：

[https://code.jquery.com/jquery-3.0.0.slim.js](https://code.jquery.com/jquery-3.0.0.slim.js)

[https://code.jquery.com/jquery-3.0.0.slim.min.js](https://code.jquery.com/jquery-3.0.0.slim.min.js)

这个构建版本是基于我们自定义的构建 API 创建的。它允许你排除或者包含任何你喜欢的模块。查看 jQuery README 文件获取更多信息。

#### 和 jQuery UI 以及 jQuery Mobile 之间的兼容性

虽然大多数的功能都能够正常工作，但是在升级的过程中 jQuery UI 和 jQuery Mobile 仍然会有一些小问题。如果你发现了一个问题，记住在下一个版本或许已经解决了，使用 jQuery Migrate 3.0 插件或许也可以修复它。期待很快发布吧。

#### 主要变化

下面是这次的新版本中重要的新功能中的亮点，改进以及 bug 修复，你可以在 [3.0 升级指南](http://jquery.com/upgrade-guide/3.0/) 中找到更多的细节。你可以在我们的 [GitHub bug tracker](https://github.com/jquery/jquery/issues?q=is%3Aissue+milestone%3A3.0.0) 中获取完整的 bug 修复列表。如果你阅读过 3.0.0-rc1 的博文，你会发现下面的特性和那篇文章中是一样的。

##### jQuery.Deferred 现在和 Promises/A+ 规范兼容

为了兼容 Promises/A+ 和 ES2015 Promises，jQuery.Deferred 对象已经更新了。[Promises/A+ Compliance Test Suite](https://github.com/promises-aplus/promises-tests) 已经检验通过了。这意味着我们需要对 .then() 方法做出一些重大改变。你可以通过使用现在不赞成使用的 .pipe() 方法来替换所有的 .then() 方法来恢复成传统的行为。

1、 在 .then() 方法中抛出一个错误现在变成了一个 rejection values。在以前，错误会向上冒泡传递，并终止执行回调函数。deferreds 依赖于所有的 defered 的解决状态，如果其中抛出一个错误，resolve 将不会发生。

例如：未捕获的异常 对比 rejection values

```
var deferred = jQuery.Deferred();

deferred.then(function() {
  console.log("first callback");
  throw new Error("error in callback");
})
.then(function() {
  console.log("second callback");
}, function(err) {
  console.log("rejection callback", err instanceof Error);
});

deferred.resolve();
```

在以前，“first callback” 会被打印，并抛出一个错误。然后结束执行。紧挨着的 “second callback” 和 “rejection callback” 不会被打印出来。现在，符合标准的行为是 “rejection callback” 能够正确的被打印，正如你所看到的那样。err 是第一个回调函数中的 rejection values。

2、 现在可以通过 .then() 方法的回调来控制一个 Deferred 的解决状态，除了 rejection values 和 non-thenable 之外的返回值都会变为 fulfillment values。以前，从 rejection 处理程序中的返回值作为了 rejection values。

Example: returns from rejection callbacks

```
var deferred = jQuery.Deferred();
deferred.then(null, function(value) {
  console.log("rejection callback 1", value);
  return "value2";
})
.then(function(value) {
  console.log("success callback 2", value);
  throw new Error("exception value");
}, function(value) {
  console.log("rejection callback 2", value);
})
.then(null, function(value) {
  console.log("rejection callback 3", value);
});
deferred.reject("value1");
```

以前，这将打印 “rejection callback 1 value1”, “rejection callback 2 value2”, 和 “rejection callback 3 undefined”.

现在，符合标准的行为是，这将打印 “rejection callback 1 value1”, “success callback 2 value2″, 和 “rejection callback 3 [object Error]”.

3、 如果一个 Deferred 已经 resolved 之后，回调函数总是异步调用的。在以前，这些回调函数将会在绑定的时候同步执行。

Example: async vs sync

```
var deferred = jQuery.Deferred();
deferred.resolve();
deferred.then(function() {
  console.log("success callback");
});
console.log("after binding");
```

在以前，这段代码会先打印 “success callback” 然后打印 “after binding”。现在，它的结果是先打印 “after binding” 然后打印 “success callback”。

重要：当捕获异常时有利于在浏览器中进行调试，通过拒绝回调函数来处理异常非常具有陈述性。当与 promises 打交道时，记住至少要增加一个拒绝回调函数。否则，任何错误都不会提示。

我们写了一个插件用来调试 Deferreds 的 Promises/A+ 兼容性。如果在控制台无法看到错误的详细信息和来源，可查阅这里 [jQuery Deferred Reporter Plugin](https://github.com/dmethvin/jquery-deferred-reporter).

`jQuery.when` 升级后可以接受所有 thenable 对象，包括原生的 Promise 对象。

[https://github.com/jquery/jquery/issues/1722](https://github.com/jquery/jquery/issues/1722)
[https://github.com/jquery/jquery/issues/2102](https://github.com/jquery/jquery/issues/2102)

##### 为 Deferreds 添加 .catch()

`catch()` 方法在 promise 对象中的别名是 `.then(null, fn)`。

[https://github.com/jquery/jquery/issues/2102](https://github.com/jquery/jquery/issues/2102)

##### 错误情况不静默失败

也许在夜深人静的时候，你突然会想 “window 的 offset 是多少？”，然后你意识到这是一个疯狂的问题 —— window 哪来的 offset？

在过去，jQuery 也尝试过去返回某些东西而不是抛出异常。在这个 window 的 offset 问题的例子里，直到现在，答案一直是 `{ top: 0, left: 0 }`，在 jQuery 3.0 中，这种情况下，如此疯狂的问题会抛出错误而不是被默默的忽略了。请在这个版本里试试看，那些依赖于 jQuery 的代码是否因为非法输入而抛出错误。

[https://github.com/jquery/jquery/issues/1784](https://github.com/jquery/jquery/issues/1784)

##### 删除弃用的事件别名

`.load`, `.unload`, 和 `.error`, 在 jQuery 1.8 后被废弃，使用 `.on()` 来注册监听器。

[https://github.com/jquery/jquery/issues/2286](https://github.com/jquery/jquery/issues/2286)

##### 动画现在使用 `requestAnimationFrame`

在支持 `requestAnimationFrame` API 的平台上，除 IE9 和 Android 4.4 外，几乎被广泛支持。jQuery 现在也将使用这个 API 来处理动画。这将让动画更加顺滑、更少的 cpu 消耗，在移动端也将更省电。

jQuery 在几年前曾尝试使用 `requestAnimationFrame`。但现存代码有有几个 [严重的兼容性问题](http://blog.jquery.com/2011/09/01/jquery-1-6-3-released/) 不得不推迟。我们认为通过在浏览器选显卡显示的时候暂定动画处理好了大部分问题，但是，所有依赖动画的代码想要实时执行是不切合实际的。

##### jQuery 自定义选择器的大提速

感谢来自谷歌的 Paul Irish 的检测工作，我们发现当 `:visible` 这种的自定义选择器在同一份文件中被多次执行时，大量额外的运算可以省略跳过。现在这一类的运算速度提升了 17 倍！

要记住的是，尽管有了这些改进，但像 `:visible` 和 `:hidden` 这类选择器耗时代价还是很高的，因为依赖浏览器上的元素是否已经展示出来。在最坏的情况下，这可能需要在完全重算 CSS 样式和页面布局后才能执行。大部分情况我们不能阻止你去使用它，但我们建议你可以测试一下你的页面，看看这些选择器是否造成了性能问题。

这些改动其实在 1.12/2.2 就已经完成了，但是我们还是想在 jQuery 3.0 里重申一次。

[https://github.com/jquery/jquery/issues/2042](https://github.com/jquery/jquery/issues/2042)

如上面提到的，[升级指南](http://jquery.com/upgrade-guide/3.0/) 已为各位备好，除了有助于升级，还列出了更多显著的变化。

> 本文根据 [Timmy Willison](http://blog.jquery.com/author/timmywil/) 的《jQuery 3.0 Final Released!》所译，整个译文带有自己的理解与思想，如果译得不好或有不对之处还请同行朋友指点。如需转载此译文，需注明英文出处：[http://blog.jquery.com/2016/06/09/jquery-3-0-final-released/](http://blog.jquery.com/2016/06/09/jquery-3-0-final-released/)
