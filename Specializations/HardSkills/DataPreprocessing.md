# Data Preprocessing

Data preprocessing (also known as Data Preparation, but "Preprocessing" sounds more like magic) is the [iterative process](http://www.jsoftware.us/vol12/306-JSW15277.pdf) of gathering, combining, structuring and organizing data so it can be analyzed as part of data visualization, analytics, and machine learning applications.

[Real-world data](https://www.quanticate.com/blog/real-world-data-analysis-in-clinical-trials) is often incomplete, inconsistent, and/or lacking in certain behaviors or trends, and is likely to contain many errors. Data preprocessing is a proven method of resolving such issues.

It's the [core ability](https://blogs.sas.com/content/hiddeninsights/2017/11/30/analytical-data-preparation-important/) of any data scientist or data engineer, and you must _be able to manipulate, clean, and structure_ your data during the everyday work (besides expecting that this will take the most of your [daily-time](https://www.infoworld.com/article/3228245/the-80-20-data-science-dilemma.html)!).

There are a lot of different data types out there, and they deserve [different treatments](http://blog.appliedinformaticsinc.com/data-mining-challenges-in-data-cleaning/).

As usual the structure I've planned to get you started consists of having a [general overview](https://searchbusinessanalytics.techtarget.com/definition/data-preparation), and then dive deep into each data processing situation you can encounter. 

[Here](https://towardsdatascience.com/data-pre-processing-techniques-you-should-know-8954662716d6) you have a gentle end-to-end panoramic view of the entire process.

The concepts through which we're going are the following:

- [Don't Joke With Data](#Don't-Joke-With-Data)
- [Business Questions](#Business-Questions)
- [Data Profiling](#Data-Profiling)
- [Who To Leave Behind](#Who-To-Leave-Behind)
- [Start Small](#Start-small)
- [The Toolkit](#The-Toolkit)
- [Data Cleaning](#Data-Cleaning)
  - [Get Rid of Extra Spaces](#Get-Rid-of-Extra-Spaces)
  - [Select and Treat All Blank Cells](#Select-and-Treat-All-Blank-Cells)
  - [Convert Values Type](#Convert-Values-Type)
  - [Remove Duplicates](#Remove-Duplicates)
  - [Change Text to Lower/Upper Case](#Change-Text-to-Lower/Upper-Case)
  - [Spell Check](#Spell-Check)
  - [Dealing with Special Characters](#Dealing-with-Special-Characters)
  - [Normalizing Dates](#Normalizing-Dates)
  - [Verification To Enrich Data](#Verification-To-Enrich-Data)
  - [Data Discretization](#Data-Discretization)
  - [Feature Scaling](#Feature-Scaling)
  - [Data Cleaning Tools](#Data-Cleaning-Tools)
- [Merge Data Sets and Integration](#Merge-Data-Sets-and-Integration)
- [Sanity Check](#Sanity-Check)
- [Automate These Boring Stuffs!](#Automate-These-Boring-Stuffs!)

**Let's Start!**

### Don't Joke With Data
First, [**data is King**](https://www.edq.com/glossary/data-quality-importance/). In the [data-driven epoch](https://www.venturi-group.com/qa-with-helen-mannion/), having [data quality issues](https://www.ringlead.com/blog/7-common-data-quality-issues/) means to lose tremendous amounts of value for a company, in the present and in the future. So, respect your King and care a lot about him. The most immediate way to do this is to plan and [work hard](https://nektardata.com/high-quality-data/) to _produce_ good quality data.
Your goal is to plan a collecting data infrastructure that fixes problems beforehand. This means to care to a lot about planning well your database schemas (do I need [third-normal form](https://social.technet.microsoft.com/Forums/Lync/en-US/7bf4ca30-a1bc-415d-97e6-ce0ac3137b53/normalized-3nf-vs-denormalizedstar-schema-data-warehouse-?forum=sqldatawarehousing) or not?), how do you collect data from sensors (physical or conceptual) and so on. These are problems if you're building a system up from the ground, but most of the times in you're gonna facing real-world problems that someone wants to solve with [_already available_](https://www.wired.com/insights/2013/05/more-data-more-problems-is-big-data-always-right/) data.  

### Business Questions
Asking the [right business questions](https://www.datapine.com/blog/data-analysis-questions/) is hard, but it has the [biggest impact](https://towardsdatascience.com/start-your-data-exploration-with-questions-2f1d42cff29e) on your performance of solving a particular problem. Remember, you want to [solve a problem](http://www.informit.com/articles/article.aspx?p=2271188&seqNum=2), not to create new ones! 

### Data Profiling
According to the (cold as ice) [Wikipedia definition](https://en.wikipedia.org/wiki/Data_profiling): "Data profiling is the process of examining the data available from an existing information source (e.g. a database or a file) and collecting statistics and informative data summaries."\
So Wikipedia is subtly suggesting us to take a coffee with the data. 

During this informal meeting, ask the data questions like:
- which business problem are you meant to solve? (what is important, and what is not) 
- how have you been collected (with noise, missing values...)?
- how many friends of yours are there and where can I find them? (data dimensions and retrieving from storages)

Eventually, you may find the data too much quiet, maybe they're just shy! \
Anyway, you're going to [ask these questions to the business user](https://business-analysis-excellence.com/business-requirements-meeting/)!

_Best practices and exercises:_ [1](https://www.iqint.org/idq2013/presentations/downloads/di_loreto_data_profiling_tutorial_monday_am.pdf), [2](https://community.alteryx.com/t5/Alteryx-Designer-Discussions/Data-profiling-tutorials-use-cases-and-exercise/td-p/145347)

### Who To Leave Behind
During the data profiling process, it's common to realize that often some of your data are [useless](https://ambisense.net/why-useless-data-is-worse-than-no-data/). Your data may have too much noise or they are partial, and most likely you don't all of them to answer your business problems.
[To drop or not to drop, the Dilemma](https://www.theanalysisfactor.com/outliers-to-drop-or-not-to-drop/).
Each time you're facing a data related problem, try to understand what data you need and what you' don't - that is, for each piece of information, ask yourself (and ask the _business user_): 
- How this data is going to help me?
- Is possible to use them, reducing noise o missing values?
- Considering the benefits/costs of the preparation process versus the business value created, Is this data worth it?

### Start Small
It's stupid to handle GBs of data each time you want to try a data preparation step. Just use [small subsets](https://sdtimes.com/bi/data-gets-big-best-practices-data-preparation-scale/) of the data (but take care that they are representative and you catch all the problems). Remember, if you want to experiment with string cleaning, you don't need to launch your script on 10M rows. 

### The Toolkit
The tools we're gonna use are Python3 and his [Pandas library](https://pandas.pydata.org/), the de-facto standard to manipulate datasets.
The heavy lifting here is done by the [DataFrame class](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.html), which comes with a bunch of useful functions for your daily data tasks.
Hopefully, you already know Python, if not start from there (do the steps I suggest you in the ML guide requirements), and then take this [Beginner Pandas tutorial](https://pandas.pydata.org/pandas-docs/stable/getting_started/10min.html). Don't worry if now some ideas are not totally clear, but try to get the big picture of the common [Pandas operations](https://www.analyticsvidhya.com/blog/2016/01/12-pandas-techniques-python-data-manipulation/). 

_Best practices and exercises:_ [1](https://github.com/guipsamora/pandas_exercises), [2](https://www.w3resource.com/python-exercises/pandas/index.php), [3](https://www.machinelearningplus.com/python/101-pandas-exercises-python/), [4](https://www.kaggle.com/pistak/pandas-tutorial-with-interactive-exercises), [5](http://disi.unitn.it/~teso/courses/sciprog/python_pandas_exercises.html)

### Data Cleaning
[Data cleaning](https://en.wikipedia.org/wiki/Data_cleansing) is the general process of taking data, after you have a clear big picture of them, and you need to realize the actual process of replacing characters, dropping incomplete rows, fill missing values and so forth. In the next sections, we'll explore all the common data cleaning situations.

### Get Rid of Extra Spaces
One of the first things you want to do is [remove extra spaces](https://stackoverflow.com/questions/43332057/pandas-strip-white-space). Take care! Some space can carry information, but it heavily depends on the situation. For example, in "Complete Name": "Giacomo Ciarlini" in nice to have space so we can later split this into "Name": "Giacomo" and "Surname": "Ciarlini". I want you to notice that in general, apart from recommending and suggestion customization systems, unique identifiers like names or IDs are something you can generally drop. Often, they do not carry information. 
_Bonus tip_: learn how to use [Regex](https://www.analyticsvidhya.com/blog/2015/06/regular-expression-python/) for pattern matching, this is one of the powerful tools each data guy need to master.

_Best practices and exercises:_ [1](https://www.quora.com/How-do-you-remove-all-whitespace-from-a-Python-string), [2](https://towardsdatascience.com/5-methods-to-remove-the-from-your-data-in-python-and-the-fastest-one-281489382455), [3](https://www.tutorialspoint.com/How-to-remove-all-leading-whitespace-in-string-in-Python)

_RegeX exercises_: [1](https://www.w3resource.com/python-exercises/re/), [2](https://pycon2016.regex.training/exercises)

_Bonus Resource_: A super useful [tool](http://regviz.org/) for visualizing RegeX expressions and their effect on the text.

###  Select and Treat All Blank Cells
Often real-world data is incomplete and is necessary to handle this situation. [These](https://code.likeagirl.io/how-to-use-python-to-remove-or-modify-empty-values-in-a-csv-dataset-34426c816347) are two ways of dealing with it. [Here](https://hackersandslackers.com/pandas-dataframe-drop/) you have a more in-depth tutorial.

_Best practices and exercises:_ [1](https://www.kaggle.com/nirmal51194/data-cleaning-challenge-handling-missing-values), [2](https://stefvanbuuren.name/fimd/missing-data-pattern.html), [3](https://www.ethz.ch/content/dam/ethz/special-interest/math/statistics/sfs/Education/Advanced%20Studies%20in%20Applied%20Statistics/course-material-1719/Multivariate/w10-in-class-exercise-imputation-solution.pdf), [4](http://uc-r.github.io/missing_values)

###  Convert Values Type
[Different data types](https://pbpython.com/pandas_dtypes.html) carries different information, and you need to care about this.
[Here](https://www.geeksforgeeks.org/python-pandas-series-astype-to-convert-data-type-of-series/) is a good tutorial on how to convert type values. Remember that Python has some shortcut for doing this (executing str(3) will give you back the "3" string) but I recommend you to learn how to do it with Pandas.

###  Remove Duplicates
You don't want to duplicate data, they both are noise and occupy space! Learn [how to handle them simply](https://www.geeksforgeeks.org/python-pandas-dataframe-drop_duplicates/) with Pandas.

###  Change Text to Lower/Upper Case
You want to _Capitalize_ names, or maybe make them uniform (some people can enter data with or without capital letters!). Check [here](https://www.geeksforgeeks.org/python-pandas-series-str-lower-upper-and-title/) for the Pandas way to do it.

###  Spell Check
You want to correct wrong words, for the sake of evenness. Check [here](https://www.tutorialspoint.com/python/python_spelling_check.htm) for a good Python module to do it. Also, this is a good starting point to [implement it](https://stackoverflow.com/questions/46409475/spell-checker-in-pandas). 

_Best practices and exercises:_ [1](https://stackoverflow.com/questions/7315114/spell-check-program-in-python), [2](https://norvig.com/spell-correct.html), [3](https://github.com/garytse89/Python-Exercises/tree/master/autoCorrect)

###  Reshape your data
Maybe you're going to feed your data into a neural network or show them in a colorful bars plot. Anyway, you need to transform your data and give them the right shape for your data pipeline. [Here](https://towardsdatascience.com/seven-clean-steps-to-reshape-your-data-with-pandas-or-how-i-use-python-where-excel-fails-62061f86ef9c) is a very good tutorial for this task. 

_Best practices and exercises:_ [1](https://pandas.pydata.org/pandas-docs/stable/user_guide/reshaping.html), [2](https://discuss.codecademy.com/t/faq-data-cleaning-with-pandas-reshaping-your-data/384794).

###  Dealing with Special Characters
UTF-encoding is the standard to follow, but remember that not everyone follows the rules (otherwise, we'd not need [crime predictive analytics](http://scholarworks.sjsu.edu/cgi/viewcontent.cgi?article=1633&context=etd_projects). You can learn [here](https://stackoverflow.com/questions/45596529/replacing-special-characters-in-pandas-dataframe) how to deal with strange accents or special characters.

_Best practices and exercises:_ [1](https://www.w3resource.com/python-exercises/python-basic-exercise-92.php), [2](https://stackoverflow.com/questions/22518703/escape-sequences-exercise-in-python?rq=1), [3](https://learnpythonthehardway.org/book/ex2.html)

###  Normalizing Dates
I think there could be one hundred ways to write down a date. You need to decide your format and make them uniform across your dataset, and [here](https://medium.com/jbennetcodes/dealing-with-datetimes-like-a-pro-in-pandas-b80d3d808a7f) you learn how to do it.

_Best practices and exercises:_ [1](https://www.w3resource.com/python-exercises/python-conditional-exercise-41.php), [2](https://www.w3resource.com/python-exercises/date-time-exercise/), [3](https://www.kaggle.com/anezka/data-cleaning-challenge-parsing-dates)

###  Verification to enrich data
Sometimes can be useful to engineer some data, for example: suppose you're dealing with [e-commerce data](https://www.edataindia.com/why-data-cleansing-is-important/), and you have the prices of each object sold. You may want to add a new column in your dataset, with a label carrying handy information like a Price_level [low, medium, high] based on upper and lower bounds you can decide. This is really simple in Pandas, check [here](https://stackoverflow.com/questions/19913659/pandas-conditional-creation-of-a-series-dataframe-column). Another example is to add a Gender column (M, F) to easily explore data and gain insights in a customers dataset.

_Best practices and exercises:_ [1](http://www.inweb.org.br/w3c/dataenrichment/), [2](https://solutionsreview.com/data-integration/best-practices-for-data-enrichment-after-etl/), [3](http://www.inweb.org.br/w3c/dataenrichment/)

### Data Discretization
Many Machine Learning and Data Analysis methods cannot handle continuous data, and dealing with them can be computationally prohibitive. [Here](https://www.youtube.com/watch?v=TF3_6lwITQg) you find a good video explaining why and how you need to discretize data.

_Best practices and exercises:_ [1](https://www.researchgate.net/post/What_are_the_best_methods_for_discretization_of_continuous_features), [2](https://towardsdatascience.com/discretisation-using-decision-trees-21910483fa4b), [3](https://docs.microsoft.com/en-us/sql/analysis-services/data-mining/discretization-methods-data-mining)

### Feature Scaling
Feature scaling is a method used to standardize the range of independent variables or features of data. In data processing, it is also known as data normalization and is generally performed during the data preprocessing step.
[Here](Feature scaling is a method used to standardize the range of independent variables or features of data. In data processing, it is also known as data normalization and is generally performed during the data preprocessing step.) you find a serious tutorial about this fundamental step.

_Best practices and exercises:_ [1](https://www.kaggle.com/jfeng1023/data-cleaning-challenge-scale-and-normalize-data), [2](https://www.quora.com/When-should-you-perform-feature-scaling-and-mean-normalization-on-the-given-data-What-are-the-advantages-of-these-techniques), [3](https://www.quora.com/When-do-I-have-to-do-feature-scaling-in-machine-learning)

### Data Cleaning Tools
You're not going to hunt tigers without a rifle! You have a ton of tools out there that will help you during the data cleaning process, the one I want to suggest you is [this](https://www.analyticsindiamag.com/10-best-data-cleaning-tools-get-data/) open source tool from Google. Check [here](https://www.quora.com/What-are-the-best-open-source-data-cleansing-tools-software-available) for more.  

### Merge Data Sets and Integration
Now that you hopefully have been successful in your data cleaning process, you can merge data from different source to create big [de-normalized](https://www.researchgate.net/post/When_and_why_do_we_need_data_normalization_in_data_mining_algorithms) data tables, ready to be explored and consumed. [This](https://www.quora.com/Is-data-warehouse-normalized-or-denormalized-Why) is why.

_Best practices and exercises:_ [1](https://www.ssc.wisc.edu/sscc/pubs/sfr-combine.htm), [2](https://rpubs.com/wsundstrom/t_merge), [3](https://jakevdp.github.io/PythonDataScienceHandbook/03.07-merge-and-join.html), [4](https://searchbusinessanalytics.techtarget.com/feature/Using-data-merging-and-concatenation-techniques-to-integrate-data), [5](https://www.analyticsvidhya.com/blog/2016/06/9-challenges-data-merging-subsetting-r-python-beginner/)

### Sanity Check
You always want to be sure that your data are _exactly_ how you want them to be, and because of this is a good rule of thumb to apply a sanity check after each complete iteration of the data preprocessing pipeline (i.e. each step we have seen until now)
Look [here](https://www.trifacta.com/blog/4-key-steps-to-sanity-checking-your-data/) for a good overview. Depending on your case, the sanity check can vary a lot.

_Best practices and exercises:_ [1](https://blog.socialcops.com/academy/resources/4-data-checks-clean-data/), [2](https://www.r-bloggers.com/data-sanity-checks-data-proofer-and-r-analogues/), [3](https://www.quora.com/What-is-the-example-of-Sanity-testing-and-smoke-testing)

### Automate These Boring Stuffs!
As I told you at the very beginning, the data preprocessing process can take a long time and be very tedious. Because of this, you want to [automate](https://www.youtube.com/watch?v=UZUoH7_mYx4) the most you can. Also, **automation is married with iteration**, so this is the way you need to plan your data preprocessing pipelines. [Here](https://github.com/mdkearns/automated-data-preprocessing) you find a good command line tool for doing that, but I'm almost sure you'll need to build your own (remember, each problem is unique!), but this is a good starting point.

_Best practices and exercises:_ [1](https://blog.panoply.io/5-data-preparation-tools-1-automated-data-platform), [2](https://www.quora.com/How-do-I-make-an-automated-data-cleaning-in-Python-for-ML-Is-there-a-trick-for-that), [3](https://www.quora.com/Is-there-a-python-package-to-automate-data-preparation-in-machine-learning), [4](https://machinelearningmastery.com/prepare-data-machine-learning-python-scikit-learn/), [5](https://www.analyticsvidhya.com/blog/2018/10/rapidminer-data-preparation-machine-learning/)

### Conclusions
Now you're ready to take your data and play with them in a variety of ways, and you have a nice panoramic overview of the entire process. You can refer to this page when you clean data, to check if you're not missing some steps. Remember that probably each situation requires a subset of these steps.

-------------------------
Written by [_clone95_](https://github.com/clone95)
