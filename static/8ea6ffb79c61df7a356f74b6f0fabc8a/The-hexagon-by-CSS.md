---
title: "通过 CSS 实现六边形效果"
subtitle: "The hexagon by CSS"
category: 技术
tags:
  - CSS
date: "2016-06-27"
---

故事说起那是在一个冰冷幽暗的晚上，外面下着淅淅沥沥的小雨，我正在思考一个十分重要的人生问题：这个周末哪里去？是宅在家里写程序好呢，还是宅在家里写博客好呢？还是好呢？这时，桌面右下角很少抖动的 QQ 头像竟然动了起来，我多年的直觉告诉我，一定是有人要约我，尽管这件事情从来没有发生过。我去，了不得，竟然是万年隐身的女神主动联系我，女神一定是因为看了朋友圈的照片对我的身材陷入了深深的迷恋，说不定还要包养我呢，啊，想想都觉得好激动啊~

> “哎，在干嘛呢？” (你看，果然要约我)

> “没事啊，在思考人生呢”

> "那个，我在写一个网站，需要用 CSS 实现一个六边形效果，你能帮我写个 Demo 么？"

额。。。那个，好吧，跟想象中的有点不太一样，咦，万一这是女神对我的考验呢，说不定通过了之后就，哇卡卡~

用 CSS 实现一个六边形还不简单？

如下图，这就是我们要实现的六边形。

![六边形](http://7xl8me.com1.z0.glb.clouddn.com/hexagon_1.png?imageView2/1/w/256/h/256/q/100%7Cwatermark/2/text/QHNxcnR0aHJlZQ==/font/5b6u6L2v6ZuF6buR/fontsize/500/fill/I0VGRUZFRg==/dissolve/100/gravity/SouthEast/dx/10/dy/10)

咋一看，这货怎么能用 CSS 来实现嘛？看官别着急，我给你画两条线你就能猜到了，请看下图：

![六边形](http://7xl8me.com1.z0.glb.clouddn.com/hexagon_2.png?imageView2/1/w/256/h/256/q/100%7Cwatermark/2/text/QHNxcnR0aHJlZQ==/font/5b6u6L2v6ZuF6buR/fontsize/500/fill/I0VGRUZFRg==/dissolve/100/gravity/SouthEast/dx/10/dy/10)

咦，还没看出来？那您老再看下面这张图：

![六边形](http://7xl8me.com1.z0.glb.clouddn.com/hexagon_3.png?imageView2/1/w/256/h/256/q/100%7Cwatermark/2/text/QHNxcnR0aHJlZQ==/font/5b6u6L2v6ZuF6buR/fontsize/500/fill/I0VGRUZFRg==/dissolve/100/gravity/SouthEast/dx/10/dy/10)

这下能够看出来了吧，没错，思路很简单，就是利用两个三角形和一个长方形然后拼接到一块，就能做出这么一个正六边形啦~

嗯？三角形怎么做？介个，等我什么时候有空了再给你娓娓道来吧（不过我想我是没空了，因为等我做完女神就要约我了~）

好了，废话不多说，直接上代码~ [点击查看](http://codepen.io/sqrtthree/pen/jrBEbj)

然后痛痛快快的给女神发了过去，

> "咦，效果虽然是这个效果，但是为什么鼠标移入的触发区域不太对呢？能不能把鼠标移入的触发区域也仅限制为六边形？"

嗯，这确实是这种方法的一个弊端，因为 CSS 中是没法直接做一个三角形的，所以我们利用了 `border` 的特点模拟了一个出来，但是元素本质上还是一个矩形。

那么问题来了，怎样实现一个完美的六边形效果呢？

哈哈，这个问题怎么能难得住我嘛，不多一会，我就做出了一个完美的六边形出来给女神发过去了，这次主要是利用了 `overflow: hidden` 和 CSS3 中的 `transform` 相关属性实现的。详细代码请 [点击查看](http://codepen.io/sqrtthree/pen/BzKbBb)。

嗯，这次看来女神挺满意的~

毕竟鼠标移入的触发区域也完美的限制在六边形里面了嘛~

女神表达了感激之情，我们在 QQ 上轻(gan)松(ga)的聊了起来，看起来是到了该约周末一起吃饭的时候了。

> "啊，抱歉噢，我周末要跟男朋友一起去逛街呢"

哦。

呵呵哒。

真是一个感(lei)人(jue)肺(bu)腑(ai)的爱情故事。
