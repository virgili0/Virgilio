# 数据可视化

智人难以在非洲大草原中生存：人类或动物可以随时杀死你。
人类的大脑已经在这种疯狂且不可预测的环境中进化，并且 “巧合地” 选择进化以通过 **视觉投入大量计算能力来捕捉和理解世界**（[超过 60％](https://www.quora.com/How-much-of-the-brain-is-involved-with-vision-What-about-hearing-touch-etc)。
因此, 清晰有效的数据可视化是你在数据科学领域中的最佳武器之一, 这是很微不足道的。

为本启发我写本指南路的是必买书之一的 [**用数据讲故事**](https://www.amazon.it/Storytelling-Data-Visualization-Business-Professionals/dp/1119002257/ref=sr_1_1?adgrpid=52005426669&gclid=CjwKCAjwndvlBRANEiwABrR32EhKMtGs8M5mBgl5lQJZCf9fglkx87ujqYVZk6gHsMDxKOd9yQa7uRoCin8QAvD_BwE&hvadid=255222968297&hvdev=c&hvlocphy=1008297&hvnetw=g&hvpos=1t3&hvqmt=e&hvrand=3841532584099296285&hvtargid=kwd-297573901809&keywords=storytelling+with+data&qid=1555538994&s=gateway&sr=8-1) 。到目前为止，这是我读过的最好的数据可视化书。

你可以在 [这里](http://www.bdbanalytics.ir/media/1123/storytelling-with-data-cole-nussbaumer-knaflic.pdf) 找到免费的 PDF。

另一个密集的知识，具有非凡的简洁性和每个数据可视化书之 “父”：[**定量信息的视觉显示**](https://www.amazon.it/Visual-Display-Quantitative-Information/dp/0961392142) 。

我假设你知道 [基础 Python](https://github.com/clone95/Virgilio/blob/master/zh-CN/NewToDataScience/PythonBasic.md) 。

此处列出的每个内容 **都不是** 特定于工具的（除了 “工具” 之外，你有没有想象过？) 。

我们要走的概念如下：

- [勒苟拉斯(Legolas)，你的精灵眼睛怎么看？](#勒苟拉斯(Legolas)，你的精灵眼睛怎么看？)
- [语境的重要性](#语境的重要性)
- [数据墨水比](#数据墨水比)
- [选择有效的视觉](#选择有效的视觉)
- [关注观众的注意力](#关注观众的注意力)
- [像设计师一样思考](#像设计师一样思考)
- [探索模型视觉](#探索模型视觉)
  - [折线图](折线图)
  - [带注释的折线图](#带注释的折线图)
  - [堆叠条形图(Stacked Bars)](#堆叠条形图)
  - [正负堆叠条形图](#正负堆叠条形图)
  - [水平堆叠条形图](#水平堆叠条形图)
- [数据可视化工具](#数据可视化工具)
  - [Microsoft Excel](#Microsoft-Excel)
  - [MatplotLib](#MatplotLib)
  - [Seaborn](#Seaborn)
  - [Bokeh](#Bokeh)
  - [Tableau](#Tableau)
  - [Power Bi](#Power-Bi)
- [获取灵感](#获取灵感)
- [用数据讲故事](#用数据讲故事)
- [常见的可视化错误](#常见的可视化错误)
- [附加资源](#附加资源)
- [结束并期待](#结束并期待)

#### **开始吧！**
------------------------------------------------

### 勒苟拉斯(Legolas)，你的精灵眼睛怎么看？

我对数据可视化有什么打算？
让我们考虑 [Tableau](https://www.tableau.com/zh-cn/learn/articles/data-visualization) 定义：
> 数据可视化是指信息和数据的图形化表示。使用图表、图形和地图等可视化元素，数据可视化是查看和了解数据中趋势、异常值和模式的便利方式。
> 在大数据领域，数据可视化工具和技术对于分析海量信息并制定数据驱动型决策而言至关重要。

根据 [维基百科](https://en.wikipedia.org/wiki/Data_visualization) ：

> 有效的可视化帮助用户分析和推理数据和证据。它使复杂数据更易于访问，易于理解和使用。用户可能具有特定的分析任务，例如进行比较或理解因果关系，并且图形的设计原则应遵循任务。

因此，数据可视化的 **目标** 是 _传达数据事实_ 以推动明智的商业决策。通常这些决策必须由高管，理事会或经理采取，也许他们不知道数据背后的所有技术内容！

你应该熟悉的另一个有趣的概念是数据驱动型公司，这是一种越来越有说服力的组织与之结合的商业模式。

[这里](https://triggerbee.com/data-driven-marketing) 你找到了一个很好的数据驱动公司定义和 [这里](https://www.businessmodelsinc.com/big-data-business-models/) 一篇有趣的文章。

作为一名数据科学家，你是多个业务职能部门之间的接口：产品，调研，技术人员和管理人员，你的主要目标是说服人们根据数据做出正确的决策。

通常，你打算从底层技术细节中抽象出数据的表示，并将其提供给其他人。
像往常一样，你所指的目标是决定沟通数据以及如何沟通的基础。

这种说法的自然结果是你需要考虑背景的重要性。

### 语境的重要性

与任何其它沟通领域一样，了解你的受众对于了解你需要沟通的内容至关重要。
[这里](https://www.watershedlrs.com/blog/data-storytelling-know-your-audience) 你会找到一篇文章，其中包含一些了解你的受众的提示。
基本上，你对自己的受众兴趣，工作和个人情况了解得越多，就越能够拦截他们的业务需求和愿望。
你对自己的受众群体的具体了解越多，你对成功沟通的立场就越有效。
避免普通受众，例如 “外部利益相关者” 或 “产品部门中的任何人”，试图同时与不同需求的太多不同个体进行沟通，你可能无法像在缩小范围时那样有效地与任何人沟通你的目标受众。
如果由于某种原因 _必须_ 保持一般性，请尽量简化，并查看 [这里](https://www.anl.gov/education/writing-a-general-audience-abstract) 获取一些有用的提示。
[这里](https://www.techchange.org/2015/05/21/audience-matters-in-data-visualization/) 你还有其它原因可以说明你的数据展示应该由目标受众推动。
一旦清楚了解目标，就可以开始开发想要呈现的内容。

### 数据墨水比

人类的大脑资源有限，而且数字和概念过度使用只会导致负面影响。人们很容易感到厌倦，特别是如果你的图表难以阅读或者他们提供了很多信息。
正如我在 [有影响力的演示指南](https://github.com/clone95/Virgilio/blob/master/Specializations/SoftSkills/ImpactfulPresentations.md) 中教给你的大部分概念，Less Is More 是你的原则之一需要严格遵守。
Tufte 的书强调这一点，毫不留情地称之为 “信息/墨水比”。
[这里](https://www.darkhorseanalytics.com/blog/data-looks-better-naked) 你会发现一个有趣的图表之旅，这使得它对极简主义的最新技术不可读。这里的一般教训就是摆脱不需要传达数据核心的一切：额外的线条，数字，图例，名称，点等等。

你可以避免的噪音越多，你的信息就会越轻柔地流向你的观众，他们就会记得越多。

**数据墨水比（data-lik Ratio） = 图表中用于数据的墨水量 / 总墨水量**

了解如何优化数据-墨水比的一些附加资源：

- [1](https://thedoublethink.com/tuftes-principles-for-visualizing-quantitative-information/), [2](https://medium.com/@sudharsanasai/declutter-your-chart-with-data-ink-ratio-6f6908727842), [3](http://davidgiard.com/2011/05/12/DataVisualizationPart5DataInk.aspx), [4](https://www.blue-granite.com/blog/data-visualization-remove-chart-clutter-and-focus-on-the-insights), [5](https://www.idashboards.com/blog/2016/05/19/spring-cleaning-eliminate-the-data-clutter/), [6](http://www.storytellingwithdata.com/blog/2016/3/1/declutter-your-data-visualizations)

### 选择有效的视觉效果

作为战士根据上下文选择他的武器，你必须明智地选择用于表示你想要传达的每个数字的图表。
[这里](https://chartio.com/learn/dashboards-and-charts/what-are-common-chart-types-and-how-to-use-them/) 是最常见形状的列表，提出数据的想法。
正如你所看到的，有许多不同的图形和其它类型的视觉信息显示，但少数将满足你的大多数需求（[请不要使用饼状图](https://www.businessinsider.com/pie-charts-are-the-worst-2013-6?IR=T)!)。

[这里](https://support.geckoboard.com/hc/en-us/articles/115002929972-How-to-choose-the-right-data-visualization) 和 [这里](https//blog.hubspot .com / marketing / of-graph-for-data-visualization) 一个易于遵循的详细清单，以确定哪种类型的图表最适合你的情况。

### 关注受众的注意力

在大脑中，有三种类型的记忆在我们设计视觉通信时很重要：[图像](https://en.wikipedia.org/wiki/Iconic_memory) 记忆，[短期](https://zh.wikipedia.org/wiki/%E7%9F%AD%E6%9C%9F%E8%AE%B0%E5%BF%86) 记忆(iconic memory) 和 [长期](https://zh.wikipedia.org/wiki/%E9%95%BF%E6%9C%9F%E8%AE%B0%E5%BF%86) 记忆。我们需要很好地利用我们的演讲是标志性的。事实上，它对我们所看到的第一印象的大部分负责，并且迄今为止对我们的感知产生了最重要的影响。
[这里](https://brevitaz.com/data-visualisations/) 你可以找到有关如何利用图像记忆的良好解释。
[这里](https://www.clarityinsights.com/blog/perception-communication) 另一篇关于这个主题的好读物。

### 像设计师一样思考

设计中最重要的原则是 “_____的设计应该由其功能驱动”。
想象一下 [剑(gladius)](https://it.wikipedia.org/wiki/Gladius_hispaniensis) ，罗马军队实用的的武器：即使没有人告诉你，你也可以轻松地理解他的目的是什么！

阅读 [这里](https://www.team-consulting.com/insights/design-drivers-what-drives-great-design/) 温和的设计理论介绍，真的值得推荐！
你可以在 [这里](http://guides.lib.berkeley.edu/data-visualization/design) 找到有用的设计指南，[这里](https://uxdesign.cc/designing-a-dashboard-how-to -make-sure-it-will-show-useful-data-23af7e233d21) 如何设计有效的仪表板。

### 探索模型视觉效果

#### 折线图

尽管它的简单性是你可以展示的最有效的图表（记住，少即是多！)。你可能通过折线图显示大部分数据。
[这里](https://www.smartdraw.com/line-graph/) 你会发现如何在意识中使用它的力量。

#### 带注释的折线图

与前一个一样，但注释可以帮助提高可读性。

[这里](http://www.storytellingwithdata.com/blog/2018/1/22/88-annotated-line-graphs) 你只找到 88 个例子 :-)

#### 堆叠条形图

可能是比较数量最有效的图表，它们的使用时间超过 [270 年前](https://gizmodo.com/these-250-year-old-charts-and-graphs-were-the-very-firs-1445388576) ！
[这里](https://www.smashingmagazine.com/2017/03/understanding-stacked-bar-charts/) 你可以找到使用它们的完整指南。
[这里](https://peltiertech.com/excel-3d-charts-charts-with-no-value/) 你可以理解为什么在没有 3D 效果的情况下保持它们尽可能简单是很重要的。非常有趣并且值得深入详尽的阅读。

#### 正负堆叠条形图

使用负值，你可以轻松显示不良与良好的性能或内外流量。
[这里](https://peltiertech.com/diverging-stacked-bar-charts/) 详细解释了如何以及何时使用它们。

#### 水平堆叠条形图

你不需要成为 Flat Earth “理论” 的粉丝就可以使用水平条形图！它们与垂直表兄弟相似，但水平定向图表意味着左侧的类别名称在水平文本中易于阅读。
[这里](https://apexcharts.com/javascript-chart-demos/bar-charts/) 关于使用它们的指南。
[这里](https://depictdatastudio.com/when-to-use-horizo​​ntal-bar-charts-vs-vertical-column-charts/) 一篇有趣的文章，介绍何时选择水平或垂直条形图。

**用数据讲故事**

当你看到一部精彩的剧本，观看一部迷人的电影或阅读一本精彩的书时，你就会体验到故事的魔力。一个好故事吸引你的注意力，带你踏上旅程，唤起情感反应。在其中，你发现自己不想转身离开或放下它。直到 一天，一周，甚至一个月完成它后 - 你可以轻松地向朋友描述它。

如果你在观众中达到了这个目标, 你完成了, 你已经获得了一等奖!

- **找到你关注的主题**。这是真正的关注，而不是你的语言游戏，这将是你风格中最引人注目和诱人的元素。
- **把事情简单化**。伟大的大师写的主题是最深刻的句子几乎都是孩子般的。 “生存还是毁灭(To be or not to be)?” 莎士比亚的哈姆雷特问道。最长的单词是三个字母。
- **选择留下谁**。如果一个句子或图表，无论多么优秀，都不能以一种新的有用的方式阐明你的主题，请将其划掉。
- **不要欺骗有数据的人**。 [这些](https://venngage.com/blog/misleading-graphs/) 是我所说的清晰的例子。
- **清楚**。如果我打破了标点符号，或者我弯曲了词语的含义（技术性而非弯曲性) ，我就不会被理解。
- **怜惜读者**。我们的听众要求我们成为富有同情心和耐心的教师, 永远愿意简化和澄清。
- **暗示**。尝试在故事中召唤图片，声音和感觉。
- **有一个伟大的结局**。为你的观众留下一个句子，该句子将是你演示文稿的其余部分，是你主题的最内部核心。在你记住演示文稿时，你希望观众了解的内容。

有关讲故事的其它提示和建议，请查看我的其它 [有效陈述](https://github.com/clone95/Virgilio/blob/master/zh-CN/Specializations/SoftSkills/ImpactfulPresentations.md) 。

对不起，我是 [DRY 原则](https://zh.wikipedia.org/wiki/%E4%B8%80%E6%AC%A1%E4%B8%94%E4%BB%85%E4%B8%80%E6%AC%A1) 无望的粉丝。

### 数据可视化工具

本节我将向你介绍最易于使用和众所周知的工具，这些工具将为你提供数据可视化方面的技能。

#### Microsoft Excel

帮助自己，现在就学 [**Excel**](https://www.youtube.com/watch?v=-ujVQzTtxSg&list=PLWPirh4EWFpEpO6NjjWLbKSCb-wx3hMql)

Excel 是许多基本数据管理，计算和表示的瑞士军刀。
尽管存在可扩展性限制，但它仍然是今天支持公司的工具之一。
参加 [这个](https://www.youtube.com/watch?v=RwUSUjRGKVM) 关于使用 Microsoft Excel 进行数据可视化的课程。
[这里](https://www.keynotesupport.com/excel-basics/excel-charts-beginners.shtml) 另一个好的。
[这里](https://www.webucator.com/tutorial/intermediate-microsoft-excel/visualizing-your-data.cfm) 一些练习来测试你的技能。
[这里](https://policyviz.com/2017/07/25/my-top-10-data-visualization-excel-websites/) 有关 Excel 可视化的很酷网站列表。

#### Matplotlib

[Matplotlib](https://matplotlib.org/) 是 Python 中最常用的图形表示库之一，其中许多其它库都是基于它构建的。

我个人对此的看法是，理解和实施起来并不容易，但目前仍需掌握互联网上的教程。在 [StackOverflow](https://stackoverflow.com/) 中也有很多示例。
[官方初学者指南](https://matplotlib.org/users/beginner.html) 非常完整，包含了入门所需的一切，然后精通库。
[这里](https://matplotlib.org/Matplotlib.pdf) 有完整的文档。
[这里](https://pythonspot.com/matplotlib/) 另一堆特定于图表的教程。
[这里](https://www.machinelearningplus.com/plots/top-50-matplotlib-visualizations-the-master-plots-python/) 包含 50 个最有用的可视化代码和代码的集合。
[这里](http://www.randalolson.com/2014/06/28/how-to-make-beautiful-data-visualizations-in-python-with-matplotlib/) 你可以找到高级图表和代码来实现他们。
[这里](https://www.cheatography.com/gabriellerab/cheat-sheets/matplotlib-pyplot/) 一个方便的速查表。

挑战自我：

- [1](http://www.ceda.ac.uk/static/media/uploads/ncas-reading-2015/matplotlib_exercises_solutions.pdf), [2](https://pynative.com/python-matplotlib-exercise/), [3](https://anaconda.org/gwinnen/matplotlib-exercises/notebook), [4](https://www.w3resource.com/graphics/matplotlib/)

最佳实践

- [1](https://www.scivision.dev/best-practices-for-matplotlib-plots/), [2](https://www.quora.com/What-are-some-best-practices-for-matplotlib-to-improve-the-quality-and-appearance-of-your-graphs-and-plots), [3](https://stackoverflow.com/questions/18059269/best-practices-to-write-function-embedding-matplotlib-plot-call), [4](https://matplotlib.org/tutorials/introductory/lifecycle.html)

#### Seaborn

当你的大脑被人类，艺术或可爱的小狗的美丽所吸引时，它就是通过美丽的可视化。[Seaborn](https://seaborn.pydata.org/)  是建立在 Matplotlib **之上的公共库**。它用于增强 Matplotlib 图表，因此你需要首先熟悉 “母库”。
关注 [这个](https://www.youtube.com/playlist?list=PL998lXKj66MpNd0_XkEXwzTGPxY2jYM2d) Youtube 教程，它涵盖了你开始使用它所需的最多内容。
然后阅读 [这个](https://stepupanalytics.com/introduction-to-python-for-data-visualization-with-seaborn/) 这篇漫长而完整的博客文章。
[这里](https://www.kaggle.com/kanncaa1/seaborn-tutorial-for-beginners) 你找到了另一个初学者的长篇教程。

挑战自我：[1](https://anaconda.org/gwinnen/seaborn-exercises/notebook), [2](http://unsupervisedlearning.co.uk/2017/11/08/seaborn-exercises-solutions/), [3](https://www.codecademy.com/courses/learn-seaborn/lessons/seaborn-distributions/exercises/box-plots-ii), [4](https://anaconda.org/gwinnen/seaborn-exercises/notebook)

最佳实践：[1](http://walkerke.github.io/geog30323/slides/data-visualization/), [2](https://mode.com/resources/analytics-dispatch/data-visualization-best-practices/), [3](https://www.datacamp.com/courses/improving-your-data-visualizations-in-python)

其它示例：[1](https://python-graph-gallery.com/category/seaborn/), [2](https://jakevdp.github.io/PythonDataScienceHandbook/04.14-visualization-with-seaborn.html), [3](https://towardsdatascience.com/data-visualization-using-seaborn-fc24db95a850), [4](https://www.kaggle.com/mchirico/plotly-seaborn-examples)

#### Bokeh

来自 [Bokeh](http://bokeh.pydata.org/en/latest/) 文档：

> Bokeh 是一个交互式可视化库，面向现代 Web 浏览器进行演示。它的目标是提供优雅，简洁的多功能图形构造，并通过非常大或流数据集的高性能交互来扩展此功能。 Bokeh 可以帮助任何想要快速轻松地创建交互式图表，仪表板和数据应用程序的人。

Bokeh 自豪地成为交互式数据可视化的库。

与 Python 可视化领域中的流行对手不同，如 Matplotlib 和 Seaborn，Bokeh 使用 HTML 和 JavaScript 渲染其图形。这使其成为构建基于 Web 的交互式仪表板和应用程序的理想选择。

但是 Bokeh，Matplotlib 和 Seaborn 之间的真正区别是什么？

作为此 Reddit [线程](https://www.reddit.com/r/Python/comments/4tuwoz/how_do_you_decide_between_the_plotting_libraries/) 中的评论说：

每个库都有自己独特的目的：

Matplotlib 用于基本绘图 - 条形图，饼状图，线条，散点图等。

Seaborn 用于统计可视化 - 如果你正在创建热图或以某种方式汇总数据并仍希望显示数据分布，请使用它

Bokeh 用于交互式可视化 - 如果你的数据非常复杂（或者你尚未在数据中找到 “消息”) ，则使用 Bokeh 创建交互式可视化，以便你的查看者自己探索数据。

[这里](https://mybinder.org/v2/gh/bokeh/bokeh-notebooks/master?filepath=tutorial%2F00%20-%20Introduction%20and%20Setup.ipynb) 官方教程。它涵盖了你需要知道的所有内容，并通过它。它也包含练习。
[这里](http://bokeh.pydata.org/en/latest/docs/user_guide.html) 官方用户指南。

另一个有用的附加教程列表：[1](https://towardsdatascience.com/data-visualization-with-bokeh-in-python-part-one-getting-started-a11655a467d4), [2](https://realpython.com/python-data-visualization-bokeh/), [3](https://towardsdatascience.com/data-visualization-with-bokeh-in-python-part-one-getting-started-a11655a467d4)

其它示例：[1](https://www.journaldev.com/19527/bokeh-python-data-visualization), [2](https://programminghistorian.org/en/lessons/visualizing-with-bokeh), [3](https://www.analyticsvidhya.com/blog/2015/08/interactive-data-visualization-library-python-bokeh/), [4](https://www.geeksforgeeks.org/python-data-visualization-using-bokeh/), [5](https://github.com/bokeh/bokeh/tree/master/examples)

#### Tableau

[Tableau](https://www.tableau.com/zh-cn) 利用数据实力，释放员工潜能，选择为商业智能领域带来变革的分析平台。

此部分为你提供有关开始使用 Tableau 的基础知识。

- 有关如何开始操作的演练，请参见[构建基本视图以浏览数据](https://onlinehelp.tableau.com/current/pro/desktop/zh-cn/getstarted_buildmanual_ex1basic.htm)。
- 有关如何使用 Tableau 的深入教程，请参见 [Tableau Desktop 入门指南](http://onlinehelp.tableau.com/current/guides/get-started-tutorial/zh-cn/get-started-tutorial-home.html)。
- 有关基本图表和视图类型的示例，请参见[在数据视图中生成常用图表类型](https://onlinehelp.tableau.com/current/pro/desktop/zh-cn/dataview_examples.htm)和[选择适合于你的正确图表](https://onlinehelp.tableau.com/current/pro/desktop/zh-cn/what_chart_example.htm)。
- 有关如何构建和使用地图的信息，请参阅[Tableau 中的地图和地理数据分析](https://onlinehelp.tableau.com/current/pro/desktop/zh-cn/maps.htm)。
- 如果你正在使用 Tableau Online 和 Tableau Server 浏览数据并编辑视图，请参见[在 Web 上使用 Tableau](https://onlinehelp.tableau.com/current/pro/desktop/zh-cn/web_author_home.htm)。

#### Power BI

[Power Bi](https://powerbi.microsoft.com/it-it/) 是 Microsoft 的一款超酷工具，主要用于商业智能，用于在数据之间建立关系，在精彩的交互式仪表板中清理和可视化它们。我喜欢 Power BI 的东西是个人使用免费，对企业来说非常便宜。它也非常容易使用。
查看 [这个](https://www.youtube.com/watch?v=gqO0EiCn4cY) 初学者教程，然后探讨官方 [指导式学习](https://docs.microsoft.com/zh-cn/power-bi/guided-learning/)，他们有很多分步教程和侧面项目来挑战自我。

需要遵循的额外资源：[1](https://www.youtube.com/user/mspowerbi), [2](https://www.youtube.com/channel/UCFp1vaKzpfvoGai0vE5VJ0w), [3](https://www.youtube.com/channel/UC-h-wArcxJC8zBOD-UxfCOg), [4](https://www.youtube.com/channel/UCaTn-yDjPDvf-1CtJJHTNcQ), [5](https://www.youtube.com/user/ModernExcel)

最佳实践：[1](https://www.c-sharpcorner.com/article/power-bi-best-practices-part-3/), [2](https://docs.microsoft.com/it-it/power-bi/visuals/power-bi-visualization-best-practices), [3](https://community.powerbi.com/t5/Community-Blog/Best-Practices-For-Power-BI-Desktop-Development/ba-p/521710), [4](https://www.c-sharpcorner.com/article/power-bi-best-practices-part-3/), [5](https://powerpivotpro.com/2017/06/top-5-power-bi-visual-design-practices-transforming-good-great/)

### 获取灵感

你可以通过数据可视化获得自信的最佳方式是观看，观看和观看数据可视化。
我在这里放了很多资源，你可以从中获取灵感和想法。

网站：[1](https://www.idashboards.com/blog/2018/07/06/get-inspired-19-inspiring-data-viz-designs/), [2](https://medium.com/@Infogram/18-data-visualization-resources-for-education-and-inspiration-529c6f528983), [3](https://www.pinterest.it/stevenschillema/data-visualization-inspiration/?lp=true), [4](https://www.designyourway.net/blog/inspiration/data-visualization-designs-that-should-inspire-you-23-infographics/), [5](https://www.awwwards.com/websites/data-visualization/), [6](https://mode.com/resources/analytics-dispatch/data-visualization-examples/), [7](https://visme.co/blog/examples-data-visualizations/), [8](https://datavizproject.com/)

奖励点！
试试 [Google Facets](https://pair-code.github.io/facets/) ，这是一款非常实用的网页工具，可用于快速可视化。它真的很容易使用，你可以上传你的数据集并从中获得第一个见解。向非技术人员展示数据也很棒。

### 用数据讲故事

在这一点上, 我再怎么强调也不为过。准备数据可视化时, 请关注要向受众讲述的故事。
这种方法有几种 [已证实且积极的](https://www.dataplusscience.com/files/Kosara_Computer_2013.pdf) 效果。
[**绝对要检查这个**](https://www.slideshare.net/kris77chan/edward-segel-interactivestorytelling) ，是我在数据可视化中应用的这个概念中找到的最好的资源。
[这里](http://www.nickdiakopoulos.com/2013/04/12/storytelling-with-data-what-are-the-impacts-on-the-audience/) 一篇很好的文章来解释 _为什么_。
[这里](https://www.slideshare.net/kris77chan/edward-segel-interactivestorytelling) 是关于用数据讲故事的精彩演讲。
[这里](https://www.forbes.com/sites/brentdykes/2016/03/31/data-storytelling-the-essential-data-science-skill-everyone-needs/#202002b852ad) 另一个有趣的读物。

### 常见的可视化错误

从一个古老的中文声明：
> 前车之鉴，后车之覆。

要知道什么是最常见的错误是掌握技能的基础，所以我在这里为你列出一堆资源，让你了解数据可视化中的 “不要”：

- [1](https://www.anychart.com/blog/2017/08/29/data-visualization-mistakes-avoid/), [2](https://undullify.com/data-visualization-102-common-mistakes-visualizing-data/), [3](https://www.rtinsights.com/what-are-the-5-most-common-data-visualization-mistakes/), [4](https://thenextweb.com/dd/2015/05/15/7-most-common-data-visualization-mistakes/), [5](https://www.reddit.com/r/datascience/comments/8wj1nr/play_your_charts_right_an_illustrated_collection/)

### 附加资源

我真的很喜欢数据可视化，在过去的几年里，我收集了很多很酷的网站和 “需要书签” 的地方。我已经给了你很多，在这里我列出了剩下的一切。

- [数据是美丽的 SubReddit](https://www.reddit.com/r/dataisbeautiful/)
- [分析 SubReddit](https://www.reddit.com/r/dataviz/)
- [The Pudding](https://pudding.cool/)
- [Flow Data](https://flowingdata.com/)
- [Small Multiples](https://smallmultiples.com.au/projects/)
- [令人敬畏的互动新闻](https://github.com/wbkd/awesome-interactive-journalism)
- [EdwardTufte 推特账号](https://twitter.com/EdwardTufte)
- [Fivethirtyeight](https://fivethirtyeight.com/)
- [超酷网站列表](https://www.reddit.com/r/dataisbeautiful/comments/435g7b/i_love_live_data_visualizations_heres_every_one/)
- [汉密尔顿(Hamilton)的每一行](https://pudding.cool/2017/03/hamilton/)
- [用数据讲故事](http://www.storytellingwithdata.com/)

### 结束并期待

我在这里尝试的是列出关于数据可视化的最有用资源的地图（我已经搜索并比较了很多这些资源) ，试图给你一个主题的参考点。
正如我之前向你建议的那样，对某事感到非常舒服的唯一方法就是以第一人称面对它。所以我能给你的最好的建议就是 “找到你的项目”。

- 以某种方式选择一个你感兴趣的论点。你可以找到很多免费的公共数据集进行试验。检查你的国家 / 地区网站或输入 [Kaggle](https://www.kaggle.com/) 或 [UCI](https://archive.ics.uci.edu/ml/index.php) 查找大量网站。
- 以你可以尝试的各种方式绘制数据，应用你所看到的技术。
- 激励自己观察人们如何可视化相似的数据集。在 Kaggle 中搜索 “可视化”，你会被示例数量惊呆的。

与其成为所有行业的 jack, 但不是一个行业的高手, 不如精通一个工具, 几乎不知道其它工具。所以, 我建议你选择更能激励你的工具, 深入其中。事实上, 我们看到的工具在很多方面都相互重叠，但它们的规模和方法各不相同。

快乐学习，祝你学习愉快！

-------------------------
由_clone 95_撰写