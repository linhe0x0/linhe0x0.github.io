---
title: "是时候来用 Slush 构建你自己的脚手架了"
category: 技术
tags:
  - gulp
  - 工具
date: "2017-03-01"
---

## Slush 是什么？

简单的来说，Slush 就是一个脚手架生成工具。什么？脚手架？这是什么鬼？嗯，脚手架嘛，自然是这个样子咯~

![](https://ww2.sinaimg.cn/large/006tNc79gy1fd3vev11wnj30go0b3431.jpg)

什么？你问的是编程中的脚手架呀？啊，这么说吧。身为一个前端开发者，每次新建一个项目的时候是不是要创建好多个文件夹、配置文件？写个文档是不是要创建好多个目录？然而每个项目的结构和配置文件都大同小异，是不是早已繁琐感觉人生无望，失去了活着的意义？

![](https://ww4.sinaimg.cn/large/006tNc79gy1fd3vw3uqtfj30bo08rwem.jpg)

就在这个时候，Slush 横空出世，能够让你轻松搞定这些繁琐的事情，重新找回人生的意义，你就说吼不吼啊。从此麻麻再也不用担心我整天都在忙着创建文件夹啦。

![](https://ww4.sinaimg.cn/large/006tNc79ly1fd3wiy66q4g306o0360vr.gif)

## 道理我都懂，可我大 Yeoman 用的好好的，为什么要换新？

嗯。Yeoman 确实也是一个很好用的脚手架工具，历史悠久。然而它以 Grunt 为基础工具，上手难度大大提高。在轮子层出不穷的前端领域早已是风前残烛。而 Slush 则是基于 Gulp 的 『流式』思想作为基础工具，当你在做定制化脚手架时，Gulp 简单易用的特点则能让你轻轻松松搞定。

![](https://ww4.sinaimg.cn/large/006tNc79gy1fd3wvq1wemj3060046q36.jpg)

噢，这么屌？那该怎么用呢？

# 说了这么多，我到底该怎么用？

好啦，废话不多说啦，我们赶紧来趁着这个热乎劲看看怎么使用吧。

### 1. 安装 slush

首先，你得有 NodeJS 环境，什么？连 NodeJS 都没装？赶紧回家洗洗睡吧。如果你已经有了呢，你就可以通过 npm 直接将 slush 安装到全局环境下啦：

```
npm install -g slush
```

安装完了之后，你可以执行下面这行命令来确保安装成功：

```
slush -v
```

如果你能看到输出了一个版本号，就说明已经安装成功啦。下面我们就来看一下如何使用吧。

### 2. 安装第三方脚手架

在使用 slush 创建项目之前，你得先安装一些别人开发好的脚手架。安装好脚手架之后才能根据脚手架生成约定好的项目结构哟。

咦？不知道有什么脚手架？快来 [大厅](http://slushjs.github.io/generators) 里找找吧。

很好，你已经找到了自己喜欢的脚手架了，我们快来安装它吧。打住，提醒你一下，脚手架要安装到全局环境下才有效哟。

```
npm install -g slush-react-starter-kit
```

### 3. 开始生成项目吧

现在我们已经安装好需要的一切了，终于可以开始创建项目啦。

首先，创建一个项目文件夹并进入文件夹中：

```
mkdir my-first-slush-project
cd my-first-slush-project
```

其次，执行 slush 生成命令：

```
slush react-starter-kit
```

`react-starter-kit`是什么鬼？我们安装的明明是 `slush-react-starter-kit` 呀。没错，在生成项目的时候，slush 后面跟的脚手架名字中是不带 `slush` 关键词的。就是这么任性。

![](https://ww4.sinaimg.cn/large/006tNc79ly1fd3xirh0ebg30jg0axhdt.gif)

## 没找到好使的，宝宝想要自定义怎么办？

当然了，可能你翻遍了整个大厅都没找到自己想要的，迫切想要自己定制一个脚手架怎么办呢？且听我慢慢道来。

其实很简单啦，Slush 脚手架就是一个普通的 npm package，唯一需要注意的有这么几点：

1. 名字要以 `slush-*` 的方式
2. package 中包含一个 `slushfile.js` 文件
3. package.json 文件中加上 slushgenerator 关键词方便别人检索
4. 模板文件放在 `templates` 文件夹中
5. 别忘了安装 gulp 作为本地依赖啦

假设你已经按照上面这些约定做好了准备工作，那么接下来我们就可以搞一件大新闻啦。

#### 第一步：创建模板文件

首先，你要将模板文件（就是运行脚手架之后生成的项目文件）全部放到 `templates` 文件夹中

#### 第二步：在 slushfile.js 文件中编写任务流。

前面已经说到 Slush 是基于 Gulp 作为基础工具的，所以你只需要按照 Gulp 的使用方法在 `slushfile.js` 编写任务流就可以啦。

咦，好像有点不太对，既然是用 Gulp，那么 `gulpfile.js` 文件呢？

![](https://ww3.sinaimg.cn/large/006tNc79gy1fd3y3nwzfgj304o03smxd.jpg)

这里确实是不需要 `gulpfile.js` 文件啦，因为 Gulp 任务都在 `slushfile.js` 文件中写啦，Slush 会帮你自动驱动 Gulp 的啦。

好了，那么 `slushfile.js` 文件中的到底该怎么写呢？放着我来，小哥亲自给你示范一下：

```javascript
var gulp = require('gulp'),
  install = require('gulp-install'),
  conflict = require('gulp-conflict'),
  template = require('gulp-template'),
  inquirer = require('inquirer')

gulp.task('default', function(done) {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Give your app a name',
        default: gulp.args.join(' '), // 从运行参数中获取值作为 name 的默认值。
      },
      {
        type: 'confirm',
        name: 'moveon',
        message: 'Continue?',
      },
    ])
    .then(function(answers) {
      if (!answers.moveon) {
        return done()
      }

      gulp
        .src(__dirname + '/templates/**') // 使用脚本所在的目录作为相对路径。
        .pipe(template(answers)) // Lodash 模板支持，可以方便的在模板中进行插值。
        .pipe(conflict('./')) // 当文件冲突时，询问是否覆盖。
        .pipe(gulp.dest('./')) // 输出到执行命令的当前文件夹中。
        .pipe(install()) // 使用 `bower install` 或 `npm install` 执行安装操作。
        .on('end', function() {
          done() // 告知完成。
        })
    })
})
```

PS: 去哪里发现诸如 `[inquirer](https://github.com/SBoudrias/Inquirer.js)` 这么好用的 package 呢？你可以关注下 [github.com/sqrthree/awesome-npm-packages](https://github.com/sqrthree/awesome-npm-packages) 哟。

现在就已经搞定啦，接下来怎么使用呢？因为 Slush 调用的是全局环境下的脚手架，但是目前我们的脚手架并不在全局环境中，然而你还没发布这个脚手架，不能直接工作 `npm install -g` 进行全局安装，所以显然是不！能！用！啦！哈！哈！哈！

![](https://ww1.sinaimg.cn/large/006tNc79ly1fd3ynyznx6g3050050wgk.gif)

别着急砸电脑嘛，我们还有一个办法捏。那就是通过 `npm link` 命令将当前脚手架挂载到全局环境中啦。你只需要在当前文件夹中执行 `npm link`，搞定，收工（前提是 `package.json` 已经写好）。然后就可以随便找个文件夹安装我们上面说的方法使用脚手架啦。

## 生成 Slush 脚手架的脚手架

尽管自定义一个脚手架已经非常方便了，但是细心的你会发现几乎每个脚手架之间 `slushfile.js` 也都大同小异，只是 `templates` 文件夹中的模板文件不一样，所以呢，你懂得 😉。

[slush-generator](https://github.com/chrisenytc/slush-generator) 就是这么一个让我们来生成 Slush 脚手架的脚手架。有了它，创建自定义脚手架的时候异常方便。

#### 第一步：安装 slush-generator

```javascript
npm install -g slush-generator
```

#### 第二步：创建并进入自定义脚手架的文件夹

```
mkdir my-slush-generator
cd my-slush-generator
```

#### 第三步：运行任务：

```
slush generator
```

之后会让你回答一些问题，在回答过之后，你的自定义脚手架目录就已经生成好啦。接下来只需要在 `templates` 文件夹中放置你需要的文件就好了。

## 查看已经安装好的脚手架

直接输入 `slush` 即可看到已经安装过的脚手架：

```
➜  slush
[slush] Installed generators
[slush] ├── generator (0.2.11)
[slush] └── koa2 (0.1.0)
```

怎么样？是不是已经迫不及待的想要尝试了？

![](https://ww3.sinaimg.cn/large/006tNc79gy1fd3z94buhfj30g40g4t9g.jpg)

喔，对了，少侠留步，差点忘了告诉你一件事情：

![](https://ww4.sinaimg.cn/large/006tNc79ly1fd3za793nqj30rs0rsabk.jpg)
