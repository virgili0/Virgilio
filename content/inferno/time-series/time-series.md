---
title: Time Series
author: clone95
description: This guide aims to show you the Data Science applications you can build for dealing with time series data.
---

# Index

- [Time Is Money](#Time-Is-Money)
- [Introduction To Time Series](#Introduction-To-Time-Series)
- [Time Series Problems Overview](#Time-Series-Problems-Overview)
    - [Time Series Analysis](#Time-Series-Analysis)
    - [Time Series Forecasting](#Time-Series-Forecasting)
    - [Time Series Classification](#Time-Series-Classification)
    - [Time Series Forecasting as a Classification Problem](#Treating-Time-Series-Forecasting-as-a-Classification-Problem)
    - [Time Series Classification as Image Classification](#Time-Series-Classification-as-Image-Classification)
    - [The Matrix Profile](#The-Matrix-Profile)


**Disclaimer!**

This guide is not intended to be exhaustive of everything you can do with time series data, but to offer you a good overview of the possible approaches you can take or things you should check when dealing them. 

Having that said, let's begin!

## Time Is Money

Whether it is the sale of products, the estimated production of an agricultural field, or the forecast of any activity of a company, time series are an indispensable type of data, which has been used for thousands of years to inform the activities to be done **today**, based on what will happen **tomorrow**. 

In fact, a good estimate in the future of any interest factor, can bring a great saving of time (and money)! 

If you ask any manager will tell you that _time is even more important than money_, because you can convert time into money, _but the opposite is not possible!_ 

Learning to work with time series is a very valuable skill in the real world, and applicable to many situations and problems. 

It is also considered one of the most "difficult" types of data to manage, since _it has additional complexities_ compared to more traditional data such as tabular data or text.

We will see these additional complexities in the section [Time Series Addtional Challenges](#Time-Series-Addtional-Challenges).

Now that you know why it's important to know how to work with time series, it's time to start seeing them in practice! 

## Introduction To Time Series
#### Know the Time Series Data Structure

The first resources Virgilio recommends to get you started are the following:

- [Tutorial: Time Series Analysis with Pandas](https://www.dataquest.io/blog/tutorial-time-series-analysis-with-pandas/)
- [Working with Time Series](https://jakevdp.github.io/PythonDataScienceHandbook/03.11-working-with-time-series.html)

These are an exhaustive introduction to the type of "time" data, how it is manipulated with Pandas (indexing, transformation, visualization).

After you've gone through them, you should understand how to write **"idiomatic Pandas"** for time series, and you can find a tutorial (section 7 of [Modern Pandas](https://tomaugspurger.github.io/modern-1-intro)) here: 

- [Modern Pandas](https://tomaugspurger.github.io/modern-7-timeseries)

## Time Series Problems Overview

In the next sections we see what are the main problems that can be solved with time series data.

::: warning
Be aware that this is not an exhaustive list, and you should consider it only _a starting point!_ 
:::

Once you have identified a problem that you are really interested in solving, you need to find papers that talk about the state of the art of that problem and go deeper!

In fact it is always true that there is not a silver bullet that solves every problem, remember the [No Free Lunch Theorem](https://en.wikipedia.org/wiki/No_free_lunch_theorem).

Learning to manipulate time data with Pandas is mandatory, and the Pandas DataFrame structure is the natural landing place for this type of data. However, due to the "sequential" nature of the data type, the DataFrame has some structural limitations, because it is designed for more classic tabular data. 

To overcome these limitations, the [Alan Turing Institute](https://www.turing.ac.uk/) has developed a special version of Scikit-Learn, [Sktime](https://github.com/alan-turing-institute/sktime), using a specific .ts format to load time series data into Pandas DataFrames. 

From the docs: 
> sktime is a Python machine learning toolbox for time series with a unified interface for multiple learning tasks. 
>sktime provides dedicated time series algorithms and scikit-learn compatible tools for building, tuning, and evaluating composite models. 
>
>We currently support:
>- Forecasting
>- Time series classification
>- Time series regression
>
>For deep learning methods, see our companion package: [sktime-dl](https://github.com/sktime/sktime-dl).

To get started with SKtime get through the following resourse:

- [SKTime - How to get started](https://www.sktime.org/en/latest/how_to_get_started.html)
- [Loading data in SKTime](https://www.sktime.org/en/latest/examples/loading_data.html)
- [SKTime - Examples](https://github.com/alan-turing-institute/sktime/tree/master/examples)

These are the basic tools you need to know in order to work with time series in Python. 

In the last section of the guide we'll see some other useful Python libraries which integrate well with SKTime and the .ts data type, but before that, let's have a look at what type of problem you can solve within the time series domain.

## Time Series Analysis

Imagine you are working as Data Scientist, and you are asked to do _"something useful"_ not better specified. Your first intuition must be, as with any type of data, to understand the dataset and the type of information it brings with it.

This process, often called *"analysis"*, is fundamental before any other, for example before trying to make predictions about future values.

The path Virglio suggests is as follows: 

First of all, take this free and extremely complete course that introduces you to time series analysis:

- [**Introduction to Time Series Analysis**](https://www.itl.nist.gov/div898/handbook/pmc/section4/pmc4.htm)

Once you're done with this, you can expand your knowledge with these following (extremely detailed) resources. 

- [Eberly College of Science - Applied Time Series Analysis](https://online.stat.psu.edu/stat510/)
- [Statistical forecasting: notes on regression and time series analysis](http://people.duke.edu/~rnau/411home.htm)
- [Modern Time Series Analysis](https://www.youtube.com/watch?v=v5ijNXvlC5A&t=9627s&ab_channel=Enthought)

Eventually, you can use this _very deep_ book as reference:

- [Time Series Analysis and Its Applications](https://www.stat.pitt.edu/stoffer/tsa4/tsa4.pdf)

::: tip
Be sure to check the [The Matrix Profile](#The-Matrix-Profile) section, you won't be disappointed! 

In fact this **extremely useful** method gives you invaluable insights about patterns in your times series data!
:::

Virgilio is _pretty sure_ that these 3 resources and the book can give you a **very detailed** preparation on the topic, so be sure to take the time that's needed to digest them very well! 

Some educational videos can be found:

- [Aileen Nielsen - Time Series Analysis - PyCon 2017](https://www.youtube.com/watch?v=zmfe2RaX-14&feature=youtu.be&ab_channel=PyCon2017)
- [Time Series Analysis - Georgia Tech](https://www.youtube.com/watch?v=31ng0uLqfhc&list=PL_onPhFCkVQghJC-KQkUNvkAGbriARyfX)
- [Time Series Talk](https://www.youtube.com/watch?v=DeORzP0go5I&list=PLvcbYUQ5t0UHOLnBzl46_Q6QKtFgfMGc3&ab_channel=ritvikmath)

Some other links that can help you are the following:

- [Time series analysis - Python](https://www.kaggle.com/kashnitsky/topic-9-part-1-time-series-analysis-in-python)
- [Time Series Analysis in Python - Getting Started](https://www.kaggle.com/getting-started/54280)
- [Learning Time Series Analysis](https://www.reddit.com/r/datascience/comments/9k9xct/learning_time_series_analysis/)


## Time Series Forecasting

The most classic of the problems related to time series is that of predicting the future values of the series.

Whether it is the price of a stock, the number of products sold, or the electricity needs of a part of the city, the topic of forecasting is fundamental in any aspect of human society. 

An interesting read:

- [Evolution of Forecasting from the Stone Age to Artificial Intelligence](https://medium.com/sciforce/evolution-of-forecasting-from-the-stone-age-to-artificial-intelligence-198e2b1457f5)
::: tip
Knowing how to predict a time series, with enough historical data behind it, **is an invaluable skill** in the modern data market, and every kind of company can benefit from it!
:::

As usual, Virgilio has collected for you the best free resources available, let's see!

The first and most important resource in time series forecasting is the following textbook:

- [**Forecasting: Principles And Practice**](https://otexts.com/fpp2/)

The textbook uses R examples throught the lessons, but it's not mandatory to learn R in order to use it! 

In fact, the advice Virgilio gives you is to try to follow the lessons **translating** the R code to Python code, obviously helping you with Google and all the resources at your disposal!

In this way you'll learn a lot about how to use Python for time series forecasting, and you'll have a lot of **reusable code** for your future projects!

Some other useful resources are:

- [Applying Statistical Modeling & Machine Learning to Perform Time-Series Forecasting](https://www.youtube.com/watch?v=JntA9XaTebs&t=6s&ab_channel=PyData)
- [A Worked Example of Using Neural Networks for Time Series Prediction](https://www.youtube.com/watch?v=hAlGqT3Xpus&ab_channel=PyData)
- [Reliably forecasting time-series in real-time ](https://www.youtube.com/watch?v=0zpg9ODE6Ww&ab_channel=PyData)

::: tip
It's important to understand that no-one-method will always outperform others, and that time series forecasting is an hot research topic, and you should always try to be aware of new techniques or approaches! 

Be sure to read some survey papers, once a while, like [**this one**](https://arxiv.org/abs/2004.13408)!
:::

Check also the [**Prophet**](https://facebook.github.io/prophet/) project, from Facebook AI Labs!

Prophet is a procedure for forecasting time series data based on an additive model where non-linear trends are fit with yearly, weekly, and daily seasonality, plus holiday effects. 

It works best with time series that have strong seasonal effects and several seasons of historical data. 

Prophet is robust to missing data and shifts in the trend, and typically handles outliers well.


## Time Series Forecasting as a Classification Problem

A very useful approach to keep in mind when working with time series forecasting is to _treat the problem of forecasting as a classification problem._

In fact, if treated in this way, it can be "simplified at will" and so be faced with a simpler problem to solve! 

For example, **preventing the exact price** of Apple shares tomorrow could be a very difficult challenge, but fortunately it is a problem that can be _"simplified"_!

An effective way to simplify this problem is to divide the space of tomorrow's possible prices (in terms of % variation) into bins! 

For example with 20 bins, the classes would be: [-100%, -90%], [-90%,-80%]....the other bins...[+80%, +90%], [+90%,+100%].

**This type of multiclass classification can be simplified "at will" **, even going so far as to classify whether tomorrow the price will be higher or lower than today (binary classification, 2 bins).

If you think about it, if you can hardly get a performance model for the simplest (binary) classification, you don't have much hope to predict the _exact value_ of the shares the next day!

This brings us to the next section of the guide, where you will learn how to deal with time series classification problems.


## Time Series Classification

## The Matrix Profile

## Conclusions