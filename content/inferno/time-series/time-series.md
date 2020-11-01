---
title: Time Series
author: clone95
description: This guide aims to show you the Data Science applications you can build for dealing with time series data.
---

# Index

- [Time Is Money](#Time-Is-Money)
- [Introduction To Time Series](#Introduction-To-Time-Series)
- [Time Series Tasks Overview](#Time-Series-Tasks-Overview)
    - [Time Series Analysis](#Time-Series-Analysis)
    - [Time Series Forecasting](#Time-Series-Forecasting)
    - [Time Series Classification](#Time-Series-Classification)
    - [Detecting Anomalies in Time Series](#Detecting-Anomalies-in-Time-Series)
- [Some Useful Techniques](#Some-Useful-Techniques)
- [Time Series Addtional Challenges](#Time-Series-Addtional-Challenges)

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

#### Machine Learning with Time Series Data

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

## Time Series Tasks Overview



### Time Series Analysis
http://people.duke.edu/~rnau/411home.htm
### Time Series Forecasting

https://otexts.com/fpp2/
### Time Series Classification
## Detecting Anomalies in Time Series