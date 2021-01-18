---
title: "My Code Wars v0.1"
description: 这里记录了我在 codewars 网站上的一些收获。
category: 技术
tags:
  - CodeWars
date: "2015-11-06"
---

> 这里讲述的是一个 8 级（kyu）菜鸟立志成为 8 段（dan）大神的故事。故事的起因是这样的。菜鸟有幸发现了 [codewars](http://www.codewars.com/) 这个网站，从此沉迷于内一发不可收拾，他在代码战争中一次次遭遇挫败，又一次次爬起来继续跌倒下去。欲知详情，且看『迈向 7 级的第一个脚印』。

> 遥想当年自高自大，而今终知天外有天。

### Description:

The numberOfOccurrences function must return the number of occurrences of an element in an array.

### Example:

```
var arr = [0, 1, 2, 2, 3]

arr.numberOfOccurrences(0) === 1
arr.numberOfOccurrences(4) === 0
arr.numberOfOccurrences(2) === 2
arr.numberOfOccurrences("a") === 0
```

### 菜鸟出招

```
Array.prototype.numberOfOccurrences = function(num) {
  var total = 0

  for (var i = 0; i < this.length; i++) {
    if (this[i] == num) {
      total++
    }
  }

  return total
}
```

### 菜鸟思维

1. 利用数组遍历
2. 如果数值相等则加 1
3. 返回标记总数的变量

### 偷师学艺

```
Array.prototype.numberOfOccurrences = function(search) {
  return this.filter(function(num) {
    return search === num
  }).length
}
```

### 关键字积累

* prototype
* filter

### 菜鸟总结

`filter()`是 `ECMAScirpt 5` 中规定的数组方法，返回的数组元素是调用的数组的一个子集。传递的函数是用来逻辑判定的：该函数返回 `true` 或是 `false`。如果返回值为 `true` 或是能转化为 `true` 的值，那么传递给判定函数的元素就是这个子集的成员，它将被添加到一个作为返回值的的数组中。

`filter()` 会跳过稀疏数组中缺少的元素，它的返回值总是稠密的。为了压缩稀疏数组的空缺，代码如下：

```
var dense = sparse.filter(function() {
  return true
})
```

如果压缩空缺并删除 `undefined` 和`null`元素，代码如下：

```
var a = a.filter(function(x) {
  return x !== undefined && x !== null
})
```
