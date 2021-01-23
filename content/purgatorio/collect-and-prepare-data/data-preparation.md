---
title: Data Preparation
author: clone95, neomatrix369
description: The purpose of this guide is to show you the different preprocessing steps you need to apply to your data before feeding them to Machine Learning models.
---

# What you will learn 
Real-world data is almost always messy or unstructured, and most of the time of the Data Scientist is spent in data preprocessing (or data cleaning or data preprocessing), before visualizing them or feeding them to Machine Learning models.

The purpose of this guide is to show you the importance of these steps, mostly about text data, but there will be guides on cleaning different kinds of data you may encounter.

# Index
- [Start Small](#Start-small)
- [Business Questions](#Business-Questions)
- [Data Preprocessing (Data wrangling / Data manipulation)](#data-preprocessing-data-wrangling--data-manipulation)
- [Data Profiling](#Data-Profiling)
- [Data Cleaning](#Data-Cleaning)
  - [Get Rid of Extra Spaces](#Get-Rid-of-Extra-Spaces)
  - [Select and Treat All Blank Cells](#Select-and-Treat-All-Blank-Cells)
  - [Convert Values Type](#Convert-Values-Type)
  - [Remove Duplicates](#Remove-Duplicates)
  - [Spell Check](#Spell-Check)
  - [Grammar Check](#Grammar-Check)
  - [Reshape your data](#Reshape-your-data)
  - [Converting to categorical data type](#Converting-to-categorical-data-type)
  - [Dealing with Special Characters](#Dealing-with-Special-Characters)
  - [Verification To Enrich Data](#Verification-To-Enrich-Data)
  - [Data Discretization](#Data-Discretization)
  - [Data Cleaning Tools](#Data-Cleaning-Tools)
  - [Change Text to Lower/Upper Case](#Change-Text-to-Lower/Upper-Case)
  - [Normalizing Dates](#Normalizing-Dates)
  - [Feature Scaling](#Feature-Scaling)
  - [Types of data](#types-of-data)
  - [Data Cleaning Tools](#Data-Cleaning-Tools)
- [Visualization](#Visualization)
- [Merge Data Sets and Integration](#Merge-Data-Sets-and-Integration)
- [Aggregating data (centralizing)](#Aggregating-data-centralizing)
- [Bias and balance/imbalance](#Bias-and-balance-imbalance)
- [Sanity Check](#Sanity-Check)
- [Automate These Boring Stuffs!](#Automate-These-Boring-Stuffs!)
- [Doing it in real-time](#Doing-it-in-real-time)
- [Don't Joke With Data](#Don't-Joke-With-Data)
- [Who To Leave Behind](#Who-To-Leave-Behind)
- [The Toolkit](#The-Toolkit)
- [Conclusion](#Conclusion)

**Let's Start!**

## Start Small
It's not a good idea to load GigaBytes of data each time you want to try a data preparation step. 

Start with [small subsets](https://sdtimes.com/bi/data-gets-big-best-practices-data-preparation-scale/) of the data instead (but take care that they are representative and you catch all the problems). 

Remember, if you want to experiment with text cleaning, you don't need to launch your script on 10M rows. Test your data on a small subset or sample of data to learn if it works well there before going full-scale.

## Business Questions
Before trying to prepare the data, you want to be sure you have the right objective in mind.

Asking the [right business questions](https://www.datapine.com/blog/data-analysis-questions/) is hard, but it has the [biggest impact](https://towardsdatascience.com/start-your-data-exploration-with-questions-2f1d42cff29e) on your performance of solving a particular problem.

 Remember, you want to [solve a problem](http://www.informit.com/articles/article.aspx?p=2271188&seqNum=2), not to create new ones! 

## Data Preprocessing (Data wrangling / Data manipulation)
**Data preprocessing** (also known as Data Preparation, but "Preprocessing" sounds more like magic) is the **[iterative process](http://www.jsoftware.us/vol12/306-JSW15277.pdf) of gathering, combining, structuring, and (re)organizing data so it can be analyzed as part of data visualization, analytics, and machine learning processes.**

[Real-world data](https://www.quanticate.com/blog/real-world-data-analysis-in-clinical-trials) is often incomplete, inconsistent, and/or lacking in certain behaviors or trends, and is likely to contain many errors. Data preprocessing is a proven method of resolving such issues.

It's the [core ability](https://blogs.sas.com/content/hiddeninsights/2017/11/30/analytical-data-preparation-important/) of any data scientist or data engineer, and you must _be able to manipulate, clean, and structure_ your data during the everyday work (besides expecting that this will make the most of your [daily-time](https://www.infoworld.com/article/3228245/the-80-20-data-science-dilemma.html)!).

There are a lot of different data types out there, and they deserve [different treatments](http://blog.appliedinformaticsinc.com/data-mining-challenges-in-data-cleaning/).

As usual, the structure Virgilio has planned to get you started consists of having a [general overview](https://searchbusinessanalytics.techtarget.com/definition/data-preparation), and then dive deep into each data processing situation you can encounter. 

[Here](https://towardsdatascience.com/data-pre-processing-techniques-you-should-know-8954662716d6) you have a gentle end-to-end panoramic view of the most common data preparation steps.

## Data Profiling
According to the [Wikipedia definition](https://en.wikipedia.org/wiki/Data_profiling): "Data profiling is the process of examining the data available from an existing information source (e.g. a database or a file) and collecting statistics and informative data summaries." \
So Wikipedia is subtly suggesting us to have a coffee with our data. :-)

During this informal meeting, ask the data questions like:
- which business problem are you meant to solve? (what is important, and what is not) 
- how have you been collected (with noise, missing values...)?
- how many friends of yours are there and where can I find them? (data dimensions and retrieving from storages, related sources)

Eventually, you may find the data to be too quiet, maybe it's just shy! \
Anyway, you're going to [ask these questions to the business user](https://business-analysis-excellence.com/business-requirements-meeting/)!

Check these tools to quickly make a profile of your data and get a 3000-feet view of them.

- [Dtale](https://github.com/man-group/dtale)
- [Pandas Profiling](https://github.com/pandas-profiling/pandas-profiling)

_Best practices and exercises:_ [1](https://www.iqint.org/idq2013/presentations/downloads/di_loreto_data_profiling_tutorial_monday_am.pdf)++, [2](https://community.alteryx.com/t5/Alteryx-Designer-Discussions/Data-profiling-tutorials-use-cases-and-exercise/td-p/145347)++

> ++ - beware that this resource contains one or more premium or commercial (paid) product, if you are aware of an alternative solution to them please do share it with us

## Data Cleaning
[Data cleaning](https://en.wikipedia.org/wiki/Data_cleansing) is the general process of ensuring that the quality of your data would be enough to satisfy the requirements of the problem you want to solve.

For example, it can consist of replacing characters in strings, dropping incomplete rows, fill missing values, and so forth. In the next sections, we'll explore all the common data cleaning situations.

While it's hard to state that some steps are strictly required and others aren't, it's clever to know and try as many approaches as possible.

Also, see [Data Cleaning on awesome-ai-ml-dl](https://github.com/neomatrix369/awesome-ai-ml-dl/blob/master/data/data-preparation.md#data-cleaning) section to learn more about this topic.

We will assume the data it's tabular, to see more about other types of data, check the related sections of the Inferno.

### Get Rid of Extra Spaces
One of the first things you want to do is [remove extra spaces](https://stackoverflow.com/questions/43332057/pandas-strip-white-space). Take care! Some space can carry information, but it heavily depends on the situation. For example, in "Complete Name": "Andrea Carli" in nice to have space so we can later split this into "Name": "Andrea" and "Surname": "Carli". 

Virgilio wants you to notice that in general, apart from recommending and suggesting customization systems, unique identifiers like names or IDs are something you can generally drop. Often, they do not carry information. 
_Bonus tip_: learn how to use [Regex](https://www.analyticsvidhya.com/blog/2015/06/regular-expression-python/) for pattern matching, this is one of the powerful tools each data guy need to master.

_Best practices and exercises:_ [1](https://www.quora.com/How-do-you-remove-all-whitespace-from-a-Python-string), [2](https://towardsdatascience.com/5-methods-to-remove-the-from-your-data-in-python-and-the-fastest-one-281489382455), [3](https://www.tutorialspoint.com/How-to-remove-all-leading-whitespace-in-string-in-Python)

_RegeX exercises_: [1](https://www.w3resource.com/python-exercises/re/), [2](https://pycon2016.regex.training/exercises)

_Bonus Resource_: A super useful [tool](http://regviz.org/) for visualizing RegeX expressions and their effect on the text.

###  Select and Treat All Blank Cells
Often real-world data is incomplete and is necessary to handle this situation. [These](https://code.likeagirl.io/how-to-use-python-to-remove-or-modify-empty-values-in-a-csv-dataset-34426c816347) are two ways of dealing with it. [Here](https://hackersandslackers.com/pandas-dataframe-drop/) you have a more in-depth tutorial.

_Best practices and exercises:_ [1](https://www.kaggle.com/nirmal51194/data-cleaning-challenge-handling-missing-values), [2](https://stefvanbuuren.name/fimd/missing-data-pattern.html), [3](https://www.ethz.ch/content/dam/ethz/special-interest/math/statistics/sfs/Education/Advanced%20Studies%20in%20Applied%20Statistics/course-material-1719/Multivariate/w10-in-class-exercise-imputation-solution.pdf), [4](http://uc-r.github.io/missing_values)

###  Convert Value Types
[Different data types](https://pbpython.com/pandas_dtypes.html) carry different kinds of information, and you need to care about this.
[Here](https://www.geeksforgeeks.org/python-pandas-series-astype-to-convert-data-type-of-series/) is a good tutorial on how to convert value types. Remember that Python has some shortcut for doing this (executing `str(3)` will give you back the "3" string) but Virgilio recommends you to learn how to do it with Pandas.

###  Remove Duplicates
You don't want duplicate data, they may be noisy, redundant, and occupy more space! Learn [how to handle them simply](https://www.geeksforgeeks.org/python-pandas-dataframe-drop_duplicates/) with Pandas.

###  Spell Check
You want to correct wrong words, for the sake of evenness. Check [here](https://www.tutorialspoint.com/python_text_processing/python_spelling_check.htm) for a good Python module to do it. Also, this is a good starting point to [implement it](https://stackoverflow.com/questions/46409475/spell-checker-in-pandas). 

This is also useful when you are dealing with text data (columns of text data in a tabular dataset).

_Best practices and exercises:_ [1](https://stackoverflow.com/questions/7315114/spell-check-program-in-python), [2](https://norvig.com/spell-correct.html), [3](https://github.com/garytse89/Python-Exercises/tree/master/autoCorrect)

###  Grammar Check
Just like Spell Check, a Grammar check of text data can be of great importance depending on the NLP task you are about to perform with them.

###  Reshape your data
Maybe you're going to feed your data into a neural network or show them in a colorful bars plot. Anyway, you need to transform your data and give them the right shape for your data pipeline. [Here](https://towardsdatascience.com/seven-clean-steps-to-reshape-your-data-with-pandas-or-how-i-use-python-where-excel-fails-62061f86ef9c) is a very good tutorial for this task. 

_Best practices and exercises:_ [1](https://pandas.pydata.org/pandas-docs/stable/user_guide/reshaping.html), [2](https://discuss.codecademy.com/t/faq-data-cleaning-with-pandas-reshaping-your-data/384794).

###  Converting to categorical data type
When dealing with numeric or string (alphanumeric) columns that represent categories or multi-class labels, it's best to convert them into the categorical type. 

This does not just save memory, also makes the dataframe faster to operate on. And further makes the data analysis step easier to perform.

 Further to that categorical column types under the hood maintain a category code per value in the column, which can be used instead of their string equivalents - saving some preprocessing or column transformations. 

One additional benefit of doing this would be to help spot inconsistent namings and replace them with consistent ones. Inconsistent labels can lead to incorrect analysis and visualizations. Although these can be spotted during the summarization of categorical data.

Read all about it in the [Pandas docs](https://pandas.pydata.org/docs/) on [Categorical data type](https://pandas.pydata.org/pandas-docs/stable/user_guide/categorical.html).

###  Dealing with Special Characters
UTF-encoding is the standard to follow, but remember that not everyone follows the rules (otherwise, we'd not need [crime predictive analytics](http://scholarworks.sjsu.edu/cgi/viewcontent.cgi?article=1633&context=etd_projects).

 You can learn [here](https://stackoverflow.com/questions/45596529/replacing-special-characters-in-pandas-dataframe) how to deal with strange accents or special characters.

_Best practices and exercises:_ [1](https://www.w3resource.com/python-exercises/python-basic-exercise-92.php), [2](https://stackoverflow.com/questions/22518703/escape-sequences-exercise-in-python?rq=1), [3](https://learnpythonthehardway.org/book/ex2.html)

###  Verification to enrich data
Sometimes can be useful to engineer some data, for example: suppose you're dealing with [e-commerce data](https://www.edataindia.com/why-data-cleansing-is-important/), and you have the prices of each object sold. You may want to add a new column in your dataset, with a label carrying handy information like a Price_level [low, medium, high] based on upper and lower bounds you can decide.

This is simple in Pandas, check [here](https://stackoverflow.com/questions/19913659/pandas-conditional-creation-of-a-series-dataframe-column). Another example is to add a Gender column (M, F) to easily explore data and gain insights into a customers dataset.

_Best practices and exercises:_ [1](https://web.archive.org/web/20200813205611/http://www.inweb.org.br/w3c/dataenrichment/), [2](https://solutionsreview.com/data-integration/best-practices-for-data-enrichment-after-etl/)

###  Data Discretization
Many Machine Learning and Data Analysis methods cannot handle continuous data, and dealing with them can be computationally prohibitive. [Here](https://www.youtube.com/watch?v=TF3_6lwITQg) you find a good video explaining why and how you need to discretize data.

_Best practices and exercises:_ [1](https://www.researchgate.net/post/What_are_the_best_methods_for_discretization_of_continuous_features), [2](https://towardsdatascience.com/discretisation-using-decision-trees-21910483fa4b), [3](https://docs.microsoft.com/en-us/sql/analysis-services/data-mining/discretization-methods-data-mining)

###  Feature Scaling
Feature scaling is a method used to standardize the range of independent variables or features of data. In data processing, it is also known as data normalization and is generally performed during the data preprocessing step.

Also known as "Normalizing data" (bring the values of a numeric column between 0 and 1) or "Standardizing data".
See [Normalization vs Standardization](https://towardsdatascience.com/normalization-vs-standardization-cb8fe15082eb). 

Normalization is also called the min-max approach, see another [example](https://towardsdatascience.com/data-normalization-with-pandas-and-scikit-learn-7c1cc6ed6475).

_Best practices and exercises:_ [1](https://www.kaggle.com/jfeng1023/data-cleaning-challenge-scale-and-normalize-data), [2](https://www.quora.com/When-should-you-perform-feature-scaling-and-mean-normalization-on-the-given-data-What-are-the-advantages-of-these-techniques), [3](https://www.quora.com/When-do-I-have-to-do-feature-scaling-in-machine-learning)

### Types of data

**Tabular data**

Also known as columnar or spreadsheet-like data where each column may be a different data type like string, numeric, date, etc. This includes most kinds of data commonly stored in a relational database or tab or .csv files.

Such data can then represent categorical, numeric/continuous, time-series data, or a mix of all of these in different proportions -- this is the next level of abstraction of such types of data.

**Text data**

Just as transformations or preprocessing can be performed on numeric, date, or categorical data, similarly text data can also be processed in such a fashion.

 Although text data would undergo regex and string transformation processes deemed necessary for the NLP tasks they would be used for thereafter.
 
  The result of such processing could be one or more tabular datasets which could then further be processed like any other tabular dataset (see above section).

**Image/Video/Audio/Signal data**

Unlike Tabular or Text data, such data is made up of mostly continuous values. The original data would be in binary format in the form of directories of files. 

These files would then be processed and transformed into rows and columns of continuous data with a minority number of categorical or other data types to represent such data, eventually, they may be represented in the tabular format for analysis, processing, and training purposes.

 And so these final datasets would go through the same preprocessing as any other tabular data would.

**Note:** _Each of these data types above can be covered in more detail in further guides at the **Inferno** or **Paradiso** levels and outside the current scope to keep the brevity in the understanding of these concepts. To catch a glimpse of some of the specific preprocessing or transformation steps that we can do per type of data, see this [resource](https://www.linkedin.com/posts/shivan-kumar_datascience-machinelearning-deeplearning-activity-6732600618751442944-kNRY)._

### Data Cleaning Tools
You're not going to hunt tigers without a rifle! You have a ton of tools out there that will help you during the data cleaning process, the one Virgilio wants to suggest to you is [this](https://www.analyticsindiamag.com/10-best-data-cleaning-tools-get-data/) open-source tool from Google. Check [here](https://www.quora.com/What-are-the-best-open-source-data-cleansing-tools-software-available) for more.  

## Visualization
Visualization of data before and after many of the above steps is vital, to ensure the balance, bias, and shape of the data is maintained. 

And the transformed or preprocessed data is representative of its original form. Even if we can't control the way such data is going to evolve, we can at least see the before and after-effects of a transformation/preprocessing step before proceeding with it. Or if we even do proceed with it, we know from the visuals what the outcome stands to be from it (more or less).

The specifics of what kinds of visualizations to use is to be made available in the Visualisation Guide.

## Merge Data Sets and Integration
Now that you hopefully have been successful in your data cleaning process, you can merge data from a different source to create big [de-normalized](https://www.researchgate.net/post/When_and_why_do_we_need_data_normalization_in_data_mining_algorithms) data tables, ready to be explored and consumed. [This](https://www.quora.com/Is-data-warehouse-normalized-or-denormalized-Why) is why.

## Aggregating data (centralizing)
Aggregating data or centralizing data (or sometimes called normalizing data) - even though this topic overlaps with the [Data Collection](https://virgili0.github.io/Virgilio/purgatorio/collect-and-prepare-data/data-collection.html) topic covered in the respective guide. It's good to touch on the topic and be reminded of it briefly. 

As covered in the [Business Questions](#Business-Questions) when we ask questions about the data, one of them is to find its source. But it also could give rise to other related data or sources of data that could be relevant to the current task and then be brought in. 

Which throws light on the data aggregation process - how to bring the different sources of data and convert it into one form before performing any preprocessing or transformations on it. This process itself is sort of a preprocessing or transformations step on its own.

On the other hand, this question could throw light on the sources of data the current raw-data is made up of (and make us aware of the aggregation process it underwent) before taking its current form.

_Best practices and exercises:_ [1](https://www.ssc.wisc.edu/sscc/pubs/sfr-combine.htm), [2](https://rpubs.com/wsundstrom/t_merge), [3](https://jakevdp.github.io/PythonDataScienceHandbook/03.07-merge-and-join.html), [4](https://searchbusinessanalytics.techtarget.com/feature/Using-data-merging-and-concatenation-techniques-to-integrate-data), [5](https://www.analyticsvidhya.com/blog/2016/06/9-challenges-data-merging-subsetting-r-python-beginner/)

## Bias and balance/imbalance
It is but hard to first check and know the current bias of the data or how the data is balanced or how much imbalance exists in the raw data. To add to that, at each of the above transformation / preprocessing steps we may be introducing bias or dampening existing bias or a combination of the two, in the raw data while we process it or transform it.

## Sanity Check
You always want to be sure that your data are _exactly_ how you want them to be, and because of this is a good rule of thumb to apply a sanity check after each complete iteration of the data preprocessing pipeline (i.e. each step we have seen until now).

Look [here](https://www.trifacta.com/blog/4-key-steps-to-sanity-checking-your-data/) for a good overview. Depending on your case, the sanity check can vary a lot.

_Best practices and exercises:_ [1](https://blog.socialcops.com/academy/resources/4-data-checks-clean-data/), [2](https://www.r-bloggers.com/data-sanity-checks-data-proofer-and-r-analogues/), [3](https://www.quora.com/What-is-the-example-of-Sanity-testing-and-smoke-testing)

## Automate These Boring Stuffs!
As Virgilio told you at the very beginning, the data preprocessing process can take a long time and be very tedious. Because of this, you want to [automate](https://www.youtube.com/watch?v=UZUoH7_mYx4) the most you can. Also, **automation is married with iteration**, so this is the way you need to plan your data preprocessing pipelines.

 [Here](https://github.com/mdkearns/automated-data-preprocessing) you find a good command-line tool for doing that, but Virgilio is almost sure you'll need to build your own (remember, each problem is unique!), but this is a good starting point.

## Doing it in real-time
Fully connected to the [previous section](#Automate-These-Boring-Stuffs!), automating redundant or repeated tasks makes the workflow repeatable, consistent, efficient, and reliable. And given these qualities, it's not far away from being given the task of handling real-world raw data directly from the source or the various sources (centralizing or aggregation of data).

 This takes away the whole manual step from the process and keeps things real and practical -- production-ready all the time. In this way, you can see all the flavors of data/input and the nuances and edge-cases to handle each time a step fails or gives false positives or false negatives.

## Don't Joke With Data
First, [**data is King**](https://www.edq.com/glossary/data-quality-importance/). In the [data-driven epoch](https://www.venturi-group.com/qa-with-helen-mannion/), having [data quality issues](https://www.ringlead.com/blog/7-common-data-quality-issues/) means to lose tremendous amounts of value for a company, in the present and the future. So, respect your King and care a lot about him. The most immediate way to do this is to plan and [work hard](https://web.archive.org/web/20190708202946/https://nektardata.com/high-quality-data/) to _produce_ good quality data.


Your goal is to plan a collecting data infrastructure that fixes problems beforehand. This means to care a lot about planning well your database schemas (do I need [third-normal form](https://social.technet.microsoft.com/Forums/Lync/en-US/7bf4ca30-a1bc-415d-97e6-ce0ac3137b53/normalized-3nf-vs-denormalizedstar-schema-data-warehouse-?forum=sqldatawarehousing) or not?), how do you collect data from sensors (physical or conceptual) and so on. 

These are problems if you're building a system up from the ground, but most of the time in you're gonna facing real-world problems that someone wants to solve with [_already available_](https://www.wired.com/insights/2013/05/more-data-more-problems-is-big-data-always-right/) data.  

_Best practices and exercises:_ [1](https://blog.panoply.io/5-data-preparation-tools-1-automated-data-platform), [2](https://www.quora.com/How-do-I-make-an-automated-data-cleaning-in-Python-for-ML-Is-there-a-trick-for-that), [3](https://www.quora.com/Is-there-a-python-package-to-automate-data-preparation-in-machine-learning), [4](https://machinelearningmastery.com/prepare-data-machine-learning-python-scikit-learn/), [5](https://www.analyticsvidhya.com/blog/2018/10/rapidminer-data-preparation-machine-learning/)

## Who To Leave Behind
During the data profiling process, it's common to realize that often some of your data are [useless](https://ambisense.net/why-useless-data-is-worse-than-no-data/). Your data may have too much noise or they are partial, and most likely you don't all of them to answer your business problems.


[To drop or not to drop, the Dilemma](https://www.theanalysisfactor.com/outliers-to-drop-or-not-to-drop/).
Each time you're facing a data-related problem, try to understand what data you need and what you' don't - that is, for each piece of information, ask yourself (and ask the _business user_): 
- How this data is going to help me?
- Is possible to use them, reducing noise or missing values?
- Considering the benefits/costs of the preparation process versus the business value created, Is the effort worth it?

## The Toolkit
The tools we're gonna use are Python3 and his [Pandas library](https://pandas.pydata.org/), the de-facto standard to manipulate datasets. 

There are a whole lot of other tools that have come out which are either built on top of Pandas or Numpy or independently, see [Data Preparation on awesome-ai-ml-dl](https://github.com/neomatrix369/awesome-ai-ml-dl/blob/master/data/data-preparation.md) for more details.

The heavy lifting here is done by the [DataFrame class](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.html), which comes with a bunch of useful functions for your daily data tasks.


Hopefully, you already know Python, if not start from there (do the steps Virgilio suggested to you in the ML guide requirements), and then take this [Beginner Pandas tutorial](https://web.archive.org/web/20200719131732/https://pandas.pydata.org/pandas-docs/stable/getting_started/10min.html). 

Don't worry if by now some ideas are not clear, but try to get the big picture of the common [Pandas operations](https://www.analyticsvidhya.com/blog/2016/01/12-pandas-techniques-python-data-manipulation/). 

_Best practices and exercises:_ [1](https://github.com/guipsamora/pandas_exercises), [2](https://www.w3resource.com/python-exercises/pandas/index.php), [3](https://www.machinelearningplus.com/python/101-pandas-exercises-python/), [4](https://www.kaggle.com/pistak/pandas-tutorial-with-interactive-exercises), [5](http://disi.unitn.it/~teso/courses/sciprog/python_pandas_exercises.html)

## Conclusions
Now you're ready to take your data and play with them in a variety of ways, and you have a nice panoramic overview of the entire process. You can refer to this page when you clean data, to check if you're not missing some steps. Remember that probably each situation requires a subset of these steps.
