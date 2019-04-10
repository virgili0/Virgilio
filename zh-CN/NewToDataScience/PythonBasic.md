# 基础 Python

## 本指南的范围和结果

嗨，**我是 Virgilio** ，你可能已经认识我了。
欢迎来到你进入数据科学的第一步！

为什么我要你学习 Python？

Python 易于理解，易于阅读，功能强大且灵活，可以帮助你完成日常任务(即使你不是程序员！) 并自动化很多无聊的东西。此外，它是核心数据科学工具，我们在下一篇指南中需要的大多数框架都是用 Python 编写的，或者是丰富的 Python 包装器。你还在在等什么呢？

本指南将带你从零编码知识_到一个可靠的 Python 技能，并完全了解编程中最重要的概念。

在这条道路之后，你将准备好应对更高级的主题！

我不打算重新发明轮子。所以，为了我们的目的，[**这个**](https://automatetheboringstuff.com/) 免费书是完美的跟踪。你也可以 [购买](https://nostarch.com/automatestuff) 。

在本指南中，本书的第一章已经解决。阅读完章节后，至少进行 15-20 次渐进式练习，试图寻找替代解决方案。
我们将安装 Python(你将编写的代码的解释器) 和 Pycharm(一种可以简化编码生命的开发环境) 。

[这里](http://keyseronline.net/TGC/PythonInstallInstructions.pdf) 你有关于如何在每个操作系统上安装 Python 和 Pycharm 的深入指南。

现在你准备好了！

## 先决条件
时间，会学习，好奇心:) )
没有其他的！

# 索引
- [简介](#简介)
- [Python 基础知识](#Python-基础知识)
- [流程控制](#流程控制)
- [函数](#函数)
- [结构化数据](#结构化数据)
- [操纵字符串](#操纵字符串)
- [后续步骤](#后续步骤)

## 介绍
有些人可能会说 Python 不是编码新手的最佳编程语言，因为它是一种真正的 [高级](https://www.computerscience.gcse.guru/theory/high-low-level-languages) 语言 - 也就是说，你不需要在引擎盖下处理很多无聊的东西，你可以从编程中专注于你需要的东西。
如果你正在学习成为开发人员，那么这个原因就可以了。在这种情况下，从更传统的语言(如 C 或 Java) 开始可能是正确的选择。但考虑到有多少人来自不同的领域并且只是希望能够将编程应用于他们的特定问题，我认为他们不希望因为 Java 类名中的指针或大写字母而受到打击。此外，Data Science 是一个横向和 “高级” 领域，因此 Python 绝对是最佳选择。

你要做的第一件事是阅读本书的 [**第 0 章**](https://automatetheboringstuff.com/chapter0/) 。关于什么是编程以及为什么该死的有用，这是一个很好的介绍。

[这里](http://www.bestprogramminglanguagefor.me/why-learn-python) 你有另一堆理由说明为什么 Python 是开始学习编程的最佳选择。

## Python 基础知识
如你所见，Python 最受欢迎的方面之一是语法。
Python [诞生](https://en.wikipedia.org/wiki/Python_(programming_language)) 思想 “我想要一种尽可能接近普通英语的编程语言”。所以，大多数时候，当你不知道某个东西的名字时，只要试着想一下那个东西的普通文字英文名字，也许 Python 的名字就是那个！

在深入研究 Python 语法基础知识之前，我想让你阅读 [这个](https://dev.to/lucpattyn/basic-programming-concepts-for-beginners-2o73) 对基本编程概念的介绍。如果你是一个初学者去那里，如果不是你可以跳过它。

现在花点时间阅读本书的 [**第 1 章**](https://automatetheboringstuff.com/chapter1/) 。一定要了解每一步，但可能并不难。在这里，你将对基本算术运算和数据类型充满信心。

[这里](https://realpython.com/python-data-types/) 你可以更深入地了解数据类型，[这里](https://docs.python.org/3/library/datatypes.html ) 你找到 [**官方 Python 文档（中文）**](https://docs.python.org/zh-cn/3.7/#) 的数据类型部分。
作为初学者开始在文档内部走动是一个非常好的练习，即使很多事情都不清楚。事实上，能够探索某些东西的文档是自主学习它的关键。
[这里](http://blog.techtalentsouth.com/8-tips-to-reading-documentation-a-newbies-guide) 你有一些有效阅读文档的技巧。

到目前为止，我们只是抓住了 Python 能力的表面：下一步是理解流控制，这是编程中最重要的概念之一。

## 流程控制
你可以使用条件和循环来控制程序的流程。

**if 语句** 验证条件，可以是 True 或 False，并为这两种情况提供不同的行为。
如果条件为 True，程序将执行 If 中的行，否则，它将简单地跳过它们。

>**If**  Virgilio  **is** awesome......
>> Print Ciao!

用Python编写的上述If语句变为：

> if Virgilio == "awesome":
>> print("Ciao!")

它可以有一个可选的 **else 语句**，用于指定条件为 False 时要执行的操作。

如你所见，Python 与普通英语非常相似。

在本书的这一章中，你还将找到 **循环**。
在本书的这一章中，你还将找到 **循环**。
在本书的这一章中，你还将找到 **循环**。
在本书的这一章中，你还将找到 **循环**。
....

**循环** 背后的想法是，你不需要编写这么多行代码来执行同一行(或一组行) 的多次。
你有几种类型的循环：

- **for 循环**循环 当你知道要重复命令的次数时
- **while 循环** 当你不知道时
- **do while 循环** 当你不知道但是你想要执行该行至少一次时执行。

现在阅读本书的 [**第 2 章**](https://automatetheboringstuff.com/chapter2/) 。流控制是编程的核心概念之一，因此请务必理解它。

_挑战自己_：
- [这里](https://www.w3resource.com/python-exercises/python-conditional-statements-and-loop-exercises.php) 你有大约 20 个关于流程控制的练习。在继续之前一定要解决所有问题。

## 函数
函数是完成特定任务的 “自包含” 代码模块。函数通常 “接收” 数据，处理数据并 “返回” 结果。一旦写入函数，就可以反复使用它。可以从其他函数内部 “调用” 函数。
一个好的 **经验法则** 是：如果你意识到你要做 3 次以上的事情，那就写一个函数，并根据你的需要调用它多少次！

你可以写：
>print("Publio Virgilio Marone\n")\
>print("Publio Virgilio Marone\n")\
>print("Publio Virgilio Marone\n")

**输出：**
>\> Publio Virgilio Marone\
>\> Publio Virgilio Marone\
>\> Publio Virgilio Marone 

或者你可以定义一个函数 “print ciao”，然后调用它 3 次！

>def my_function():
>>print("Publio Virgilio Marone\n")

>for index in range (0, 3):
>>my_function()

**输出：**
>\> Publio Virgilio Marone\
>\> Publio Virgilio Marone\
>\> Publio Virgilio Marone 


__设想函数_就像你把东西放进去的机器(“参数”) ，它进行一些计算，然后吐出一些东西(“返回” 值) 。

你可以拥有多个参数和多个返回值。

一般而言，你没有义务提供参数，并且你没有义务期望返回值。

例如，这个函数_takes in 2 arguments_和_gives back_the 那两个方格：
>def squares(x, y):
>>return x**2, y\**2

现在通过本书的 [**第 3 章**](https://automatetheboringstuff.com/chapter3/) ，它很好地解释了函数。

_挑战自己_：
- [这里](https://www.w3resource.com/python-exercises/python-functions-exercises.php) 你会发现很多关于函数的练习。在继续之前感觉舒适的函数。
## 结构化数据
你已经看到过不同的数据类型，如整数，浮点数，字符串和布尔值。这些是最简单的，它们通常被称为原始数据类型。但是你知道，世界是复杂的，大多数时候你需要更复杂的结构来代表你的问题并解决它。

你需要掌握的最重要的复杂数据类型是：
- 列表
在 Python 中，列表是..... 元素列表！它们可以包含不同的原始值类型，你可以通过 **索引** 访问每个元素，即列表中元素的位置。在 Python 中，与大多数编程语言一样，索引从 0 开始(而不是 1！) 。因此，列表的第一个元素位于位置 0，第二个元素位于位置 1，依此类推。
你可以使用 list[index] 获取列表元素。
深入理解切片的概念，真的很强大，也很方便。
在这里查看关于列表的 [**第 4 章**](https://automatetheboringstuff.com/chapter4/) 。
练习 [这里](https://www.w3resource.com/python-exercises/list/) 。

- 元组
元组只是列表的表亲。它们就像列表一样，但它们是不可变的，也就是说，你不能在创建后修改它们。
为什么我们需要使用元组，如果它们看起来像列表，只是更加亲近？通常在编程中，有些东西是你想要的 ** 随着时间的推移它们保持不变，在这种情况下，去寻找元组，你就会确定这一点。
在相同的 [**第 4 章**](https://automatetheboringstuff.com/chapter4/) 中，你会找到一个深刻的元组解释。
[练习](https://www.w3resource.com/python-exercises/tuple/) 在这里。

- 字典
python 字典是无序的项集合。虽然其他复合数据类型仅具有值作为元素，但字典具有键：值对。
字典经过优化，可在密钥已知时检索值。掌握词典，它们是 Python 编程的基础。
按照本书的 [**第 5 章**](https://automatetheboringstuff.com/chapter5/) ，它将启动你的词典以及如何随身携带结构化数据。
[这里](http://openbookproject.net/thinkcs/python/english3e/dictionaries.html) 你有一本关于词典的深入实践指南。
[这里](https://www.makeuseof.com/tag/properly-use-python-dictionary/) 一堆有用的用例。
练习 [这里](https://www.w3resource.com/python-exercises/dictionary/) 。

## 操纵字符串
字符串是一种对象，由一系列字符组成。 Python 已经知道如何处理许多通用和强大的表示，包括字符串。操纵字符串的一种方法是使用字符串运算符。这些运算符由你可能与数学相关联的符号表示，例如 +， - ，*，/ 和 =。当与字符串一起使用时，它们执行与其数学对应物类似但不相同的动作。
继续本书的 [**第 6 章**](https://automatetheboringstuff.com/chapter6/) 。
练习 [这里](https://www.w3resource.com/python-exercises/string/) 。

## 下一步
嘿，你！现在，如果你关注我的指南，你应该熟悉 Python 基础知识，并且已经能够创建很多东西！但如果没有更多的具体小项目练习，你会很快忘记你学到的东西。
我建议你的事情是实现一些小项目。
[这里](https://knightlab.northwestern.edu/2014/06/05/five-mini-programming-projects-for-the-python-beginner/) 和 [这里](https://knightlab.northwestern.edu/2014/06/05/five-mini-programming-projects-for-the-python-beginner/) 你发现了很多项目的想法。
提高解决问题和 Python 编码技能的另一个好方法是解决_编程挑站(Coding Challenges)_。他们让你处于各种各样的情况，有小问题，需要你推理 Python 方法来解决它。你可以找到许多编码挑战网站，但最完整，精心构建和丰富的用户(以及评论，解决方案，故障排除) 是 [Codefights](https://app.codesignal.com/login?redirect=/challenges/page/1) 和 [HackerRank](https://www.hackerrank.com/) 。

既然你是 Python 的学徒，那你就是真正的 Slytherin！
你现在可以使用高级 Python 指南。

----
由_clone95_撰写
