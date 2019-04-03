# LaTeX
LaTeX 是一种标记语言(或者，如 [官方网站](https://www.latex-project.org/about/) 所述，“用于高质量排版的文档准备系统”) 用于创建精彩的论文和演示文稿。你在职业生涯中阅读的几乎所有论文都是使用 LaTeX 编写的。那么，让我们看看它是如何工作的！

## 为什么选择 LaTeX？
多年来，只要有人需要创建包含数学公式的文档，LaTeX 就成了首选工具。 LaTeX 用于撰写科学论文，它也被博客和科学内容创作者用于互联网。你甚至可以在 facebook messenger 上使用 LaTeX 语法！ (只有在你的计算机上才会呈现)

## 安装
有几个 LaTeX 发行版，你可以看到一个完整的列表 [这里](http://www.tug.org/interest.html#free) 。

在 Unix 系统下，你可以安装 [TeXLive](http://www.tug.org/texlive/) 。特别是在 Ubuntu 下你可以输入终端 `sudo apt-get install texlive-full`。
在 Windows 系统下，你可以安装 [MiKTeX](https://miktex.org/) 或 [TexLive](http://www.tug.org/texlive/) 。
在 MacOs 下，[MacTex](http://www.tug.org/mactex/) 。

安装后，你需要一个编辑器来编写 LaTeX 文档。你可以使用你想要的任何编辑器(记事本，vim，nano，gedit 等) ，但我建议你选择免费和跨平台的 [Texmaker](http://www.xm1math.net/texmaker/) 。同样值得一提的是，带有一些专用扩展的 Visual Studio Code(例如 [LaTeX Workshop](https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop) )非常适合使用。

## 写一份文件
有很多关于 LaTeX 的在线指南可以帮助你入门。其中：
- 可在 [此处](https://en.wikibooks.org/wiki/LaTeX) 找到综合指南。
- 另一个很酷的指南 [这里](https://www.latex-tutorial.com/tutorials/) 。
- [这一个](http://www.docs.is.ed.ac.uk/skills/documents/3722/3722-2014.pdf) 非常适合初学者。
- 另外 [此处](http://web.mit.edu/rsi/www/pdfs/new-latex.pdf) 另一个指南。

你也可以在线编写 LaTeX 文档，并使用 [OverLeaf](https://www.overleaf.com/) 与你的协作者共享。

已经制作了很多模板。你可以找到其中的一些 [这里](https://www.latextemplates.com/) 。

要绘制精美的图形和图表，你可以使用包 [TikZ](https://en.wikipedia.org/wiki/PGF/TikZ) 。

当遇到 LaTeX 问题时，要记住的一个好网站是 [StackOverflow](https://tex.stackexchange.com/) 和 LaTeX 专用部分。

### 提高生产力的工具
一开始，LaTeX 语法看起来令人生畏，为你知道并需要使用的所有数学符号提供了大量新命令。
- [这个网站](https://www.codecogs.com/latex/eqneditor.php) 允许用户在线编写公式，并且还有大量符号，你只需单击，生成所需的代码即可。你还可以预览公式，以便更容易确保所有内容都正确编写。
- 每当你需要符号但不知道命令时，请使用 [这个网站](http://detexify.kirelabs.org/classify.html) 。你所要做的就是绘制符号，然后右侧会出现建议。
- 在 LaTeX 中创建表格会特别烦人。我通常在 [这里](https://www.tablesgenerator.com/) 这样做，然后要求网站生成相应的代码。
- [MathJax](https://www.mathjax.org/) 是你可以让 LaTeX 在博客中呈现的方式之一！ (示例 [这里](http://mathspp.blogspot.com/2018/11/twitter-proof-roots-go-hand-in-hand.html) ，其中公式使用 MathJax 呈现)
- [Mathpix Snipping Tool](https://mathpix.com/) 可以帮助你通过拍摄所需数学公式的屏幕截图将图像转换为 LaTeX。它还可以识别数组和各种数学字体。

## 有用的包
既然你知道如何生成(简单) LaTeX 文档，你可能会觉得需要编写或绘制特定内容。为此，你可以使用特定的包。你需要做的就是使用命令 `\ usepackage {name_of_the_package}` 将它们包含在文档的开头。

### 显示数学

[`amsmath` 软件包](https://ctan.org/pkg/amsmath) 提供了各种增强功能，用于改进包含数学公式的文档的信息结构和打印输出，如 [本有用指南] 中所述(http://texdoc.net/texmf-dist/doc/latex/amsmath/amsldoc.pdf)。

可以通过包含 [`amssymb` 包](https://ctan.org/pkg/amsfonts) 来使用额外的数学字体和符号。回顾一下 [这里](http://milde.users.sourceforge.net/LUCR/Math/mathpackages/amssymb-symbols.pdf) 。

### 代码块

[`listing` 包](https://ctan.org/pkg/listings) 允许在 LaTeX 文档中插入编程代码。你可以突出显示代码，或指定你选择的语言，并让包自动为你添加特殊单词，注释等。 [这里](https://www.overleaf.com/learn/latex/Code_listing) 带有示例的指南。

基于之前的软件包，[`pythonhighlight`](https://ctan.org/pkg/pythonhighlight) 是一种与 LaTeX 一起使用的简单 Python 突出显示样式。你可以在这里找到非常简单的说明(https://github.com/olivierverdier/python-latex-highlighting) 。

要编写伪代码，可以使用 [algorithms](https://ctan.org/pkg/algorithms) ，它包含两个包：`algorithm` 和 `algorithmic`。 [这里](https://math-linux.com/latex-26/faq/latex-faq/article/how-to-write-algorithm-and-pseudocode-in-latex-usepackage-algorithm-usepackage-algorithmic) 你可以找到例子和有用的命令。

### 逻辑

对于自然扣除，有 [`bussproofs` 包](https://ctan.org/pkg/bussproofs) 。你可以在 [此处](https://www.math.ucsd.edu/~sbuss/ResearchWeb/bussproofs/BussGuide2_Smith2012.pdf) 找到包含示例的用户指南。
如果你发现繁琐的手工编写真值表，[这里](http://www.siafoo.net/snippet/249) 你会发现一个非常有用的 Pyhton 脚本。它在给定一个或多个命题逻辑公式的情况下自动生成已编译真值表的 LaTeX 代码。 (注意：请记住，在 Python 中，你可以将 *p* &rarr; *q* 写成 `not p or q`，因为它们在逻辑上是等价的) 。

### Automata

要使用 LaTeX 绘制有限状态机，你可以使用 `tikz-automata` 包，[这里](https://www3.nd.edu/~kogge/courses/cse30151-fa17/Public/other/tikz_tutorial.pdf) 一个快速教程。你也可以使用 [这个网站](https://notendur.hi.is/aee11/automataLatexGen/) 自动生成代码。

------------
由 Damiano Azzolini 创作。联系人：[mail](mailto：damiazz94@gmail.com) [github](https://github.com/damianoazzolini)

由 [Mathspp Blog](https://mathspp.blogspot.com) ，[RojerGS](https://github.com/RojerGS) 和 Lara Vignotto([mail](mailto：lara) 的编辑扩展. vignotto @ gmail.com) ，[github](https://github.com/laravignotto) )