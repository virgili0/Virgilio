# 数据预处理

数据预处理(也称为数据准备，但 “预处理” 听起来更像是魔术) 是 [迭代过程](http://www.jsoftware.us/vol12/306-JSW15277.pdf) 的收集，组合，结构化和组织数据，以便将其作为数据可视化，分析和机器学习应用程序的一部分进行分析。

[真实世界数据](https://www.quanticate.com/blog/real-world-data-analysis-in-clinical-trials) 通常不完整，不一致，缺乏某些行为或趋势，以及很可能包含很多错误。数据预处理是解决此类问题的可靠方法。

这是任何数据科学家或数据工程师的 [核心能力](https://blogs.sas.com/content/hiddeninsights/2017/11/30/analytical-data-preparation-important/) ，你必须 _能够在日常工作中操作，清理和构造_ 你的数据(除了期望这将充分利用你的 [日常时间](https://www.infoworld.com/article/3228245/the-80-20-data-science-dilemma.html) ！) 。

有很多不同的数据类型，它们需要做出 [不同的处理](http://blog.appliedinformaticsinc.com/data-mining-challenges-in-data-cleaning/) 。
像往常一样，我计划让你入门的结构包括 [一般概述](https://searchbusinessanalytics.techtarget.com/definition/data-preparation) ，然后深入了解你可能遇到的每个数据处理情况。

[这里](https://towardsdatascience.com/data-pre-processing-techniques-you-should-know-8954662716d6) 你可以轻松地查看整个过程的端到端全景图。

我们要浏览的概念如下：

- 不要把数据当玩笑
- 商业问题
- 数据分析
- 谁将落后
- 从小开始
- 工具包
- 数据清理
    - 摆脱额外的空格
    - 选择并处理所有空白单元格
    - 转换值类型
    - 删除重复项
    - 将文本更改为小写 / 大写
    - 拼写检查
    - 处理特殊字符
    - 规范日期
    - 验证丰富数据
    - 数据离散化
    - 特征缩放
    - 数据清理工具
- 合并数据集和集成
- 完整性检查
- 自动化这些无聊的东西！

** 开始吧！**

### - 不要把数据当玩笑
首先，[**数据是王**](https://www.edq.com/glossary/data-quality-importance/) 。在 [数据驱动时代](https://www.venturi-group.com/qa-with-helen-mannion/) 中，有 [数据质量问题](https://www.ringlead.com/blog/7-common-data-quality-issues/) 意味着在现在和将来为公司损失巨大的价值。所以，尊重你的国王并关心他。最直接的方法是计划和 [努力工作](https://nektardata.com/high-quality-data/) 来生成高质量的数据。
你的目标是规划一个预先解决问题的收集数据基础架构。这意味着要非常关心如何规划你的数据库模式(我需要 [第三范式](https://social.technet.microsoft.com/Forums/Lync/en-US/7bf4ca30-a1bc-415d-97e6-ce0ac3137b53/normalized-3nf-vs-denormalizedstar-schema-data-warehouse-?forum=sqldatawarehousing) 或不？ )，如何从传感器(物理或概念) 等收集数据。如果你是从地面建立一个系统，这些都是问题，但你大部分时间都会遇到有人想要解决 [_可用_](https://www.wired.com/insights/2013/05/more-data-more-problems-is-big-data-always-right/) 数据的现实问题。

### - 商业问题
询问 [正确的商业问题](https://www.datapine.com/blog/data-analysis-questions/) 很难，但它有关于你解决特定问题 [影响最大](https://towardsdatascience.com/start-your-data-exploration-with-questions-2f1d42cff29e) 的表现。记住，你想 [解决问题](http://www.informit.com/articles/article.aspx?p=2271188&seqNum=2) ，而不是创造新的问题！

### - 数据分析
根据(冰冷的) [维基百科定义](https://en.wikipedia.org/wiki/Data_profiling) ：“数据分析是检查现有信息源（例如数据库或文件）可用数据并收集统计数据和信息数据摘要的过程。“
所以维基百科巧妙地建议我们用数据来喝咖啡。

在这次非正式会议期间，询问以下数据问题：
- 你打算解决哪个业务问题？ (什么是重要的，什么不是)
- 你是如何被收集的(有噪音，缺失值......) ？
- 你们有多少朋友在那里，我在哪里可以找到他们？ (数据维度和从存储中检索)

最终，你可能会发现数据太安静了，也许他们只是害羞！
无论如何，你将 [向业务用户询问这些问题](https://business-analysis-excellence.com/business-requirements-meeting/) ！
_最佳实践和练习：_ [1](https://www.iqint.org/idq2013/presentations/downloads/di_loreto_data_profiling_tutorial_monday_am.pdf), [2](https://community.alteryx.com/t5/Alteryx-Designer-Discussions/Data-profiling-tutorials-use-cases-and-exercise/td-p/145347)

### - 谁落在后面
在数据分析过程中，通常会意识到你的某些数据通常是 [无用的](https://ambisense.net/why-useless-data-is-worse-than-no-data/) 。你的数据可能有太多噪音，或者它们是部分的，很可能并非所有这些都能解决你的业务问题。
[放弃或不放弃，困境](https://www.theanalysisfactor.com/outliers-to-drop-or-not-to-drop/) 。
每当你遇到与数据相关的问题时，请尝试了解你需要哪些数据以及你不需要的数据 - 也就是说，对于每条信息，请问自己(并询问_商业用户_) ：
- 这些数据对我有何帮助？
- 是否可以使用它们，减少噪音 o 缺失值？
- 考虑到准备过程的好处 / 成本与创建的业务价值，这些数据是否值得？

### - 从小开始
每次要尝试数据准备步骤时，处理 GB 数据都是愚蠢的。只需使用数据的 [小子集](https://sdtimes.com/bi/data-gets-big-best-practices-data-preparation-scale/) (但请注意它们具有代表性，并抓住所有问题) 。请记住，如果你想尝试字符串清理，则无需在 10M 行上启动脚本。

### - 工具包
我们将要使用的工具是 Python3 和他的 [Pandas 库](https://pandas.pydata.org/) ，它是操纵数据集的事实上的标准。
这里繁重的工作是由 [DataFrame 类](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.html) 完成的，它为你提供了许多有用的功能日常数据任务。
希望你已经知道 Python，如果不是从那里开始(按照我在 ML 指南要求中建议的步骤) ，然后采取这个 [初学者 Pandas 教程](https://pandas.pydata.org/pandas-docs/stable/getting_started/10min.html)。不要担心，如果现在一些想法不完全清楚，但试图了解常见的 [Pandas 操作](https://www.analyticsvidhya.com/blog/2016/01/12-pandas-techniques-python-data-manipulation/)。

_最佳实践和练习：_ [1](https://github.com/guipsamora/pandas_exercises), [2](https://www.w3resource.com/python-exercises/pandas/index.php), [3](https://www.machinelearningplus.com/python/101-pandas-exercises-python/), [4](https://www.kaggle.com/pistak/pandas-tutorial-with-interactive-exercises), [5](http://disi.unitn.it/~teso/courses/sciprog/python_pandas_exercises.html)

### - 数据清理
[数据清理](https://en.wikipedia.org/wiki/Data_cleansing) 是获取数据的一般过程，在你清楚了解它们之后，你需要实现更换字符的实际过程，去掉不完整的行，填充缺失值等等。在接下来的部分中，我们将探讨所有常见的数据清理情况。

### - 摆脱额外的空格
你要做的第一件事就是 [删除多余空格](https://stackoverflow.com/questions/43332057/pandas-strip-white-space) 。小心点！有些空格可能携带信息，但在很大程度上取决于具体情况。例如，在“完整名称” 中：“Giacomo Ciarlini” 很高兴有空格，所以我们可以稍后将其分为 "Name": "Giacomo" 和"Surname": "Ciarlini"。我希望你注意到，除了推荐和建议定制系统之外，名称或 ID 等唯一标识符通常可以放弃。通常，他们不携带信息。
_额外提示_：学习如何使用 [正则(Regex)](https://www.analyticsvidhya.com/blog/2015/06/regular-expression-python/) 进行模式匹配，这是每个数据人需要的强大工具之一主。

_最佳实践和练习：_ [1](https://www.quora.com/How-do-you-remove-all-whitespace-from-a-Python-string), [2](https://towardsdatascience.com/5-methods-to-remove-the-from-your-data-in-python-and-the-fastest-one-281489382455), [3](https://www.tutorialspoint.com/How-to-remove-all-leading-whitespace-in-string-in-Python)

_正则 练习_：[1](https://www.w3resource.com/python-exercises/re/) ，[2](https://pycon2016.regex.training/exercises)
_Bonus Resource_：一个超级有用的 [工具](http://regviz.org/) ，用于可视化 RegeX 表达式及其对文本的影响。

### - 选择并处理所有空白单元格
现实世界的数据通常是不完整的，是处理这种情况所必需的。 [这些](https://code.likeagirl.io/how-to-use-python-to-remove-or-modify-empty-values-in-a-csv-dataset-34426c816347) 是两种处理方式它。 [这里](https://hackersandslackers.com/pandas-dataframe-drop/) 你有一个更深入的教程。

_最佳实践和练习：_ [1](https://www.kaggle.com/nirmal51194/data-cleaning-challenge-handling-missing-values), [2](https://stefvanbuuren.name/fimd/missing-data-pattern.html), [3](https://www.ethz.ch/content/dam/ethz/special-interest/math/statistics/sfs/Education/Advanced%20Studies%20in%20Applied%20Statistics/course-material-1719/Multivariate/w10-in-class-exercise-imputation-solution.pdf), [4](http://uc-r.github.io/missing_values)

### - 转换值类型
[不同的数据类型](https://pbpython.com/pandas_dtypes.html) 包含不同的信息，你需要关心这一点。
[这里](https://www.geeksforgeeks.org/python-pandas-series-astype-to-convert-data-type-of-series/) 是一个关于如何转换类型值的好教程。请记住，Python 有一些快捷方式可以执行此操作(执行 str(3) 将返回 “3” 字符串) 但我建议你学习如何使用 Pandas。

### - 删除重复项
你不想复制数据，它们都是噪音并占据空间！用 Pandas 学习 [如何处理它们](https://www.geeksforgeeks.org/python-pandas-dataframe-drop_duplicates/) 。

### - 将文本更改为小写 / 大写
你想_首字母大写_名称，或者可能使它们统一(有些人可以输入带或不带大写字母的数据！) 。检查 [这里](https://www.geeksforgeeks.org/python-pandas-series-str-lower-upper-and-title/) 以获得 Pandas 的方法。

### - 拼写检查
为了均衡，你想纠正错误的词。检查 [这里](https://www.tutorialspoint.com/python/python_spelling_check.htm) 以获得一个好的 Python 模块。此外，这是[实施] 的一个很好的起点(https://stackoverflow.com/questions/46409475/spell-checker-in-pandas) 。
_最佳实践和练习：_ [1](https://stackoverflow.com/questions/7315114/spell-check-program-in-python), [2](https://norvig.com/spell-correct.html), [3](https://github.com/garytse89/Python-Exercises/tree/master/autoCorrect)

### - 重塑你的数据
也许你会将你的数据输入神经网络或者在彩色条形图中显示它们。无论如何，你需要转换数据并为数据管道提供正确的形状。 [这里](https://towardsdatascience.com/seven-clean-steps-to-reshape-your-data-with-pandas-or-how-i-use-python-where-excel-fails-62061f86ef9c) 是一个这个任务非常好的教程。

_最佳实践和练习：_ [1](https://pandas.pydata.org/pandas-docs/stable/user_guide/reshaping.html), [2](https://discuss.codecademy.com/t/faq-data-cleaning-with-pandas-reshaping-your-data/384794)。

### - 处理特殊字符
UTF 编码是要遵循的标准，但请记住并非所有人都遵守规则(否则，我们不需要 [犯罪预测分析](http://scholarworks.sjsu.edu/cgi/viewcontent.cgi?article=1633&context=etd_projects) 如何处理奇怪的重音或特殊字符。
_最佳实践和练习：_ [1](https://www.w3resource.com/python-exercises/python-basic-exercise-92.php), [2](https://stackoverflow.com/questions/22518703/escape-sequences-exercise-in-python?rq=1), [3](https://learnpythonthehardway.org/book/ex2.html)

### - 规范日期
我想可能有一百种方法来记下约会。你需要确定你的格式并使其在整个数据集中统一，并且 [这里](https://medium.com/jbennetcodes/dealing-with-datetimes-like-a-pro-in-pandas-b80d3d808a7f) 你将学习如何去做吧。

_最佳实践和练习：_ [1](https://www.w3resource.com/python-exercises/python-conditional-exercise-41.php), [2](https://www.w3resource.com/python-exercises/date-time-exercise/), [3](https://www.kaggle.com/anezka/data-cleaning-challenge-parsing-dates)

### - 验证以丰富数据
有时可以用来设计一些数据，例如：假设你正在处理 [电子商务数据](https://www.edataindia.com/why-data-cleansing-is-important/) ，你有每件物品的价格。你可能希望在数据集中添加一个新列，其标签包含基于你可以决定的上限和下限的 Price_level [low，medium，high] 等便捷信息。这在 Pandas 中非常简单，请查看[这里](https://stackoverflow.com/questions/19913659/pandas-conditional-creation-of-a-series-dataframe-column) 。另一个例子是添加一个 Gender 列(M，F) ，以便轻松地探索数据并获得客户数据集中的洞察力。
_最佳实践和练习：_ [1](http://www.inweb.org.br/w3c/dataenrichment/), [2](https://solutionsreview.com/data-integration/best-practices-for-data-enrichment-after-etl/), [3](http://www.inweb.org.br/w3c/dataenrichment/)

### - 数据离散化
许多机器学习和数据分析方法无法处理连续数据，处理它们可能会在计算上受到限制。 [这里](https://www.youtube.com/watch?v=TF3_6lwITQg) 你会找到一个很好的视频，解释为什么以及如何离散数据。

_最佳实践和练习：_ [1](https://www.researchgate.net/post/What_are_the_best_methods_for_discretization_of_continuous_features), [2](https://towardsdatascience.com/discretisation-using-decision-trees-21910483fa4b), [3](https://docs.microsoft.com/en-us/sql/analysis-services/data-mining/discretization-methods-data-mining)

### - 特征缩放
特征缩放是一种用于标准化独立变量或数据特征范围的方法。在数据处理中，它也被称为数据标准化，并且通常在数据预处理步骤期间执行。
[这里](特征缩放是一种用于标准化独立变量或数据特征范围的方法。在数据处理中，它也称为数据规范化，通常在数据预处理步骤中执行。) 你找到一个严肃的教程这个基本步骤。

_最佳实践和练习：_ [1](https://www.kaggle.com/jfeng1023/data-cleaning-challenge-scale-and-normalize-data), [2](https://www.quora.com/When-should-you-perform-feature-scaling-and-mean-normalization-on-the-given-data-What-are-the-advantages-of-these-techniques), [3](https://www.quora.com/When-do-I-have-to-do-feature-scaling-in-machine-learning)

### - 数据清理工具
没带枪你就不该上战场！你有大量的工具可以帮助你在数据清理过程中，我想建议你的是 [这里](https://www.analyticsindiamag.com/10-best-data-cleaning-tools-get-data/) 开源工具。查看 [此处](https://www.quora.com/What-are-the-best-open-source-data-cleansing-tools-software-available) 了解更多信息。

### - 合并数据集和集成
既然你希望在数据清理过程中取得成功，你可以合并来自不同来源的数据，以创建大的 [去标准化](https://www.researchgate.net/post/When_and_why_do_we_need_data_normalization_in_data_mining_algorithms) 数据表，随时可以进行探索和消费。 [这里](https://www.quora.com/Is-data-warehouse-normalized-or-denormalized-Why) 就是为什么。
_最佳实践和练习：_ [1](https://www.ssc.wisc.edu/sscc/pubs/sfr-combine.htm), [2](https://rpubs.com/wsundstrom/t_merge), [3](https://jakevdp.github.io/PythonDataScienceHandbook/03.07-merge-and-join.html), [4](https://searchbusinessanalytics.techtarget.com/feature/Using-data-merging-and-concatenation-techniques-to-integrate-data), [5](https://www.analyticsvidhya.com/blog/2016/06/9-challenges-data-merging-subsetting-r-python-beginner/)

### - 完整性检查
你总是希望确保你的数据_刚好是_你希望的，并且因为这是一个很好的经验法则，在数据预处理管道的每次完整迭代之后应用完整性检查(即我们已经看到的每个步骤，直到现在)
查看 [此处](https://www.trifacta.com/blog/4-key-steps-to-sanity-checking-your-data/) 以获得良好的概述。根据你的情况，完整性检查可能会有很大差异。

_最佳实践和练习：_ [1](https://blog.socialcops.com/academy/resources/4-data-checks-clean-data/), [2](https://www.r-bloggers.com/data-sanity-checks-data-proofer-and-r-analogues/), [3](https://www.quora.com/What-is-the-example-of-Sanity-testing-and-smoke-testing)

### - 自动化这些无聊的东西！
正如我在一开始就告诉你的那样，数据预处理过程可能需要很长时间并且非常繁琐。因此，你希望尽可能 [自动化](https://www.youtube.com/watch?v=UZUoH7_mYx4) 。此外，**自动化与迭代** 结合，因此这是你计划数据预处理管道所需的方式。 [这里](https://github.com/mdkearns/automated-data-preprocessing) 你找到一个很好的命令行工具，但我几乎肯定你需要建立自己的(记住，每个问题) 是独特的！) ，但这是一个很好的起点。
_最佳实践和练习：_ [1](https://blog.panoply.io/5-data-preparation-tools-1-automated-data-platform), [2](https://www.quora.com/How-do-I-make-an-automated-data-cleaning-in-Python-for-ML-Is-there-a-trick-for-that), [3](https://www.quora.com/Is-there-a-python-package-to-automate-data-preparation-in-machine-learning), [4](https://machinelearningmastery.com/prepare-data-machine-learning-python-scikit-learn/), [5](https://www.analyticsvidhya.com/blog/2018/10/rapidminer-data-preparation-machine-learning/)

### 结论
现在，你已准备好以各种方式获取数据并使用它们，并且你可以全面了解整个过程。清理数据时，可以参考此页面，检查是否遗漏了某些步骤。请记住，可能每种情况都需要这些步骤的子集。