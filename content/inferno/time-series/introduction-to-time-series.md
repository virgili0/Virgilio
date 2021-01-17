---
title: Introduction to Time Series
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
    - [Time Series Forecasting as a Classification Problem](#Time-Series-Forecasting-as-a-Classification-Problem)
    - [The Matrix Profile](#The-Matrix-Profile)
    - [Automatic Time Series Feature Extraction](#Automatic-Time-Series-Feature-Extraction)
    - [Additional Resources](#Additional-Resources)
- [Conclusions](#Conclusions)


**Disclaimer!**

This guide is not intended to be exhaustive of everything you can do with time series data, but to offer you a good overview of the possible approaches you can take or things you should check when dealing with them. 

Having that said, let's begin!

## Time Is Money

Whether it is the sale of products, the estimated production of an agricultural field, or the forecast of any activity of a company, time series are an indispensable type of data, which has been used for thousands of years to inform the activities to be done **today**, based on what will happen **tomorrow**. 

A good estimate of the future data, for a company, can bring a great saving of time (and money)! 

If you ask any manager will tell you that _time is even more important than money_, because you can convert time into money, _but the opposite is not possible!_ 

Learning to work with time series is a very valuable skill in the real world, and applicable to many situations and problems. 

It is also considered one of the most "difficult" types of data to manage since _it has additional complexities_ compared to more traditional data such as tabular data or text.

We will see these additional complexities in the section [Time Series Additional Challenges](#Time-Series-Addtional-Challenges).

Now that you know why it's important to know how to work with time series, it's time to start seeing them in practice! 

## Introduction To Time Series
#### Know the Time Series Data Structure

The first resources Virgilio recommends to get you started are the following:

- [Tutorial: Time Series Analysis with Pandas](https://www.dataquest.io/blog/tutorial-time-series-analysis-with-pandas/)
- [Working with Time Series](https://jakevdp.github.io/PythonDataScienceHandbook/03.11-working-with-time-series.html)

These are an exhaustive introduction to the type of "time" data, how it is manipulated with Pandas (indexing, transformation, visualization).

After you've gone through them, you should understand how to write **"idiomatic Pandas"** for time series, and you can find a tutorial (section 7 of [Modern Pandas](https://tomaugspurger.github.io/modern-1-intro)) here: 

- [Modern Pandas](https://tomaugspurger.github.io/modern-7-timeseries)

Common time-series data manipulation steps:

- [Train-Test Split](https://medium.com/keita-starts-data-science/time-series-split-with-scikit-learn-74f5be38489e)
- [Resampling](https://machinelearningmastery.com/resample-interpolate-time-series-data-python/#:~:text=Resampling%20involves%20changing%20the%20frequency,as%20from%20days%20to%20months.)
- [Shift](https://towardsdatascience.com/time-series-analysis-resampling-shifting-and-rolling-f5664ddef77e)
- [Lag](https://math.stackexchange.com/questions/2548314/what-is-lag-in-a-time-series)
- [Autocorrelation](https://machinelearningmastery.com/gentle-introduction-autocorrelation-partial-autocorrelation/#:~:text=Because%20the%20correlation%20of%20the,Function%2C%20or%20the%20acronym%20ACF.)

After learning these resources, you will have a better understanding of what "time-series" mean and what time-series data is about!

## Time Series Problems Overview

In the next sections, we see what are the main problems that can be solved with time series data.

::: warning
Be aware that this is not an exhaustive list, and you should consider it only _a guideline!_ 
:::

Once you have identified a problem that you are interested in solving, you need to find papers that talk about the state of the art of that problem and go deeper!

It is always true that **there is no silver bullet that solves every problem**, remember the [No Free Lunch Theorem](https://en.wikipedia.org/wiki/No_free_lunch_theorem).

Learning to manipulate time-series data with Pandas is mandatory, and the Pandas DataFrame structure is the natural landing place for this type of data. However, due to the "sequential" nature of the data type, the DataFrame has some structural limitations, because it is designed for more classic tabular data. 

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

Also, be aware of [TSLearn](https://github.com/tslearn-team/tslearn), a very good machine learning toolkit for time series analysis in Python.

These are the basic tools you need to know to work with time series in Python, let's now have a look at _what type of problem_ you can solve with time series data.

## Time Series Analysis

Imagine you are working as a Data Scientist, and you are asked to do _"something useful"_ not better specified. Your first intuition must be, as with any type of data, to understand the dataset and the type of information it brings with it.

This process, often called *"analysis"*, is fundamental before any other, for example before trying to make predictions about future values.

The path Virgilio suggests is the following: 

First of all, take this free and extremely complete course that introduces you to time series analysis:

- [**Introduction to Time Series Analysis**](https://www.itl.nist.gov/div898/handbook/pmc/section4/pmc4.htm)
- [https://www.youtube.com/playlist?list=PL3N9eeOlCrP5cK0QRQxeJd6GrQvhAtpBK](https://www.youtube.com/playlist?list=PL3N9eeOlCrP5cK0QRQxeJd6GrQvhAtpBK)

Once you're done with this, you can expand your knowledge with the following (extremely detailed) resources. 

- [Eberly College of Science - Applied Time Series Analysis](https://online.stat.psu.edu/stat510/)
- [Statistical forecasting: Notes on regression and time series analysis](http://people.duke.edu/~rnau/411home.htm)
- [Modern Time Series Analysis](https://www.youtube.com/watch?v=v5ijNXvlC5A&t=9627s&ab_channel=Enthought)

Eventually, you can use this _very deep_ book as a reference:

- [Time Series Analysis and Its Applications](https://www.stat.pitt.edu/stoffer/tsa4/tsa4.pdf)

::: tip
Be sure to check the [The Matrix Profile](#The-Matrix-Profile) section, you won't be disappointed! 

This **extremely useful** method gives you invaluable insights about patterns in your times series data!
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

The textbook uses R examples throughout the lessons, but it's not mandatory to learn R to use it! 

The advice Virgilio gives you is to try to follow the lessons **translating** the R code to Python code, obviously helping you with Google and all the resources at your disposal!

In this way, you'll learn a lot about how to use Python for time series forecasting, and you'll have a lot of **reusable code** for your future projects!

Some other useful resources are:

- [Applying Statistical Modeling & Machine Learning to Perform Time-Series Forecasting](https://www.youtube.com/watch?v=JntA9XaTebs&t=6s&ab_channel=PyData)
- [A Worked Example of Using Neural Networks for Time Series Prediction](https://www.youtube.com/watch?v=hAlGqT3Xpus&ab_channel=PyData)
- [Reliably forecasting time-series in real-time ](https://www.youtube.com/watch?v=0zpg9ODE6Ww&ab_channel=PyData)
- [Time Series Forecasting using Statistical and Machine Learning Models](https://www.youtube.com/watch?v=_vQ0W_qXMxk&ab_channel=PyData)

::: tip
It's important to understand that no-one-method will always outperform others, and that time series forecasting is a hot research topic, and you should always try to be aware of new techniques or approaches! 

Be sure to read some survey papers, once a while, like [**this one**](https://arxiv.org/abs/2004.13408)!
:::

Check also the [**Prophet**](https://facebook.github.io/prophet/) project, from Facebook AI Labs!

Prophet is a procedure for forecasting time series data based on an additive model where non-linear trends are fit with yearly, weekly, and daily seasonality, plus holiday effects. 

It works best with time series that have strong seasonal effects and several seasons of historical data. 

Prophet is robust to missing data and shifts in the trend, and typically handles outliers well.

::: tip
Check also [NeuralProphet](https://github.com/ourownstory/neural_prophet), Neural Network based Time-Series model, inspired by Facebook Prophet and AR-Net, built on PyTorch.
:::

## Time Series Forecasting as a Classification Problem

A very useful approach to keep in mind when working with time series forecasting is to _treat the problem of forecasting as a classification problem._

If treated in this way, the problem can be "simplified" and so be faced with a simpler problem to solve.

For example, **preventing the exact price** of Apple shares tomorrow could be a very difficult challenge, but fortunately, it is a problem that can be _"simplified"_!

An effective way to simplify this problem is to divide the space of tomorrow's possible prices (in terms of % variation) into bins! 

For example with 20 bins, the classes would be: [-100%, -90%], [-90%,-80%]....the other bins...[+80%, +90%], [+90%,+100%].

**This type of multiclass classification can be simplified "at-will"**, even going so far as to classify whether tomorrow the price will be higher or lower than today (binary classification, _higher_ or _lower_).

If you think about it, if you struggle to get a decent model for the simplest (binary) classification, you don't have much hope to predict the _exact value_ of the shares the next day!

This brings us to the next section of the guide, where you will learn how to deal with time series classification problems.

To read more about this approach:

- [Forecasting vs Classification](https://stats.stackexchange.com/questions/178413/forecasting-vs-classification)
- [Forecasting to Classification: Predicting the direction of stock market price](https://www.researchgate.net/publication/309492895_Forecasting_to_Classification_Predicting_the_direction_of_stock_market_price_using_Xtreme_Gradient_Boosting)

## Time Series Classification

The problem of time series classification is of _primary importance_ in the world of data mining, and over the last two decades, countless methods have been proposed to solve it. 

Knowing how to predict the best choices in the near future is even vital in a variety of industrial scenarios or even _critical_ scenarios such as aircraft safety systems!

Some examples of time series classification problems are:

- Predict whether a machine might break or not
- predict whether a customer will leave a service or not
- classify the type of disease of a patient by the time series of his heartbeat
- classify an animal according to the sound it makes
- predict anomalies and trend changes in quantities measured by the sensors 
- and many more...

In this section of the guide, you can find a logical collection of all the resources that can be useful to take advantage of **the power of modern time series classification methods**.

First of all, the site you must ** refer to** to find all the latest _datasets, techniques, papers, and code_ that you can use to solve your time series classification problems:

> This website is an ongoing project to develop a comprehensive repository for research into time series classification. 

- [**Time Series Classification Website**](http://www.timeseriesclassification.com/)

For a complete comparison of all available useful methods and their tradeoffs, read:

- [The Great Time Series Classification Bakeoff: An Experimental Evaluation](https://www.researchgate.net/profile/Anthony_Bagnall/publication/301856632_The_Great_Time_Series_Classification_Bake_Off_An_Experimental_Evaluation_of_Recently_Proposed_Algorithms_Extended_Version/links/579b580e08ae80bf6ea33d12.pdf)
- [Deep learning for time series classification: a review](https://arxiv.org/pdf/1809.04356.pdf)

A very hot (and very recent) method that has been proposed and you should be aware of:

- [ROCKET: Exceptionally fast and accurate time series classification using random convolutional kernels](https://arxiv.org/abs/1910.13051)

Another extremely effective method that is always worth trying is that of the [matrix profile](#The-Matrix-Profile) (next section).

::: tip
Some methods are more precise, others are faster, others require less data, others can find complex relationships in the data (neural networks). 
**A fundamental point** is that _rarely_ it is worth choosing complex methods (such as a complicated recurrent neural network) over more "simple" ones, such as BOSS or DTW.
:::

Equipped with the methods considered here, it's almost guaranteed that you will find the perfect fit for the requirements of your problems.

## The Matrix Profile

From the [The UCR Matrix Profile Page](https://www.cs.ucr.edu/~eamonn/MatrixProfile.html) website:

The Matrix Profile (and the algorithms to compute it: STAMP, STAMPI, STOMP, SCRIMP, SCRIMP++, SWAMP, and GPU-STOMP), has the potential to **revolutionize time series data mining** because of its **generality, versatility, simplicity, and scalability**.  In particular, it has implications for:

- time series motif discovery
- time series joins
- shapelet discovery (classification)
- density estimation
- semantic segmentation
- visualization
- rule discovery
- clustering 

To learn how to use the Matrix Profile for your times series classification problems go through these _invaluable_ resources:

- [Time Series Data Mining Using the Matrix Profile: A Complete Tutorial](https://www.cs.ucr.edu/~eamonn/Matrix_Profile_Tutorial_Part1.pdf)
- [100 Time Series Data Mining Questions and Answers](https://www.cs.ucr.edu/~eamonn/100_Time_Series_Data_Mining_Questions__with_Answers.pdf)
- [The Matrix Profile - How Does It Work?](https://www.cs.ucr.edu/~eamonn/Matrix_Profile_Tutorial_Part2.pdf)

The recommended Python package that Virgilio suggests you to work with the Matrix Profile is [**Stumpy**](https://seanlaw.github.io/2019/05/13/stumpy/) (docs [here](https://stumpy.readthedocs.io/en/latest/Tutorial_STUMPY_Basics.html)), which implements the latest and most efficient methods to calculate the Matrix Profile for your time series. 

> The Author of the package ([Sean Law](@seanmylaw)) contributed to this guide too, reviewing it on GitHub and helping Virgilio collecting all the resources. You can find a lot of detailed tutorials about using Stumpy for the matrix profile on his [Medium Page](https://medium.com/@seanmylaw/stumpy-fdb9f8f1f261) or get in touch with him at his [LinkedIn Page](https://www.linkedin.com/in/seanlawphd/). In addition, he's very active in answering questions and giving tips about Tumpy in the ["Issues" section](https://github.com/TDAmeritrade/stumpy/issues?q=) of the GitHub project!

One of the (very many) advantages of the Matrix Profile is that you can calculate it _to feed it_ to a more traditional method of supervised classification. 

In this sense, the Matrix Profile is also a method of automatic features extraction!

Other useful links are:

- [Modern Time Series Analysis With STUMPY](https://www.youtube.com/watch?v=xLbPP5xNIJs&ab_channel=StitchFixMultithreaded)
- [Stumpy Tutorials on Binder](https://mybinder.org/v2/gh/TDAmeritrade/stumpy/master?filepath=notebooks)
- [Stumpy: unleashing the power of the matrix profile for time series analysis](https://notamonadtutorial.com/stumpy-unleashing-the-power-of-the-matrix-profile-for-time-series-analysis-7c46af040adb)

## Automatic Time Series Feature Extraction

The extraction and engineering of features from data is _fundamental_ in the Data Science process, and time series are no different.

On the contrary, historically they offer additional challenges and require some knowledge of [_signal theory_](https://zone.ni.com/reference/en-XX/help/372656C-01/lvasptconcepts/tsa_intro/) in order to be fully understood and exploited!

Luckily there are **extremely intelligent methods** to help you in this and extract the most important features automatically!

Say thanks to the creators of [**Tsfresh**](https://github.com/blue-yonder/tsfresh):

>**TSFRESH automatically extracts 100s of features from time series**. Those features describe basic characteristics of the time series such as the number of peaks, the average or maximal value, or more complex features such as the time-reversal symmetry statistic.

>The set of features can then be used to construct **machine learning models on the time series** to be used for example in regression or classification tasks.
>To avoid extracting irrelevant features, the TSFRESH package has a built-in filtering procedure. This filtering procedure **evaluates the explaining power and importance of each feature** for the regression or classification tasks at hand.

Important links:

- [Docs](https://tsfresh.readthedocs.io/en/latest/)
- [Gitter Community for Q&A](https://gitter.im/tsfresh/Lobby?utm_source=share-link&utm_medium=link&utm_campaign=share-link)


## Additional Resources

Check out these additional resources:

- [Time Series Topic - awesome-ai-ml-dl](https://github.com/neomatrix369/awesome-ai-ml-dl/blob/master/time-series_anomaly-detection/time-series.md#gaussian-process)
- [Understanding LSTM Networks](http://colah.github.io/posts/2015-08-Understanding-LSTMs/)
- [Visualizing memorization in RNNs](https://distill.pub/2019/memorization-in-rnns/)
- [Attention and Augmented Recurrent Neural Networks](https://distill.pub/2016/augmented-rnns/)


## Conclusions

This guide is long and detailed, and you can use it as a clear path in becoming **very proficient** when working with time series, or as a **reference** for important resource links to keep in mind. 

To become comfortable with the time series type of data will take commitment and dedication, in particular, it is highly recommended _to experiment with the methods_ proposed on datasets that you can find online, as well as _compose your dataset_ and work with it. 

Remember that only by facing _small real projects_ will you fix your theoretical knowledge acquired with the resources Virgilio provides you!

