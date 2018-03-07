webpackJsonp([0xed82f72caf21],{389:function(s,n){s.exports={data:{markdownRemark:{html:'<p>随着 web 发展，前端应用变得越来越复杂，基于后端的 <code>javascript(Node.js)</code> 也开始崭露头角，此时  <code>javascript</code> 被寄予了更大的期望，与此同时 <code>javascript MVC</code> 思想也开始流行起来。为了使用户界面与业务数据（内容）分离，就产生了『模板引擎』这个概念。</p>\n<p>说的简单点，模板引擎就是一个字符串中有几个变量待定，通过模板引擎函数把数据动态的塞进去。</p>\n<p>今天我们就来聊一聊 <code>Jade</code> 的使用方法和语法说明。<code>Jade</code>官网：<a href="http://jade-lang.com/">jade-lang.com/</a></p>\n<!--more-->\n<h2>Jade 的使用和命令行工具构建方法</h2>\n<p>Jade 的使用需要依赖 <code>Node</code>环境，通过 <code>npm</code> 包进行安装 <code>Jade</code> 命令行工具，安装成功之后就可以新建一个文件，文件后缀名为 <code>*.jade</code>。我们就可以尽情的使用 <code>jade</code> 的语法咯，写完之后只需要通过命令行工具进行编译即可编译为我们平时使用的 <code>html</code> 静态文件。</p>\n<h3>安装方法</h3>\n<p>1.首先确定是否安装有 <code>Node</code> 环境和 <code>npm</code> 工具，查看方法如下</p>\n<div class=\'highlight\'><pre class="editor editor-colors"><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>//&nbsp;在命令行工具中执行如下代码：</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>node&nbsp;-v</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>=&gt;&nbsp;v0.10.35</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>npm&nbsp;-v</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>=&gt;&nbsp;1.4.28</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>//&nbsp;如果成功返回版本号信息即为安装成功。</span></span></div></pre></div>\n<p>2.通过 <code>npm</code> 全局安装 <code>Jade</code> 命令行工具</p>\n<div class=\'highlight\'><pre class="editor editor-colors"><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>npm&nbsp;install&nbsp;jade&nbsp;-g</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>//&nbsp;mac用户可能需要管理员权限，使用如下命令</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>sudo&nbsp;npm&nbsp;install&nbsp;jade&nbsp;-g</span></span></div></pre></div>\n<p>3.创建 <code>*.Jade</code> 文件，开始任务。</p>\n<p>4.通过使用 <code>Jade</code> 命令行工具将 <code>jade</code> 文件编译为 <code>html</code> 文件</p>\n<h3>Jade 命令行工具使用方法</h3>\n<p>我们可以通过 <code>jade --help</code> 查看 <code>Jade</code> 命令行工具的使用参数</p>\n<div class=\'highlight\'><pre class="editor editor-colors"><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>jade&nbsp;--help</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>Usage:&nbsp;jade&nbsp;[options]&nbsp;[dir|file&nbsp;...]</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;Options:</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;-h,&nbsp;--help&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;output&nbsp;usage&nbsp;information&nbsp;/&nbsp;输出使用信息</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;-V,&nbsp;--version&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;output&nbsp;the&nbsp;version&nbsp;number&nbsp;/&nbsp;输出版本号信息</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;-O,&nbsp;--obj&nbsp;&lt;str&gt;&nbsp;&nbsp;&nbsp;&nbsp;javascript&nbsp;options&nbsp;object&nbsp;/&nbsp;传输到&nbsp;jade&nbsp;文件中的数据对象</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;-o,&nbsp;--out&nbsp;&lt;dir&gt;&nbsp;&nbsp;&nbsp;&nbsp;output&nbsp;the&nbsp;compiled&nbsp;html&nbsp;to&nbsp;&lt;dir&gt;&nbsp;/&nbsp;输出编译后的&nbsp;HTML&nbsp;到&nbsp;&lt;dir&gt;</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;-p,&nbsp;--path&nbsp;&lt;path&gt;&nbsp;&nbsp;filename&nbsp;used&nbsp;to&nbsp;resolve&nbsp;includes&nbsp;/&nbsp;在处理&nbsp;stdio&nbsp;时，查找包含文件时的查找路径</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;-P,&nbsp;--pretty&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;compile&nbsp;pretty&nbsp;html&nbsp;output&nbsp;/&nbsp;格式化编译&nbsp;html&nbsp;文件</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;-c,&nbsp;--client&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;compile&nbsp;function&nbsp;for&nbsp;client-side&nbsp;runtime.js&nbsp;/&nbsp;编译浏览器端可用的&nbsp;runtime.js</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;-n,&nbsp;--name&nbsp;&lt;str&gt;&nbsp;&nbsp;&nbsp;The&nbsp;name&nbsp;of&nbsp;the&nbsp;compiled&nbsp;template&nbsp;(requires&nbsp;--client)&nbsp;/&nbsp;编译模板的名字</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;-D,&nbsp;--no-debug&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;compile&nbsp;without&nbsp;debugging&nbsp;(smaller&nbsp;functions)&nbsp;/&nbsp;关闭编译的调试选项(函数会更小)</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;-w,&nbsp;--watch&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;watch&nbsp;files&nbsp;for&nbsp;changes&nbsp;and&nbsp;automatically&nbsp;re-render&nbsp;/&nbsp;监听文件改变并自动刷新编译结果</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;--name-after-file&nbsp;&nbsp;Name&nbsp;the&nbsp;template&nbsp;after&nbsp;the&nbsp;last&nbsp;section&nbsp;of&nbsp;the&nbsp;file&nbsp;path&nbsp;(requires&nbsp;--client&nbsp;and&nbsp;overriden&nbsp;by&nbsp;--name)</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;--doctype&nbsp;&lt;str&gt;&nbsp;&nbsp;&nbsp;&nbsp;Specify&nbsp;the&nbsp;doctype&nbsp;on&nbsp;the&nbsp;command&nbsp;line&nbsp;(useful&nbsp;if&nbsp;it&nbsp;is&nbsp;not&nbsp;specified&nbsp;by&nbsp;the&nbsp;template)&nbsp;/&nbsp;在命令行中指定文档类型(如果在模板中没有被指定)</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;Examples:</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;编译整个目录</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;$&nbsp;jade&nbsp;templates</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;生成&nbsp;{foo,bar}.html</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;$&nbsp;jade&nbsp;{foo,bar}.jade</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;在标准IO下使用jade</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;$&nbsp;jade&nbsp;&lt;&nbsp;my.jade&nbsp;&gt;&nbsp;my.html</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;在标准IO下使用jade</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;$&nbsp;echo&nbsp;&#39;h1&nbsp;Jade!&#39;&nbsp;|&nbsp;jade</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;foo,&nbsp;bar&nbsp;目录渲染到&nbsp;/tmp</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;&nbsp;&nbsp;&nbsp;$&nbsp;jade&nbsp;foo&nbsp;bar&nbsp;--out&nbsp;/tmp</span></span></div></pre></div>\n<p>实例：</p>\n<div class=\'highlight\'><pre class="editor editor-colors"><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>//&nbsp;比如说我们需要编译index.jade文件，默认编译到同文件夹下的同名html&nbsp;文件中</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>jade&nbsp;index.jade</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>//&nbsp;如果我们要格式化输出&nbsp;index.html&nbsp;文件，只需要添加&nbsp;-P&nbsp;参数即可</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>jade&nbsp;-P&nbsp;index.jade</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>&nbsp;</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>//&nbsp;如果我们要实现监听和自动编译，需要使用&nbsp;-w&nbsp;参数</span></span></div><div class="line"><span class="syntax--text syntax--plain syntax--null-grammar"><span>jade&nbsp;-P&nbsp;-w&nbsp;index.jade</span></span></div></pre></div>',frontmatter:{title:"前端开发模板引擎 -- Jade之开篇",date:"2015-08-20",category:"技术",tags:["jade"],cover:null}},site:{siteMetadata:{defaultAuthor:"根号三",language:"zh-cmn-Hans",SEOTitle:"sqrtthree's blog | 根号三的博客",keyword:"前端 前端工程师 HTML5 CSS3 Javascript React Vue Node.js Go Docker",description:"web 开发者, 擅长各项前端技能，深入研究 web 端开发与前端性能, 并对 Nodejs 及 Go 服务端技术栈有深入了解。",donation:{status:!0,channel:{alipay:"http://7xl8me.com1.z0.glb.clouddn.com/alipay.JPG",wechat:"http://7xl8me.com1.z0.glb.clouddn.com/wechat_receive_money.JPG"}},share:!0}}},pathContext:{slug:"/jade-01/",title:"前端开发模板引擎 -- Jade之开篇",prev:{fields:{slug:"/utf8-to-b64/"},frontmatter:{title:"解决 Javascript 中 atob 方法解码中文字符乱码问题",category:"技术",tags:null,cover:null,date:"2015-08-29"},excerpt:"今天在写一个通过 GitHub API 获取 README 的功能的时候, 由于返回值为 Base64 编码, 我在尝试用 js 转换为 UFT-…"},next:{fields:{slug:"/jade-02/"},frontmatter:{title:"前端开发模板引擎 -- Jade之标签的基本写法",category:"技术",tags:["jade"],cover:null,date:"2015-08-20"},excerpt:"1、文档声明 我们在开始写一个  html  页面的时候，首先要写上  DOCTYPE  文档声明的，现在通常情况下我们都是采用  HTML5  的文档声明方式，那么在  jade  里面我们应该怎么写呢？ 在  jade  里面编写文档声明有…"}}}}});
//# sourceMappingURL=path---articles-jade-01-b30523de65d8185c084c.js.map