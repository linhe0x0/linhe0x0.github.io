webpackJsonp([0xb51ce0b7767f],{393:function(e,o){e.exports={data:{markdownRemark:{html:'<p>2014年10月29日，jQuery 官方博客上更新了一篇博文，描述了关于下一代 jQuery 的一些信息。实际上这篇博文至今都已经一年时间了，jQuery 官方团队也早在2015年7月13日发布了 <code>jQuery 3.0.0-alpha1</code> 版本。我之前也只是匆匆的看过一遍，今日闲着无事，就尝试翻译了一下并发布了这篇迟到了一年的译版，想要了解 <code>3.0</code> 中的新特性的话可以关注我后续的更新。</p>\n<!-- more -->\n<h3>正文开始</h3>\n<p>很难相信从 <code>jQuery</code> 发布以来已经过去八年了，过去的这些年 Web 开发已经改变了很多， <code>jQuery</code> 也随之变化着。在这个过程中，团队一直在保持对旧代码的兼容性和支持目前最好的 Web 开发实践之间努力平衡着。</p>\n<p>其中最好的做法就是语义化版本，或者简单的称之为 <a href="http://semver.org/lang/zh-CN/">semver</a>，从实践的角度看，<a href="http://semver.org/lang/zh-CN/">semver</a> 给了开发者(以及构建工具) 一个避免由于切换软件版本导致的风险的方法。版本号为 <code>MAJOR.MINOR.PATCH</code> 的格式，并且其三个组成部分均为整数。在<a href="http://semver.org/lang/zh-CN/">semver</a> 中，如果 <code>MAJOR</code> 改变了，就意味着在 API 中出现了不兼容的改变，因此开发者们需要当心。</p>\n<p>在 <code>jQuery</code> 中版本控制变得更加微妙，(对 jQuery 来说) 浏览器的兼容性和 API 的兼容性同等重要。为了创造一个 “苗条” 的 <code>jQuery</code> ，团队在2013年开始放出了两个版本。第一个版本保持着 1.x 的编号，当前(截止到原文发布时)最新版本为 1.11.1，其保持了最大数量的浏览器兼容性。第二个版本从 2.0.0 开始，目前是 2.1.1，为了精简代码，放弃了对 IE8及其以下版本浏览器的支持。1.x 和 2.x 版本的  <code>jQuery</code> 都有着相同的公开 API，尽管他们在内部实现上有一些不同。</p>\n<p>我们的下一个版本将会使用一种全新的命名方式。像之前一样，仍然会有两个不同的发布文件。现在的 <code>1.11.1</code> 版本的继任者将被称之为 <code>jQuery Compat 3.0</code>。<code>jQuery 2.1.1</code> 则将由 <code>jQuery 3.0</code>来接替。在 <code>npm</code> 和 <code>Bower</code> 上(译者注: 这是目前非常流行的前端包管理工具)，它们会是两个不同的包，但它们会共享同一个版本号，来说明它们在API层面上的行为是一致的。</p>\n<p>这次版本发布之后，我们也将调整对浏览器的支持策略。主 <code>jQuery</code> 包将继续保持短小精悍，并且只支持在发布之时广泛使用的常青浏览器(evergreen browsers 指的是特定浏览器的当前和此前的若干版本)。我们也会根据市场份额在这个包的基础上支持更多的浏览器。而 <code>jQuery Compat</code> 包则提供更广泛的浏览器支持，但是付出的代价就是文件变得很大，执行效率也会低一些。</p>\n<p>尽管这一次版本号跳跃很大，但是对于大多数 <code>jQuery</code> 代码来说，我们不期望造成很多的代码迁移问题。我们在这次版本升级中可是符合 <code>semver</code> 中的好公民的标准的。诸如像移除已废弃的方法这样的改变会被新版本的 <code>jQuery Migrate</code> 插件检测出来，这样一来，发现并且修复他们就变得容易多了。我们也会在将来的博客文章中讨论这些变化中的更多细节。</p>\n<p>下面就是一些 <code>jQuery API</code> 3.0 版本要说的内容：</p>\n<ul>\n<li>如果你需要支持更多更广泛的浏览器，包括诸如 <code>IE8, Opera 12, Safari 5</code> 等，请使用 <code>jQuery-Compat 3.0.0</code> 版本。我们建议大多数网站都使用这一版本，因为它为网站的来访者提供了最好的兼容性支持。</li>\n<li>如果你的网站仅仅是为了那些最先进的浏览器而建，或者仅仅是一个基于 <code>HTML</code> 的应用以嵌入一个 <code>web</code> 视图(例如: PhoneGap，Cordova)，你预先知道其使用的是哪一个浏览器解析引擎， 那就使用 <code>jQuery 3.0.0</code> 吧。</li>\n<li>除非我们宣布，否则对应的主、次版本号相同的两个包都会有相同的公开 API。这样开发者就能够很容易的在两个包之间切换，并且在第三方 <code>jQuery</code> 插件中拥有最好的兼容性。</li>\n</ul>\n<p>未来每一个版本发布的时候，我们都会同时放到 <code>npm</code> 和 <code>bower</code> 上。两个包也会以单个文件的形式在 <code>jQuery CDN</code> 上提供。在那里使用他们和根据你自己的需要去包含 <code>jquery-compat-3.0.0.js</code> 或<code>jquery-3.0.0.js</code> 一样简便。我们也和 Google’s CDN 的运营人员谈过，他们也会为这两个包提供支持。</p>\n<p>随着我们在3.0版本方面工作的推进，我们会向所有人告知代码变更、浏览器支持等一切细节的更新。敬请期待吧！</p>\n<blockquote>\n<p>本文根据 <a href="http://blog.jquery.com/author/dmethvin/">Dave Methvin</a> 的《jQuery 3.0: The Next Generations》所译，整个译文带有自己的理解与思想，如果译得不好或有不对之处还请同行朋友指点。如需转载此译文，需注明英文出处：<a href="http://blog.jquery.com/2014/10/29/jquery-3-0-the-next-generations/">http://blog.jquery.com/2014/10/29/jquery-3-0-the-next-generations/</a></p>\n</blockquote>\n<h2>相关链接</h2>\n<ul>\n<li>jQuery 3.0.0-alpha1: <a href="https://code.jquery.com/jquery-3.0.0-alpha1.js">https://code.jquery.com/jquery-3.0.0-alpha1.js</a></li>\n<li>jQuery compat 3.0.0-alpha1: <a href="https://code.jquery.com/jquery-3.0.0-alpha1.js">https://code.jquery.com/jquery-3.0.0-alpha1.js</a></li>\n</ul>',frontmatter:{title:"jQuery 3.0 —— 下一代的jQuery",date:"2015-11-05",category:"技术",tags:["jQuery3.0","译文"]}},site:{siteMetadata:{defaultAuthor:"根号三",language:"zh-cmn-Hans",SEOTitle:"sqrtthree's blog | 根号三的博客",keyword:"前端 前端工程师 HTML5 CSS3 Javascript React Vue Node.js Go Docker",description:"web 开发者, 擅长各项前端技能，深入研究 web 端开发与前端性能, 并对 Nodejs 及 Go 服务端技术栈有深入了解。",donation:{status:!0,channel:{alipay:"http://7xl8me.com1.z0.glb.clouddn.com/alipay.JPG",wechat:"http://7xl8me.com1.z0.glb.clouddn.com/wechat_receive_money.JPG"}},share:!0}}},pathContext:{slug:"/jquery3-the-next-generations/",title:"jQuery 3.0 —— 下一代的jQuery",prev:{fields:{slug:"/myCodeWars-01/"},frontmatter:{title:"My Code Wars v0.1",category:"技术",tags:["CodeWars"],cover:null,date:"2015-11-06"},excerpt:"这里讲述的是一个8级（kyu）菜鸟立志成为8段（dan）大神的故事。故事的起因是这样的。菜鸟有幸发现了  codewars  这个网站，从此沉迷于内一发不可收拾，他在代码战争中一次次遭遇挫败，又一次次爬起来继续跌倒下去。欲知详情，且看『迈向…"},next:{fields:{slug:"/strict-mode-in-javascript/"},frontmatter:{title:"聊聊 JS 中的严格模式",category:"技术",tags:["JS"],cover:null,date:"2015-10-09"},excerpt:"什么是严格模式？ 严格模式  是 ECMAScript 5 中引入的一种将更好的错误检查引入代码中的方法，现在已经被大多浏览器实现。 顾名思义，这种模式使得Javascript…"}}}}});
//# sourceMappingURL=path---articles-jquery-3-the-next-generations-83a7cc73b53b7979bf32.js.map