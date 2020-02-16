---
title: Tools and Libraries
author: clone95
description: Learn to use existing libraries for Machine Learning and Deep Learning and out-of-the-box tools for productions systems.
---

# Index

- [One Enemy at a Time](#One-Enemy-at-a-Time)
- [The Data Science Process Toolkit](#Data-Science-Process-Toolkit) 
    + [Data Collection](#Data-Collection)
    + [Data Preparation](#Data-Preparation)
    + [Data Visualization](#Data-Visualization)
    + [Machine Learning](#Machine-Learning)
    + [Deep Learning](#Deep-Learning)
    + [Evaluation and Fine-Tuning](#Evaluation-and-Fine-Tuning)
    + [Serving Models](#Serving-Models)
    + [Miscellaneous](#Miscellaneous)

- [Production Ready Tools](#Production-Ready-Tools)
    + [Computer Vision](#Computer-vision)
    + [Natural Language](#Natural-Language)
    + [Time Series Forecasting](#Time-Series-Forecasting)

- [Conclusions](#Conclusions)

# Smart Learning

As stated in the [Virgilio's Teaching Strategy](serving\paradiso\virgilio-teaching-strategy\virgilio-teaching-strategy.md) Guide, the best way to deal with the learning process is to leverage the "[Divide et Impera](https://en.wikipedia.org/wiki/Divide_and_rule)" principle, which states that every time you're tackling a problem (in this case, the _learning problem_) you should split it in smaller parts, easier to handle and understand. 

In the situation of learning a library it's not different!

You shouldn't try to learn all the features of a library in the same run, or you're going to be overheaded and overwhelmed! 

In fact a rich Python library can contain thousands of different functions and utilities, but _you'll need a small subset to get things done!_

**The suggested approach here is the following**:

- Choose a library
- Get some tutorial about it
- Get your hands dirty with the library itself

The process of learning libraries and tools will probably be you life-long companion, so it's very useful to use a smart approach from the beginning!

#### How this guide is designed

This guide is designed in the same fashion as the _Purgatorio structure_, namely you have a subsection for each phase of the Data Science process. 

For each section, we list for you different libraries and the best resources to learn them, but be aware!

You probably want don't want to learn many different libraries for the same task (for example, for Data Visualization), because most of them have partially the same features!

It's way better to learn 1 or 2 libraries for each step of the Data Science process, as a starting point!

You'll always be capable of learning more libraries when you reach the capabilities limits of the one that you already know (this ins't happening soon).  

Having that said, let's jump in!

# The Data Science Process Toolkit
## Data Collection

Data collection is one of the most crucial part of a Data Science project (you don't say?), and often a tedious one if you have to label your data by your own!

Luckily, good researchers and institutions often release their datasets, so you don't have to collect the data (or label it), just download!

But if you can't find the dataset that you need? 

Let's see at some tools that can help you in this task:

- [Digitalmethods Tools](https://wiki.digitalmethods.net/Dmi/ToolDatabase) is a set of free web scraping tools developed by Europe's leading Internet Studies groups

- [BeautifulSoup](https://www.dataquest.io/blog/web-scraping-tutorial-python/) is a Python library to scrape webpages

- [Selenium](https://www.pluralsight.com/guides/web-scraping-with-selenium) is a Python library meant to automate browser testing, but it can be perfectly used in combination with BeautifulSoup to setup a powerful webscraper

See also:
- [10 Best Web Scraping Tools to Extract Online Data](https://www.hongkiat.com/blog/web-scraping-tools/)

Remember that a lot of free access datasets are available for free, for example in the [UCI Dataset](https://archive.ics.uci.edu/ml/datasets.php) website or at the Data science Challenge platform [Kaggle](https://www.kaggle.com/).

## Data Preparation

Data preparation is often the [most time-consuming part of the Data Science project](https://www.infoworld.com/article/3228245/the-80-20-data-science-dilemma.html), so it's crucial to make sure that the right tools are used from you or your team. 

Often the right tools in this phase are the programming languages and their libraries.

The most popular and wide-used librares are:


- [Scikit-Learn](https://scikit-learn.org/) offers a lot of pre-made data transformations.
- [Pandas](https://pandas.pydata.org/) is the go-to library to handle data in the popular DataFrame format.
- [Datacleaner](https://github.com/rhiever/datacleaner) saves you a ton of time encoding and cleaning your data once it's already in a format that pandas DataFrames can handle.
- [Scrubadub](https://scrubadub.readthedocs.io/en/stable/index.html) to remove identifiable information from text.
- [Ftfy](https://github.com/LuminosoInsight/python-ftfy)  to take in bad Unicode and output good Unicode, for use in your Unicode-aware code.
- [Arrow](https://arrow.readthedocs.io/en/latest/) to creating, manipulating, formatting and converting dates, times and timestamps.

## Data Visualization
## Machine Learning
## Deep Learning
## Evaluation and Fine-Tuning
## Serving Models
## Miscellaneous

# Production Ready Tools
## Computer Vision
## Natural Language
## Time Series Forecasting
## Conclusions