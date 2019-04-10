# [在这里查看网页](https://github.com/clone95/Virgilio/tree/master/zh-CN)
# 机器学习工程师
## 一个完整的 ML 学习路径，专注于 TensorFlow 和 Scikit-Learn

我 **强烈建议** 你购买 [**这本**](https://www.amazon.it/Hands-Machine-Learning-Scikit-Learn-Tensorflow/dp/1491962291/ref=pd_sbs_14_1/260-9599700-1757805?_encoding=UTF8&pd_rd_i=1491962291&pd_rd_r=23993915-4513-11e9-ad92-43c54a5a8a65&pd_rd_w=QNr5b&pd_rd_wg=Si7Nj&pf_rd_p=37660d27-94f1-4ebe-be01-184b332a9b15&pf_rd_r=SF0KMBGABMY3T790JY7Z&psc=1&refRID=SF0KMBGABMY3T790JY7Z) 惊人的书：O'Reilly 出版的《Scikit-Learn 与 TensorFlow 机器学习实用指南》，它激发了我的灵感，并推动了下面列出的内容的大部分组织和层次结构。

除此之外，这里列出 **所有内容** 都是开源，免费的，来自世界知名大学和开源协会。

当我们学习新东西时，有必要避免混淆，特别是当主题与机器学习一样广泛和复杂时。在可能的情况下，我尝试创建路径的后续步骤，而不是来自同一作者或相关的内容。除此以外，我收集了理论和示例，以及指向最佳资源的链接。示例和资源被列为 “_____的最佳实践”。

#### 我用 4 个章节重组了学习路径

#### 先决条件
- Python
- Jupyter Notebook
- 你需要的数学
- 机器学习环境

#### 使用 Scikit-Learn 进行机器学习
- 为什么是 Scikit-Learn？
- 端到端机器学习项目
- 线性回归
- 分类
- 训练模型
- 支持向量机
- 决策树
- 集成学习和随机森林
- 无监督学习
- 结束并期待

#### 使用 TensorFlow 的神经网络
- 为什么选择 TensorFlow？
- 启动和运行 TensorFlow
- ANN - 人工神经网络
- CNN - 卷积神经网络
- RNN - 递归神经网络
- 训练网络：最佳实践
- 自动编码器
- 强化学习
- 下一步

#### 实用工具
- 机器学习项目
- 数据科学工具
- 值得一看的 博客 / YouTube 频道 / 网站！

让我们开始吧！

-------------------------------------------------- -------------

## 先决条件

### Python
根据孙子(Sun Tzu)的说法：
> 如果你不了解 Python，请立即学习它！

Python 是最常用和最受欢迎的编程语言之一，有必要在机器学习领域完成工作。与更大的数据科学领域的大多数框架一样，TensorFlow 与 Python 结合，而 Scikit-Learn 就是用 Python 编写的。

首先，让我们 [在你的机器上安装 Python 3](https://realpython.com/installing-python/)！

我们准备开始我们的旅程了！

如果你不了解 Python 的基础知识，请从 [这里](https://pythonprogramming.net/introduction-learn-python-3-tutorials/) 开始。
另外，如果你知道语法并希望有更扎实 Python 基础 (推荐) ，请参考 [这里](https://pythonprogramming.net/introduction-intermediate-python-tutorial/) 中的中级 Python 课程。
如果你正在寻找大量的练习来自己动手并获得 Python 经验，请查看 [这里](https://www.w3resource.com/python-exercises/) 和 [这里](https://www.practicepython.org/) 。

一旦熟悉了 Python，请查看 [Numpy](https://docs.scipy.org/doc/numpy-1.13.0/user/whatisnumpy.html) ，这是一个重要的数学运算模块，允许你可以在 Python 中导入 [张量(Tensor)](https://www.kdnuggets.com/2018/05/wtf-tensor.html) 数据类型，这是 ML 中使用最多的数据类型(特别是在处理神经网络时) 。
张量 [不是矩阵！](https://medium.com/@quantumsteinke/whats-the-difference-between-a-mTutorialatrix-and-a-tensor-4505fbdc576c)
这是一个很棒的 [Numpy 教程](http://cs231n.github.io/python-numpy-tutorial/) 。
我还建议你安装 [PyCharm 社区版](https://www.jetbrains.com/pycharm/download/#section=windows) ，一个完整的 Python 开发 IDE，以及 [设置一个新的 Python 虚拟环境](https://www.jetbrains.com/help/pycharm/creating-virtual-environment.html) 用于你的实验。

### Jupyter Notebook
直接转自 [这里](https://jupyter.org/) ：“Jupyter Notebook 是一个开源 Web 应用程序，允许你创建和共享包含实时代码，方程，可视化和叙述文本的文档。用途包括：数据清理和转换，数值模拟，统计建模，数据可视化，机器学习等等。“
使用数据意味着 -> 大量实验。要记录实验，并以有价值的方式组织它们以获得见解，你肯定需要在学习途中使用 Jupyter Notebook。 [为什么](http://blendedlearning.blogs.brynmawr.edu/what-are-jupyter-notebooks-why-would-i-want-to-use-them/) ？

### 你需要的数学
无论谁告诉你机器学习背后的数学很难...... 都没有错！但是你必须考虑到每次你要使用它时，机器都会为你处理它！因此，重要的是掌握主要概念并认识到这些概念的限制和应用。没有人会要求你手工计算梯度！所以，如果你不熟悉这些概念，请检查它们，因为它们是一切背后的原因。
有了这三种资源，你将充分了解你真正需要深入了解的内容。

关于线性代数的顶级课程在 [这里](https://ocw.mit.edu/courses/mathematics/18-06-linear-algebra-spring-2010/) 。
与基本概率和统计概念相结合在 [这里](https://www.edx.org/course/introduction-to-probability-0) 。
你需要的大部分剩余数学在 [这里](https://explained.ai/matrix-calculus/index.html#sec4.5) 。

### 机器学习总览
直接摘自前面引用的书，**这是** 你需要机器学习的最简洁和最有启发性的概述。 让我们停止使用流行语！
检查 [这里](https://www.oreilly.com/library/view/hands-on-machine-learning/9781491962282/ch01.html) 。
这也是 [必须的](http://www.r2d3.us/visual-intro-to-machine-learning-part-1/) 。

---------------------------------------------------------------

## 使用 Scikit-Learn 进行机器学习

安装 Scikit-Learn
```
python pip install -U scikit-learn
```

如果遇到一些问题，可能是因为你没有最新版本的 pip。所以在同一个文件夹中运行：

```
python -m pip install --upgrade pip
```

### 为什么选择 Scikit-Learn
[Scikit-Learn](https://scikit-learn.org/stable/) 是机器学习任务中最完整，最成熟，良好文档的库之一。它开箱即用，具有强大而先进的模型，可为数据科学过程提供设施功能。

我们将沿着这条路学习和使用其他模块。要快速使用，请查看他们的官方文档。


### 端到端机器学习项目
作为第一次尝试，我建议你浏览 [这个](https://www.kaggle.com/startupsci/titanic-data-science-solutions) Kaggle notebook，它有一个 ML 任务的经典例子。目标是试图预测泰坦尼克号乘客是否最有可能存活。现在很多事情都不清楚，但不要担心，以后会全面解释。很高兴获得 “应用” 项目的图片，通过应用机器学习的经典步骤(问题框架，数据探索，问题公式......) 。

这个 notebook 在 [Kaggle](https://www.kaggle.com/) 上，它是 ML 和一般数据科学项目的首选平台，它提供了大量免费数据集，并提供了有趣的挑战和 ML 模型实验。
请记住：阅读 notebook 并尝试了解该过程的大局。稍后将更清楚一些细节，功能和代码。

### 线性回归
这是最简单的机器学习形式，也是每个有兴趣预测数据集结果的人的起点。
检查 [这里](https://www.youtube.com/watch?v=W46UTQ_JDPk&list=PLoR5VjrKytrCv-Vxnhp5UyS1UjZsXP0Kj&index=2) 来自 Andrew NG 的理论课，然后通过这些例子，从最简单到最复杂。
[这个](https://www.geeksforgeeks.org/ml-normal-equation-in-linear-regression/) 是线性回归背后的数学。
- [示例 1](https://scikit-learn.org/stable/auto_examples/linear_model/plot_ols.html#sphx-glr-auto-examples-linear-model-plot-ols-py)
- [示例 2](https://bigdata-madesimple.com/how-to-run-linear-regression-in-python-scikit-learn/)
- [示例 3](https://www.geeksforgeeks.org/linear-regression-python-implementation/)

_着手_ [这个](https://www.kaggle.com/c/afsis-soil-properties) 是一个非常好的挑战，在进入下一部分之前解决它。

### 分类
当想要预测不同可能性的结果时，分类是最重要的 ML 任务之一。例如，给定手写数字，用尽可能最低的错误对它们进行分类。
最简单的情况是二元分类(是或否，获救或未获救) ，看看 [这里](https://machinelearningmastery.com/make-predictions-scikit-learn/) 。
查看 [这里](https://towardsdatascience.com/building-a-logistic-regression-in-python-301d27367c24) 以获得分类逻辑回归理论的简要说明，并查看 [这里](https:// www.youtube.com/watch?v=VCJdg7YBbAQ) 深入理解(使用泰坦尼克号数据集) 。
你可以使用许多不同的 ML 模型对事物进行分类，甚至是神经网络！现在，只需看看 [这里](https://scikit-learn.org/stable/auto_examples/classification/plot_classifier_comparison.html) ，你可以在其中看到不同模型之间的准确性和召回比较示例。
[这里](https://medium.com/thalus-ai/performance-metrics-for-classification-problems-in-machine-learning-part-i-b085d432082b) 你有一篇关于用于 **评估指标的文章** 你的分类器。

### 训练模型
在这里，我将 ML 任务中使用的一些技术分组以训练模型。
在这个 Google 速成课程中，你会发现：
- [梯度下降](https://developers.google.com/machine-learning/crash-course/reducing-loss/gradient-descent)
- [学习率](https://developers.google.com/machine-learning/crash-course/reducing-loss/learning-rate)
- [SGD](https://developers.google.com/machine-learning/crash-course/reducing-loss/stochastic-gradient-descent)
- [正则化](https://www.youtube.com/watch?v=Q81RR3yKn30)

### 支持向量机
这是创建 ML 模型的另一种经典算法。
[这里](https://www.youtube.com/watch?v=_PwhiWxHK8o) 你有理论的解释，[这里](https://www.youtube.com/watch?v=g8D5YL6cOSE) 一个更实用的方法。两个都要检查。
[这里](https://scikit-learn.org/stable/modules/svm.html) 是 Scikit-Learn 中非常好的解释 + 练习的应用程序。

### 决策树
决策树是预测结果背后最简单但最有效的思想之一，它们以多种方式使用(例如随机森林)。选中 [此处](https://www.youtube.com/watch?v=eKD5gxPPeY0&list=PLBv09BD7ez_4temBw7vLA19p3tdQH6FYO) 并浏览播放列表以获得决策树(ID3)的理论概述。
[这里](https://scikit-learn.org/stable/modules/tree.html) 你有 ID3 的实际应用。
这里有 Scikit-Learn 的一些端到端示例：
- [示例 1](https://www.youtube.com/watch?v=9YcMzsFvfxU)
- [示例 2](https://www.youtube.com/watch?v=RmajweUFKvM)
- [示例 3](http://dataaspirant.com/2017/02/01/decision-tree-algorithm-python-with-scikit-learn/)
- [示例 4](https://mathspp.blogspot.com/2018/08/teaching-robot-how-to-vacuum-clean-with.html) 将决策树与遗传算法结合起来。

### 集成学习(Ensemble Learning)和随机森林
集成学习的想法是利用几个 ML 模型的所有不同特征，优点和缺点来获得一组 “选民”，对于每个预测，给出最可能的结果，由不同的分类器投票(SVM，ID3，也许是 Logistic 回归) 。
[这里](https://www.youtube.com/watch?v=9VmKYwX_U7s) 你得到了整体学习模型的基础知识，[这里](https://www.youtube.com/watch?v=3kYujfDgmNk) 你会找到最经典的随机森林。虽然这个想法很简单，但这个集合模型在处理甚至一些 “硬” 分类问题或者大量数据方面都非常有效。

[这里](https://scikit-learn.org/stable/modules/ensemble.html) 你可以全面了解集成学习的最佳实践，[这里](https://towardsdatascience.com/random- forest-in-python-24d0893d51c0) 你找到了一个随机森林与 Scikit-Learn 的例子。这两个链接都附带了一些有用的技术，可以在实践中使用。

### 无监督学习
_首先看(按顺序) ：_
- [这里](https://www.youtube.com/watch?v=8dqdDEyzkFA&t=14s) 你有一个简短的介绍性视频。
- [这里](https://towardsdatascience.com/unsupervised-learning-with-python-173c51dc7f03) 文章非常好地解释了无监督学习。
- [这里](https://blogs.nvidia.com/blog/2018/08/02/supervised-unsupervised-learning/) 是关于监督学习，无监督学习和强化学习之间差异的有趣读物。

这里最重要的两个技术是 [关联规则探索](https://searchbusinessanalytics.techtarget.com/definition/association-rules-in-data-mining) 和 [聚类](https://www.geeksforgeeks.org/clustering-in-machine-learning/) 。我提供了两者的示例和教程。

关联规则教程和示例：[1](https://www.learndatasci.com/tutorials/k-means-clustering-algorithms-python-intro/), [2](https://towardsdatascience.com/an-introduction-to-clustering-algorithms-in-python-123438574097), [3](https://pythonprogramming.net/flat-clustering-machine-learning-python-scikit-learn/), [4](https://www.datacamp.com/community/tutorials/k-means-clustering-python), [5](https://stackabuse.com/hierarchical-clustering-with-python-and-scikit-learn/) 。

集群教程和示例：[1](https://pbpython.com/market-basket-analysis.html), [2](http://rasbt.github.io/mlxtend/user_guide/frequent_patterns/association_rules/), [3](https://stackabuse.com/association-rule-mining-via-apriori-algorithm-in-python/), [4](http://intelligentonlinetools.com/blog/2018/02/10/how-to-create-data-visualization-for-association-rules-in-data-mining/), [5](https://www.kaggle.com/datatheque/association-rules-mining-market-basket-analysis), [6](https://www.kdnuggets.com/2016/04/association-rules-apriori-algorithm-tutorial.html)。

_其次看：_
[斯坦福幻灯片](https://lagunita.stanford.edu/c4x/HumanitiesScience/StatLearning/asset/unsupervised.pdf) 。
[麻省理工学院幻灯片](http://www.mit.edu/~9.54/fall14/slides/Class13.pdf) 。

 _提示与最佳实践：_
[1](https://towardsdatascience.com/the-5-clustering-algorithms-data-scientists-need-to-know-a36d136ef68), [2](https://dzone.com/articles/10-interesting-use-cases-for-the-k-means-algorithm), [3](https://medium.com/@blazetamareborn/practicing-clustering-techniques-on-survey-dataset-f7d7a322e6ff), [4](https://www.analyticsindiamag.com/most-popular-clustering-algorithms-used-in-machine-learning/), [5](https://www.analyticsvidhya.com/blog/2017/02/test-data-scientist-clustering/)。

### 结束并期待
现在，如果你按照所有步骤并浏览了我发布的所有资源，你可能会对机器学习更有信心并且对事物有一个大概的了解。当然，你需要探索和了解更多信息，因为这个领域每天都在改变和增强技术和方法！我们看到的所有算法都广泛应用于数据科学和分析领域，但是有一些复杂的任务会导致它们失败或者性能很差。现在我们已经准备好深入兔子洞，并尝试了解神经网络和深度学习如何帮助解决数百万变量的问题。
[为什么使用深度学习而非经典 ML 算法？](https://towardsdatascience.com/why-deep-learning-is-needed-over-traditional-machine-learning-1b6a99177063)

-------------------------------------------------- ---------------

## TensorFlow 神经网络
在本节中，我们将按照斯坦福大学深度学习课程和我通过互联网搜索的一些教程，遵循一条将我们从神经网络的零知识带到完全理解它们的轨道。其中一些来自谷歌，其他来自斯坦福大学或剑桥大学，你将学习利用神经网络 (ANN，CNN，RNN) 进行几种 ML 任务。
这些是使用 TensorFlow 进行 ML 任务的 [某些用例](https://www.digitaldoughnut.com/articles/2017/march/top-5-use-cases-of-tensorflow) 。

乍一看，理解神经网络的理论和应用并不容易。 你需要反复阅读教程才能完全理解该主题。 我花了相当多的时间试图理解它们。 阅读文章，官方论坛，学习路径（如此）和相关的 subreddits 是深入学习概念，公式，权衡的最有效方式......
我提出了这种方法，但你可以根据自己的喜好调整它，因为每个想法都是不同的。

> 在获取 TensorFlow 部分后，应用此部分
> 3 步迭代循环：

>- 1 通过这个 [斯坦福课程](https://www.youtube.com/watch?v=vT1JzLTH4G4&list=PL3FW7Lu3i5JvHM8ljYj-zLfQRF3EO8sYv) 的整个传递来了解主要概念，不要担心太多关于数学解释，关注 **什么** 和 **为什么** 。

>- 2 一次深入探索 **一个主题** ，理论 + 教程 + 例子(例如 RNN 理论 + RNN 教程 + RNN 示例)
> 使用指南主题部分的链接和资源。

>- 3 在为每个主题迭代第 2 步之后，再次浏览整个斯坦福大学课程。这次你可以完全理解所有公式，连接它们并捕捉课程的 “数学流程”。
这个迭代过程(1-2-2-2-2 .....- 3) 可以根据需要重复多次，并且可能会在你的脑海中构建一个很好的 **一般模式** 。在每个完整的迭代中，你可以删除一个或多个主题，并专注于那些对你更有趣或不太清楚的主题。

在每个部分中，我首次将内容放在那里(在第一次完整的迭代期间) ，以及下次到达那里时的一些内容(在第 3 步之后) 。

该结构遵循令人敬畏的斯坦福大学课程提出的轨道。你可以找到幻灯片 [这里](http://cs231n.stanford.edu/slides/2018/) 。

[这里](http://introtodeeplearning.com/) 是麻省理工学院的另类课程，或多或少相同的内容。值得观察它来比较并对你正在学习的东西有不同的观点，除了聆听世界上最好的教授探索每个主题。

这是我在每个部分中提到的 [**书**](https://www.deeplearningbook.org/) 。

### 为什么选择 TensorFlow？
由 [Google Brain](https://ai.google/research/teams/brain) 团队创建，[TensorFlow](https://www.tensorflow.org/) 是一个用于数值计算和大型数据计算的机器学习开源库。 TensorFlow 将大量机器学习和深度学习(又称神经网络) 模型和算法捆绑在一起，并通过一个常见的比喻使它们变得有用。它使用 Python 提供方便的前端 API，用于使用框架构建应用程序，同时在高性能 C++ 中执行这些应用程序。
TensorFlow 是需要实施机器学习算法的主要行业规模公司的事实标准。它专为扩展而设计，具有非常酷的功能，可以在多个 GPU 或设备上并行化训练。

### 启动并运行 TensorFlow 
假设你 [Python 存储在变量 PATH 中](https://helpdeskgeek.com/windows-10/add-windows-path-environment-variable/) ，要安装 TensorFlow 库，你只需在内部打开一个终端 Python 安装文件夹并运行此命令。

```
python pip install tensorflow
```
我推荐你的第一个读物是 [这个](https://www.infoworld.com/article/3278008/what-is-tensorflow-the-machine-learning-library-explained.html) 。
第二件事是直接从 **很棒的** [Google Education](https://ai.google/education/)。页面跟随到这个 [TensorFlow 简介](https://www.youtube.com/watch?v=tYYVSEHq-io) 。
同样，一些理论概念可能不清楚，但重点关注如何构思 TensorFlow 库和流程。
[这里](https://medium.com/@camrongodbout/tensorflow-in-a-nutshell-part-one-basics-3f4403709c9d) 是后者的一个很好的简历。
[来自谷歌的另一个初学者教程](https://codelabs.developers.google.com/codelabs/tensorflow-for-poets/#0) 。
[这里](https://www.youtube.com/watch?v=k5c-vg4rjBw&t=246s) 是关于 TensorFlow 2.0 更新的。
这些 [1](https://jacobbuckman.com/post/tensorflow-the-confusing-parts-1/) 和 [2](https://jacobbuckman.com/post/tensorflow-the-confusing-parts-2/) 解释 TensorFlow 要掌握的 “难” 事。强烈推荐。

现在你很可能熟悉 **TensorFlow 作为工具**，现在是时候理解 **如何使用** 它来构建大规模神经网络。

### ANN - 人工神经网络
_首先看(按顺序) ：_
- [此视频](https://www.youtube.com/watch?v=v2tKoymKIuE) 。
- [这是你的圣经](http://neuralnetworksanddeeplearning.com/chap1.html) ，要完全理解。
- [这是一个宝藏](https://playground.tensorflow.org/#activation=tanh&batchSize=10&dataset=circle&regDataset=reg-plane&learningRate=0.03&regularizationRate=0&noise=0&networkShape=4,2&seed=0.85356&showTestData=false&discretize=false&percTrainData=50&x=true&y=true&xTimesY=false&xSquared=false&ySquared=false&cosX=false&sinX=false&cosY=false&sinY=false&collectStats=false&problem=classification&initZero=false&hideText=false) 并阅读来自作者的 [这个](https://www.guru99.com/artificial-neural-network-tutorial.html) 。
- [这个](https://www.youtube.com/watch?v=o64FV-ez6Gw&t=540s) 是一个非常快速的人，从头开始实现神经网络库，对于理解 NN 的核心非常有用是用 Python 实现的。你可以想象每个现有框架只是这个概念库的巨大扩展。
- [这个](https://mattmazur.com/2015/03/17/a-step-by-step-backpropagation-example/) 是使用微积分的逐步反向传播示例。

_其次看：_
- [ANN 章节](https://www.deeplearningbook.org/contents/mlp.html) 。

_提示与最佳实践：_
[1](https://developers.google.com/machine-learning/crash-course/training-neural-networks/best-practices), [2](https://hackernoon.com/8-deep-learning-best-practices-i-learned-about-in-2017-700f32409512), [3](https://towardsdatascience.com/10-things-to-think-about-before-starting-to-code-your-deep-neural-network-65094a1e7c08), [4](https://towardsdatascience.com/how-to-increase-the-accuracy-of-a-neural-network-9f5d1c6f407d), [5](https://www.reddit.com/r/MachineLearning/comments/abj1mc/d_notes_on_why_deep_neural_networks_are_able_to/), [6](https://www.reddit.com/r/MachineLearning/comments/abj1mc/d_notes_on_why_deep_neural_networks_are_able_to/), [7](http://karpathy.github.io/neuralnets/), [8](https://medium.com/cracking-the-data-science-interview/a-gentle-introduction-to-neural-networks-for-machine-learning-d5f3f8987786)。

### CNN - 卷积神经网络
_首先看(按顺序) ：_
- [这里](https://ujjwalkarn.me/2016/08/11/intuitive-explanation-convnets/) 是一个很棒的深刻解释。
- [这里](https://medium.com/technologymadeeasy/the-best-explanation-of-convolutional-neural-networks-on-the-internet-fbb8b1ad5df8) 另一个超级好的。
- [此处](https://developers.google.com/machine-learning/practica/image-classification/) 是来自 Google 的严肃的 CNN 教程。
- [这里](http://setosa.io/ev/image-kernels/) 你有一个惊人的互动演示。

_其次看：_
- [CNN Chapter](https://www.deeplearningbook.org/contents/convnets.html) 。

_提示与最佳实践：_
[1](https://ujjwalkarn.me/2016/08/11/intuitive-explanation-convnets/), [2](https://www.topbots.com/14-design-patterns-improve-convolutional-neural-network-cnn-architecture/), [3](https://arxiv.org/abs/1709.02601), [4](https://de.mathworks.com/matlabcentral/answers/362024-convolutional-neural-networks-what-is-the-best-practice-training-approach-using-graphics-cards), [5](http://www.academia.edu/4057996/Best_Practices_for_Convolutional_Neural_Networks_Applied_to_Visual_Document_Analysis), [6](https://www.microsoft.com/en-us/research/publication/best-practices-for-convolutional-neural-networks-applied-to-visual-document-analysis/), [7](https://missinglink.ai/guides/neural-network-concepts/neural-networks-image-recognition-methods-best-practices-applications/), [8](https://machinelearningmastery.com/best-practices-document-classification-deep-learning/)。

### RNN - 递归神经网络
_首先看(按顺序) ：_
- [这里](http://colah.github.io/posts/2015-08-Understanding-LSTMs/) ，一个温和但详细的解释。
- [这里](https://www.superdatascience.com/blogs/the-ultimate-guide-to-recurrent-neural-networks-rnn) 是另一个有趣的解释。
- [这里](https://www.youtube.com/watch?v=9zhrxE5PQgY) 是一个更实用的视频。
- [这里](https://becominghuman.ai/a-noobs-guide-to-implementing-rnn-lstm-using-tensorflow-1907a5bbb1fa) ，在 TensorFlow 中实施 RNN 的指南。
- [这里](https://medium.com/@erikhallstrm/hello-world-rnn-83cd7105b767) ，一篇长达 7 页的关于 TensorFlow 实施的博文。

_其次看：_
- [RNN 章节](https://www.deeplearningbook.org/contents/rnn.html)

_提示与最佳实践：_
[1](https://danijar.com/tips-for-training-recurrent-neural-networks/), [2](https://svail.github.io/rnn_perf/), [3](https://towardsdatascience.com/rnn-training-tips-and-tricks-2bf687e67527), [4](http://slazebni.cs.illinois.edu/spring17/lec20_rnn.pdf), [5](https://www.quora.com/What-are-the-best-practices-for-choosing-hidden-state-size-in-RNNs), [6](https://www.quora.com/Can-recurrent-neural-networks-with-LSTM-be-used-for-time-series-prediction), [7](https://www.reddit.com/r/MachineLearning/comments/5ogbd5/d_training_lstms_in_practice_tips_and_tricks/) 。

### 训练网络：最佳实践
_首先看(按顺序) ：_
我强烈建议 ** 你参考斯坦福大学的 [本页](http://cs231n.github.io/) 并浏览所有模块 1 和 2。
我还在这里列出了在讨论如何在现实生活应用中训练 NN 时要探索的各种主题的列表。

- 过拟合与欠拟合：[1](https://keeeto.github.io/blog/bias_variance/), [2](https://cran.r-project.org/web/packages/keras/vignettes/tutorial_overfit_underfit.html), [3](https://machinelearningmastery.com/overfitting-and-underfitting-with-machine-learning-algorithms/), [4](https://medium.com/greyatom/what-is-underfitting-and-overfitting-in-machine-learning-and-how-to-deal-with-it-6803a989c76), [5](https://elitedatascience.com/overfitting-in-machine-learning)。
- 梯度消失/爆炸：[1](https://medium.com/learn-love-ai/the-curious-case-of-the-vanishing-exploding-gradient-bf58ec6822eb), [2](https://machinelearningmastery.com/exploding-gradients-in-neural-networks/), [3](https://hackernoon.com/exploding-and-vanishing-gradient-problem-math-behind-the-truth-6bd008df6e25), [4](https://www.jefkine.com/general/2018/05/21/2018-05-21-vanishing-and-exploding-gradient-problems/), [5](https://medium.com/@prateekvishnu/xavier-and-he-normal-he-et-al-initialization-8e3d7a087528)。
- 迁移学习：[1](https://medium.com/analytics-vidhya/reusing-a-pre-trained-deep-learning-model-on-a-new-task-transfer-learning-1c0a25a92dfb), [2](https://www.analyticsvidhya.com/blog/2017/06/transfer-learning-the-art-of-fine-tuning-a-pre-trained-model/), [3](https://jjallaire.github.io/deep-learning-with-r-notebooks/notebooks/5.3-using-a-pretrained-convnet.nb.html), [4](https://towardsdatascience.com/a-comprehensive-hands-on-guide-to-transfer-learning-with-real-world-applications-in-deep-learning-212bf3b2f27a), [5](https://machinelearningmastery.com/transfer-learning-for-deep-learning/)。
- 更快的优化器：[1](http://ruder.io/optimizing-gradient-descent/), [2](https://www.jeremyjordan.me/nn-learning-rate/), [3](https://towardsdatascience.com/learning-rate-schedules-and-adaptive-learning-rate-methods-for-deep-learning-2c8f433990d1), [4](https://towardsdatascience.com/learning-rate-scheduler-d8a55747dd90)。
- 通过正则化避免过拟合：[1](https://towardsdatascience.com/regularization-in-machine-learning-76441ddcf99a), [2](https://codeburst.io/what-is-regularization-in-machine-learning-aed5a1c36590), [3](https://www.analyticsvidhya.com/blog/2018/04/fundamentals-deep-learning-regularization-techniques/), [4](https://machinelearningmastery.com/weight-regularization-to-reduce-overfitting-of-deep-learning-models/)。

_其次看：_
- [Google 最佳实践](https://developers.google.com/machine-learning/guides/rules-of-ml/) 。
- [正则化章节](https://www.deeplearningbook.org/contents/regularization.html) 。
- [优化章节](https://www.deeplearningbook.org/contents/optimization.html) 。
- [实用方法论章节](https://www.deeplearningbook.org/contents/guidelines.html) 。

### 自动编码器
_首先看(按顺序) ：_
- [这里](https://www.quora.com/What-is-an-auto-encoder-in-machine-learning) 你会发现第一次阅读。
- [这里](https://towardsdatascience.com/deep-inside-autoencoders-7e41f319999f) 是你的第二个推荐读物。
- [这里](https://www.youtube.com/watch?v=vfnxKO2rMq4) 是 Andrew NG 的讲座。
- 我还举了一些例子：[1](https://www.guru99.com/autoencoder-deep-learning.html), [2](https://github.com/aymericdamien/TensorFlow-Examples/blob/master/examples/3_NeuralNetworks/autoencoder.py), [3](https://towardsdatascience.com/deep-autoencoders-using-tensorflow-c68f075fd1a3), [4](http://machinelearninguru.com/deep_learning/tensorflow/neural_networks/autoencoder/autoencoder.html), [5](https://mathspp.blogspot.com/2019/03/generating-natural-looking-digits-with.html)

_其次看：_
[AutoEncoders Chapter](https://www.deeplearningbook.org/contents/autoencoders.html) 。

_提示与最佳实践：_
[1](https://stats.stackexchange.com/questions/257163/architecture-of-autoencoders), [2](https://stats.stackexchange.com/questions/193780/how-much-noise-for-denoising-autoencoder), [3](https://www.reddit.com/r/MachineLearning/comments/6aw8ik/d_reddit_do_you_use_autoencoders_in_practice/), [4](https://www.reddit.com/r/MachineLearning/comments/89f17m/d_current_best_practices_for_vaes/), [5](https://www.reddit.com/r/MachineLearning/comments/5k8h07/p_insights_into_variational_autoencoders_for/)。

### 强化学习
_首先看(按顺序) ：_
- [这里](https://www.youtube.com/watch?v=2pWv7GOvuf0) 你有一个解释视频。
- [这里](https://skymind.ai/wiki/deep-reinforcement-learning) 文章很好地解释了 RL。
- [这里](https://towardsdatascience.com/what-to-expect-from-reinforcement-learning-a22e8c16f40c) 是一本有趣的读物。
- [这篇文章](https://mathspp.blogspot.com/2018/09/markov-decision-processes-basics.html) 将一个直观的例子与一些正式的定义结合起来。
- 一些例子：[1](https://adventuresinmachinelearning.com/reinforcement-learning-tensorflow/), [2](https://medium.com/tensorflow/deep-reinforcement-learning-playing-cartpole-through-asynchronous-advantage-actor-critic-a3c-7eab2eea5296), [3](https://www.youtube.com/watch?v=t1A3NTttvBA), [4](https://github.com/MorvanZhou/Reinforcement-learning-with-tensorflow)。

_其次看：_
[指南](https://lilianweng.github.io/lil-log/2018/02/19/a-long-peek-into-reinforcement-learning.html?utm_campaign=Data%20Machina&utm_medium=email&utm_source=Revue%20newsletter).
[论文](https://arxiv.org/pdf/1710.02298.pdf) with state-of-the-art RL architecture.
[关于 RL 的完整免费书籍](http://www0.cs.ucl.ac.uk/staff/d.silver/web/Teaching.html)。

 _提示与最佳实践：_
[1](https://medium.com/@BonsaiAI/deep-reinforcement-learning-models-tips-tricks-for-writing-reward-functions-a84fe525e8e0), [2](https://towardsdatascience.com/applications-of-reinforcement-learning-in-real-world-1a94955bcd12).

## 实用工具

**嘿，你**。
在过去的几年里，我收集了大量的文章，网络应用程序，reddit 线程，最佳实践，项目和 repo ，我想与你分享每一点信息，按资源类型(博客或项目创意，以及等等) 。

### 机器学习项目

- 数据科学备忘单 [极其庞大的收藏](https://github.com/FavioVazquez/ds-cheatsheets)
- 真实数据科学/ML 项目的 [无限集合](https://docs.google.com/document/d/e/2PACX-1vRRC3ZIcvjFqEYEgnN9pptoWONr2mSGZJ4hSdL8Jpf2IpXdxjTc-d3jrpb98h59xJnZ3h1frUDydoxc/pub)
- TensorFlow 中的教程和 ML 项目的 [无限集合](https://github.com/jtoy/awesome-tensorflow)
- [其他 TensorFlow 示例](https://github.com/aymericdamien/TensorFlow-Examples)

### 工具

- [Google 数据可视化方面](https://pair-code.github.io/facets/)
- [交互式神经网络](https://playground.tensorflow.org/#activation=tanh&batchSize=10&dataset=circle&regDataset=reg-plane&learningRate=0.03&regularizationRate=0&noise=0&networkShape=4,2&seed=0.95549&showTestData=false&discretize=false&percTrainData=50&x=true&y=true&xTimesY=false&xSquared=false&ySquared=false&cosX=false&sinX=false&cosY=false&sinY=false&collectStats=false&problem=classification&initZero=false&hideText=false)

### Youtube 频道

- [Enthought](https://www.youtube.com/user/EnthoughtMedia/videos)
- [Siraj Raval](https://www.youtube.com/channel/UCWN3xxRkmTPmbKwht9FuE5A)
- [3Blue1Brown](https://www.youtube.com/channel/UCYO_jab_esuFRV4b17AJtAw)
- [微软](https://www.youtube.com/channel/UCFtEEv80fQVKkD4h1PF-Xqw)
- [TensorFlow 官方频道](https://www.youtube.com/channel/UC0rqucBdTuFTjJiefW5t-IQ)
- [工程人(Engineering Man)](https://www.youtube.com/channel/UCrUL8K81R4VBzm-KOYwrcxQ)
- [技术主管](https://www.youtube.com/channel/UC4xKdmAXFh4ACyhpiQ_3qBw)

### 博客

- [如何构建数据科学组合](https://lilianweng.github.io/lil-log/2018/02/19/a-long-peek-into-reinforcement-learning.html?utm_campaign=Data%20Machina&utm_medium=email&utm_source=Revue%20newsletter)
- [Distill 博客](https://distill.pub/)
- [Keras](https://www.youtube.com/user/EnthoughtMedia/videos)
- [Paolo Galeone 博客](https://pgaleone.eu/)
- [TensorFlow 官方博客](https://medium.com/tensorflow)
- [KD Nuggets](https://www.kdnuggets.com/)
- [令人难以置信的图解说明](http://colah.github.io/)
- [走向数据科学](https://towardsdatascience.com)
- [机器学习掌握](https://machinelearningmastery.com/blog/)
- [Mathspp 博客](http://mathspp.blogspot.com/)

### 值得一看的网站！

- [我读过的最好的机器学习 **短** 书](https://www.ibm.com/downloads/cas/GB8ZMQZ3)
- [数据相关免费课程的怪物集](https://github.com/kmario23/deep-learning-drizzle)
- [机器学习地图](http://www.saedsayad.com/data_mining_map.htm)
- [商业智能的数据建模](https://www.1keydata.com/datawarehousing/data-modeling-levels.html)
- [统计解释](http://www.statsoft.com/Textbook/Elementary-Statistics-Concepts#Two%20basic%20features%20of%20every%20relation%20between%20variables)
- [可视化数据 - 教程](https://datascienceplus.com/category/visualizing-data/?tdo_tag=Python)
- [Fast.ai](https://www.fast.ai/)
- [Open.ai](https://openai.com/blog/better-language-models/)
- [Explained.ai](https://explained.ai/)
- [机器学习名词解释](https://developers.google.com/machine-learning/glossary/)
- [Python ML 教程](https://www.python-course.eu/machine_learning.php)
- [对于意大利学习者！](https://www.deeplearningitalia.com/)
- [沉浸式数学](http://immersivemath.com/ila/)
- [DeepLizard](http://deeplizard.com/)
- [共同统计谬误](https://www.geckoboard.com/learn/data-literacy/statistical-fallacies/)
- [Scikit-Learn 实用食谱](http://gael-varoquaux.info/scikit-learn-tutorial/)

### 想要关注的 Subreddits！

- [10 个与数据科学相关非常棒的 subreddits](https://www.analyticsindiamag.com/10-data-science-subreddits-every-tech-enthusiast-should-follow/)
- [一个令人难以置信的发现趋势和定阅的工具](https://anvaka.github.io/sayit/?query=MachineLearning)

## 后续步骤路线图

由于本指南取得了巨大成功，我决定对其进行大量扩展，并针对不同主题进行更多类似的讨论。
我将在接下来的几周内添加的一些扩展程序包括：
- 无监督学习：**完成**
- 机器学习心态框架(如何像数据科学家一样思考)
- 使用 Pandas 进行数据处理和准备
- 功能选择
- 特征工程
- 扩展参数优化部分
- Keras 库
- TensorFlow 2.0
- 如何在 AWS 上部署我的模型
- 如何在 Azure 上部署我的模型
稍后，我将使用 AWS 和 Azure 完成云计算的整个指南！

### ... 即将推出！敬请关注 ：)