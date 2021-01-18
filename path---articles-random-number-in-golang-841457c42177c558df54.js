webpackJsonp([0xddd6b98f8fff],{404:function(n,a){n.exports={data:{markdownRemark:{html:'<p>随机数我们都知道，就是计算机通过某种算法，“随机”的生成一个数字。很多编程语言都有内置的方法来生成随机数，那么 GoLang 中是怎样一种情况呢？</p>\n<h1>伪随机数</h1>\n<p>我们都知道“随机数”在现实生活中的概念，可能你随手抛一个硬币，就可以说其结果是随机的，但是在计算机中要确定一个“随机数”真的是“随机数”，那可是有标准的，不是你随随便便说是就是。</p>\n<p>根据密码学原理，要想对一个“随机数”进行随机性检验有以下几个标准：</p>\n<ul>\n<li>统计学伪随机性 - 在给定的随机比特流样本中，1 的数量大致等于 0 的数量，也就是说，“10”“01”“00”“11” 四者数量大致相等。说人话就是：“一眼看上去是随机的”。</li>\n<li>密码学安全伪随机性 - 就是给定随机样本的一部分和随机算法，不能有效的演算出随机样本的剩余部分。</li>\n<li>真随机性 - 其定义为随机样本不可重现。</li>\n</ul>\n<p>根据以上几个标准，其对应的随机数也就分为以下几类：</p>\n<ul>\n<li>伪随机数 - 满足第一个条件的随机数。</li>\n<li>密码学安全的伪随机数 - 同时满足前两个条件的随机数。可以通过密码学安全伪随机数生成器计算得出。</li>\n<li>真随机数 -同时满足三个条件的随机数。</li>\n</ul>\n<p>了解了以上几个概念，我们就知道了“伪随机数”其实就是一个“看似随机，实则并不真正随机”的数字。</p>\n<h1>伪随机数生成器</h1>\n<p>在实际应用中大部分情况下伪随机数就足够了。这些数列是“似乎”随机的数，实际上它们是通过一个固定的、可以重复的计算方法产生的。因为它们实际上是可以计算出来的，所以它们并不真正地随机，但是它们具有类似于随机数的统计特征。产生这样的结果的生成器我们叫做伪随机数生成器。</p>\n<p>一般只有在密码学场景中，我们才需要使用“真随机数”。</p>\n<p>在大部分编程语言中，提供的都是“伪随机数生成器”，例如 <code>JS</code> 中的 <code>Math.random()</code>，<code>GoLang</code> 中的 <code>math/rand</code> 包。</p>\n<h1>GoLang 中的伪随机数</h1>\n<p>在<code>GoLang</code> 中，我们可以通过 <code>math/rand</code> 包里的方法来生成一个伪随机数：</p>\n<div class="gatsby-highlight">\n      <pre class="language-go"><code><span class="token keyword">package</span> main\n\n<span class="token keyword">import</span> <span class="token punctuation">(</span>\n  <span class="token string">"fmt"</span>\n  <span class="token string">"math/rand"</span>\n<span class="token punctuation">)</span>\n\n<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>rand<span class="token punctuation">.</span><span class="token function">Int</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>   <span class="token comment">// => 134020434</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>上面的代码中，我们通过 <code>rand.Int()</code> 方法来生成一个伪随机数。看起来好像没什么问题嘛，人家也很 OK 啦。</p>\n<p>但是细心的你会发现，你在自己电脑上运行上面的代码竟然和我的一样。无论你怎么运行，它都一样。</p>\n<p>我们知道 <code>JS</code> 中的 <code>Math.random()</code> 每次都会返回一个不一样的数字，但是 <code>GoLang</code> 中的伪随机数生成器默认情况下竟然会返回相同的数值，这还不反了天了？</p>\n<p>都是伪随机数生成器，为什么差别就这么大呢？这里我们就要了解一下“随机种子”的概念啦。</p>\n<h1>随机种子</h1>\n<p>我们知道，伪随机数，是使用一个确定性的算法计算出来的似乎是随机的数序，因此伪随机数实际上并不随机。</p>\n<p>那么自然，在计算伪随机数时假如使用的开始值不变的话，那么算法计算出的伪随机数的数序自然也是不变的咯。</p>\n<p>这个“开始值”，就被称为随机种子。</p>\n<p>查阅<a href="https://golang.google.cn/pkg/math/rand/#Int">文档</a>，我们得知，<code>Int()</code> 函数是从 <code>default Source</code>（默认源）中产生的伪随机数。</p>\n<p>而这个 <code>default Source</code>，我们从 <a href="https://golang.google.cn/pkg/math/rand/#Seed">Seed</a> 部分可以看到，如果你没有设置随机种子，那么默认初始种子总是从 <code>1</code> 开始。</p>\n<p>既然随机种子一样，那自然其结果也是一样的。</p>\n<h1>随机的伪随机数</h1>\n<p>我们已经知道了默认随机种子是从 <code>1</code> 开始，那么我们只要在每次生成随机数之前先设置一个不一样的种子，那么其结果自然也就不一样了。</p>\n<p>我们要尽可能保证每次伪随机数生成器工作时使用的是不同的种子，通常的做法是采用当前时间作为种子。</p>\n<div class="gatsby-highlight">\n      <pre class="language-go"><code><span class="token keyword">package</span> main\n\n<span class="token keyword">import</span> <span class="token punctuation">(</span>\n  <span class="token string">"fmt"</span>\n  <span class="token string">"math/rand"</span>\n  <span class="token string">"time"</span>\n<span class="token punctuation">)</span>\n\n<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  rand<span class="token punctuation">.</span><span class="token function">Seed</span><span class="token punctuation">(</span><span class="token function">int64</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">UnixNano</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n\n  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>rand<span class="token punctuation">.</span><span class="token function">Int</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>这样，由于种子不同，我们每次运行的结果也就不一样。我们就能达到获取伪随机数的目的啦。</p>\n<h1>真随机数</h1>\n<p>如果我们的应用对安全性要求比较高，需要使用真随机数的话，那么可以使用 <code>crypto/rand</code> 包中的方法。</p>\n<div class="gatsby-highlight">\n      <pre class="language-go"><code><span class="token keyword">package</span> main\n\n<span class="token keyword">import</span> <span class="token punctuation">(</span>\n  <span class="token string">"crypto/rand"</span>\n  <span class="token string">"fmt"</span>\n  <span class="token string">"math/big"</span>\n<span class="token punctuation">)</span>\n\n<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 生成 20 个 [0, 100) 范围的真随机数。</span>\n  <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">20</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>\n    result<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> rand<span class="token punctuation">.</span><span class="token function">Int</span><span class="token punctuation">(</span>rand<span class="token punctuation">.</span>Reader<span class="token punctuation">,</span> big<span class="token punctuation">.</span><span class="token function">NewInt</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>上面的程序每次运行的结果都是不一样的，会真正随机的生成随机数。</p>',frontmatter:{title:"GoLang 中的随机数",date:"2018-03-16",category:"技术",tags:["GoLang"],cover:null}},site:{siteMetadata:{url:"http://blog.sqrtthree.com/",thumbnail:"",defaultAuthor:"根号三",donation:{status:!0,channel:{alipay:"http://7xl8me.com1.z0.glb.clouddn.com/alipay.JPG",wechat:"http://7xl8me.com1.z0.glb.clouddn.com/wechat_receive_money.JPG"}},share:!0}}},pathContext:{slug:"/random-number-in-golang/",title:"GoLang 中的随机数",excerpt:"随机数我们都知道，就是计算机通过某种算法，“随机”的生成一个数字。很多编程语言都有内置的方法来生成随机数，那么 GoLang…",prev:!1,next:{fields:{slug:"/what-it-feels-like-to-be-an-open-source-maintainer/"},frontmatter:{title:"作为一个开源软件的作者是一种什么样的感受？",category:"技术",tags:["译文"],cover:null,date:"2017-03-15"},excerpt:"原文地址： What it feels like to be an open-source maintainer 原文作者： Nolan Lawson…"}}}}});
//# sourceMappingURL=path---articles-random-number-in-golang-841457c42177c558df54.js.map