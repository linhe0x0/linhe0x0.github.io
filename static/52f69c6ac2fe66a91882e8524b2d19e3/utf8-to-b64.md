---
title: "解决 Javascript 中 atob 方法解码中文字符乱码问题"
category: 技术
date: "2015-08-29"
---

> 今天在写一个通过 GitHub API 获取 README 的功能的时候, 由于返回值为 Base64 编码, 我在尝试用 js 转换为 UFT-8 的时候发现中文会导致乱码. 在这里总结一下相关的知识点吧.

## 首先, 为什么要编码？

由于一些网络通讯协议的限制, 又或者是出于信息加密的目的, 我们就需要将原信息转换为 base64 编码,然后才能进行传输.例如，发送某些含有 ASCII 码表中 0 到 31 之间的控制字符的数据。

通常的方法是通过 `window.btoa()` 方法对源数据进行编码, 然后接收方使用 `window.atob()` 方法对其进行解码, 从而得到原数据.

## window.btoa 与 window.atob 不支持中文

但是这种方法存在的问题是:`window.btoa()` 不支持中文, `window.atob()`转换含有中文的 base64 编码的时候中文部分会变为乱码.详情如下:

我们在 bash 终端下先得到『中文』这两个字的 base64 编码

```
$ echo 中文 | base64
5Lit5paHCg==
```

然后我们在 Chrome console 里面通过 `window.atob` 进行解码, 结果如下

```
> window.atob('5Lit5paHCg==')
< "ä¸­æ
"
```

继续在 Chrome console 里面执行 `window.btoa` 编码, 结果报错.

```
> window.btoa('中文');
< Uncaught DOMException: Failed to execute 'btoa' on 'Window': The string to be encoded contains characters outside of the Latin1 range.
```

经查资料发现, `btoa` 方法仅支持 ASCII 编码.

## 借助 encodeURIComponent 和 decodeURIComponent 转义中文字符

由于 `btoa` 方法仅支持 ASCII 编码, 我们在转换中文的时候就需要先将中文转换为 ASCII 字符序列，再通过 btoa 进行 base64 编码, 从而实现『曲线救国』。

转换 ASCII 字符序列的方法我们可以借助于 `encodeURIComponent` 和 `decodeURIComponent` 这两个方法完成.

编码:

```
> window.btoa(encodeURIComponent('中文'))
< "JUU0JUI4JUFEJUU2JTk2JTg3"
```

解码:

```
> decodeURIComponent(window.atob('JUU0JUI4JUFEJUU2JTk2JTg3'))
< "中文"
```

## GitHub API 获取 README 的中文乱码问题

但是通过上面的解码方式解码 GitHub 的 README 数据的时候仍旧是乱码, 经过查找相关资料发现了 Base64 的编码与解码转的最优方案是下面这种:

```
function utf8_to_b64(str) {
  return window.btoa(unescape(encodeURIComponent(str)))
}

function b64_to_utf8(str) {
  return decodeURIComponent(escape(window.atob(str)))
}

// Usage:
utf8_to_b64('✓ à la mode'); // JTI1dTI3MTMlMjUyMCUyNUUwJTI1MjBsYSUyNTIwbW9kZQ==
b64_to_utf8('JTI1dTI3MTMlMjUyMCUyNUUwJTI1MjBsYSUyNTIwbW9kZQ=='); // "✓ à la mode"

utf8_to_b64('I \u2661 Unicode!'); // SSUyNTIwJTI1dTI2NjElMjUyMFVuaWNvZGUlMjUyMQ==
b64_to_utf8('SSUyNTIwJTI1dTI2NjElMjUyMFVuaWNvZGUlMjUyMQ=='); // "I ♡ Unicode!"
```

通过上面的这种方法去解析 GitHub 的数据的时候, 发现中文能够正常显示了. 显然 GitHub 也是采用了这种方案.

## 参考资料

* [https://developer.mozilla.org/en/docs/Web/API/WindowBase64/Base64_encoding_and_decoding](https://developer.mozilla.org/en/docs/Web/API/WindowBase64/Base64_encoding_and_decoding)
* [https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/btoa](https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/btoa)
