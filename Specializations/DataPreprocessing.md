# Data Preprocessing

Data preprocessing (also known as Data Preparation, but "Preprocessing" sounds more like magic) is the [iterative process](http://www.jsoftware.us/vol12/306-JSW15277.pdf) of gathering, combining, structuring and organizing data so it can be analyzed as part of data visualization, analytics and machine learning applications.

[Real-world data](https://www.quanticate.com/blog/real-world-data-analysis-in-clinical-trials) is often incomplete, inconsistent, and/or lacking in certain behaviors or trends, and is likely to contain many errors. Data preprocessing is a proven method of resolving such issues.

It's the [core ability](https://blogs.sas.com/content/hiddeninsights/2017/11/30/analytical-data-preparation-important/) of any data scientist or data engineer, and you must _be able to manipulate, clean, and structure_ your data during the everyday work (besides expecting that this will take the most of your [daily-time](https://www.infoworld.com/article/3228245/the-80-20-data-science-dilemma.html)!).

There are a lot of different data types out there, and they deserve [different treatments](http://blog.appliedinformaticsinc.com/data-mining-challenges-in-data-cleaning/).

As usual the structure I've planned to get you started consists of having a [general overview](https://searchbusinessanalytics.techtarget.com/definition/data-preparation), and then dive deep into each data processing situation you can encounter. 

The concepts through which we're going are are the following:

- Don't Joke With Data
- Work Hard To Produce Good Data
- Business Questions
- Data Profiling
- Who To Leave Behind
- Start Small
- The Toolkit
- Data Cleaning
  - Get Rid of Extra Spaces
  - Select and Treat All Blank Cells
  - Convert Values Type
  - Remove Duplicates
  - Change Text to Lower/Upper Case
  - Normalize Data
  - Spell Check
  - Standardize Data
  - Delete all Formatting
  - Dealing with Special Characters
  - Normalizing Date Formats
  - Finding and Replacing Patterns
  - Verification to enrich data
  - Data Cleaning Tools
- Data Exploration
- Merge Data Sets
- Data Discretization
- Data Scaling
- Data Integration
- Iteratively Cleanse and Filter
- Sanity Check

**Let's Start!**

### - Don't Joke With Data
First, [**data is King**](https://www.edq.com/glossary/data-quality-importance/). In the [data-driven epoch](https://www.venturi-group.com/qa-with-helen-mannion/), having [data quality issues](https://www.ringlead.com/blog/7-common-data-quality-issues/) means to lose tremendous amounts of value for a company, in the present and in the future. So, respect your King and care a lot about him. The most immediate way to do this, is to plan and [work hard](https://nektardata.com/high-quality-data/) to _produce_ good quality data.
Your goal is plan a collecting data infrastructure that fixes problems beforehand. This means to care to a lot about plannig well your database schemas (do I need [third-normal form](https://social.technet.microsoft.com/Forums/Lync/en-US/7bf4ca30-a1bc-415d-97e6-ce0ac3137b53/normalized-3nf-vs-denormalizedstar-schema-data-warehouse-?forum=sqldatawarehousing) or not?), how do you collect data from sensors (phisical or conceptuals) and so on. These are problems if you're building a system up from ground, but most of the times in  you're gonna facing real-world problems that someone wants to solve with [_already avaiable_](https://www.wired.com/insights/2013/05/more-data-more-problems-is-big-data-always-right/) data.  

### - Business Questions
Asking the [right business questions](https://www.datapine.com/blog/data-analysis-questions/) is hard, but it has the [biggest impact](https://towardsdatascience.com/start-your-data-exploration-with-questions-2f1d42cff29e) on your performance of solving a particular problem. Remember, you want to [solve a problem](http://www.informit.com/articles/article.aspx?p=2271188&seqNum=2), not to create new ones! 

### - Data Profiling
According to the (cold as ice) [Wikipedia definition](https://en.wikipedia.org/wiki/Data_profiling): "Data profiling is the process of examining the data available from an existing information source (e.g. a database or a file) and collecting statistics and informative data summaries."\
So Wikipedia is subtly suggesting us to take a coffee with the data. 

During this informal meeting, ask the data questions like:
- which business problem are you meant to solve? (what is important, and what is not) 
- how have you been collected (with noise, missing values...)?
- how many friends of yours are there and where can I find them? (data dimensions and retrieving from storages)

Eventually you may find the data too much quiet, maybe the're just shy! \
Anyway you're going to [ask these questions to the business user](https://business-analysis-excellence.com/business-requirements-meeting/)!

### - Who To Leave Behind
During the data profiling proces, it's common to realize that often some of your data are [useless](https://ambisense.net/why-useless-data-is-worse-than-no-data/). It can happen that your data have too much noise or they are partial, and most likely you don't all of them to answer you business problems.
[To drop or not to drop, the Dilemma](https://www.theanalysisfactor.com/outliers-to-drop-or-not-to-drop/).
Each times you're facing a data related problem, try understand what data you need and what you' don't - that is, for each piece of information, ask yourself (and ask the _business user_): 
- How this data is going to help me?
- Is possible to use them, reducing noise o missing values?
- Considering benefits/costs of the preparation process versus the business value created, Is this data worth it?

### - Start Small
It's stupid to handle GBs od data each time you want to try a data preparation step. Just use [small subsets](https://sdtimes.com/bi/data-gets-big-best-practices-data-preparation-scale/) of the data (but take care that they are representative and you catch all the problems). Remember, if you want to experiment with string cleaning, you don't need to launch your script on 10M rows. 

### - The Toolkit
The tools we're gonna use are Python3 and hid [Pandas library](https://pandas.pydata.org/), the de-facto standard to handle data.
The heavy lifting here is done by the [DataFrame class](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.html), which comes with a bunch of useful functions for your daily data tasks.
Hopefully you already know Python, if not start from there (do the steps I suggest you in the ML guide requirements), and then take this [Beginner Pandas tutorial](https://pandas.pydata.org/pandas-docs/stable/getting_started/10min.html). Don't worry if now some ideas are not totally clear, but try to get the big picture of the commond [Pandas operations](https://www.analyticsvidhya.com/blog/2016/01/12-pandas-techniques-python-data-manipulation/). 

### - Data Cleaning
[Data cleaning](https://en.wikipedia.org/wiki/Data_cleansing) is the general process of taking data, after you have a clear big picture of them, and you need to realize the actual process of replacing characters, dropping incomplete rows, fill missing values and so forth. In the next sections we'll explore all the common data cleaning situations.

###   - Get Rid of Extra Spaces


###   - Select and Treat All Blank Cells
###   - Convert Values Type
###   - Remove Duplicates
###   - Change Text to Lower/Upper Case
###   - Normalize Data
###   - Spell Check
###   - Standardize Data
###   - Delete all Formatting
###   - Dealing with Special Characters
###   - Normalizing Date Formats
###   - Finding and Replacing Patterns
###   - Verification to enrich data
###   - Data Cleaning Tools
### - Data Exploration
### - Merge Data Sets
### - Data Discretization
### - Data Scaling
### - Data Integration
### - Iteratively Cleanse and Filter
### - Sanity Check




